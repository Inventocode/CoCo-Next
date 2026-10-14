export interface BaseWidgetLoaderTypes {
    /**
     * 加载的控件的类型名称，如：CoCo 控件、CoCoKit 控件。
     */
    widgetTypeName: string
    /**
     * 控件加载器的路径，相对当前文件。
     */
    path: string
    /**
     * 对代码进行预处理，将特殊语法转换为普通代码。默认只转换 JSX。
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
 */
export declare function registerCoCoWidgetLoader(types: CoCoWidgetLoaderTypes): void

export interface InternalWidgetLoaderTypes extends BaseWidgetLoaderTypes {}

export declare function registerInternalWidgetLoader(types: InternalWidgetLoaderTypes): void