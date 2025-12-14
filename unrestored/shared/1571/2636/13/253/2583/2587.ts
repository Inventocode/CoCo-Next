/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2587
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.calculateChange = function (e, t, n) {
  var r = n.getBoundingClientRect()
  var /* [auto-meaningful-name] */r$width = r.width
  var /* [auto-meaningful-name] */r$height = r.height
  var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
  var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
  var c = a - (n.getBoundingClientRect().left + window.pageXOffset)
  var u = s - (n.getBoundingClientRect().top + window.pageYOffset)
  if (c < 0) {
    c = 0
  } else {
    if (c > r$width) {
      c = r$width
    }
  }
  if (u < 0) {
    u = 0
  } else {
    if (u > r$height) {
      u = r$height
    }
  }
  var l = c / r$width
  var f = 1 - u / r$height
  return {
    h: t.h,
    s: l,
    v: f,
    a: t.a,
    source: "hsv"
  }
}
