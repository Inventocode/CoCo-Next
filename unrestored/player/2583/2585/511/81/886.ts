"use strict";

var r = require("./74");
var i = require("./187");
var o = require("./460");
var a = require("./180");
var s = require("./596");
var u = require("./597");
var c = require("./105");
var l = require("./221");
var d = require("./63");
var f = require("./126");
!function () {
  function t() {}
  t.prototype.encode = function (t, e, n, r) {
    return this.encodeWithHints(t, e, n, r, null);
  };
  t.prototype.encodeWithHints = function (e, n, r, a, l) {
    var d = u.a.ISO_8859_1;
    var f = o.a.DEFAULT_EC_PERCENT;
    var h = o.a.DEFAULT_AZTEC_LAYERS;
    if (null != l) {
      if (l.has(i.a.CHARACTER_SET)) {
        d = s.a.forName(l.get(i.a.CHARACTER_SET).toString());
      }
      if (l.has(i.a.ERROR_CORRECTION)) {
        f = c.a.parseInt(l.get(i.a.ERROR_CORRECTION).toString());
      }
      if (l.has(i.a.AZTEC_LAYERS)) {
        h = c.a.parseInt(l.get(i.a.AZTEC_LAYERS).toString());
      }
    }
    return t.encodeLayers(e, n, r, a, d, f, h);
  };
  t.encodeLayers = function (e, n, i, a, s, u, c) {
    if (n !== r.a.AZTEC) {
      throw new d.a("Can only encode AZTEC, but got " + n);
    }
    var l = o.a.encode(f.a.getBytes(e, s), u, c);
    return t.renderResult(l, i, a);
  };
  t.renderResult = function (t, e, n) {
    var r = t.getMatrix();
    if (null == r) {
      throw new l.a();
    }
    for (var i = r.getWidth(), o = r.getHeight(), s = Math.max(e, i), u = Math.max(n, o), c = Math.min(s / i, u / o), d = (s - i * c) / 2, f = (u - o * c) / 2, h = new a.a(s, u), p = 0, m = f; p < o; p++, m += c) {
      for (var b = 0, g = d; b < i; b++, g += c) {
        if (r.get(b, p)) {
          h.setRegion(g, m, c, c);
        }
      }
    }
    return h;
  };
}();