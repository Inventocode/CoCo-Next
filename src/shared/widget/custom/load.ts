/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：34
 */

export { getTemplate as e }
export { loadCustomWidget as r }
export { registerCustomWidget as v }
export { z as s }
export { loadOnlineSafeWidget as u }
export { te as w }
export { getPropertyTypes as l }
export { ce as m }
export { le as o }
export { getMethodTypes as j }
export { InvisibleWidget as c }
export { VisibleWidget as d }
export { isExtensions, isExtensions as q } from "./type"

import BabelRuntimeHelperRegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import * as AntdMobile from "antd-mobile"
import Color from "color"
import React_0, { ReactNode } from "react"
import Lodash from "lodash"
import { axiosWithCredentials } from "../../utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"../../../../unrestored/shared/1571/2636/228/index"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../../../unrestored/shared/1571/2636/60"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as Language from "../../ui/language"
import { oTHelper } from "../../../editor/collaboration/ot-helper"
import * as ExternalModule from "./external-module"
import * as Store from "../../../editor/redux/store"
import { openConfirmDialogAction, updateExtensionWidgetListAction } from "../../../editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Tools from "../../tools"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../unrestored/shared/1571/2636/53"
import * as Shop from "./shop"
import * as Restrict from "./restrict"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../unrestored/shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../../unrestored/shared/1571/2636/55"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../unrestored/shared/1571/2636/34/85"
import * as Type from "./type"

import * as types from "./types"
import * as Internal from "../../../editor/widget/internal/types"

class InvisibleWidget implements types.InvisibleWidget {

  public __widgetId: string
  public __widgetType: string

  public constructor(props: types.InvisibleWidgetProps) {
    this.__widgetId = props.__widgetId
    this.__widgetType = props.__widgetType
  }

