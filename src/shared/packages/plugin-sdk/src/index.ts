import type { IPluginInfoInShop } from "../../../plugin/interfaces"

export interface PluginShopTypes {
    name: string
    externalURL?: string
    options?: {
        key: keyof PluginShopLoadCustomParams
        label?: string
        options: {
            label: string
            value: PluginShopLoadCustomParams[keyof PluginShopLoadCustomParams]
        }[]
    }[]
}

export declare function registerPluginShop(types: PluginShopTypes): void

export type PluginShopLoadParams = PluginShopLoadBasicParams & PluginShopLoadCustomParams

export interface PluginShopLoadBasicParams {
    page: number
    pageSize: number
}

export interface PluginShopLoadCustomParams {}

export type PluginInfoInShop = IPluginInfoInShop

export interface PluginShopLoadResult {
    list: PluginInfoInShop[]
    totalPages: number
}

export declare function onPluginShopLoad(callback: (args: PluginShopLoadParams) => Promise<PluginShopLoadResult> | PluginShopLoadResult): void

export declare function onPluginShopGet(callback: (packageName: string) => Promise<PluginInfoInShop> | PluginInfoInShop): void

export interface BaseWidgetLoaderTypes {
    /**
     * 加载的控件的类型名称，如：CoCo 控件、CoCoKit 控件。
     *
     * @since 1.23.6
     */
    widgetTypeName: string
    /**
     * 控件加载器的路径，相对当前文件。
     *
     * @since 1.23.6
     */
    path: string
    /**
     * 对代码进行预处理，将特殊语法转换为普通代码。默认只转换 JSX。
     *
     * @since 1.23.6
     */
    preprocess?: boolean | {
        jsx?: boolean
        esModule?: boolean
    }
}

export interface CoCoWidgetLoaderTypes extends BaseWidgetLoaderTypes {}

/**
 * 注册一个 CoCo 控件加载器。
 *
 * CoCo 控件加载器用于加载 CoCo 控件以及转换成 CoCo 控件运行的其他控件，如 CoCoKit 控件。
 *
 * @since 1.23.6
 */
export declare function registerCoCoWidgetLoader(types: CoCoWidgetLoaderTypes): void

export interface InternalWidgetLoaderTypes extends BaseWidgetLoaderTypes {}

/**
 * 注册一个内置控件加载器。
 *
 * 内置控件加载器用于加载具有更多高级功能的控件，但需要操作 Blink。
 *
 * @since 1.23.6
 */
export declare function registerInternalWidgetLoader(types: InternalWidgetLoaderTypes): void

/**
 * 监测编辑器启动。
 *
 * @since 1.23.7
 * @param callback 回调函数，编辑器启动时被调用
 */
export declare function onEditorStart(callback: () => void): void

/**
 * 监测插件停止运行。被设计用来执行清理工作，可以返回 Promise。当编辑器页面被直接关闭时，该钩子**不会**被执行。
 *
 * @since 1.23.6
 * @param callback 回调函数，插件停止运行时被调用
 */
export declare function onClean(callback: () => void | Promise<void>): void
