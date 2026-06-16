/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：166
 */

"use strict"

var r = require(/* 132 */"./132/index")
var i = TypeError
module.exports = function (e) {
  var t = r(e, "number")
  if ("number" == typeof t) {
    throw new i("Can't convert number to bigint")
  }
  return BigInt(t)
}
