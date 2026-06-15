/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：157
 */

"use strict"

var r = require(/* 9 */"../275/9")
var /* [auto-meaningful-name] */require_6_$$_275_6$RegExp = require(/* 6 */"../275/6").RegExp
var o = r(function () {
  var e = require_6_$$_275_6$RegExp("a", "y")
  e.lastIndex = 2
  return null !== e.exec("abcd")
})
var a = o || r(function () {
  return !require_6_$$_275_6$RegExp("a", "y").sticky
})
var s = o || r(function () {
  var e = require_6_$$_275_6$RegExp("^r", "gy")
  e.lastIndex = 2
  return null !== e.exec("str")
})
module.exports = {
  BROKEN_CARET: s,
  MISSED_STICKY: a,
  UNSUPPORTED_Y: o
}
