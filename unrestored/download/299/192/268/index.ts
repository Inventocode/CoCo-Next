/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：268
 */

"use strict"

var r = require(/* 6 */"../275/6")
var i = require(/* 269 */"./269")
var o = require(/* 270 */"./270/index")
var a = require(/* 167 */"./167/index")
var s = require(/* 42 */"../233/42")
var u = require(/* 65 */"./65/index")
var c = require(/* 18 */"../233/18/index")("iterator")
var /* [auto-meaningful-name] */a$values = a.values
var f = function (e, t) {
  if (e) {
    if (e[c] !== a$values) {
      try {
        s(e, c, a$values)
      } catch (r) {
        e[c] = a$values
      }
    }
    u(e, t, true)
    if (i[t]) {
      for (var n in a) if (e[n] !== a[n]) {
        try {
          s(e, n, a[n])
        } catch (r) {
          e[n] = a[n]
        }
      }
    }
  }
}
for (var p in i) f(r[p] && r[p].prototype, p)
f(o, "DOMTokenList")
