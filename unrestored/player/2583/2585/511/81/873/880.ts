"use strict";

var r = require("../187");
var i = require("../457");
var o = require("../336");
var a = require("../63");
var s = require("../221");
!function () {
  function t() {}
  t.prototype.write = function (e, n, s, u) {
    if (void 0 === u) {
      u = null;
    }
    if (0 === e.length) {
      throw new a.a("Found empty contents");
    }
    if (n < 0 || s < 0) {
      throw new a.a("Requested dimensions are too small: " + n + "x" + s);
    }
    var c = o.a.L;
    var l = t.QUIET_ZONE_SIZE;
    if (null !== u) {
      if (void 0 !== u.get(r.a.ERROR_CORRECTION)) {
        c = o.a.fromString(u.get(r.a.ERROR_CORRECTION).toString());
      }
      if (void 0 !== u.get(r.a.MARGIN)) {
        l = Number.parseInt(u.get(r.a.MARGIN).toString(), 10);
      }
    }
    var d = i.a.encode(e, c, u);
    return this.renderResult(d, n, s, l);
  };
  t.prototype.writeToDom = function (t, e, n, r, i) {
    if (void 0 === i) {
      i = null;
    }
    if ("string" === typeof t) {
      t = document.querySelector(t);
    }
    var o = this.write(e, n, r, i);
    if (t) {
      t.appendChild(o);
    }
  };
  t.prototype.renderResult = function (t, e, n, r) {
    var i = t.getMatrix();
    if (null === i) {
      throw new s.a();
    }
    for (var o = i.getWidth(), a = i.getHeight(), u = o + 2 * r, c = a + 2 * r, l = Math.max(e, u), d = Math.max(n, c), f = Math.min(Math.floor(l / u), Math.floor(d / c)), h = Math.floor((l - o * f) / 2), p = Math.floor((d - a * f) / 2), m = this.createSVGElement(l, d), b = 0, g = p; b < a; b++, g += f) {
      for (var v = 0, _ = h; v < o; v++, _ += f) {
        if (1 === i.get(v, b)) {
          var y = this.createSvgRectElement(_, g, f, f);
          m.appendChild(y);
        }
      }
    }
    return m;
  };
  t.prototype.createSVGElement = function (e, n) {
    var r = document.createElementNS(t.SVG_NS, "svg");
    r.setAttributeNS(null, "height", e.toString());
    r.setAttributeNS(null, "width", n.toString());
    return r;
  };
  t.prototype.createSvgRectElement = function (e, n, r, i) {
    var o = document.createElementNS(t.SVG_NS, "rect");
    o.setAttributeNS(null, "x", e.toString());
    o.setAttributeNS(null, "y", n.toString());
    o.setAttributeNS(null, "height", r.toString());
    o.setAttributeNS(null, "width", i.toString());
    o.setAttributeNS(null, "fill", "#000000");
    return o;
  };
  t.QUIET_ZONE_SIZE = 4;
  t.SVG_NS = "http://www.w3.org/2000/svg";
}();