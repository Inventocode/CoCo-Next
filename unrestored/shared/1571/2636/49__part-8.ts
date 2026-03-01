/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-8
 */

"use strict"

import { Vt, zt } from "./49__part-7"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_304 from /* 304 */"./24/304"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_100 from /* 100 */"./100"
function Jt(e) {
  if (e.type === Vt.USER_COLORS) {
    Module_43.h(Module_100.t(e.data))
  } else {
    if (e.type === Vt.USER_FOCUS) {
      Module_43.h(Module_100.m(e.data))
    } else {
      if (e.type === Vt.CLOUD_DATABASE) {
        (function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          var /* [auto-meaningful-name] */e$data$type = e$data.type
          var /* [auto-meaningful-name] */e$data$id = e$data.id
          var /* [auto-meaningful-name] */e$data$name = e$data.name
          if (e$data$type === zt.ADD_DOC && e$data$id && e$data$name) {
            Module_43.h(Src_editor_redux_common_actions.af(e$data$id, e$data$name))
          }
          zt.INITIAL
        })(e)
      }
    }
  }
}
function $t(e) {
  var t
  var n = null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.globalWidgetIds
  var r = 0
  if (n && (r = n.findIndex(function (t) {
    return t === e
  })) < 0) {
    r = n.length
  }
  return ["globalWidgetIds", r]
}
function en(e) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return ["globalWidgets", e].concat(n)
}
function tn(e) {
  return "globalWidgets" === e[0]
}
function nn(e) {
  return 2 === e.length && tn(e)
}
function rn(e) {
  return on.apply(this, arguments)
}
function on() {
  return (on = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = OtJson1.insertOp(en(t.id), t)
            r = OtJson1.insertOp($t(t.id), t.id)
            Module_24.a.applyClient(OtJson1.type.compose(r, n))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function an(e) {
  var t = OtJson1.removeOp($t(e))
  var n = OtJson1.removeOp(en(e))
  Module_24.a.applyClient(OtJson1.type.compose(t, n))
}
function sn(e, t, n) {
  var r
  var o = !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3]
  var i = ["size", "position", "visible", "title", "widgetIds"]
  var a = Module_24.a.getDoc()
  if (i.includes(t) && o) {
    var s = en(e, t)
    var c = a ? Module_304.a({
      path: ["$"].concat(Module_25.a(s)),
      json: a
    }) : []
    r = 0 === c.length ? OtJson1.insertOp(s, n) : OtJson1.replaceOp(s, true, n)
  } else {
    var l = en(e, "attributes", t)
    var u = a ? Module_304.a({
      path: ["$"].concat(Module_25.a(l)),
      json: a
    }) : []
    r = 0 === u.length ? OtJson1.insertOp(l, n) : OtJson1.replaceOp(l, true, n)
  }
  Module_24.a.applyClient(r)
}
export { Jt }
export { tn }
export { nn }
export { rn }
export { an }
export { sn }
