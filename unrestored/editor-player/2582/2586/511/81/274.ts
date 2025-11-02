/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：274
 */

"use strict"

var n = require("./191/412")
var o = require("./117")
var i = require("./63")
var a = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new i.a()
    }
    this.field = t
    var e$length = e.length
    if (e$length > 1 && 0 === e[0]) {
      for (var n = 1; n < e$length && 0 === e[n];) {
        n++
      }
      if (n === e$length) {
        this.coefficients = Int32Array.from([0])
      } else {
        this.coefficients = new Int32Array(e$length - n)
        o.a.arraycopy(e, n, this.coefficients, 0, this.coefficients.length)
      }
    } else {
      this.coefficients = e
    }
  }
  t.prototype.getCoefficients = function () {
    return this.coefficients
  }
  t.prototype.getDegree = function () {
    return this.coefficients.length - 1
  }
  t.prototype.isZero = function () {
    return 0 === this.coefficients[0]
  }
  t.prototype.getCoefficient = function (t) {
    return this.coefficients[this.coefficients.length - 1 - t]
  }
  t.prototype.evaluateAt = function (t) {
    if (0 === t) {
      return this.getCoefficient(0)
    }
    var e
    var this$coefficients = this.coefficients
    if (1 === t) {
      e = 0
      for (var o = 0, _this$coefficients$length = this$coefficients.length; o !== _this$coefficients$length; o++) {
        var a = this$coefficients[o]
        e = n.a.addOrSubtract(e, a)
      }
      return e
    }
    e = this$coefficients[0]
    var this$coefficients$length = this$coefficients.length
    var this$field = this.field
    for (o = 1; o < this$coefficients$length; o++) {
      e = n.a.addOrSubtract(this$field.multiply(t, e), this$coefficients[o])
    }
    return e
  }
  t.prototype.addOrSubtract = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field")
    }
    if (this.isZero()) {
      return e
    }
    if (e.isZero()) {
      return this
    }
    var this$coefficients = this.coefficients
    var e$coefficients = e.coefficients
    if (this$coefficients.length > e$coefficients.length) {
      var u = this$coefficients
      this$coefficients = e$coefficients
      e$coefficients = u
    }
    var s = new Int32Array(e$coefficients.length)
    var c = e$coefficients.length - this$coefficients.length
    o.a.arraycopy(e$coefficients, 0, s, 0, c)
    for (var f = c; f < e$coefficients.length; f++) {
      s[f] = n.a.addOrSubtract(this$coefficients[f - c], e$coefficients[f])
    }
    return new t(this.field, s)
  }
  t.prototype.multiply = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field")
    }
    if (this.isZero() || e.isZero()) {
      return this.field.getZero()
    }
    for (var this$coefficients = this.coefficients, this$coefficients$length = this$coefficients.length, e$coefficients = e.coefficients, e$coefficients$length = e$coefficients.length, s = new Int32Array(this$coefficients$length + e$coefficients$length - 1), this$field = this.field, f = 0; f < this$coefficients$length; f++) {
      for (var h = this$coefficients[f], l = 0; l < e$coefficients$length; l++) {
        s[f + l] = n.a.addOrSubtract(s[f + l], this$field.multiply(h, e$coefficients[l]))
      }
    }
    return new t(this$field, s)
  }
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return this.field.getZero()
    }
    if (1 === e) {
      return this
    }
    for (var this$coefficients$length = this.coefficients.length, this$field = this.field, o = new Int32Array(this$coefficients$length), this$coefficients = this.coefficients, a = 0; a < this$coefficients$length; a++) {
      o[a] = this$field.multiply(this$coefficients[a], e)
    }
    return new t(this$field, o)
  }
  t.prototype.multiplyByMonomial = function (e, r) {
    if (e < 0) {
      throw new i.a()
    }
    if (0 === r) {
      return this.field.getZero()
    }
    for (var this$coefficients = this.coefficients, this$coefficients$length = this$coefficients.length, a = new Int32Array(this$coefficients$length + e), this$field = this.field, s = 0; s < this$coefficients$length; s++) {
      a[s] = this$field.multiply(this$coefficients[s], r)
    }
    return new t(this$field, a)
  }
  t.prototype.divide = function (t) {
    if (!this.field.equals(t.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field")
    }
    if (t.isZero()) {
      throw new i.a("Divide by 0")
    }
    for (var this$field = this.field, r = this$field.getZero(), n = this, o = t.getCoefficient(t.getDegree()), a = this$field.inverse(o); n.getDegree() >= t.getDegree() && !n.isZero();) {
      var u = n.getDegree() - t.getDegree()
      var s = this$field.multiply(n.getCoefficient(n.getDegree()), a)
      var c = t.multiplyByMonomial(u, s)
      var f = this$field.buildMonomial(u, s)
      r = r.addOrSubtract(f)
      n = n.addOrSubtract(c)
    }
    return [r, n]
  }
  t.prototype.toString = function () {
    for (var t = "", e = this.getDegree(); e >= 0; e--) {
      var r = this.getCoefficient(e)
      if (0 !== r) {
        if (r < 0) {
          t += " - "
          r = -r
        } else {
          if (t.length > 0) {
            t += " + "
          }
        }
        if (0 === e || 1 !== r) {
          var n = this.field.log(r)
          if (0 === n) {
            t += "1"
          } else {
            if (1 === n) {
              t += "a"
            } else {
              t += "a^"
              t += n
            }
          }
        }
        if (0 !== e) {
          if (1 === e) {
            t += "x"
          } else {
            t += "x^"
            t += e
          }
        }
      }
    }
    return t
  }
  return t
}()
exports.a = a
