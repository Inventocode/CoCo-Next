/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../../21"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../40/index"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../107"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1030 from /* 1030 */"./1030"
import * as /* [auto-meaningful-name] */Module_698 from /* 698 */"../../1048/698"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_466 from /* 466 */"../../2680/466"
function h(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var p = function (e, t) {
  var n = {
    animationend: h("Animation", "AnimationEnd"),
    transitionend: h("Transition", "TransitionEnd")
  }
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition
    }
  }
  return n
}(Module_466.a(), "undefined" !== typeof window ? window : {})
var _ = {}
if (Module_466.a()) {
  var A = document.createElement("div")
  _ = A.style
}
var g = {}
function v(e) {
  if (g[e]) {
    return g[e]
  }
  var t = p[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _) {
        g[e] = t[o]
        return g[e]
      }
    }
  }
  return ""
}
var m = v("animationend")
var y = v("transitionend")
var b = !(!m || !y)
var w = m || "animationend"
var E = y || "transitionend"
function x(e, t) {
  return e ? "object" === Module_107.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function C(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = Module_40.a(n, 2)
  var i = r[0]
  var a = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [
    i, function (e) {
      if (!t.current) {
        a(e)
      }
    }
  ]
}
var O = Module_466.a() ? React.useLayoutEffect : React.useEffect
export { b }
export { w }
export { E }
export { x }
export { C }
export { O }
