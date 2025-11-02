/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：274
 */

"use strict"

var r = require("./191/412")
var i = require("./117")
var o = require("./63")
var a = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new o.a()
    }
    this.field = t
    var e$length = e.length
    if (e$length > 1 && 0 === e[0]) {
      for (var r = 1; r < e$length && 0 === e[r];) {
        r++
      }
      if (r === e$length) {
        this.coefficients = Int32Array.from([0])
      } else {
        this.coefficients = new Int32Array(e$length - r)
        i.a.arraycopy(e, r, this.coefficients, 0, this.coefficients.length)
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
      for (var i = 0, _this$coefficients$length = this$coefficients.length; i !== _this$coefficients$length; i++) {
        var a = this$coefficients[i]
        e = r.a.addOrSubtract(e, a)
      }
      return e
    }
    e = this$coefficients[0]
    var this$coefficients$length = this$coefficients.length
    var this$field = this.field
    for (i = 1; i < this$coefficients$length; i++) {
      e = r.a.addOrSubtract(this$field.multiply(t, e), this$coefficients[i])
    }
    return e
  }
  t.prototype.addOrSubtract = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field")
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
      var s = this$coefficients
      this$coefficients = e$coefficients
      e$coefficients = s
    }
    var u = new Int32Array(e$coefficients.length)
    var c = e$coefficients.length - this$coefficients.length
    i.a.arraycopy(e$coefficients, 0, u, 0, c)
    for (var l = c; l < e$coefficients.length; l++) {
      u[l] = r.a.addOrSubtract(this$coefficients[l - c], e$coefficients[l])
    }
    return new t(this.field, u)
  }
  t.prototype.multiply = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field")
    }
    if (this.isZero() || e.isZero()) {
      return this.field.getZero()
    }
    for (var this$coefficients = this.coefficients, this$coefficients$length = this$coefficients.length, e$coefficients = e.coefficients, e$coefficients$length = e$coefficients.length, u = new Int32Array(this$coefficients$length + e$coefficients$length - 1), this$field = this.field, l = 0; l < this$coefficients$length; l++) {
      for (var d = this$coefficients[l], f = 0; f < e$coefficients$length; f++) {
        u[l + f] = r.a.addOrSubtract(u[l + f], this$field.multiply(d, e$coefficients[f]))
      }
    }
    return new t(this$field, u)
  }
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return this.field.getZero()
    }
    if (1 === e) {
      return this
    }
    for (var this$coefficients$length = this.coefficients.length, this$field = this.field, i = new Int32Array(this$coefficients$length), this$coefficients = this.coefficients, a = 0; a < this$coefficients$length; a++) {
      i[a] = this$field.multiply(this$coefficients[a], e)
    }
    return new t(this$field, i)
  }
  t.prototype.multiplyByMonomial = function (e, n) {
    if (e < 0) {
      throw new o.a()
    }
    if (0 === n) {
      return this.field.getZero()
    }
    for (var this$coefficients = this.coefficients, this$coefficients$length = this$coefficients.length, a = new Int32Array(this$coefficients$length + e), this$field = this.field, u = 0; u < this$coefficients$length; u++) {
      a[u] = this$field.multiply(this$coefficients[u], n)
    }
    return new t(this$field, a)
  }
  t.prototype.divide = function (t) {
    if (!this.field.equals(t.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field")
    }
    if (t.isZero()) {
      throw new o.a("Divide by 0")
    }
    for (var this$field = this.field, n = this$field.getZero(), r = this, i = t.getCoefficient(t.getDegree()), a = this$field.inverse(i); r.getDegree() >= t.getDegree() && !r.isZero();) {
      var s = r.getDegree() - t.getDegree()
      var u = this$field.multiply(r.getCoefficient(r.getDegree()), a)
      var c = t.multiplyByMonomial(s, u)
      var l = this$field.buildMonomial(s, u)
      n = n.addOrSubtract(l)
      r = r.addOrSubtract(c)
    }
    return [n, r]
  }
  t.prototype.toString = function () {
    for (var t = "", e = this.getDegree(); e >= 0; e--) {
      var n = this.getCoefficient(e)
      if (0 !== n) {
        if (n < 0) {
          t += " - "
          n = -n
        } else {
          if (t.length > 0) {
            t += " + "
          }
        }
        if (0 === e || 1 !== n) {
          var r = this.field.log(n)
          if (0 === r) {
            t += "1"
          } else {
            if (1 === r) {
              t += "a"
            } else {
              t += "a^"
              t += r
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
