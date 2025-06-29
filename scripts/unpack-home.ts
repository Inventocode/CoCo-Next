import path from "path"
import { promises as fs } from "fs"
import { parse } from "@babel/parser"
import traverse, { NodePath } from "@babel/traverse"
import generate from "@babel/generator"
import * as t from "@babel/types"
import PriorityQueue from "js-priority-queue"

interface Module {
    key: string
    path: string[]
    external?: string | null | undefined
    AST: t.File
    isEntry: boolean
    hasJSX: boolean
    dependency: Modules
    reference: Modules
    importsNameMap: Record<string, string>
    importsNameToModuleMap: Record<string, Module>
    exportsNameMap: Record<string, string>
}

type Modules = Record<string, Module>

type Externals = Map<RegExp, string>

async function main(): Promise<void> {
    const distPath: string = path.resolve("public", "creation.codemao.cn", "coco", "home", "dist")
    const modules: Modules = {}
    const externals: Externals = new Map([
        [/^react\/index$/, "react"],
        [/^react\/dom$/, "react-dom"],
        [/^react\/redux$/, "react-redux"],
        [/^react\/intl\/index$/, "react-intl"],
        [/^react\/draggable$/, "react-draggable"],
        [/^(.*\/)?react\/three\/fiber$/, "@react-three/fiber"],
        [/^react\/router(\/index)?$/, "react-router"],
        [/^react\/router\/dom$/, "react-router-dom"],
        [/^react\/loadable$/, "react-loadable"],
        [/^react\/css\/modules$/, "react-css-modules"],
        [/^lodash\//, "lodash/"],
        [/^(.*\/)?ant\/design\/icons\/.*$/, "@ant-design/icons"],
        [/^(.*\/)?ant\/design\/react\/.*$/, "@ant-design/react-slick"],
        [/^antd\/.*$/, "antd"],
        [/^(.*\/)?babel\/runtime\//, "@babel/runtime/"],
        [/^babel\/plugin\/react\/css\/modules\//, "babel-plugin-react-css-modules/"],
        [/^babel\/polyfill.*$/, "babel-polyfill"],
        [/^video\/react$/, "video-react"],
        [/^to\/camel\/case$/, "to-camel-case"],
        [/^sa\/sdk\/javascript$/, "sa-sdk-javascript"],
        [/^intl\/.*$/, "intl"],
        [/^axios$/, "axios"],
        [/^shortid$/, "shortid"],
        [/^redux\/index$/, "redux"],
        [/^redux\/actions$/, "redux-actions"],
        [/^redux\/saga\/index$/, "redux-saga/effects"],
        [/^redux\/saga\/effects$/, "redux-saga/effects"],
        [/^classnames$/, "classnames"],
        [/^build\/three\/module$/, "three"],
        [/^three\/examples/, "three/examples"],
        [/^invariant$/, "invariant"]
    ])
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "commons.45126324b4177c062c0e.js")
    ))
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "coco.e05e13740860acc49eec.js")
    ))
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "work.f8567516d16b8c00ab38.js")
    ))
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "1.035cad6653e8655c2224.js")
    ))
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "2.33ab4423f02dd74059fb.js")
    ))
    buildModulesDependency(modules)
    setModulesPath(modules)
    const dirsPath: Set<string> = getAllDirsPath(modules)
    addIndexToModulesPath(modules, dirsPath)
    markExternals(modules, externals)
    transformModulesImport(modules)
    transformModulesExport(modules)
    await writeModules(path.resolve("unrestored", "home"), modules)
}

async function loadModulesFromFile(filePath: string): Promise<Modules> {
    console.log(`loading ${path.relative(process.cwd(), filePath)}`)
    const code: string = String(await fs.readFile(filePath))
    const AST: t.File = parse(code, { sourceType: "script" })
    return loadModulesFromAST(AST)
}

function loadModulesFromAST(AST: t.Node): Modules {
    const modules: Modules = {}
    traverse(AST, {
        ObjectProperty(path: NodePath<t.ObjectProperty>): void {
            const key: NodePath = path.get("key")
            if (!key.isStringLiteral() && !key.isNumericLiteral()) {
                return
            }
            const value: NodePath = path.get("value")
            if (!value.isFunctionExpression()) {
                return
            }
            if (!/^module,(__webpack_exports__|exports)(,__webpack_require__)?$/.test(
                value.node.params.map((param: t.Node): string => {
                    return param.type == "Identifier" ? param.name : ""
                }).join(",")
            )) {
                return
            }
            modules[String(key.node.value)] = loadModuleFromNodePath(String(key.node.value), value.get("body"))
        }
    })
    return modules
}

