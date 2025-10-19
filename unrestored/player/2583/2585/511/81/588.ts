/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：588
 */

"use strict";

var r = require("./502");
var i = require("./180");
var o = require("./452");
var a = require("./37");
var s = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var u = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  s(e, t);
  e.prototype.sampleGrid = function (t, e, n, r, i, a, s, u, c, l, d, f, h, p, m, b, g, v, _) {
    var y = o.a.quadrilateralToQuadrilateral(r, i, a, s, u, c, l, d, f, h, p, m, b, g, v, _);
    return this.sampleGridWithTransform(t, e, n, y);
  };
  e.prototype.sampleGridWithTransform = function (t, e, n, o) {
    if (e <= 0 || n <= 0) {
      throw new a.a();
    }
    for (var s = new i.a(e, n), u = new Float32Array(2 * e), c = 0; c < n; c++) {
      for (var l = u.length, d = c + .5, f = 0; f < l; f += 2) {
        u[f] = f / 2 + .5;
        u[f + 1] = d;
      }
      o.transformPoints(u);
      r.a.checkAndNudgePoints(t, u);
      try {
        for (f = 0; f < l; f += 2) {
          if (t.get(Math.floor(u[f]), Math.floor(u[f + 1]))) {
            s.set(f / 2, c);
          }
        }
      } catch (h) {
        throw new a.a();
      }
    }
    return s;
  };
  return e;
}(r.a);
exports.a = u;