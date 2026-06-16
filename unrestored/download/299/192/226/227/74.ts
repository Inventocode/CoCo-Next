/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：74
 */

"use strict"

var r = require(/* 47 */"../../263/47/index")
var i = require(/* 81 */"../../237/81")
var o = require(/* 80 */"../../228/230/80")
var a = require(/* 73 */"../../268/167/73")
var s = require(/* 18 */"../../233/18/index")("iterator")
module.exports = function (e) {
  if (!o(e)) {
    return i(e, s) || i(e, "@@iterator") || a[r(e)]
  }
}
