/**
 * 所有读取操作得到的都是空白，所有写入操作都静默失败
 */
export const BLANK_ALLOW: any = new Proxy(function () {}, {
    apply(__target, __thisArg, __argArray) { return BLANK_ALLOW },
    construct(__target, __argArray, __newTarget) { return BLANK_ALLOW },
    defineProperty(__target, __property, __attributes) { return true },
    deleteProperty(__target, __p) { return true },
    get(__target, p, __receiver) {
        if (p === Symbol.toPrimitive) {
            return toPrimitive
        }
        if (p === "toString") {
            return toString
        }
        return BLANK_ALLOW
    },
    getOwnPropertyDescriptor(__target, __p) { return BLANK_ALLOW },
    getPrototypeOf(__target) { return BLANK_ALLOW },
    has(__target, __p) { return true },
    isExtensible(__target) { return false },
    ownKeys(__target) { return [] },
    preventExtensions(__target) { return true },
    set(__target, __p, __newValue, __receiver) { return true },
    setPrototypeOf(__target, __v) { return true }
})

function toPrimitive() { return 0 }
function toString() { return "[object Object]" }
