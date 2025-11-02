/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：897
 */

"use strict"

var r = require("../81/index")
var i = "http://www.w3.org/2000/svg"
!function () {
  function t() {}
  t.prototype.write = function (e, n, i, o) {
    if (0 === e.length) {
      throw new r.IllegalArgumentException("Found empty contents")
    }
    if (n < 0 || i < 0) {
      throw new r.IllegalArgumentException("Requested dimensions are too small: " + n + "x" + i)
    }
    var r$QRCodeDecoderErrorCorrectionLevel$L = r.QRCodeDecoderErrorCorrectionLevel.L
    var t$QUIET_ZONE_SIZE = t.QUIET_ZONE_SIZE
    if (o) {
      if (undefined !== o.get(r.EncodeHintType.ERROR_CORRECTION)) {
        var u = o.get(r.EncodeHintType.ERROR_CORRECTION).toString()
        r$QRCodeDecoderErrorCorrectionLevel$L = r.QRCodeDecoderErrorCorrectionLevel.fromString(u)
      }
      if (undefined !== o.get(r.EncodeHintType.MARGIN)) {
        t$QUIET_ZONE_SIZE = Number.parseInt(o.get(r.EncodeHintType.MARGIN).toString(), 10)
      }
    }
    var c = r.QRCodeEncoder.encode(e, r$QRCodeDecoderErrorCorrectionLevel$L, o)
    return this.renderResult(c, n, i, t$QUIET_ZONE_SIZE)
  }
  t.prototype.writeToDom = function (t, e, n, r, i) {
    if ("string" === typeof t) {
      var o = document.querySelector(t)
      if (!o) {
        throw new Error("Could no find the target HTML element.")
      }
      t = o
    }
    var a = this.write(e, n, r, i)
    if (t instanceof HTMLElement) {
      t.appendChild(a)
    }
  }
  t.prototype.renderResult = function (t, e, n, i) {
    var o = t.getMatrix()
    if (null === o) {
      throw new r.IllegalStateException()
    }
    for (var a = o.getWidth(), s = o.getHeight(), u = a + 2 * i, c = s + 2 * i, l = Math.max(e, u), d = Math.max(n, c), f = Math.min(Math.floor(l / u), Math.floor(d / c)), h = Math.floor((l - a * f) / 2), p = Math.floor((d - s * f) / 2), m = this.createSVGElement(l, d), b = 0, g = p; b < s; b++, g += f) {
      for (var v = 0, _ = h; v < a; v++, _ += f) {
        if (1 === o.get(v, b)) {
          var y = this.createSvgRectElement(_, g, f, f)
          m.appendChild(y)
        }
      }
    }
    return m
  }
  t.prototype.createSVGElement = function (t, e) {
    var n = document.createElementNS(i, "svg")
    var r = t.toString()
    var o = e.toString()
    n.setAttribute("height", o)
    n.setAttribute("width", r)
    n.setAttribute("viewBox", "0 0 " + r + " " + o)
    return n
  }
  t.prototype.createSvgRectElement = function (t, e, n, r) {
    var o = document.createElementNS(i, "rect")
    o.setAttribute("x", t.toString())
    o.setAttribute("y", e.toString())
    o.setAttribute("height", n.toString())
    o.setAttribute("width", r.toString())
    o.setAttribute("fill", "#000000")
    return o
  }
  t.QUIET_ZONE_SIZE = 4
}()
