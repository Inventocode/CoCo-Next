/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：116
 */

"use strict"

var r = function () {
  function t() {}
  t.round = function (t) {
    return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
  }
  t.distance = function (t, e, n, r) {
    var i = t - n
    var o = e - r
    return Math.sqrt(i * i + o * o)
  }
  t.sum = function (t) {
    for (var e = 0, n = 0, /* [auto-meaningful-name] */t$length = t.length; n !== t$length; n++) {
      e += t[n]
    }
    return e
  }
  return t
}()
exports.a = r
