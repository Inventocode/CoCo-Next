import { ModuleMap } from "./types"

/**
 * 补上模块路径中省略的的 index
 */
export function addIndexToPath(modules: ModuleMap): void {
    console.log("adding index to paths")
    const dirsPath = getAllDirsPath(modules)
    for (const module of Object.values(modules)) {
        if (dirsPath.has(module.path.join("/"))) {
            module.path.push("index")
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