function loadModuleFromNodePath(key: string, path: NodePath<t.BlockStatement>): Module {
    key = key.replace(/\\|\//g, "_")
    return {
        key,
        path: ["unnamed"],
        AST: t.file(t.program(path.node.body, path.node.directives, "module")),
        isEntry: true,
        hasJSX: false,
        dependency: {},
        reference: {},
        importsNameMap: {},
        importsNameToModuleMap: {},
        exportsNameMap: {}
    }
}

/**
 * 构建模块的依赖关系
 */
function buildModulesDependency(modules: Modules): void {
    console.log("building dependencies of modules")
    for (const module of Object.values(modules)) {
        function addImports(key: string, name: string): void {
            if (
                /^__WEBPACK_IMPORTED_MODULE_[0-9]+_/.test(name) ||
                module.importsNameMap[key] == undefined
            ) {
                module.importsNameMap[key] = name
            }
            const importedModule: Module | undefined = getModuleByKey(modules, key)
            module.dependency[key] = importedModule
            importedModule.reference[module.key] = module
            importedModule.isEntry = false
        }
        traverse(module.AST, {
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (!path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " harmony import "
                })) {
                    return
                }
                for (const declaration of path.get("declarations")) {
                    const localNameNodePath: NodePath = declaration.get("id")
                    localNameNodePath.assertIdentifier()
                    if (localNameNodePath.node.name.endsWith("_default")) {
                        continue
                    }
                    const localName: string = localNameNodePath.node.name
                    const init: NodePath<t.Node | null | undefined> = declaration.get("init")
                    init.assertCallExpression()
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral()) {
                            continue
                        }
                        const importedModuleKey: string = argument.node.value
                        addImports(importedModuleKey, localName)
                        const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                        traverse(module.AST, {
                            MemberExpression(path: NodePath<t.MemberExpression>): void {
                                if (!path.get("object").isIdentifier({
                                    name: localName
                                })) {
                                    return
                                }
                                const property: NodePath<t.PrivateName | t.Expression> = path.get("property")
                                if (!property.isStringLiteral()) {
                                    return
                                }
                                const oldName: string = property.node.value
                                const newName: string | undefined = property.node.trailingComments?.[0]?.value.trim()
                                property.replaceWith(t.identifier(newName ?? oldName))
                                path.node.computed = false
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
                                if (!path.node.leadingComments?.some((comment: t.Comment): boolean => {
                                    return [
                                        " harmony reexport (binding) ",
                                        " harmony namespace reexport (by used) "
                                    ].includes(comment.value)
                                })) {
                                    return
                                }
                                const reexportCallNodePath: NodePath<t.Expression> = path.get("expression")
                                reexportCallNodePath.assertCallExpression()
                                const args: NodePath[] = reexportCallNodePath.get("arguments")
                                const exportedNameNodePath: NodePath = args[1]!
                                exportedNameNodePath.assertStringLiteral()
                                const exportedName: string = exportedNameNodePath.node.value
                                const bindingFunctionNodePath: NodePath =  args[2]!
                                bindingFunctionNodePath.assertFunctionExpression()
                                const returnStatement: NodePath<t.Statement> = bindingFunctionNodePath.get("body.body")[0]!
                                returnStatement.assertReturnStatement()
                                const localNodePath: NodePath<t.Expression | null | undefined> = returnStatement.get("argument")
                                localNodePath.assertMemberExpression()
                                if ((localNodePath.node.object as t.Identifier).name != localName) {
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
                    }
                }
            },
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (!callee.isIdentifier({
                    name: "__webpack_require__"
                })) {
                    return
                }
                const importedModuleKey: NodePath = path.get("arguments")[0]!
                if (
                    !importedModuleKey.isNumericLiteral() &&
                    !importedModuleKey.isStringLiteral()
                ) {
                    return
                }
                addImports(String(importedModuleKey.node.value), "unnamed")
            }
        })
    }
}

function setModulesPath(modules: Modules): void {
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
    const visited: Record<string, number> = {}
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
}

function getModulePathFromImportName(importName: string): string[] {
    return importName
        .replace(/_js__/, "")
        .replace(/_module_css__/, ".module.css")
        .replace(/^__WEBPACK_IMPORTED_MODULE_[0-9]+_/, "")
        .split("_")
        .filter(Boolean)
}

/**
 * 获取所有的文件夹路径，用于后续判断模块路径是否省略的 index
 */
