/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：223
 */

"use strict"

var r = require(/* 224 */"./224")
var i = String
var o = TypeError
module.exports = function (e) {
  if (r(e)) {
    return e
  }
  throw new o("Can't set " + i(e) + " as a prototype")
}
