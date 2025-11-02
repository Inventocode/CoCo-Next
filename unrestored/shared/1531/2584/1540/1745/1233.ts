/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1233
 */

"use strict"

var r = require("../1623/272")
var o = require("../1736/167")
var i = require("../1541/820")
var a = require("../1541/1061")
var s = require("../1541/931")
var c = require("../1623/309")
var l = require("../1569/814")
var object$assign = Object.assign
var object$defineProperty = Object.defineProperty
module.exports = !object$assign || o(function () {
  if (r && 1 !== object$assign({
    b: 1
  }, object$assign(object$defineProperty({}, "a", {
    enumerable: true,
    get: function () {
      object$defineProperty(this, "b", {
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
  return 7 != object$assign({}, e)[n] || "abcdefghijklmnopqrst" != i(object$assign({}, t)).join("")
}) ? function (e, t) {
  for (var n = c(e), arguments$length = arguments.length, u = 1, d = a.f, p = s.f; arguments$length > u;) {
    for (var f, h = l(arguments[u++]), m = d ? i(h).concat(d(h)) : i(h), m$length = m.length, _ = 0; m$length > _;) {
      f = m[_++]
      if (!(r && !p.call(h, f))) {
        n[f] = h[f]
      }
    }
  }
  return n
} : object$assign
