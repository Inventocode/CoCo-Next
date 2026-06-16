/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24
 */

"use strict"

var r = require(/* 10 */"../208/10")
var i = require(/* 29 */"../204/29")
var o = r({}.hasOwnProperty)
module.exports = Object.hasOwn || function (e, t) {
  return o(i(e), t)
}
