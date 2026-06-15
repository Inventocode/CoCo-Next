/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：27
 */

"use strict"

var r = require(/* 26 */"../237/26")
var i = String
var o = TypeError
module.exports = function (e) {
  if (r(e)) {
    return e
  }
  throw new o(i(e) + " is not an object")
}
