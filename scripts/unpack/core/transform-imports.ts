import traverse, { NodePath } from "@babel/traverse"
import * as t from "@babel/types"
import * as template from "@babel/template"
import cliProgress from "cli-progress"

import { UnpackConfig, ModuleMap, ModuleKey, Module } from "./types"
import { getModuleByKey, getImportPath } from "./utils"

/**
 * 将模块的导入转换为 ESModule 或 CommonJS 格式，将它们链接到正确的位置，并构建导出映射
 */
export function transformImports(modules: ModuleMap, config: UnpackConfig): void {
    console.log("transforming imports")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        if (module.external != null && !module.moved) {
            bar.increment()
            continue
        }
        const defaultImportIdentifiers: t.Identifier[] = []
        traverse(module.AST, {
            // 静态导入
            VariableDeclaration(path): void {
                if (!path.parentPath.isProgram() || path.node.declarations.length != 1) {
                    return
                }
                for (const declaration of path.get("declarations")) {
                    const localNameNodePath: NodePath = declaration.get("id")
                    if (!localNameNodePath.isIdentifier()) {
                        continue
                    }
                    const init: NodePath<t.Node | null | undefined> = declaration.get("init")
                    if (!init.isCallExpression()) {
                        continue
                    }
                    let isDefault: boolean = false
                    if (
                        t.isMemberExpression(init.node.callee, { computed: false }) &&
                        t.isIdentifier(init.node.callee.object) &&
                        init.node.callee.object.name == module.args[2] &&
                        init.scope.getBinding(init.node.callee.object.name) == null &&
                        t.isIdentifier(init.node.callee.property, { name: "n" })
                    ) {
                        if (!(config.useESImport ?? true)) {
                            continue
                        }
                        isDefault = true
                    } else if (!(
                        t.isIdentifier(init.node.callee) &&
                        init.node.callee.name == module.args[2] &&
                        init.scope.getBinding(init.node.callee.name) == null
                    )) {
                        continue
                    }
                    path.skip()
                    let importedModuleKey: ModuleKey | null = null
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral() && !argument.isNumericLiteral()) {
                            continue
                        }
                        importedModuleKey = argument.node.value
                    }
                    importedModuleKey ??= path.node.extra?.["importedModuleKey"] as ModuleKey
                    if (importedModuleKey == null) {
                        continue
                    }
                    try {
                        const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                        const importPath: string = getImportPath(module, importedModule)
                        if (!isDefault) {
                            const { scope } = localNameNodePath
                            const { referencePaths } = scope.getBinding(localNameNodePath.node.name) ?? {}
                            for (const referencePath of referencePaths ?? []) {
                                const { parentPath } = referencePath
                                if (!parentPath?.isMemberExpression({ computed: false })) {
                                    continue
                                }
                                const propertyPath = parentPath.get("property")
                                if (!propertyPath.isIdentifier()) {
                                    continue
                                }
                                const propertyName = propertyPath.node.name
                                const newName = importedModule.exportsNameMap[propertyName]
                                if (newName == undefined) {
                                    continue
                                }
                                propertyPath.replaceWith(t.identifier(newName))
                            }
                        }
                        if (isDefault) {
                            path.replaceWith(t.importDeclaration(
                                [t.importDefaultSpecifier(localNameNodePath.node)],
                                t.stringLiteral(importPath)
                            ))
                            defaultImportIdentifiers.push(localNameNodePath.node)
                        } else if (module.AST.program.sourceType == "module") {
                            if (config.useESImport ?? true) {
                                if (importedModule.namedImport) {
                                    let needsNamespaceImport = false
                                    const importsName = new Set<string>()
                                    const { scope } = localNameNodePath
                                    const { referencePaths } = scope.getBinding(localNameNodePath.node.name) ?? {}
                                    for (const referencePath of referencePaths ?? []) {
                                        if (referencePath.node == localNameNodePath.node) {
                                            continue
                                        }
                                        const { parentPath } = referencePath
                                        if (!parentPath?.isMemberExpression({ computed: false })) {
                                            needsNamespaceImport = true
                                            continue
                                        }
                                        const propertyPath = parentPath.get("property")
                                        if (!propertyPath.isIdentifier()) {
                                            needsNamespaceImport = true
                                            continue
                                        }
                                        importsName.add(propertyPath.node.name)
                                        parentPath.replaceWith(propertyPath)
                                    }
                                    path.replaceWith(t.importDeclaration(
                                        Array.from(importsName).map((name) => t.importSpecifier(
                                            t.identifier(name), t.identifier(name)
                                        )),
                                        t.stringLiteral(importPath)
                                    ))
                                    if (needsNamespaceImport) {
                                        path.insertAfter(t.importDeclaration(
                                            [t.importNamespaceSpecifier(localNameNodePath.node)],
                                            t.stringLiteral(importPath)
                                        ))
                                    }
                                } else {
                                    path.replaceWith(t.importDeclaration(
                                        [t.importNamespaceSpecifier(localNameNodePath.node)],
                                        t.stringLiteral(importPath)
                                    ))
                                }
                            } else {
                                path.replaceWith(t.tsImportEqualsDeclaration(
                                    localNameNodePath.node,
                                    t.tsExternalModuleReference(t.stringLiteral(importPath))
                                ))
                            }
                        } else {
                            path.replaceWith(
                                t.variableDeclaration(
                                    "var",
                                    [t.variableDeclarator(
                                        localNameNodePath.node,
                                        t.callExpression(
                                            t.identifier("require"),
                                            [t.stringLiteral(importPath)]
                                        )
                                    )]
                                )
                            )
                        }
                    } catch (error) {
                        path.replaceWith(t.throwStatement(t.newExpression(
                            t.identifier("Error"),
                            [t.stringLiteral(error instanceof Error ? error.message : JSON.stringify(error))]
                        )))
                    }
                }
            },
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (
                    callee.isIdentifier({ name: module.args[2] }) &&
                    callee.scope.getBinding(callee.node.name) == null
                ) {
                    // CommonJS 导入
                    try {
                        const importedModuleKeyNodePath = path.get("arguments")[0]!
                        if (
                            !importedModuleKeyNodePath.isNumericLiteral() &&
                            !importedModuleKeyNodePath.isStringLiteral()
                        ) {
                            return
                        }
                        const importedModuleKey: ModuleKey = importedModuleKeyNodePath.node.value
                        const importedModule: Module | undefined = getModuleByKey(modules, importedModuleKey)
                        const importPath: string = getImportPath(module, importedModule)
                        if (
                            (config.useESImport ?? true) &&
                            module.AST.program.sourceType == "module" &&
                            path.parentPath.parentPath?.isProgram()
                        ) {
                            path.parentPath.replaceWith(t.importDeclaration([], t.stringLiteral(importPath)))
                        } else {
                            path.replaceWith(t.callExpression(
                                t.identifier("require"),
                                [t.stringLiteral(importPath)]
                            ))
                        }
                    } catch (error) {
                        path.replaceWith(t.throwStatement(t.newExpression(
                            t.identifier("Error"),
                            [t.stringLiteral(error instanceof Error ? error.message : JSON.stringify(error))]
                        )))
                    }
                } else if (
                    callee.isMemberExpression({ computed: false }) &&
                    t.isIdentifier(callee.node.property, { name: "then" })
                ) {
                    // ESModule 动态导入
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
                    try {
                        const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                        path.replaceWith(t.callExpression(
                            t.import(),
                            [t.stringLiteral(getImportPath(module, importedModule))]
                        ))
                    } catch (error) {
                        const errorString = error instanceof Error ? error.message : JSON.stringify(error)
                        console.warn(errorString)
                        path.replaceWith(t.callExpression(
                            t.memberExpression(t.identifier("Promise"), t.identifier("reject")),
                            [t.newExpression(
                                t.identifier("Error"),
                                [t.stringLiteral(errorString)]
                            )]
                        ))
                    }
                }
            },
            MemberExpression(memberExpressionPath: NodePath<t.MemberExpression>): void {
                const objectPath: NodePath<t.Expression> = memberExpressionPath.get("object")
                const propertyPath: NodePath<t.PrivateName | t.Expression> = memberExpressionPath.get("property")
                if (
                    memberExpressionPath.node.computed ||
                    !objectPath.isIdentifier({ name: module.args[2] }) ||
                    (module.args[2] != undefined && objectPath.scope.getBinding(module.args[2]) != null)
                ) {
                    return
                }
                if (propertyPath.isIdentifier({ name: "n" })) {
                    memberExpressionPath.replaceWith(REQUIRE_DEFAULT_TEMPLATE())
                } else if (propertyPath.isIdentifier({ name: "p" })) {
                    memberExpressionPath.replaceWith(
                        config.publicPath == null ?
                        PUBLIC_PATH_TEMPLATE() :
                        t.stringLiteral(config.publicPath)
                    )
                }
            }
        })
        traverse(module.AST, {
            CallExpression(callExpressionPath: NodePath<t.CallExpression>): void {
                const calleePath: NodePath = callExpressionPath.get("callee")
                if (calleePath.isIdentifier() && defaultImportIdentifiers.includes(calleePath.scope.getBinding(calleePath.node.name)?.identifier ?? t.identifier(""))) {
                    callExpressionPath.replaceWith(calleePath)
                }
            },
            MemberExpression(memberExpressionPath: NodePath<t.MemberExpression>): void {
                const objectPath: NodePath<t.Expression> = memberExpressionPath.get("object")
                if (
                    objectPath.isIdentifier() &&
                    defaultImportIdentifiers.includes(objectPath.scope.getBinding(objectPath.node.name)?.identifier ?? t.identifier("")) &&
                    memberExpressionPath.get("property").isIdentifier({ name: "a" })
                ) {
                    memberExpressionPath.replaceWith(objectPath)
                }
            }
        })
        bar.increment()
    }
    bar.stop()
}

const PUBLIC_PATH_TEMPLATE: (arg?: template.PublicReplacements) => t.Expression = template.expression(`
    location.origin + location.pathname + "/"
`)
const REQUIRE_DEFAULT_TEMPLATE: (arg?: template.PublicReplacements) => t.Expression = template.expression(`
    ${(function __importDefault(module: { __esModule?: boolean, default?: unknown }): unknown {
        var defaultExport: () => unknown = module && module.__esModule ? function(): unknown {
            return module.default
        } : function(): unknown {
            return module
        }
        Object.defineProperty(defaultExport, "a", {
            enumerable: true,
            get: defaultExport
        })
        return defaultExport
    }).toString()}
`)
