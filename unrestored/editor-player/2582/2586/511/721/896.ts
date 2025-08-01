"use strict";

var n = require("../81/index");
var o = "http://www.w3.org/2000/svg";
!function () {
  function t(t) {
    if ("string" === typeof t) {
      var e = document.getElementById(t);
      if (!e) {
        throw new Error("Could not find a Container element with '" + t + "'.");
      }
      this.containerElement = e;
    } else {
      this.containerElement = t;
    }
  }
  t.prototype.write = function (e, r, o, i) {
    if (0 === e.length) {
      throw new n.IllegalArgumentException("Found empty contents");
    }
    if (r < 0 || o < 0) {
      throw new n.IllegalArgumentException("Requested dimensions are too small: " + r + "x" + o);
    }
    var a = i && void 0 !== i.get(n.EncodeHintType.MARGIN) ? Number.parseInt(i.get(n.EncodeHintType.MARGIN).toString(), 10) : t.QUIET_ZONE_SIZE;
    var u = this.encode(i, e);
    return this.renderResult(u, r, o, a);
  };
  t.prototype.createSVGElement = function (e, r) {
    var n = document.createElementNS(t.SVG_NS, "svg");
    n.setAttributeNS(o, "width", r.toString());
    n.setAttributeNS(o, "height", e.toString());
    return n;
  };
  t.prototype.createSvgPathPlaceholderElement = function (e, r) {
    var n = document.createElementNS(t.SVG_NS, "path");
    n.setAttributeNS(o, "d", "M0 0h" + e + "v" + r + "H0z");
    n.setAttributeNS(o, "fill", "none");
    return n;
  };
  t.prototype.createSvgRectElement = function (e, r, n, i) {
    var a = document.createElementNS(t.SVG_NS, "rect");
    a.setAttributeNS(o, "x", e.toString());
    a.setAttributeNS(o, "y", r.toString());
    a.setAttributeNS(o, "height", n.toString());
    a.setAttributeNS(o, "width", i.toString());
    a.setAttributeNS(o, "fill", "#000000");
    return a;
  };
  t.prototype.encode = function (t, e) {
    var r = n.QRCodeDecoderErrorCorrectionLevel.L;
    if (t && void 0 !== t.get(n.EncodeHintType.ERROR_CORRECTION)) {
      var o = t.get(n.EncodeHintType.ERROR_CORRECTION).toString();
      r = n.QRCodeDecoderErrorCorrectionLevel.fromString(o);
    }
    return n.QRCodeEncoder.encode(e, r, t);
  };
  t.prototype.renderResult = function (t, e, r, o) {
    var i = t.getMatrix();
    if (null === i) {
      throw new n.IllegalStateException();
    }
    var a = i.getWidth();
    var u = i.getHeight();
    var s = a + 2 * o;
    var c = u + 2 * o;
    var f = Math.max(e, s);
    var h = Math.max(r, c);
    var l = Math.min(Math.floor(f / s), Math.floor(h / c));
    var d = Math.floor((f - a * l) / 2);
    var p = Math.floor((h - u * l) / 2);
    var g = this.createSVGElement(f, h);
    var y = this.createSvgPathPlaceholderElement(e, r);
    g.appendChild(y);
    this.containerElement.appendChild(g);
    for (var w = 0, v = p; w < u; w++, v += l) {
      for (var _ = 0, m = d; _ < a; _++, m += l) {
        if (1 === i.get(_, w)) {
          var A = this.createSvgRectElement(m, v, l, l);
          g.appendChild(A);
        }
      }
    }
    return g;
  };
  t.QUIET_ZONE_SIZE = 4;
  t.SVG_NS = "http://www.w3.org/2000/svg";
}();