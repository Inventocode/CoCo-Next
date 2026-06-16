/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：87
 */

"use strict"

var r = require(/* 20 */"../../288/20/index")
var i = require(/* 41 */"../../275/41")
var o = require(/* 27 */"../../225/27")
var a = require(/* 62 */"../../263/49/62")
var s = require(/* 74 */"./74")
var u = TypeError
module.exports = function (e, t) {
  var n = arguments.length < 2 ? s(e) : t
  if (i(n)) {
    return o(r(n, e))
  }
  throw new u(a(e) + " is not iterable")
}