function getAllDirsPath(modules: Modules): Set<string> {
    console.log("getting all paths of dirs")
    const result = new Set<string>()
    for (const module of Object.values(modules)) {
        const path: string[] = module.path.slice(0, -1)
        while (path.pop() != undefined) {
            result.add(path.join("/"))
        }
    }
    return result
}

/**
 * 补上模块路径中省略的的 index
 */
function addIndexToModulesPath(modules: Modules, dirsPath: Set<string>): void {
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
function markExternals(modules: Modules, externals: Externals): void {
    console.log("marking externals")
    for (const [externalTest, externalName] of externals.entries()) {
        for (const module of Object.values(modules)) {
            if (externalTest.test(module.path.join("/"))) {
                module.external = module.path.join("/").replace(externalTest, externalName)
                for (const importedModule of Object.values(module.dependency)) {
                    recursiveMarkExternal(importedModule)
                }
            }
        }
    }
    recursiveMarkExternal(modules["uslO"]!)
    const momentLocals: string[] = [
        "3CJN",
        "3MVc",
        "tkWw",
        "j8cJ",
        "wPpW",
        "dURR",
        "7OnE",
        "BEem",
        "eHwN",
        "3hfc",
        "lOED",
        "hng5",
        "aM0x",
        "1C9R",
        "w2Hs",
        "OSsP",
        "aqvp",
        "wIgY",
        "ssxj",
        "N3vo",
        "ZFGz",
        "YBA/",
        "DOkx",
        "8v14",
        "Frex",
        "rIuo",
        "CFqe",
        "Sjoy",
        "Tqun",
        "hPuz",
        "ALEw",
        "QZk1",
        "yJfC",
        "dyB6",
        "NYST",
        "Nd3h",
        "LT9G",
        "7MHZ",
        "USNP",
        "INcR",
        "XlWM",
        "sqLM",
        "2pmY",
        "nS2h",
        "rMbQ",
        "OVPi",
        "tzHd",
        "bXQP",
        "VK9h",
        "g7KF",
        "U5Iz",
        "nLOz",
        "FuaP",
        "VGQH",
        "+27R",
        "rtsW",
        "Nzt2",
        "ETHv",
        "V4qH",
        "xne+",
        "GrS7",
        "yRTJ",
        "upln",
        "FKXc",
        "/E8D",
        "ORgI",
        "JwiF",
        "RnJI",
        "j+vx",
        "5j66",
        "gEQe",
        "eBB/",
        "kI9l",
        "6cf8",
        "z3hR",
        "nE8X",
        "/6P1",
        "jxEH",
        "svD2",
        "gEU3",
        "Ab7C",
        "oo1B",
        "CqHt",
        "5vPg",
        "ooba",
        "G++c",
        "oCzW",
        "F+2e",
        "FlzV",
        "/mhn",
        "3K28",
        "Bp2f",
        "C7av",
        "KOFO",
        "pfs9",
        "7LV+",
        "ZoSI",
        "AoDM",
        "wT5f",
        "ulq9",
        "fW1y",
        "5Omq",
        "Lgqo",
        "OUMt",
        "2s1U",
        "V0td",
        "f4W3",
        "c1x4",
        "7Q8x",
        "Fpqq",
        "DSXN",
        "+7/x",
        "Nlnz",
        "gUgh",
        "5SNd",
        "XzD+",
        "+WRH",
        "3LKG",
        "m7yE",
        "k+5o",
        "iNtv",
        "FRPF",
        "krPU",
        "To0v",
        "ntHu",
        "uSe8",
        "XU1s",
        "/bsm",
        "0X8Q",
        "e/KL",
        "YXlc",
        "Vz2w",
        "ZUyn",
        "+WA1",
        "BbgG"
    ]
    for (const momentLocal of momentLocals) {
        recursiveMarkExternal(modules[momentLocal]!)
    }
}

function recursiveMarkExternal(module: Module): void {
    if (module.external != null) {
        return
    }
    module.external = "external/" + module.path.join("/") + "-" + module.key
    for (const importedModule of Object.values(module.dependency)) {
        recursiveMarkExternal(importedModule)
    }
}

/**
 * 将模块的导入转换为 ESModule 或 CommonJS 格式，将它们链接到正确的位置，并构建导出映射
 */
function transformModulesImport(modules: Modules): void {
    console.log("transforming imports of modules")
    for (const module of Object.values(modules)) {
        let importedModuleKey: string = ""
        traverse(module.AST, {
            // ESModule 导入
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (!path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " harmony import "
                })) {
                    return
                }
                path.skip()
                for (const declaration of path.get("declarations")) {
                    const localNameNodePath: NodePath = declaration.get("id")
                    localNameNodePath.assertIdentifier()
                    const localName: string = localNameNodePath.node.name
                    const init: NodePath<t.Node | null | undefined> = declaration.get("init")
                    init.assertCallExpression()
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral()) {
                            continue
                        }
                        importedModuleKey = argument.node.value
                    }
                    if (importedModuleKey == "") {
                        continue
                    }
                    const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                    const importPath: string = getImportPath(module, importedModule)
                    module.importsNameToModuleMap[localName] = importedModule
                    if (localName.endsWith("_default")) {
                        path.replaceWith(t.importDeclaration(
                            [t.importDefaultSpecifier(localNameNodePath.node)],
                            t.stringLiteral(importPath)
                        ))
                        traverse(module.AST, {
                            CallExpression(path: NodePath<t.CallExpression>): void {
                                if (path.get("callee").isIdentifier({
                                    name: localNameNodePath.node.name
                                })) {
                                    path.replaceWith(localNameNodePath.node)
                                }
                            },
                            MemberExpression(path: NodePath<t.MemberExpression>): void {
                                if (
                                    path.get("object").isIdentifier({
                                        name: localNameNodePath.node.name
                                    }) &&
                                    path.get("property").isIdentifier({
                                        name: "a"
                                    })
                                ) {
                                    path.replaceWith(localNameNodePath.node)
                                }
                            }
                        })
                    } else {
                        path.replaceWith(t.importDeclaration(
                            [t.importNamespaceSpecifier(localNameNodePath.node)],
                            t.stringLiteral(importPath)
                        ))
                    }
                }
            },
            // 动态导入
            MemberExpression(path: NodePath<t.MemberExpression>): void {
                if (path.node.trailingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " import() "
                })) {
                    const rootNodePath: NodePath = path!.parentPath!.parentPath!.parentPath!
                    rootNodePath.assertCallExpression()
                    const thenArgumentNodePath: NodePath = rootNodePath.get("arguments")[0]!
                    thenArgumentNodePath.assertCallExpression()
                    const importedModuleKeyNodePath: NodePath = thenArgumentNodePath.get("arguments")[1]!
                    importedModuleKeyNodePath.assertStringLiteral()
                    const importedModuleKey: string = importedModuleKeyNodePath.node.value
                    try {
                        const importedModule: Module = getModuleByKey(modules, importedModuleKey)
                        rootNodePath.replaceWith(t.callExpression(
                            t.import(),
                            [t.stringLiteral(getImportPath(module, importedModule))]
                        ))
                    } catch (error) {
                        rootNodePath.replaceWith(t.callExpression(
                            t.memberExpression(t.identifier("Promise"), t.identifier("reject")),
                            [t.stringLiteral(error instanceof Error ? error.message : JSON.stringify(error))]
                        ))
                    }
                }
            },
            // CommonJS 导入
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (!callee.isIdentifier({
                    name: "__webpack_require__"
                })) {
                    return
                }
                const importedModuleKeyNodePath: NodePath = path.get("arguments")[0]!
                if (
                    !importedModuleKeyNodePath.isNumericLiteral() &&
                    !importedModuleKeyNodePath.isStringLiteral()
                ) {
                    return
                }
                const importedModuleKey: string = String(importedModuleKeyNodePath.node.value)
                const importedModule: Module | undefined = getModuleByKey(modules, importedModuleKey)
                const importPath: string = getImportPath(module, importedModule)
                path.replaceWith(t.callExpression(
                    t.identifier("require"),
                    [t.stringLiteral(importPath)]
                ))
            }
        })
    }
}

