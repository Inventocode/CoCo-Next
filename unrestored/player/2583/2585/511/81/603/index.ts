/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：603
 */

"use strict"

var r = require("../164")
var i = require("../63")
var o = require("../117")
var a = require("../109")
var s = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var u = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new i.a()
    }
    this.field = t
    var /* [auto-meaningful-name] */e$length = e.length
    if (e$length > 1 && 0 === e[0]) {
      for (var r = 1; r < e$length && 0 === e[r];) {
        r++
      }
      if (r === e$length) {
        this.coefficients = new Int32Array([0])
      } else {
        this.coefficients = new Int32Array(e$length - r)
        o.a.arraycopy(e, r, this.coefficients, 0, this.coefficients.length)
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
    var /* [auto-meaningful-name] */i$return
    if (0 === t) {
      return this.getCoefficient(0)
    }
    if (1 === t) {
      var r = 0
      try {
        for (var i = s(this.coefficients), o = i.next(); !o.done; o = i.next()) {
          var /* [auto-meaningful-name] */o$value = o.value
          r = this.field.add(r, o$value)
        }
      } catch (d) {
        e = {
          error: d
        }
      } finally {
        try {
          if (o && !o.done && (i$return = i.return)) {
            i$return.call(i)
          }
        } finally {
          if (e) {
            throw e.error
          }
        }
      }
      return r
    }
    for (var u = this.coefficients[0], /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, l = 1; l < this$coefficients$length; l++) {
      u = this.field.add(this.field.multiply(t, u), this.coefficients[l])
    }
    return u
  }
  t.prototype.add = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("ModulusPolys do not have same ModulusGF field")
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
    var s = new Int32Array(e$coefficients.length)
    var u = e$coefficients.length - this$coefficients.length
    o.a.arraycopy(e$coefficients, 0, s, 0, u)
    for (var c = u; c < e$coefficients.length; c++) {
      s[c] = this.field.add(this$coefficients[c - u], e$coefficients[c])
    }
    return new t(this.field, s)
  }
  t.prototype.subtract = function (t) {
    if (!this.field.equals(t.field)) {
      throw new i.a("ModulusPolys do not have same ModulusGF field")
    }
    return t.isZero() ? this : this.add(t.negative())
  }
  t.prototype.multiply = function (e) {
    return e instanceof t ? this.multiplyOther(e) : this.multiplyScalar(e)
  }
  t.prototype.multiplyOther = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("ModulusPolys do not have same ModulusGF field")
    }
    if (this.isZero() || e.isZero()) {
      return new t(this.field, new Int32Array([0]))
    }
    for (var /* [auto-meaningful-name] */this$coefficients = this.coefficients, /* [auto-meaningful-name] */this$coefficients$length = this$coefficients.length, /* [auto-meaningful-name] */e$coefficients = e.coefficients, /* [auto-meaningful-name] */e$coefficients$length = e$coefficients.length, s = new Int32Array(this$coefficients$length + e$coefficients$length - 1), u = 0; u < this$coefficients$length; u++) {
      for (var c = this$coefficients[u], l = 0; l < e$coefficients$length; l++) {
        s[u + l] = this.field.add(s[u + l], this.field.multiply(c, e$coefficients[l]))
      }
    }
    return new t(this.field, s)
  }
  t.prototype.negative = function () {
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, n = new Int32Array(this$coefficients$length), r = 0; r < this$coefficients$length; r++) {
      n[r] = this.field.subtract(0, this.coefficients[r])
    }
    return new t(this.field, n)
  }
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return new t(this.field, new Int32Array([0]))
    }
    if (1 === e) {
      return this
    }
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, r = new Int32Array(this$coefficients$length), i = 0; i < this$coefficients$length; i++) {
      r[i] = this.field.multiply(this.coefficients[i], e)
    }
    return new t(this.field, r)
  }
  t.prototype.multiplyByMonomial = function (e, n) {
    if (e < 0) {
      throw new i.a()
    }
    if (0 === n) {
      return new t(this.field, new Int32Array([0]))
    }
    for (var /* [auto-meaningful-name] */this$coefficients$length = this.coefficients.length, o = new Int32Array(this$coefficients$length + e), a = 0; a < this$coefficients$length; a++) {
      o[a] = this.field.multiply(this.coefficients[a], n)
    }
    return new t(this.field, o)
  }
  t.prototype.toString = function () {
    for (var t = new a.a(), e = this.getDegree(); e >= 0; e--) {
      var n = this.getCoefficient(e)
      if (0 !== n) {
        if (n < 0) {
          t.append(" - ")
          n = -n
        } else {
          if (t.length() > 0) {
            t.append(" + ")
          }
        }
        if (!(0 !== e && 1 === n)) {
          t.append(n)
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
var c = require("./123")
var l = require("../451")
var d = function () {
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
      throw new i.a()
    }
    return this.logTable[t]
  }
  t.prototype.inverse = function (t) {
    if (0 === t) {
      throw new l.a()
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
var f = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n]
      }
    })(e, n)
  }
  return function (e, n) {
    function r() {
      this.constructor = e
    }
    t(e, n)
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var h = function (t) {
  function e(e, n) {
    var r = t.call(this) || this
    r.modulus = e
    r.expTable = new Int32Array(e)
    r.logTable = new Int32Array(e)
    for (var i = 1, o = 0; o < e; o++) {
      r.expTable[o] = i
      i = i * n % e
    }
    for (o = 0; o < e - 1; o++) {
      r.logTable[r.expTable[o]] = o
    }
    r.zero = new u(r, new Int32Array([0]))
    r.one = new u(r, new Int32Array([1]))
    return r
  }
  f(e, t)
  e.prototype.getZero = function () {
    return this.zero
  }
  e.prototype.getOne = function () {
    return this.one
  }
  e.prototype.buildMonomial = function (t, e) {
    if (t < 0) {
      throw new i.a()
    }
    if (0 === e) {
      return this.zero
    }
    var n = new Int32Array(t + 1)
    n[0] = e
    return new u(this, n)
  }
  e.PDF417_GF = new e(c.a.NUMBER_OF_CODEWORDS, 3)
  return e
}(d)
var p = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var m = function () {
  function t() {
    this.field = h.PDF417_GF
  }
  t.prototype.decode = function (t, e, n) {
    for (var i, /* [auto-meaningful-name] */h$return, a = new u(this.field, t), s = new Int32Array(e), c = false, l = e; l > 0; l--) {
      var d = a.evaluateAt(this.field.exp(l))
      s[e - l] = d
      if (0 !== d) {
        c = true
      }
    }
    if (!c) {
      return 0
    }
    var f = this.field.getOne()
    if (null != n) {
      try {
        for (var h = p(n), m = h.next(); !m.done; m = h.next()) {
          var /* [auto-meaningful-name] */m$value = m.value
          var g = this.field.exp(t.length - 1 - m$value)
          var v = new u(this.field, new Int32Array([this.field.subtract(0, g), 1]))
          f = f.multiply(v)
        }
      } catch (S) {
        i = {
          error: S
        }
      } finally {
        try {
          if (m && !m.done && (h$return = h.return)) {
            h$return.call(h)
          }
        } finally {
          if (i) {
            throw i.error
          }
        }
      }
    }
    var _ = new u(this.field, s)
    var y = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), _, e)
    var w = y[0]
    var E = y[1]
    var O = this.findErrorLocations(w)
    var T = this.findErrorMagnitudes(E, w, O)
    for (l = 0; l < O.length; l++) {
      var A = t.length - 1 - this.field.log(O[l])
      if (A < 0) {
        throw r.a.getChecksumInstance()
      }
      t[A] = this.field.subtract(t[A], T[l])
    }
    return O.length
  }
  t.prototype.runEuclideanAlgorithm = function (t, e, n) {
    if (t.getDegree() < e.getDegree()) {
      var i = t
      t = e
      e = i
    }
    for (var o = t, a = e, s = this.field.getZero(), u = this.field.getOne(); a.getDegree() >= Math.round(n / 2);) {
      var c = o
      var l = s
      s = u
      if ((o = a).isZero()) {
        throw r.a.getChecksumInstance()
      }
      a = c
      for (var d = this.field.getZero(), f = o.getCoefficient(o.getDegree()), h = this.field.inverse(f); a.getDegree() >= o.getDegree() && !a.isZero();) {
        var p = a.getDegree() - o.getDegree()
        var m = this.field.multiply(a.getCoefficient(a.getDegree()), h)
        d = d.add(this.field.buildMonomial(p, m))
        a = a.subtract(o.multiplyByMonomial(p, m))
      }
      u = d.multiply(s).subtract(l).negative()
    }
    var b = u.getCoefficient(0)
    if (0 === b) {
      throw r.a.getChecksumInstance()
    }
    var g = this.field.inverse(b)
    return [u.multiply(g), a.multiply(g)]
  }
  t.prototype.findErrorLocations = function (t) {
    for (var e = t.getDegree(), n = new Int32Array(e), i = 0, o = 1; o < this.field.getSize() && i < e; o++) {
      if (0 === t.evaluateAt(o)) {
        n[i] = this.field.inverse(o)
        i++
      }
    }
    if (i !== e) {
      throw r.a.getChecksumInstance()
    }
    return n
  }
  t.prototype.findErrorMagnitudes = function (t, e, n) {
    for (var r = e.getDegree(), i = new Int32Array(r), o = 1; o <= r; o++) {
      i[r - o] = this.field.multiply(o, e.getCoefficient(o))
    }
    var a = new u(this.field, i)
    var /* [auto-meaningful-name] */n$length = n.length
    var c = new Int32Array(n$length)
    for (o = 0; o < n$length; o++) {
      var l = this.field.inverse(n[o])
      var d = this.field.subtract(0, t.evaluateAt(l))
      var f = this.field.inverse(a.evaluateAt(l))
      c[o] = this.field.multiply(d, f)
    }
    return c
  }
  return t
}()
exports.a = m
