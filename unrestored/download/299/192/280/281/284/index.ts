/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：284
 */

"use strict"

var r = require(/* 43 */"../../../204/142/43")
var i = require(/* 20 */"../../../288/20/index")
var o = require(/* 29 */"../../../204/29")
var a = require(/* 285 */"./285")
var s = require(/* 115 */"../../../226/227/115")
var u = require(/* 109 */"../../../204/108/206/109")
var c = require(/* 31 */"../../../204/31")
var l = require(/* 153 */"../../../226/153/index")
var f = require(/* 87 */"../../../226/227/87")
var p = require(/* 74 */"../../../226/227/74")
var d = Array
module.exports = function (e) {
  var t = o(e)
  var n = u(this)
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var g = arguments$length > 1 ? arguments[1] : undefined
  var m = undefined !== g
  if (m) {
    g = r(g, arguments$length > 2 ? arguments[2] : undefined)
  }
  var v
  var y
  var _
  var b
  var /* [auto-meaningful-name] */BFTK$next
  var S
  var k = p(t)
  var O = 0
  if (!k || this === d && s(k)) {
    for (v = c(t), y = n ? new this(v) : d(v); v > O; O++) {
      S = m ? g(t[O], O) : t[O]
      l(y, O, S)
    }
  } else {
    for (y = n ? new this() : [], BFTK$next = (b = f(t, k)).next; !(_ = i(BFTK$next, b)).done; O++) {
      S = m ? a(b, g, [_.value, O], true) : _.value
      l(y, O, S)
    }
  }
  y.length = O
  return y
}
