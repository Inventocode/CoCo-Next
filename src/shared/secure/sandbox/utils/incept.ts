import { BLANK_ALLOW } from "./blank-allow"

export function incept<T extends {}>({
    object, rewrite, bypass = [], warn = () => {}
}: {
    object: T
    rewrite: Partial<T>
    bypass?: (keyof T)[]
    warn?(p: keyof T): void
}): T {
    const interceptGlobals = new Set<string | symbol>()
    return new Proxy(rewrite, {
            get(target, p, receiver) {
                if (!bypass.includes(p as keyof T) && !(p in target) && p in object) {
                    if (!interceptGlobals.has(p)) {
                        interceptGlobals.add(p)
                        warn(p as keyof T)
                    }
                    return BLANK_ALLOW
                }
                return Reflect.get(target, p, receiver)
            },
            has(target, p) {
                return !bypass.includes(p as keyof T) && (p in target || p in object)
            }
        }
    ) as T
}
