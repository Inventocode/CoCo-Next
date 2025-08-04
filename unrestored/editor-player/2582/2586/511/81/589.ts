"use strict";

var n;
var o = require("./334");
var i = require("./454");
var a = require("./109");
var u = require("./226");
var s = require("./126");
var c = require("./56");
var f = require("./221");
!function (t) {
  t[t.PAD_ENCODE = 0] = "PAD_ENCODE";
  t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE";
  t[t.C40_ENCODE = 2] = "C40_ENCODE";
  t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE";
  t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE";
  t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE";
  t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE";
}(n || (n = {}));
var h = function () {
  function t() {}
  t.decode = function (t) {
    var e = new i.a(t);
    var r = new a.a();
    var u = new a.a();
    var s = new Array();
    var f = n.ASCII_ENCODE;
    do {
      if (f === n.ASCII_ENCODE) {
        f = this.decodeAsciiSegment(e, r, u);
      } else {
        switch (f) {
          case n.C40_ENCODE:
            this.decodeC40Segment(e, r);
            break;
          case n.TEXT_ENCODE:
            this.decodeTextSegment(e, r);
            break;
          case n.ANSIX12_ENCODE:
            this.decodeAnsiX12Segment(e, r);
            break;
          case n.EDIFACT_ENCODE:
            this.decodeEdifactSegment(e, r);
            break;
          case n.BASE256_ENCODE:
            this.decodeBase256Segment(e, r, s);
            break;
          default:
            throw new c.a();
        }
        f = n.ASCII_ENCODE;
      }
    } while (f !== n.PAD_ENCODE && e.available() > 0);
    if (u.length() > 0) {
      r.append(u.toString());
    }
    return new o.a(t, r.toString(), 0 === s.length ? null : s, null);
  };
  t.decodeAsciiSegment = function (t, e, r) {
    var o = !1;
    do {
      var i = t.readBits(8);
      if (0 === i) {
        throw new c.a();
      }
      if (i <= 128) {
        if (o) {
          i += 128;
        }
        e.append(String.fromCharCode(i - 1));
        return n.ASCII_ENCODE;
      }
      if (129 === i) {
        return n.PAD_ENCODE;
      }
      if (i <= 229) {
        var a = i - 130;
        if (a < 10) {
          e.append("0");
        }
        e.append("" + a);
      } else {
        switch (i) {
          case 230:
            return n.C40_ENCODE;
          case 231:
            return n.BASE256_ENCODE;
          case 232:
            e.append(String.fromCharCode(29));
            break;
          case 233:
          case 234:
            break;
          case 235:
            o = !0;
            break;
          case 236:
            e.append("[)>\u001e05\u001d");
            r.insert(0, "\u001e\u0004");
            break;
          case 237:
            e.append("[)>\u001e06\u001d");
            r.insert(0, "\u001e\u0004");
            break;
          case 238:
            return n.ANSIX12_ENCODE;
          case 239:
            return n.TEXT_ENCODE;
          case 240:
            return n.EDIFACT_ENCODE;
          case 241:
            break;
          default:
            if (254 !== i || 0 !== t.available()) {
              throw new c.a();
            }
        }
      }
    } while (t.available() > 0);
    return n.ASCII_ENCODE;
  };
  t.decodeC40Segment = function (t, e) {
    var r = !1;
    var n = [];
    var o = 0;
    do {
      if (8 === t.available()) {
        return;
      }
      var i = t.readBits(8);
      if (254 === i) {
        return;
      }
      this.parseTwoBytes(i, t.readBits(8), n);
      for (var a = 0; a < 3; a++) {
        var u = n[a];
        switch (o) {
          case 0:
            if (u < 3) {
              o = u + 1;
            } else {
              if (!(u < this.C40_BASIC_SET_CHARS.length)) {
                throw new c.a();
              }
              var s = this.C40_BASIC_SET_CHARS[u];
              if (r) {
                e.append(String.fromCharCode(s.charCodeAt(0) + 128));
                r = !1;
              } else {
                e.append(s);
              }
            }
            break;
          case 1:
            if (r) {
              e.append(String.fromCharCode(u + 128));
              r = !1;
            } else {
              e.append(String.fromCharCode(u));
            }
            o = 0;
            break;
          case 2:
            if (u < this.C40_SHIFT2_SET_CHARS.length) {
              s = this.C40_SHIFT2_SET_CHARS[u];
              if (r) {
                e.append(String.fromCharCode(s.charCodeAt(0) + 128));
                r = !1;
              } else {
                e.append(s);
              }
            } else {
              switch (u) {
                case 27:
                  e.append(String.fromCharCode(29));
                  break;
                case 30:
                  r = !0;
                  break;
                default:
                  throw new c.a();
              }
            }
            o = 0;
            break;
          case 3:
            if (r) {
              e.append(String.fromCharCode(u + 224));
              r = !1;
            } else {
              e.append(String.fromCharCode(u + 96));
            }
            o = 0;
            break;
          default:
            throw new c.a();
        }
      }
    } while (t.available() > 0);
  };
  t.decodeTextSegment = function (t, e) {
    var r = !1;
    var n = [];
    var o = 0;
    do {
      if (8 === t.available()) {
        return;
      }
      var i = t.readBits(8);
      if (254 === i) {
        return;
      }
      this.parseTwoBytes(i, t.readBits(8), n);
      for (var a = 0; a < 3; a++) {
        var u = n[a];
        switch (o) {
          case 0:
            if (u < 3) {
              o = u + 1;
            } else {
              if (!(u < this.TEXT_BASIC_SET_CHARS.length)) {
                throw new c.a();
              }
              var s = this.TEXT_BASIC_SET_CHARS[u];
              if (r) {
                e.append(String.fromCharCode(s.charCodeAt(0) + 128));
                r = !1;
              } else {
                e.append(s);
              }
            }
            break;
          case 1:
            if (r) {
              e.append(String.fromCharCode(u + 128));
              r = !1;
            } else {
              e.append(String.fromCharCode(u));
            }
            o = 0;
            break;
          case 2:
            if (u < this.TEXT_SHIFT2_SET_CHARS.length) {
              s = this.TEXT_SHIFT2_SET_CHARS[u];
              if (r) {
                e.append(String.fromCharCode(s.charCodeAt(0) + 128));
                r = !1;
              } else {
                e.append(s);
              }
            } else {
              switch (u) {
                case 27:
                  e.append(String.fromCharCode(29));
                  break;
                case 30:
                  r = !0;
                  break;
                default:
                  throw new c.a();
              }
            }
            o = 0;
            break;
          case 3:
            if (!(u < this.TEXT_SHIFT3_SET_CHARS.length)) {
              throw new c.a();
            }
            s = this.TEXT_SHIFT3_SET_CHARS[u];
            if (r) {
              e.append(String.fromCharCode(s.charCodeAt(0) + 128));
              r = !1;
            } else {
              e.append(s);
            }
            o = 0;
            break;
          default:
            throw new c.a();
        }
      }
    } while (t.available() > 0);
  };
  t.decodeAnsiX12Segment = function (t, e) {
    var r = [];
    do {
      if (8 === t.available()) {
        return;
      }
      var n = t.readBits(8);
      if (254 === n) {
        return;
      }
      this.parseTwoBytes(n, t.readBits(8), r);
      for (var o = 0; o < 3; o++) {
        var i = r[o];
        switch (i) {
          case 0:
            e.append("\r");
            break;
          case 1:
            e.append("*");
            break;
          case 2:
            e.append(">");
            break;
          case 3:
            e.append(" ");
            break;
          default:
            if (i < 14) {
              e.append(String.fromCharCode(i + 44));
            } else {
              if (!(i < 40)) {
                throw new c.a();
              }
              e.append(String.fromCharCode(i + 51));
            }
        }
      }
    } while (t.available() > 0);
  };
  t.parseTwoBytes = function (t, e, r) {
    var n = (t << 8) + e - 1;
    var o = Math.floor(n / 1600);
    r[0] = o;
    n -= 1600 * o;
    o = Math.floor(n / 40);
    r[1] = o;
    r[2] = n - 40 * o;
  };
  t.decodeEdifactSegment = function (t, e) {
    do {
      if (t.available() <= 16) {
        return;
      }
      for (var r = 0; r < 4; r++) {
        var n = t.readBits(6);
        if (31 === n) {
          var o = 8 - t.getBitOffset();
          return void (8 !== o && t.readBits(o));
        }
        if (0 === (32 & n)) {
          n |= 64;
        }
        e.append(String.fromCharCode(n));
      }
    } while (t.available() > 0);
  };
  t.decodeBase256Segment = function (t, e, r) {
    var n;
    var o = 1 + t.getByteOffset();
    var i = this.unrandomize255State(t.readBits(8), o++);
    if ((n = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), o++)) < 0) {
      throw new c.a();
    }
    for (var a = new Uint8Array(n), h = 0; h < n; h++) {
      if (t.available() < 8) {
        throw new c.a();
      }
      a[h] = this.unrandomize255State(t.readBits(8), o++);
    }
    r.push(a);
    try {
      e.append(u.a.decode(a, s.a.ISO88591));
    } catch (l) {
      throw new f.a("Platform does not support required encoding: " + l.message);
    }
  };
  t.unrandomize255State = function (t, e) {
    var r = t - (149 * e % 255 + 1);
    return r >= 0 ? r : r + 256;
  };
  t.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  t.C40_SHIFT2_SET_CHARS = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"];
  t.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS;
  t.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)];
  return t;
}();
exports.a = h;