"use strict";

export { B as e };
export { loadCustomWidget as r };
export { registerCustomWidget as v };
export { z as s };
export { importCostumeWidgetFromBlob as t };
export { Z as u };
export { $ as x };
export { te as w };
export { re as k };
export { oe as l };
export { ae as p };
export { se as n };
export { ce as m };
export { le as o };
export { ue as j };
export { de as h };
export { pe as f };
export { fe as g };
export { he as i };
export { InvisibleWidget as c };
export { VisibleWidget as d };
export { d as q } from "./type";
export { me as a };
export { ge as b };
var r;
import BabelRuntimeHelperRegeneratorRuntime from "regenerator-runtime"
import a = require("../../../../unrestored/shared/1531/2584/27");
import c = require("../../../../unrestored/shared/1531/2584/25/index");
import l = require("../../../../unrestored/shared/1531/2584/7");
import u = require("../../../../unrestored/shared/1531/2584/6");
import AntdMobile = require("antd-mobile");
import Color from "color"
import React, { ReactNode } from "react"
import _ = require("lodash");
import g = require("../../../../unrestored/shared/1531/2584/41");
import v = require("../../../../unrestored/shared/1531/2584/227/index");
import b = require("../../../../unrestored/shared/1531/2584/60");
import y = require("../../../../unrestored/shared/1531/2584/9");
import * as Language from "../../language"
import O = require("../../../../unrestored/shared/1531/2584/49/index");
import ExternalModule = require("./external-module");
import C = require("../../../../unrestored/shared/1531/2584/38/index");
import T = require("../../../../unrestored/shared/1531/2584/2");
import S = require("../../../../unrestored/shared/1531/2584/15");
import I = require("../../../../unrestored/shared/1531/2584/53");
import A = require("../../../../unrestored/shared/1531/2584/182");
import * as restrict from "./restrict"
import N = require("../../../../unrestored/shared/1531/2584/40");
import R = require("../../../../unrestored/shared/1531/2584/21/index");
import k = require("../../../../unrestored/shared/1531/2584/55");
import x = require("../../../../unrestored/shared/1531/2584/36/85");
import Type = require("./type");

import * as t from "./types"

class InvisibleWidget implements t.InvisibleWidget {

  private __widgetId: string
  private __widgetType: string

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

import L = require("../../../../unrestored/shared/1531/2584/98");
!function (e) {
  e[e.EVENTORDER = 1e4] = "EVENTORDER";
  e[e.METHODORDER = 2e4] = "METHODORDER";
  e[e.SETORDER = 3e4] = "SETORDER";
  e[e.GETORDER = 4e4] = "GETORDER";
}(r || (r = {}));

class VisibleWidget implements t.VisibleWidget {

