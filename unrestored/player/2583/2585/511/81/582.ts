/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：582
 */

"use strict"

var r = require("./583")
var i = require("./180")
var o = function () {
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
var a = function (t) {
  function e(e) {
    var n = t.call(this, e) || this
    n.matrix = null
    return n
  }
  o(e, t)
  e.prototype.getBlackMatrix = function () {
    if (null !== this.matrix) {
      return this.matrix
    }
    var n = this.getLuminanceSource()
    var r = n.getWidth()
    var o = n.getHeight()
    if (r >= e.MINIMUM_DIMENSION && o >= e.MINIMUM_DIMENSION) {
      var a = n.getMatrix()
      var s = r >> e.BLOCK_SIZE_POWER
      if (0 !== (r & e.BLOCK_SIZE_MASK)) {
        s++
      }
      var u = o >> e.BLOCK_SIZE_POWER
      if (0 !== (o & e.BLOCK_SIZE_MASK)) {
        u++
      }
      var c = e.calculateBlackPoints(a, s, u, r, o)
      var l = new i.a(r, o)
      e.calculateThresholdForBlock(a, s, u, r, o, c, l)
      this.matrix = l
    } else {
      this.matrix = t.prototype.getBlackMatrix.call(this)
    }
    return this.matrix
  }
  e.prototype.createBinarizer = function (t) {
    return new e(t)
  }
  e.calculateThresholdForBlock = function (t, n, r, i, o, a, s) {
    for (var u = o - e.BLOCK_SIZE, c = i - e.BLOCK_SIZE, l = 0; l < r; l++) {
      var d = l << e.BLOCK_SIZE_POWER
      if (d > u) {
        d = u
      }
      for (var f = e.cap(l, 2, r - 3), h = 0; h < n; h++) {
        var p = h << e.BLOCK_SIZE_POWER
        if (p > c) {
          p = c
        }
        for (var m = e.cap(h, 2, n - 3), b = 0, g = -2; g <= 2; g++) {
          var v = a[f + g]
          b += v[m - 2] + v[m - 1] + v[m] + v[m + 1] + v[m + 2]
        }
        var _ = b / 25
        e.thresholdBlock(t, p, d, _, i, s)
      }
    }
  }
  e.cap = function (t, e, n) {
    return t < e ? e : t > n ? n : t
  }
  e.thresholdBlock = function (t, n, r, i, o, a) {
    for (var s = 0, u = r * o + n; s < e.BLOCK_SIZE; s++, u += o) {
      for (var c = 0; c < e.BLOCK_SIZE; c++) {
        if ((255 & t[u + c]) <= i) {
          a.set(n + c, r + s)
        }
      }
    }
  }
  e.calculateBlackPoints = function (t, n, r, i, o) {
    for (var a = o - e.BLOCK_SIZE, s = i - e.BLOCK_SIZE, u = new Array(r), c = 0; c < r; c++) {
      u[c] = new Int32Array(n)
      var l = c << e.BLOCK_SIZE_POWER
      if (l > a) {
        l = a
      }
      for (var d = 0; d < n; d++) {
        var f = d << e.BLOCK_SIZE_POWER
        if (f > s) {
          f = s
        }
        for (var h = 0, p = 255, m = 0, b = 0, g = l * i + f; b < e.BLOCK_SIZE; b++, g += i) {
          for (var v = 0; v < e.BLOCK_SIZE; v++) {
            var _ = 255 & t[g + v]
            h += _
            if (_ < p) {
              p = _
            }
            if (_ > m) {
              m = _
            }
          }
          if (m - p > e.MIN_DYNAMIC_RANGE) {
            for (b++, g += i; b < e.BLOCK_SIZE; b++, g += i) {
              for (v = 0; v < e.BLOCK_SIZE; v++) {
                h += 255 & t[g + v]
              }
            }
          }
        }
        var y = h >> 2 * e.BLOCK_SIZE_POWER
        if (m - p <= e.MIN_DYNAMIC_RANGE && (y = p / 2, c > 0 && d > 0)) {
          var w = (u[c - 1][d] + 2 * u[c][d - 1] + u[c - 1][d - 1]) / 4
          if (p < w) {
            y = w
          }
        }
        u[c][d] = y
      }
    }
    return u
  }
  e.BLOCK_SIZE_POWER = 3
  e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER
  e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1
  e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE
  e.MIN_DYNAMIC_RANGE = 24
  return e
}(r.a)
exports.a = a
