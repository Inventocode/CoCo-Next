import React_0 from "react"

import * as types from "../../../../../widget/custom/types"

export interface ICoCoWidgetLoader {
    run(
        this: this,
        require: (id: string) => unknown,
        exports: Partial<types.Exports>,
        InvisibleWidget: new (props: types.InvisibleWidgetProps) => types.InvisibleWidget,
        VisibleWidget: new (props: types.VisibleWidgetProps) => types.VisibleWidget,
        React: typeof React_0
    ): void | Promise<void>
}

export type CoCoWidgetLoaderConstructor = new (code: string) => ICoCoWidgetLoader

export declare function register(loader: CoCoWidgetLoaderConstructor): void

export * from "../../../../../widget/custom/types"
