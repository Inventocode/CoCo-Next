import { CoCoWidgetLoaderConstructor } from "../packages/plugin-sdk/src/widget-loader/coco"
import { createBlockSnippetSetter, InternalWidgetLoaderConstructor } from "../packages/plugin-sdk/src/widget-loader/internal"
import * as Blink from "../packages/@crc/blink/src"
import * as BlinkDi from "../packages/@crc/blink/src/core/di"
import { createConsole, createSandbox, incept, ISandbox, SAFE_GLOBALS } from "../secure/sandbox"
import { IPluginAssets } from "./assets"
import { IPluginRegistration, REGISTRATIONS } from "./registration"
import { IPluginPermission } from "./interfaces"

function require(requireMap: Record<string, any>, id: string): any {
    return requireMap[id]
}

export class PluginLoader {

    private readonly sandbox: ISandbox

    private readonly registrationModule
    private readonly requireMap: Record<string, any>

    private readonly globals: Partial<Window & typeof globalThis>

    public constructor(
        private readonly packageName: string,
        private readonly assets: IPluginAssets,
        private readonly permission: IPluginPermission | undefined
    ) {
        this.globals = this.buildGlobals()
        this.sandbox = createSandbox({
            globals: this.globals
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
        const sandbox = createSandbox({ globals: incept({
            object: window,
            rewrite: {
                ...(SAFE_GLOBALS as any),
                ...this.globals,
                console: sandboxConsole,
                document: incept({
                    object: document,
                    rewrite: {
                        body: incept({
                            object: document.body,
                            rewrite: { appendChild: document.body.appendChild.bind(document.body) },
                            warn(p) { sandboxConsole.warn(`已拦截禁用的功能 document.body.${String(p)}`) }
                        }),
                        createElement(tagName: string, options?: ElementCreationOptions) {
                            const element = document.createElement(tagName, options)
                            cratedElements.add(element)
                            return element
                        },
                        createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions) {
                            const element = document.createElementNS(namespace, qualifiedName, options)
                            cratedElements.add(element)
                            return element as any
                        },
                        getElementById(elementId: string) {
                            const element = document.getElementById(elementId)
                            if (element !== null && cratedElements.has(element)) {
                                return element
                            }
                            return null
                        }
                    },
                    warn(p) { sandboxConsole.warn(`已拦截禁用的功能 document.${String(p)}`) }
                })
            },
            bypass: BYPASS_GLOBALS,
            warn(p) { sandboxConsole.warn(`已拦截禁用的功能 ${String(p)}`) }
        }) as any })
        return [sandbox, widgetMarkResolve!]
    }

    private buildGlobals(this: this): Partial<Window & typeof globalThis> {
        const pluginConsole = createConsole({
            interceptMessage: (message) => {
                if (message.label !== undefined) {
                    message.label = `[插件 ${this.packageName}] ${message.label}`
                } else {
                    message.data.unshift(`[插件 ${this.packageName}]`)
                }
                return message
            }
        })
        const globals: Partial<typeof window> = incept({
            object: window,
            rewrite: { ...SAFE_GLOBALS, eval, console: pluginConsole },
            bypass: BYPASS_GLOBALS,
            warn(p) { pluginConsole.warn(`已拦截禁用的功能 ${String(p)}`) }
        })
        if (this.permission === undefined) {
            return globals
        }
        if (this.permission.network) {
            Object.assign(globals, {
                XMLHttpRequest, fetch, FormData, URLSearchParams,
                document: incept({
                    object: document,
                    rewrite: {
                        get cookie() { return document.cookie },
                        set cookie(value) { document.cookie = value }
                    },
                    warn(p) { pluginConsole.warn(`已拦截禁用的功能 document.${String(p)}`) }
                })
            })
        }
        return globals
    }
}

const BYPASS_GLOBALS: (keyof typeof globalThis)[] = ["self", "globalThis", "window", "Function"]
