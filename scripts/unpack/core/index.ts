import path from "path"
import { promises as fs } from "fs"

import { UnpackConfig, ModuleMap, SetPath, Externals } from "./types"
import { loadModulesFromFile } from "./load"
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
    markExternals(config, modules)
    unminimize(modules)
    removeNodePolyfill(modules, config.nodePolyfill ?? {})
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
    markExternals(config, modules)
    shakeUnused(modules)
    transformImports(modules, config)
    transformExports(modules)
    await write(config, modules)
    const { modulesInfo: modulesInfoPath } = config.output
    if (modulesInfoPath) {
        const modulesInfo: Externals = []
        for (const module of Object.values(modules)) {
            modulesInfo.push({
                key: module.key,
                source: module.external ?? "/" + module.path.join("/"),
                exportsNameMap: module.exportsNameMap,
                namedImport: module.namedImport
            })
        }
        await fs.writeFile(
            path.resolve(config.output.basePath, config.output.unrestoredPath, modulesInfoPath),
            JSON.stringify(modulesInfo, null, 4)
        )
    }
}
