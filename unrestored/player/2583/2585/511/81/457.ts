"use strict";

var r = require("./187");
var i = require("./165");
var o = require("./166");
var a = require("./191/index");
var s = require("./456");
var u = require("./156");
var c = require("./297");
var l = require("./348");
var d = require("./594");
var f = require("./403");
var h = require("./508");
var p = require("./226");
var m = function () {
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
var b = require("./157");
var g = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[r++],
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
    return l.a.applyMaskPenaltyRule1(t) + l.a.applyMaskPenaltyRule2(t) + l.a.applyMaskPenaltyRule3(t) + l.a.applyMaskPenaltyRule4(t);
  };
  t.encode = function (e, n, a) {
    if (void 0 === a) {
      a = null;
    }
    var s = t.DEFAULT_BYTE_MODE_ENCODING;
    var l = null !== a && void 0 !== a.get(r.a.CHARACTER_SET);
    if (l) {
      s = a.get(r.a.CHARACTER_SET).toString();
    }
    var p = this.chooseMode(e, s);
    var m = new i.a();
    if (p === u.a.BYTE && (l || t.DEFAULT_BYTE_MODE_ENCODING !== s)) {
      var g = o.a.getCharacterSetECIByName(s);
      if (void 0 !== g) {
        this.appendECI(g, m);
      }
    }
    this.appendModeInfo(p, m);
    var v;
    var _ = new i.a();
    this.appendBytes(e, p, _, s);
    if (null !== a && void 0 !== a.get(r.a.QR_VERSION)) {
      var y = Number.parseInt(a.get(r.a.QR_VERSION).toString(), 10);
      v = c.a.getVersionForNumber(y);
      var w = this.calculateBitsNeeded(p, m, _, v);
      if (!this.willFit(w, v, n)) {
        throw new b.a("Data too big for requested version");
      }
    } else {
      v = this.recommendVersion(n, p, m, _);
    }
    var E = new i.a();
    E.appendBitArray(m);
    var O = p === u.a.BYTE ? _.getSizeInBytes() : e.length;
    this.appendLengthInfo(O, v, p, E);
    E.appendBitArray(_);
    var T = v.getECBlocksForLevel(n);
    var A = v.getTotalCodewords() - T.getTotalECCodewords();
    this.terminateBits(A, E);
    var S = this.interleaveWithECBytes(E, v.getTotalCodewords(), A, T.getNumBlocks());
    var I = new f.a();
    I.setECLevel(n);
    I.setMode(p);
    I.setVersion(v);
    var C = v.getDimensionForVersion();
    var j = new d.a(C, C);
    var M = this.chooseMaskPattern(S, n, v, j);
    I.setMaskPattern(M);
    h.a.buildMatrix(S, n, v, M, j);
    I.setMatrix(j);
    return I;
  };
  t.recommendVersion = function (t, e, n, r) {
    var i = this.calculateBitsNeeded(e, n, r, c.a.getVersionForNumber(1));
    var o = this.chooseVersion(i, t);
    var a = this.calculateBitsNeeded(e, n, r, o);
    return this.chooseVersion(a, t);
  };
  t.calculateBitsNeeded = function (t, e, n, r) {
    return e.getSize() + t.getCharacterCountBits(r) + n.getSize();
  };
  t.getAlphanumericCode = function (e) {
    return e < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[e] : -1;
  };
  t.chooseMode = function (e, n) {
    if (void 0 === n) {
      n = null;
    }
    if (o.a.SJIS.getName() === n && this.isOnlyDoubleByteKanji(e)) {
      return u.a.KANJI;
    }
    for (var r = !1, i = !1, a = 0, s = e.length; a < s; ++a) {
      var c = e.charAt(a);
      if (t.isDigit(c)) {
        r = !0;
      } else {
        if (-1 === this.getAlphanumericCode(c.charCodeAt(0))) {
          return u.a.BYTE;
        }
        i = !0;
      }
    }
    return i ? u.a.ALPHANUMERIC : r ? u.a.NUMERIC : u.a.BYTE;
  };
  t.isOnlyDoubleByteKanji = function (t) {
    var e;
    try {
      e = p.a.encode(t, o.a.SJIS);
    } catch (a) {
      return !1;
    }
    var n = e.length;
    if (n % 2 !== 0) {
      return !1;
    }
    for (var r = 0; r < n; r += 2) {
      var i = 255 & e[r];
      if ((i < 129 || i > 159) && (i < 224 || i > 235)) {
        return !1;
      }
    }
    return !0;
  };
  t.chooseMaskPattern = function (t, e, n, r) {
    for (var i = Number.MAX_SAFE_INTEGER, o = -1, a = 0; a < f.a.NUM_MASK_PATTERNS; a++) {
      h.a.buildMatrix(t, e, n, a, r);
      var s = this.calculateMaskPenalty(r);
      if (s < i) {
        i = s;
        o = a;
      }
    }
    return o;
  };
  t.chooseVersion = function (e, n) {
    for (var r = 1; r <= 40; r++) {
      var i = c.a.getVersionForNumber(r);
      if (t.willFit(e, i, n)) {
        return i;
      }
    }
    throw new b.a("Data too big");
  };
  t.willFit = function (t, e, n) {
    return e.getTotalCodewords() - e.getECBlocksForLevel(n).getTotalECCodewords() >= (t + 7) / 8;
  };
  t.terminateBits = function (t, e) {
    var n = 8 * t;
    if (e.getSize() > n) {
      throw new b.a("data bits cannot fit in the QR Code" + e.getSize() + " > " + n);
    }
    for (var r = 0; r < 4 && e.getSize() < n; ++r) {
      e.appendBit(!1);
    }
    var i = 7 & e.getSize();
    if (i > 0) {
      for (r = i; r < 8; r++) {
        e.appendBit(!1);
      }
    }
    var o = t - e.getSizeInBytes();
    for (r = 0; r < o; ++r) {
      e.appendBits(0 === (1 & r) ? 236 : 17, 8);
    }
    if (e.getSize() !== n) {
      throw new b.a("Bits size does not equal capacity");
    }
  };
  t.getNumDataBytesAndNumECBytesForBlockID = function (t, e, n, r, i, o) {
    if (r >= n) {
      throw new b.a("Block ID too large");
    }
    var a = t % n;
    var s = n - a;
    var u = Math.floor(t / n);
    var c = u + 1;
    var l = Math.floor(e / n);
    var d = l + 1;
    var f = u - l;
    var h = c - d;
    if (f !== h) {
      throw new b.a("EC bytes mismatch");
    }
    if (n !== s + a) {
      throw new b.a("RS blocks mismatch");
    }
    if (t !== (l + f) * s + (d + h) * a) {
      throw new b.a("Total bytes mismatch");
    }
    if (r < s) {
      i[0] = l;
      o[0] = f;
    } else {
      i[0] = d;
      o[0] = h;
    }
  };
  t.interleaveWithECBytes = function (e, n, r, o) {
    var a;
    var s;
    var u;
    var c;
    if (e.getSizeInBytes() !== r) {
      throw new b.a("Number of bits and data bytes does not match");
    }
    for (var l = 0, d = 0, f = 0, h = new Array(), p = 0; p < o; ++p) {
      var v = new Int32Array(1);
      var _ = new Int32Array(1);
      t.getNumDataBytesAndNumECBytesForBlockID(n, r, o, p, v, _);
      var y = v[0];
      var w = new Uint8Array(y);
      e.toBytes(8 * l, w, 0, y);
      var E = t.generateECBytes(w, _[0]);
      h.push(new m(w, E));
      d = Math.max(d, y);
      f = Math.max(f, E.length);
      l += v[0];
    }
    if (r !== l) {
      throw new b.a("Data bytes does not match offset");
    }
    var O = new i.a();
    for (p = 0; p < d; ++p) {
      try {
        for (a = void 0, T = g(h), A = T.next(), void 0; !A.done; A = T.next()) {
          var T;
          var A;
          if (p < (w = A.value.getDataBytes()).length) {
            O.appendBits(w[p], 8);
          }
        }
      } catch (C) {
        a = {
          error: C
        };
      } finally {
        try {
          if (A && !A.done && (s = T.return)) {
            s.call(T);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
    }
    for (p = 0; p < f; ++p) {
      try {
        for (u = void 0, S = g(h), I = S.next(), void 0; !I.done; I = S.next()) {
          var S;
          var I;
          if (p < (E = I.value.getErrorCorrectionBytes()).length) {
            O.appendBits(E[p], 8);
          }
        }
      } catch (j) {
        u = {
          error: j
        };
      } finally {
        try {
          if (I && !I.done && (c = S.return)) {
            c.call(S);
          }
        } finally {
          if (u) {
            throw u.error;
          }
        }
      }
    }
    if (n !== O.getSizeInBytes()) {
      throw new b.a("Interleaving error: " + n + " and " + O.getSizeInBytes() + " differ.");
    }
    return O;
  };
  t.generateECBytes = function (t, e) {
    for (var n = t.length, r = new Int32Array(n + e), i = 0; i < n; i++) {
      r[i] = 255 & t[i];
    }
    new s.a(a.a.QR_CODE_FIELD_256).encode(r, e);
    var o = new Uint8Array(e);
    for (i = 0; i < e; i++) {
      o[i] = r[n + i];
    }
    return o;
  };
  t.appendModeInfo = function (t, e) {
    e.appendBits(t.getBits(), 4);
  };
  t.appendLengthInfo = function (t, e, n, r) {
    var i = n.getCharacterCountBits(e);
    if (t >= 1 << i) {
      throw new b.a(t + " is bigger than " + ((1 << i) - 1));
    }
    r.appendBits(t, i);
  };
  t.appendBytes = function (e, n, r, i) {
    switch (n) {
      case u.a.NUMERIC:
        t.appendNumericBytes(e, r);
        break;
      case u.a.ALPHANUMERIC:
        t.appendAlphanumericBytes(e, r);
        break;
      case u.a.BYTE:
        t.append8BitBytes(e, r, i);
        break;
      case u.a.KANJI:
        t.appendKanjiBytes(e, r);
        break;
      default:
        throw new b.a("Invalid mode: " + n);
    }
  };
  t.getDigit = function (t) {
    return t.charCodeAt(0) - 48;
  };
  t.isDigit = function (e) {
    var n = t.getDigit(e);
    return n >= 0 && n <= 9;
  };
  t.appendNumericBytes = function (e, n) {
    for (var r = e.length, i = 0; i < r;) {
      var o = t.getDigit(e.charAt(i));
      if (i + 2 < r) {
        var a = t.getDigit(e.charAt(i + 1));
        var s = t.getDigit(e.charAt(i + 2));
        n.appendBits(100 * o + 10 * a + s, 10);
        i += 3;
      } else if (i + 1 < r) {
        a = t.getDigit(e.charAt(i + 1));
        n.appendBits(10 * o + a, 7);
        i += 2;
      } else {
        n.appendBits(o, 4);
        i++;
      }
    }
  };
  t.appendAlphanumericBytes = function (e, n) {
    for (var r = e.length, i = 0; i < r;) {
      var o = t.getAlphanumericCode(e.charCodeAt(i));
      if (-1 === o) {
        throw new b.a();
      }
      if (i + 1 < r) {
        var a = t.getAlphanumericCode(e.charCodeAt(i + 1));
        if (-1 === a) {
          throw new b.a();
        }
        n.appendBits(45 * o + a, 11);
        i += 2;
      } else {
        n.appendBits(o, 6);
        i++;
      }
    }
  };
  t.append8BitBytes = function (t, e, n) {
    var r;
    try {
      r = p.a.encode(t, n);
    } catch (s) {
      throw new b.a(s);
    }
    for (var i = 0, o = r.length; i !== o; i++) {
      var a = r[i];
      e.appendBits(a, 8);
    }
  };
  t.appendKanjiBytes = function (t, e) {
    var n;
    try {
      n = p.a.encode(t, o.a.SJIS);
    } catch (c) {
      throw new b.a(c);
    }
    for (var r = n.length, i = 0; i < r; i += 2) {
      var a = (255 & n[i]) << 8 & 4294967295 | 255 & n[i + 1];
      var s = -1;
      if (a >= 33088 && a <= 40956) {
        s = a - 33088;
      } else {
        if (a >= 57408 && a <= 60351) {
          s = a - 49472;
        }
      }
      if (-1 === s) {
        throw new b.a("Invalid byte sequence");
      }
      var u = 192 * (s >> 8) + (255 & s);
      e.appendBits(u, 13);
    }
  };
  t.appendECI = function (t, e) {
    e.appendBits(u.a.ECI.getBits(), 4);
    e.appendBits(t.getValue(), 8);
  };
  t.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]);
  t.DEFAULT_BYTE_MODE_ENCODING = o.a.UTF8.getName();
  return t;
}();
exports.a = v;