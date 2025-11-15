import { Module, ModuleKey, ModuleMap } from "./types"

export function getModuleByKey(modules: ModuleMap, key: ModuleKey): Module {
    const module: Module | undefined = modules[key]
    if (module == undefined) {
        throw new Error(`module (key: ${key}) not found!`)
    }
    return module
}


/**
 * 获取导入路径
 */
export function getImportPath(context: Module, imported: Module): string {
    if (imported.external != null && !imported.external.startsWith(".")) {
        return imported.external
    }
    const contextPath: string[] = context.path.slice()
    const importedPath: string[] = imported.external?.split("/") ?? imported.path.slice()
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
