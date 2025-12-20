/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_748_1544_1030 from "../../748/1544/1030"
import * as /* [auto-meaningful-name] */$$_$$_1048_698 from "../../1048/698"
import * as /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import /* [auto-meaningful-name] */_$$_$$_ from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_2680_466 from "../../2680/466"
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
}($$_$$_2680_466.a(), "undefined" !== typeof window ? window : {})
var _ = {}
if ($$_$$_2680_466.a()) {
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
  return e ? "object" === $$_$$_107.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function C(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_$$_40_index.a(n, 2)
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
var O = $$_$$_2680_466.a() ? React.useLayoutEffect : React.useEffect
export { b }
export { w }
export { E }
export { x }
export { C }
export { O }
