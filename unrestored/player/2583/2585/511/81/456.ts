/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：456
 */

"use strict";

var r = require("./274");
var i = require("./117");
var o = require("./63");
var a = function () {
  function t(t) {
    this.field = t;
    this.cachedGenerators = [];
    this.cachedGenerators.push(new r.a(t, Int32Array.from([1])));
  }
  t.prototype.buildGenerator = function (t) {
    var e = this.cachedGenerators;
    if (t >= e.length) {
      for (var n = e[e.length - 1], i = this.field, o = e.length; o <= t; o++) {
        var a = n.multiply(new r.a(i, Int32Array.from([1, i.exp(o - 1 + i.getGeneratorBase())])));
        e.push(a);
        n = a;
      }
    }
    return e[t];
  };
  t.prototype.encode = function (t, e) {
    if (0 === e) {
      throw new o.a("No error correction bytes");
    }
    var n = t.length - e;
    if (n <= 0) {
      throw new o.a("No data bytes provided");
    }
    var a = this.buildGenerator(e);
    var s = new Int32Array(n);
    i.a.arraycopy(t, 0, s, 0, n);
    for (var u = new r.a(this.field, s), c = (u = u.multiplyByMonomial(e, 1)).divide(a)[1].getCoefficients(), l = e - c.length, d = 0; d < l; d++) {
      t[n + d] = 0;
    }
    i.a.arraycopy(c, 0, t, n + l, c.length);
  };
  return t;
}();
exports.a = a;