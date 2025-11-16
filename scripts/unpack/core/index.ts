import path from "path"
import { promises as fs } from "fs"

import { UnpackConfig, ModuleMap, SetPath, ModuleKey, Module } from "./types"
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
    for (const [key, movedPath] of Object.entries(config.move ?? {})) {
        const module: Module | undefined = modules[key]
        if (module == undefined) {
            continue
        }
        module.external = movedPath
    }
    unminimize(modules)
    buildDependencies(modules)
    switch (config.setPath) {
        case SetPath.BY_IMPORT_NAME:
            setPathsByImportName(modules)
            break
        case SetPath.BY_DEPENDENCY:
            setPathsByDependency(modules)
            break
    }
    addIndexToPath(modules)
    markExternals(modules, [
        ...Object.entries(config.nodePolyfill ?? {}).map(([key, name]) => ({
            key,
            source: `webpack-polyfill:${name}`
        })),
        ...(config.externals ?? [])]
    )
    shakeUnused(modules)
    removeNodePolyfill(modules, config.nodePolyfill ?? {})
    transformImports(modules, config)
    transformExports(modules)
    scopeLowering(modules)
    await write(config.output.path, modules)
    const { pathMap: pathMapPath } = config.output
    if (pathMapPath) {
        const pathMap: Record<ModuleKey, string> = {}
        for (const module of Object.values(modules)) {
            pathMap[module.key] = module.external ?? "/" + module.path.join("/")
        }
        await fs.writeFile(
            path.resolve(config.output.path, pathMapPath),
            JSON.stringify(pathMap, null, 4)
        )
    }
}
