/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：36
 */

"use strict"

var r = require(/* 47 */"../263/47/index")
var i = String
module.exports = function (e) {
  if ("Symbol" === r(e)) {
    throw new TypeError("Cannot convert a Symbol value to a string")
  }
  return i(e)
}
