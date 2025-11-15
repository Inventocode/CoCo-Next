import { ModuleMap, Externals } from "./types"

/**
 * 标记第三方模块
 */
export function markExternals(modules: ModuleMap, externals: Externals): void {
    console.log("marking externals")
    for (const external of externals) {
        for (const module of Object.values(modules)) {
            if ("key" in external) {
                const { key, source } = external
                if (module.key == key) {
                    module.external = source
                }
            } else {
                const { searchPath, replace } = external
                let path: string =  module.path.join("/")
                if (path.endsWith("-" + String(module.key).replace(/\//g, "_"))) {
                    path = path.slice(0, -String(module.key).length - 1)
                }
                if (searchPath.test(path)) {
                    module.external = path.replace(searchPath, replace)
                }
            }
        }
    }
}