"use strict";

var n = require("./63");
var o = function () {
  function t() {}
  t.applyMaskPenaltyRule1 = function (e) {
    return t.applyMaskPenaltyRule1Internal(e, !0) + t.applyMaskPenaltyRule1Internal(e, !1);
  };
  t.applyMaskPenaltyRule2 = function (e) {
    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i - 1; a++) {
      for (var u = n[a], s = 0; s < o - 1; s++) {
        var c = u[s];
        if (c === u[s + 1] && c === n[a + 1][s] && c === n[a + 1][s + 1]) {
          r++;
        }
      }
    }
    return t.N2 * r;
  };
  t.applyMaskPenaltyRule3 = function (e) {
    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i; a++) {
      for (var u = 0; u < o; u++) {
        var s = n[a];
        if (u + 6 < o && 1 === s[u] && 0 === s[u + 1] && 1 === s[u + 2] && 1 === s[u + 3] && 1 === s[u + 4] && 0 === s[u + 5] && 1 === s[u + 6] && (t.isWhiteHorizontal(s, u - 4, u) || t.isWhiteHorizontal(s, u + 7, u + 11))) {
          r++;
        }
        if (a + 6 < i && 1 === n[a][u] && 0 === n[a + 1][u] && 1 === n[a + 2][u] && 1 === n[a + 3][u] && 1 === n[a + 4][u] && 0 === n[a + 5][u] && 1 === n[a + 6][u] && (t.isWhiteVertical(n, u, a - 4, a) || t.isWhiteVertical(n, u, a + 7, a + 11))) {
          r++;
        }
      }
    }
    return r * t.N3;
  };
  t.isWhiteHorizontal = function (t, e, r) {
    e = Math.max(e, 0);
    r = Math.min(r, t.length);
    for (var n = e; n < r; n++) {
      if (1 === t[n]) {
        return !1;
      }
    }
    return !0;
  };
  t.isWhiteVertical = function (t, e, r, n) {
    r = Math.max(r, 0);
    n = Math.min(n, t.length);
    for (var o = r; o < n; o++) {
      if (1 === t[o][e]) {
        return !1;
      }
    }
    return !0;
  };
  t.applyMaskPenaltyRule4 = function (e) {
    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i; a++) {
      for (var u = n[a], s = 0; s < o; s++) {
        if (1 === u[s]) {
          r++;
        }
      }
    }
    var c = e.getHeight() * e.getWidth();
    return Math.floor(10 * Math.abs(2 * r - c) / c) * t.N4;
  };
  t.getDataMaskBit = function (t, e, r) {
    var o;
    var i;
    switch (t) {
      case 0:
        o = r + e & 1;
        break;
      case 1:
        o = 1 & r;
        break;
      case 2:
        o = e % 3;
        break;
      case 3:
        o = (r + e) % 3;
        break;
      case 4:
        o = Math.floor(r / 2) + Math.floor(e / 3) & 1;
        break;
      case 5:
        o = (1 & (i = r * e)) + i % 3;
        break;
      case 6:
        o = (1 & (i = r * e)) + i % 3 & 1;
        break;
      case 7:
        o = (i = r * e) % 3 + (r + e & 1) & 1;
        break;
      default:
        throw new n.a("Invalid mask pattern: " + t);
    }
    return 0 === o;
  };
  t.applyMaskPenaltyRule1Internal = function (e, r) {
    for (var n = 0, o = r ? e.getHeight() : e.getWidth(), i = r ? e.getWidth() : e.getHeight(), a = e.getArray(), u = 0; u < o; u++) {
      for (var s = 0, c = -1, f = 0; f < i; f++) {
        var h = r ? a[u][f] : a[f][u];
        if (h === c) {
          s++;
        } else {
          if (s >= 5) {
            n += t.N1 + (s - 5);
          }
          s = 1;
          c = h;
        }
      }
      if (s >= 5) {
        n += t.N1 + (s - 5);
      }
    }
    return n;
  };
  t.N1 = 3;
  t.N2 = 3;
  t.N3 = 40;
  t.N4 = 10;
  return t;
}();
exports.a = o;