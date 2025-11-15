/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1233
 */

"use strict"

var r = require("../1541/272")
var o = require("../1541/167")
var i = require("../1541/820")
var a = require("../1541/1061")
var s = require("../1541/931")
var c = require("../1541/309")
var l = require("../1569/814")
var /* [auto-meaningful-name] */Object$assign = Object.assign
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
module.exports = !Object$assign || o(function () {
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
  var n = Symbol()
  e[n] = 7
  "abcdefghijklmnopqrst".split("").forEach(function (e) {
    t[e] = e
  })
  return 7 != Object$assign({}, e)[n] || "abcdefghijklmnopqrst" != i(Object$assign({}, t)).join("")
}) ? function (e, t) {
  for (var n = c(e), /* [auto-meaningful-name] */arguments$length = arguments.length, u = 1, d = a.f, p = s.f; arguments$length > u;) {
    for (var f, h = l(arguments[u++]), m = d ? i(h).concat(d(h)) : i(h), /* [auto-meaningful-name] */m$length = m.length, _ = 0; m$length > _;) {
      f = m[_++]
      if (!(r && !p.call(h, f))) {
        n[f] = h[f]
      }
    }
  }
  return n
} : Object$assign
