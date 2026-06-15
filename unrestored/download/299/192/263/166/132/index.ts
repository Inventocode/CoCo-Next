/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：132
 */

"use strict"

var r = require(/* 20 */"../../../288/20/index")
var i = require(/* 26 */"../../../237/26")
var o = require(/* 95 */"../../../247/44/95")
var a = require(/* 81 */"../../../237/81")
var s = require(/* 194 */"./194")
var u = require(/* 18 */"../../../233/18/index")
var c = TypeError
var l = u("toPrimitive")
module.exports = function (e, t) {
  if (!i(e) || o(e)) {
    return e
  }
  var n
  var u = a(e, l)
  if (u) {
    if (undefined === t) {
      t = "default"
    }
    n = r(u, e, t)
    if (!i(n) || o(n)) {
      return n
    }
    throw new c("Can't convert object to primitive value")
  }
  if (undefined === t) {
    t = "number"
  }
  return s(e, t)
}
