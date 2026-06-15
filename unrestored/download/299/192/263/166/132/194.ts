/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：194
 */

"use strict"

var r = require(/* 20 */"../../../288/20/index")
var i = require(/* 14 */"../../../228/14")
var o = require(/* 26 */"../../../237/26")
var a = TypeError
module.exports = function (e, t) {
  var n
  var s
  if ("string" === t && i(n = e.toString) && !o(s = r(n, e))) {
    return s
  }
  if (i(n = e.valueOf) && !o(s = r(n, e))) {
    return s
  }
  if ("string" !== t && i(n = e.toString) && !o(s = r(n, e))) {
    return s
  }
  throw new a("Can't convert object to primitive value")
}
