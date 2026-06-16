/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：204
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 142 */"./142/index")
var o = require(/* 29 */"./29")
var a = require(/* 31 */"./31")
var s = require(/* 46 */"./46/index")
var u = require(/* 108 */"./108/index")
r({
  target: "Array",
  proto: true
}, {
  flat: function () {
    var e = arguments.length ? arguments[0] : undefined
    var t = o(this)
    var n = a(t)
    var r = u(t, 0)
    r.length = i(r, t, t, n, 0, undefined === e ? 1 : s(e))
    return r
  }
})
