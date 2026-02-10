/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_142 from "../142"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
var se = function (e) {
  return +setTimeout(e, 16)
}
var ce = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  se = function (e) {
    return window.requestAnimationFrame(e)
  }
  ce = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var le = 0
var ue = new Map()
function de(e) {
  ue.delete(e)
}
function pe(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = le += 1
  function r(t) {
    if (0 === t) {
      de(n)
      e()
    } else {
      var o = se(function () {
        r(t - 1)
      })
      ue.set(n, o)
    }
  }
  r(t)
  return n
}
function fe(e, t) {
  return !!e && e.contains(t)
}
function he(e) {
  return e instanceof HTMLElement ? e : ReactDom1.findDOMNode(e)
}
pe.cancel = function (e) {
  var t = ue.get(e)
  de(t)
  return ce(t)
}
export { pe }
export { fe }
export { he }
