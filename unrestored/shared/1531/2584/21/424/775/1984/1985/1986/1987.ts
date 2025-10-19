/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1987
 */

"use strict";

var r = function (e) {
  this.value = e;
};
r.math = {
  isDegree: true,
  acos: function (e) {
    return r.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function (e, t) {
    return e + t;
  },
  asin: function (e) {
    return r.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function (e) {
    return r.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
  },
  acosh: function (e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  },
  asinh: function (e) {
    return Math.log(e + Math.sqrt(e * e + 1));
  },
  atanh: function (e) {
    return Math.log((1 + e) / (1 - e));
  },
  C: function (e, t) {
    var n = 1;
    var i = e - t;
    var o = t;
    if (o < i) {
      o = i;
      i = t;
    }
    for (var a = o + 1; a <= e; a++) {
      n *= a;
    }
    return n / r.math.fact(i);
  },
  changeSign: function (e) {
    return -e;
  },
  cos: function (e) {
    if (r.math.isDegree) {
      e = r.math.toRadian(e);
    }
    return Math.cos(e);
  },
  cosh: function (e) {
    return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
  },
  div: function (e, t) {
    return e / t;
  },
  fact: function (e) {
    if (e % 1 !== 0) {
      return "NaN";
    }
    for (var t = 1, n = 2; n <= e; n++) {
      t *= n;
    }
    return t;
  },
  inverse: function (e) {
    return 1 / e;
  },
  log: function (e) {
    return Math.log(e) / Math.log(10);
  },
  mod: function (e, t) {
    return e % t;
  },
  mul: function (e, t) {
    return e * t;
  },
  P: function (e, t) {
    for (var n = 1, r = Math.floor(e) - Math.floor(t) + 1; r <= Math.floor(e); r++) {
      n *= r;
    }
    return n;
  },
  Pi: function (e, t, n) {
    for (var r = 1, i = e; i <= t; i++) {
      r *= Number(n.postfixEval({
        n: i
      }));
    }
    return r;
  },
  pow10x: function (e) {
    for (var t = 1; e--;) {
      t *= 10;
    }
    return t;
  },
  sigma: function (e, t, n) {
    for (var r = 0, i = e; i <= t; i++) {
      r += Number(n.postfixEval({
        n: i
      }));
    }
    return r;
  },
  sin: function (e) {
    if (r.math.isDegree) {
      e = r.math.toRadian(e);
    }
    return Math.sin(e);
  },
  sinh: function (e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function (e, t) {
    return e - t;
  },
  tan: function (e) {
    if (r.math.isDegree) {
      e = r.math.toRadian(e);
    }
    return Math.tan(e);
  },
  tanh: function (e) {
    return r.sinha(e) / r.cosha(e);
  },
  toRadian: function (e) {
    return e * Math.PI / 180;
  }
};
r.Exception = function (e) {
  this.message = e;
};
module.exports = r;