/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：150
 */

"use strict"

var r = require(/* 46 */"../../204/46/index")
var i = require(/* 64 */"../../225/64")
var o = RangeError
module.exports = function (e) {
  if (undefined === e) {
    return 0
  }
  var t = r(e)
  var n = i(t)
  if (t !== n) {
    throw new o("Wrong length or index")
  }
  return n
}
