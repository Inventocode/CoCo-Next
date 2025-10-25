"use strict";

export { getTemplate as e }
export { loadCustomWidget as r }
export { registerCustomWidget as v }
export { z as s };
export { Z as u };
export { te as w };
export { oe as l };
export { ae as p };
export { se as n };
export { ce as m };
export { le as o };
export { getWidgetMethodTypes as j };
export { de as h };
export { fe as g };
export { he as i };
export { InvisibleWidget as c }
export { VisibleWidget as d }
export { isExtensions as q } from "./type"
export { me as a };
export { ge as b };

import BabelRuntimeHelperRegeneratorRuntime from "regenerator-runtime"
import l = require("../../../../unrestored/shared/1531/2584/7");
import u = require("../../../../unrestored/shared/1531/2584/6");
import AntdMobile = require("antd-mobile");
import Color from "color"
import React, { ReactNode } from "react"
import _ from "lodash"
import g = require("../../utils/network/axios-with-credentials");
import v = require("../../../../unrestored/shared/1531/2584/227/index");
import b = require("../../../../unrestored/shared/1531/2584/60");
import y = require("../../../../unrestored/shared/1531/2584/9");
import * as Language from "../../ui/language"
import O = require("../../../../unrestored/shared/1531/2584/49/index");
import ExternalModule = require("./external-module");
import Event = require("../../events/actions");
import * as Message from "../../events/messages-wrapper"
import S = require("../../../../unrestored/shared/1531/2584/15");
import I = require("../../../../unrestored/shared/1531/2584/53");
import A = require("./shop");
import * as restrict from "./restrict"
import R = require("../../../../unrestored/shared/1531/2584/21/index");
import k = require("../../../../unrestored/shared/1531/2584/55");
import x = require("../../../../unrestored/shared/1531/2584/36/85");
import Type = require("./type");

import * as t from "./types"
import * as Internal from "../internal/types"

class InvisibleWidget implements t.InvisibleWidget {

  public __widgetId: string
  public __widgetType: string

  public constructor(props: t.InvisibleWidgetProps) {
    this.__widgetId = props.__widgetId
    this.__widgetType = props.__widgetType
  }

