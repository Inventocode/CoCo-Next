/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：138
 */

"use strict"

var r = require(/* 10 */"../../../208/10")
var i = require(/* 14 */"../../14")
var o = require(/* 98 */"../../../233/35/98")
var a = r(Function.toString)
if (!i(o.inspectSource)) {
  o.inspectSource = function (e) {
    return a(e)
  }
}
module.exports = o.inspectSource
