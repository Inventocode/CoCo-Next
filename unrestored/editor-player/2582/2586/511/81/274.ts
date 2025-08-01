"use strict";

var n = require("./191/412");
var o = require("./117");
var i = require("./63");
var a = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new i.a();
    }
    this.field = t;
    var r = e.length;
    if (r > 1 && 0 === e[0]) {
      for (var n = 1; n < r && 0 === e[n];) {
        n++;
      }
      if (n === r) {
        this.coefficients = Int32Array.from([0]);
      } else {
        this.coefficients = new Int32Array(r - n);
        o.a.arraycopy(e, n, this.coefficients, 0, this.coefficients.length);
      }
    } else {
      this.coefficients = e;
    }
  }
  t.prototype.getCoefficients = function () {
    return this.coefficients;
  };
  t.prototype.getDegree = function () {
    return this.coefficients.length - 1;
  };
  t.prototype.isZero = function () {
    return 0 === this.coefficients[0];
  };
  t.prototype.getCoefficient = function (t) {
    return this.coefficients[this.coefficients.length - 1 - t];
  };
  t.prototype.evaluateAt = function (t) {
    if (0 === t) {
      return this.getCoefficient(0);
    }
    var e;
    var r = this.coefficients;
    if (1 === t) {
      e = 0;
      for (var o = 0, i = r.length; o !== i; o++) {
        var a = r[o];
        e = n.a.addOrSubtract(e, a);
      }
      return e;
    }
    e = r[0];
    var u = r.length;
    var s = this.field;
    for (o = 1; o < u; o++) {
      e = n.a.addOrSubtract(s.multiply(t, e), r[o]);
    }
    return e;
  };
  t.prototype.addOrSubtract = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero()) {
      return e;
    }
    if (e.isZero()) {
      return this;
    }
    var r = this.coefficients;
    var a = e.coefficients;
    if (r.length > a.length) {
      var u = r;
      r = a;
      a = u;
    }
    var s = new Int32Array(a.length);
    var c = a.length - r.length;
    o.a.arraycopy(a, 0, s, 0, c);
    for (var f = c; f < a.length; f++) {
      s[f] = n.a.addOrSubtract(r[f - c], a[f]);
    }
    return new t(this.field, s);
  };
  t.prototype.multiply = function (e) {
    if (!this.field.equals(e.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero() || e.isZero()) {
      return this.field.getZero();
    }
    for (var r = this.coefficients, o = r.length, a = e.coefficients, u = a.length, s = new Int32Array(o + u - 1), c = this.field, f = 0; f < o; f++) {
      for (var h = r[f], l = 0; l < u; l++) {
        s[f + l] = n.a.addOrSubtract(s[f + l], c.multiply(h, a[l]));
      }
    }
    return new t(c, s);
  };
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return this.field.getZero();
    }
    if (1 === e) {
      return this;
    }
    for (var r = this.coefficients.length, n = this.field, o = new Int32Array(r), i = this.coefficients, a = 0; a < r; a++) {
      o[a] = n.multiply(i[a], e);
    }
    return new t(n, o);
  };
  t.prototype.multiplyByMonomial = function (e, r) {
    if (e < 0) {
      throw new i.a();
    }
    if (0 === r) {
      return this.field.getZero();
    }
    for (var n = this.coefficients, o = n.length, a = new Int32Array(o + e), u = this.field, s = 0; s < o; s++) {
      a[s] = u.multiply(n[s], r);
    }
    return new t(u, a);
  };
  t.prototype.divide = function (t) {
    if (!this.field.equals(t.field)) {
      throw new i.a("GenericGFPolys do not have same GenericGF field");
    }
    if (t.isZero()) {
      throw new i.a("Divide by 0");
    }
    for (var e = this.field, r = e.getZero(), n = this, o = t.getCoefficient(t.getDegree()), a = e.inverse(o); n.getDegree() >= t.getDegree() && !n.isZero();) {
      var u = n.getDegree() - t.getDegree();
      var s = e.multiply(n.getCoefficient(n.getDegree()), a);
      var c = t.multiplyByMonomial(u, s);
      var f = e.buildMonomial(u, s);
      r = r.addOrSubtract(f);
      n = n.addOrSubtract(c);
    }
    return [r, n];
  };
  t.prototype.toString = function () {
    for (var t = "", e = this.getDegree(); e >= 0; e--) {
      var r = this.getCoefficient(e);
      if (0 !== r) {
        if (r < 0 ? (t += " - ", r = -r) : t.length > 0 && (t += " + "), 0 === e || 1 !== r) {
          var n = this.field.log(r);
          if (0 === n) {
            t += "1";
          } else {
            if (1 === n) {
              t += "a";
            } else {
              t += "a^";
              t += n;
            }
          }
        }
        if (0 !== e) {
          if (1 === e) {
            t += "x";
          } else {
            t += "x^";
            t += e;
          }
        }
      }
    }
    return t;
  };
  return t;
}();
exports.a = a;