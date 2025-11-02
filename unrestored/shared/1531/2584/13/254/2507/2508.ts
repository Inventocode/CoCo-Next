/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2508
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.calculateChange = function (e, t, n, r, i) {
  var i$clientWidth = i.clientWidth
  var i$clientHeight = i.clientHeight
  var s = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
  var c = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
  var u = s - (i.getBoundingClientRect().left + window.pageXOffset)
  var l = c - (i.getBoundingClientRect().top + window.pageYOffset)
  if ("vertical" === n) {
    var f = undefined
    f = l < 0 ? 0 : l > i$clientHeight ? 1 : Math.round(100 * l / i$clientHeight) / 100
    if (t.a !== f) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: f,
        source: "rgb"
      }
    }
  } else {
    var d = undefined
    if (r !== (d = u < 0 ? 0 : u > i$clientWidth ? 1 : Math.round(100 * u / i$clientWidth) / 100)) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: d,
        source: "rgb"
      }
    }
  }
  return null
}
