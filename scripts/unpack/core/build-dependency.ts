import traverse, { NodePath } from "@babel/traverse"
import * as t from "@babel/types"
import * as template from "@babel/template"
import cliProgress from "cli-progress"

import { Module, ModuleKey, ModuleMap } from "./types"
import { getModuleByKey } from "./utils"

/**
 * 构建模块的依赖关系
 */
export function buildDependencies(modules: ModuleMap): void {
    console.log("building dependencies")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        function addImports(key: ModuleKey, name: string): void {
            if (
                /^__WEBPACK_IMPORTED_MODULE_[0-9]+_/.test(name) ||
                module.importsNameMap[key] == undefined
            ) {
                module.importsNameMap[key] = name
            }
            let importedModule: Module
            try {
                importedModule = getModuleByKey(modules, key)
            } catch (error) {
                return
            }
            module.dependency.add(importedModule)
            importedModule.reference.add(module)
            importedModule.isEntry = false
        }
        let importedModuleKey: ModuleKey | null = null
        traverse(module.AST, {
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (path.node.declarations.length != 1) {
                    return
                }
                if (path.node.leadingComments?.some(comment => comment.value.includes("harmony import"))) {
                    module.AST.program.sourceType = "module"
                }
                for (const declaration of path.get("declarations")) {
                    const localNameNodePath: NodePath = declaration.get("id")
                    if (!localNameNodePath.isIdentifier()) {
                        continue
                    }
                    if (localNameNodePath.node.name.endsWith("_default")) {
                        module.AST.program.sourceType = "module"
                    }
                    const localName: string = localNameNodePath.node.name
                    const init: NodePath<t.Node | null | undefined> = declaration.get("init")
                    if (!init.isCallExpression()) {
                        continue
                    }
                    if (
                        t.isMemberExpression(init.node.callee, { computed: false }) &&
                        t.isIdentifier(init.node.callee.object) &&
                        init.node.callee.object.name == module.args[2] &&
                        init.scope.getBinding(init.node.callee.object.name) == null &&
                        t.isIdentifier(init.node.callee.property, { name: "n" })
                    ) {
                        module.AST.program.sourceType = "module"
                        path.node.extra ??= {}
                        path.node.extra["isImport"] = true
                        path.node.extra["isImportDefault"] = true
                        path.node.extra["importedModuleKey"] = importedModuleKey
                    }
                    if (!(
                        t.isIdentifier(init.node.callee) &&
                        init.node.callee.name == module.args[2] &&
                        init.scope.getBinding(init.node.callee.name) == null
                    )) {
                        continue
                    }
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral() && !argument.isNumericLiteral()) {
                            continue
                        }
                        importedModuleKey = argument.node.value
                        let importedModule: Module
                        try {
                            importedModule = getModuleByKey(modules, importedModuleKey)
                        } catch (error) {
                            return
                        }
                        path.node.extra ??= {}
                        path.node.extra["isImport"] = true
                        path.node.extra["importedModuleKey"] = importedModuleKey
                        addImports(importedModuleKey, localName)
                        module.importsNameToModuleMap[localName] = importedModule
                    }
                }
            },
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (
                    callee.isIdentifier({ name: module.args[2] }) &&
                    callee.scope.getBinding(callee.node.name) == null
                ) {
                    const importedModuleKey: NodePath = path.get("arguments")[0]!
                    if (
                        !importedModuleKey.isNumericLiteral() &&
                        !importedModuleKey.isStringLiteral()
                    ) {
                        return
                    }
                    const { parentPath } = path
                    if (parentPath.parentPath?.isProgram()) {
                        const { node: parent } = parentPath
                        parent.extra ??= {}
                        parent.extra["isImport"] = true
                    }
                    addImports(importedModuleKey.node.value, "unnamed")
                } else if (
                    callee.isMemberExpression({ computed: false }) &&
                    t.isIdentifier(callee.node.property, { name: "then" })
                ) {
                    const args: NodePath[] = path.get("arguments")
                    if (args.length != 1) {
                        return
                    }
                    const bindCallNodePath: NodePath | undefined = args[0]
                    if (!bindCallNodePath?.isCallExpression()) {
                        return
                    }
                    const bindCallCalleeNodePath: NodePath = bindCallNodePath.get("callee")
                    const bindCallArgs: NodePath[] = bindCallNodePath.get("arguments")
                    const importedModuleKeyNodePath: NodePath | undefined = bindCallArgs[1]
                    if (!importedModuleKeyNodePath?.isStringLiteral() && !importedModuleKeyNodePath?.isNumericLiteral()) {
                        return
                    }
                    const importedModuleKey: ModuleKey = importedModuleKeyNodePath.node.value
                    if (!(
                        bindCallCalleeNodePath.isMemberExpression({ computed: false }) &&
                        (
                            (
                                t.isIdentifier(bindCallCalleeNodePath.node.object, {
                                    name: module.args[2]!
                                }) &&
                                bindCallCalleeNodePath.scope.getBinding(bindCallCalleeNodePath.node.object.name) == null
                            ) || (
                                t.isMemberExpression(bindCallCalleeNodePath.node.object, {
                                    computed: false
                                }) &&
                                t.isIdentifier(bindCallCalleeNodePath.node.object.object, {
                                    name: module.args[2]!
                                }) &&
                                bindCallCalleeNodePath.scope.getBinding(bindCallCalleeNodePath.node.object.object.name) == null &&
                                t.isIdentifier(bindCallCalleeNodePath.node.object.property, {
                                    name: "t"
                                })
                            )
                        ) &&
                        bindCallCalleeNodePath.get("property").isIdentifier({ name: "bind" })
                    )) {
                        return
                    }
                    addImports(importedModuleKey, "unnamed")
                }
            }
        })
        traverse(module.AST, {
            MemberExpression(path: NodePath<t.MemberExpression>): void {
                const object: NodePath<t.Expression> = path.get("object")
                const property: NodePath<t.PrivateName | t.Expression> = path.get("property")
                if (
                    path.isMemberExpression({ computed: false }) &&
                    object.isIdentifier({ name: module.args[1] }) &&
                    object.scope.getBinding(module.args[1]!) == null
                ) {
                    const statementPath = path.getStatementParent()
                    if (statementPath?.parentPath?.isProgram()) {
                        statementPath.node.extra ??= {}
                        statementPath.node.extra["isExport"] = true
                    }
                }
                if (!object.isIdentifier()) {
                    return
                }
                const localName: string = object.node.name
                const importedModule: Module | undefined = module.importsNameToModuleMap[localName]
                if (importedModule == undefined) {
                    return
                }
                if (!property.isStringLiteral()) {
                    return
                }
                const oldName: string = property.node.value
                const newName: string | undefined = property.node.trailingComments?.[0]?.value.trim()
                if (/^([a-z]|[A-Z]|_)([a-z]|[A-Z]|_|[0-9])*$/.test(newName ?? oldName)) {
                    property.replaceWith(t.identifier(newName ?? oldName))
                    path.node.computed = false
                }
                if (newName == undefined) {
                    return
                }
                importedModule.AST.program.sourceType = "module"
                property.node.trailingComments = []
                Object.defineProperty(importedModule.exportsNameMap, oldName, {
                    value: newName,
                    writable: true,
                    enumerable: true,
                    configurable: true
                })
            },
            ExpressionStatement(path: NodePath<t.ExpressionStatement>): void {
                const reexportCallNodePath: NodePath<t.Expression> = path.get("expression")
                if (!reexportCallNodePath.isCallExpression()) {
                    return
                }
                const calleeNodePath: NodePath = reexportCallNodePath.get("callee")
                const args: NodePath[] = reexportCallNodePath.get("arguments")
                if (!(
                    calleeNodePath.isMemberExpression({ computed: false }) &&
                    t.isIdentifier(calleeNodePath.node.object) &&
                    calleeNodePath.node.object.name == module.args[2] &&
                    calleeNodePath.scope.getBinding(calleeNodePath.node.object.name) == null &&
                    t.isIdentifier(calleeNodePath.node.property) &&
                    calleeNodePath.node.property.name == "d" &&
                    args[0]?.isIdentifier() &&
                    args[0].node.name == module.args[1] &&
                    args[0].scope.getBinding(args[0].node.name) == null
                )) {
                    return
                }
                path.node.extra ??= {}
                path.node.extra["isExport"] = true
                const exportedNameNodePath: NodePath = args[1]!
                exportedNameNodePath.assertStringLiteral()
                const exportedName: string = exportedNameNodePath.node.value
                const bindingFunctionNodePath: NodePath =  args[2]!
                bindingFunctionNodePath.assertFunctionExpression()
                const returnStatement: NodePath<t.Statement> = bindingFunctionNodePath.get("body.body")[0]!
                returnStatement.assertReturnStatement()
                module.AST.program.sourceType = "module"
                const localNodePath: NodePath<t.Expression | null | undefined> = returnStatement.get("argument")
                if (!localNodePath.isMemberExpression()) {
                    return
                }
                const localName: string = (localNodePath.node.object as t.Identifier).name
                const importedModule: Module | undefined = module.importsNameToModuleMap[localName]
                if (importedModule == undefined) {
                    return
                }
                const localItemNameNodePath: NodePath<t.Expression | t.PrivateName> = localNodePath.get("property")
                let localItemName: string = "unknown"
                if (localItemNameNodePath.isIdentifier()) {
                    localItemName = localItemNameNodePath.node.name
                } else if (localItemNameNodePath.isStringLiteral()) {
                    localItemName = localItemNameNodePath.node.value
                }
                module.AST.program.sourceType = "module"
                if (!Object.hasOwn(importedModule.exportsNameMap, localItemName)) {
                    Object.defineProperty(importedModule.exportsNameMap, localItemName, {
                        get(): string | undefined {
                            return module.exportsNameMap[exportedName]
                        },
                        set(value: string): void {
                            module.exportsNameMap[exportedName] = value
                            importedModule.AST.program.sourceType = "module"
                        },
                        configurable: true,
                        enumerable: true
                    })
                }
            },
            AssignmentExpression(path: NodePath<t.AssignmentExpression>): void {
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
                const statementPath = path.getStatementParent()
                if (statementPath?.parentPath?.isProgram()) {
                    statementPath.node.extra ??= {}
                    statementPath.node.extra["isExport"] = true
                }
            }
        })
        traverse(module.AST, {
            CallExpression(path: NodePath<t.CallExpression>): void {
                const calleePath: NodePath = path.get("callee")
                if (!calleePath.isMemberExpression({ computed: false })) {
                    return
                }
                const calleeObject = calleePath.get("object")
                const calleeProperty = calleePath.get("property")
                const args = path.get("arguments")
                if ((
                    calleeObject.isIdentifier({ name: module.args[2] }) &&
                    calleeObject.scope.getBinding(calleeObject.node.name) == null &&
                    calleeProperty.isIdentifier({ name: "r" })
                ) || (
                    module.AST.program.sourceType == "module" &&
                    calleeObject.isIdentifier({ name: "Object" }) &&
                    calleeProperty.isIdentifier({ name: "defineProperty" }) &&
                    args[0]?.isIdentifier({ name: module.args[1] }) &&
                    args[0].scope.getBinding(module.args[1]!) == null &&
                    args[1]?.isStringLiteral({ value: "__esModule" })
                )) {
                    if (module.AST.program.sourceType == "module") {
                        path.remove()
                    } else {
                        calleePath.replaceWith(DEFINE_ES_MODULE_TEMPLATE())
                    }
                }
            }
        })
        let exportedName: string | null = null
        let mapExpression: t.ObjectExpression | null = null
        for (const statement of module.AST.program.body) {
            if (!t.isVariableDeclaration(statement, { kind: "var" })) {
                continue
            }
            for (const declaration of statement.declarations) {
                if (!t.isVariableDeclarator(declaration)) {
                    continue
                }
                const { id, init } = declaration
                if (!t.isIdentifier(id) || !t.isObjectExpression(init)) {
                    continue
                }
                mapExpression = init
            }
        }
        for (const statement of module.AST.program.body) {
            if (!t.isExpressionStatement(statement)) {
                continue
            }
            const { expression } = statement
            if (!t.isAssignmentExpression(expression, { operator: "=" })) {
                continue
            }
            if (!t.isMemberExpression(expression.left, { computed: false })) {
                continue
            }
            const { object, property } = expression.left
            if (!t.isIdentifier(object, { name: module.args[0]! })) {
                continue
            }
            if (!t.isIdentifier(property, { name: "exports" })) {
                continue
            }
            if (t.isIdentifier(expression.right)) {
                exportedName = expression.right.name
            }
        }
        if (
            exportedName != null &&
            mapExpression != null &&
            ["keys", "resolve", "id"].every((key: string): boolean => {
                return module.AST.program.body.some((statement: t.Statement): boolean => {
                    return t.isExpressionStatement(statement) &&
                        t.isAssignmentExpression(statement.expression, { operator: "=" }) &&
                        t.isMemberExpression(statement.expression.left, { computed: false }) &&
                        t.isIdentifier(statement.expression.left.object, { name: exportedName }) &&
                        t.isIdentifier(statement.expression.left.property, { name: key })
                })
            })
        ) {
            for (const property of mapExpression.properties) {
                if (!t.isObjectProperty(property)) {
                    continue
                }
                if (!t.isStringLiteral(property.key)) {
                    continue
                }
                if (!t.isStringLiteral(property.value)) {
                    continue
                }
                addImports(property.value.value, property.key.value)
            }
        }
        bar.increment()
    }
    bar.stop()
}

const DEFINE_ES_MODULE_TEMPLATE = template.expression(`
    ${(function __defineESModule(exports: unknown): void {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        })
    }).toString()}
`)
