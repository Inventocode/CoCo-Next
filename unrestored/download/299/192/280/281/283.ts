/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：283
 */

"use strict"

var r = require(/* 16 */"../../275/16")
var i = require(/* 10 */"../../208/10")
var o = require(/* 20 */"../../288/20/index")
var a = require(/* 9 */"../../275/9")
var s = require(/* 146 */"../../233/55/213/146")
var u = require(/* 140 */"../../193/103/196/140")
var c = require(/* 131 */"../../288/13/92/131")
var l = require(/* 29 */"../../204/29")
var f = require(/* 93 */"../../268/167/70/93")
var /* [auto-meaningful-name] */Object$assign = Object.assign
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
var h = i([].concat)
module.exports = !Object$assign || a(function () {
  if (r && 1 !== Object$assign({
    b: 1
  }, Object$assign(Object$defineProperty({}, "a", {
    enumerable: true,
    get: function () {
      Object$defineProperty(this, "b", {
        value: 3,
        enumerable: false
      })
    }
  }), {
    b: 2
  })).b) {
    return true
  }
  var e = {}
  var t = {}
  var n = Symbol("assign detection")
  var /* [auto-meaningful-name] */Abcdefghijklmnopqrst = "abcdefghijklmnopqrst"
  e[n] = 7
  Abcdefghijklmnopqrst.split("").forEach(function (e) {
    t[e] = e
  })
  return 7 !== Object$assign({}, e)[n] || s(Object$assign({}, t)).join("") !== Abcdefghijklmnopqrst
}) ? function (e, t) {
    for (var n = l(e), /* [auto-meaningful-name] */arguments$length = arguments.length, a = 1, p = u.f, d = c.f; arguments$length > a;) {
      for (var g, m = f(arguments[a++]), v = p ? h(s(m), p(m)) : s(m), /* [auto-meaningful-name] */v$length = v.length, _ = 0; v$length > _;) {
        g = v[_++]
        if (!(r && !o(d, m, g))) {
          n[g] = m[g]
        }
      }
    }
    return n
  } : Object$assign
