"use strict";

var r = require("./191/index");
var i = require("./274");
var o = require("./408");
var a = require("./221");
var s = function () {
  function t(t) {
    this.field = t;
  }
  t.prototype.decode = function (t, e) {
    for (var n = this.field, a = new i.a(n, t), s = new Int32Array(e), u = !0, c = 0; c < e; c++) {
      var l = a.evaluateAt(n.exp(c + n.getGeneratorBase()));
      s[s.length - 1 - c] = l;
      if (0 !== l) {
        u = !1;
      }
    }
    if (!u) {
      var d = new i.a(n, s);
      var f = this.runEuclideanAlgorithm(n.buildMonomial(e, 1), d, e);
      var h = f[0];
      var p = f[1];
      var m = this.findErrorLocations(h);
      var b = this.findErrorMagnitudes(p, m);
      for (c = 0; c < m.length; c++) {
        var g = t.length - 1 - n.log(m[c]);
        if (g < 0) {
          throw new o.a("Bad error location");
        }
        t[g] = r.a.addOrSubtract(t[g], b[c]);
      }
    }
  };
  t.prototype.runEuclideanAlgorithm = function (t, e, n) {
    if (t.getDegree() < e.getDegree()) {
      var r = t;
      t = e;
      e = r;
    }
    for (var i = this.field, s = t, u = e, c = i.getZero(), l = i.getOne(); u.getDegree() >= (n / 2 | 0);) {
      var d = s;
      var f = c;
      c = l;
      if ((s = u).isZero()) {
        throw new o.a("r_{i-1} was zero");
      }
      u = d;
      for (var h = i.getZero(), p = s.getCoefficient(s.getDegree()), m = i.inverse(p); u.getDegree() >= s.getDegree() && !u.isZero();) {
        var b = u.getDegree() - s.getDegree();
        var g = i.multiply(u.getCoefficient(u.getDegree()), m);
        h = h.addOrSubtract(i.buildMonomial(b, g));
        u = u.addOrSubtract(s.multiplyByMonomial(b, g));
      }
      l = h.multiply(c).addOrSubtract(f);
      if (u.getDegree() >= s.getDegree()) {
        throw new a.a("Division algorithm failed to reduce polynomial?");
      }
    }
    var v = l.getCoefficient(0);
    if (0 === v) {
      throw new o.a("sigmaTilde(0) was zero");
    }
    var _ = i.inverse(v);
    return [l.multiplyScalar(_), u.multiplyScalar(_)];
  };
  t.prototype.findErrorLocations = function (t) {
    var e = t.getDegree();
    if (1 === e) {
      return Int32Array.from([t.getCoefficient(1)]);
    }
    for (var n = new Int32Array(e), r = 0, i = this.field, a = 1; a < i.getSize() && r < e; a++) {
      if (0 === t.evaluateAt(a)) {
        n[r] = i.inverse(a);
        r++;
      }
    }
    if (r !== e) {
      throw new o.a("Error locator degree does not match number of roots");
    }
    return n;
  };
  t.prototype.findErrorMagnitudes = function (t, e) {
    for (var n = e.length, r = new Int32Array(n), i = this.field, o = 0; o < n; o++) {
      for (var a = i.inverse(e[o]), s = 1, u = 0; u < n; u++) {
        if (o !== u) {
          var c = i.multiply(e[u], a);
          var l = 0 === (1 & c) ? 1 | c : -2 & c;
          s = i.multiply(s, l);
        }
      }
      r[o] = i.multiply(t.evaluateAt(a), i.inverse(s));
      if (0 !== i.getGeneratorBase()) {
        r[o] = i.multiply(r[o], a);
      }
    }
    return r;
  };
  return t;
}();
exports.a = s;