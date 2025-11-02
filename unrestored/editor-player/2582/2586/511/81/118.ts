/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：118
 */

"use strict"

var n = function () {
  function t() {}
  t.round = function (t) {
    return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
  }
  t.distance = function (t, e, r, n) {
    var o = t - r
    var i = e - n
    return Math.sqrt(o * o + i * i)
  }
  t.sum = function (t) {
    for (var e = 0, r = 0, t$length = t.length; r !== t$length; r++) {
      e += t[r]
    }
    return e
  }
  return t
}()
exports.a = n
