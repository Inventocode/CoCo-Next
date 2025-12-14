/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：607
 */

"use strict"

var n = require("../165")
var o = require("../63")
var i = require("../115")
var a = require("../108")
var u = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var r = e && t[e]
  var n = 0
  if (r) {
    return r.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined
        }
        return {
          value: t && t[n++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var s = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new o.a()
    }
    this.field = t
    var /* [auto-meaningful-name] */e$length = e.length
    if (e$length > 1 && 0 === e[0]) {
      for (var n = 1; n < e$length && 0 === e[n];) {
        n++
      }
      if (n === e$length) {
        this.coefficients = new Int32Array([0])
      } else {
        this.coefficients = new Int32Array(e$length - n)
        i.a.arraycopy(e, n, this.coefficients, 0, this.coefficients.length)
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
    var e
    var /* [auto-meaningful-name] */o$return
    if (0 === t) {
      return this.getCoefficient(0)
    }
    if (1 === t) {
      var n = 0
      try {
        for (var o = u(this.coefficients), i = o.next(); !i.done; i = o.next()) {
          var /* [auto-meaningful-name] */i$value = i.value
          n = this.field.add(n, i$value)
        }
      } catch (h) {
        e = {
          error: h
        }
      } finally {
        try {
          if (i && !i.done && (o$return = o.return)) {
            o$return.call(o)
          }
        } finally {
          if (e) {
            throw e.error
          }
        }
      }
      return n
    }
    for (var s = this.coefficients[0], /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, f = 1; f < this$coefficients$length; f++) {
      s = this.field.add(this.field.multiply(t, s), this.coefficients[f])
    }
    return s
  }
  t.prototype.add = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("ModulusPolys do not have same ModulusGF field")
    }
    if (this.isZero()) {
      return e
    }
    if (e.isZero()) {
      return this
    }
    var /* [auto-meaningful-name] */this$coefficients = this.coefficients
    var /* [auto-meaningful-name] */e$coefficients = e.coefficients
    if (this$coefficients.length > e$coefficients.length) {
      var a = this$coefficients
      this$coefficients = e$coefficients
      e$coefficients = a
    }
    var u = new Int32Array(e$coefficients.length)
    var s = e$coefficients.length - this$coefficients.length
    i.a.arraycopy(e$coefficients, 0, u, 0, s)
    for (var c = s; c < e$coefficients.length; c++) {
      u[c] = this.field.add(this$coefficients[c - s], e$coefficients[c])
    }
    return new t(this.field, u)
  }
  t.prototype.subtract = function (t) {
    if (!this.field.equals(t.field)) {
      throw new o.a("ModulusPolys do not have same ModulusGF field")
    }
    return t.isZero() ? this : this.add(t.negative())
  }
  t.prototype.multiply = function (e) {
    return e instanceof t ? this.multiplyOther(e) : this.multiplyScalar(e)
  }
  t.prototype.multiplyOther = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("ModulusPolys do not have same ModulusGF field")
    }
    if (this.isZero() || e.isZero()) {
      return new t(this.field, new Int32Array([0]))
    }
    for (var /* [auto-meaningful-name] */this$coefficients = this.coefficients, /* [auto-meaningful-name] */this$coefficients$length = this$coefficients.length, /* [auto-meaningful-name] */e$coefficients = e.coefficients, /* [auto-meaningful-name] */e$coefficients$length = e$coefficients.length, u = new Int32Array(this$coefficients$length + e$coefficients$length - 1), s = 0; s < this$coefficients$length; s++) {
      for (var c = this$coefficients[s], f = 0; f < e$coefficients$length; f++) {
        u[s + f] = this.field.add(u[s + f], this.field.multiply(c, e$coefficients[f]))
      }
    }
    return new t(this.field, u)
  }
  t.prototype.negative = function () {
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, r = new Int32Array(this$coefficients$length), n = 0; n < this$coefficients$length; n++) {
      r[n] = this.field.subtract(0, this.coefficients[n])
    }
    return new t(this.field, r)
  }
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return new t(this.field, new Int32Array([0]))
    }
    if (1 === e) {
      return this
    }
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, n = new Int32Array(this$coefficients$length), o = 0; o < this$coefficients$length; o++) {
      n[o] = this.field.multiply(this.coefficients[o], e)
    }
    return new t(this.field, n)
  }
  t.prototype.multiplyByMonomial = function (e, r) {
    if (e < 0) {
      throw new o.a()
    }
    if (0 === r) {
      return new t(this.field, new Int32Array([0]))
    }
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, i = new Int32Array(this$coefficients$length + e), a = 0; a < this$coefficients$length; a++) {
      i[a] = this.field.multiply(this.coefficients[a], r)
    }
    return new t(this.field, i)
  }
  t.prototype.toString = function () {
    for (var t = new a.a(), e = this.getDegree(); e >= 0; e--) {
      var r = this.getCoefficient(e)
      if (0 !== r) {
        if (r < 0) {
          t.append(" - ")
          r = -r
        } else {
          if (t.length() > 0) {
            t.append(" + ")
          }
        }
        if (!(0 !== e && 1 === r)) {
          t.append(r)
        }
        if (0 !== e) {
          if (1 === e) {
            t.append("x")
          } else {
            t.append("x^")
            t.append(e)
          }
        }
      }
    }
    return t.toString()
  }
  return t
}()
var c = require("./121")
var f = require("../455")
var h = function () {
  function t() {}
  t.prototype.add = function (t, e) {
    return (t + e) % this.modulus
  }
  t.prototype.subtract = function (t, e) {
    return (this.modulus + t - e) % this.modulus
  }
  t.prototype.exp = function (t) {
    return this.expTable[t]
  }
  t.prototype.log = function (t) {
    if (0 === t) {
      throw new o.a()
    }
    return this.logTable[t]
  }
  t.prototype.inverse = function (t) {
    if (0 === t) {
      throw new f.a()
    }
    return this.expTable[this.modulus - this.logTable[t] - 1]
  }
  t.prototype.multiply = function (t, e) {
    return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)]
  }
  t.prototype.getSize = function () {
    return this.modulus
  }
  t.prototype.equals = function (t) {
    return t === this
  }
  return t
}()
var l = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r]
      }
    })(e, r)
  }
  return function (e, r) {
    function n() {
      this.constructor = e
    }
    t(e, r)
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n())
  }
}()
var d = function (t) {
  function e(e, r) {
    var n = t.call(this) || this
    n.modulus = e
    n.expTable = new Int32Array(e)
    n.logTable = new Int32Array(e)
    for (var o = 1, i = 0; i < e; i++) {
      n.expTable[i] = o
      o = o * r % e
    }
    for (i = 0; i < e - 1; i++) {
      n.logTable[n.expTable[i]] = i
    }
    n.zero = new s(n, new Int32Array([0]))
    n.one = new s(n, new Int32Array([1]))
    return n
  }
  l(e, t)
  e.prototype.getZero = function () {
    return this.zero
  }
  e.prototype.getOne = function () {
    return this.one
  }
  e.prototype.buildMonomial = function (t, e) {
    if (t < 0) {
      throw new o.a()
    }
    if (0 === e) {
      return this.zero
    }
    var r = new Int32Array(t + 1)
    r[0] = e
    return new s(this, r)
  }
  e.PDF417_GF = new e(c.a.NUMBER_OF_CODEWORDS, 3)
  return e
}(h)
var p = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var r = e && t[e]
  var n = 0
  if (r) {
    return r.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined
        }
        return {
          value: t && t[n++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var g = function () {
  function t() {
    this.field = d.PDF417_GF
  }
  t.prototype.decode = function (t, e, r) {
    for (var o, /* [auto-meaningful-name] */d$return, a = new s(this.field, t), u = new Int32Array(e), c = false, f = e; f > 0; f--) {
      var h = a.evaluateAt(this.field.exp(f))
      u[e - f] = h
      if (0 !== h) {
        c = true
      }
    }
    if (!c) {
      return 0
    }
    var l = this.field.getOne()
    if (null != r) {
      try {
        for (var d = p(r), g = d.next(); !g.done; g = d.next()) {
          var /* [auto-meaningful-name] */g$value = g.value
          var w = this.field.exp(t.length - 1 - g$value)
          var v = new s(this.field, new Int32Array([this.field.subtract(0, w), 1]))
          l = l.multiply(v)
        }
      } catch (T) {
        o = {
          error: T
        }
      } finally {
        try {
          if (g && !g.done && (d$return = d.return)) {
            d$return.call(d)
          }
        } finally {
          if (o) {
            throw o.error
          }
        }
      }
    }
    var _ = new s(this.field, u)
    var m = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), _, e)
    var A = m[0]
    var E = m[1]
    var C = this.findErrorLocations(A)
    var I = this.findErrorMagnitudes(E, A, C)
    for (f = 0; f < C.length; f++) {
      var S = t.length - 1 - this.field.log(C[f])
      if (S < 0) {
        throw n.a.getChecksumInstance()
      }
      t[S] = this.field.subtract(t[S], I[f])
    }
    return C.length
  }
  t.prototype.runEuclideanAlgorithm = function (t, e, r) {
    if (t.getDegree() < e.getDegree()) {
      var o = t
      t = e
      e = o
    }
    for (var i = t, a = e, u = this.field.getZero(), s = this.field.getOne(); a.getDegree() >= Math.round(r / 2);) {
      var c = i
      var f = u
      u = s
      if ((i = a).isZero()) {
        throw n.a.getChecksumInstance()
      }
      a = c
      for (var h = this.field.getZero(), l = i.getCoefficient(i.getDegree()), d = this.field.inverse(l); a.getDegree() >= i.getDegree() && !a.isZero();) {
        var p = a.getDegree() - i.getDegree()
        var g = this.field.multiply(a.getCoefficient(a.getDegree()), d)
        h = h.add(this.field.buildMonomial(p, g))
        a = a.subtract(i.multiplyByMonomial(p, g))
      }
      s = h.multiply(u).subtract(f).negative()
    }
    var y = s.getCoefficient(0)
    if (0 === y) {
      throw n.a.getChecksumInstance()
    }
    var w = this.field.inverse(y)
    return [s.multiply(w), a.multiply(w)]
  }
  t.prototype.findErrorLocations = function (t) {
    for (var e = t.getDegree(), r = new Int32Array(e), o = 0, i = 1; i < this.field.getSize() && o < e; i++) {
      if (0 === t.evaluateAt(i)) {
        r[o] = this.field.inverse(i)
        o++
      }
    }
    if (o !== e) {
      throw n.a.getChecksumInstance()
    }
    return r
  }
  t.prototype.findErrorMagnitudes = function (t, e, r) {
    for (var n = e.getDegree(), o = new Int32Array(n), i = 1; i <= n; i++) {
      o[n - i] = this.field.multiply(i, e.getCoefficient(i))
    }
    var a = new s(this.field, o)
    var /* [auto-meaningful-name] */r$length = r.length
    var c = new Int32Array(r$length)
    for (i = 0; i < r$length; i++) {
      var f = this.field.inverse(r[i])
      var h = this.field.subtract(0, t.evaluateAt(f))
      var l = this.field.inverse(a.evaluateAt(f))
      c[i] = this.field.multiply(h, l)
    }
    return c
  }
  return t
}()
exports.a = g
