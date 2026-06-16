/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：141
 */

"use strict"

var r = require(/* 9 */"../275/9")
var i = require(/* 14 */"../228/14")
var o = /#|\.prototype\./
var a = function (e, t) {
  var n = u[s(e)]
  return n === l || n !== c && (i(t) ? r(t) : !!t)
}
var s = a.normalize = function (e) {
  return String(e).replace(o, ".").toLowerCase()
}
var u = a.data = {}
var c = a.NATIVE = "N"
var l = a.POLYFILL = "P"
module.exports = a
