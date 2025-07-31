import path from "path"
import { promises as fs } from "fs"
import { parse } from "@babel/parser"
import traverse, { NodePath } from "@babel/traverse"
import generate from "@babel/generator"
import * as t from "@babel/types"
import * as template from "@babel/template"
import PriorityQueue from "js-priority-queue"
import cliProgress from "cli-progress"

export interface UnpackConfig {
    entry: string[]
    externals: Externals
    output: {
        path: string
    }
    setPath: SetPath,
    publicPath?: string | null | undefined
    useESImport?: boolean | null | undefined
}

export interface External {
    searchPath: RegExp
    replace: string
}

export type Externals = External[]

export enum SetPath {
    NO = "NO",
    BY_IMPORT_NAME = "BY_IMPORT_NAME",
    BY_DEPENDENCY = "BY_DEPENDENCY"
}

export interface Module {
    key: ModuleKey
    path: string[]
    external?: string | null | undefined
    args: string[]
    AST: t.File
    isEntry: boolean
    hasJSX: boolean
    dependency: ModuleMap
    reference: ModuleMap
    importsNameMap: Record<ModuleKey, string>
    importsNameToModuleMap: Record<string, Module>
    exportsNameMap: Record<string, string>
}

export type ModuleKey = string | number

export type ModuleMap = Record<string, Module>

export async function unpack(config: UnpackConfig): Promise<void> {
    const modules: ModuleMap = {}
    for (const entryItem of config.entry) {
        Object.assign(modules, await loadModulesFromFile(entryItem))
    }
    unminimize(modules)
    buildModulesDependency(modules)
    switch (config.setPath) {
        case SetPath.BY_IMPORT_NAME:
            setModulesPathByImportName(modules)
            break
        case SetPath.BY_DEPENDENCY:
            setModulesPathByDependency(modules)
            break
    }
    const dirsPath: Set<string> = getAllDirsPath(modules)
    addIndexToModulesPath(modules, dirsPath)
    markExternals(modules, config.externals)
    transformModulesImport(modules, config)
    transformModulesExport(modules)
    await writeModules(config.output.path, modules)
}

async function loadModulesFromFile(filePath: string): Promise<ModuleMap> {
    console.log(`loading ${path.relative(process.cwd(), filePath)}`)
    const code: string = String(await fs.readFile(filePath))
    const AST: t.File = parse(code, { sourceType: "script" })
    const modules: ModuleMap = loadModulesFromAST(AST)
    console.log(`found ${Object.keys(modules).length} modules`)
    return modules
}

function loadModulesFromAST(AST?: t.Node | null | undefined): ModuleMap {
    if (t.isFile(AST)) {
        AST = AST.program
    }
    if (t.isProgram(AST)) {
        AST = AST.body[0]
    }
    if (t.isExpressionStatement(AST)) {
        AST = AST.expression
    }
    if (!t.isCallExpression(AST)) {
        throw new Error("No modules found!")
    }
    let modulesExpression: t.ObjectExpression | t.ArrayExpression | null = null
    let arg0: t.Node | null | undefined, arg1: t.Node | null | undefined
    [arg0, arg1] = AST.arguments
    if (t.isArrayExpression(arg0) && (arg0.elements.length == 2 || arg0.elements.length == 3)) {
        [arg0, arg1] = arg0.elements
    }
    if (t.isObjectExpression(arg0)) {
        modulesExpression = arg0
    }
    if (t.isObjectExpression(arg1) || t.isArrayExpression(arg1)) {
        modulesExpression = arg1
    }
    if (modulesExpression == null) {
        throw new Error("No modules found!")
    }
    const modules: ModuleMap = {}
    if (t.isObjectExpression(modulesExpression)) {
        for (const property of modulesExpression.properties) {
            t.assertObjectProperty(property)
            const { key: keyNode } = property
            let key: ModuleKey | null = null
            if (t.isIdentifier(keyNode)) {
                key = keyNode.name
            }
            if (t.isStringLiteral(keyNode) || t.isNumericLiteral(keyNode)) {
                key = keyNode.value
            }
            if (key == null) {
                throw new Error()
            }
            t.assertFunctionExpression(property.value)
            modules[key] = loadModuleFromModuleFunctionExpression(key, property.value)
        }
    } else {
        for (const [key, functionNode] of Object.entries(modulesExpression.elements)) {
            if (functionNode == null) {
                continue
            }
            t.assertFunctionExpression(functionNode)
            modules[key] = loadModuleFromModuleFunctionExpression(key, functionNode)
        }
    }
    if (Object.keys(modules).length == 0) {
        throw new Error("No modules found!")
    }
    return modules
}

