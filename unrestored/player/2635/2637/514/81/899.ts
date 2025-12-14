/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：899
 */

"use strict"

var r = require("./74")
var i = require("./187")
var o = require("./464")
var a = require("./181")
var s = require("./600")
var u = require("./601")
var c = require("./102")
var l = require("./222")
var d = require("./63")
var f = require("./124")
!function () {
  function t() {}
  t.prototype.encode = function (t, e, n, r) {
    return this.encodeWithHints(t, e, n, r, null)
  }
  t.prototype.encodeWithHints = function (e, n, r, a, l) {
    var /* [auto-meaningful-name] */u$a$ISO_8859_1 = u.a.ISO_8859_1
    var /* [auto-meaningful-name] */o$a$DEFAULT_EC_PERCENT = o.a.DEFAULT_EC_PERCENT
    var /* [auto-meaningful-name] */o$a$DEFAULT_AZTEC_LAYERS = o.a.DEFAULT_AZTEC_LAYERS
    if (null != l) {
      if (l.has(i.a.CHARACTER_SET)) {
        u$a$ISO_8859_1 = s.a.forName(l.get(i.a.CHARACTER_SET).toString())
      }
      if (l.has(i.a.ERROR_CORRECTION)) {
        o$a$DEFAULT_EC_PERCENT = c.a.parseInt(l.get(i.a.ERROR_CORRECTION).toString())
      }
      if (l.has(i.a.AZTEC_LAYERS)) {
        o$a$DEFAULT_AZTEC_LAYERS = c.a.parseInt(l.get(i.a.AZTEC_LAYERS).toString())
      }
    }
    return t.encodeLayers(e, n, r, a, u$a$ISO_8859_1, o$a$DEFAULT_EC_PERCENT, o$a$DEFAULT_AZTEC_LAYERS)
  }
  t.encodeLayers = function (e, n, i, a, s, u, c) {
    if (n !== r.a.AZTEC) {
      throw new d.a("Can only encode AZTEC, but got " + n)
    }
    var l = o.a.encode(f.a.getBytes(e, s), u, c)
    return t.renderResult(l, i, a)
  }
  t.renderResult = function (t, e, n) {
    var r = t.getMatrix()
    if (null == r) {
      throw new l.a()
    }
    for (var i = r.getWidth(), o = r.getHeight(), s = Math.max(e, i), u = Math.max(n, o), c = Math.min(s / i, u / o), d = (s - i * c) / 2, f = (u - o * c) / 2, h = new a.a(s, u), p = 0, m = f; p < o; p++, m += c) {
      for (var b = 0, g = d; b < i; b++, g += c) {
        if (r.get(b, p)) {
          h.setRegion(g, m, c, c)
        }
      }
    }
    return h
  }
}()
