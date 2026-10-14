import { CoCoWidgetLoaderConstructor } from "../packages/plugin-sdk/src/widget-loader/coco"
import { createBlockSnippetSetter, InternalWidgetLoaderConstructor } from "../packages/plugin-sdk/src/widget-loader/internal"
import * as Blink from "../packages/@crc/blink/src"
import * as BlinkDi from "../packages/@crc/blink/src/core/di"
import { BLANK_ALLOW, createConsole, createSandbox, ISandbox, mergeScope, SAFE_GLOBALS } from "../secure/sandbox"
import { IPluginAssets } from "./assets"
import { IPluginRegistration, REGISTRATIONS } from "./registration"

function require(requireMap: Record<string, any>, id: string): any {
    return requireMap[id]
}

export class PluginLoader {

    private readonly sandbox: ISandbox

    private readonly registrationModule
    private readonly requireMap: Record<string, any>

    public constructor(
        private readonly packageName: string,
        private readonly assets: IPluginAssets
    ) {
        this.sandbox = createSandbox({
            globals: mergeScope(BLANK_ALLOW, SAFE_GLOBALS)
        })
        this.registrationModule = this.buildRegistrationModule(REGISTRATIONS)
        this.requireMap = {
            "@oldsquaw-coco-next/plugin-sdk": this.registrationModule,
            "@oldsquaw-coco-next/plugin-sdk/self": { assets },
            "@oldsquaw-coco-next/plugin-sdk/blink": Blink,
            "@oldsquaw-coco-next/plugin-sdk/blink/dist/core/di": BlinkDi
        }
    }

    private buildRegistrationModule<
        T extends Record<string, IPluginRegistration<any, any>>
    >(registrations: T) {
        const result: any = {}
        for (const registration of Object.values(registrations)) {
            result[registration.registerName] = registration.getRegister(this.packageName)
        }
        return result
    }

    public async load(this: this): Promise<void> {
        const code = await this.assets.get("index.js")
        ;(await this.sandbox.compile(code)).run({ require: require.bind(null, this.requireMap) })
    }

    public async loadCoCoWidgetLoader(this: this): Promise<[CoCoWidgetLoaderConstructor, (value: string) => void]> {
        const code = await this.assets.get((await REGISTRATIONS.CoCoWidgetLoader.get(this.packageName)).path)
        let result
        function register(value: CoCoWidgetLoaderConstructor) {
            result = value
        }
        const [sandbox, widgetMarkResolve] = this.createWidgetSandbox()
        ;(await sandbox.compile(code)).run({ require: require.bind(null, Object.assign({
            "@oldsquaw-coco-next/plugin-sdk/coco-widget-loader": { register }
        }, this.requireMap)) })
        return [result!, widgetMarkResolve]
    }

    public async loadInternalWidget(this: this): Promise<[InternalWidgetLoaderConstructor, (value: string) => void]> {
        const code = await this.assets.get((await REGISTRATIONS.InternalWidgetLoader.get(this.packageName)).path)
        let result
        function register(value: InternalWidgetLoaderConstructor) {
            result = value
        }
        const [sandbox, widgetMarkResolve] = this.createWidgetSandbox()
        ;(await sandbox.compile(code)).run({ require: require.bind(null, Object.assign({
            "@oldsquaw-coco-next/plugin-sdk/internal-widget-loader": { register, createBlockSnippetSetter }
        }, this.requireMap)) })
        return [result!, widgetMarkResolve]
    }

    private createWidgetSandbox(this: this): [ISandbox, (value: string) => void] {
        let widgetMarkResolve: (value: string) => void
        const widgetMark = new Promise<string>((resolve) => { widgetMarkResolve = resolve })
        const sandboxConsole = createConsole({
            async interceptMessage(message) {
                if (message.label !== undefined) {
                    message.label = await widgetMark + " " + message.label
                } else {
                    message.data.unshift(await widgetMark)
                }
                return message
            }
        })
        const cratedElements = new WeakSet<Element>()
        const interceptGlobals = new Set<string | symbol>()
        const sandbox = createSandbox({
            globals: new Proxy({
                ...SAFE_GLOBALS,
                console: sandboxConsole,
                document: {
                    body: {
                        appendChild: document.body.appendChild.bind(document.body)
                    },
                    createElement(tagName: string, options?: ElementCreationOptions) {
                        const element = document.createElement(tagName, options)
                        cratedElements.add(element)
                        return element
                    },
                    createElementNS(namespace: string | null, qualifiedName: string) {
                        const element = document.createElementNS(namespace, qualifiedName)
                        cratedElements.add(element)
                        return element
                    },
                    getElementById(elementId: string) {
                        const element = document.getElementById(elementId)
                        if (element !== null && cratedElements.has(element)) {
                            return element
                        }
                        return null
                    }
                }
            }, {
                get(target, p, receiver) {
                    if (!BYPASS_GLOBALS.includes(p) && !(p in target) && p in globalThis) {
                        if (!interceptGlobals.has(p)) {
                            interceptGlobals.add(p)
                            sandboxConsole.warn(`已拦截禁用的功能 ${String(p)}`)
                        }
                        return BLANK_ALLOW
                    }
                    return Reflect.get(target, p, receiver)
                },
                has(target, p) {
                    return !BYPASS_GLOBALS.includes(p) && (p in target || p in globalThis)
                }
            })
        })
        return [sandbox, widgetMarkResolve!]
    }
}

const BYPASS_GLOBALS: (string | symbol)[] = ["globalThis", "window", "Function"]
