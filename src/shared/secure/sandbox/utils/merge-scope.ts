import { IScope } from "../common/interface"

export function mergeScope(...scopes: IScope[]): IScope {
    scopes = scopes.reverse()
    return new Proxy({}, {
        get(__target, p, __receiver) {
            for (const scope of scopes) {
                if (p in scope) {
                    return scope[p]
                }
            }
            return undefined
        },
        set(__target, p, newValue, __receiver) {
            const scope = scopes[0]
            if (scope !== undefined) {
                scope[p] = newValue
                return true
            }
            return false
        },
        has(__target, p) {
            for (const scope of scopes) {
                if (p in scope) {
                    return true
                }
            }
            return false
        },
        ownKeys(__target) {
            const keys = new Set<string | symbol>()
            for (const scope of scopes) {
                for (const key of Object.getOwnPropertyNames(scope)) {
                    keys.add(key)
                }
                for (const key of Object.getOwnPropertySymbols(scope)) {
                    keys.add(key)
                }
            }
            return Array.from(keys)
        }
    })
}
