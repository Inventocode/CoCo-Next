/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：589
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_349 from "../349"
import * as /* [auto-meaningful-name] */$$_335 from "../335"
import * as /* [auto-meaningful-name] */$$_63 from "../63"
var a = function () {
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
var s = function (t) {
  function e(n) {
    var r = t.call(this, n.width, n.height) || this
    r.canvas = n
    r.tempCanvasElement = null
    r.buffer = e.makeBufferFromCanvasImageData(n)
    return r
  }
  a(e, t)
  e.makeBufferFromCanvasImageData = function (t) {
    var n = t.getContext("2d").getImageData(0, 0, t.width, t.height)
    return e.toGrayscaleBuffer(n.data, t.width, t.height)
  }
  e.toGrayscaleBuffer = function (t, e, n) {
    for (var r = new Uint8ClampedArray(e * n), i = 0, o = 0, /* [auto-meaningful-name] */t$length = t.length; i < t$length; i += 4, o++) {
      var s = undefined
      if (0 === t[i + 3]) {
        s = 255
      } else {
        s = 306 * t[i] + 601 * t[i + 1] + 117 * t[i + 2] + 512 >> 10
      }
      r[o] = s
    }
    return r
  }
  e.prototype.getRow = function (t, e) {
    if (t < 0 || t >= this.getHeight()) {
      throw new $$_63.a("Requested row is outside the image: " + t)
    }
    var n = this.getWidth()
    var r = t * n
    if (null === e) {
      e = this.buffer.slice(r, r + n)
    } else {
      if (e.length < n) {
        e = new Uint8ClampedArray(n)
      }
      e.set(this.buffer.slice(r, r + n))
    }
    return e
  }
  e.prototype.getMatrix = function () {
    return this.buffer
  }
  e.prototype.isCropSupported = function () {
    return true
  }
  e.prototype.crop = function (e, n, r, i) {
    t.prototype.crop.call(this, e, n, r, i)
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
    var n = this.getTempCanvasElement()
    var r = n.getContext("2d")
    var i = t * e.DEGREE_TO_RADIANS
    var /* [auto-meaningful-name] */this$canvas$width = this.canvas.width
    var /* [auto-meaningful-name] */this$canvas$height = this.canvas.height
    var s = Math.ceil(Math.abs(Math.cos(i)) * this$canvas$width + Math.abs(Math.sin(i)) * this$canvas$height)
    var u = Math.ceil(Math.abs(Math.sin(i)) * this$canvas$width + Math.abs(Math.cos(i)) * this$canvas$height)
    n.width = s
    n.height = u
    r.translate(s / 2, u / 2)
    r.rotate(i)
    r.drawImage(this.canvas, this$canvas$width / -2, this$canvas$height / -2)
    this.buffer = e.makeBufferFromCanvasImageData(n)
    return this
  }
  e.prototype.invert = function () {
    return new $$_349.a(this)
  }
  e.DEGREE_TO_RADIANS = Math.PI / 180
  return e
}($$_335.a)
export default s
