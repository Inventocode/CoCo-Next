/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：193
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 16 */"../275/16")
var o = require(/* 6 */"../275/6")
var a = require(/* 10 */"../208/10")
var s = require(/* 24 */"../233/24")
var u = require(/* 14 */"../228/14")
var c = require(/* 45 */"../233/45")
var l = require(/* 36 */"../209/36")
var f = require(/* 48 */"../236/48")
var p = require(/* 103 */"./103/index")
var /* [auto-meaningful-name] */o$Symbol = o.Symbol
var h = o$Symbol && o$Symbol.prototype
if (i && u(o$Symbol) && (!("description" in h) || undefined !== o$Symbol().description)) {
  var g = {}
  var m = function () {
    var e = arguments.length < 1 || undefined === arguments[0] ? undefined : l(arguments[0])
    var t = c(h, this) ? new o$Symbol(e) : undefined === e ? o$Symbol() : o$Symbol(e)
    if ("" === e) {
      g[t] = true
    }
    return t
  }
  p(m, o$Symbol)
  m.prototype = h
  h.constructor = m
  var v = "Symbol(description detection)" === String(o$Symbol("description detection"))
  var y = a(h.valueOf)
  var _ = a(h.toString)
  var b = /^Symbol\((.*)\)[^)]+$/
  var w = a("".replace)
  var S = a("".slice)
  f(h, "description", {
    configurable: true,
    get: function () {
      var e = y(this)
      if (s(g, e)) {
        return ""
      }
      var t = _(e)
      var n = v ? S(t, 7, -1) : w(t, b, "$1")
      return "" === n ? undefined : n
    }
  })
  r({
    global: true,
    constructor: true,
    forced: true
  }, {
    Symbol: m
  })
}