/**
 * 将模块的导出转换为 ESModule 或 CommonJS 格式，并根据模块导出映射替换导出名称
 */
function transformModulesExport(modules: Modules): void {
    console.log("transforming exports of modules")
    for (const module of Object.values(modules)) {
        traverse(module.AST, {
            ExpressionStatement(path: NodePath<t.ExpressionStatement>): void {
                let exported: string | null = null
                let local: string | t.Expression | null = null
                if (path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " harmony export (binding) "
                })) {
                    const callExpression: NodePath<t.Expression> = path.get("expression")
                    callExpression.assertCallExpression()
                    const args: NodePath<t.Node>[] = callExpression.get("arguments")
                    const exportedName: NodePath<t.Node> = args[1]!
                    const exportedFunction: NodePath<t.Node> = args[2]!
                    exportedName.assertStringLiteral()
                    exportedFunction.assertFunctionExpression()
                    const localName: NodePath<t.Expression | null | undefined> = exportedFunction.get("body.body")[0]!.get("argument")
                    localName.assertIdentifier()
                    exported = exportedName.node.value
                    local = localName.node.name
                } else if (path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " harmony default export "
                })) {
                    const assignmentExpression: NodePath<t.Expression> = path.get("expression")
                    assignmentExpression.assertAssignmentExpression()
                    const memberExpression: NodePath<t.OptionalMemberExpression | t.LVal> = assignmentExpression.get("left")
                    memberExpression.assertMemberExpression()
                    const exportedName: NodePath<t.Expression | t.PrivateName> = memberExpression.get("property")
                    exportedName.assertStringLiteral()
                    const localPath: NodePath<t.Expression> = assignmentExpression.get("right")
                    exported = "default"
                    local = localPath.node
                } else if (path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return comment.value == " harmony export (immutable) "
                })) {
                    const assignmentExpression: NodePath<t.Expression> = path.get("expression")
                    assignmentExpression.assertAssignmentExpression()
                    const memberExpression: NodePath<t.OptionalMemberExpression | t.LVal> = assignmentExpression.get("left")
                    memberExpression.assertMemberExpression()
                    const exportedName: NodePath<t.Expression | t.PrivateName> = memberExpression.get("property")
                    exportedName.assertStringLiteral()
                    const localName: NodePath<t.Expression> = assignmentExpression.get("right")
                    localName.assertIdentifier()
                    exported = exportedName.node.value
                    local = localName.node.name
                } else if (path.node.leadingComments?.some((comment: t.Comment): boolean => {
                    return [
                        " harmony reexport (binding) ",
                        " harmony namespace reexport (by used) "
                    ].includes(comment.value)
                })) {
                    const reexportCallNodePath: NodePath<t.Expression> = path.get("expression")
                    reexportCallNodePath.assertCallExpression()
                    const args: NodePath[] = reexportCallNodePath.get("arguments")
                    const exportedNameNodePath: NodePath = args[1]!
                    exportedNameNodePath.assertStringLiteral()
                    const exportedName: string = exportedNameNodePath.node.value
                    const bindingFunctionNodePath: NodePath =  args[2]!
                    bindingFunctionNodePath.assertFunctionExpression()
                    const returnStatement: NodePath<t.Statement> = bindingFunctionNodePath.get("body.body")[0]!
                    returnStatement.assertReturnStatement()
                    const localNodePath: NodePath<t.Expression | null | undefined> = returnStatement.get("argument")
                    localNodePath.assertMemberExpression()
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
                    path.replaceWith(t.exportNamedDeclaration(
                        null,
                        [t.exportSpecifier(
                            t.identifier(importedModule.exportsNameMap[localItemName] ?? localItemName),
                            t.identifier(module.exportsNameMap[exportedName] ?? exportedName)
                        )],
                        t.stringLiteral(getImportPath(module, importedModule))
                    ))
                    return
                }
                if (exported != null && local != null) {
                    exported = module.exportsNameMap[exported] ?? exported
                    if (exported == "default") {
                        path.replaceWith(t.exportDefaultDeclaration(
                            typeof local == "string" ? t.identifier(local) : local
                        ))
                    } else {
                        path.replaceWith(t.exportNamedDeclaration(
                            null,
                            [t.exportSpecifier(t.identifier(local as string), t.identifier(exported))]
                        ))
                    }
                }
            }
        })
    }
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
    return rootPath + importedPath.join("/") + "-" + imported.key
}

async function writeModules(basePath: string, modules: Modules): Promise<void> {
    console.log(`writing modules to ${path.relative(process.cwd(), basePath)}`)
    await fs.rm(basePath, { recursive: true })
    const promises: Promise<void>[] = []
    for (const module of Object.values(modules)) {
        if (module.external != null) {
            continue
        }
        promises.push((async (): Promise<void> => {
            let filePath: string = path.resolve(basePath, ...module.path)
            filePath += "-" + module.key + ".ts"
            await fs.mkdir(path.dirname(filePath), { recursive: true })
            await fs.writeFile(filePath, generate(module.AST).code)
        })())
    }
    await Promise.all(promises)
}

function getModuleByKey(modules: Modules, key: string): Module {
    const module: Module | undefined = modules[key]
    if (module == undefined) {
        throw new Error(`module (key: ${key}) not found!`)
    }
    return module
}

main()
