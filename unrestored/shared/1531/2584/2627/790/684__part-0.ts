/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：684__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_29 from "../../29"
import * as /* [auto-meaningful-name] */$$_$$_20 from "../../20"
import * as /* [auto-meaningful-name] */$$_$$_33_index from "../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_108 from "../../108"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_739_1503_1009 from "../../739/1503/1009"
import * as /* [auto-meaningful-name] */$$_$$_1026_690 from "../../1026/690"
import * as /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import /* [auto-meaningful-name] */_$$_$$_ from "../../8"
import * as /* [auto-meaningful-name] */$$_462 from "../462"
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
}($$_462.a(), "undefined" !== typeof window ? window : {})
var _ = {}
if ($$_462.a()) {
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
  return e ? "object" === $$_$$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function C(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_$$_33_index.a(n, 2)
  var i = r[0]
  var a = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [i, function (e) {
    if (!t.current) {
      a(e)
    }
  }]
}
var O = $$_462.a() ? React.useLayoutEffect : React.useEffect
export { b as "684__part-0__b" }
export { w as "684__part-0__w" }
export { E as "684__part-0__E" }
export { x as "684__part-0__x" }
export { C as "684__part-0__C" }
export { O as "684__part-0__O" }
