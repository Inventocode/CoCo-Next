"use strict";

var n = require("./187");
var o = require("./165");
var i = require("./166");
var a = require("./191/index");
var u = require("./456");
var s = require("./156");
var c = require("./297");
var f = require("./348");
var h = require("./594");
var l = require("./403");
var d = require("./508");
var p = require("./226");
var g = function () {
  function t(t, e) {
    this.dataBytes = t;
    this.errorCorrectionBytes = e;
  }
  t.prototype.getDataBytes = function () {
    return this.dataBytes;
  };
  t.prototype.getErrorCorrectionBytes = function () {
    return this.errorCorrectionBytes;
  };
  return t;
}();
var y = require("./157");
var w = function (t) {
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
var v = function () {
  function t() {}
  t.calculateMaskPenalty = function (t) {
    return f.a.applyMaskPenaltyRule1(t) + f.a.applyMaskPenaltyRule2(t) + f.a.applyMaskPenaltyRule3(t) + f.a.applyMaskPenaltyRule4(t);
  };
  t.encode = function (e, r, a) {
    if (void 0 === a) {
      a = null;
    }
    var u = t.DEFAULT_BYTE_MODE_ENCODING;
    var f = null !== a && void 0 !== a.get(n.a.CHARACTER_SET);
    if (f) {
      u = a.get(n.a.CHARACTER_SET).toString();
    }
    var p = this.chooseMode(e, u);
    var g = new o.a();
    if (p === s.a.BYTE && (f || t.DEFAULT_BYTE_MODE_ENCODING !== u)) {
      var w = i.a.getCharacterSetECIByName(u);
      if (void 0 !== w) {
        this.appendECI(w, g);
      }
    }
    this.appendModeInfo(p, g);
    var v;
    var _ = new o.a();
    if (this.appendBytes(e, p, _, u), null !== a && void 0 !== a.get(n.a.QR_VERSION)) {
      var m = Number.parseInt(a.get(n.a.QR_VERSION).toString(), 10);
      v = c.a.getVersionForNumber(m);
      var A = this.calculateBitsNeeded(p, g, _, v);
      if (!this.willFit(A, v, r)) {
        throw new y.a("Data too big for requested version");
      }
    } else {
      v = this.recommendVersion(r, p, g, _);
    }
    var E = new o.a();
    E.appendBitArray(g);
    var C = p === s.a.BYTE ? _.getSizeInBytes() : e.length;
    this.appendLengthInfo(C, v, p, E);
    E.appendBitArray(_);
    var I = v.getECBlocksForLevel(r);
    var S = v.getTotalCodewords() - I.getTotalECCodewords();
    this.terminateBits(S, E);
    var T = this.interleaveWithECBytes(E, v.getTotalCodewords(), S, I.getNumBlocks());
    var O = new l.a();
    O.setECLevel(r);
    O.setMode(p);
    O.setVersion(v);
    var b = v.getDimensionForVersion();
    var R = new h.a(b, b);
    var N = this.chooseMaskPattern(T, r, v, R);
    O.setMaskPattern(N);
    d.a.buildMatrix(T, r, v, N, R);
    O.setMatrix(R);
    return O;
  };
  t.recommendVersion = function (t, e, r, n) {
    var o = this.calculateBitsNeeded(e, r, n, c.a.getVersionForNumber(1));
    var i = this.chooseVersion(o, t);
    var a = this.calculateBitsNeeded(e, r, n, i);
    return this.chooseVersion(a, t);
  };
  t.calculateBitsNeeded = function (t, e, r, n) {
    return e.getSize() + t.getCharacterCountBits(n) + r.getSize();
  };
  t.getAlphanumericCode = function (e) {
    return e < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[e] : -1;
  };
  t.chooseMode = function (e, r) {
    if (void 0 === r && (r = null), i.a.SJIS.getName() === r && this.isOnlyDoubleByteKanji(e)) {
      return s.a.KANJI;
    }
    for (var n = !1, o = !1, a = 0, u = e.length; a < u; ++a) {
      var c = e.charAt(a);
      if (t.isDigit(c)) {
        n = !0;
      } else {
        if (-1 === this.getAlphanumericCode(c.charCodeAt(0))) {
          return s.a.BYTE;
        }
        o = !0;
      }
    }
    return o ? s.a.ALPHANUMERIC : n ? s.a.NUMERIC : s.a.BYTE;
  };
  t.isOnlyDoubleByteKanji = function (t) {
    var e;
    try {
      e = p.a.encode(t, i.a.SJIS);
    } catch (a) {
      return !1;
    }
    var r = e.length;
    if (r % 2 !== 0) {
      return !1;
    }
    for (var n = 0; n < r; n += 2) {
      var o = 255 & e[n];
      if ((o < 129 || o > 159) && (o < 224 || o > 235)) {
        return !1;
      }
    }
    return !0;
  };
  t.chooseMaskPattern = function (t, e, r, n) {
    for (var o = Number.MAX_SAFE_INTEGER, i = -1, a = 0; a < l.a.NUM_MASK_PATTERNS; a++) {
      d.a.buildMatrix(t, e, r, a, n);
      var u = this.calculateMaskPenalty(n);
      if (u < o) {
        o = u;
        i = a;
      }
    }
    return i;
  };
  t.chooseVersion = function (e, r) {
    for (var n = 1; n <= 40; n++) {
      var o = c.a.getVersionForNumber(n);
      if (t.willFit(e, o, r)) {
        return o;
      }
    }
    throw new y.a("Data too big");
  };
  t.willFit = function (t, e, r) {
    return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8;
  };
  t.terminateBits = function (t, e) {
    var r = 8 * t;
    if (e.getSize() > r) {
      throw new y.a("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
    }
    for (var n = 0; n < 4 && e.getSize() < r; ++n) {
      e.appendBit(!1);
    }
    var o = 7 & e.getSize();
    if (o > 0) {
      for (n = o; n < 8; n++) {
        e.appendBit(!1);
      }
    }
    var i = t - e.getSizeInBytes();
    for (n = 0; n < i; ++n) {
      e.appendBits(0 === (1 & n) ? 236 : 17, 8);
    }
    if (e.getSize() !== r) {
      throw new y.a("Bits size does not equal capacity");
    }
  };
  t.getNumDataBytesAndNumECBytesForBlockID = function (t, e, r, n, o, i) {
    if (n >= r) {
      throw new y.a("Block ID too large");
    }
    var a = t % r;
    var u = r - a;
    var s = Math.floor(t / r);
    var c = s + 1;
    var f = Math.floor(e / r);
    var h = f + 1;
    var l = s - f;
    var d = c - h;
    if (l !== d) {
      throw new y.a("EC bytes mismatch");
    }
    if (r !== u + a) {
      throw new y.a("RS blocks mismatch");
    }
    if (t !== (f + l) * u + (h + d) * a) {
      throw new y.a("Total bytes mismatch");
    }
    if (n < u) {
      o[0] = f;
      i[0] = l;
    } else {
      o[0] = h;
      i[0] = d;
    }
  };
  t.interleaveWithECBytes = function (e, r, n, i) {
    var a;
    var u;
    var s;
    var c;
    if (e.getSizeInBytes() !== n) {
      throw new y.a("Number of bits and data bytes does not match");
    }
    for (var f = 0, h = 0, l = 0, d = new Array(), p = 0; p < i; ++p) {
      var v = new Int32Array(1);
      var _ = new Int32Array(1);
      t.getNumDataBytesAndNumECBytesForBlockID(r, n, i, p, v, _);
      var m = v[0];
      var A = new Uint8Array(m);
      e.toBytes(8 * f, A, 0, m);
      var E = t.generateECBytes(A, _[0]);
      d.push(new g(A, E));
      h = Math.max(h, m);
      l = Math.max(l, E.length);
      f += v[0];
    }
    if (n !== f) {
      throw new y.a("Data bytes does not match offset");
    }
    var C = new o.a();
    for (p = 0; p < h; ++p) {
      try {
        for (a = void 0, I = w(d), S = I.next(), void 0; !S.done; S = I.next()) {
          var I;
          var S;
          if (p < (A = S.value.getDataBytes()).length) {
            C.appendBits(A[p], 8);
          }
        }
      } catch (b) {
        a = {
          error: b
        };
      } finally {
        try {
          if (S && !S.done && (u = I.return)) {
            u.call(I);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
    }
    for (p = 0; p < l; ++p) {
      try {
        for (s = void 0, T = w(d), O = T.next(), void 0; !O.done; O = T.next()) {
          var T;
          var O;
          if (p < (E = O.value.getErrorCorrectionBytes()).length) {
            C.appendBits(E[p], 8);
          }
        }
      } catch (R) {
        s = {
          error: R
        };
      } finally {
        try {
          if (O && !O.done && (c = T.return)) {
            c.call(T);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
    }
    if (r !== C.getSizeInBytes()) {
      throw new y.a("Interleaving error: " + r + " and " + C.getSizeInBytes() + " differ.");
    }
    return C;
  };
  t.generateECBytes = function (t, e) {
    for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++) {
      n[o] = 255 & t[o];
    }
    new u.a(a.a.QR_CODE_FIELD_256).encode(n, e);
    var i = new Uint8Array(e);
    for (o = 0; o < e; o++) {
      i[o] = n[r + o];
    }
    return i;
  };
  t.appendModeInfo = function (t, e) {
    e.appendBits(t.getBits(), 4);
  };
  t.appendLengthInfo = function (t, e, r, n) {
    var o = r.getCharacterCountBits(e);
    if (t >= 1 << o) {
      throw new y.a(t + " is bigger than " + ((1 << o) - 1));
    }
    n.appendBits(t, o);
  };
  t.appendBytes = function (e, r, n, o) {
    switch (r) {
      case s.a.NUMERIC:
        t.appendNumericBytes(e, n);
        break;
      case s.a.ALPHANUMERIC:
        t.appendAlphanumericBytes(e, n);
        break;
      case s.a.BYTE:
        t.append8BitBytes(e, n, o);
        break;
      case s.a.KANJI:
        t.appendKanjiBytes(e, n);
        break;
      default:
        throw new y.a("Invalid mode: " + r);
    }
  };
  t.getDigit = function (t) {
    return t.charCodeAt(0) - 48;
  };
  t.isDigit = function (e) {
    var r = t.getDigit(e);
    return r >= 0 && r <= 9;
  };
  t.appendNumericBytes = function (e, r) {
    for (var n = e.length, o = 0; o < n;) {
      var i = t.getDigit(e.charAt(o));
      if (o + 2 < n) {
        var a = t.getDigit(e.charAt(o + 1));
        var u = t.getDigit(e.charAt(o + 2));
        r.appendBits(100 * i + 10 * a + u, 10);
        o += 3;
      } else if (o + 1 < n) {
        a = t.getDigit(e.charAt(o + 1));
        r.appendBits(10 * i + a, 7);
        o += 2;
      } else {
        r.appendBits(i, 4);
        o++;
      }
    }
  };
  t.appendAlphanumericBytes = function (e, r) {
    for (var n = e.length, o = 0; o < n;) {
      var i = t.getAlphanumericCode(e.charCodeAt(o));
      if (-1 === i) {
        throw new y.a();
      }
      if (o + 1 < n) {
        var a = t.getAlphanumericCode(e.charCodeAt(o + 1));
        if (-1 === a) {
          throw new y.a();
        }
        r.appendBits(45 * i + a, 11);
        o += 2;
      } else {
        r.appendBits(i, 6);
        o++;
      }
    }
  };
  t.append8BitBytes = function (t, e, r) {
    var n;
    try {
      n = p.a.encode(t, r);
    } catch (u) {
      throw new y.a(u);
    }
    for (var o = 0, i = n.length; o !== i; o++) {
      var a = n[o];
      e.appendBits(a, 8);
    }
  };
  t.appendKanjiBytes = function (t, e) {
    var r;
    try {
      r = p.a.encode(t, i.a.SJIS);
    } catch (c) {
      throw new y.a(c);
    }
    for (var n = r.length, o = 0; o < n; o += 2) {
      var a = (255 & r[o]) << 8 & 4294967295 | 255 & r[o + 1];
      var u = -1;
      if (a >= 33088 && a <= 40956 ? u = a - 33088 : a >= 57408 && a <= 60351 && (u = a - 49472), -1 === u) {
        throw new y.a("Invalid byte sequence");
      }
      var s = 192 * (u >> 8) + (255 & u);
      e.appendBits(s, 13);
    }
  };
  t.appendECI = function (t, e) {
    e.appendBits(s.a.ECI.getBits(), 4);
    e.appendBits(t.getValue(), 8);
  };
  t.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]);
  t.DEFAULT_BYTE_MODE_ENCODING = i.a.UTF8.getName();
  return t;
}();
exports.a = v;