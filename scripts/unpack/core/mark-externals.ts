import { ModuleMap, UnpackConfig } from "./types"

/**
 * 标记第三方模块
 */
export function markExternals(config: UnpackConfig, modules: ModuleMap): void {
    console.log("marking externals")
    for (const [key, movedPath] of Object.entries(config.moveToSrc ?? {})) {
        const module = modules[key]
        if (module == undefined) {
            continue
        }
        module.external = movedPath == "." ? "." : `/${config.output.srcPath}${movedPath}`
        module.path = `/${config.output.srcUnrestoredPath}/${movedPath}`.split("/").filter(Boolean)
        module.moved = true
    }
    const externals = [
        ...Object.entries(config.nodePolyfill ?? {}).map(([key, name]) => ({
            key,
            source: `webpack-polyfill:${name}`
        })),
        ...(config.externals ?? [])
    ]
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
                if (path.startsWith(config.output.unrestoredPath)) {
                    path = path.slice(config.output.unrestoredPath.length + 1)
                }
                if (searchPath.test(path)) {
                    module.external = path.replace(searchPath, replace)
                }
            }
        }
    }
}
