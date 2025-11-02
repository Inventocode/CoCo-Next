/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：599
 */

"use strict"

export { i as a }
import * as n from "../81/index"
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
  function e(r) {
    var n = t.call(this, r.width, r.height) || this
    n.canvas = r
    n.buffer = e.makeBufferFromCanvasImageData(r)
    return n
  }
  o(e, t)
  e.makeBufferFromCanvasImageData = function (t) {
    var r = t.getContext("2d")
    if (!r) {
      throw new Error("Couldn't get canvas context.")
    }
    var n = r.getImageData(0, 0, t.width, t.height)
    return e.toGrayscaleBuffer(n.data, t.width, t.height)
  }
  e.toGrayscaleBuffer = function (t, e, r) {
    for (var n = new Uint8ClampedArray(e * r), o = 0, i = 0, t$length = t.length; o < t$length; o += 4, i++) {
      var u = undefined
      if (0 === t[o + 3]) {
        u = 255
      } else {
        u = 306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512 >> 10
      }
      n[i] = u
    }
    return n
  }
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new n.IllegalArgumentException("Requested row is outside the image: " + t)
    }
    var r = this.getWidth()
    var o = t * r
    if (null === e) {
      e = this.buffer.slice(o, o + r)
    } else {
      if (e.length < r) {
        e = new Uint8ClampedArray(r)
      }
      e.set(this.buffer.slice(o, o + r))
    }
    return e
  }
  e.prototype.getMatrix = function () {
    return this.buffer
  }
  e.prototype.isCropSupported = function () {
    return true
  }
  e.prototype.crop = function (e, r, n, o) {
    t.prototype.crop.call(this, e, r, n, o)
    return this
  }
  e.prototype.isRotateSupported = function () {
    return true
  }
  e.prototype.rotateCounterClockwise = function () {
    this.rotate(-90)
    return this
  }
  e.prototype.rotateCounterClockwise45 = function () {
    this.rotate(-45)
    return this
  }
  e.prototype.invert = function () {
    return new n.InvertedLuminanceSource(this)
  }
  e.prototype.getTempCanvasElement = function () {
    if (null === this.tempCanvasElement) {
      var t = this.canvas.ownerDocument.createElement("canvas")
      t.width = this.canvas.width
      t.height = this.canvas.height
      this.tempCanvasElement = t
    }
    return this.tempCanvasElement
  }
  e.prototype.rotate = function (t) {
    var r = this.getTempCanvasElement()
    if (!r) {
      throw new Error("Could not create a Canvas element.")
    }
    var n = t * e.DEGREE_TO_RADIANS
    var this$canvas$width = this.canvas.width
    var this$canvas$height = this.canvas.height
    var a = Math.ceil(Math.abs(Math.cos(n)) * this$canvas$width + Math.abs(Math.sin(n)) * this$canvas$height)
    var u = Math.ceil(Math.abs(Math.sin(n)) * this$canvas$width + Math.abs(Math.cos(n)) * this$canvas$height)
    r.width = a
    r.height = u
    var s = r.getContext("2d")
    if (!s) {
      throw new Error("Could not create a Canvas Context element.")
    }
    s.translate(a / 2, u / 2)
    s.rotate(n)
    s.drawImage(this.canvas, this$canvas$width / -2, this$canvas$height / -2)
    this.buffer = e.makeBufferFromCanvasImageData(r)
    return this
  }
  e.DEGREE_TO_RADIANS = Math.PI / 180
  return e
}(n.LuminanceSource)
export default i
