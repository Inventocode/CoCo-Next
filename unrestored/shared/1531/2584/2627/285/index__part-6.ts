/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_33_index from "../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_108 from "../../108"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_686 from "../686"
import * as /* [auto-meaningful-name] */$$_$$_789 from "../../789"
import * as /* [auto-meaningful-name] */$$_$$_514 from "../../514"
import * as /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import /* [auto-meaningful-name] */_$$_$$_ from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_75_index from "../../75/index"
import /* [auto-meaningful-name] */_$$_$$_75_index from "../../75/index"
import * as /* [auto-meaningful-name] */$$_$$_1502_478 from "../../1502/478"
import * as /* [auto-meaningful-name] */$$_$$_1502_428 from "../../1502/428"
import * as /* [auto-meaningful-name] */$$_$$_1502_378 from "../../1502/378"
function Re(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var Pe = function (e, t) {
  var n = {
    animationend: Re("Animation", "AnimationEnd"),
    transitionend: Re("Transition", "TransitionEnd")
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
}($$_$$_1502_378.a(), "undefined" !== typeof window ? window : {})
var Ne = {}
if ($$_$$_1502_378.a()) {
  var Me = document.createElement("div")
  Ne = Me.style
}
var je = {}
function Le(e) {
  if (je[e]) {
    return je[e]
  }
  var t = Pe[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ne) {
        je[e] = t[o]
        return je[e]
      }
    }
  }
  return ""
}
var Ue = Le("animationend")
var He = Le("transitionend")
var Ve = !(!Ue || !He)
var Ge = Ue || "animationend"
var ze = He || "transitionend"
function Qe(e, t) {
  return e ? "object" === $$_$$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function We(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_$$_33_index.a(n, 2)
  var o = r[0]
  var a = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [o, function (e) {
    if (!t.current) {
      a(e)
    }
  }]
}
var Ke = $$_$$_1502_378.a() ? React.useLayoutEffect : React.useEffect
export { Ve as "285__part-6__Ve" }
export { Ge as "285__part-6__Ge" }
export { ze as "285__part-6__ze" }
export { Qe as "285__part-6__Qe" }
export { We as "285__part-6__We" }
export { Ke as "285__part-6__Ke" }
