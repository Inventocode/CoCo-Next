/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import { useRef, useState, useEffect, useLayoutEffect } from "react"
import * as /* [auto-meaningful-name] */$$_$$_801_694_index from "../../801/694/index"
import * as /* [auto-meaningful-name] */$$_$$_801_index from "../../801/index"
import * as /* [auto-meaningful-name] */$$_$$_517 from "../../517"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
import * as /* [auto-meaningful-name] */$$_$$_1543_482 from "../../1543/482"
import * as /* [auto-meaningful-name] */$$_$$_1543_432 from "../../1543/432"
import * as /* [auto-meaningful-name] */$$_$$_1543_378 from "../../1543/378"
function Fe(e, t) {
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
    animationend: Fe("Animation", "AnimationEnd"),
    transitionend: Fe("Transition", "TransitionEnd")
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
}($$_$$_1543_378.a(), "undefined" !== typeof window ? window : {})
var Ne = {}
if ($$_$$_1543_378.a()) {
  var Me = document.createElement("div")
  Ne = Me.style
}
var Le = {}
function je(e) {
  if (Le[e]) {
    return Le[e]
  }
  var t = Pe[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ne) {
        Le[e] = t[o]
        return Le[e]
      }
    }
  }
  return ""
}
var Ue = je("animationend")
var He = je("transitionend")
var Ve = !(!Ue || !He)
var Ge = Ue || "animationend"
var ze = He || "transitionend"
function Qe(e, t) {
  return e ? "object" === $$_$$_107.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function We(e) {
  var t = useRef(false)
  var n = useState(e)
  var r = $$_$$_40_index.a(n, 2)
  var o = r[0]
  var a = r[1]
  useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [
    o, function (e) {
      if (!t.current) {
        a(e)
      }
    }
  ]
}
var Ke = $$_$$_1543_378.a() ? useLayoutEffect : useEffect
export { Ve }
export { Ge }
export { ze }
export { Qe }
export { We }
export { Ke }
