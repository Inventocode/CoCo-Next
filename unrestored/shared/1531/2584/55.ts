/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：55
 */

"use strict"

export { u as a }
export { d as b }
import r = require("./6");
import o = require("./27");
import i = require("./40");
import a = require("./68");
import s = require("./28/index");
import c = require("./21/index");
import l = require("./91");
var u = "EXTENSION_WIDGET_MESSAGE_TYPE"
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
      var t = c.currentContext()
      l.a({
        type: a.b.RUNTIME_LOG,
        data: r.a(r.a({}, e), {}, {
          msgType: u,
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
        message: s.o(e),
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
        message: s.o(e.message),
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
export default u
