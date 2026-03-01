import * as t from "@babel/types"

export interface UnpackConfig {
    entry: string[]
    /**
     * 排除外部依赖。
     */
    externals?: Externals | null | undefined
    output: {
        basePath: string
        unrestoredPath: string
        srcPath: string
    }
    setPath: SetPath,
    bundle?: BundleConfig | null | undefined
    modules?: Record<string, ModuleConfig> | null | undefined
    /**
     * 被移动的模块移动到的目录。
     */
    movedDirs?: string[] | null | undefined
    moveToSrc?: Record<string, string> | null | undefined
}

export interface BundleConfig {
    /**
     * 是否使用 ESModule 的导入方式。
     *
     * 部分代码使用 ESModule 的导入方式可能会导致异常。
     */
    useESImport?: boolean | null | undefined
    publicPath?: string | null | undefined
    nodePolyfill?: Record<ModuleKey, string | null | undefined> | null | undefined
}

export interface ModuleConfig {
    write?: boolean | null | undefined
    namedImported?: boolean | number | null | undefined
    scopeLowering?: boolean | null | undefined
    exportsNameMap?: Record<string, string> | null | undefined
}

export type Externals = External[] | Record<string, string>

export type External = {
    searchPath: RegExp
    replace: string
} | {
    key: ModuleKey
    source: string
}

export enum SetPath {
    NO = "NO",
    BY_IMPORT_NAME = "BY_IMPORT_NAME",
    BY_DEPENDENCY = "BY_DEPENDENCY"
}

export interface Module {
    key: ModuleKey
    unrestoredPath: string[]
    path: string[]
    moved?: boolean | null | undefined
    external?: string | null | undefined
    args: string[]
    AST: t.File
    isEntry: boolean
    dependency: Set<Module>
    reference: Set<Module>
    importsNameMap: Record<ModuleKey, string>
    importsNameToModuleMap: Record<string, Module>
    exportsNameMap: Record<string, string>
    namedImport: boolean | number | null | undefined
    config: ModuleConfig
}

export type ModuleKey = string | number

export type ModuleMap = Record<string, Module>

export type ModulesInfo = Record<string, string>
