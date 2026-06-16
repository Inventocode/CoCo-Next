/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：18
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var i = require(/* 97 */"../../160/117/97")
var o = require(/* 24 */"../24")
var a = require(/* 100 */"../../263/49/100")
var s = require(/* 134 */"./134")
var u = require(/* 133 */"./133")
var /* [auto-meaningful-name] */r$Symbol = r.Symbol
var l = i("wks")
var f = u ? r$Symbol.for || r$Symbol : r$Symbol && r$Symbol.withoutSetter || a
module.exports = function (e) {
  if (!o(l, e)) {
    l[e] = s && o(r$Symbol, e) ? r$Symbol[e] : f("Symbol." + e)
  }
  return l[e]
}
