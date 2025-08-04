var r = require("./761");
var i = require("./716");
var o = require("./1139");
var a = require("./2349");
var s = require("./2350");
var c = require("./2351");
var u = require("./2352");
var l = require("./2353");
var f = require("./1372");
var d = require("./2354/index");
var h = require("./2357/index");
var p = require("./2358");
var _ = require("./717/index");
var A = require("./2359/index");
var g = require("../../../../24/481/1126/758");
function v(e, t, n) {
  var r;
  var i;
  var o = e.size;
  var a = p.getEncodedBits(t, n);
  for (r = 0; r < 15; r++) {
    i = 1 === (a >> r & 1);
    if (r < 6) {
      e.set(r, 8, i, !0);
    } else {
      if (r < 8) {
        e.set(r + 1, 8, i, !0);
      } else {
        e.set(o - 15 + r, 8, i, !0);
      }
    }
    if (r < 8) {
      e.set(8, o - r - 1, i, !0);
    } else {
      if (r < 9) {
        e.set(8, 15 - r - 1 + 1, i, !0);
      } else {
        e.set(8, 15 - r - 1, i, !0);
      }
    }
  }
  e.set(o - 8, 8, 1, !0);
}
function m(e, t, n) {
  var o = new a();
  n.forEach(function (t) {
    o.put(t.mode.bit, 4);
    o.put(t.getLength(), _.getCharCountIndicator(t.mode, e));
    t.write(o);
  });
  var s = 8 * (i.getSymbolTotalCodewords(e) - f.getTotalCodewordsCount(e, t));
  for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) {
    o.putBit(0);
  }
  for (var c = (s - o.getLengthInBits()) / 8, u = 0; u < c; u++) {
    o.put(u % 2 ? 17 : 236, 8);
  }
  return function (e, t, n) {
    for (var o = i.getSymbolTotalCodewords(t), a = f.getTotalCodewordsCount(t, n), s = o - a, c = f.getBlocksCount(t, n), u = c - o % c, l = Math.floor(o / c), h = Math.floor(s / c), p = h + 1, _ = l - h, A = new d(_), g = 0, v = new Array(c), m = new Array(c), y = 0, b = r.from(e.buffer), w = 0; w < c; w++) {
      var E = w < u ? h : p;
      v[w] = b.slice(g, g + E);
      m[w] = A.encode(v[w]);
      g += E;
      y = Math.max(y, E);
    }
    var x;
    var C;
    var O = r.alloc(o);
    var k = 0;
    for (x = 0; x < y; x++) {
      for (C = 0; C < c; C++) {
        if (x < v[C].length) {
          O[k++] = v[C][x];
        }
      }
    }
    for (x = 0; x < _; x++) {
      for (C = 0; C < c; C++) {
        O[k++] = m[C][x];
      }
    }
    return O;
  }(o, e, t);
}
function y(e, t, n, r) {
  var o;
  if (g(e)) {
    o = A.fromArray(e);
  } else {
    if ("string" !== typeof e) {
      throw new Error("Invalid data");
    }
    var a = t;
    if (!a) {
      var f = A.rawSplit(e);
      a = h.getBestVersionForData(f, n);
    }
    o = A.fromString(e, a || 40);
  }
  var d = h.getBestVersionForData(o, n);
  if (!d) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (t) {
    if (t < d) {
      throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + d + ".\n");
    }
  } else {
    t = d;
  }
  var p = m(t, n, o);
  var _ = i.getSymbolSize(t);
  var y = new s(_);
  (function (e, t) {
    for (var n = e.size, r = u.getPositions(t), i = 0; i < r.length; i++) {
      for (var o = r[i][0], a = r[i][1], s = -1; s <= 7; s++) {
        if (!(o + s <= -1 || n <= o + s)) {
          for (var c = -1; c <= 7; c++) {
            if (!(a + c <= -1 || n <= a + c)) {
              if (s >= 0 && s <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && c >= 2 && c <= 4) {
                e.set(o + s, a + c, !0, !0);
              } else {
                e.set(o + s, a + c, !1, !0);
              }
            }
          }
        }
      }
    }
  })(y, t);
  (function (e) {
    for (var t = e.size, n = 8; n < t - 8; n++) {
      var r = n % 2 === 0;
      e.set(n, 6, r, !0);
      e.set(6, n, r, !0);
    }
  })(y);
  (function (e, t) {
    for (var n = c.getPositions(t), r = 0; r < n.length; r++) {
      for (var i = n[r][0], o = n[r][1], a = -2; a <= 2; a++) {
        for (var s = -2; s <= 2; s++) {
          if (-2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s) {
            e.set(i + a, o + s, !0, !0);
          } else {
            e.set(i + a, o + s, !1, !0);
          }
        }
      }
    }
  })(y, t);
  v(y, n, 0);
  if (t >= 7) {
    (function (e, t) {
      for (var n, r, i, o = e.size, a = h.getEncodedBits(t), s = 0; s < 18; s++) {
        n = Math.floor(s / 3);
        r = s % 3 + o - 8 - 3;
        i = 1 === (a >> s & 1);
        e.set(n, r, i, !0);
        e.set(r, n, i, !0);
      }
    })(y, t);
  }
  (function (e, t) {
    for (var n = e.size, r = -1, i = n - 1, o = 7, a = 0, s = n - 1; s > 0; s -= 2) {
      for (6 === s && s--;;) {
        for (var c = 0; c < 2; c++) {
          if (!e.isReserved(i, s - c)) {
            var u = !1;
            if (a < t.length) {
              u = 1 === (t[a] >>> o & 1);
            }
            e.set(i, s - c, u);
            if (-1 === --o) {
              a++;
              o = 7;
            }
          }
        }
        if ((i += r) < 0 || n <= i) {
          i -= r;
          r = -r;
          break;
        }
      }
    }
  })(y, p);
  if (isNaN(r)) {
    r = l.getBestMask(y, v.bind(null, y, n));
  }
  l.applyMask(r, y);
  v(y, n, r);
  return {
    modules: y,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
exports.create = function (e, t) {
  if ("undefined" === typeof e || "" === e) {
    throw new Error("No input text");
  }
  var n;
  var r;
  var a = o.M;
  if ("undefined" !== typeof t) {
    a = o.from(t.errorCorrectionLevel, o.M);
    n = h.from(t.version);
    r = l.from(t.maskPattern);
    if (t.toSJISFunc) {
      i.setToSJISFunction(t.toSJISFunc);
    }
  }
  return y(e, n, a, r);
};