/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：120
 */

"use strict"

var r = require(/* 10 */"../208/10")
var i = require(/* 61 */"../237/61")
var o = require(/* 36 */"../209/36")
var a = require(/* 161 */"./121/161")
var s = r("".replace)
var u = RegExp("^[" + a + "]+")
var c = RegExp("(^|[^" + a + "])[" + a + "]+$")
var l = function (e) {
  return function (t) {
    var n = o(i(t))
    if (1 & e) {
      n = s(n, u, "")
    }
    if (2 & e) {
      n = s(n, c, "$1")
    }
    return n
  }
}
module.exports = {
  start: l(1),
  end: l(2),
  trim: l(3)
}
