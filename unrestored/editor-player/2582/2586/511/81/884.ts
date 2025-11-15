/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：884
 */

"use strict"

var n = require("./117")
var o = require("./333")
var i = require("./347")
var a = require("./63")
var u = function () {
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
!function (t) {
  function e(e, r, n, o, i, u, s, c) {
    var f = t.call(this, u, s) || this
    f.yuvData = e
    f.dataWidth = r
    f.dataHeight = n
    f.left = o
    f.top = i
    if (o + u > r || i + s > n) {
      throw new a.a("Crop rectangle does not fit within image data.")
    }
    if (c) {
      f.reverseHorizontal(u, s)
    }
    return f
  }
  u(e, t)
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new a.a("Requested row is outside the image: " + t)
    }
    var r = this.getWidth()
    if (null === e || undefined === e || e.length < r) {
      e = new Uint8ClampedArray(r)
    }
    var o = (t + this.top) * this.dataWidth + this.left
    n.a.arraycopy(this.yuvData, o, e, 0, r)
    return e
  }
  e.prototype.getMatrix = function () {
    var t = this.getWidth()
    var e = this.getHeight()
    if (t === this.dataWidth && e === this.dataHeight) {
      return this.yuvData
    }
    var r = t * e
    var o = new Uint8ClampedArray(r)
    var i = this.top * this.dataWidth + this.left
    if (t === this.dataWidth) {
      n.a.arraycopy(this.yuvData, i, o, 0, r)
      return o
    }
    for (var a = 0; a < e; a++) {
      var u = a * t
      n.a.arraycopy(this.yuvData, i, o, u, t)
      i += this.dataWidth
    }
    return o
  }
  e.prototype.isCropSupported = function () {
    return true
  }
  e.prototype.crop = function (t, r, n, o) {
    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + r, n, o, false)
  }
  e.prototype.renderThumbnail = function () {
    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR, r = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, n = new Int32Array(t * r), /* [auto-meaningful-name] */this$yuvData = this.yuvData, i = this.top * this.dataWidth + this.left, a = 0; a < r; a++) {
      for (var u = a * t, s = 0; s < t; s++) {
        var c = 255 & this$yuvData[i + s * e.THUMBNAIL_SCALE_FACTOR]
        n[u + s] = 4278190080 | 65793 * c
      }
      i += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR
    }
    return n
  }
  e.prototype.getThumbnailWidth = function () {
    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR
  }
  e.prototype.getThumbnailHeight = function () {
    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR
  }
  e.prototype.reverseHorizontal = function (t, e) {
    for (var /* [auto-meaningful-name] */this$yuvData = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left; n < e; n++, o += this.dataWidth) {
      for (var i = o + t / 2, a = o, u = o + t - 1; a < i; a++, u--) {
        var s = this$yuvData[a]
        this$yuvData[a] = this$yuvData[u]
        this$yuvData[u] = s
      }
    }
  }
  e.prototype.invert = function () {
    return new i.a(this)
  }
  e.THUMBNAIL_SCALE_FACTOR = 2
}(o.a)
