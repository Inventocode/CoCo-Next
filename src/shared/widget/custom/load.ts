"use strict"

export { getTemplate as e }
export { loadCustomWidget as r }
export { registerCustomWidget as v }
export { z as s }
export { Z as u }
export { te as w }
export { getPropertyTypes as l }
export { ce as m }
export { le as o }
export { getMethodTypes as j }
export { InvisibleWidget as c }
export { VisibleWidget as d }
export { isExtensions as q } from "./type"

import BabelRuntimeHelperRegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import * as AntdMobile from "antd-mobile"
import Color from "color"
import React, { ReactNode } from "react"
import Lodash from "lodash"
import { axiosWithCredentials } from "../../utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_228_index from "../../../../unrestored/shared/1571/2636/228/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_60 from "../../../../unrestored/shared/1571/2636/60"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../unrestored/shared/1571/2636/9"
import * as Language from "../../ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_49 from "../../../../unrestored/shared/1571/2636/49"
import * as ExternalModule from "./external-module"
import * as EventStore from "../../events/store"
import * as Message from "../../../editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../unrestored/shared/1571/2636/53"
import * as Shop from "./shop"
import * as restrict from "./restrict"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_20_index from "../../../../unrestored/shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_55 from "../../../../unrestored/shared/1571/2636/55"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_301_85 from "../../../../unrestored/shared/1571/2636/301/85"
import * as Type from "./type"

import * as types from "./types"
import * as Internal from "../internal/types"

class InvisibleWidget implements types.InvisibleWidget {

  public __widgetId: string
  public __widgetType: string

  public constructor(props: types.InvisibleWidgetProps) {
    this.__widgetId = props.__widgetId
    this.__widgetType = props.__widgetType
  }

