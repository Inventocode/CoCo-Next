/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-8
 */

"use strict"

import { Vt, zt } from "./49__part-7"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$_24_304 from "./24/304"
import * as Q from "./7"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_100 from "./100"
function Jt(e) {
  if (e.type === Vt.USER_COLORS) {
    Oe.h($_100.t(e.data))
  } else {
    if (e.type === Vt.USER_FOCUS) {
      Oe.h($_100.m(e.data))
    } else {
      if (e.type === Vt.CLOUD_DATABASE) {
        (function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          var /* [auto-meaningful-name] */e$data$type = e$data.type
          var /* [auto-meaningful-name] */e$data$id = e$data.id
          var /* [auto-meaningful-name] */e$data$name = e$data.name
          if (e$data$type === zt.ADD_DOC && e$data$id && e$data$name) {
            Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.af(e$data$id, e$data$name))
          }
          zt.INITIAL
        })(e)
      }
    }
  }
}
function $t(e) {
  var t
  var n = null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.globalWidgetIds
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
  return (on = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = OtJson1.insertOp(en(t.id), t)
            r = OtJson1.insertOp($t(t.id), t.id)
            $_24_index.a.applyClient(OtJson1.type.compose(r, n))
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
  $_24_index.a.applyClient(OtJson1.type.compose(t, n))
}
function sn(e, t, n) {
  var r
  var o = !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3]
  var i = ["size", "position", "visible", "title", "widgetIds"]
  var a = $_24_index.a.getDoc()
  if (i.includes(t) && o) {
    var s = en(e, t)
    var c = a ? $_24_304.a({
      path: ["$"].concat($_25_index.a(s)),
      json: a
    }) : []
    r = 0 === c.length ? OtJson1.insertOp(s, n) : OtJson1.replaceOp(s, true, n)
  } else {
    var l = en(e, "attributes", t)
    var u = a ? $_24_304.a({
      path: ["$"].concat($_25_index.a(l)),
      json: a
    }) : []
    r = 0 === u.length ? OtJson1.insertOp(l, n) : OtJson1.replaceOp(l, true, n)
  }
  $_24_index.a.applyClient(r)
}
export { Jt }
export { tn }
export { nn }
export { rn }
export { an }
export { sn }
