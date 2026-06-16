/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：213
 */

"use strict"

var r = require(/* 16 */"../../../275/16")
var i = require(/* 136 */"../../../268/65/30/136")
var o = require(/* 30 */"../../../268/65/30/index")
var a = require(/* 27 */"../../../225/27")
var s = require(/* 70 */"../../../268/167/70/index")
var u = require(/* 146 */"./146")
exports.f = r && !i ? Object.defineProperties : function (e, t) {
  a(e)
  for (var n, r = s(t), i = u(t), /* [auto-meaningful-name] */i$length = i.length, l = 0; i$length > l;) {
    o.f(e, n = i[l++], r[n])
  }
  return e
}
