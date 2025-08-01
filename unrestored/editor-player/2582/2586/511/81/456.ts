"use strict";

var n = require("./274");
var o = require("./117");
var i = require("./63");
var a = function () {
  function t(t) {
    this.field = t;
    this.cachedGenerators = [];
    this.cachedGenerators.push(new n.a(t, Int32Array.from([1])));
  }
  t.prototype.buildGenerator = function (t) {
    var e = this.cachedGenerators;
    if (t >= e.length) {
      for (var r = e[e.length - 1], o = this.field, i = e.length; i <= t; i++) {
        var a = r.multiply(new n.a(o, Int32Array.from([1, o.exp(i - 1 + o.getGeneratorBase())])));
        e.push(a);
        r = a;
      }
    }
    return e[t];
  };
  t.prototype.encode = function (t, e) {
    if (0 === e) {
      throw new i.a("No error correction bytes");
    }
    var r = t.length - e;
    if (r <= 0) {
      throw new i.a("No data bytes provided");
    }
    var a = this.buildGenerator(e);
    var u = new Int32Array(r);
    o.a.arraycopy(t, 0, u, 0, r);
    for (var s = new n.a(this.field, u), c = (s = s.multiplyByMonomial(e, 1)).divide(a)[1].getCoefficients(), f = e - c.length, h = 0; h < f; h++) {
      t[r + h] = 0;
    }
    o.a.arraycopy(c, 0, t, r + f, c.length);
  };
  return t;
}();
exports.a = a;