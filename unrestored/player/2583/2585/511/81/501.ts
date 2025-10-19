/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：501
 */

"use strict";

var r;
var i = require("./334");
var o = require("./191/index");
var a = require("./335");
var s = require("./221");
var u = require("./56");
var c = require("./126");
var l = require("./105");
!function (t) {
  t[t.UPPER = 0] = "UPPER";
  t[t.LOWER = 1] = "LOWER";
  t[t.MIXED = 2] = "MIXED";
  t[t.DIGIT = 3] = "DIGIT";
  t[t.PUNCT = 4] = "PUNCT";
  t[t.BINARY = 5] = "BINARY";
}(r || (r = {}));
var d = function () {
  function t() {}
  t.prototype.decode = function (e) {
    this.ddata = e;
    var n = e.getBits();
    var r = this.extractBits(n);
    var o = this.correctBits(r);
    var a = t.convertBoolArrayToByteArray(o);
    var s = t.getEncodedData(o);
    var u = new i.a(a, s, null, null);
    u.setNumBits(o.length);
    return u;
  };
  t.highLevelDecode = function (t) {
    return this.getEncodedData(t);
  };
  t.getEncodedData = function (e) {
    for (var n = e.length, i = r.UPPER, o = r.UPPER, a = "", s = 0; s < n;) {
      if (o === r.BINARY) {
        if (n - s < 5) {
          break;
        }
        var u = t.readCode(e, s, 5);
        s += 5;
        if (0 === u) {
          if (n - s < 11) {
            break;
          }
          u = t.readCode(e, s, 11) + 31;
          s += 11;
        }
        for (var l = 0; l < u; l++) {
          if (n - s < 8) {
            s = n;
            break;
          }
          var d = t.readCode(e, s, 8);
          a += c.a.castAsNonUtf8Char(d);
          s += 8;
        }
        o = i;
      } else {
        var f = o === r.DIGIT ? 4 : 5;
        if (n - s < f) {
          break;
        }
        d = t.readCode(e, s, f);
        s += f;
        var h = t.getCharacter(o, d);
        if (h.startsWith("CTRL_")) {
          i = o;
          o = t.getTable(h.charAt(5));
          if ("L" === h.charAt(6)) {
            i = o;
          }
        } else {
          a += h;
          o = i;
        }
      }
    }
    return a;
  };
  t.getTable = function (t) {
    switch (t) {
      case "L":
        return r.LOWER;
      case "P":
        return r.PUNCT;
      case "M":
        return r.MIXED;
      case "D":
        return r.DIGIT;
      case "B":
        return r.BINARY;
      case "U":
      default:
        return r.UPPER;
    }
  };
  t.getCharacter = function (e, n) {
    switch (e) {
      case r.UPPER:
        return t.UPPER_TABLE[n];
      case r.LOWER:
        return t.LOWER_TABLE[n];
      case r.MIXED:
        return t.MIXED_TABLE[n];
      case r.PUNCT:
        return t.PUNCT_TABLE[n];
      case r.DIGIT:
        return t.DIGIT_TABLE[n];
      default:
        throw new s.a("Bad table");
    }
  };
  t.prototype.correctBits = function (e) {
    var n;
    var r;
    if (this.ddata.getNbLayers() <= 2) {
      r = 6;
      n = o.a.AZTEC_DATA_6;
    } else {
      if (this.ddata.getNbLayers() <= 8) {
        r = 8;
        n = o.a.AZTEC_DATA_8;
      } else {
        if (this.ddata.getNbLayers() <= 22) {
          r = 10;
          n = o.a.AZTEC_DATA_10;
        } else {
          r = 12;
          n = o.a.AZTEC_DATA_12;
        }
      }
    }
    var i = this.ddata.getNbDatablocks();
    var s = e.length / r;
    if (s < i) {
      throw new u.a();
    }
    for (var c = e.length % r, l = new Int32Array(s), d = 0; d < s; d++, c += r) {
      l[d] = t.readCode(e, c, r);
    }
    try {
      new a.a(n).decode(l, s - i);
    } catch (v) {
      throw new u.a(v);
    }
    var f = (1 << r) - 1;
    var h = 0;
    for (d = 0; d < i; d++) {
      if (0 === (b = l[d]) || b === f) {
        throw new u.a();
      }
      if (!(1 !== b && b !== f - 1)) {
        h++;
      }
    }
    var p = new Array(i * r - h);
    var m = 0;
    for (d = 0; d < i; d++) {
      var b;
      if (1 === (b = l[d]) || b === f - 1) {
        p.fill(b > 1, m, m + r - 1);
        m += r - 1;
      } else {
        for (var g = r - 1; g >= 0; --g) {
          p[m++] = 0 !== (b & 1 << g);
        }
      }
    }
    return p;
  };
  t.prototype.extractBits = function (t) {
    var e = this.ddata.isCompact();
    var n = this.ddata.getNbLayers();
    var r = (e ? 11 : 14) + 4 * n;
    var i = new Int32Array(r);
    var o = new Array(this.totalBitsInLayer(n, e));
    if (e) {
      for (var a = 0; a < i.length; a++) {
        i[a] = a;
      }
    } else {
      var s = r + 1 + 2 * l.a.truncDivision(l.a.truncDivision(r, 2) - 1, 15);
      var u = r / 2;
      var c = l.a.truncDivision(s, 2);
      for (a = 0; a < u; a++) {
        var d = a + l.a.truncDivision(a, 15);
        i[u - a - 1] = c - d - 1;
        i[u + a] = c + d + 1;
      }
    }
    a = 0;
    for (var f = 0; a < n; a++) {
      for (var h = 4 * (n - a) + (e ? 9 : 12), p = 2 * a, m = r - 1 - p, b = 0; b < h; b++) {
        for (var g = 2 * b, v = 0; v < 2; v++) {
          o[f + g + v] = t.get(i[p + v], i[p + b]);
          o[f + 2 * h + g + v] = t.get(i[p + b], i[m - v]);
          o[f + 4 * h + g + v] = t.get(i[m - v], i[m - b]);
          o[f + 6 * h + g + v] = t.get(i[m - b], i[p + v]);
        }
      }
      f += 8 * h;
    }
    return o;
  };
  t.readCode = function (t, e, n) {
    for (var r = 0, i = e; i < e + n; i++) {
      r <<= 1;
      if (t[i]) {
        r |= 1;
      }
    }
    return r;
  };
  t.readByte = function (e, n) {
    var r = e.length - n;
    return r >= 8 ? t.readCode(e, n, 8) : t.readCode(e, n, r) << 8 - r;
  };
  t.convertBoolArrayToByteArray = function (e) {
    for (var n = new Uint8Array((e.length + 7) / 8), r = 0; r < n.length; r++) {
      n[r] = t.readByte(e, 8 * r);
    }
    return n;
  };
  t.prototype.totalBitsInLayer = function (t, e) {
    return ((e ? 88 : 112) + 16 * t) * t;
  };
  t.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"];
  t.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"];
  t.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"];
  t.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"];
  t.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
  return t;
}();
exports.a = d;