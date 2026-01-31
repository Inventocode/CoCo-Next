/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：313
 */

"use strict"

export { d as j }
export { p as g }
export { f as h }
export { h as i }
export { g as l }
export { _ as m }
export { v as f }
export { b as e }
export { y as c }
export { E as d }
export { w as k }
export { C as n }
export { T as b }
export { S as a }
import { batch } from "react-redux"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_48_72 from "../../48/72"
import * as /* [auto-meaningful-name] */$$_$$_91 from "../../91"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../15"
import * as /* [auto-meaningful-name] */$_112 from "./112"
function d(e, t) {
  var /* [auto-meaningful-name] */$$_$$_48_index$a$getState$screenList = $$_$$_48_index.a().getState().screenList
  if ("string" === typeof e || "number" === typeof e) {
    if ("number" === typeof e) {
      var r = e - 1
      var i = $$_$$_48_index$a$getState$screenList.get(r)
      if (!i) {
        return void $$_$$_14.a.log({
          type: "error",
          messageId: "screenIndexNotExist"
        })
      }
      p(null === i || undefined === i ? undefined : i.id, t)
    }
    if ("string" === typeof e) {
      var a = e
      var s = $$_$$_48_index$a$getState$screenList.findIndex(function (t) {
        return t.id === e || t.title === e
      })
      if (-1 === s) {
        return void $$_$$_14.a.log({
          type: "error",
          messageId: "screenTitleNotExist"
        })
      }
      if (!e.includes("SCREEN")) {
        var l = $$_$$_48_index$a$getState$screenList.get(s)
        a = (null === l || undefined === l ? undefined : l.id) || ""
      }
      p(a, t)
    }
  } else {
    $$_$$_14.a.log({
      type: "error",
      messageId: "screenTypeNotNumberAndString"
    })
  }
}
function p(e, t) {
  if (e) {
    var n = $$_$$_48_index.a()
    batch(function () {
      n.dispatch($$_$$_48_72.t(e))
      n.dispatch($$_$$_48_72.u(undefined !== t ? t : ""))
    })
    $$_$$_91.b(e, "screen", "", "")
  }
}
function f(e, t) {
  var /* [auto-meaningful-name] */$$_$$_48_index$a$getState$screenList = $$_$$_48_index.a().getState().screenList
  var r = $$_$$_48_index$a$getState$screenList.findIndex(function (t) {
    return t.id === e
  })
  var i = $$_$$_48_index$a$getState$screenList.get(r + 1)
  if (i) {
    d(i.id, t)
  }
}
function h(e, t) {
  var /* [auto-meaningful-name] */$$_$$_48_index$a$getState$screenList = $$_$$_48_index.a().getState().screenList
  var r = $$_$$_48_index$a$getState$screenList.findIndex(function (t) {
    return t.id === e
  })
  var i = $$_$$_48_index$a$getState$screenList.get(r - 1)
  if (i && r > 0) {
    d(i.id, t)
  }
}
function m(e) {
  return $$_$$_48_index.a().getState().screenList.find(function (t) {
    return t.id === e
  })
}
function g(e, t) {
  if ($$_$$_15.pb(t)) {
    $$_$$_48_index.a().dispatch($$_$$_48_72.x(e, "backgroundColor", t))
  } else {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function _(e, t) {
  if ($_112.d(t)) {
    $$_$$_48_index.a().dispatch($$_$$_48_72.x(e, "backgroundImage", t))
  } else {
    $$_$$_14.a.log({
      messageId: "imageNotExists",
      type: "error",
      widgetId: e
    })
  }
}
function v(e) {
  var t = m(e)
  if (t) {
    return t.size.width
  }
}
function b(e) {
  var t = m(e)
  if (t) {
    return t.size.width * $$_$$_28_index.n()
  }
}
function y(e) {
  var t = m(e)
  if (t) {
    return t.backgroundColor
  }
}
function E(e) {
  var t = m(e)
  if (t) {
    return t.backgroundImage
  }
}
var O = new Set()
function w(e) {
  O.add(e)
}
function C(e) {
  O.delete(e)
}
function T() {
  O.clear()
}
function S(e) {
  return O.has(e)
}
export default S