function loadModuleFromModuleFunctionExpression(key: ModuleKey, node: t.FunctionExpression): Module {
    return {
        key,
        path: ["unnamed"],
        args: node.params.map((param: t.Node): string => (t.assertIdentifier(param), param.name)),
        AST: t.file(t.program(node.body.body, node.body.directives, "script")),
        isEntry: true,
        hasJSX: false,
        dependency: {},
        reference: {},
        importsNameMap: {},
        importsNameToModuleMap: {},
        exportsNameMap: {}
    }
}

function unminimize(modules: ModuleMap): void {
    console.log("unminimizing")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        traverse(module.AST, {
            ExpressionStatement(path: NodePath<t.ExpressionStatement>): void {
                const expression: t.Expression = path.node.expression
                switch (expression.type) {
                    case "SequenceExpression":
                        path.replaceWithMultiple(expression.expressions.map(t.expressionStatement))
                        break
                    case "ConditionalExpression":
                        path.replaceWith(t.ifStatement(
                            expression.test,
                            t.blockStatement([t.expressionStatement(expression.consequent)]),
                            t.blockStatement([t.expressionStatement(expression.alternate)])
                        ))
                        break
                    case "LogicalExpression":
                        switch (expression.operator) {
                            case "&&":
                                path.replaceWith(t.ifStatement(
                                    expression.left,
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                            case "||":
                                path.replaceWith(t.ifStatement(
                                    t.unaryExpression("!", expression.left),
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                            case "??":
                                path.replaceWith(t.ifStatement(
                                    t.logicalExpression(
                                        "||",
                                        t.binaryExpression("===", expression.left, t.nullLiteral()),
                                        t.binaryExpression("===", expression.left, t.identifier("undefined"))
                                    ),
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                        }
                        break
                }
            },
            ReturnStatement(path: NodePath<t.ReturnStatement>): void {
                const { argument } = path.node
                if (!t.isSequenceExpression(argument)) {
                    return
                }
                const { expressions } = argument
                path.replaceWithMultiple([
                    ...expressions.slice(0, -1).map(t.expressionStatement),
                    t.returnStatement(expressions.slice(-1)[0])
                ])
            },
            Statement(path: NodePath<t.Statement>): void {
                if (path.isBlockStatement()) {
                    return
                }
                if (
                    path.parent.type == "IfStatement" &&
                    path.type == "IfStatement" &&
                    path.node == path.parent.alternate
                ) {
                    return
                }
                if (![
                    "IfStatement",
                    "WhileStatement",
                    "ForStatement"
                ].includes(path.parent.type)) {
                    return
                }
                path.replaceWith(t.blockStatement([path.node]))
            },
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (!path.parentPath.isBlockStatement() && !path.parentPath.isProgram()) {
                    return
                }
                const { node } = path
                if (node.declarations.length == 1) {
                    return
                }
                path.replaceWithMultiple(node.declarations.map(
                    (declaration: t.VariableDeclarator): t.VariableDeclaration => {
                        return t.variableDeclaration(node.kind, [declaration])
                    }
                ))
            },
            VariableDeclarator(path: NodePath<t.VariableDeclarator>): void {
                const initPath: NodePath<t.Expression | null | undefined> = path.get("init")
                if (initPath.isSequenceExpression()) {
                    const { node: sequenceExpression } = initPath
                    const lastExpression: t.Expression | undefined = sequenceExpression.expressions.pop()
                    if (lastExpression == undefined) {
                        return
                    }
                    initPath.replaceWith(lastExpression)
                    path.parentPath.insertBefore(sequenceExpression.expressions.map(t.expressionStatement))
                }
            }
        })
        bar.increment()
    }
    bar.stop()
}

/**
 * 构建模块的依赖关系
 */
function buildModulesDependency(modules: ModuleMap): void {
    console.log("building dependencies of modules")
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
            module.dependency[key] = importedModule
            importedModule.reference[module.key] = module
            importedModule.isEntry = false
        }
        traverse(module.AST, {
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (path.node.declarations.length != 1) {
                    return
                }
                for (const declaration of path.get("declarations")) {
                    const localNameNodePath: NodePath = declaration.get("id")
                    if (!localNameNodePath.isIdentifier()) {
                        continue
                    }
                    if (localNameNodePath.node.name.endsWith("_default")) {
                        continue
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
                        t.isIdentifier(init.node.callee.property) &&
                        init.node.callee.property.name == "n"
                    ) {
                        module.AST.program.sourceType = "module"
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
                        const importedModuleKey: ModuleKey = argument.node.value
                        let importedModule: Module
                        try {
                            importedModule = getModuleByKey(modules, importedModuleKey)
                        } catch (error) {
                            return
                        }
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
                        t.isIdentifier(bindCallCalleeNodePath.node.object, {
                            name: module.args[2]!
                        }) &&
                        bindCallCalleeNodePath.scope.getBinding(bindCallCalleeNodePath.node.object.name) == null &&
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
                if (!object.isIdentifier()) {
                    return
                }
                const localName: string = object.node.name
                const importedModule: Module | undefined = module.importsNameToModuleMap[localName]
                if (importedModule == undefined) {
                    return
                }
                const property: NodePath<t.PrivateName | t.Expression> = path.get("property")
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
                if (!Object.hasOwn(importedModule.exportsNameMap, localItemName)) {
                    Object.defineProperty(importedModule.exportsNameMap, localItemName, {
                        get(): string | undefined {
                            return module.exportsNameMap[exportedName]
                        },
                        set(value: string): void {
                            module.exportsNameMap[exportedName] = value
                        },
                        configurable: true,
                        enumerable: true
                    })
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

function setModulesPathByImportName(modules: ModuleMap): void {
    console.log("setting paths of modules")
    const entryModules: Module[] = Object.values(modules).filter(
        (module: Module): boolean => module.isEntry
    )
    for (const module of entryModules) {
        module.path = ["index"]
    }
    const queue = new PriorityQueue<Module>({
        comparator(a: Module, b: Module): number {
            return a.path.length - b.path.length
        },
        initialValues: entryModules
    })
    const visited: Record<ModuleKey, number> = {}
    while (queue.length > 0) {
        const module = queue.dequeue()
        for (const [key, name] of Object.entries(module.importsNameMap)) {
            const importedModule: Module = getModuleByKey(modules, key)
            if (/^__WEBPACK_IMPORTED_MODULE_[0-9]+_(?!_)/.test(name)) {
                if ((visited[key] ?? 0) >= 3) {
                    continue
                }
                importedModule.path = getModulePathFromImportName(name)
                visited[key] = 3
            } else if (/^__WEBPACK_IMPORTED_MODULE_[0-9]+__/.test(name)) {
                if ((visited[key] ?? 0) >= 2) {
                    continue
                }
                importedModule.path = [
                    ...module.path.slice(0, -1),
                    ...getModulePathFromImportName(name)
                ]
                visited[key] = 2
            } else {
                if ((visited[key] ?? 0) >= 1) {
                    continue
                }
                importedModule.path = [
                    ...module.path.slice(0, -1),
                    ...getModulePathFromImportName(name)
                ]
                visited[key] = 1
            }
            queue.queue(importedModule)
        }
    }
    for (const [key, module] of Object.entries(modules)) {
        module.path.push(module.path.pop() + "-" + String(key).replace(/\//g, "_"))
    }
}

function getModulePathFromImportName(importName: string): string[] {
    return importName
        .replace(/_js__/, "")
        .replace(/_module_css__/, ".module.css")
        .replace(/^__WEBPACK_IMPORTED_MODULE_[0-9]+_/, "")
        .split("_")
        .filter(Boolean)
}

function setModulesPathByDependency(modules: ModuleMap): void {
    console.log("setting paths of modules")
    const entryModules: Module[] = Object.values(modules).filter(
        (module: Module): boolean => module.isEntry
    )
    for (const module of entryModules) {
        module.path = [String(module.key).replace(/\//g, "")]
    }
    const queue = new PriorityQueue<Module>({
        comparator(a: Module, b: Module): number {
            return a.path.length - b.path.length
        },
        initialValues: entryModules
    })
    const visited: Record<ModuleKey, boolean> = {}
    while (queue.length > 0) {
        const module = queue.dequeue()
        for (const [key, importedModule] of Object.entries(module.dependency)) {
            if (visited[key]) {
                continue
            }
            visited[key] = true
            importedModule.path = [...module.path, String(importedModule.key).replace(/\//g, "")]
            queue.queue(importedModule)
        }
    }
}

/**
 * 获取所有的文件夹路径，用于后续判断模块路径是否省略的 index
 */
function getAllDirsPath(modules: ModuleMap): Set<string> {
    console.log("getting all paths of dirs")
    const result = new Set<string>()
    for (const module of Object.values(modules)) {
        const path: string[] = module.path.slice(0)
        while (path.pop() != undefined) {
            result.add(path.join("/"))
        }
    }
    return result
}

/**
 * 补上模块路径中省略的的 index
 */
function addIndexToModulesPath(modules: ModuleMap, dirsPath: Set<string>): void {
    console.log("adding index to paths of modules")
    for (const module of Object.values(modules)) {
        if (dirsPath.has(module.path.join("/"))) {
            module.path.push("index")
        }
    }
}

/**
 * 标记第三方模块
 */
function markExternals(modules: ModuleMap, externals: Externals): void {
    console.log("marking externals")
    for (const { searchPath, replace } of externals) {
        for (const module of Object.values(modules)) {
            let path: string =  module.path.join("/")
            if (path.endsWith("-" + String(module.key).replace(/\//g, "_"))) {
                path = path.slice(0, -String(module.key).length - 1)
            }
            if (searchPath.test(path)) {
                module.external = path.replace(searchPath, replace)
                for (const importedModule of Object.values(module.dependency)) {
                    recursiveMarkExternal(importedModule)
                }
            }
        }
    }
}

function recursiveMarkExternal(module: Module): void {
    if (module.external != null) {
        return
    }
    module.external = "external/" + module.path.join("/")
    for (const importedModule of Object.values(module.dependency)) {
        recursiveMarkExternal(importedModule)
    }
}

/**
 * 将模块的导入转换为 ESModule 或 CommonJS 格式，将它们链接到正确的位置，并构建导出映射
 */
function transformModulesImport(modules: ModuleMap, config: UnpackConfig): void {
    console.log("transforming imports of modules")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        let importedModuleKey: ModuleKey | null = null
        const defaultImportIdentifiers: t.Identifier[] = []
        traverse(module.AST, {
            // 静态导入
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (!(config.useESImport ?? true)) {
                    return
                }
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
                        t.isIdentifier(init.node.callee.property) &&
                        init.node.callee.property.name == "n"
                    ) {
                        isDefault = true
                    } else if (!(
                        t.isIdentifier(init.node.callee) &&
                        init.node.callee.name == module.args[2] &&
                        init.scope.getBinding(init.node.callee.name) == null
                    )) {
                        continue
                    }
                    path.skip()
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral() && !argument.isNumericLiteral()) {
                            continue
                        }
                        importedModuleKey = argument.node.value
                    }
                    if (importedModuleKey == null) {
                        continue
                    }
                    try {
                        const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                        const importPath: string = getImportPath(module, importedModule)
                        if (isDefault) {
                            path.replaceWith(t.importDeclaration(
                                [t.importDefaultSpecifier(localNameNodePath.node)],
                                t.stringLiteral(importPath)
                            ))
                            defaultImportIdentifiers.push(localNameNodePath.node)
                        } else if (module.AST.program.sourceType == "module") {
                            path.replaceWith(t.importDeclaration(
                                [t.importNamespaceSpecifier(localNameNodePath.node)],
                                t.stringLiteral(importPath)
                            ))
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
                        const importedModuleKeyNodePath: NodePath = path.get("arguments")[0]!
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
                        path.replaceWith(t.callExpression(
                            t.memberExpression(t.identifier("Promise"), t.identifier("reject")),
                            [t.newExpression(
                                t.identifier("Error"),
                                [t.stringLiteral(error instanceof Error ? error.message : JSON.stringify(error))]
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
                    memberExpressionPath.replaceWith(RequireDefaultTemplate())
                } else if (propertyPath.isIdentifier({ name: "p" })) {
                    memberExpressionPath.replaceWith(
                        config.publicPath == null ?
                        PublicPathTemplate() :
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

const PublicPathTemplate: (arg?: template.PublicReplacements) => t.Expression = template.expression(`
    location.origin + location.pathname + "/"
`)
const RequireDefaultTemplate: (arg?: template.PublicReplacements) => t.Expression = template.expression(`
    ${((module: { __esModule?: boolean, default?: unknown }): unknown => {
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

/**
 * 将模块的导出转换为 ESModule 或 CommonJS 格式，并根据模块导出映射替换导出名称
 */
function transformModulesExport(modules: ModuleMap): void {
    console.log("transforming exports of modules")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        function replace(
            path: NodePath,
            exported: string,
            local: t.Expression
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
                } else {
                    path.replaceWith(t.assignmentExpression(
                        "=",
                        t.memberExpression(t.identifier("exports"), t.identifier(exported)),
                        local
                    ))
                }
            } else {
                path.skip()
                path.replaceWith(t.assignmentExpression(
                    "=",
                    t.memberExpression(t.identifier("exports"), t.identifier(exported)),
                    local
                ))
            }
        }
        traverse(module.AST, {
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (!callee.isMemberExpression({ computed: false })) {
                    return
                }
                const calleeObject: NodePath = callee.get("object")
                const calleeProperty: NodePath = callee.get("property")
                if (
                    calleeObject.isIdentifier({ name: module.args[2] }) &&
                    calleeObject.scope.getBinding(calleeObject.node.name) == null &&
                    calleeProperty.isIdentifier({ name: "r" })
                ) {
                    path.remove()
                    return
                }
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
                if (localName.isIdentifier()) {
                    replace(path, exportedName.node.value, localName.node)
                } else if (localName.isMemberExpression()) {
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
                replace(path, exported, local.node)
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
                const consequent: NodePath = path.get("consequent")
                if (!consequent.isBlockStatement()) {
                    return
                }
                if (
                    callee.get("object").isIdentifier({ name: module.args[2] }) &&
                    callee.scope.getBinding(module.args[2]!) == null &&
                    callee.get("property").isIdentifier({ name: "o" })
                ) {
                    path.replaceWithMultiple(consequent.node.body)
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

/**
 * 获取导入路径
 */
function getImportPath(context: Module, imported: Module): string {
    if (imported.external != null) {
        return imported.external
    }
    const contextPath: string[] = context.path.slice()
    const importedPath: string[] = imported.path.slice()
    let last: string | undefined = undefined
    while (contextPath.length > 0 && importedPath.length > 0 && contextPath.shift() == (last = importedPath.shift())) {}
    let rootPath: string
    if (contextPath.length == 0) {
        rootPath = "./"
    } else {
        rootPath = "../".repeat(contextPath.length)
    }
    if (last != undefined) {
        importedPath.unshift(last)
    }
    return rootPath + importedPath.join("/")
}

async function writeModules(basePath: string, modules: ModuleMap): Promise<void> {
    console.log(`writing modules to ${path.relative(process.cwd(), basePath)}`)
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    try {
        await fs.rm(basePath, { recursive: true })
    } catch (error) {
        if (!(
            error != null &&
            typeof error == "object" &&
            "code" in error &&
            error.code == "ENOENT"
        )) {
            throw error
        }
    }
    const promises: Promise<void>[] = []
    for (const module of Object.values(modules)) {
        if (module.external != null) {
            bar.increment()
            continue
        }
        promises.push((async (): Promise<void> => {
            let filePath: string = path.resolve(basePath, ...module.path)
            filePath += ".ts"
            await fs.mkdir(path.dirname(filePath), { recursive: true })
            await fs.writeFile(filePath, generate(module.AST).code)
            bar.increment()
        })())
    }
    await Promise.all(promises)
    bar.stop()
}

function getModuleByKey(modules: ModuleMap, key: ModuleKey): Module {
    const module: Module | undefined = modules[key]
    if (module == undefined) {
        throw new Error(`module (key: ${key}) not found!`)
    }
    return module
}
