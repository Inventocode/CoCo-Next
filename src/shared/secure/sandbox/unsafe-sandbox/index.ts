import { IExecutable, ISandbox, ISandboxProps, IScope } from "../common/interface"
import { mergeScope } from "../utils"

export class Sandbox implements ISandbox {

    public readonly globalThis: IScope

    public constructor(public readonly props: ISandboxProps) {
        let injectObject: IScope = {}
        this.globalThis = mergeScope(this.restoreThis(mergeScope(injectObject, props.globals)), {})
        Object.assign(injectObject, {
            window: this.globalThis,
            self: this.globalThis,
            globalThis: this.globalThis,
            Function: this.crateFunction()
        })
    }

    private restoreThis(this: this, scope: IScope): IScope {
        const sandbox = this
        const globalFunctionMap = new WeakMap<Function, Function>()
        return new Proxy(scope, {
            get(target, p, receiver) {
                const value = Reflect.get(target, p, receiver)
                if (typeof value === "function" && value === (globalThis as IScope)[p]) {
                    let newFunction = globalFunctionMap.get(value)
                    if (newFunction === undefined) {
                        newFunction = new Proxy(value, {
                            apply(target, thisArg, argArray) {
                                return Reflect.apply(target, thisArg === sandbox.globalThis ? globalThis : thisArg, argArray)
                            }
                        })
                    }
                    return newFunction
                }
                return value
            }
        })
    }

    private crateFunction(this: this): typeof Function {
        const sandbox = this
        function newFunction(originalFunction: typeof Function, argsName: string[]) {
            const code = argsName.pop()!
            const func = new originalFunction("scope", "args", `with (this) {\nwith(scope) {\nreturn (function (${argsName.join()}) {\n${code}\n}).apply(this, args)\n}\n}`)
            const newFunction = function (this: IScope) {
                if (this === globalThis || this === null || this === undefined) {
                    return func.call(sandbox.globalThis, sandbox.globalThis, arguments)
                } else {
                    return func.call(this, sandbox.globalThis, arguments)
                }
            }
            let functionString: string | null = null
            Object.defineProperty(newFunction, "toString", {
                value: function toString() {
                    return functionString ??= new originalFunction(...argsName, code).toString()
                },
                enumerable: false,
                configurable: true,
                writable: true
            })
            Object.defineProperty(newFunction, "length", {
                value: argsName.length,
                enumerable: false,
                configurable: true,
                writable: true
            })
            return newFunction
        }
        return new Proxy(Function, {
            apply(target, thisArg, argArray) {
                return newFunction.call(thisArg, target, argArray)
            },
            construct(target, argArray, __newTarget) {
                return newFunction(target, argArray)
            }
        })
    }

    public async compile(this: this, code: string): Promise<IExecutable> {
        return new Executable(this, new Function("scope", `with (this) {\nwith (scope) {\n${code}\n}\n}`))
    }
}

export class Executable implements IExecutable {

    public constructor(
        public readonly sandbox: ISandbox,
        private readonly func: Function
    ) {}

    public run<T = void>(this: this, ...scopes: IScope[]): T {
        return this.func.call(this.sandbox.globalThis, mergeScope(...scopes)) as T
    }
}
