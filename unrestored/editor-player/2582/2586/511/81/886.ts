/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：886
 */

"use strict";

var n = require("./74");
var o = require("./187");
var i = require("./460");
var a = require("./180");
var u = require("./596");
var s = require("./597");
var c = require("./105");
var f = require("./221");
var h = require("./63");
var l = require("./126");
!function () {
  function t() {}
  t.prototype.encode = function (t, e, r, n) {
    return this.encodeWithHints(t, e, r, n, null);
  };
  t.prototype.encodeWithHints = function (e, r, n, a, f) {
    var h = s.a.ISO_8859_1;
    var l = i.a.DEFAULT_EC_PERCENT;
    var d = i.a.DEFAULT_AZTEC_LAYERS;
    if (null != f) {
      if (f.has(o.a.CHARACTER_SET)) {
        h = u.a.forName(f.get(o.a.CHARACTER_SET).toString());
      }
      if (f.has(o.a.ERROR_CORRECTION)) {
        l = c.a.parseInt(f.get(o.a.ERROR_CORRECTION).toString());
      }
      if (f.has(o.a.AZTEC_LAYERS)) {
        d = c.a.parseInt(f.get(o.a.AZTEC_LAYERS).toString());
      }
    }
    return t.encodeLayers(e, r, n, a, h, l, d);
  };
  t.encodeLayers = function (e, r, o, a, u, s, c) {
    if (r !== n.a.AZTEC) {
      throw new h.a("Can only encode AZTEC, but got " + r);
    }
    var f = i.a.encode(l.a.getBytes(e, u), s, c);
    return t.renderResult(f, o, a);
  };
  t.renderResult = function (t, e, r) {
    var n = t.getMatrix();
    if (null == n) {
      throw new f.a();
    }
    for (var o = n.getWidth(), i = n.getHeight(), u = Math.max(e, o), s = Math.max(r, i), c = Math.min(u / o, s / i), h = (u - o * c) / 2, l = (s - i * c) / 2, d = new a.a(u, s), p = 0, g = l; p < i; p++, g += c) {
      for (var y = 0, w = h; y < o; y++, w += c) {
        if (n.get(y, p)) {
          d.setRegion(w, g, c, c);
        }
      }
    }
    return d;
  };
}();