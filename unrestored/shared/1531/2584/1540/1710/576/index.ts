"use strict";

var r = require("../../1623/86");
var o = require("../../1736/194");
var i = require("../../1623/272");
var a = require("../../1720/1079");
var s = require("../../1720/258/index");
var c = require("../../1581/1226/index");
var l = require("../../1745/635");
var u = require("../../1665/627");
var d = require("../../1740/422");
var p = require("../../1612/1070");
var f = require("../../1735/257");
var h = require("./1228");
var m = require("../../1731/1248/index");
var g = require("../../1656/628");
var _ = require("../../1745/332");
var v = require("../../1253/825");
var b = require("../../1738/231");
var y = require("../../1541/749");
var E = require("../../1654/575/index");
var O = require("../../1666/634");
var w = require("../../1667/631/index").f;
var C = require("../../1720/1249/index");
var T = require("../../1733/399").forEach;
var S = require("../../1667/751");
var I = require("../../1623/300");
var A = require("../../1659/386/index");
var j = require("../../1745/423/index");
var N = require("../../1667/939");
var R = j.get;
var k = j.set;
var x = I.f;
var D = A.f;
var M = Math.round;
var L = o.RangeError;
var P = c.ArrayBuffer;
var B = c.DataView;
var F = s.NATIVE_ARRAY_BUFFER_VIEWS;
var G = s.TYPED_ARRAY_CONSTRUCTOR;
var U = s.TYPED_ARRAY_TAG;
var W = s.TypedArray;
var H = s.TypedArrayPrototype;
var V = s.aTypedArrayConstructor;
var z = s.isTypedArray;
var Y = function (e, t) {
  for (var n = 0, r = t.length, o = new (V(e))(r); r > n;) {
    o[n] = t[n++];
  }
  return o;
};
var K = function (e, t) {
  x(e, t, {
    get: function () {
      return R(this)[t];
    }
  });
};
var q = function (e) {
  var t;
  return e instanceof P || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t;
};
var X = function (e, t) {
  return z(e) && !y(t) && t in e && p(+t) && t >= 0;
};
var Q = function (e, t) {
  t = g(t);
  return X(e, t) ? u(2, e[t]) : D(e, t);
};
var Z = function (e, t, n) {
  t = g(t);
  return !(X(e, t) && b(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? x(e, t, n) : (e[t] = n.value, e);
};
if (i) {
  if (!F) {
    A.f = Q;
    I.f = Z;
    K(H, "buffer");
    K(H, "byteOffset");
    K(H, "byteLength");
    K(H, "length");
  }
  r({
    target: "Object",
    stat: !0,
    forced: !F
  }, {
    getOwnPropertyDescriptor: Q,
    defineProperty: Z
  });
  module.exports = function (e, t, n) {
    var i = e.match(/\d+$/)[0] / 8;
    var s = e + (n ? "Clamped" : "") + "Array";
    var c = "get" + e;
    var u = "set" + e;
    var p = o[s];
    var g = p;
    var _ = g && g.prototype;
    var v = {};
    var y = function (e, t) {
      x(e, t, {
        get: function () {
          return function (e, t) {
            var n = R(e);
            return n.view[c](t * i + n.byteOffset, !0);
          }(this, t);
        },
        set: function (e) {
          return function (e, t, r) {
            var o = R(e);
            if (n) {
              r = (r = M(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r;
            }
            o.view[u](t * i + o.byteOffset, r, !0);
          }(this, t, e);
        },
        enumerable: !0
      });
    };
    if (F) {
      if (a) {
        g = t(function (e, t, n, r) {
          l(e, g, s);
          return N(b(t) ? q(t) ? void 0 !== r ? new p(t, m(n, i), r) : void 0 !== n ? new p(t, m(n, i)) : new p(t) : z(t) ? Y(g, t) : C.call(g, t) : new p(h(t)), e, g);
        });
        if (O) {
          O(g, W);
        }
        T(w(p), function (e) {
          if (!(e in g)) {
            d(g, e, p[e]);
          }
        });
        g.prototype = _;
      }
    } else {
      g = t(function (e, t, n, r) {
        l(e, g, s);
        var o;
        var a;
        var c;
        var u = 0;
        var d = 0;
        if (b(t)) {
          if (!q(t)) {
            return z(t) ? Y(g, t) : C.call(g, t);
          }
          o = t;
          d = m(n, i);
          var p = t.byteLength;
          if (void 0 === r) {
            if (p % i) {
              throw L("Wrong length");
            }
            if ((a = p - d) < 0) {
              throw L("Wrong length");
            }
          } else if ((a = f(r) * i) + d > p) {
            throw L("Wrong length");
          }
          c = a / i;
        } else {
          c = h(t);
          o = new P(a = c * i);
        }
        for (k(e, {
          buffer: o,
          byteOffset: d,
          byteLength: a,
          length: c,
          view: new B(o)
        }); u < c;) {
          y(e, u++);
        }
      });
      if (O) {
        O(g, W);
      }
      _ = g.prototype = E(H);
    }
    if (_.constructor !== g) {
      d(_, "constructor", g);
    }
    d(_, G, g);
    if (U) {
      d(_, U, s);
    }
    v[s] = g;
    r({
      global: !0,
      forced: g != p,
      sham: !F
    }, v);
    if (!("BYTES_PER_ELEMENT" in g)) {
      d(g, "BYTES_PER_ELEMENT", i);
    }
    if (!("BYTES_PER_ELEMENT" in _)) {
      d(_, "BYTES_PER_ELEMENT", i);
    }
    S(s);
  };
} else {
  module.exports = function () {};
}