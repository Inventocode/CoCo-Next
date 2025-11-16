/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：55
 */

"use strict"

export { EXTENSION_WIDGET_MESSAGE_TYPE as a }
export { d as b }
import * as r from "./6"
import * as o from "./27"
import * as i from "./40"
import * as a from "./68"
import * as /* [auto-meaningful-name] */$_28_index from "./28/index"
import * as /* [auto-meaningful-name] */$_21_index from "./21/index"
import * as l from "./91"
var /* [auto-meaningful-name] */EXTENSION_WIDGET_MESSAGE_TYPE = "EXTENSION_WIDGET_MESSAGE_TYPE"
var d = new (function () {
  function e() {
    o.a(this, e)
  }
  i.a(e, [{
    key: "_pushMessage",
    value: function (e) {
      l.a({
        type: a.b.RUNTIME_LOG,
        data: r.a({
          msgType: "WIDGET_MESSAGE_TYPE"
        }, e)
      })
    }
  }, {
    key: "_pushWidgetMessage",
    value: function (e) {
      var t = $_21_index.currentContext()
      l.a({
        type: a.b.RUNTIME_LOG,
        data: r.a(r.a({}, e), {}, {
          msgType: EXTENSION_WIDGET_MESSAGE_TYPE,
          screenId: "log" === e.type ? "" : (null === t || undefined === t ? undefined : t.screenId) || "",
          blockId: "log" === e.type ? "" : (null === t || undefined === t ? undefined : t.blockId) || ""
        })
      })
    }
  }, {
    key: "push",
    value: function (e) {
      l.a({
        type: a.b.RUNTIME_LOG,
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
        message: $_28_index.o(e),
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
        message: $_28_index.o(e.message),
        values: e.values
      })
    }
  }, {
    key: "widgetLog",
    value: function (e) {
      this._pushWidgetMessage(r.a(r.a({}, e), {}, {
        type: "log"
      }))
    }
  }, {
    key: "widgetWarn",
    value: function (e) {
      this._pushWidgetMessage(r.a(r.a({}, e), {}, {
        type: "warning"
      }))
    }
  }, {
    key: "widgetError",
    value: function (e) {
      this._pushWidgetMessage(r.a(r.a({}, e), {}, {
        type: "error"
      }))
    }
  }])
  return e
}())()
export default EXTENSION_WIDGET_MESSAGE_TYPE
