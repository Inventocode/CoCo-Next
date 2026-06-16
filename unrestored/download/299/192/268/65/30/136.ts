/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：136
 */

"use strict"

var r = require(/* 16 */"../../../275/16")
var i = require(/* 9 */"../../../275/9")
module.exports = r && i(function () {
  return 42 !== Object.defineProperty(function () {}, "prototype", {
    value: 42,
    writable: false
  }).prototype
})
