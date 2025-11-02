/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：595
 */

"use strict"

var r = require("./74")
var i = require("./187")
var o = require("./180")
var a = require("./336")
var s = require("./457")
var u = require("./63")
var c = require("./221")
var l = function () {
  function t() {}
  t.prototype.encode = function (e, n, o, c, l) {
    if (0 === e.length) {
      throw new u.a("Found empty contents")
    }
    if (n !== r.a.QR_CODE) {
      throw new u.a("Can only encode QR_CODE, but got " + n)
    }
    if (o < 0 || c < 0) {
      throw new u.a("Requested dimensions are too small: " + o + "x" + c)
    }
    var a$a$L = a.a.L
    var t$QUIET_ZONE_SIZE = t.QUIET_ZONE_SIZE
    if (null !== l) {
      if (undefined !== l.get(i.a.ERROR_CORRECTION)) {
        a$a$L = a.a.fromString(l.get(i.a.ERROR_CORRECTION).toString())
      }
      if (undefined !== l.get(i.a.MARGIN)) {
        t$QUIET_ZONE_SIZE = Number.parseInt(l.get(i.a.MARGIN).toString(), 10)
      }
    }
    var h = s.a.encode(e, a$a$L, l)
    return t.renderResult(h, o, c, t$QUIET_ZONE_SIZE)
  }
  t.renderResult = function (t, e, n, r) {
    var i = t.getMatrix()
    if (null === i) {
      throw new c.a()
    }
    for (var a = i.getWidth(), s = i.getHeight(), u = a + 2 * r, l = s + 2 * r, d = Math.max(e, u), f = Math.max(n, l), h = Math.min(Math.floor(d / u), Math.floor(f / l)), p = Math.floor((d - a * h) / 2), m = Math.floor((f - s * h) / 2), b = new o.a(d, f), g = 0, v = m; g < s; g++, v += h) {
      for (var _ = 0, y = p; _ < a; _++, y += h) {
        if (1 === i.get(_, g)) {
          b.setRegion(y, v, h, h)
        }
      }
    }
    return b
  }
  t.QUIET_ZONE_SIZE = 4
  return t
}()
exports.a = l
