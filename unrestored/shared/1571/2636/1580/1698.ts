/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1698
 */

var r = require("./1662/86")
var o = require("./1282/231")
var i = require("./1282/240")
var a = require("./1705/1270")
var s = require("./1581/386")
var c = require("./1625/497")
r({
  target: "Reflect",
  stat: true
}, {
  get: function e(t, n) {
    var r
    var l
    var u = arguments.length < 3 ? t : arguments[2]
    return i(t) === u ? t[n] : (r = s.f(t, n)) ? a(r) ? r.value : undefined === r.get ? undefined : r.get.call(u) : o(l = c(t)) ? e(l, n, u) : undefined
  }
})
