/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1501__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_33_index from "../33/index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_108 from "../108"
var f = function (e) {
  return +setTimeout(e, 16)
}
var d = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  f = function (e) {
    return window.requestAnimationFrame(e)
  }
  d = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var h = 0
var p = new Map()
function _(e) {
  p.delete(e)
}
function A(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = h += 1
  function r(t) {
    if (0 === t) {
      _(n)
      e()
    } else {
      var i = f(function () {
        r(t - 1)
      })
      p.set(n, i)
    }
  }
  r(t)
  return n
}
A.cancel = function (e) {
  var t = p.get(e)
  _(t)
  return d(t)
}
export { A as "1501__part-0__A" }
