/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：236
 */

"use strict"

var r = require(/* 16 */"../275/16")
var i = require(/* 48 */"./48")
var o = require(/* 156 */"./156")
var a = require(/* 116 */"./116")
if (r && !o.correct) {
  i(RegExp.prototype, "flags", {
    configurable: true,
    get: a
  })
  o.correct = true
}