  public emit(this: this, key: string, ...args: unknown[]): void {
    Module_20.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args])
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetError({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetInterrupt(this: this, message: string): never {
    throw Error(message)
  }
}

import * as Storage from "./storage"
import { SafeExtensionFileStorage, UnsafeExtensionFileStorage } from "./storage"
import { pluginManager, REGISTRATIONS } from "../../plugin"
import { CoCoWidgetLoaderConstructor } from "../../packages/plugin-sdk/src/widget-loader/coco"
import { BaseWidgetLoaderTypes } from "../../packages/plugin-sdk/src"
import { InternalWidgetLoaderConstructor } from "../../packages/plugin-sdk/src/widget-loader/internal"
import { setBlockGroup } from "../../../editor/block/declare"
import { Blink } from "../../packages/@crc/blink/src"
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"../../../../unrestored/shared/1571/2636/118/index"
import { blockSnippetSettersForPlugin } from "../../plugin/snippet-for-plugin"

enum BlockOlder {
  EVENTORDER = 1e4,
  METHODORDER = 2e4,
  SETORDER = 3e4,
  GETORDER = 4e4,
}

class VisibleWidget implements types.VisibleWidget {

  public __widgetId: string
  public __widgetType: string
  public __width: number
  public __height: number

  public constructor(props: types.VisibleWidgetProps) {
    this.__widgetId = props.__widgetId
    this.__widgetType = props.__widgetType
    this.__width = props.__width
    this.__height = props.__height
  }

  public emit(this: this, key: string, ...args: unknown[]): void {
    Module_20.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args])
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = Module_85.b(this.__widgetType, message)
    }
    Module_55.b.widgetError({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public setProps(this: this, props: Record<string, unknown>): void {
    try {
      for (const key in props) {
        Module_20.setProperty(this.__widgetId, key, props[key])
      }
    } catch (error) {
      console.error("setProps error", error)
    }
  }

  public render(this: this): ReactNode {
    return null
  }
}

/**
 * 获取控件的积木模板（即在积木盒中的积木）
 *
 * @param widgetID 控件 ID
 * @param type 控件类型
 * @param types 控件的类型定义
 * @param isAnyWidget 是否是任意控件的
 * @returns 积木模板
 */
export function getTemplate(widgetID: string | null, type: string, types: types.Types, isAnyWidget: boolean): string[] {
  const blocksOfPropertiesGetter: {xml: string,order: number}[] = []
  const blocksOfVisibleOrDisabledGetter: {xml: string,order: number}[] = []
  const blocksOfPropertiesSetter: {xml: string,order: number}[] = []
  const blocksOfVisibleOrDisabledSetter: {xml: string,order: number}[] = []
  const methodsBlock: {xml: string,order: number}[] = []
  const eventsBlock: {xml: string,order: number}[] = []
  const lines: {lineLabel: string,text: string}[] = []
  types.methods.forEach(function ({ key, blockOptions = {} }): void {
    if (blockOptions.generateBlock !== false) {
      const order: number = blockOptions.order || BlockOlder.METHODORDER + methodsBlock.length + 1
      let xml: string = ""
      if (blockOptions.line) {
        const lineLabel: string = `flyout-line-${type}-method-${key}`
        lines.push({ lineLabel, text: blockOptions.line })
        xml = `<label type="${lineLabel}"></label>`
      }
      xml += `\n    <block type="widget_method" uncache="true">\n      <mutation\n        widget_type="${type}"\n        is_any_widget="${isAnyWidget}"\n        method="${key}">\n      </mutation>\n      <field name="WIDGET_ID">${widgetID}</field>\n    </block>`
      if (blockOptions.space) {
        xml += `<sep gap="${blockOptions.space}"></sep>`
      }
      methodsBlock.push({ xml, order })
    }
  })
  types.properties.forEach(function ({ key, blockOptions = {} }): void {
    if (false !== blockOptions.generateBlock && false !== blockOptions.getter?.generateBlock) {
      const order: number = blockOptions.getter?.order || BlockOlder.GETORDER + blocksOfPropertiesGetter.length + 1
      let xml: string = ""
      if (blockOptions.getter?.line) {
        const lineLabel: string = `flyout-line-${type}-property-${key}-getter`
        lines.push({ lineLabel, text: blockOptions.getter.line })
        xml = `<label type="${lineLabel}"></label>`
      }
      xml += `\n      <block type="widget_get" uncache="true">\n        <mutation\n          widget_type="${type}"\n          is_any_widget="${isAnyWidget}"\n          property="${key}">\n        </mutation>\n        <field name="WIDGET_ID">${widgetID}</field>\n      </block>`
      if (blockOptions.getter?.space) {
        xml += `<sep gap="${blockOptions.getter.space}"></sep>`
      }
      if ("__visible" === key || "__disabled" === key) {
        blocksOfVisibleOrDisabledGetter.push({ xml, order: order + 1e3 })
      } else {
        blocksOfPropertiesGetter.push({ xml, order })
      }
    }
  })
  types.properties.forEach(function ({ key, readonly, blockOptions = {} }): void {
    let generateBlock: boolean = true
    if (readonly) {
      generateBlock = false
    }
    if ("boolean" === typeof blockOptions.generateBlock) {
      generateBlock = blockOptions.generateBlock
    }
    if (blockOptions.setter) {
      generateBlock = true
    }
    if (blockOptions.setter?.generateBlock) {
      generateBlock = false
    }
    if (generateBlock) {
      const order: number = blockOptions.setter?.order || BlockOlder.SETORDER + blocksOfPropertiesSetter.length + 1
      let xml: string = ""
      if (blockOptions.setter?.line) {
        const lineLabel: string = `flyout-line-${type}-property-${key}-setter`
        lines.push({ lineLabel, text: blockOptions.setter.line })
        xml = `<label type="${lineLabel}"></label>`
      }
      xml += `\n      <block type="widget_set" uncache="true">\n        <mutation\n          widget_type="${type}"\n          is_any_widget="${isAnyWidget}"\n          property="${key}">\n        </mutation>\n        <field name="WIDGET_ID">${widgetID}</field>\n      </block>`
      if (blockOptions.setter?.space) {
        xml += `<sep gap="${blockOptions.setter.space}"></sep>`
      }
      if ("__visible" === key || "__disabled" === key) {
        blocksOfVisibleOrDisabledSetter.push({ xml, order: order + 1e3 })
      } else {
        blocksOfPropertiesSetter.push({ xml, order })
      }
    }
  })
  types.events.forEach(function ({ key, blockOptions = {} }): void {
    const order: number = blockOptions.order || BlockOlder.EVENTORDER + eventsBlock.length + 1
    let xml: string = ""
    if (blockOptions.line) {
      var lineLabel: string = `flyout-line-${type}-event-${key}`
      lines.push({ lineLabel, text: blockOptions.line })
      xml = `<label type="${lineLabel}"></label>`
    }
    xml += `\n    <block type="widget_event" uncache="true">\n      <mutation\n        widget_type="${type}"\n        is_any_widget="${isAnyWidget}"\n        event="${key}">\n      </mutation>\n      <field name="WIDGET_ID">${widgetID}</field>\n    </block>`
    eventsBlock.push({ xml, order })
  })
  if (eventsBlock.length) {
    eventsBlock.push({ xml: Module_9.k, order: BlockOlder.EVENTORDER + 9999 })
  }
  if (methodsBlock.length) {
    methodsBlock.push({ xml: Module_9.k, order: BlockOlder.METHODORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledSetter.length) {
    blocksOfPropertiesSetter.push.apply(blocksOfPropertiesSetter, blocksOfVisibleOrDisabledSetter)
  }
  if (blocksOfPropertiesSetter.length) {
    blocksOfPropertiesSetter.push({ xml: Module_9.k, order: BlockOlder.SETORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledGetter.length) {
    blocksOfVisibleOrDisabledGetter.unshift({ xml: Module_9.k, order: BlockOlder.GETORDER + 500 })
  }
  Module_9.x(lines, type)
  return [
    ...eventsBlock,
    ...methodsBlock,
    ...blocksOfPropertiesSetter,
    ...blocksOfPropertiesGetter,
    ...blocksOfVisibleOrDisabledGetter
  ].
    sort(function (a, b): number {
      return a.order - b.order
    }).map(function (block): string {
      return block.xml
    })
}

function F() {}

/**
 * 将自定义控件转为内部控件。
 *
 * @param types 自定义控件的类型定义
 * @param widget 自定义控件的实体定义
 * @returns 内部控件
 */
function toInternalWidget(types: types.Types, widget: types.Widget): Internal.Widget {
  const { type, icon, properties, isGlobalWidget = true, isInvisibleWidget = true, contentTextField } = types
  const editConfigs: (Internal.EditConfig | Internal.EditConfig[])[] = [
    {
      type: "WidgetTitle",
      hasDisableOrVisible: properties.some(function (e) {
        return "__disabled" === e.key || "__visible" === e.key
      })
    }
  ]
  const disableAndVisibleEditConfigs: Internal.EditConfig[] = [
    {
      type: "VisibleSwitch"
    }
  ]
  if (!isInvisibleWidget) {
    editConfigs.push(disableAndVisibleEditConfigs)
  }
  const size: Internal.Size = isInvisibleWidget ? { width: 0, height: 0 } : { width: 100, height: 60 }
  const widthRange: [number, number] = [Module_53.s, Module_53.o]
  const heightRange: [number, number] = [Module_53.q, Module_53.m]
  const attributes: Record<string, number | string | boolean> = {}
  properties.forEach(function ({
    defaultValue,
    valueType,
    editorType,
    hidePropertyEditor,
    key,
    readonly,
    dropdown,
    label,
    unit,
    validators
  }): void {
    if ("__disabled" === key) {
      disableAndVisibleEditConfigs.push({
        type: "DisabledSwitch"
      })
    }
    if ("__width" === key) {
      size.width = defaultValue as number
      if (validators?.greaterThan) {
        widthRange[0] = getValidatorsGreaterThanValue(validators)
      }
      if (validators?.lessThan) {
        widthRange[1] = getValidatorsLessThanValue(validators)
      }
      return
    }
    if ("__height" === key) {
      size.height = defaultValue as number
      if (validators?.greaterThan) {
        heightRange[0] = getValidatorsGreaterThanValue(validators)
      }
      if (validators?.lessThan) {
        heightRange[1] = getValidatorsLessThanValue(validators)
      }
      return
    }
    const finalEditorType: types.EditorType = editorType || (dropdown ? "Select" : function (valueType, defaultValue): types.EditorType {
      let editorType: types.EditorType
      let editorValueType: string = ""
      if (Array.isArray(valueType)) {
        const defaultValueType: string = typeof defaultValue
        editorValueType = "number" !== defaultValueType && "string" !== defaultValueType && "boolean" !== defaultValueType || !valueType.includes(defaultValueType) ? valueType[0]! : defaultValueType
      } else {
        editorValueType = valueType
      }
      switch (editorValueType) {
        case "string":
          editorType = "TextInput"
          break
        case "number":
          editorType = "InputNumber"
          break
        case "boolean":
          editorType = "AntSwitch"
          break
        case "color":
          editorType = "Color"
          break
        default:
          editorType = "TextInput"
      }
      return editorType
    }(valueType, defaultValue))
    if (!["__position", "__size", "__opacity", "__visible", "__disabled"].includes(key)) {
      attributes[key] = defaultValue
      if (finalEditorType) {
        if (!readonly && !hidePropertyEditor) {
          const editConfig: Internal.EditConfig = {
            type: finalEditorType,
            label: Type.isExtensions(type) ? Module_85.b(type, key) : Module_85.b(type, label),
            key,
            addonAfter: unit
          }
          if (dropdown) {
            if (Type.isExtensions(type)) {
              editConfig.dropdown = dropdown
            } else {
              editConfig.dropdown = dropdown.map(function (dropdownItem: types.DropdownItemTypes): types.DropdownItemTypes {
                return {
                  label: Module_85.a(type, dropdownItem.label) || dropdownItem.label,
                  value: dropdownItem.value
                }
              })
            }
          }
          editConfigs.push(editConfig)
        }
      } else {
        console.error(`Property type ${valueType} is not supported.`)
      }
    }
  })
  if (!isInvisibleWidget) {
    editConfigs.push({
      type: "WidgetOpacity"
    })
    editConfigs.push({
      type: "Size",
      label: "",
      key: "size",
      sizeRange: [widthRange, heightRange]
    })
    editConfigs.push({
      type: "Coordinate",
      label: "",
      key: "position"
    })
  }
  if (types.docs?.url) {
    const { url } = types.docs
    editConfigs.push({ type: "HelpUrl", url })
  }
  const b: string = Module_85.c(type)
  return {
    type,
    icon,
    title: contentTextField ? "" : b,
    contentTextField: contentTextField,
    hasAnyWidget: !!types.hasAnyWidget,
    previewAreaWidgetTitle: b,
    component: widget,
    widget: {
      size,
      isGlobalWidget,
      attributes: Module_6.a({}, attributes)
    },
    editConfig: editConfigs,
    isInvisibleWidget,
    blockConfig: {
      type,
      category: {
        iconId: icon,
        blocks: type
      },
      getTemplate: function (widgetID: string): string[] {
        return getTemplate(widgetID, type, types, false)
      },
      blockDeclareGroup: {
        setBlockGroupSnippet: F,
        setBlockGroupProfile: F
      },
      renameBlocksInfo: {
        blocksList: ["widget_event", "widget_method", "widget_get", "widget_set"],
        fieldName: "WIDGET_ID"
      },
      topBlocks: [],
      categoryClass: {
        text: "",
        iconId: "",
        blocks: []
      }
    }
  }
}

function defaultRequire(id: string): unknown {
  return id === "antd-mobile" ? AntdMobile : id === "color" ? Color : undefined
}

interface CustomWidgetData {
  type: string
  name: string
  loader: string
  sandbox: string | boolean
}

abstract class InternalWidgetWrapper extends VisibleWidget {}

/**
 * 从代码加载自定义控件
 *
 * [CoCo Next] 添加对更多控件的支持
 *
 * @param code 控件代码
 * @param isFromWidgetShop 控件是否来自控件商城
 * @param widgetRequire 自定义控件的 require 函数
 * @returns 控件的类型定义和实体定义
 */
export async function loadCustomWidget(
  code: string,
  isFromWidgetShop: boolean,
  widgetRequire: (id: string) => unknown = defaultRequire
): Promise<types.Exports | { types: Internal.Widget, widget: types.Widget }> {
  const loaderName = code.match(/^\/\/ __coco_next_loader__: (.*)/)?.[1]
  if (loaderName !== undefined) {
    await pluginManager.ensureInstalled(loaderName)
  }
  let loaderTypes: BaseWidgetLoaderTypes | null = null
  let isInternal = false
  if (loaderName !== undefined) {
    try {
      loaderTypes = await REGISTRATIONS.CoCoWidgetLoader.get(loaderName)
    } catch (__ignore) {}
    try {
      loaderTypes = await REGISTRATIONS.InternalWidgetLoader.get(loaderName)
      isInternal = true
    } catch (__ignore) {}
    if (loaderTypes === null) {
      throw new Error(`插件 ${loaderName} 不存在或未注册控件加载器`)
    }
  }
  let preprocess = loaderTypes?.preprocess ?? {}
  if (typeof preprocess === "boolean") {
    preprocess = { jsx: preprocess, esModule: preprocess }
  }
  preprocess = {
    jsx: true,
    esModule: false,
    ...preprocess
  }
  if (Object.values(preprocess).some(Boolean)) {
    code = (await (await import("@babel/core")).transformAsync(code, {
      presets: [
        ...preprocess.jsx ? [(await import("@babel/preset-react")).default] : []
      ],
      plugins: [
        ...preprocess.esModule ? [(await import("@babel/plugin-transform-modules-commonjs")).default] : []
      ]
    }))?.code || ""
  }
  ExternalModule.clearExternalModules()
  let widgetFunction: (
      require: (id: string) => unknown,
      exports: Partial<types.Exports | { types: Internal.Widget, widget?: types.Widget }>,
      InvisibleWidget: new (props: types.InvisibleWidgetProps) => types.InvisibleWidget,
      VisibleWidget: new (props: types.VisibleWidgetProps) => types.VisibleWidget,
      React: typeof React_0
  ) => void | Promise<void>
  let widgetMarkResolve: ((value: string) => void) | null = null
  if (loaderTypes === null) {
    widgetFunction = new Function("require", "exports", "InvisibleWidget", "VisibleWidget", "React", code).bind(window)
  } else if (!isInternal) {
    let loaderConstructor: CoCoWidgetLoaderConstructor
    ;[loaderConstructor, widgetMarkResolve] = await pluginManager.getPluginLoader(loaderName!).loadCoCoWidgetLoader()
    const loader = new loaderConstructor(code)
    widgetFunction = loader.run.bind(loader) as typeof widgetFunction
  } else {
    let loaderConstructor: InternalWidgetLoaderConstructor
    ;[loaderConstructor, widgetMarkResolve] = await pluginManager.getPluginLoader(loaderName!).loadInternalWidget()
    widgetFunction = async (__require, exports, __InvisibleWidget, __VisibleWidget, React) => {
      const loader = new loaderConstructor(code)
      exports.types = await loader.run({ React })
      exports.widget = class extends InternalWidgetWrapper {
        public constructor(props: types.VisibleWidgetProps) {
          super(props)
          loader.createInstance?.({ id: props.__widgetId, type: props.__widgetType, attributes: props })
        }
        public override render() {
          return React_0.createElement((widgetTypes as Internal.Widget).component as any, this)
        }
      }
      Storage.setInternalWidgetLoader(Type.standardize(exports.types.type, isFromWidgetShop), loader)
    }
  }
  if (!isInternal) {
    await widgetFunction(ExternalModule.requireExternalModule, {}, class {} as any, class {} as any, React_0)
    const EXTERNAL_MODULE_BASE_URL: string = "https://static.bcmcdn.com/appcraft/modules/"
    const OLD_EXTERNAL_MODULE_BASE_URL = "https://static.codemao.cn/appcraft/modules/"
    async function loadExternalModule(url: string): Promise<void> {
      if (!url.startsWith(EXTERNAL_MODULE_BASE_URL) && !url.startsWith(OLD_EXTERNAL_MODULE_BASE_URL)) {
        return
      }
      await Tools.cb(url)
    }
    await Promise.all(ExternalModule.getExternalModules().map(loadExternalModule))
  }
  const widgetExports: Partial<types.Exports | { types: Internal.Widget, widget?: undefined }> = {}
  await widgetFunction(widgetRequire, widgetExports, InvisibleWidget, VisibleWidget, React_0)
  const widgetTypes = widgetExports.types!
  const widgetWidget = widgetExports.widget!
  widgetMarkResolve?.(widgetTypes.title !== undefined ? `[控件 ${widgetTypes.title}]` : "[未知控件]")
  if ("properties" in widgetTypes && !widgetTypes.isInvisibleWidget) {
    if (!widgetTypes.properties.some(function (property: types.PropertyTypes): boolean {
      return "__opacity" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: Module_60.j,
        validators: {
          greaterThan: Module_60.r,
          lessThan: Module_60.j,
          isInteger: true
        }
      })
    }
    if (!widgetTypes.properties.some(function (property: types.PropertyTypes): boolean {
      return "__position" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      })
    }
    if (!widgetTypes.properties.some(function (property: types.PropertyTypes): boolean {
      return "__visible" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__visible",
        label: "",
        valueType: "boolean",
        defaultValue: true
      })
    }
  }
  widgetTypes.type = Type.standardize(widgetTypes.type, isFromWidgetShop)
  if ("blockConfig" in widgetTypes) {
    const { blockConfig } = widgetTypes
    blockConfig.type = Type.standardize(blockConfig.type, isFromWidgetShop)
    const { category } = blockConfig
    category.blocks = Type.standardize(blockConfig.type, isFromWidgetShop)
    // 为防止通过 getter 绕过检查，这里把 `blockDeclareGroup` 复制了一份。
    const blockDeclareGroup = Object.assign({}, blockConfig.blockDeclareGroup)
    if (
      blockDeclareGroup.setBlockGroupSnippet !== undefined &&
      !blockSnippetSettersForPlugin.has(blockDeclareGroup.setBlockGroupSnippet)) {
        throw new Error("出于安全考虑，由插件提供的内置控件只能通过 createBlockSnippetSetter 创建代码生成器")
      }
    setBlockGroup(Blink, Module_118.a, blockDeclareGroup)
  }
  return {
    types: widgetTypes,
    widget: widgetWidget
  } as any
}

/**
 * 注册自定义控件
 *
 * [CoCo Next] 添加对内部控件的支持
 *
 * @param exports 控件的导出
 * @param onRegistered 成功注册控件后回调
 * @param onCancel 用户取消导入控件时回调
 */
export function registerCustomWidget(
  exports: types.Exports | { types: Internal.Widget, widget: types.Widget },
  onRegistered?: () => void,
  onCancel?: () => void
): void {
  const { widget, types } = exports
  const { title, type } = types
  function registered(): void {
    const isInternal = widget.prototype instanceof InternalWidgetWrapper
    if (!isInternal) {
      Module_85.e(types)
    }
    const internalWidget = isInternal ? types as Internal.Widget : toInternalWidget(types as types.Types, widget)
    Module_9.Nb(Module_9.j.EXTENSION, [internalWidget])
    Module_228.c(internalWidget.type)
    if (onRegistered) {
      onRegistered()
    }
  }
  if (Storage.getUnsafeExtension(type)) {
    const unprefixedType: string = Type.toUnprefixed(type, false)
    Store.dispatch(openConfirmDialogAction({
      onConfirm: registered,
      onCancel,
      allowText: Language.format(Language.locale, "ExtensionWidget.overwrite").toString(),
      title: Language.format(Language.locale, "ExtensionWidget.dialogTitle", {
        title,
        type: unprefixedType
      }).toString(),
      isDangerous: true
    }))
  } else {
    registered()
  }
}

function z(e, t) {
  var e$types = e.types
  var e$messages = e.messages
  if (!e$types.isInvisibleWidget) {
    if (!e$types.properties.some(function (e) {
      return "__opacity" === e.key
    })) {
      e$types.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: Module_60.j,
        validators: {
          greaterThan: Module_60.r,
          lessThan: Module_60.j,
          isInteger: true
        }
      })
    }
    if (!e$types.properties.some(function (e) {
      return "__position" === e.key
    })) {
      e$types.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      })
    }
    if (!e$types.properties.some(function (e) {
      return "__visible" === e.key
    })) {
      e$types.properties.push({
        key: "__visible",
        label: "",
        valueType: "boolean",
        defaultValue: true
      })
    }
  }
  Module_85.d(e$types, e$messages)
  var o = toInternalWidget(e$types, t)
  Storage.addUnsafeExtension({
    types: e$types,
    type: e$types.type,
    code: ""
  })
  return o
}

/**
 * 导入自定义控件
 *
 * @param code 控件代码
 * @param isFromWidgetShop 控件是否来自控件商城
 * @returns 控件的类型定义
 */
async function importCustomWidget(code: string, isFromWidgetShop: boolean): Promise<types.Types> {
  try {
    const { types, widget } = await loadCustomWidget(code, isFromWidgetShop, defaultRequire)
    return new Promise((resolve, reject): void => {
      registerCustomWidget(
        { types, widget },
        (): void => {
          const { type } = types
          if (!isFromWidgetShop) {
            Storage.addUnsafeExtension({ type, types, code })
            oTHelper.extensionWidget?.clientOp.addUnsafeExtensionWidget({ type, code })
          }
          Store.dispatch(updateExtensionWidgetListAction())
          resolve(types)
        },
        (): void => {
          reject("User cancel import widget")
        }
      )
    })
  } catch (error) {
    console.error(error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    Store.dispatch(openConfirmDialogAction({
      allowText: Language.format(Language.locale, "cloudDb.know").toString(),
      title: "加载自定义控件出错",
      content: errorMessage + "\n\n详细错误信息请到浏览器控制台中查看",
      cancelBtnVisible: false
    }))
    throw error
  }
}

/**
 * 从 Blob 导入自定义控件
 *
 * @param blob 控件代码的 Blob
 * @param isFromWidgetShop 控件是否来自控件商城
 * @param loaderName [CoCo Next] 控件加载器的包名
 * @returns 控件的类型定义
 */
export async function importCostumeWidgetFromBlob(
  blob: Blob,
  isFromWidgetShop: boolean,
  loaderName?: string
): Promise<types.Types> {
  let code: string = await new Promise((resolve, reject): void => {
    const fileReader = new FileReader()
    fileReader.readAsText(blob)
    fileReader.onload = (): void => {
      resolve(fileReader.result as string)
    }
    fileReader.onerror = reject
  })
  if (!isFromWidgetShop) {
    await checkKeyWords(code)
  }
  if (loaderName !== undefined) {
    code = `// __coco_next_loader__: ${loaderName}\n${code}`
  }
  return await importCustomWidget(code, isFromWidgetShop)
}

/**
 * [CoCo Next] 移除导入控件时的关键词检查
 *
 * 对控件代码进行关键词检查，如果存在危险关键词，则询问用户是否继续导入，如果用户拒绝，则抛出异常
 *
 * @param code 控件代码
 */
async function checkKeyWords(code: string) {
  return new Promise<void>((resolve, reject) => {
    const messages: string[] = []
    if (/getElementsByClassName\([\s\S]*readonly[\s\S]*\)/i.test(code)) {
      messages.push("CoCo 不允许 getElementsByClassName(*readonly*)，虽然 CoCo Next 允许它，但是可能导致作品在 CoCo 中出现异常")
    }
    const includedKeyWords: string[] = []
    Restrict.keyWords.forEach((keyWord): void => {
      if (code.includes(keyWord)) {
        includedKeyWords.push(keyWord)
      }
    })
    if (includedKeyWords.length > 0) {
      messages.push(`自定义控件存在危险关键词：${includedKeyWords.join("、")}，虽然 CoCo Next 允许自定义控件存在危险关键词，但是可能导致作品在 CoCo 中出现异常`)
    }
    if (messages.length > 0) {
      Store.dispatch(openConfirmDialogAction({
        onConfirm() { resolve() },
        onCancel() { reject(new Error("User cancel import widget")) },
        allowText: "确认导入",
        title: messages.join("\n"),
        isDangerous: true
      }))
    } else {
      resolve()
    }
  })
}

async function loadOnlineSafeWidget(cdnUrl: string, id: number): Promise<void | types.Types> {
  if (!cdnUrl.startsWith("https")) {
    return
  }
  if (cdnUrl.startsWith("https://static.codemao.cn")) {
    cdnUrl.replace("https://static.codemao.cn", "https://static.bcmcdn.com")
  }
  const requestUrl = `${cdnUrl}?t=${Math.random()}`
  const response = await axiosWithCredentials.get(requestUrl, {
    responseType: "blob",
    withCredentials: false
  })
  const types = await importCostumeWidgetFromBlob(response.data, true)
  const { type } = types
  Storage.addSafeExtension({ id, type, types, cdnUrl })
  return types
}

export async function loadWidgetsFromFile(
  safeWidgets: SafeExtensionFileStorage[],
  unsafeWidgets: UnsafeExtensionFileStorage[]
) {
  async function importWidget(code: string): Promise<void> {
    const { types, widget } = await loadCustomWidget(code, false)
    registerCustomWidget({ types, widget })
    const { type } = types
    Storage.addUnsafeExtension({ type, types, code })
  }
  Module_9.u(Module_9.j.EXTENSION)
  Storage.clear()
  if (unsafeWidgets.length) {
    await Promise.all(unsafeWidgets.map(({ code }): Promise<void> => importWidget(code)))
  }
  Store.dispatch(updateExtensionWidgetListAction())
  const onlineSafeWidgets = safeWidgets.filter((widget) =>
    widget.cdnUrl.startsWith("https") && widget.id)
  if (!onlineSafeWidgets.length) {
    return
  }
  return Promise.all(onlineSafeWidgets.map((widget) => loadOnlineSafeWidget(widget.cdnUrl, widget.id)))
}

function te(e, t, n) {
  return ne.apply(this, arguments)
}
function ne() {
  return (ne = Module_7.a(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var a
    var s
    var c
    var l
    var u
    var d
    var p
    var /* [auto-meaningful-name] */e$sent1
    var h
    var /* [auto-meaningful-name] */e$sent
    var g
    return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = {}
            for (a in n) {
              s = n[a]
              if (Type.isSafeExtensions(s.type)) {
                o[s.type] = true
              }
            }
            for (c in r) {
              l = r[c]
              if (Type.isSafeExtensions(l.type)) {
                o[l.type] = true
              }
            }
            t.forEach(function (e) {
              o[e.type] = false
              delete o[e.type]
            })
            if (!(Object.keys(o).length > 0)) {
              e.next = 26
              break
            }
            u = []
            d = 1
            p = 100
            e.next = 10
            return Shop.e(d, p)
          case 10:
            if (e$sent1 = e.sent, u = u.concat(e$sent1.items), !((h = Math.ceil(e$sent1.total / p)) > 1)) {
              e.next = 23
              break
            }
            d += 1
          case 15:
            if (!(d <= h)) {
              e.next = 23
              break
            }
            e.next = 18
            return Shop.e(d, p)
          case 18:
            e$sent = e.sent
            u = u.concat(e$sent.items)
          case 20:
            d++
            e.next = 15
            break
          case 23:
            g = []
            u.forEach(function (e) {
              var t = "".concat(Type.SAFE_EXTENSION_PREFIX).concat(e.widget_code)
              if (o[t] && e.resource_url.startsWith("https")) {
                g.push({
                  id: e.id,
                  type: t,
                  cdnUrl: e.resource_url
                })
              }
            })
            return e.abrupt("return", Promise.all(g.map(function (e) {
              return loadOnlineSafeWidget(e.cdnUrl, e.id)
            })))
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}

export function getWidgetTitle(type: string) {
  var widget = Storage.getExtension(type)
  return widget ? Module_85.a(type, widget.types.title) : ""
}

export function getPropertyTypes(type: string, key: string): types.PropertyTypes | void {
  const widget = Storage.getExtension(type)
  if (widget?.types) {
    return widget.types.properties.find(property => property.key === key)
  }
}

function ie(e, t) {
  var n = Storage.getExtension(e)
  if (null === n || undefined === n ? undefined : n.types) {
    var r = n.types.properties.find(function (e) {
      return e.key === t
    })
    if (r) {
      if ("number" === r.valueType && r.validators) {
        return r.validators
      }
    }
  }
}

export function getValidatorsGreaterThanValue(validators: types.Validators) {
  let result
  if (validators.greaterThan !== undefined) {
    result = typeof validators.greaterThan === "number" ? validators.greaterThan : validators.greaterThan.value
  }
  return result
}

export function getValidatorsLessThanValue(validators: types.Validators) {
  let result
  if (validators.lessThan !== undefined) {
    result = typeof validators.lessThan === "number" ? validators.lessThan : validators.lessThan.value
  }
  return result
}

function ce(e, t) {
  var n = ie(e, t)
  if (n) {
    return getValidatorsLessThanValue(n)
  }
}
function le(e, t) {
  var n = ie(e, t)
  if (n) {
    return getValidatorsGreaterThanValue(n)
  }
}
export function getMethodTypes(type: string, key: string): types.MethodTypes | void {
  const widget = Storage.getExtension(type)
  if (widget?.types) {
    return widget.types.methods.find((method) => method.key === key)
  }
}

export function getEventTypes(type: string, key: string): types.EventTypes | void {
  const widget = Storage.getExtension(type)
  if (widget?.types) {
    return widget.types.events.find((event) => event.key === key)
  }
}

export function processCheckType(
  valueType: types.ValueType,
  checkType: types.CheckType | undefined,
  defaultValue: string | number | boolean
) {
  const result = new Set()
  let types = checkType || valueType
  types = Array.isArray(types) ? types : [types]
  if (types.includes("string")) {
    types.push("number", "boolean", "object", "array")
  }
  if (types.includes("color") || types.includes("image") || types.includes("icon") || types.includes("richTextString")) {
    types.push("string")
  }
  // [CoCo Next] 把默认值类型添加到检查类型中，防止默认值类型不在检查类型中导致积木被异常分离
  const typeofDefaultValue = typeof defaultValue
  switch (typeofDefaultValue) {
    case "string":
    case "number":
    case "boolean":
      types.push(typeofDefaultValue)
      break
    default:
      types.push("string")
      break
  }
  types.forEach(type => {
    result.add(Lodash.upperFirst(`${type}`))
  })
  return Array.from(result)
}

export function processValueType(valueType: types.ValueType) {
  const result = new Set()
  const types = Array.isArray(valueType) ? valueType : [valueType]
  if (types.includes("color") || types.includes("image")) {
    types.push("string")
  }
  types.forEach((type) => {
    result.add(Lodash.upperFirst(`${type}`))
  })
  return Array.from(result)
}

export function processEventKey(type: string, key: string) {
  return `${type}_${key}`
}

export const ANY_WIDGET_KEY = "widget"
export const ANY_WIDGET_LABEL = "控件"
