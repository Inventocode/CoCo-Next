export interface ConsoleOptions {
    allowGroup: boolean
    allowProfile: boolean
    allowTime: boolean
    disallowWarn: boolean
    interceptMessage(message: ConsoleMessage): ConsoleMessage | Promise<ConsoleMessage>
}

export interface ConsoleMessage {
    type: keyof Console
    label?: string
    data: any[]
}

const GROUP_METHODS: (keyof Console)[] = ["group", "groupCollapsed", "groupEnd"]
const PROFILE_METHODS: (keyof Console)[] = ["profile", "profileEnd"]
const TIME_METHODS: (keyof Console)[] = ["time", "timeEnd", "timeLog", "timeStamp"]

export function createConsole(options: Partial<ConsoleOptions> = {}): Console {

    const {
        allowGroup = false,
        allowProfile = false,
        allowTime = false,
        disallowWarn = true,
        interceptMessage
    } = options
    const result = Object.create(console)

    if (interceptMessage !== undefined) {
        for (const key in console) {
            const type = key as keyof Console
            if (typeof console[type] !== "function") {
                continue
            }
            Object.defineProperty(result, type, {
                value:
                    PROFILE_METHODS.includes(type) || TIME_METHODS.includes(type) ?
                    function (this: any, label: string, ...data: any[]) {
                        log.call(this, interceptMessage({ type, label, data }))
                    } :
                    function (this: any, ...data: any[]) {
                        log.call(this, interceptMessage({ type, data }))
                    },
                enumerable: true,
                writable: true,
                configurable: true
            })
        }
    }

    if (!allowGroup) { disallowMethods(GROUP_METHODS) }
    if (!allowProfile) { disallowMethods(PROFILE_METHODS) }
    if (!allowTime) { disallowMethods(TIME_METHODS) }

    return result

    function disallowMethods(methods: (keyof Console)[]) {
        for (const method of methods) {
            Object.defineProperty(result, method, {
                value: disallowWarn ? function (...data: any[]) {
                    result.warn(`已拦截禁用的方法 console.${method}`, ...data)
                } : function () {},
                writable: true,
                configurable: true
            })
        }
    }
}

async function log(this: any, message: ConsoleMessage | Promise<ConsoleMessage>) {
    const { type, label, data } = message instanceof Promise ? await message : message
    if (label !== undefined) {
        data.unshift(label)
    }
    ;(console[type] as Function).apply(this, data)
}
