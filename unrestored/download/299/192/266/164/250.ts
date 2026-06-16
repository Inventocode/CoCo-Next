/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：250
 */

"use strict"

var r = require(/* 46 */"../../204/46/index")
var i = RangeError
module.exports = function (e) {
  var t = r(e)
  if (t < 0) {
    throw new i("The argument can't be less than 0")
  }
  return t
}
