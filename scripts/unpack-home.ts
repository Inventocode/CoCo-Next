import path from "path"
import { promises as fs } from "fs"
import { parse } from "@babel/parser"
import traverse, { NodePath } from "@babel/traverse"
import generate from "@babel/generator"
import type { BlockStatement, CallExpression, Comment, Expression, ExpressionStatement, File, LVal, MemberExpression, Node, ObjectProperty, OptionalMemberExpression, PrivateName, VariableDeclaration } from "@babel/types"

interface Module {
    key: string
    path: string[]
    external?: string | null | undefined
    AST: File
    hasJSX: boolean
    importedModules: Modules
    importsNameMap: Record<string, string>
    exportsNameMap: Record<string, string>
}

type Modules = Record<string, Module>

type Externals = Record<string, string>

async function main(): Promise<void> {
    const distPath: string = path.resolve("public", "creation.codemao.cn", "coco", "home", "dist")
    const modules: Modules = {}
    const externals: Externals = {
        "react/": "react",
        "lodash/": "lodash",
        "ant/design/icons/": "@ant-design/icons",
        "ant/design/react/": "@ant-design/react-slick",
        "antd/": "antd",
        "babel/runtime/": "@babel/runtime/*",
        "babel/plugin/react/css/modules/": "babel-plugin-react-css-modules/*",
        "babel/polyfill": "babel-polyfill",
        "video/react": "video-react",
        "to/camel/case": "to-camel-case",
        "sa/sdk/javascript": "sa-sdk-javascript",
        "just/curry/it": "just-curry-it",
        "intl/": "intl",
        "axios": "axios",
        "shortid": "shortid",
        "redux/index": "redux",
        "classnames": "classnames",
        "build/three/module/js": "three",
        "invariant": "invariant"
    }
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "commons.45126324b4177c062c0e.js")
    ))
    Object.assign(modules, await loadModulesFromFile(
        path.resolve(distPath, "coco.e05e13740860acc49eec.js")
    ))
    parseModulesImport(modules)
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
    return loadModulesFromAST(parse(String(await fs.readFile(filePath)), {
        sourceType: "script"
    }))
}

