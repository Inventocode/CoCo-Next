/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：84
 */

"use strict"

var r = require(/* 46 */"../204/46/index")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
module.exports = function (e, t) {
  var n = r(e)
  return n < 0 ? Math$max(n + t, 0) : Math$min(n, t)
}
