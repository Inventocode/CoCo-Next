const hardenedMap = new WeakMap<Object, Object>()
const unhardenedMap = new WeakMap<Object, Object>()

export function harden<T>(object: T): T {
    if (object === null || (typeof object !== "object" && typeof object !== "function")) {
        return object
    }
    let hardened = hardenedMap.get(object)
    if (hardened === undefined) {
        hardened = new Proxy({}, {
            apply(__target, thisArg, argArray) {
                return harden(Reflect.apply(object as any, unhardenedMap.get(thisArg) ?? thisArg, argArray))
            },
            construct(__target, argArray, newTarget) {
                return harden(Reflect.construct(object as any, argArray, newTarget))
            },
            get(__target, p, receiver) {
                return harden(Reflect.get(object, p, receiver))
            },
            defineProperty: forbidden,
            deleteProperty: forbidden,
            getOwnPropertyDescriptor(__target, p) {
                let propertyDescriptor = Reflect.getOwnPropertyDescriptor(object, p)
                if (propertyDescriptor !== undefined) {
                    delete propertyDescriptor.set
                    propertyDescriptor.writable = false
                    propertyDescriptor.configurable = false
                }
                return propertyDescriptor
            },
            getPrototypeOf(__target) {
                return harden(Reflect.getPrototypeOf(object))
            },
            isExtensible(__target) {
                return false
            },
            set: forbidden,
            setPrototypeOf: forbidden
        })
        hardenedMap.set(object, hardened)
        unhardenedMap.set(hardened, object)
    }
    return hardened as T
}

function forbidden(): never {
    throw new TypeError("禁止修改外部对象")
}
