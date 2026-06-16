/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：151
 */

"use strict"

var r = require(/* 29 */"../204/29")
var i = require(/* 84 */"../225/84")
var o = require(/* 31 */"../204/31")
module.exports = function (e) {
  for (var t = r(this), n = o(t), /* [auto-meaningful-name] */arguments$length = arguments.length, s = i(arguments$length > 1 ? arguments[1] : undefined, n), u = arguments$length > 2 ? arguments[2] : undefined, c = undefined === u ? n : i(u, n); c > s;) {
    t[s++] = e
  }
  return t
}
