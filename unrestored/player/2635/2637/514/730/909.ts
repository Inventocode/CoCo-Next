/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：909
 */

"use strict"

var r = require("../81/index")
var /* [auto-meaningful-name] */Http__www$w3$org_2000_svg = "http://www.w3.org/2000/svg"
!function () {
  function t(t) {
    if ("string" === typeof t) {
      var e = document.getElementById(t)
      if (!e) {
        throw new Error("Could not find a Container element with '" + t + "'.")
      }
      this.containerElement = e
    } else {
      this.containerElement = t
    }
  }
  t.prototype.write = function (e, n, i, o) {
    if (0 === e.length) {
      throw new r.IllegalArgumentException("Found empty contents")
    }
    if (n < 0 || i < 0) {
      throw new r.IllegalArgumentException("Requested dimensions are too small: " + n + "x" + i)
    }
    var a = o && undefined !== o.get(r.EncodeHintType.MARGIN) ? Number.parseInt(o.get(r.EncodeHintType.MARGIN).toString(), 10) : t.QUIET_ZONE_SIZE
    var s = this.encode(o, e)
    return this.renderResult(s, n, i, a)
  }
  t.prototype.createSVGElement = function (e, n) {
    var r = document.createElementNS(t.SVG_NS, "svg")
    r.setAttributeNS(Http__www$w3$org_2000_svg, "width", n.toString())
    r.setAttributeNS(Http__www$w3$org_2000_svg, "height", e.toString())
    return r
  }
  t.prototype.createSvgPathPlaceholderElement = function (e, n) {
    var r = document.createElementNS(t.SVG_NS, "path")
    r.setAttributeNS(Http__www$w3$org_2000_svg, "d", "M0 0h" + e + "v" + n + "H0z")
    r.setAttributeNS(Http__www$w3$org_2000_svg, "fill", "none")
    return r
  }
  t.prototype.createSvgRectElement = function (e, n, r, o) {
    var a = document.createElementNS(t.SVG_NS, "rect")
    a.setAttributeNS(Http__www$w3$org_2000_svg, "x", e.toString())
    a.setAttributeNS(Http__www$w3$org_2000_svg, "y", n.toString())
    a.setAttributeNS(Http__www$w3$org_2000_svg, "height", r.toString())
    a.setAttributeNS(Http__www$w3$org_2000_svg, "width", o.toString())
    a.setAttributeNS(Http__www$w3$org_2000_svg, "fill", "#000000")
    return a
  }
  t.prototype.encode = function (t, e) {
    var /* [auto-meaningful-name] */r$QRCodeDecoderErrorCorrectionLevel$L = r.QRCodeDecoderErrorCorrectionLevel.L
    if (t && undefined !== t.get(r.EncodeHintType.ERROR_CORRECTION)) {
      var i = t.get(r.EncodeHintType.ERROR_CORRECTION).toString()
      r$QRCodeDecoderErrorCorrectionLevel$L = r.QRCodeDecoderErrorCorrectionLevel.fromString(i)
    }
    return r.QRCodeEncoder.encode(e, r$QRCodeDecoderErrorCorrectionLevel$L, t)
  }
  t.prototype.renderResult = function (t, e, n, i) {
    var o = t.getMatrix()
    if (null === o) {
      throw new r.IllegalStateException()
    }
    var a = o.getWidth()
    var s = o.getHeight()
    var u = a + 2 * i
    var c = s + 2 * i
    var l = Math.max(e, u)
    var d = Math.max(n, c)
    var f = Math.min(Math.floor(l / u), Math.floor(d / c))
    var h = Math.floor((l - a * f) / 2)
    var p = Math.floor((d - s * f) / 2)
    var m = this.createSVGElement(l, d)
    var b = this.createSvgPathPlaceholderElement(e, n)
    m.appendChild(b)
    this.containerElement.appendChild(m)
    for (var g = 0, v = p; g < s; g++, v += f) {
      for (var _ = 0, y = h; _ < a; _++, y += f) {
        if (1 === o.get(_, g)) {
          var w = this.createSvgRectElement(y, v, f, f)
          m.appendChild(w)
        }
      }
    }
    return m
  }
  t.QUIET_ZONE_SIZE = 4
  t.SVG_NS = "http://www.w3.org/2000/svg"
}()
