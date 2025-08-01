"use strict";

var n = require("./165");
var o = require("./63");
var i = require("./126");
var a = require("./180");
var u = require("./598");
var s = require("./456");
var c = require("./191/index");
var f = require("./601");
var h = require("./105");
var l = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var d = function () {
  function t() {}
  t.encodeBytes = function (e) {
    return t.encode(e, t.DEFAULT_EC_PERCENT, t.DEFAULT_AZTEC_LAYERS);
  };
  t.encode = function (e, r, n) {
    var s;
    var c;
    var l;
    var d;
    var p;
    var g = new f.a(e).encode();
    var y = h.a.truncDivision(g.getSize() * r, 100) + 11;
    var w = g.getSize() + y;
    if (n !== t.DEFAULT_AZTEC_LAYERS) {
      if (s = (n < 0), (c = Math.abs(n)) > (s ? t.MAX_NB_BITS_COMPACT : t.MAX_NB_BITS)) {
        throw new o.a(i.a.format("Illegal value %s for layers", n));
      }
      var v = (l = t.totalBitsInLayer(c, s)) - l % (d = t.WORD_SIZE[c]);
      if ((p = t.stuffBits(g, d)).getSize() + y > v) {
        throw new o.a("Data to large for user specified layer");
      }
      if (s && p.getSize() > 64 * d) {
        throw new o.a("Data to large for user specified layer");
      }
    } else {
      d = 0;
      p = null;
      for (var _ = 0;; _++) {
        if (_ > t.MAX_NB_BITS) {
          throw new o.a("Data too large for an Aztec code");
        }
        if (c = (s = _ <= 3) ? _ + 1 : _, !(w > (l = t.totalBitsInLayer(c, s)))) {
          if (!(null != p && d === t.WORD_SIZE[c])) {
            d = t.WORD_SIZE[c];
            p = t.stuffBits(g, d);
          }
          v = l - l % d;
          if (!(s && p.getSize() > 64 * d) && p.getSize() + y <= v) {
            break;
          }
        }
      }
    }
    var m;
    var A = t.generateCheckWords(p, l, d);
    var E = p.getSize() / d;
    var C = t.generateModeMessage(s, c, E);
    var I = (s ? 11 : 14) + 4 * c;
    var S = new Int32Array(I);
    if (s) {
      m = I;
      for (_ = 0; _ < S.length; _++) {
        S[_] = _;
      }
    } else {
      m = I + 1 + 2 * h.a.truncDivision(h.a.truncDivision(I, 2) - 1, 15);
      var T = h.a.truncDivision(I, 2);
      var O = h.a.truncDivision(m, 2);
      for (_ = 0; _ < T; _++) {
        var b = _ + h.a.truncDivision(_, 15);
        S[T - _ - 1] = O - b - 1;
        S[T + _] = O + b + 1;
      }
    }
    for (_ = 0, R = new a.a(m), N = 0, void 0; _ < c; _++) {
      var R;
      var N;
      for (var D = 4 * (c - _) + (s ? 9 : 12), M = 0; M < D; M++) {
        for (var P = 2 * M, B = 0; B < 2; B++) {
          if (A.get(N + P + B)) {
            R.set(S[2 * _ + B], S[2 * _ + M]);
          }
          if (A.get(N + 2 * D + P + B)) {
            R.set(S[2 * _ + M], S[I - 1 - 2 * _ - B]);
          }
          if (A.get(N + 4 * D + P + B)) {
            R.set(S[I - 1 - 2 * _ - B], S[I - 1 - 2 * _ - M]);
          }
          if (A.get(N + 6 * D + P + B)) {
            R.set(S[I - 1 - 2 * _ - M], S[2 * _ + B]);
          }
        }
      }
      N += 8 * D;
    }
    if (t.drawModeMessage(R, s, m, C), s) {
      t.drawBullsEye(R, h.a.truncDivision(m, 2), 5);
    } else {
      t.drawBullsEye(R, h.a.truncDivision(m, 2), 7);
      for (_ = 0, M = 0; _ < h.a.truncDivision(I, 2) - 1; _ += 15, M += 16) {
        for (B = 1 & h.a.truncDivision(m, 2); B < m; B += 2) {
          R.set(h.a.truncDivision(m, 2) - M, B);
          R.set(h.a.truncDivision(m, 2) + M, B);
          R.set(B, h.a.truncDivision(m, 2) - M);
          R.set(B, h.a.truncDivision(m, 2) + M);
        }
      }
    }
    var L = new u.a();
    L.setCompact(s);
    L.setSize(m);
    L.setLayers(c);
    L.setCodeWords(E);
    L.setMatrix(R);
    return L;
  };
  t.drawBullsEye = function (t, e, r) {
    for (var n = 0; n < r; n += 2) {
      for (var o = e - n; o <= e + n; o++) {
        t.set(o, e - n);
        t.set(o, e + n);
        t.set(e - n, o);
        t.set(e + n, o);
      }
    }
    t.set(e - r, e - r);
    t.set(e - r + 1, e - r);
    t.set(e - r, e - r + 1);
    t.set(e + r, e - r);
    t.set(e + r, e - r + 1);
    t.set(e + r, e + r - 1);
  };
  t.generateModeMessage = function (e, r, o) {
    var i = new n.a();
    if (e) {
      i.appendBits(r - 1, 2);
      i.appendBits(o - 1, 6);
      i = t.generateCheckWords(i, 28, 4);
    } else {
      i.appendBits(r - 1, 5);
      i.appendBits(o - 1, 11);
      i = t.generateCheckWords(i, 40, 4);
    }
    return i;
  };
  t.drawModeMessage = function (t, e, r, n) {
    var o = h.a.truncDivision(r, 2);
    if (e) {
      for (var i = 0; i < 7; i++) {
        var a = o - 3 + i;
        if (n.get(i)) {
          t.set(a, o - 5);
        }
        if (n.get(i + 7)) {
          t.set(o + 5, a);
        }
        if (n.get(20 - i)) {
          t.set(a, o + 5);
        }
        if (n.get(27 - i)) {
          t.set(o - 5, a);
        }
      }
    } else {
      for (i = 0; i < 10; i++) {
        a = o - 5 + i + h.a.truncDivision(i, 5);
        if (n.get(i)) {
          t.set(a, o - 7);
        }
        if (n.get(i + 10)) {
          t.set(o + 7, a);
        }
        if (n.get(29 - i)) {
          t.set(a, o + 7);
        }
        if (n.get(39 - i)) {
          t.set(o - 7, a);
        }
      }
    }
  };
  t.generateCheckWords = function (e, r, o) {
    var i;
    var a;
    var u = e.getSize() / o;
    var c = new s.a(t.getGF(o));
    var f = h.a.truncDivision(r, o);
    var d = t.bitsToWords(e, o, f);
    c.encode(d, f - u);
    var p = r % o;
    var g = new n.a();
    g.appendBits(0, p);
    try {
      for (var y = l(Array.from(d)), w = y.next(); !w.done; w = y.next()) {
        var v = w.value;
        g.appendBits(v, o);
      }
    } catch (_) {
      i = {
        error: _
      };
    } finally {
      try {
        if (w && !w.done && (a = y.return)) {
          a.call(y);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return g;
  };
  t.bitsToWords = function (t, e, r) {
    var n;
    var o;
    var i = new Int32Array(r);
    for (n = 0, o = t.getSize() / e; n < o; n++) {
      for (var a = 0, u = 0; u < e; u++) {
        a |= t.get(n * e + u) ? 1 << e - u - 1 : 0;
      }
      i[n] = a;
    }
    return i;
  };
  t.getGF = function (t) {
    switch (t) {
      case 4:
        return c.a.AZTEC_PARAM;
      case 6:
        return c.a.AZTEC_DATA_6;
      case 8:
        return c.a.AZTEC_DATA_8;
      case 10:
        return c.a.AZTEC_DATA_10;
      case 12:
        return c.a.AZTEC_DATA_12;
      default:
        throw new o.a("Unsupported word size " + t);
    }
  };
  t.stuffBits = function (t, e) {
    for (var r = new n.a(), o = t.getSize(), i = (1 << e) - 2, a = 0; a < o; a += e) {
      for (var u = 0, s = 0; s < e; s++) {
        if (a + s >= o || t.get(a + s)) {
          u |= 1 << e - 1 - s;
        }
      }
      if ((u & i) === i) {
        r.appendBits(u & i, e);
        a--;
      } else {
        if (0 === (u & i)) {
          r.appendBits(1 | u, e);
          a--;
        } else {
          r.appendBits(u, e);
        }
      }
    }
    return r;
  };
  t.totalBitsInLayer = function (t, e) {
    return ((e ? 88 : 112) + 16 * t) * t;
  };
  t.DEFAULT_EC_PERCENT = 33;
  t.DEFAULT_AZTEC_LAYERS = 0;
  t.MAX_NB_BITS = 32;
  t.MAX_NB_BITS_COMPACT = 4;
  t.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
  return t;
}();
exports.a = d;