/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：139
 */

"use strict"

var r = require(/* 10 */"../../../208/10")
var i = require(/* 24 */"../../24")
var o = require(/* 70 */"../../../268/167/70/index")
var /* [auto-meaningful-name] */require_197_$_197$indexOf = require(/* 197 */"./197").indexOf
var s = require(/* 102 */"../../55/102")
var u = r([].push)
module.exports = function (e, t) {
  var n
  var r = o(e)
  var c = 0
  var l = []
  for (n in r) if (!i(s, n) && i(r, n)) {
    u(l, n)
  }
  for (; t.length > c;) {
    if (i(r, n = t[c++])) {
      if (!~require_197_$_197$indexOf(l, n)) {
        u(l, n)
      }
    }
  }
  return l
}