  public emit(this: this, key: string, ...args: unknown[]): void {
    R.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args]);
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetError({
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
  GETORDER = 4e4
}

class VisibleWidget implements t.VisibleWidget {

  public __widgetId: string
  public __widgetType: string
  public __width: number
  public __height: number

  public constructor(props: t.VisibleWidgetProps) {
    this.__widgetId = props.__widgetId
    this.__widgetType = props.__widgetType
    this.__width = props.__width
    this.__height = props.__height
  }

  public emit(this: this, key: string, ...args: unknown[]): void {
    R.emitWidgetEvent.apply(undefined, [this.__widgetType, key, this.__widgetId, ...args]);
  }

  public widgetLog(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetLog({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetWarn(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetWarn({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public widgetError(this: this, message: string, values?: unknown): void {
    if (!Type.isExtensions(this.__widgetType)) {
      message = x.b(this.__widgetType, message)
    }
    k.b.widgetError({
      widgetId: this.__widgetId,
      widgetType: this.__widgetType,
      message,
      values
    })
  }

  public setProps(this: this, props: Record<string, unknown>): void {
    try {
      for (const key in props) {
        R.setProperty(this.__widgetId, key, props[key]);
      }
    } catch (error) {
      console.error("setProps error", error);
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
export function getTemplate(widgetID: string | null, type: string, types: t.Types, isAnyWidget: boolean): string[] {
  const blocksOfPropertiesGetter: { xml: string, order: number }[] = []
  const blocksOfVisibleOrDisabledGetter: { xml: string, order: number }[] = []
  const blocksOfPropertiesSetter: { xml: string, order: number }[] = []
  const blocksOfVisibleOrDisabledSetter: { xml: string, order: number }[] = []
  const methodsBlock: { xml: string, order: number }[] = []
  const eventsBlock: { xml: string, order: number }[] = []
  const lines: { lineLabel: string, text: string }[] = []
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
      let xml: string = "";
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
    eventsBlock.push({ xml: y.k, order: BlockOlder.EVENTORDER + 9999 })
  }
  if (methodsBlock.length) {
    methodsBlock.push({ xml: y.k, order: BlockOlder.METHODORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledSetter.length) {
    blocksOfPropertiesSetter.push.apply(blocksOfPropertiesSetter, blocksOfVisibleOrDisabledSetter)
  }
  if (blocksOfPropertiesSetter.length) {
    blocksOfPropertiesSetter.push({ xml: y.k, order: BlockOlder.SETORDER + 9999 })
  }
  if (blocksOfVisibleOrDisabledGetter.length) {
    blocksOfVisibleOrDisabledGetter.unshift({ xml: y.k, order: BlockOlder.GETORDER + 500 })
  }
  y.x(lines, type)
  return [
    ...eventsBlock,
    ...methodsBlock,
    ...blocksOfPropertiesSetter,
    ...blocksOfPropertiesGetter,
    ...blocksOfVisibleOrDisabledGetter
  ].sort(function (a, b): number {
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
function toInternalWidget(types: t.Types, widget: t.Widget): Internal.Widget {
  const { type, icon, properties, isGlobalWidget = true, isInvisibleWidget = true, contentTextField } = types
  const editConfigs: (Internal.EditConfig | Internal.EditConfig[])[] = [{
    type: "WidgetTitle",
    hasDisableOrVisible: properties.some(function (e) {
      return "__disabled" === e.key || "__visible" === e.key
    })
  }]
  const disableAndVisibleEditConfigs: Internal.EditConfig[] = [{
    type: "VisibleSwitch"
  }]
  if (!isInvisibleWidget) {
    editConfigs.push(disableAndVisibleEditConfigs)
  }
  const size: Internal.Size = isInvisibleWidget ? { width: 0, height: 0 } : { width: 100, height: 60 }
  const widthRange: [number, number] = [I.s, I.o]
  const heightRange: [number, number] = [I.q, I.m]
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
        widthRange[0] = ae(validators)
      }
      if (validators?.lessThan) {
        widthRange[1] = se(validators)
      }
      return
    }
    if ("__height" === key) {
      size.height = defaultValue as number
      if (validators?.greaterThan) {
        heightRange[0] = ae(validators)
      }
      if (validators?.lessThan) {
        heightRange[1] = se(validators)
      }
      return
    }
    const finalEditorType: t.EditorType = editorType || (dropdown ? "Select" : function (valueType, defaultValue): t.EditorType {
      let editorType: t.EditorType
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
            label: Type.isExtensions(type) ? x.b(type, key) : x.b(type, label),
            key,
            addonAfter: unit
          }
          if (dropdown) {
            if (Type.isExtensions(type)) {
              editConfig.dropdown = dropdown
            } else {
              editConfig.dropdown = dropdown.map(function (dropdownItem: t.DropdownItemTypes): t.DropdownItemTypes {
                return {
                  label: x.a(type, dropdownItem.label) || dropdownItem.label,
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
  const b: string = x.c(type)
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
      attributes: u.a({}, attributes)
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
): Promise<t.Exports> {
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
    code
  ).apply(undefined, [
    ExternalModule.requireExternalModule,
    {},
    class {},
    class {},
    React
  ])
  const EXTERNAL_MODULE_BASE_URL: string = "https://static.codemao.cn/appcraft/modules/"
  await Promise.all(ExternalModule.getExternalModules().map(
    async (url: string): Promise<void> => {
      if (!url.startsWith(EXTERNAL_MODULE_BASE_URL)) {
        return
      }
      await S.cb(url)
    }
  ))
  const widgetExports: Partial<t.Exports> = {}
  new Function(
    "require",
    "exports",
    "InvisibleWidget",
    "VisibleWidget",
    "React",
    code
  ).apply(undefined, [
    widgetRequire,
    widgetExports,
    InvisibleWidget,
    VisibleWidget,
    React
  ])
  const widgetTypes: t.Types = widgetExports.types!
  const widgetWidget: t.Widget = widgetExports.widget!
  if (!widgetTypes.isInvisibleWidget) {
    if (!widgetTypes.properties.some(function (property: t.PropertyTypes): boolean {
      return "__opacity" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: b.j,
        validators: {
          greaterThan: b.r,
          lessThan: b.j,
          isInteger: true
        }
      })
    }
    if (!widgetTypes.properties.some(function (property: t.PropertyTypes): boolean {
      return "__position" === property.key
    })) {
      widgetTypes.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      })
    }
    if (!widgetTypes.properties.some(function (property: t.PropertyTypes): boolean {
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
  exports: t.Exports,
  onRegistered?: () => void,
  onCancel?: () => void
): void {
  const { widget, types } = exports
  const { title, type } = types
  function registered(): void {
    x.e(types)
    const e = toInternalWidget(types, widget)
    y.Nb(y.j.EXTENSION, [e])
    v.c(e.type)
    if (onRegistered) {
      onRegistered()
    }
  }
  if (Storage.getUnsafeExtension(type)) {
    const unprefixedType: string = Type.toUnprefixed(type, false)
    Event.a(Message.zh({
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
  var n = e.types;
  var r = e.messages;
  if (!n.isInvisibleWidget) {
    if (!n.properties.some(function (e) {
      return "__opacity" === e.key;
    })) {
      n.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: b.j,
        validators: {
          greaterThan: b.r,
          lessThan: b.j,
          isInteger: true
        }
      });
    }
    if (!n.properties.some(function (e) {
      return "__position" === e.key;
    })) {
      n.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      });
    }
    if (!n.properties.some(function (e) {
      return "__visible" === e.key;
    })) {
      n.properties.push({
        key: "__visible",
        label: "",
        valueType: "boolean",
        defaultValue: true
      });
    }
  }
  x.d(n, r);
  var o = toInternalWidget(n, t);
  Storage.addUnsafeExtension({
    types: n,
    type: n.type,
    code: ""
  });
  return o;
}

/**
 * 导入自定义控件
 *
 * @param code 控件代码
 * @param isFromWidgetShop 控件是否来自控件商城
 * @returns 控件的类型定义
 */
async function importCustomWidget(code: string, isFromWidgetShop: boolean): Promise<t.Types> {
  try {
    const { types, widget } = await loadCustomWidget(code, isFromWidgetShop)
    return new Promise((resolve, reject): void => {
      registerCustomWidget(
        { types, widget },
        (): void => {
          const { type } = types
          if (!isFromWidgetShop) {
            Storage.addUnsafeExtension({ type, types, code })
            O.oTHelper.extensionWidget?.clientOp.addUnsafeExtensionWidget(
              { type, code }
            )
          }
          Event.dispatch(Message.wrapUpdateExtensionWidgetList())
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
    Event.dispatch(Message.wrapOpenConfirmDialog({
      allowText: Language.format(Language.zh_CN, "cloudDb.know").toString(),
      title: "导入自定义控件出错",
      content: errorMessage + "\n\n详细错误信息请到浏览器控制台中查看",
      cancelBtnVisible: false
    }))
  }
}

/**
 * 从 Blob 导入自定义控件
 *
 * @param blob 控件代码的 Blob
 * @param isFromWidgetShop 控件是否来自控件商城
 * @returns 控件的类型定义
 */
export async function importCostumeWidgetFromBlob(blob: Blob, isFromWidgetShop: boolean): Promise<t.Types> {
  const code: string = await new Promise((resolve, reject): void => {
      const fileReader = new FileReader()
      fileReader.readAsText(blob)
      fileReader.onload = (): void => {
        resolve(fileReader.result as string)
      }
      fileReader.onerror = reject
    }
  )
  if (!isFromWidgetShop) {
    await checkKeyWords(code)
  }
  return await importCustomWidget(code, isFromWidgetShop)
}

/**
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
    restrict.keyWords.forEach((keyWord): void => {
      if (code.includes(keyWord)) {
        includedKeyWords.push(keyWord)
      }
    })
    if (includedKeyWords.length > 0) {
      messages.push(`自定义控件存在危险关键词：${includedKeyWords.join("、")}，虽然 CoCo Next 允许自定义控件存在危险关键词，但是可能导致作品在 CoCo 中出现异常`)
    }
    if (messages.length > 0) {
      Event.a(Message.zh({
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

function Z(e, t) {
  return J.apply(this, arguments);
}
function J() {
  return (J = l.a(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n) {
    var r;
    var o;
    var a;
    var s;
    return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.startsWith("https")) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            r = "".concat(t, "?t=").concat(Math.random());
            e.next = 5;
            return g.a.get(r, {
              responseType: "blob",
              withCredentials: false
            });
          case 5:
            o = e.sent;
            e.next = 8;
            return importCostumeWidgetFromBlob(o.data, true);
          case 8:
            a = e.sent;
            s = a.type;
            Storage.addSafeExtension({
              id: n,
              type: s,
              types: a,
              cdnUrl: t
            });
            return e.abrupt("return", a);
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}

export async function loadWidgetFromStorage(safeWidgetStorage: SafeExtensionFileStorage[], unsafeWidgetsStorage: UnsafeExtensionFileStorage[]) {
  async function importWidget(widgetCode: string): Promise<void> {
    const { types, widget } = await loadCustomWidget(widgetCode, false)
    registerCustomWidget({ types, widget })
    const { type } = types
    Storage.addUnsafeExtension({ type, types, code: widgetCode })
  }
  y.u(y.j.EXTENSION)
  Storage.clear()
  if (unsafeWidgetsStorage.length) {
    await Promise.all(unsafeWidgetsStorage.map(({ code }): Promise<void> => importWidget(code)))
  }
  Event.dispatch(Message.wrapUpdateExtensionWidgetList())
  const onlineWidgetsStorage = safeWidgetStorage.filter((widget) => (
    widget.cdnUrl.startsWith("https") && widget.id
  ))
  if (!onlineWidgetsStorage.length) {
    return
  }
  return Promise.all(onlineWidgetsStorage.map(function (e) {
    return Z(e.cdnUrl, e.id)
  }))
}

function te(e, t, n) {
  return ne.apply(this, arguments);
}
function ne() {
  return (ne = l.a(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n, r) {
    var o;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    var m;
    var g;
    return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = {}
            for (a in n) {
              s = n[a];
              if (Type.isSafeExtensions(s.type)) {
                o[s.type] = true;
              }
            }
            for (c in r) {
              l = r[c];
              if (Type.isSafeExtensions(l.type)) {
                o[l.type] = true;
              }
            }
            t.forEach(function (e) {
              o[e.type] = false;
              delete o[e.type];
            })
            if (!(Object.keys(o).length > 0)) {
              e.next = 26;
              break;
            }
            u = [];
            d = 1;
            p = 100;
            e.next = 10;
            return A.e(d, p);
          case 10:
            if (f = e.sent, u = u.concat(f.items), !((h = Math.ceil(f.total / p)) > 1)) {
              e.next = 23;
              break;
            }
            d += 1;
          case 15:
            if (!(d <= h)) {
              e.next = 23;
              break;
            }
            e.next = 18;
            return A.e(d, p);
          case 18:
            m = e.sent;
            u = u.concat(m.items);
          case 20:
            d++;
            e.next = 15;
            break;
          case 23:
            g = [];
            u.forEach(function (e) {
              var t = "".concat(Type.SAFE_EXTENSION_PREFIX).concat(e.widget_code);
              if (o[t] && e.resource_url.startsWith("https")) {
                g.push({
                  id: e.id,
                  type: t,
                  cdnUrl: e.resource_url
                });
              }
            });
            return e.abrupt("return", Promise.all(g.map(function (e) {
              return Z(e.cdnUrl, e.id);
            })));
          case 26:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}

export function getWidgetTitle(type: string) {
  var widget = Storage.getExtension(type)
  return widget ? x.a(type, widget.types.title) : ""
}
function oe(e, t) {
  var n = Storage.getExtension(e);
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.properties.find(function (e) {
      return e.key === t;
    });
  }
}
function ie(e, t) {
  var n = Storage.getExtension(e);
  if (null === n || undefined === n ? undefined : n.types) {
    var r = n.types.properties.find(function (e) {
      return e.key === t;
    });
    if (r) {
      if ("number" === r.valueType && r.validators) {
        return r.validators;
      }
    }
  }
}
function ae(e) {
  var t;
  if (undefined !== e.greaterThan) {
    t = "number" === typeof e.greaterThan ? e.greaterThan : e.greaterThan.value;
  }
  return t;
}
function se(e) {
  var t;
  if (undefined !== e.lessThan) {
    t = "number" === typeof e.lessThan ? e.lessThan : e.lessThan.value;
  }
  return t;
}
function ce(e, t) {
  var n = ie(e, t);
  if (n) {
    return se(n);
  }
}
function le(e, t) {
  var n = ie(e, t);
  if (n) {
    return ae(n);
  }
}
export function getWidgetMethodTypes(type: string, key: string): t.MethodTypes | void {
  var widget = Storage.getExtension(type)
  if (widget?.types) {
    return widget.types.methods.find(method => method.key === key)
  }
}
function de(e, t) {
  var n = Storage.getExtension(e);
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.events.find(function (e) {
      return e.key === t;
    });
  }
}

export function getCheckType(valueType: t.ValueType, checkType: t.CheckType | undefined) {
  var result = new Set()
  let types = checkType || valueType
  types= Array.isArray(types) ? types : [types]
  if (types.includes("string")) {
    types.push("number", "boolean", "object", "array")
  }
  if (types.includes("color") || types.includes("image") || types.includes("icon") || types.includes("richTextString")) {
    types.push("string")
  }
  types.forEach(type => {
    result.add(_.upperFirst(`${type}`))
  })
  return Array.from(result)
}

function fe(e) {
  var t = new Set();
  var n = Array.isArray(e) ? e : [e];
  if (n.includes("color") || n.includes("image")) {
    n.push("string");
  }
  n.forEach(function (e) {
    t.add(_.upperFirst("".concat(e)));
  });
  return Array.from(t);
}
function he(e, t) {
  return "".concat(e, "_").concat(t);
}
var me = "widget"
var ge = "控件"
