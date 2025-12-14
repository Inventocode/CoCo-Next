/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-1
 */

"use strict"

import * as z from "./27"
import * as Y from "./39"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as Q from "./7"
import * as /* [auto-meaningful-name] */$_24_304 from "./24/304"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */$_24_243 from "./24/243"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
function ne(e) {
  var t
  var n = $_24_index.a.getDoc()
  var r = null === n || undefined === n ? undefined : n.screens
  if (r) {
    var o = Object.entries(r).find(function (t) {
      var n = $_10_index.a(t, 2)
      n[0]
      return n[1].widgets[e]
    })
    t = null === o || undefined === o ? undefined : o[1].id
  }
  if (!t) {
    console.error("can't find screen of including widget")
  }
  return t || ""
}
function re(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.screens[e].widgetIds
  var o = 0
  if (r && (o = r.findIndex(function (e) {
    return e === t
  })) < 0) {
    o = r.length
  }
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 2 ? arguments$length - 2 : 0), s = 2; s < arguments$length; s++) {
    a[s - 2] = arguments[s]
  }
  return ["screens", e, "widgetIds", o].concat(a)
}
function oe(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.screens[e].invisibleWidgetIds
  var o = 0
  if (r && (o = r.findIndex(function (e) {
    return e === t
  })) < 0) {
    o = r.length
  }
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 2 ? arguments$length - 2 : 0), s = 2; s < arguments$length; s++) {
    a[s - 2] = arguments[s]
  }
  return ["screens", e, "invisibleWidgetIds", o].concat(a)
}
function ie(e, t) {
  return ["screens", e, "widgetIds", t]
}
function ae(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return ["screens", e, "widgets", t].concat(r)
}
function se(e) {
  return "widgets" === e[2]
}
function ce(e) {
  return 4 === e.length && se(e)
}
function le(e, t) {
  return ue.apply(this, arguments)
}
function ue() {
  return (ue = Q.a(_RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = OtJson1.insertOp(ae(t, n.id), n)
            o = OtJson1.insertOp(re(t, n.id), n.id)
            $_24_index.a.applyClient(OtJson1.type.compose(o, r))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function de(e, t) {
  return pe.apply(this, arguments)
}
function pe() {
  return (pe = Q.a(_RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = OtJson1.insertOp(ae(t, n.id), n)
            o = OtJson1.insertOp(oe(t, n.id), n.id)
            $_24_index.a.applyClient(OtJson1.type.compose(o, r))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function fe(e, t, n, r) {
  return he.apply(this, arguments)
}
function he() {
  return (he = Q.a(_RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var a
    var s
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            i = OtJson1.insertOp(ae(t, n.id), n)
            a = OtJson1.insertOp(re(t, n.id), n.id)
            s = OtJson1.replaceOp(ae(t, r, "widgetIds"), true, o)
            $_24_index.a.applyClient($_24_243.a(a, i, s))
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function me(e, t) {
  var n = OtJson1.removeOp(re(e, t))
  var r = OtJson1.removeOp(ae(e, t))
  $_24_index.a.applyClient(OtJson1.type.compose(n, r))
}
function ge(e, t) {
  var n = OtJson1.removeOp(oe(e, t))
  var r = OtJson1.removeOp(ae(e, t))
  $_24_index.a.applyClient(OtJson1.type.compose(n, r))
}
function _e(e, t, n, r) {
  var o
  var i = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4]
  var a = ["size", "position", "visible", "title", "widgetIds"]
  var s = $_24_index.a.getDoc()
  if (a.includes(n) && i) {
    var c = ae(e, t, n)
    var l = s ? $_24_304.a({
      path: ["$"].concat($_25_index.a(c)),
      json: s
    }) : []
    o = 0 === l.length ? OtJson1.insertOp(c, r) : OtJson1.replaceOp(c, true, r)
  } else {
    var u = ae(e, t, "attributes", n)
    var d = s ? $_24_304.a({
      path: ["$"].concat($_25_index.a(u)),
      json: s
    }) : []
    o = 0 === d.length ? OtJson1.insertOp(u, r) : OtJson1.replaceOp(u, true, r)
  }
  $_24_index.a.applyClient(o)
}
function ve(e, t, n) {
  var r = OtJson1.moveOp($_25_index.a(ie(e, t)), $_25_index.a(ie(e, n)))
  $_24_index.a.applyClient(r)
}
export { ne }
export { se }
export { ce }
export { le }
export { de }
export { fe }
export { me }
export { ge }
export { _e }
export { ve }
