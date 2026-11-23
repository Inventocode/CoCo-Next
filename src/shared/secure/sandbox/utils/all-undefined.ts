export const ALL_UNDEFINED: Record<PropertyKey, undefined> = new Proxy({}, {
    defineProperty(__target, __property, __attributes) { return true },
    deleteProperty(__target, __p) { return true },
    get(__target, p, __receiver) {
        if (p === Symbol.toPrimitive) {
            return toPrimitive
        }
        if (p === "toString") {
            return toString
        }
        return undefined
    },
    getOwnPropertyDescriptor(__target, __p) { return undefined },
    getPrototypeOf(__target) { return null },
    has(__target, __p) { return true },
    isExtensible(__target) { return false },
    ownKeys(__target) { return [] },
    preventExtensions(__target) { return true },
    set(__target, __p, __newValue, __receiver) { return true },
    setPrototypeOf(__target, __v) { return true }
})

function toPrimitive() { return 0 }
function toString() { return "[object Object]" }
