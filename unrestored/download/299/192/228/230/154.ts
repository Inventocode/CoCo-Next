/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：154
 */

"use strict"

var r = require(/* 109 */"../../204/108/206/109")
var i = require(/* 62 */"../../263/49/62")
var o = TypeError
module.exports = function (e) {
  if (r(e)) {
    return e
  }
  throw new o(i(e) + " is not a constructor")
}
