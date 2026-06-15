/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：43
 */

"use strict"

var r = require(/* 107 */"../../225/107")
var i = require(/* 41 */"../../275/41")
var o = require(/* 79 */"../../288/20/79")
var a = r(r.bind)
module.exports = function (e, t) {
  i(e)
  return undefined === t ? e : o ? a(e, t) : function () {
    return e.apply(t, arguments)
  }
}
