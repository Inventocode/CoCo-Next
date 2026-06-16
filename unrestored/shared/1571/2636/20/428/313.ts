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
import { batch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../48/72"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"../../91"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../34/347/112"
function d(e, t) {
  var /* [auto-meaningful-name] */Module_48$a$getState$screenList = Module_48.a().getState().screenList
  if ("string" === typeof e || "number" === typeof e) {
    if ("number" === typeof e) {
      var r = e - 1
      var i = Module_48$a$getState$screenList.get(r)
      if (!i) {
        return void Module_14.a.log({
          type: "error",
          messageId: "screenIndexNotExist"
        })
      }
      p(null === i || undefined === i ? undefined : i.id, t)
    }
    if ("string" === typeof e) {
      var a = e
      var s = Module_48$a$getState$screenList.findIndex(function (t) {
        return t.id === e || t.title === e
      })
      if (-1 === s) {
        return void Module_14.a.log({
          type: "error",
          messageId: "screenTitleNotExist"
        })
      }
      if (!e.includes("SCREEN")) {
        var l = Module_48$a$getState$screenList.get(s)
        a = (null === l || undefined === l ? undefined : l.id) || ""
      }
      p(a, t)
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "screenTypeNotNumberAndString"
    })
  }
}
function p(e, t) {
  if (e) {
    var n = Module_48.a()
    batch(function () {
      n.dispatch(Module_72.t(e))
      n.dispatch(Module_72.u(undefined !== t ? t : ""))
    })
    Module_91.b(e, "screen", "", "")
  }
}
function f(e, t) {
  var /* [auto-meaningful-name] */Module_48$a$getState$screenList = Module_48.a().getState().screenList
  var r = Module_48$a$getState$screenList.findIndex(function (t) {
    return t.id === e
  })
  var i = Module_48$a$getState$screenList.get(r + 1)
  if (i) {
    d(i.id, t)
  }
}
function h(e, t) {
  var /* [auto-meaningful-name] */Module_48$a$getState$screenList = Module_48.a().getState().screenList
  var r = Module_48$a$getState$screenList.findIndex(function (t) {
    return t.id === e
  })
  var i = Module_48$a$getState$screenList.get(r - 1)
  if (i && r > 0) {
    d(i.id, t)
  }
}
function m(e) {
  return Module_48.a().getState().screenList.find(function (t) {
    return t.id === e
  })
}
function g(e, t) {
  if (Src_shared_tools_index.pb(t)) {
    Module_48.a().dispatch(Module_72.x(e, "backgroundColor", t))
  } else {
    Module_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function _(e, t) {
  if (Module_112.d(t)) {
    Module_48.a().dispatch(Module_72.x(e, "backgroundImage", t))
  } else {
    Module_14.a.log({
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
    return t.size.width * Module_28.n()
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
