/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：464
 */

"use strict"

var r = require("./166")
var i = require("./63")
var o = require("./124")
var a = require("./181")
var s = require("./602")
var u = require("./460")
var c = require("./191")
var l = require("./605")
var d = require("./102")
var f = function (t) {
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
var h = function () {
  function t() {}
  t.encodeBytes = function (e) {
    return t.encode(e, t.DEFAULT_EC_PERCENT, t.DEFAULT_AZTEC_LAYERS)
  }
  t.encode = function (e, n, r) {
    var u
    var c
    var f
    var h
    var p
    var m = new l.a(e).encode()
    var b = d.a.truncDivision(m.getSize() * n, 100) + 11
    var g = m.getSize() + b
    if (r !== t.DEFAULT_AZTEC_LAYERS) {
      u = r < 0
      if ((c = Math.abs(r)) > (u ? t.MAX_NB_BITS_COMPACT : t.MAX_NB_BITS)) {
        throw new i.a(o.a.format("Illegal value %s for layers", r))
      }
      var v = (f = t.totalBitsInLayer(c, u)) - f % (h = t.WORD_SIZE[c])
      if ((p = t.stuffBits(m, h)).getSize() + b > v) {
        throw new i.a("Data to large for user specified layer")
      }
      if (u && p.getSize() > 64 * h) {
        throw new i.a("Data to large for user specified layer")
      }
    } else {
      h = 0
      p = null
      for (var _ = 0;; _++) {
        if (_ > t.MAX_NB_BITS) {
          throw new i.a("Data too large for an Aztec code")
        }
        c = (u = _ <= 3) ? _ + 1 : _
        if (!(g > (f = t.totalBitsInLayer(c, u)))) {
          if (!(null != p && h === t.WORD_SIZE[c])) {
            h = t.WORD_SIZE[c]
            p = t.stuffBits(m, h)
          }
          v = f - f % h
          if (!(u && p.getSize() > 64 * h) && p.getSize() + b <= v) {
            break
          }
        }
      }
    }
    var y
    var w = t.generateCheckWords(p, f, h)
    var E = p.getSize() / h
    var O = t.generateModeMessage(u, c, E)
    var T = (u ? 11 : 14) + 4 * c
    var A = new Int32Array(T)
    if (u) {
      y = T
      for (_ = 0; _ < A.length; _++) {
        A[_] = _
      }
    } else {
      y = T + 1 + 2 * d.a.truncDivision(d.a.truncDivision(T, 2) - 1, 15)
      var S = d.a.truncDivision(T, 2)
      var I = d.a.truncDivision(y, 2)
      for (_ = 0; _ < S; _++) {
        var C = _ + d.a.truncDivision(_, 15)
        A[S - _ - 1] = I - C - 1
        A[S + _] = I + C + 1
      }
    }
    for (_ = 0, j = new a.a(y), M = 0, undefined; _ < c; _++) {
      var j
      var M
      for (var k = 4 * (c - _) + (u ? 9 : 12), R = 0; R < k; R++) {
        for (var N = 2 * R, x = 0; x < 2; x++) {
          if (w.get(M + N + x)) {
            j.set(A[2 * _ + x], A[2 * _ + R])
          }
          if (w.get(M + 2 * k + N + x)) {
            j.set(A[2 * _ + R], A[T - 1 - 2 * _ - x])
          }
          if (w.get(M + 4 * k + N + x)) {
            j.set(A[T - 1 - 2 * _ - x], A[T - 1 - 2 * _ - R])
          }
          if (w.get(M + 6 * k + N + x)) {
            j.set(A[T - 1 - 2 * _ - R], A[2 * _ + x])
          }
        }
      }
      M += 8 * k
    }
    t.drawModeMessage(j, u, y, O)
    if (u) {
      t.drawBullsEye(j, d.a.truncDivision(y, 2), 5)
    } else {
      t.drawBullsEye(j, d.a.truncDivision(y, 2), 7)
      for (_ = 0, R = 0; _ < d.a.truncDivision(T, 2) - 1; _ += 15, R += 16) {
        for (x = 1 & d.a.truncDivision(y, 2); x < y; x += 2) {
          j.set(d.a.truncDivision(y, 2) - R, x)
          j.set(d.a.truncDivision(y, 2) + R, x)
          j.set(x, d.a.truncDivision(y, 2) - R)
          j.set(x, d.a.truncDivision(y, 2) + R)
        }
      }
    }
    var D = new s.a()
    D.setCompact(u)
    D.setSize(y)
    D.setLayers(c)
    D.setCodeWords(E)
    D.setMatrix(j)
    return D
  }
  t.drawBullsEye = function (t, e, n) {
    for (var r = 0; r < n; r += 2) {
      for (var i = e - r; i <= e + r; i++) {
        t.set(i, e - r)
        t.set(i, e + r)
        t.set(e - r, i)
        t.set(e + r, i)
      }
    }
    t.set(e - n, e - n)
    t.set(e - n + 1, e - n)
    t.set(e - n, e - n + 1)
    t.set(e + n, e - n)
    t.set(e + n, e - n + 1)
    t.set(e + n, e + n - 1)
  }
  t.generateModeMessage = function (e, n, i) {
    var o = new r.a()
    if (e) {
      o.appendBits(n - 1, 2)
      o.appendBits(i - 1, 6)
      o = t.generateCheckWords(o, 28, 4)
    } else {
      o.appendBits(n - 1, 5)
      o.appendBits(i - 1, 11)
      o = t.generateCheckWords(o, 40, 4)
    }
    return o
  }
  t.drawModeMessage = function (t, e, n, r) {
    var i = d.a.truncDivision(n, 2)
    if (e) {
      for (var o = 0; o < 7; o++) {
        var a = i - 3 + o
        if (r.get(o)) {
          t.set(a, i - 5)
        }
        if (r.get(o + 7)) {
          t.set(i + 5, a)
        }
        if (r.get(20 - o)) {
          t.set(a, i + 5)
        }
        if (r.get(27 - o)) {
          t.set(i - 5, a)
        }
      }
    } else {
      for (o = 0; o < 10; o++) {
        a = i - 5 + o + d.a.truncDivision(o, 5)
        if (r.get(o)) {
          t.set(a, i - 7)
        }
        if (r.get(o + 10)) {
          t.set(i + 7, a)
        }
        if (r.get(29 - o)) {
          t.set(a, i + 7)
        }
        if (r.get(39 - o)) {
          t.set(i - 7, a)
        }
      }
    }
  }
  t.generateCheckWords = function (e, n, i) {
    var o
    var /* [auto-meaningful-name] */b$return
    var s = e.getSize() / i
    var c = new u.a(t.getGF(i))
    var l = d.a.truncDivision(n, i)
    var h = t.bitsToWords(e, i, l)
    c.encode(h, l - s)
    var p = n % i
    var m = new r.a()
    m.appendBits(0, p)
    try {
      for (var b = f(Array.from(h)), g = b.next(); !g.done; g = b.next()) {
        var /* [auto-meaningful-name] */g$value = g.value
        m.appendBits(g$value, i)
      }
    } catch (_) {
      o = {
        error: _
      }
    } finally {
      try {
        if (g && !g.done && (b$return = b.return)) {
          b$return.call(b)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    return m
  }
  t.bitsToWords = function (t, e, n) {
    var r
    var i
    var o = new Int32Array(n)
    for (r = 0, i = t.getSize() / e; r < i; r++) {
      for (var a = 0, s = 0; s < e; s++) {
        a |= t.get(r * e + s) ? 1 << e - s - 1 : 0
      }
      o[r] = a
    }
    return o
  }
  t.getGF = function (t) {
    switch (t) {
      case 4:
        return c.a.AZTEC_PARAM
      case 6:
        return c.a.AZTEC_DATA_6
      case 8:
        return c.a.AZTEC_DATA_8
      case 10:
        return c.a.AZTEC_DATA_10
      case 12:
        return c.a.AZTEC_DATA_12
      default:
        throw new i.a("Unsupported word size " + t)
    }
  }
  t.stuffBits = function (t, e) {
    for (var n = new r.a(), i = t.getSize(), o = (1 << e) - 2, a = 0; a < i; a += e) {
      for (var s = 0, u = 0; u < e; u++) {
        if (a + u >= i || t.get(a + u)) {
          s |= 1 << e - 1 - u
        }
      }
      if ((s & o) === o) {
        n.appendBits(s & o, e)
        a--
      } else {
        if (0 === (s & o)) {
          n.appendBits(1 | s, e)
          a--
        } else {
          n.appendBits(s, e)
        }
      }
    }
    return n
  }
  t.totalBitsInLayer = function (t, e) {
    return ((e ? 88 : 112) + 16 * t) * t
  }
  t.DEFAULT_EC_PERCENT = 33
  t.DEFAULT_AZTEC_LAYERS = 0
  t.MAX_NB_BITS = 32
  t.MAX_NB_BITS_COMPACT = 4
  t.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12])
  return t
}()
exports.a = h
