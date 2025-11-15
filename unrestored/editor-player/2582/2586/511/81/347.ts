/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：347
 */

"use strict"

var n = require("./333")
var o = function () {
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
var i = function (t) {
  function e(e) {
    var r = t.call(this, e.getWidth(), e.getHeight()) || this
    r.delegate = e
    return r
  }
  o(e, t)
  e.prototype.getRow = function (t, e) {
    for (var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0; o < n; o++) {
      r[o] = 255 - (255 & r[o])
    }
    return r
  }
  e.prototype.getMatrix = function () {
    for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(e), n = 0; n < e; n++) {
      r[n] = 255 - (255 & t[n])
    }
    return r
  }
  e.prototype.isCropSupported = function () {
    return this.delegate.isCropSupported()
  }
  e.prototype.crop = function (t, r, n, o) {
    return new e(this.delegate.crop(t, r, n, o))
  }
  e.prototype.isRotateSupported = function () {
    return this.delegate.isRotateSupported()
  }
  e.prototype.invert = function () {
    return this.delegate
  }
  e.prototype.rotateCounterClockwise = function () {
    return new e(this.delegate.rotateCounterClockwise())
  }
  e.prototype.rotateCounterClockwise45 = function () {
    return new e(this.delegate.rotateCounterClockwise45())
  }
  return e
}(n.a)
exports.a = i
