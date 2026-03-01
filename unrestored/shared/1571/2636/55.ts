/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：55
 */

"use strict"

export { EXTENSION_WIDGET_MESSAGE_TYPE as a }
export { d as b }
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"./28/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"./91"
var /* [auto-meaningful-name] */EXTENSION_WIDGET_MESSAGE_TYPE = "EXTENSION_WIDGET_MESSAGE_TYPE"
var d = new (function () {
  function e() {
    Module_27.a(this, e)
  }
  Module_39.a(e, [
    {
      key: "_pushMessage",
      value: function (e) {
        Module_91.a({
          type: Module_68.b.RUNTIME_LOG,
          data: Module_6.a({
            msgType: "WIDGET_MESSAGE_TYPE"
          }, e)
        })
      }
    }, {
      key: "_pushWidgetMessage",
      value: function (e) {
        var t = Module_20.currentContext()
        Module_91.a({
          type: Module_68.b.RUNTIME_LOG,
          data: Module_6.a(Module_6.a({}, e), {}, {
            msgType: EXTENSION_WIDGET_MESSAGE_TYPE,
            screenId: "log" === e.type ? "" : (null === t || undefined === t ? undefined : t.screenId) || "",
            blockId: "log" === e.type ? "" : (null === t || undefined === t ? undefined : t.blockId) || ""
          })
        })
      }
    }, {
      key: "push",
      value: function (e) {
        Module_91.a({
          type: Module_68.b.RUNTIME_LOG,
          data: e
        })
      }
    }, {
      key: "print",
      value: function (e, t, n, r) {
        this._pushMessage({
          type: "print",
          blockId: t,
          screenId: e,
          message: n,
          values: r
        })
      }
    }, {
      key: "log",
      value: function (e, t) {
        this._pushMessage({
          type: "log",
          blockId: "",
          screenId: "",
          message: Module_28.o(e),
          values: t
        })
      }
    }, {
      key: "customError",
      value: function (e, t, n, r) {
        this._pushMessage({
          type: "customError",
          blockId: t,
          screenId: e,
          message: n,
          values: r
        })
      }
    }, {
      key: "custom",
      value: function (e, t, n, r, o) {
        this._pushMessage({
          type: e,
          blockId: n,
          screenId: t,
          message: r,
          values: o
        })
      }
    }, {
      key: "playerWidgetLog",
      value: function (e) {
        this._pushMessage({
          type: "log",
          widgetId: e.widgetId,
          widgetType: e.widgetType,
          blockId: "",
          screenId: "",
          message: Module_28.o(e.message),
          values: e.values
        })
      }
    }, {
      key: "widgetLog",
      value: function (e) {
        this._pushWidgetMessage(Module_6.a(Module_6.a({}, e), {}, {
          type: "log"
        }))
      }
    }, {
      key: "widgetWarn",
      value: function (e) {
        this._pushWidgetMessage(Module_6.a(Module_6.a({}, e), {}, {
          type: "warning"
        }))
      }
    }, {
      key: "widgetError",
      value: function (e) {
        this._pushWidgetMessage(Module_6.a(Module_6.a({}, e), {}, {
          type: "error"
        }))
      }
    }
  ])
  return e
}())()
export default EXTENSION_WIDGET_MESSAGE_TYPE
