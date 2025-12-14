/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：587
 */

"use strict"

var r = require("./588")
var i = require("./166")
var o = require("./181")
var a = require("./36")
var s = function () {
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
var u = function (t) {
  function e(n) {
    var r = t.call(this, n) || this
    r.luminances = e.EMPTY
    r.buckets = new Int32Array(e.LUMINANCE_BUCKETS)
    return r
  }
  s(e, t)
  e.prototype.getBlackRow = function (t, n) {
    var r = this.getLuminanceSource()
    var o = r.getWidth()
    if (undefined === n || null === n || n.getSize() < o) {
      n = new i.a(o)
    } else {
      n.clear()
    }
    this.initArrays(o)
    for (var a = r.getRow(t, this.luminances), /* [auto-meaningful-name] */this$buckets = this.buckets, u = 0; u < o; u++) {
      this$buckets[(255 & a[u]) >> e.LUMINANCE_SHIFT]++
    }
    var c = e.estimateBlackPoint(this$buckets)
    if (o < 3) {
      for (u = 0; u < o; u++) {
        if ((255 & a[u]) < c) {
          n.set(u)
        }
      }
    } else {
      var l = 255 & a[0]
      var d = 255 & a[1]
      for (u = 1; u < o - 1; u++) {
        var f = 255 & a[u + 1]
        if ((4 * d - l - f) / 2 < c) {
          n.set(u)
        }
        l = d
        d = f
      }
    }
    return n
  }
  e.prototype.getBlackMatrix = function () {
    var t = this.getLuminanceSource()
    var n = t.getWidth()
    var r = t.getHeight()
    var i = new o.a(n, r)
    this.initArrays(n)
    for (var /* [auto-meaningful-name] */this$buckets = this.buckets, s = 1; s < 5; s++) {
      for (var u = Math.floor(r * s / 5), c = t.getRow(u, this.luminances), l = Math.floor(4 * n / 5), d = Math.floor(n / 5); d < l; d++) {
        this$buckets[(255 & c[d]) >> e.LUMINANCE_SHIFT]++
      }
    }
    var f = e.estimateBlackPoint(this$buckets)
    var h = t.getMatrix()
    for (s = 0; s < r; s++) {
      var p = s * n
      for (d = 0; d < n; d++) {
        if ((255 & h[p + d]) < f) {
          i.set(d, s)
        }
      }
    }
    return i
  }
  e.prototype.createBinarizer = function (t) {
    return new e(t)
  }
  e.prototype.initArrays = function (t) {
    if (this.luminances.length < t) {
      this.luminances = new Uint8ClampedArray(t)
    }
    for (var /* [auto-meaningful-name] */this$buckets = this.buckets, r = 0; r < e.LUMINANCE_BUCKETS; r++) {
      this$buckets[r] = 0
    }
  }
  e.estimateBlackPoint = function (t) {
    for (var /* [auto-meaningful-name] */t$length = t.length, r = 0, i = 0, o = 0, s = 0; s < t$length; s++) {
      if (t[s] > o) {
        i = s
        o = t[s]
      }
      if (t[s] > r) {
        r = t[s]
      }
    }
    var u = 0
    var c = 0
    for (s = 0; s < t$length; s++) {
      var l = s - i
      if ((p = t[s] * l * l) > c) {
        u = s
        c = p
      }
    }
    if (i > u) {
      var d = i
      i = u
      u = d
    }
    if (u - i <= t$length / 16) {
      throw new a.a()
    }
    var f = u - 1
    var h = -1
    for (s = u - 1; s > i; s--) {
      var p
      var m = s - i
      if ((p = m * m * (u - s) * (r - t[s])) > h) {
        f = s
        h = p
      }
    }
    return f << e.LUMINANCE_SHIFT
  }
  e.LUMINANCE_BITS = 5
  e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS
  e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS
  e.EMPTY = Uint8ClampedArray.from([0])
  return e
}(r.a)
exports.a = u
