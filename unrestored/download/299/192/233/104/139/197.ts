/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：197
 */

"use strict"

var r = require(/* 70 */"../../../268/167/70/index")
var i = require(/* 84 */"../../../225/84")
var o = require(/* 31 */"../../../204/31")
var a = function (e) {
  return function (t, n, a) {
    var s = r(t)
    var u = o(s)
    if (0 === u) {
      return !e && -1
    }
    var c
    var l = i(a, u)
    if (e && n !== n) {
      for (; u > l;) {
        if ((c = s[l++]) !== c) {
          return true
        }
      }
    } else {
      for (; u > l; l++) {
        if ((e || l in s) && s[l] === n) {
          return e || l || 0
        }
      }
    }
    return !e && -1
  }
}
module.exports = {
  includes: a(true),
  indexOf: a(false)
}
