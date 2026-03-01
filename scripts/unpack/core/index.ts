import path from "path"
import { promises as fs } from "fs"

import { UnpackConfig, ModuleMap, SetPath, ModulesInfo } from "./types"
import { loadModulesFromFile } from "./load"
import { findMoved } from "./find-moved"
import { unminimize } from "./unminimize"
import { buildDependencies } from "./build-dependency"
import { setPathsByImportName, setPathsByDependency } from "./set-path"
import { addIndexToPath } from "./add-index-to-path"
import { markExternals } from "./mark-externals"
import { shakeUnused } from "./shake-unused"
import { transformImports } from "./transform-imports"
import { transformExports } from "./transform-exports"
import { write } from "./write"
import { removeNodePolyfill } from "./remove-node-polyfill"
import { scopeLowering } from "./scope-lowering"

export * from "./types"

export async function unpack(config: UnpackConfig): Promise<void> {
    const modules: ModuleMap = {}
    for (const entryItem of config.entry) {
        Object.assign(modules, await loadModulesFromFile(entryItem))
    }
    const srcPath = path.resolve(config.output.basePath, config.output.srcPath)
    config.moveToSrc = await findMoved(
        (config.movedDirs ?? []).map(dirpath => path.resolve(srcPath, dirpath)),
        srcPath
    )
    for (const [key, moduleConfig] of Object.entries(config.modules ?? {})) {
        const module = modules[key]
        if (module == null) {
            continue
        }
        module.config = moduleConfig
        if (moduleConfig.write == false) {
            // 在旧版本中，`.` 代表不写入模块
            module.external = "."
            module.moved = true
        }
    }
    markExternals(config, modules)
    unminimize(modules)
    removeNodePolyfill(modules, config?.bundle?.nodePolyfill ?? {})
    buildDependencies(modules)
    switch (config.setPath) {
        case SetPath.BY_IMPORT_NAME:
            setPathsByImportName(config, modules)
            break
        case SetPath.BY_DEPENDENCY:
            setPathsByDependency(config, modules)
            break
    }
    addIndexToPath(modules)
    scopeLowering(config, modules)
    for (const [key, moduleConfig] of Object.entries(config.modules ?? {})) {
        const module = modules[key]
        if (module == null) {
            continue
        }
        module.config = moduleConfig
        if (moduleConfig.write == false) {
            // 在旧版本中，`.` 代表不写入模块
            module.external = "."
            module.moved = true
        }
    }
    markExternals(config, modules)
    shakeUnused(modules)
    transformImports(modules, config)
    transformExports(modules)
    await write(config, modules)
    const modulesInfo: ModulesInfo = {}
    for (const module of Object.values(modules)) {
        modulesInfo[String(module.key)] = module.external ?? "/" + module.unrestoredPath.join("/")
    }
    await fs.writeFile(
        path.resolve(config.output.basePath, config.output.unrestoredPath, "modules-info.json"),
        JSON.stringify(modulesInfo, null, 4)
    )
}
