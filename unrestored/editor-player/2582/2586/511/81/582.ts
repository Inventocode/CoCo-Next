/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：582
 */

"use strict"

var n = require("./583")
var o = require("./180")
var i = function () {
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
var a = function (t) {
  function e(e) {
    var r = t.call(this, e) || this
    r.matrix = null
    return r
  }
  i(e, t)
  e.prototype.getBlackMatrix = function () {
    if (null !== this.matrix) {
      return this.matrix
    }
    var r = this.getLuminanceSource()
    var n = r.getWidth()
    var i = r.getHeight()
    if (n >= e.MINIMUM_DIMENSION && i >= e.MINIMUM_DIMENSION) {
      var a = r.getMatrix()
      var u = n >> e.BLOCK_SIZE_POWER
      if (0 !== (n & e.BLOCK_SIZE_MASK)) {
        u++
      }
      var s = i >> e.BLOCK_SIZE_POWER
      if (0 !== (i & e.BLOCK_SIZE_MASK)) {
        s++
      }
      var c = e.calculateBlackPoints(a, u, s, n, i)
      var f = new o.a(n, i)
      e.calculateThresholdForBlock(a, u, s, n, i, c, f)
      this.matrix = f
    } else {
      this.matrix = t.prototype.getBlackMatrix.call(this)
    }
    return this.matrix
  }
  e.prototype.createBinarizer = function (t) {
    return new e(t)
  }
  e.calculateThresholdForBlock = function (t, r, n, o, i, a, u) {
    for (var s = i - e.BLOCK_SIZE, c = o - e.BLOCK_SIZE, f = 0; f < n; f++) {
      var h = f << e.BLOCK_SIZE_POWER
      if (h > s) {
        h = s
      }
      for (var l = e.cap(f, 2, n - 3), d = 0; d < r; d++) {
        var p = d << e.BLOCK_SIZE_POWER
        if (p > c) {
          p = c
        }
        for (var g = e.cap(d, 2, r - 3), y = 0, w = -2; w <= 2; w++) {
          var v = a[l + w]
          y += v[g - 2] + v[g - 1] + v[g] + v[g + 1] + v[g + 2]
        }
        var _ = y / 25
        e.thresholdBlock(t, p, h, _, o, u)
      }
    }
  }
  e.cap = function (t, e, r) {
    return t < e ? e : t > r ? r : t
  }
  e.thresholdBlock = function (t, r, n, o, i, a) {
    for (var u = 0, s = n * i + r; u < e.BLOCK_SIZE; u++, s += i) {
      for (var c = 0; c < e.BLOCK_SIZE; c++) {
        if ((255 & t[s + c]) <= o) {
          a.set(r + c, n + u)
        }
      }
    }
  }
  e.calculateBlackPoints = function (t, r, n, o, i) {
    for (var a = i - e.BLOCK_SIZE, u = o - e.BLOCK_SIZE, s = new Array(n), c = 0; c < n; c++) {
      s[c] = new Int32Array(r)
      var f = c << e.BLOCK_SIZE_POWER
      if (f > a) {
        f = a
      }
      for (var h = 0; h < r; h++) {
        var l = h << e.BLOCK_SIZE_POWER
        if (l > u) {
          l = u
        }
        for (var d = 0, p = 255, g = 0, y = 0, w = f * o + l; y < e.BLOCK_SIZE; y++, w += o) {
          for (var v = 0; v < e.BLOCK_SIZE; v++) {
            var _ = 255 & t[w + v]
            d += _
            if (_ < p) {
              p = _
            }
            if (_ > g) {
              g = _
            }
          }
          if (g - p > e.MIN_DYNAMIC_RANGE) {
            for (y++, w += o; y < e.BLOCK_SIZE; y++, w += o) {
              for (v = 0; v < e.BLOCK_SIZE; v++) {
                d += 255 & t[w + v]
              }
            }
          }
        }
        var m = d >> 2 * e.BLOCK_SIZE_POWER
        if (g - p <= e.MIN_DYNAMIC_RANGE && (m = p / 2, c > 0 && h > 0)) {
          var A = (s[c - 1][h] + 2 * s[c][h - 1] + s[c - 1][h - 1]) / 4
          if (p < A) {
            m = A
          }
        }
        s[c][h] = m
      }
    }
    return s
  }
  e.BLOCK_SIZE_POWER = 3
  e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER
  e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1
  e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE
  e.MIN_DYNAMIC_RANGE = 24
  return e
}(n.a)
exports.a = a
