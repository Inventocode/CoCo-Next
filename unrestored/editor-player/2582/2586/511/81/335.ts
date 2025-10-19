/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：335
 */

"use strict";

var n = require("./191/index");
var o = require("./274");
var i = require("./408");
var a = require("./221");
var u = function () {
  function t(t) {
    this.field = t;
  }
  t.prototype.decode = function (t, e) {
    for (var r = this.field, a = new o.a(r, t), u = new Int32Array(e), s = true, c = 0; c < e; c++) {
      var f = a.evaluateAt(r.exp(c + r.getGeneratorBase()));
      u[u.length - 1 - c] = f;
      if (0 !== f) {
        s = false;
      }
    }
    if (!s) {
      var h = new o.a(r, u);
      var l = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), h, e);
      var d = l[0];
      var p = l[1];
      var g = this.findErrorLocations(d);
      var y = this.findErrorMagnitudes(p, g);
      for (c = 0; c < g.length; c++) {
        var w = t.length - 1 - r.log(g[c]);
        if (w < 0) {
          throw new i.a("Bad error location");
        }
        t[w] = n.a.addOrSubtract(t[w], y[c]);
      }
    }
  };
  t.prototype.runEuclideanAlgorithm = function (t, e, r) {
    if (t.getDegree() < e.getDegree()) {
      var n = t;
      t = e;
      e = n;
    }
    for (var o = this.field, u = t, s = e, c = o.getZero(), f = o.getOne(); s.getDegree() >= (r / 2 | 0);) {
      var h = u;
      var l = c;
      c = f;
      if ((u = s).isZero()) {
        throw new i.a("r_{i-1} was zero");
      }
      s = h;
      for (var d = o.getZero(), p = u.getCoefficient(u.getDegree()), g = o.inverse(p); s.getDegree() >= u.getDegree() && !s.isZero();) {
        var y = s.getDegree() - u.getDegree();
        var w = o.multiply(s.getCoefficient(s.getDegree()), g);
        d = d.addOrSubtract(o.buildMonomial(y, w));
        s = s.addOrSubtract(u.multiplyByMonomial(y, w));
      }
      f = d.multiply(c).addOrSubtract(l);
      if (s.getDegree() >= u.getDegree()) {
        throw new a.a("Division algorithm failed to reduce polynomial?");
      }
    }
    var v = f.getCoefficient(0);
    if (0 === v) {
      throw new i.a("sigmaTilde(0) was zero");
    }
    var _ = o.inverse(v);
    return [f.multiplyScalar(_), s.multiplyScalar(_)];
  };
  t.prototype.findErrorLocations = function (t) {
    var e = t.getDegree();
    if (1 === e) {
      return Int32Array.from([t.getCoefficient(1)]);
    }
    for (var r = new Int32Array(e), n = 0, o = this.field, a = 1; a < o.getSize() && n < e; a++) {
      if (0 === t.evaluateAt(a)) {
        r[n] = o.inverse(a);
        n++;
      }
    }
    if (n !== e) {
      throw new i.a("Error locator degree does not match number of roots");
    }
    return r;
  };
  t.prototype.findErrorMagnitudes = function (t, e) {
    for (var r = e.length, n = new Int32Array(r), o = this.field, i = 0; i < r; i++) {
      for (var a = o.inverse(e[i]), u = 1, s = 0; s < r; s++) {
        if (i !== s) {
          var c = o.multiply(e[s], a);
          var f = 0 === (1 & c) ? 1 | c : -2 & c;
          u = o.multiply(u, f);
        }
      }
      n[i] = o.multiply(t.evaluateAt(a), o.inverse(u));
      if (0 !== o.getGeneratorBase()) {
        n[i] = o.multiply(n[i], a);
      }
    }
    return n;
  };
  return t;
}();
exports.a = u;