  private __widgetId: string
  private __widgetType: string
  private __width: number
  private __height: number

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

var B = function (e, t, n, o) {
  var i = [];
  var a = [];
  var s = [];
  var c = [];
  var l = [];
  var u = [];
  var d = [];
  n.methods.forEach(function (n) {
    var i = n.key;
    var a = n.blockOptions;
    var s = undefined === a ? {} : a;
    if (false !== s.generateBlock) {
      var c = s.order || r.METHODORDER + l.length + 1;
      var u = "";
      if (s.line) {
        var p = "flyout-line-".concat(t, "-method-").concat(i);
        d.push({
          lineLabel: p,
          text: s.line
        });
        u = "<label type=\"".concat(p, "\"></label>");
      }
      u += "\n    <block type=\"widget_method\" uncache=\"true\">\n      <mutation\n        widget_type=\"".concat(t, "\"\n        is_any_widget=\"").concat(o, "\"\n        method=\"").concat(i, "\">\n      </mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>");
      if (s.space) {
        u += "<sep gap=\"".concat(s.space, "\"></sep>");
      }
      l.push({
        xml: u,
        order: c
      });
    }
  });
  n.properties.forEach(function (n) {
    var s;
    var c;
    var l;
    var u;
    var p = n.key;
    var f = n.blockOptions;
    var h = undefined === f ? {} : f;
    if (false !== h.generateBlock && false !== (null === (s = h.getter) || undefined === s ? undefined : s.generateBlock)) {
      var m = (null === (c = h.getter) || undefined === c ? undefined : c.order) || r.GETORDER + i.length + 1;
      var g = "";
      if (null === (l = h.getter) || undefined === l ? undefined : l.line) {
        var _ = "flyout-line-".concat(t, "-property-").concat(p, "-getter");
        d.push({
          lineLabel: _,
          text: h.getter.line
        });
        g = "<label type=\"".concat(_, "\"></label>");
      }
      g += "\n      <block type=\"widget_get\" uncache=\"true\">\n        <mutation\n          widget_type=\"".concat(t, "\"\n          is_any_widget=\"").concat(o, "\"\n          property=\"").concat(p, "\">\n        </mutation>\n        <field name=\"WIDGET_ID\">").concat(e, "</field>\n      </block>");
      if (null === (u = h.getter) || undefined === u ? undefined : u.space) {
        g += "<sep gap=\"".concat(h.getter.space, "\"></sep>");
      }
      if ("__visible" === p || "__disabled" === p) {
        a.push({
          xml: g,
          order: m + 1e3
        });
      } else {
        i.push({
          xml: g,
          order: m
        });
      }
    }
  });
  n.properties.forEach(function (n) {
    var i;
    var a;
    var l;
    var u;
    var p = n.key;
    var f = n.readonly;
    var h = n.blockOptions;
    var m = undefined === h ? {} : h;
    var g = true;
    if (f) {
      g = false;
    }
    if ("boolean" === typeof m.generateBlock) {
      g = m.generateBlock;
    }
    if (m.setter) {
      g = true;
    }
    if (false === (null === (i = m.setter) || undefined === i ? undefined : i.generateBlock)) {
      g = false;
    }
    if (g) {
      var _ = (null === (a = m.setter) || undefined === a ? undefined : a.order) || r.SETORDER + s.length + 1;
      var v = "";
      if (null === (l = m.setter) || undefined === l ? undefined : l.line) {
        var b = "flyout-line-".concat(t, "-property-").concat(p, "-setter");
        d.push({
          lineLabel: b,
          text: m.setter.line
        });
        v = "<label type=\"".concat(b, "\"></label>");
      }
      v += "\n      <block type=\"widget_set\" uncache=\"true\">\n        <mutation\n          widget_type=\"".concat(t, "\"\n          is_any_widget=\"").concat(o, "\"\n          property=\"").concat(p, "\">\n        </mutation>\n        <field name=\"WIDGET_ID\">").concat(e, "</field>\n      </block>");
      if (null === (u = m.setter) || undefined === u ? undefined : u.space) {
        v += "<sep gap=\"".concat(m.setter.space, "\"></sep>");
      }
      if ("__visible" === p || "__disabled" === p) {
        c.push({
          xml: v,
          order: _ + 1e3
        });
      } else {
        s.push({
          xml: v,
          order: _
        });
      }
    }
  });
  n.events.forEach(function (n) {
    var i = n.key;
    var a = n.blockOptions;
    var s = undefined === a ? {} : a;
    var c = s.order || r.EVENTORDER + u.length + 1;
    var l = "";
    if (s.line) {
      var p = "flyout-line-".concat(t, "-event-").concat(i);
      d.push({
        lineLabel: p,
        text: s.line
      });
      l = "<label type=\"".concat(p, "\"></label>");
    }
    l += "\n    <block type=\"widget_event\" uncache=\"true\">\n      <mutation\n        widget_type=\"".concat(t, "\"\n        is_any_widget=\"").concat(o, "\"\n        event=\"").concat(i, "\">\n      </mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>");
    u.push({
      xml: l,
      order: c
    });
  });
  if (u.length) {
    u.push({
      xml: y.k,
      order: r.EVENTORDER + 9999
    });
  }
  if (l.length) {
    l.push({
      xml: y.k,
      order: r.METHODORDER + 9999
    });
  }
  if (c.length) {
    s.push.apply(s, c);
  }
  if (s.length) {
    s.push({
      xml: y.k,
      order: r.SETORDER + 9999
    });
  }
  if (a.length) {
    a.unshift({
      xml: y.k,
      order: r.GETORDER + 500
    });
  }
  Object(y.x)(d, t);
  return [].concat(u, l, s, i, a).sort(function (e, t) {
    return e.order - t.order;
  }).map(function (e) {
    return e.xml;
  });
};
function F() {}
function G(e, t) {
  var n;
  var r = e.type;
  var o = e.icon;
  var i = e.properties;
  var a = e.isGlobalWidget;
  var s = undefined === a || a;
  var c = e.isInvisibleWidget;
  var l = undefined === c || c;
  var d = e.contentTextField;
  var p = {};
  var f = [{
    type: "WidgetTitle",
    hasDisableOrVisible: i.some(function (e) {
      return "__disabled" === e.key || "__visible" === e.key;
    })
  }];
  var h = [{
    type: "VisibleSwitch"
  }];
  if (!l) {
    f.push(h);
  }
  var m = l ? {
    width: 0,
    height: 0
  } : {
    width: 100,
    height: 60
  };
  var g = [I.s, I.o];
  var _ = [I.q, I.m];
  i.forEach(function (e) {
    var t = e.defaultValue;
    var n = e.valueType;
    var o = e.editorType;
    var i = e.hidePropertyEditor;
    var a = e.key;
    var s = e.readonly;
    var c = e.dropdown;
    var l = e.label;
    var u = e.unit;
    var d = e.validators;
    if ("__disabled" === a) {
      h.push({
        type: "DisabledSwitch"
      });
    }
    if ("__width" === a) {
      m.width = t;
      var v = d;
      if (undefined !== (null === v || undefined === v ? undefined : v.greaterThan)) {
        g[0] = ae(v);
      }
      return void (undefined !== (null === v || undefined === v ? undefined : v.lessThan) && (g[1] = se(v)));
    }
    if ("__height" === a) {
      m.height = t;
      var b = d;
      if (undefined !== (null === b || undefined === b ? undefined : b.greaterThan)) {
        _[0] = ae(b);
      }
      return void (undefined !== (null === b || undefined === b ? undefined : b.lessThan) && (_[1] = se(b)));
    }
    var y;
    if (!["__position", "__size", "__opacity", "__visible", "__disabled"].includes(a)) {
      p[a] = t;
      if (y = o || (c ? "Select" : function (e, t) {
        var n;
        var r = "";
        if (Array.isArray(e)) {
          var o = typeof t;
          r = "number" !== o && "string" !== o && "boolean" !== o || !e.includes(o) ? e[0] : o;
        } else {
          r = e;
        }
        switch (r) {
          case "string":
            n = "TextInput";
            break;
          case "number":
            n = "InputNumber";
            break;
          case "boolean":
            n = "AntSwitch";
            break;
          case "color":
            n = "Color";
            break;
          default:
            n = "TextInput";
        }
        return n;
      }(n, t))) {
        if (!s && !i) {
          var E = {
            type: y,
            label: Object(Type.isExtensions)(r) ? Object(x.b)(r, a) : Object(x.b)(r, l),
            key: a,
            addonAfter: u
          };
          if (c) {
            if (Object(Type.isExtensions)(r)) {
              E.dropdown = c;
            } else {
              E.dropdown = c.map(function (e) {
                return {
                  label: Object(x.a)(r, e.label) || e.label,
                  value: e.value
                };
              });
            }
          }
          f.push(E);
        }
      } else {
        console.error("Property type ".concat(n, " is not supported."));
      }
    }
  });
  if (!l) {
    f.push({
      type: "WidgetOpacity"
    });
    f.push({
      type: "Size",
      label: "",
      key: "size",
      sizeRange: [g, _]
    });
    f.push({
      type: "Coordinate",
      label: "",
      key: "position"
    });
  }
  if (null === (n = e.docs) || undefined === n ? undefined : n.url) {
    var v = e.docs.url;
    f.push({
      type: "HelpUrl",
      url: v
    });
  }
  var b = Object(x.c)(r);
  return {
    type: r,
    icon: o,
    title: d ? "" : b,
    contentTextField: d,
    hasAnyWidget: !!e.hasAnyWidget,
    previewAreaWidgetTitle: b,
    component: t,
    widget: {
      size: m,
      isGlobalWidget: s,
      attributes: Object(u.a)({}, p)
    },
    editConfig: f,
    isInvisibleWidget: l,
    blockConfig: {
      type: r,
      category: {
        iconId: o,
        blocks: r
      },
      getTemplate: function (t) {
        return B(t, r, e, false);
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
  };
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
    var e = G(types, widget)
    y.Nb(y.j.EXTENSION, [e])
    v.c(e.type)
    if (onRegistered) {
      onRegistered()
    }
  }
  if (L.g(type)) {
    const unprefixedType: string = Type.toUnprefixed(type, false)
    C.a(T.zh({
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
  Object(x.d)(n, r);
  var o = G(n, t);
  L.a({
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
  const { types, widget } = await loadCustomWidget(code, isFromWidgetShop)
  return new Promise((resolve, reject): void => {
    registerCustomWidget(
      { types, widget },
      (): void => {
        const { type } = types
        if (!isFromWidgetShop) {
          L.a({ type, types, code })
          O.oTHelper.extensionWidget?.clientOp.addUnsafeExtensionWidget(
            { type, code }
          )
        }
        C.a(T.Rj())
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
export async function importCostumeWidgetFromBlob(blob: Blob, isFromWidgetShop: boolean): Promise<t.Types> {
  const code: string = await new Promise((resolve, reject): void => {
      var fileReader = new FileReader()
      fileReader.readAsText(blob)
      fileReader.onload = (): void => {
        resolve(fileReader.result as string)
      }
      fileReader.onerror = reject
    }
  )
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
  var includedKeyWords: string[] = []
  restrict.keyWords.forEach((keyWord): void => {
    if (code.includes(keyWord)) {
      includedKeyWords.push(keyWord)
    }
  })
  if (includedKeyWords.length > 0) {
     C.a(T.zh({
      allowText: Language.format(Language.zh_CN, "cloudDb.know").toString(),
      title: "error",
      content: "自定义控件存在问题，不支持导入",
      cancelBtnVisible: false
    }))
    throw new Error(`file ${includedKeyWords.join("，")} not allow`)
  }
}

function Z(e, t) {
  return J.apply(this, arguments);
}
function J() {
  return (J = Object(l.a)(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n) {
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
            L.b({
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
function $(e, t) {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = Object(l.a)(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n) {
    var r;
    var o;
    var a;
    return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (o = function () {
              return (o = Object(l.a)(BabelRuntimeHelperRegeneratorRuntime.mark(function e(widgetCode) {
                var n;
                var r;
                var o;
                var a;
                return BabelRuntimeHelperRegeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2;
                        return loadCustomWidget(widgetCode, false);
                      case 2:
                        n = e.sent;
                        r = n.types;
                        o = n.widget;
                        registerCustomWidget({
                          types: r,
                          widget: o
                        });
                        a = r.type;
                        L.a({
                          type: a,
                          types: r,
                          code: widgetCode
                        });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              }))).apply(this, arguments);
            }, r = function () {
              return o.apply(this, arguments);
            }, Object(y.u)(y.j.EXTENSION), L.c(), !n.length) {
              e.next = 7;
              break;
            }
            e.next = 7;
            return Promise.all(n.map(function (e) {
              var t = e.code;
              return r(t);
            }));
          case 7:
            if (Object(C.a)(Object(T.Rj)()), !(a = t.filter(function (e) {
              return e.cdnUrl.startsWith("https") && e.id;
            })).length) {
              e.next = 11;
              break;
            }
            return e.abrupt("return", Promise.all(a.map(function (e) {
              return Z(e.cdnUrl, e.id);
            })));
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function te(e, t, n) {
  return ne.apply(this, arguments);
}
function ne() {
  return (ne = Object(l.a)(BabelRuntimeHelperRegeneratorRuntime.mark(function e(t, n, r) {
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
            for (a in o = {}, n) {
              s = n[a];
              if (Object(Type.isSafeExtensions)(s.type)) {
                o[s.type] = true;
              }
            }
            for (c in r) {
              l = r[c];
              if (Object(Type.isSafeExtensions)(l.type)) {
                o[l.type] = true;
              }
            }
            if (t.forEach(function (e) {
              o[e.type] = false;
              delete o[e.type];
            }), !(Object.keys(o).length > 0)) {
              e.next = 26;
              break;
            }
            u = [];
            d = 1;
            p = 100;
            e.next = 10;
            return Object(A.e)(d, p);
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
            return Object(A.e)(d, p);
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
              var t = "".concat(Type.EXTENSION_PREFIX).concat(e.widget_code);
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
function re(e) {
  var t = L.f(e);
  return t ? Object(x.a)(e, t.types.title) : "";
}
function oe(e, t) {
  var n = L.f(e);
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.properties.find(function (e) {
      return e.key === t;
    });
  }
}
function ie(e, t) {
  var n = L.f(e);
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
function ue(e, t) {
  var n = L.f(e);
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.methods.find(function (e) {
      return e.key === t;
    });
  }
}
function de(e, t) {
  var n = L.f(e);
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.events.find(function (e) {
      return e.key === t;
    });
  }
}
function pe(e, t) {
  var n = new Set();
  var r = t || e;
  if ((r = Array.isArray(r) ? r : [r]).includes("string")) {
    r.push("number", "boolean", "object", "array");
  }
  if (r.includes("color") || r.includes("image") || r.includes("icon") || r.includes("richTextString")) {
    r.push("string");
  }
  r.forEach(function (e) {
    n.add(Object(_.upperFirst)("".concat(e)));
  });
  return Array.from(n);
}
function fe(e) {
  var t = new Set();
  var n = Array.isArray(e) ? e : [e];
  if (n.includes("color") || n.includes("image")) {
    n.push("string");
  }
  n.forEach(function (e) {
    t.add(Object(_.upperFirst)("".concat(e)));
  });
  return Array.from(t);
}
function he(e, t) {
  return "".concat(e, "_").concat(t);
}
var me = "widget"
var ge = "控件"
