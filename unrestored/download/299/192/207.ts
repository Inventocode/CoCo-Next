/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：207
 */

"use strict"

var r = require(/* 13 */"./288/13/index")
var i = require(/* 142 */"./204/142/index")
var o = require(/* 41 */"./275/41")
var a = require(/* 29 */"./204/29")
var s = require(/* 31 */"./204/31")
var u = require(/* 108 */"./204/108/index")
r({
  target: "Array",
  proto: true
}, {
  flatMap: function (e) {
    var t
    var n = a(this)
    var r = s(n)
    o(e);
    (t = u(n, 0)).length = i(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : undefined)
    return t
  }
})
