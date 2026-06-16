/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import * as /* [auto-meaningful-name] */Module_304 from /* 304 */"./24/304"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */Module_243 from /* 243 */"./24/243"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
function ne(e) {
  var t
  var n = Module_24.a.getDoc()
  var r = null === n || undefined === n ? undefined : n.screens
  if (r) {
    var o = Object.entries(r).find(function (t) {
      var n = Module_10.a(t, 2)
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
  var r = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.screens[e].widgetIds
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
  var r = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.screens[e].invisibleWidgetIds
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
  return (ue = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var o
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = OtJson1.insertOp(ae(t, n.id), n)
            o = OtJson1.insertOp(re(t, n.id), n.id)
            Module_24.a.applyClient(OtJson1.type.compose(o, r))
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
  return (pe = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var o
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = OtJson1.insertOp(ae(t, n.id), n)
            o = OtJson1.insertOp(oe(t, n.id), n.id)
            Module_24.a.applyClient(OtJson1.type.compose(o, r))
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
  return (he = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var i
    var a
    var s
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            i = OtJson1.insertOp(ae(t, n.id), n)
            a = OtJson1.insertOp(re(t, n.id), n.id)
            s = OtJson1.replaceOp(ae(t, r, "widgetIds"), true, o)
            Module_24.a.applyClient(Module_243.a(a, i, s))
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
  Module_24.a.applyClient(OtJson1.type.compose(n, r))
}
function ge(e, t) {
  var n = OtJson1.removeOp(oe(e, t))
  var r = OtJson1.removeOp(ae(e, t))
  Module_24.a.applyClient(OtJson1.type.compose(n, r))
}
function _e(e, t, n, r) {
  var o
  var i = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4]
  var a = ["size", "position", "visible", "title", "widgetIds"]
  var s = Module_24.a.getDoc()
  if (a.includes(n) && i) {
    var c = ae(e, t, n)
    var l = s ? Module_304.a({
      path: ["$"].concat(Module_25.a(c)),
      json: s
    }) : []
    o = 0 === l.length ? OtJson1.insertOp(c, r) : OtJson1.replaceOp(c, true, r)
  } else {
    var u = ae(e, t, "attributes", n)
    var d = s ? Module_304.a({
      path: ["$"].concat(Module_25.a(u)),
      json: s
    }) : []
    o = 0 === d.length ? OtJson1.insertOp(u, r) : OtJson1.replaceOp(u, true, r)
  }
  Module_24.a.applyClient(o)
}
function ve(e, t, n) {
  var r = OtJson1.moveOp(Module_25.a(ie(e, t)), Module_25.a(ie(e, n)))
  Module_24.a.applyClient(r)
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
