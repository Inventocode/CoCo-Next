/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：217
 */

"use strict"

var r = require(/* 218 */"./218")
var i = require(/* 219 */"./219")
var /* [auto-meaningful-name] */Math$abs = Math.abs
module.exports = function (e, t, n, a) {
  var s = +e
  var u = Math$abs(s)
  var c = r(s)
  if (u < a) {
    return c * i(u / a / t) * a * t
  }
  var l = (1 + t / 2220446049250313e-31) * u
  var f = l - (l - u)
  return f > n || f !== f ? c * (1 / 0) : c * f
}
