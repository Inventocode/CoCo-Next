import React from "react"

import * as types from "../../../../../../editor/widget/internal/types"

export interface IInternalLoader {
    run(this: this, global: { React: typeof React }): types.Widget | Promise<types.Widget>
    createInstance?(this: this, widget: { id: string, type: string, attributes: Record<string, any> }): void
}

export type InternalWidgetLoaderConstructor = new (code: string) => IInternalLoader

export declare function register(loader: InternalWidgetLoaderConstructor): void

export * from "../../../../../../editor/widget/internal/types"
export * from "../../../../../plugin/snippet-for-plugin"
export * from "../../../../@crc/blink/src"
