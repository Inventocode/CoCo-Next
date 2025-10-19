/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：274
 */

"use strict";

var r = require("./191/412");
var i = require("./117");
var o = require("./63");
var a = function () {
  function t(t, e) {
    if (0 === e.length) {
      throw new o.a();
    }
    this.field = t;
    var n = e.length;
    if (n > 1 && 0 === e[0]) {
      for (var r = 1; r < n && 0 === e[r];) {
        r++;
      }
      if (r === n) {
        this.coefficients = Int32Array.from([0]);
      } else {
        this.coefficients = new Int32Array(n - r);
        i.a.arraycopy(e, r, this.coefficients, 0, this.coefficients.length);
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
    var n = this.coefficients;
    if (1 === t) {
      e = 0;
      for (var i = 0, o = n.length; i !== o; i++) {
        var a = n[i];
        e = r.a.addOrSubtract(e, a);
      }
      return e;
    }
    e = n[0];
    var s = n.length;
    var u = this.field;
    for (i = 1; i < s; i++) {
      e = r.a.addOrSubtract(u.multiply(t, e), n[i]);
    }
    return e;
  };
  t.prototype.addOrSubtract = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero()) {
      return e;
    }
    if (e.isZero()) {
      return this;
    }
    var n = this.coefficients;
    var a = e.coefficients;
    if (n.length > a.length) {
      var s = n;
      n = a;
      a = s;
    }
    var u = new Int32Array(a.length);
    var c = a.length - n.length;
    i.a.arraycopy(a, 0, u, 0, c);
    for (var l = c; l < a.length; l++) {
      u[l] = r.a.addOrSubtract(n[l - c], a[l]);
    }
    return new t(this.field, u);
  };
  t.prototype.multiply = function (e) {
    if (!this.field.equals(e.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero() || e.isZero()) {
      return this.field.getZero();
    }
    for (var n = this.coefficients, i = n.length, a = e.coefficients, s = a.length, u = new Int32Array(i + s - 1), c = this.field, l = 0; l < i; l++) {
      for (var d = n[l], f = 0; f < s; f++) {
        u[l + f] = r.a.addOrSubtract(u[l + f], c.multiply(d, a[f]));
      }
    }
    return new t(c, u);
  };
  t.prototype.multiplyScalar = function (e) {
    if (0 === e) {
      return this.field.getZero();
    }
    if (1 === e) {
      return this;
    }
    for (var n = this.coefficients.length, r = this.field, i = new Int32Array(n), o = this.coefficients, a = 0; a < n; a++) {
      i[a] = r.multiply(o[a], e);
    }
    return new t(r, i);
  };
  t.prototype.multiplyByMonomial = function (e, n) {
    if (e < 0) {
      throw new o.a();
    }
    if (0 === n) {
      return this.field.getZero();
    }
    for (var r = this.coefficients, i = r.length, a = new Int32Array(i + e), s = this.field, u = 0; u < i; u++) {
      a[u] = s.multiply(r[u], n);
    }
    return new t(s, a);
  };
  t.prototype.divide = function (t) {
    if (!this.field.equals(t.field)) {
      throw new o.a("GenericGFPolys do not have same GenericGF field");
    }
    if (t.isZero()) {
      throw new o.a("Divide by 0");
    }
    for (var e = this.field, n = e.getZero(), r = this, i = t.getCoefficient(t.getDegree()), a = e.inverse(i); r.getDegree() >= t.getDegree() && !r.isZero();) {
      var s = r.getDegree() - t.getDegree();
      var u = e.multiply(r.getCoefficient(r.getDegree()), a);
      var c = t.multiplyByMonomial(s, u);
      var l = e.buildMonomial(s, u);
      n = n.addOrSubtract(l);
      r = r.addOrSubtract(c);
    }
    return [n, r];
  };
  t.prototype.toString = function () {
    for (var t = "", e = this.getDegree(); e >= 0; e--) {
      var n = this.getCoefficient(e);
      if (0 !== n) {
        if (n < 0) {
          t += " - ";
          n = -n;
        } else {
          if (t.length > 0) {
            t += " + ";
          }
        }
        if (0 === e || 1 !== n) {
          var r = this.field.log(n);
          if (0 === r) {
            t += "1";
          } else {
            if (1 === r) {
              t += "a";
            } else {
              t += "a^";
              t += r;
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