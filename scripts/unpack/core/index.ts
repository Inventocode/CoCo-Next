import path from "path"
import { promises as fs } from "fs"

import { UnpackConfig, ModuleMap, SetPath, ModuleKey } from "./types"
import { loadModulesFromFile } from "./load"
import { unminimize } from "./unminimize"
import { buildDependencies } from "./build-dependency"
import { setModulesPathByImportName as setPathsByImportName, setModulesPathByDependency as setPathsByDependency } from "./set-path"
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
    const { pathMap: pathMapPath } = config.output
    if (pathMapPath) {
        const pathMap: Record<ModuleKey, string> = {}
        for (const module of Object.values(modules)) {
            pathMap[module.key] = module.external ?? "/" + module.path.join("/")
        }
        await fs.writeFile(
            path.resolve(config.output.basePath, config.output.unrestoredPath, pathMapPath),
            JSON.stringify(pathMap, null, 4)
        )
    }
}
