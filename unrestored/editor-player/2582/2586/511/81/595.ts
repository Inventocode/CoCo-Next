"use strict";

var n = require("./74");
var o = require("./187");
var i = require("./180");
var a = require("./336");
var u = require("./457");
var s = require("./63");
var c = require("./221");
var f = function () {
  function t() {}
  t.prototype.encode = function (e, r, i, c, f) {
    if (0 === e.length) {
      throw new s.a("Found empty contents");
    }
    if (r !== n.a.QR_CODE) {
      throw new s.a("Can only encode QR_CODE, but got " + r);
    }
    if (i < 0 || c < 0) {
      throw new s.a("Requested dimensions are too small: " + i + "x" + c);
    }
    var h = a.a.L;
    var l = t.QUIET_ZONE_SIZE;
    if (null !== f) {
      if (undefined !== f.get(o.a.ERROR_CORRECTION)) {
        h = a.a.fromString(f.get(o.a.ERROR_CORRECTION).toString());
      }
      if (undefined !== f.get(o.a.MARGIN)) {
        l = Number.parseInt(f.get(o.a.MARGIN).toString(), 10);
      }
    }
    var d = u.a.encode(e, h, f);
    return t.renderResult(d, i, c, l);
  };
  t.renderResult = function (t, e, r, n) {
    var o = t.getMatrix();
    if (null === o) {
      throw new c.a();
    }
    for (var a = o.getWidth(), u = o.getHeight(), s = a + 2 * n, f = u + 2 * n, h = Math.max(e, s), l = Math.max(r, f), d = Math.min(Math.floor(h / s), Math.floor(l / f)), p = Math.floor((h - a * d) / 2), g = Math.floor((l - u * d) / 2), y = new i.a(h, l), w = 0, v = g; w < u; w++, v += d) {
      for (var _ = 0, m = p; _ < a; _++, m += d) {
        if (1 === o.get(_, w)) {
          y.setRegion(m, v, d, d);
        }
      }
    }
    return y;
  };
  t.QUIET_ZONE_SIZE = 4;
  return t;
}();
exports.a = f;