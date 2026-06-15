/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：95
 */

"use strict"

var r = require(/* 54 */"../../228/54")
var i = require(/* 14 */"../../228/14")
var o = require(/* 45 */"../../233/45")
var a = require(/* 133 */"../../233/18/133")
var s = Object
module.exports = a ? function (e) {
  return "symbol" == typeof e
} : function (e) {
  var t = r("Symbol")
  return i(t) && o(t.prototype, s(e))
}
