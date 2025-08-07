"use strict";

var r = require("./454");
var i = require("./166");
var o = require("./334");
var a = require("./126");
var s = require("./56");
var u = require("./109");
var c = require("./226");
var l = require("./156");
var d = function () {
  function t() {}
  t.decode = function (e, n, a, c) {
    var d = new r.a(e);
    var f = new u.a();
    var h = new Array();
    var p = -1;
    var m = -1;
    try {
      var b = null;
      var g = false;
      var v = undefined;
      do {
        if (d.available() < 4) {
          v = l.a.TERMINATOR;
        } else {
          var _ = d.readBits(4);
          v = l.a.forBits(_);
        }
        switch (v) {
          case l.a.TERMINATOR:
            break;
          case l.a.FNC1_FIRST_POSITION:
          case l.a.FNC1_SECOND_POSITION:
            g = true;
            break;
          case l.a.STRUCTURED_APPEND:
            if (d.available() < 16) {
              throw new s.a();
            }
            p = d.readBits(8);
            m = d.readBits(8);
            break;
          case l.a.ECI:
            var y = t.parseECIValue(d);
            if (null === (b = i.a.getCharacterSetECIByValue(y))) {
              throw new s.a();
            }
            break;
          case l.a.HANZI:
            var w = d.readBits(4),
              E = d.readBits(v.getCharacterCountBits(n));
            if (w === t.GB2312_SUBSET) {
              t.decodeHanziSegment(d, f, E);
            }
            break;
          default:
            var O = d.readBits(v.getCharacterCountBits(n));
            switch (v) {
              case l.a.NUMERIC:
                t.decodeNumericSegment(d, f, O);
                break;
              case l.a.ALPHANUMERIC:
                t.decodeAlphanumericSegment(d, f, O, g);
                break;
              case l.a.BYTE:
                t.decodeByteSegment(d, f, O, b, h, c);
                break;
              case l.a.KANJI:
                t.decodeKanjiSegment(d, f, O);
                break;
              default:
                throw new s.a();
            }
        }
      } while (v !== l.a.TERMINATOR);
    } catch (T) {
      throw new s.a();
    }
    return new o.a(e, f.toString(), 0 === h.length ? null : h, null === a ? null : a.toString(), p, m);
  };
  t.decodeHanziSegment = function (t, e, n) {
    if (13 * n > t.available()) {
      throw new s.a();
    }
    for (var r = new Uint8Array(2 * n), i = 0; n > 0;) {
      var o = t.readBits(13);
      var u = o / 96 << 8 & 4294967295 | o % 96;
      u += u < 959 ? 41377 : 42657;
      r[i] = u >> 8 & 255;
      r[i + 1] = 255 & u;
      i += 2;
      n--;
    }
    try {
      e.append(c.a.decode(r, a.a.GB2312));
    } catch (l) {
      throw new s.a(l);
    }
  };
  t.decodeKanjiSegment = function (t, e, n) {
    if (13 * n > t.available()) {
      throw new s.a();
    }
    for (var r = new Uint8Array(2 * n), i = 0; n > 0;) {
      var o = t.readBits(13);
      var u = o / 192 << 8 & 4294967295 | o % 192;
      u += u < 7936 ? 33088 : 49472;
      r[i] = u >> 8;
      r[i + 1] = u;
      i += 2;
      n--;
    }
    try {
      e.append(c.a.decode(r, a.a.SHIFT_JIS));
    } catch (l) {
      throw new s.a(l);
    }
  };
  t.decodeByteSegment = function (t, e, n, r, i, o) {
    if (8 * n > t.available()) {
      throw new s.a();
    }
    for (var u, l = new Uint8Array(n), d = 0; d < n; d++) {
      l[d] = t.readBits(8);
    }
    u = null === r ? a.a.guessEncoding(l, o) : r.getName();
    try {
      e.append(c.a.decode(l, u));
    } catch (f) {
      throw new s.a(f);
    }
    i.push(l);
  };
  t.toAlphaNumericChar = function (e) {
    if (e >= t.ALPHANUMERIC_CHARS.length) {
      throw new s.a();
    }
    return t.ALPHANUMERIC_CHARS[e];
  };
  t.decodeAlphanumericSegment = function (e, n, r, i) {
    for (var o = n.length(); r > 1;) {
      if (e.available() < 11) {
        throw new s.a();
      }
      var a = e.readBits(11);
      n.append(t.toAlphaNumericChar(Math.floor(a / 45)));
      n.append(t.toAlphaNumericChar(a % 45));
      r -= 2;
    }
    if (1 === r) {
      if (e.available() < 6) {
        throw new s.a();
      }
      n.append(t.toAlphaNumericChar(e.readBits(6)));
    }
    if (i) {
      for (var u = o; u < n.length(); u++) {
        if ("%" === n.charAt(u)) {
          if (u < n.length() - 1 && "%" === n.charAt(u + 1)) {
            n.deleteCharAt(u + 1);
          } else {
            n.setCharAt(u, String.fromCharCode(29));
          }
        }
      }
    }
  };
  t.decodeNumericSegment = function (e, n, r) {
    for (; r >= 3;) {
      if (e.available() < 10) {
        throw new s.a();
      }
      var i = e.readBits(10);
      if (i >= 1e3) {
        throw new s.a();
      }
      n.append(t.toAlphaNumericChar(Math.floor(i / 100)));
      n.append(t.toAlphaNumericChar(Math.floor(i / 10) % 10));
      n.append(t.toAlphaNumericChar(i % 10));
      r -= 3;
    }
    if (2 === r) {
      if (e.available() < 7) {
        throw new s.a();
      }
      var o = e.readBits(7);
      if (o >= 100) {
        throw new s.a();
      }
      n.append(t.toAlphaNumericChar(Math.floor(o / 10)));
      n.append(t.toAlphaNumericChar(o % 10));
    } else if (1 === r) {
      if (e.available() < 4) {
        throw new s.a();
      }
      var a = e.readBits(4);
      if (a >= 10) {
        throw new s.a();
      }
      n.append(t.toAlphaNumericChar(a));
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
    throw new s.a();
  };
  t.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  t.GB2312_SUBSET = 1;
  return t;
}();
exports.a = d;