  public emit(this: this, key: string, ...args: unknown[]): void {
    $$_$$_$$_$$_unrestored_shared_1571_2636_20_index.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args])
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetError({
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
    $$_$$_$$_$$_unrestored_shared_1571_2636_20_index.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args])
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(this.__widgetType, message)
    }
    $$_$$_$$_$$_unrestored_shared_1571_2636_55.b.widgetError({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public setProps(this: this, props: Record<string, unknown>): void {
    try {
      for (const key in props) {
        $$_$$_$$_$$_unrestored_shared_1571_2636_20_index.setProperty(this.__widgetId, key, props[key])
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
    eventsBlock.push({ xml: $$_$$_$$_$$_unrestored_shared_1571_2636_9.k, order: BlockOlder.EVENTORDER + 9999 })
  }
  if (methodsBlock.length) {
    methodsBlock.push({ xml: $$_$$_$$_$$_unrestored_shared_1571_2636_9.k, order: BlockOlder.METHODORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledSetter.length) {
    blocksOfPropertiesSetter.push.apply(blocksOfPropertiesSetter, blocksOfVisibleOrDisabledSetter)
  }
  if (blocksOfPropertiesSetter.length) {
    blocksOfPropertiesSetter.push({ xml: $$_$$_$$_$$_unrestored_shared_1571_2636_9.k, order: BlockOlder.SETORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledGetter.length) {
    blocksOfVisibleOrDisabledGetter.unshift({ xml: $$_$$_$$_$$_unrestored_shared_1571_2636_9.k, order: BlockOlder.GETORDER + 500 })
  }
  $$_$$_$$_$$_unrestored_shared_1571_2636_9.x(lines, type)
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
  const widthRange: [number, number] = [$$_$$_$$_$$_unrestored_shared_1571_2636_53.s, $$_$$_$$_$$_unrestored_shared_1571_2636_53.o]
  const heightRange: [number, number] = [$$_$$_$$_$$_unrestored_shared_1571_2636_53.q, $$_$$_$$_$$_unrestored_shared_1571_2636_53.m]
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
            label: Type.isExtensions(type) ? $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(type, key) : $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.b(type, label),
            key,
            addonAfter: unit
          }
          if (dropdown) {
            if (Type.isExtensions(type)) {
              editConfig.dropdown = dropdown
            } else {
              editConfig.dropdown = dropdown.map(function (dropdownItem: types.DropdownItemTypes): types.DropdownItemTypes {
                return {
                  label: $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.a(type, dropdownItem.label) || dropdownItem.label,
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
    editConfigs.push({
      type: "HelpUrl",
      url
    })
  }
  const b: string = $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.c(type)
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
      attributes: $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, attributes)
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

/**
 * 从代码加载自定义控件
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
): Promise<types.Exports> {
  async function loadExternalModule(url: string): Promise<void> {
    if (!url.startsWith(EXTERNAL_MODULE_BASE_URL) && !url.startsWith(OLD_EXTERNAL_MODULE_BASE_URL)) {
      return
    }
    await $$_$$_$$_$$_unrestored_shared_1571_2636_15.cb(url)
  }
  code = (await import("@babel/core")).transformSync(code, {
    presets: [(await import("@babel/preset-react")).default]
  })?.code || ""
  ExternalModule.clearExternalModules()
  new Function(
    "require",
    "exports",
    "InvisibleWidget",
    "VisibleWidget",
    "React",
    ...restrict.objectKeys,
    code
  ).apply(undefined, [
    ExternalModule.requireExternalModule,
    {},
    class {},
    class {},
    React,
    ...restrict.objectValues
  ])
  const EXTERNAL_MODULE_BASE_URL: string = "https://static.bcmcdn.com/appcraft/modules/"
  const OLD_EXTERNAL_MODULE_BASE_URL = "https://static.codemao.cn/appcraft/modules/"
  await Promise.all(ExternalModule.getExternalModules().map(loadExternalModule))
  const widgetExports: Partial<types.Exports> = {}
  new Function(
    "require",
    "exports",
    "InvisibleWidget",
    "VisibleWidget",
    "React",
    ...restrict.objectKeys,
    code
  ).apply(undefined, [
    widgetRequire,
    widgetExports,
    InvisibleWidget,
    VisibleWidget,
    React,
    ...restrict.objectValues
  ])
  const widgetTypes: types.Types = widgetExports.types!
  const widgetWidget: types.Widget = widgetExports.widget!
  if (!widgetTypes.isInvisibleWidget) {
    if (!widgetTypes.properties.some(function (property: types.PropertyTypes): boolean {
      return "__opacity" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: $$_$$_$$_$$_unrestored_shared_1571_2636_60.j,
        validators: {
          greaterThan: $$_$$_$$_$$_unrestored_shared_1571_2636_60.r,
          lessThan: $$_$$_$$_$$_unrestored_shared_1571_2636_60.j,
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
  return {
    types: widgetTypes,
    widget: widgetWidget
  }
}

/**
 * 注册自定义控件
 *
 * @param exports 控件的导出
 * @param onRegistered 成功注册控件后回调
 * @param onCancel 用户取消导入控件时回调
 */
export function registerCustomWidget(
  exports: types.Exports,
  onRegistered?: () => void,
  onCancel?: () => void
): void {
  const { widget, types } = exports
  const { title, type } = types
  function registered(): void {
    $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.e(types)
    const internalWidget = toInternalWidget(types, widget)
    $$_$$_$$_$$_unrestored_shared_1571_2636_9.Nb($$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION, [internalWidget])
    $$_$$_$$_$$_unrestored_shared_1571_2636_228_index.c(internalWidget.type)
    if (onRegistered) {
      onRegistered()
    }
  }
  if (Storage.getUnsafeExtension(type)) {
    const unprefixedType: string = Type.toUnprefixed(type, false)
    EventStore.dispatch(Message.wrapOpenConfirmDialog({
      onConfirm: registered,
      onCancel,
      allowText: Language.format(Language.zh_CN, "ExtensionWidget.overwrite").toString(),
      title: Language.format(Language.zh_CN, "ExtensionWidget.dialogTitle", {
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
        defaultValue: $$_$$_$$_$$_unrestored_shared_1571_2636_60.j,
        validators: {
          greaterThan: $$_$$_$$_$$_unrestored_shared_1571_2636_60.r,
          lessThan: $$_$$_$$_$$_unrestored_shared_1571_2636_60.j,
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
  $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.d(e$types, e$messages)
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
  const { types, widget } = await loadCustomWidget(code, isFromWidgetShop)
  return new Promise((resolve, reject): void => {
    registerCustomWidget(
      { types, widget },
      (): void => {
        const { type } = types
        if (!isFromWidgetShop) {
          Storage.addUnsafeExtension({ type, types, code })
          $$_$$_$$_$$_unrestored_shared_1571_2636_49.oTHelper.extensionWidget?.clientOp.addUnsafeExtensionWidget({ type, code })
        }
        EventStore.dispatch(Message.wrapUpdateExtensionWidgetList())
        resolve(types)
      },
      (): void => {
        reject("User cancel import widget")
      }
    )
  })
}

/**
 * 从 Blob 导入自定义控件
 *
 * @param blob 控件代码的 Blob
 * @param isFromWidgetShop 控件是否来自控件商城
 * @returns 控件的类型定义
 */
export async function importCostumeWidgetFromBlob(blob: Blob, isFromWidgetShop: boolean): Promise<types.Types> {
  const code: string = await new Promise((resolve, reject): void => {
    const fileReader = new FileReader()
    fileReader.readAsText(blob)
    fileReader.onload = (): void => {
      resolve(fileReader.result as string)
    }
    fileReader.onerror = reject
  })
  if (!isFromWidgetShop) {
    checkKeyWords(code)
  }
  return await importCustomWidget(code, isFromWidgetShop)
}

/**
 * 对控件代码进行关键词检查，如果检查不通过，则抛出异常
 *
 * @param code 控件代码
 */
function checkKeyWords(code: string): void {
  if (/getElementsByClassName\([\s\S]*readonly[\s\S]*\)/i.test(code)) {
    throw new Error("file getElementsByClassName(*readonly*) not allow")
  }
  const includedKeyWords: string[] = []
  restrict.keyWords.forEach((keyWord): void => {
    if (code.includes(keyWord)) {
      includedKeyWords.push(keyWord)
    }
  })
  if (includedKeyWords.length > 0) {
    EventStore.dispatch(Message.wrapOpenConfirmDialog({
      allowText: Language.format(Language.zh_CN, "cloudDb.know").toString(),
      title: "error",
      content: "自定义控件存在问题，不支持导入",
      cancelBtnVisible: false
    }))
    throw new Error(`file ${includedKeyWords.join("，")} not allow`)
  }
}

function Z(e, t) {
  return J.apply(this, arguments)
}
function J() {
  return (J = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$type
    return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.startsWith("https")) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            r = "".concat(t, "?t=").concat(Math.random())
            e.next = 5
            return axiosWithCredentials.get(r, {
              responseType: "blob",
              withCredentials: false
            })
          case 5:
            _e$sent = e.sent
            e.next = 8
            return importCostumeWidgetFromBlob(_e$sent.data, true)
          case 8:
            e$sent = e.sent
            e$sent$type = e$sent.type
            Storage.addSafeExtension({
              id: n,
              type: e$sent$type,
              types: e$sent,
              cdnUrl: t
            })
            return e.abrupt("return", e$sent)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}

export async function loadWidgetFromStorage(safeWidgetStorage: SafeExtensionFileStorage[], unsafeWidgetsStorage: UnsafeExtensionFileStorage[]) {
  async function importWidget(code: string): Promise<void> {
    const { types, widget } = await loadCustomWidget(code, false)
    registerCustomWidget({ types, widget })
    const { type } = types
    Storage.addUnsafeExtension({ type, types, code })
  }
  $$_$$_$$_$$_unrestored_shared_1571_2636_9.u($$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION)
  Storage.clear()
  if (unsafeWidgetsStorage.length) {
    await Promise.all(unsafeWidgetsStorage.map(({ code }): Promise<void> => importWidget(code)))
  }
  EventStore.dispatch(Message.wrapUpdateExtensionWidgetList())
  const onlineWidgetsStorage = safeWidgetStorage.filter((widget) =>
    widget.cdnUrl.startsWith("https") && widget.id)
  if (!onlineWidgetsStorage.length) {
    return
  }
  return Promise.all(onlineWidgetsStorage.map(function (e) {
    return Z(e.cdnUrl, e.id)
  }))
}
export { loadWidgetFromStorage as x }

function te(e, t, n) {
  return ne.apply(this, arguments)
}
function ne() {
  return (ne = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var a
    var s
    var c
    var l
    var u
    var d
    var p
    var /* [auto-meaningful-name] */_e$sent3
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
            if (_e$sent3 = e.sent, u = u.concat(_e$sent3.items), !((h = Math.ceil(_e$sent3.total / p)) > 1)) {
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
              return Z(e.cdnUrl, e.id)
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
  return widget ? $$_$$_$$_$$_unrestored_shared_1571_2636_301_85.a(type, widget.types.title) : ""
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

export function processCheckType(valueType: types.ValueType, checkType: types.CheckType | undefined) {
  const result = new Set()
  let types = checkType || valueType
  types = Array.isArray(types) ? types : [types]
  if (types.includes("string")) {
    types.push("number", "boolean", "object", "array")
  }
  if (types.includes("color") || types.includes("image") || types.includes("icon") || types.includes("richTextString")) {
    types.push("string")
  }
  types.forEach((type) => {
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
