/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：232
 */

"use strict"

var r = require(/* 41 */"../../275/41")
var i = TypeError
var o = function (e) {
  var t
  var n
  this.promise = new e(function (e, r) {
    if (undefined !== t || undefined !== n) {
      throw new i("Bad Promise constructor")
    }
    t = e
    n = r
  })
  this.resolve = r(t)
  this.reject = r(n)
}
module.exports.f = function (e) {
  return new o(e)
}
