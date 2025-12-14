import traverse, { NodePath } from "@babel/traverse"
import * as t from "@babel/types"
import * as template from "@babel/template"
import cliProgress from "cli-progress"

import { ModuleMap, Module } from "./types"
import { getImportPath } from "./utils"

/**
 * 将模块的导出转换为 ESModule 或 CommonJS 格式，并根据模块导出映射替换导出名称
 */
export function transformExports(modules: ModuleMap): void {
    console.log("transforming exports")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        if (module.external != null && !module.moved) {
            bar.increment()
            continue
        }
        function replace(
            path: NodePath,
            exported: string,
            local: t.Expression,
            dynamic: boolean
        ): void {
            exported = module.exportsNameMap[exported] ?? exported
            if (typeof exported != "string") {
                exported = arguments[1]
            }
            const parentPath: NodePath = path.parentPath!
            let deepLocal: t.Expression = local
            while (
                t.isAssignmentExpression(deepLocal, { operator: "=" }) &&
                t.isMemberExpression(deepLocal.left) &&
                t.isIdentifier(deepLocal.left.object, { name: module.args[1] ?? "" })
            ) {
                deepLocal = deepLocal.right
            }
            if (module.AST.program.sourceType == "module") {
                parentPath.skip()
                let deepParentPath: NodePath = parentPath
                while (
                    deepParentPath.parentPath != null &&
                    !deepParentPath.parentPath.isProgram() &&
                    !deepParentPath.parentPath.isBlockStatement()
                ) {
                    deepParentPath = deepParentPath.parentPath
                }
                if (parentPath.parentPath?.isProgram() && exported == "default") {
                    parentPath.replaceWith(t.exportDefaultDeclaration(local))
                } else if (deepParentPath.parentPath?.isProgram()) {
                    let newLocal: t.Identifier
                    if (t.isIdentifier(local)) {
                        newLocal = local
                    } else {
                        newLocal = deepParentPath.parentPath.scope.generateUidIdentifier(exported)
                        deepParentPath.insertBefore(
                            t.variableDeclaration("var", [t.variableDeclarator(newLocal)])
                        )
                        path.replaceWith(t.assignmentExpression("=", newLocal, local))
                    }
                    deepParentPath.insertAfter(t.exportNamedDeclaration(
                        null,
                        [t.exportSpecifier(newLocal, t.identifier(exported))]
                    ))
                    if (newLocal == local) {
                        if (parentPath.parentPath?.isProgram()) {
                            parentPath.remove()
                        } else {
                            path.replaceWith(local)
                        }
                    }
                } else if (dynamic) {
                    path.replaceWith(DYNAMIC_EXPORT_TEMPLATE({
                        LOCAL: local,
                        EXPORTED: t.stringLiteral(exported)
                    }))
                } else {
                    path.replaceWith(t.assignmentExpression(
                        "=",
                        t.memberExpression(t.identifier("exports"), t.identifier(exported)),
                        local
                    ))
                }
            } else {
                path.skip()
                if (dynamic) {
                    path.replaceWith(DYNAMIC_EXPORT_TEMPLATE({
                        LOCAL: local,
                        EXPORTED: t.stringLiteral(exported)
                    }))
                } else {
                    path.replaceWith(t.assignmentExpression(
                        "=",
                        t.memberExpression(t.identifier("exports"), t.identifier(exported)),
                        local
                    ))
                }
            }
        }
        traverse(module.AST, {
            CallExpression(path: NodePath<t.CallExpression>): void {
                const calleePath: NodePath = path.get("callee")
                if (!calleePath.isMemberExpression({ computed: false })) {
                    return
                }
                const calleeObject = calleePath.get("object")
                const calleeProperty = calleePath.get("property")
                let exportVar, exportedName, exportedFunction
                if (
                    calleeObject.isIdentifier({ name: module.args[2] }) &&
                    calleeProperty.isIdentifier({ name: "d" })
                ) {
                    [exportVar, exportedName, exportedFunction] = path.get("arguments")
                } else {
                    return
                }
                if (exportVar == null) {
                    return
                }
                if (!exportedName?.isStringLiteral()) {
                    return
                }
                if (!exportedFunction?.isFunctionExpression()) {
                    return
                }
                const localName: NodePath<t.Expression | null | undefined> = exportedFunction.get("body.body")[0]!.get("argument")
                if (!exportVar?.isIdentifier({ name: module.args[1] })) {
                    path.replaceWith(t.callExpression(
                        t.memberExpression(t.identifier("Object"), t.identifier("defineProperty")),
                        [
                            exportVar.node,
                            exportedName.node,
                            t.objectExpression([t.objectProperty(
                                t.identifier("get"), exportedFunction.node
                            )])
                        ]
                    ))
                    return
                }
                if (localName.isMemberExpression()) {
                    const localModuleName: NodePath = localName.get("object")
                    if (!localModuleName.isIdentifier()) {
                        return
                    }
                    const localModule: string = localModuleName.node.name
                    const importedModule: Module | undefined = module.importsNameToModuleMap[localModule]
                    if (importedModule == undefined) {
                        return
                    }
                    const localItemNameNodePath: NodePath = localName.get("property")
                    let localItemName: string = "unknown"
                    if (localItemNameNodePath.isIdentifier()) {
                        localItemName = localItemNameNodePath.node.name
                    } else if (localItemNameNodePath.isStringLiteral()) {
                        localItemName = localItemNameNodePath.node.value
                    }
                    path.parentPath.replaceWith(t.exportNamedDeclaration(
                        null,
                        [t.exportSpecifier(
                            t.identifier(importedModule.exportsNameMap[localItemName] ?? localItemName),
                            t.identifier(module.exportsNameMap[exportedName.node.value] ?? exportedName.node.value)
                        )],
                        t.stringLiteral(getImportPath(module, importedModule))
                    ))
                } else if (localName.node != null) {
                    replace(path, exportedName.node.value, localName.node, true)
                }
            },
            AssignmentExpression(path: NodePath<t.AssignmentExpression>): void {
                if (module.AST.program.sourceType == "script") {
                    return
                }
                if (path.node.operator != "=") {
                    return
                }
                const memberExpression: NodePath = path.get("left")
                if (!(
                    memberExpression.isMemberExpression() &&
                    t.isIdentifier(memberExpression.node.object, { name: module.args[1]! }) &&
                    path.scope.getBinding(memberExpression.node.object.name) == null
                )) {
                    return
                }
                let exported: string | null = null
                const exportedName: NodePath = memberExpression.get("property")
                if (exportedName.isStringLiteral()) {
                    exported = exportedName.node.value
                }
                if (exportedName.isIdentifier()) {
                    exported = exportedName.node.name
                }
                if (exported == null) {
                    return
                }
                const local: NodePath<t.Expression> = path.get("right")
                replace(path, exported, local.node, false)
            },
            IfStatement(path: NodePath<t.IfStatement>): void {
                const test: NodePath<t.Expression> = path.get("test")
                if (!test.isCallExpression()) {
                    return
                }
                const callee: NodePath = test.get("callee")
                if (!callee.isMemberExpression({ computed: false })) {
                    return
                }
                const consequentPath: NodePath = path.get("consequent")
                if (!consequentPath.isBlockStatement()) {
                    return
                }
                if (
                    callee.get("object").isIdentifier({ name: module.args[2] }) &&
                    callee.scope.getBinding(module.args[2]!) == null &&
                    callee.get("property").isIdentifier({ name: "o" })
                ) {
                    if (test.get("arguments")[1]?.isStringLiteral({ value: "BrowserQRCodeReader" })) {
                        path.remove()
                    } else {
                        path.replaceWithMultiple(consequentPath.node.body)
                    }
                }
            },
            Identifier(identifierPath: NodePath<t.Identifier>): void {
                const { parentPath, node: identifier } = identifierPath
                if (
                    parentPath.isImportSpecifier() ||
                    parentPath.isExportSpecifier()
                ) {
                    return
                }
                if (
                    parentPath.isMemberExpression({ property: identifier, computed: false }) ||
                    parentPath.isObjectProperty({ key: identifier, computed: false }) ||
                    parentPath.isObjectMethod({ key: identifier, computed: false }) ||
                    parentPath.isClassProperty({ key: identifier, computed: false }) ||
                    parentPath.isClassMethod({ key: identifier, computed: false })
                ) {
                    return
                }
                if (
                    identifier.name == module.args[0] &&
                    identifierPath.scope.getBinding(identifier.name) == null
                ) {
                    identifier.name = "module"
                } else if (
                    identifier.name == module.args[1] &&
                    identifierPath.scope.getBinding(identifier.name) == null
                ) {
                    identifier.name = "exports"
                } else if (
                    identifier.name == module.args[2] &&
                    identifierPath.scope.getBinding(identifier.name) == null
                ) {
                    identifier.name = "require"
                }
            }
        })
        const { body } = module.AST.program
        if (
            module.AST.program.sourceType == "module" &&
            body.every((statement: t.Statement): boolean => {
                return !t.isExportDefaultDeclaration(statement)
            })
        ) {
            for (const statement of body) {
                if (
                    t.isExportNamedDeclaration(statement) &&
                    t.isExportSpecifier(statement.specifiers[0]) &&
                    t.isIdentifier(statement.specifiers[0].exported, { name: "a" })
                ) {
                    if (statement.source != null) {
                        break
                    }
                    body.push(t.exportDefaultDeclaration(statement.specifiers[0].local))
                    break
                }
            }
        }
        bar.increment()
    }
    bar.stop()
}

const DYNAMIC_EXPORT_TEMPLATE = template.expression(`
    Object.defineProperty(exports, EXPORTED, {
        get: function () {
            return LOCAL
        },
        enumerable: true
    })
`)