function loadModulesFromAST(AST: Node): Modules {
    const modules: Modules = {}
    traverse(AST, {
        ObjectProperty(path: NodePath<ObjectProperty>): void {
            const key: NodePath = path.get("key")
            if (!key.isStringLiteral() && !key.isNumericLiteral()) {
                return
            }
            const value: NodePath = path.get("value")
            if (!value.isFunctionExpression()) {
                return
            }
            if (!/^module,(__webpack_exports__|exports)(,__webpack_require__)?$/.test(
                value.node.params.map((param: Node): string => {
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

function loadModuleFromNodePath(key: string, path: NodePath<BlockStatement>): Module {
    key = key.replace(/\\|\//g, "_")
    return {
        key,
        path: ["unnamed"],
        AST: {
            type: "File",
            program: {
                type: "Program",
                sourceType: "module",
                body: path.node.body,
                directives: path.node.directives
            }
        },
        hasJSX: false,
        importedModules: {},
        importsNameMap: {},
        exportsNameMap: {}
    }
}

function parseModulesImport(modules: Modules): void {
    console.log("parsing imports of modules")
    for (const module of Object.values(modules)) {
        function addImports(key: string): void {
            const importedModule: Module | undefined = modules[key]
            if (importedModule == null) {
                console.warn(`module (key: ${key}) not found!`)
                return
            }
            module.importedModules[key] = importedModule
        }
        traverse(module.AST, {
            VariableDeclaration(path: NodePath<VariableDeclaration>): void {
                if (!path.node.leadingComments?.some((comment: Comment): boolean => {
                    return comment.value == " harmony import "
                })) {
                    return
                }
                for (const declaration of path.get("declarations")) {
                    const id: NodePath = declaration.get("id")
                    id.assertIdentifier()
                    if (id.node.name.endsWith("_default")) {
                        continue
                    }
                    const init: NodePath<Node | null | undefined> = declaration.get("init")
                    init.assertCallExpression()
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral()) {
                            continue
                        }
                        module.importsNameMap[argument.node.value] = id.node.name
                        addImports(argument.node.value)
                    }
                }
            },
            CallExpression(path: NodePath<CallExpression>): void {
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
                addImports(String(importedModuleKey.node.value))
            }
        })
    }
}

function setModulesPath(modules: Modules): void {
    console.log("setting paths of modules")
    for (const module of Object.values(modules)) {
        for (const [key, name] of Object.entries(module.importsNameMap)) {
            const importedModule: Module | undefined = modules[key]
            if (importedModule == undefined) {
                console.warn(`module (key: ${key}) not found!`)
                continue
            }
            importedModule.path = name
                .replace(/^__WEBPACK_IMPORTED_MODULE_[0-9]+_/, "")
                .split("_")
                .filter(Boolean)
        }
    }
    modules["0"]!.path = ["index"]
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
    for (const [externalPath, externalName] of Object.entries(externals)) {
        for (const module of Object.values(modules)) {
            if (module.path.join("/").startsWith(externalPath)) {
                if (externalName.endsWith("*")) {
                    module.external = module.path.join("/").replace(externalPath, externalName.slice(0, -1))
                } else {
                    module.external = externalName
                }
                for (const importedModule of Object.values(module.importedModules)) {
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
        if (modules[momentLocal] == null) {
            console.log(momentLocal)
        }
        recursiveMarkExternal(modules[momentLocal]!)
    }
}

function recursiveMarkExternal(module: Module): void {
    if (module.external != null) {
        return
    }
    module.external = "external/" + module.path.join("/") + "-" + module.key
    for (const importedModule of Object.values(module.importedModules)) {
        recursiveMarkExternal(importedModule)
    }
}

/**
 * 将模块的导入转换为 ESModule 或 CommonJS 格式，并将它们链接到正确的位置
 */
function transformModulesImport(modules: Modules): void {
    console.log("transforming imports of modules")
    for (const module of Object.values(modules)) {
        let importedModuleKey: string = ""
        traverse(module.AST, {
            VariableDeclaration(path: NodePath<VariableDeclaration>): void {
                if (!path.node.leadingComments?.some((comment: Comment): boolean => {
                    return comment.value == " harmony import "
                })) {
                    return
                }
                path.skip()
                for (const declaration of path.get("declarations")) {
                    const id: NodePath = declaration.get("id")
                    id.assertIdentifier()
                    const init: NodePath<Node | null | undefined> = declaration.get("init")
                    init.assertCallExpression()
                    for (const argument of init.get("arguments")) {
                        if (!argument.isStringLiteral()) {
                            continue
                        }
                        importedModuleKey = argument.node.value
                    }
                    const importedModule: Module | undefined = modules[importedModuleKey]
                    const importPath: string = getImportPath(module, importedModuleKey, importedModule)
                    if (id.node.name.endsWith("_default")) {
                        path.replaceWith({
                            type: "ImportDeclaration",
                            specifiers: [
                                {
                                    type: "ImportDefaultSpecifier",
                                    local: id.node
                                }
                            ],
                            importKind: "value",
                            source: {
                                type: "StringLiteral",
                                value: importPath
                            },
                            assertions: []
                        })
                        traverse(module.AST, {
                            CallExpression(path: NodePath<CallExpression>): void {
                                if (path.get("callee").isIdentifier({
                                    name: id.node.name
                                })) {
                                    path.replaceWith(id.node)
                                }
                            },
                            MemberExpression(path: NodePath<MemberExpression>): void {
                                if (
                                    path.get("object").isIdentifier({
                                        name: id.node.name
                                    }) &&
                                    path.get("property").isIdentifier({
                                        name: "a"
                                    })
                                ) {
                                    path.replaceWith(id.node)
                                }
                            }
                        })
                    } else {
                        path.replaceWith({
                            type: "ImportDeclaration",
                            specifiers: [
                                {
                                    type: "ImportNamespaceSpecifier",
                                    local: id.node
                                }
                            ],
                            importKind: "value",
                            source: {
                                type: "StringLiteral",
                                value: importPath
                            },
                            assertions: []
                        })
                        traverse(module.AST, {
                            MemberExpression(path: NodePath<MemberExpression>): void {
                                if (!path.get("object").isIdentifier({
                                    name: id.node.name
                                })) {
                                    return
                                }
                                const property: NodePath<PrivateName | Expression> = path.get("property")
                                if (!property.isStringLiteral()) {
                                    return
                                }
                                const newName: string = property.node.trailingComments?.[0]?.value.trim() ?? property.node.value
                                property.node.trailingComments = []
                                importedModule!.exportsNameMap[property.node.value] = newName
                                property.replaceWith({
                                    type: "Identifier",
                                    name: newName
                                })
                                path.node.computed = false
                            }
                        })
                    }
                }
            },
            CallExpression(path: NodePath<CallExpression>): void {
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
                const importedModule: Module | undefined = modules[importedModuleKey.node.value]
                const importPath: string = getImportPath(module, String(importedModuleKey.node.value), importedModule)
                path.replaceWith({
                    type: "CallExpression",
                    callee: {
                        type: "Identifier",
                        name: "require"
                    },
                    arguments: [{
                        type: "StringLiteral",
                        value: importPath
                    }]
                })
            }
        })
    }
}

/**
 * 获取导入路径
 */
function getImportPath(context: Module, key: string, imported?: Module): string {
    if (imported == undefined) {
        return key
    }
    if (imported.external != null) {
        return imported.external
    }
    let rootPath: string
    if (context.path.length == 1) {
        rootPath = "./"
    } else {
        rootPath = "../".repeat(context.path.length - 1)
    }
    return rootPath + imported.path.join("/") + "-" + imported.key
}

/**
 * 将模块的导出转换为 ESModule 或 CommonJS 格式，并根据模块导出映射替换导出名称
 */
function transformModulesExport(modules: Modules): void {
    console.log("transforming exports of modules")
    for (const module of Object.values(modules)) {
        traverse(module.AST, {
            ExpressionStatement(path: NodePath<ExpressionStatement>): void {
                let exported: string | null = null
                let local: string | Expression | null = null
                if (path.node.leadingComments?.some((comment: Comment): boolean => {
                    return comment.value == " harmony export (binding) "
                })) {
                    const callExpression: NodePath<Expression> = path.get("expression")
                    callExpression.assertCallExpression()
                    const args: NodePath<Node>[] = callExpression.get("arguments")
                    const exportedName: NodePath<Node> = args[1]!
                    const exportedFunction: NodePath<Node> = args[2]!
                    exportedName.assertStringLiteral()
                    exportedFunction.assertFunctionExpression()
                    const localName: NodePath<Expression | null | undefined> = exportedFunction.get("body.body")[0]!.get("argument")
                    localName.assertIdentifier()
                    exported = exportedName.node.value
                    local = localName.node.name
                } else if (path.node.leadingComments?.some((comment: Comment): boolean => {
                    return comment.value == " harmony default export "
                })) {
                    const assignmentExpression: NodePath<Expression> = path.get("expression")
                    assignmentExpression.assertAssignmentExpression()
                    const memberExpression: NodePath<OptionalMemberExpression | LVal> = assignmentExpression.get("left")
                    memberExpression.assertMemberExpression()
                    const exportedName: NodePath<Expression | PrivateName> = memberExpression.get("property")
                    exportedName.assertStringLiteral()
                    const localPath: NodePath<Expression> = assignmentExpression.get("right")
                    exported = "default"
                    local = localPath.node
                } else if (path.node.leadingComments?.some((comment: Comment): boolean => {
                    return comment.value == " harmony export (immutable) "
                })) {
                    const assignmentExpression: NodePath<Expression> = path.get("expression")
                    assignmentExpression.assertAssignmentExpression()
                    const memberExpression: NodePath<OptionalMemberExpression | LVal> = assignmentExpression.get("left")
                    memberExpression.assertMemberExpression()
                    const exportedName: NodePath<Expression | PrivateName> = memberExpression.get("property")
                    exportedName.assertStringLiteral()
                    const localName: NodePath<Expression> = assignmentExpression.get("right")
                    localName.assertIdentifier()
                    exported = exportedName.node.value
                    local = localName.node.name
                }
                if (exported != null && local != null) {
                    exported = module.exportsNameMap[exported] ?? exported
                    if (exported == "default") {
                        path.replaceWith({
                            type: "ExportDefaultDeclaration",
                            declaration: typeof local == "string" ? {
                                type: "Identifier",
                                name: local
                            } : local
                        })
                    } else {
                        path.replaceWith({
                            type: "ExportNamedDeclaration",
                            specifiers: [{
                                type: "ExportSpecifier",
                                local: {
                                type: "Identifier",
                                    name: local as string
                                },
                                exported: {
                                    type: "Identifier",
                                    name: exported
                                }
                            }]
                        })
                    }
                }
            }
        })
    }
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

main()
