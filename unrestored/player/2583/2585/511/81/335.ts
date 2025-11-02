/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：335
 */

"use strict"

var r = require("./191/index")
var i = require("./274")
var o = require("./408")
var a = require("./221")
var s = function () {
  function t(t) {
    this.field = t
  }
  t.prototype.decode = function (t, e) {
    for (var this$field = this.field, a = new i.a(this$field, t), s = new Int32Array(e), u = true, c = 0; c < e; c++) {
      var l = a.evaluateAt(this$field.exp(c + this$field.getGeneratorBase()))
      s[s.length - 1 - c] = l
      if (0 !== l) {
        u = false
      }
    }
    if (!u) {
      var d = new i.a(this$field, s)
      var f = this.runEuclideanAlgorithm(this$field.buildMonomial(e, 1), d, e)
      var h = f[0]
      var p = f[1]
      var m = this.findErrorLocations(h)
      var b = this.findErrorMagnitudes(p, m)
      for (c = 0; c < m.length; c++) {
        var g = t.length - 1 - this$field.log(m[c])
        if (g < 0) {
          throw new o.a("Bad error location")
        }
        t[g] = r.a.addOrSubtract(t[g], b[c])
      }
    }
  }
  t.prototype.runEuclideanAlgorithm = function (t, e, n) {
    if (t.getDegree() < e.getDegree()) {
      var r = t
      t = e
      e = r
    }
    for (var this$field = this.field, s = t, u = e, c = this$field.getZero(), l = this$field.getOne(); u.getDegree() >= (n / 2 | 0);) {
      var d = s
      var f = c
      c = l
      if ((s = u).isZero()) {
        throw new o.a("r_{i-1} was zero")
      }
      u = d
      for (var h = this$field.getZero(), p = s.getCoefficient(s.getDegree()), m = this$field.inverse(p); u.getDegree() >= s.getDegree() && !u.isZero();) {
        var b = u.getDegree() - s.getDegree()
        var g = this$field.multiply(u.getCoefficient(u.getDegree()), m)
        h = h.addOrSubtract(this$field.buildMonomial(b, g))
        u = u.addOrSubtract(s.multiplyByMonomial(b, g))
      }
      l = h.multiply(c).addOrSubtract(f)
      if (u.getDegree() >= s.getDegree()) {
        throw new a.a("Division algorithm failed to reduce polynomial?")
      }
    }
    var v = l.getCoefficient(0)
    if (0 === v) {
      throw new o.a("sigmaTilde(0) was zero")
    }
    var _ = this$field.inverse(v)
    return [l.multiplyScalar(_), u.multiplyScalar(_)]
  }
  t.prototype.findErrorLocations = function (t) {
    var e = t.getDegree()
    if (1 === e) {
      return Int32Array.from([t.getCoefficient(1)])
    }
    for (var n = new Int32Array(e), r = 0, this$field = this.field, a = 1; a < this$field.getSize() && r < e; a++) {
      if (0 === t.evaluateAt(a)) {
        n[r] = this$field.inverse(a)
        r++
      }
    }
    if (r !== e) {
      throw new o.a("Error locator degree does not match number of roots")
    }
    return n
  }
  t.prototype.findErrorMagnitudes = function (t, e) {
    for (var e$length = e.length, r = new Int32Array(e$length), this$field = this.field, o = 0; o < e$length; o++) {
      for (var a = this$field.inverse(e[o]), s = 1, u = 0; u < e$length; u++) {
        if (o !== u) {
          var c = this$field.multiply(e[u], a)
          var l = 0 === (1 & c) ? 1 | c : -2 & c
          s = this$field.multiply(s, l)
        }
      }
      r[o] = this$field.multiply(t.evaluateAt(a), this$field.inverse(s))
      if (0 !== this$field.getGeneratorBase()) {
        r[o] = this$field.multiply(r[o], a)
      }
    }
    return r
  }
  return t
}()
exports.a = s
