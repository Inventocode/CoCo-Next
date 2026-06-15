/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：142
 */

"use strict"

var r = require(/* 106 */"../../208/106/index")
var i = require(/* 31 */"../31")
var o = require(/* 205 */"./205")
var a = require(/* 43 */"./43")
var s = function (e, t, n, u, c, l, f, p) {
  for (var d, h, g = c, m = 0, v = !!f && a(f, p); m < u;) {
    if (m in n) {
      d = v ? v(n[m], m, t) : n[m]
      if (l > 0 && r(d)) {
        h = i(d)
        g = s(e, t, d, h, g, l - 1) - 1
      } else {
        o(g + 1)
        e[g] = d
      }
      g++
    }
    m++
  }
  return g
}
module.exports = s
