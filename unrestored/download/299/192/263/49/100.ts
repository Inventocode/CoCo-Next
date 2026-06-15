/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：100
 */

"use strict"

var r = require(/* 10 */"../../208/10")
var i = 0
var o = Math.random()
var a = r(1.1.toString)
module.exports = function (e) {
  return "Symbol(" + (undefined === e ? "" : e) + ")_" + a(++i + o, 36)
}
