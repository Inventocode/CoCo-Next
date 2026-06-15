/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：155
 */

"use strict"

var r = require(/* 20 */"../288/20/index")
var i = require(/* 24 */"./24")
var o = require(/* 45 */"./45")
var a = require(/* 156 */"../236/156")
var s = require(/* 116 */"../236/116")
var /* [auto-meaningful-name] */RegExp$prototype = RegExp.prototype
module.exports = a.correct ? function (e) {
  return e.flags
} : function (e) {
  return a.correct || !o(RegExp$prototype, e) || i(e, "flags") ? e.flags : r(s, e)
}
