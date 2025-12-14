import { ModuleMap, ModuleKey, Module } from "./types"

export function shakeUnused(modules: ModuleMap): void {
    console.log("shaking unused")
    const entryModules: Module[] = Object.values(modules).filter(
        (module: Module): boolean => module.isEntry
    )
    const visited: Set<ModuleKey> = new Set()
    const queue: Module[] = entryModules.slice()
    let module: Module | undefined = undefined
    while ((module = queue.shift()) != null) {
        if (visited.has(module.key) || (module.external != null && !module.moved)) {
            continue
        }
        visited.add(module.key)
        for (const dependency of module.dependency) {
            queue.push(dependency)
        }
    }
    for (const module of Object.values(modules)) {
        if (!visited.has(module.key) && module.external == null) {
            module.path.unshift("unused")
            module.external = module.path.join("/")
        }
    }
}
