/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1658
 */

var r = require("../1698/86/index")
var o = require("../1541/231")
var i = require("../1541/241")
var a = require("./1241")
var s = require("../1684/386")
var c = require("../1585/495")
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
