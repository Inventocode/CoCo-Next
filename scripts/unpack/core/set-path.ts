import PriorityQueue from "js-priority-queue"

import { ModuleMap, ModuleKey, Module, UnpackConfig } from "./types"
import { getModuleByKey } from "./utils"

export function setModulesPathByImportName(config: UnpackConfig, modules: ModuleMap): void {
    console.log("setting paths")
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
    const visited: Record<ModuleKey, number> = {}
    while (queue.length > 0) {
        const module = queue.dequeue()
        if (module.external != null) {
            continue
        }
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
    for (const [key, module] of Object.entries(modules)) {
        module.path.push(module.path.pop() + "-" + String(key).replace(/\//g, "_"))
    }
    postProcess(config, modules)
}

function getModulePathFromImportName(importName: string): string[] {
    return importName
        .replace(/_js__/, "")
        .replace(/_module_css__/, ".module.css")
        .replace(/^__WEBPACK_IMPORTED_MODULE_[0-9]+_/, "")
        .split("_")
        .filter(Boolean)
}

export function setModulesPathByDependency(config: UnpackConfig, modules: ModuleMap): void {
    console.log("setting paths")
    const entryModules: Module[] = Object.values(modules).filter(
        (module: Module): boolean => module.isEntry
    )
    for (const module of entryModules) {
        module.path = [String(module.key).replace(/\//g, "")]
    }
    const queue = new PriorityQueue<Module>({
        comparator(a: Module, b: Module): number {
            return a.path.length - b.path.length
        },
        initialValues: entryModules
    })
    const visited: Record<ModuleKey, boolean> = {}
    while (queue.length > 0) {
        const module = queue.dequeue()
        for (const importedModule of module.dependency) {
            if ((importedModule.external != null && !importedModule.moved) || visited[importedModule.key]) {
                continue
            }
            visited[importedModule.key] = true
            importedModule.path = [...module.path, String(importedModule.key).replace(/\//g, "")]
            queue.queue(importedModule)
        }
    }
    postProcess(config, modules)
}

function postProcess(config: UnpackConfig, modules: ModuleMap) {
    for (const module of Object.values(modules)) {
        if (module.external) {
            module.path = module.external.split("/").filter(Boolean)
        }
        if (module.external == ".") {
            continue
        }
        if (!module.moved) {
            module.path.unshift(...config.output.unrestoredPath.split("/").filter(Boolean))
        }
    }
}
