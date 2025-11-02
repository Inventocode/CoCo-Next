/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2512
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.calculateChange = function (e, t, n, r) {
  var r$clientWidth = r.clientWidth
  var r$clientHeight = r.clientHeight
  var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
  var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
  var c = a - (r.getBoundingClientRect().left + window.pageXOffset)
  var u = s - (r.getBoundingClientRect().top + window.pageYOffset)
  if ("vertical" === t) {
    var l = undefined
    if (u < 0) {
      l = 359
    } else if (u > r$clientHeight) {
      l = 0
    } else {
      l = 360 * (-100 * u / r$clientHeight + 100) / 100
    }
    if (n.h !== l) {
      return {
        h: l,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      }
    }
  } else {
    var f = undefined
    if (c < 0) {
      f = 0
    } else if (c > r$clientWidth) {
      f = 359
    } else {
      f = 360 * (100 * c / r$clientWidth) / 100
    }
    if (n.h !== f) {
      return {
        h: f,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      }
    }
  }
  return null
}
