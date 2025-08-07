"use strict";

var n = require("./454");
var o = require("./166");
var i = require("./334");
var a = require("./126");
var u = require("./56");
var s = require("./109");
var c = require("./226");
var f = require("./156");
var h = function () {
  function t() {}
  t.decode = function (e, r, a, c) {
    var h = new n.a(e);
    var l = new s.a();
    var d = new Array();
    var p = -1;
    var g = -1;
    try {
      var y = null;
      var w = false;
      var v = undefined;
      do {
        if (h.available() < 4) {
          v = f.a.TERMINATOR;
        } else {
          var _ = h.readBits(4);
          v = f.a.forBits(_);
        }
        switch (v) {
          case f.a.TERMINATOR:
            break;
          case f.a.FNC1_FIRST_POSITION:
          case f.a.FNC1_SECOND_POSITION:
            w = true;
            break;
          case f.a.STRUCTURED_APPEND:
            if (h.available() < 16) {
              throw new u.a();
            }
            p = h.readBits(8);
            g = h.readBits(8);
            break;
          case f.a.ECI:
            var m = t.parseECIValue(h);
            if (null === (y = o.a.getCharacterSetECIByValue(m))) {
              throw new u.a();
            }
            break;
          case f.a.HANZI:
            var A = h.readBits(4),
              E = h.readBits(v.getCharacterCountBits(r));
            if (A === t.GB2312_SUBSET) {
              t.decodeHanziSegment(h, l, E);
            }
            break;
          default:
            var C = h.readBits(v.getCharacterCountBits(r));
            switch (v) {
              case f.a.NUMERIC:
                t.decodeNumericSegment(h, l, C);
                break;
              case f.a.ALPHANUMERIC:
                t.decodeAlphanumericSegment(h, l, C, w);
                break;
              case f.a.BYTE:
                t.decodeByteSegment(h, l, C, y, d, c);
                break;
              case f.a.KANJI:
                t.decodeKanjiSegment(h, l, C);
                break;
              default:
                throw new u.a();
            }
        }
      } while (v !== f.a.TERMINATOR);
    } catch (I) {
      throw new u.a();
    }
    return new i.a(e, l.toString(), 0 === d.length ? null : d, null === a ? null : a.toString(), p, g);
  };
  t.decodeHanziSegment = function (t, e, r) {
    if (13 * r > t.available()) {
      throw new u.a();
    }
    for (var n = new Uint8Array(2 * r), o = 0; r > 0;) {
      var i = t.readBits(13);
      var s = i / 96 << 8 & 4294967295 | i % 96;
      s += s < 959 ? 41377 : 42657;
      n[o] = s >> 8 & 255;
      n[o + 1] = 255 & s;
      o += 2;
      r--;
    }
    try {
      e.append(c.a.decode(n, a.a.GB2312));
    } catch (f) {
      throw new u.a(f);
    }
  };
  t.decodeKanjiSegment = function (t, e, r) {
    if (13 * r > t.available()) {
      throw new u.a();
    }
    for (var n = new Uint8Array(2 * r), o = 0; r > 0;) {
      var i = t.readBits(13);
      var s = i / 192 << 8 & 4294967295 | i % 192;
      s += s < 7936 ? 33088 : 49472;
      n[o] = s >> 8;
      n[o + 1] = s;
      o += 2;
      r--;
    }
    try {
      e.append(c.a.decode(n, a.a.SHIFT_JIS));
    } catch (f) {
      throw new u.a(f);
    }
  };
  t.decodeByteSegment = function (t, e, r, n, o, i) {
    if (8 * r > t.available()) {
      throw new u.a();
    }
    for (var s, f = new Uint8Array(r), h = 0; h < r; h++) {
      f[h] = t.readBits(8);
    }
    s = null === n ? a.a.guessEncoding(f, i) : n.getName();
    try {
      e.append(c.a.decode(f, s));
    } catch (l) {
      throw new u.a(l);
    }
    o.push(f);
  };
  t.toAlphaNumericChar = function (e) {
    if (e >= t.ALPHANUMERIC_CHARS.length) {
      throw new u.a();
    }
    return t.ALPHANUMERIC_CHARS[e];
  };
  t.decodeAlphanumericSegment = function (e, r, n, o) {
    for (var i = r.length(); n > 1;) {
      if (e.available() < 11) {
        throw new u.a();
      }
      var a = e.readBits(11);
      r.append(t.toAlphaNumericChar(Math.floor(a / 45)));
      r.append(t.toAlphaNumericChar(a % 45));
      n -= 2;
    }
    if (1 === n) {
      if (e.available() < 6) {
        throw new u.a();
      }
      r.append(t.toAlphaNumericChar(e.readBits(6)));
    }
    if (o) {
      for (var s = i; s < r.length(); s++) {
        if ("%" === r.charAt(s)) {
          if (s < r.length() - 1 && "%" === r.charAt(s + 1)) {
            r.deleteCharAt(s + 1);
          } else {
            r.setCharAt(s, String.fromCharCode(29));
          }
        }
      }
    }
  };
  t.decodeNumericSegment = function (e, r, n) {
    for (; n >= 3;) {
      if (e.available() < 10) {
        throw new u.a();
      }
      var o = e.readBits(10);
      if (o >= 1e3) {
        throw new u.a();
      }
      r.append(t.toAlphaNumericChar(Math.floor(o / 100)));
      r.append(t.toAlphaNumericChar(Math.floor(o / 10) % 10));
      r.append(t.toAlphaNumericChar(o % 10));
      n -= 3;
    }
    if (2 === n) {
      if (e.available() < 7) {
        throw new u.a();
      }
      var i = e.readBits(7);
      if (i >= 100) {
        throw new u.a();
      }
      r.append(t.toAlphaNumericChar(Math.floor(i / 10)));
      r.append(t.toAlphaNumericChar(i % 10));
    } else if (1 === n) {
      if (e.available() < 4) {
        throw new u.a();
      }
      var a = e.readBits(4);
      if (a >= 10) {
        throw new u.a();
      }
      r.append(t.toAlphaNumericChar(a));
    }
  };
  t.parseECIValue = function (t) {
    var e = t.readBits(8);
    if (0 === (128 & e)) {
      return 127 & e;
    }
    if (128 === (192 & e)) {
      return (63 & e) << 8 & 4294967295 | t.readBits(8);
    }
    if (192 === (224 & e)) {
      return (31 & e) << 16 & 4294967295 | t.readBits(16);
    }
    throw new u.a();
  };
  t.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  t.GB2312_SUBSET = 1;
  return t;
}();
exports.a = h;