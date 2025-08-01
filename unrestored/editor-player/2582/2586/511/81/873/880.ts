"use strict";

var n = require("../187");
var o = require("../457");
var i = require("../336");
var a = require("../63");
var u = require("../221");
!function () {
  function t() {}
  t.prototype.write = function (e, r, u, s) {
    if (void 0 === s) {
      s = null;
    }
    if (0 === e.length) {
      throw new a.a("Found empty contents");
    }
    if (r < 0 || u < 0) {
      throw new a.a("Requested dimensions are too small: " + r + "x" + u);
    }
    var c = i.a.L;
    var f = t.QUIET_ZONE_SIZE;
    if (null !== s) {
      if (void 0 !== s.get(n.a.ERROR_CORRECTION)) {
        c = i.a.fromString(s.get(n.a.ERROR_CORRECTION).toString());
      }
      if (void 0 !== s.get(n.a.MARGIN)) {
        f = Number.parseInt(s.get(n.a.MARGIN).toString(), 10);
      }
    }
    var h = o.a.encode(e, c, s);
    return this.renderResult(h, r, u, f);
  };
  t.prototype.writeToDom = function (t, e, r, n, o) {
    if (void 0 === o) {
      o = null;
    }
    if ("string" === typeof t) {
      t = document.querySelector(t);
    }
    var i = this.write(e, r, n, o);
    if (t) {
      t.appendChild(i);
    }
  };
  t.prototype.renderResult = function (t, e, r, n) {
    var o = t.getMatrix();
    if (null === o) {
      throw new u.a();
    }
    for (var i = o.getWidth(), a = o.getHeight(), s = i + 2 * n, c = a + 2 * n, f = Math.max(e, s), h = Math.max(r, c), l = Math.min(Math.floor(f / s), Math.floor(h / c)), d = Math.floor((f - i * l) / 2), p = Math.floor((h - a * l) / 2), g = this.createSVGElement(f, h), y = 0, w = p; y < a; y++, w += l) {
      for (var v = 0, _ = d; v < i; v++, _ += l) {
        if (1 === o.get(v, y)) {
          var m = this.createSvgRectElement(_, w, l, l);
          g.appendChild(m);
        }
      }
    }
    return g;
  };
  t.prototype.createSVGElement = function (e, r) {
    var n = document.createElementNS(t.SVG_NS, "svg");
    n.setAttributeNS(null, "height", e.toString());
    n.setAttributeNS(null, "width", r.toString());
    return n;
  };
  t.prototype.createSvgRectElement = function (e, r, n, o) {
    var i = document.createElementNS(t.SVG_NS, "rect");
    i.setAttributeNS(null, "x", e.toString());
    i.setAttributeNS(null, "y", r.toString());
    i.setAttributeNS(null, "height", n.toString());
    i.setAttributeNS(null, "width", o.toString());
    i.setAttributeNS(null, "fill", "#000000");
    return i;
  };
  t.QUIET_ZONE_SIZE = 4;
  t.SVG_NS = "http://www.w3.org/2000/svg";
}();