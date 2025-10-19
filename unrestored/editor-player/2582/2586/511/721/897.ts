/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：897
 */

"use strict";

var n = require("../81/index");
var o = "http://www.w3.org/2000/svg";
!function () {
  function t() {}
  t.prototype.write = function (e, r, o, i) {
    if (0 === e.length) {
      throw new n.IllegalArgumentException("Found empty contents");
    }
    if (r < 0 || o < 0) {
      throw new n.IllegalArgumentException("Requested dimensions are too small: " + r + "x" + o);
    }
    var a = n.QRCodeDecoderErrorCorrectionLevel.L;
    var u = t.QUIET_ZONE_SIZE;
    if (i) {
      if (undefined !== i.get(n.EncodeHintType.ERROR_CORRECTION)) {
        var s = i.get(n.EncodeHintType.ERROR_CORRECTION).toString();
        a = n.QRCodeDecoderErrorCorrectionLevel.fromString(s);
      }
      if (undefined !== i.get(n.EncodeHintType.MARGIN)) {
        u = Number.parseInt(i.get(n.EncodeHintType.MARGIN).toString(), 10);
      }
    }
    var c = n.QRCodeEncoder.encode(e, a, i);
    return this.renderResult(c, r, o, u);
  };
  t.prototype.writeToDom = function (t, e, r, n, o) {
    if ("string" === typeof t) {
      var i = document.querySelector(t);
      if (!i) {
        throw new Error("Could no find the target HTML element.");
      }
      t = i;
    }
    var a = this.write(e, r, n, o);
    if (t instanceof HTMLElement) {
      t.appendChild(a);
    }
  };
  t.prototype.renderResult = function (t, e, r, o) {
    var i = t.getMatrix();
    if (null === i) {
      throw new n.IllegalStateException();
    }
    for (var a = i.getWidth(), u = i.getHeight(), s = a + 2 * o, c = u + 2 * o, f = Math.max(e, s), h = Math.max(r, c), l = Math.min(Math.floor(f / s), Math.floor(h / c)), d = Math.floor((f - a * l) / 2), p = Math.floor((h - u * l) / 2), g = this.createSVGElement(f, h), y = 0, w = p; y < u; y++, w += l) {
      for (var v = 0, _ = d; v < a; v++, _ += l) {
        if (1 === i.get(v, y)) {
          var m = this.createSvgRectElement(_, w, l, l);
          g.appendChild(m);
        }
      }
    }
    return g;
  };
  t.prototype.createSVGElement = function (t, e) {
    var r = document.createElementNS(o, "svg");
    var n = t.toString();
    var i = e.toString();
    r.setAttribute("height", i);
    r.setAttribute("width", n);
    r.setAttribute("viewBox", "0 0 " + n + " " + i);
    return r;
  };
  t.prototype.createSvgRectElement = function (t, e, r, n) {
    var i = document.createElementNS(o, "rect");
    i.setAttribute("x", t.toString());
    i.setAttribute("y", e.toString());
    i.setAttribute("height", r.toString());
    i.setAttribute("width", n.toString());
    i.setAttribute("fill", "#000000");
    return i;
  };
  t.QUIET_ZONE_SIZE = 4;
}();