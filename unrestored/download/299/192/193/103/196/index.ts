/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：196
 */

"use strict"

var r = require(/* 54 */"../../../228/54")
var i = require(/* 10 */"../../../208/10")
var o = require(/* 104 */"../../../233/104/index")
var a = require(/* 140 */"./140")
var s = require(/* 27 */"../../../225/27")
var u = i([].concat)
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(s(e))
  var n = a.f
  return n ? u(t, n(e)) : t
}
