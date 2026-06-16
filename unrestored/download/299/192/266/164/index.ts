/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：164
 */

"use strict"

var r = require(/* 250 */"./250")
var i = RangeError
module.exports = function (e, t) {
  var n = r(e)
  if (n % t) {
    throw new i("Wrong offset")
  }
  return n
}
