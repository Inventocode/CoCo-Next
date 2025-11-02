/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：885
 */

"use strict"

var n = require("./347")
var o = require("./333")
var i = require("./117")
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
  function e(e, r, n, o, i, u, s) {
    var c = t.call(this, r, n) || this
    c.dataWidth = o
    c.dataHeight = i
    c.left = u
    c.top = s
    if (4 === e.BYTES_PER_ELEMENT) {
      for (var f = r * n, h = new Uint8ClampedArray(f), l = 0; l < f; l++) {
        var d = e[l]
        var p = d >> 16 & 255
        var g = d >> 7 & 510
        var y = 255 & d
        h[l] = (p + g + y) / 4 & 255
      }
      c.luminances = h
    } else {
      c.luminances = e
    }
    if (undefined === o) {
      c.dataWidth = r
    }
    if (undefined === i) {
      c.dataHeight = n
    }
    if (undefined === u) {
      c.left = 0
    }
    if (undefined === s) {
      c.top = 0
    }
    if (c.left + r > c.dataWidth || c.top + n > c.dataHeight) {
      throw new a.a("Crop rectangle does not fit within image data.")
    }
    return c
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
    var n = (t + this.top) * this.dataWidth + this.left
    i.a.arraycopy(this.luminances, n, e, 0, r)
    return e
  }
  e.prototype.getMatrix = function () {
    var t = this.getWidth()
    var e = this.getHeight()
    if (t === this.dataWidth && e === this.dataHeight) {
      return this.luminances
    }
    var r = t * e
    var n = new Uint8ClampedArray(r)
    var o = this.top * this.dataWidth + this.left
    if (t === this.dataWidth) {
      i.a.arraycopy(this.luminances, o, n, 0, r)
      return n
    }
    for (var a = 0; a < e; a++) {
      var u = a * t
      i.a.arraycopy(this.luminances, o, n, u, t)
      o += this.dataWidth
    }
    return n
  }
  e.prototype.isCropSupported = function () {
    return true
  }
  e.prototype.crop = function (t, r, n, o) {
    return new e(this.luminances, n, o, this.dataWidth, this.dataHeight, this.left + t, this.top + r)
  }
  e.prototype.invert = function () {
    return new n.a(this)
  }
}(o.a)
