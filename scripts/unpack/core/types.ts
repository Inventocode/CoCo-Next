import * as t from "@babel/types"

export interface UnpackConfig {
    entry: string[]
    /**
     * 排除外部依赖。
     */
    externals?: Externals | null | undefined
    output: {
        path: string
        /**
         * 生成模块路径映射表。
         */
        pathMap?: false | string | null | undefined
    }
    setPath: SetPath,
    publicPath?: string | null | undefined
    /**
     * 是否使用 ESModule 的导入方式。
     *
     * 部分代码使用 ESModule 的导入方式可能会导致异常。
     */
    useESImport?: boolean | null | undefined
    /**
     * 移动模块，标识模块被移动到了指定位置，被移动的模块不会被处理。
     */
    move?: Record<ModuleKey, string> | null | undefined
    /**
     * 移除 Node Polyfill
     */
    nodePolyfill?: Record<ModuleKey, string | null | undefined> | null | undefined
}

export type External = {
    searchPath: RegExp
    replace: string
} | {
    key: ModuleKey
    source: string
}

export type Externals = External[]

export enum SetPath {
    NO = "NO",
    BY_IMPORT_NAME = "BY_IMPORT_NAME",
    BY_DEPENDENCY = "BY_DEPENDENCY"
}

export interface Module {
    key: ModuleKey
    path: string[]
    external?: string | null | undefined
    args: string[]
    AST: t.File
    isEntry: boolean
    dependency: Set<Module>
    reference: Set<Module>
    importsNameMap: Record<ModuleKey, string>
    importsNameToModuleMap: Record<string, Module>
    exportsNameMap: Record<string, string>
}

export type ModuleKey = string | number

export type ModuleMap = Record<string, Module>
