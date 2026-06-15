/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72
 */

"use strict"

var r = require(/* 222 */"./222")
var i = require(/* 26 */"../../../237/26")
var o = require(/* 61 */"../../../237/61")
var a = require(/* 223 */"./223/index")
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var e
  var t = false
  var n = {}
  try {
    (e = r(Object.prototype, "__proto__", "set"))(n, [])
    t = n instanceof Array
  } catch (s) {}
  return function (n, r) {
    o(n)
    a(r)
    return i(n) ? (t ? e(n, r) : n.__proto__ = r, n) : n
  }
}() : undefined)
