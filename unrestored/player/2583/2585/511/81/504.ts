"use strict";

var r = require("./74");
var i = require("./164");
var o = require("./56");
var a = require("./37");
var s = require("./170");
var u = require("./150");
var c = require("./73/index");
var l = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var d = function (t) {
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
var f = function (t) {
  function e(e, n) {
    if (void 0 === e) {
      e = !1;
    }
    if (void 0 === n) {
      n = !1;
    }
    var r = t.call(this) || this;
    r.usingCheckDigit = e;
    r.extendedMode = n;
    r.decodeRowResult = "";
    r.counters = new Int32Array(9);
    return r;
  }
  l(e, t);
  e.prototype.decodeRow = function (t, n, o) {
    var s;
    var l;
    var f;
    var h;
    var p = this.counters;
    p.fill(0);
    this.decodeRowResult = "";
    var m;
    var b;
    var g = e.findAsteriskPattern(n, p);
    var v = n.getNextSet(g[1]);
    var _ = n.getSize();
    do {
      e.recordPattern(n, v, p);
      var y = e.toNarrowWidePattern(p);
      if (y < 0) {
        throw new a.a();
      }
      m = e.patternToChar(y);
      this.decodeRowResult += m;
      b = v;
      try {
        for (s = void 0, w = d(p), E = w.next(), void 0; !E.done; E = w.next()) {
          var w;
          var E;
          v += E.value;
        }
      } catch (R) {
        s = {
          error: R
        };
      } finally {
        try {
          if (E && !E.done && (l = w.return)) {
            l.call(w);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
      v = n.getNextSet(v);
    } while ("*" !== m);
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var O;
    var T = 0;
    try {
      for (var A = d(p), S = A.next(); !S.done; S = A.next()) {
        T += S.value;
      }
    } catch (N) {
      f = {
        error: N
      };
    } finally {
      try {
        if (S && !S.done && (h = A.return)) {
          h.call(A);
        }
      } finally {
        if (f) {
          throw f.error;
        }
      }
    }
    if (v !== _ && 2 * (v - b - T) < T) {
      throw new a.a();
    }
    if (this.usingCheckDigit) {
      for (var I = this.decodeRowResult.length - 1, C = 0, j = 0; j < I; j++) {
        C += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(j));
      }
      if (this.decodeRowResult.charAt(I) !== e.ALPHABET_STRING.charAt(C % 43)) {
        throw new i.a();
      }
      this.decodeRowResult = this.decodeRowResult.substring(0, I);
    }
    if (0 === this.decodeRowResult.length) {
      throw new a.a();
    }
    O = this.extendedMode ? e.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
    var M = (g[1] + g[0]) / 2;
    var k = b + T / 2;
    return new u.a(O, null, 0, [new c.a(M, t), new c.a(k, t)], r.a.CODE_39, new Date().getTime());
  };
  e.findAsteriskPattern = function (t, n) {
    for (var r = t.getSize(), i = t.getNextSet(0), o = 0, s = i, u = !1, c = n.length, l = i; l < r; l++) {
      if (t.get(l) !== u) {
        n[o]++;
      } else {
        if (o === c - 1) {
          if (this.toNarrowWidePattern(n) === e.ASTERISK_ENCODING && t.isRange(Math.max(0, s - Math.floor((l - s) / 2)), s, !1)) {
            return [s, l];
          }
          s += n[0] + n[1];
          n.copyWithin(0, 2, 2 + o - 1);
          n[o - 1] = 0;
          n[o] = 0;
          o--;
        } else {
          o++;
        }
        n[o] = 1;
        u = !u;
      }
    }
    throw new a.a();
  };
  e.toNarrowWidePattern = function (t) {
    var e;
    var n;
    var r;
    var i = t.length;
    var o = 0;
    do {
      var a = 2147483647;
      try {
        for (e = void 0, s = d(t), u = s.next(), void 0; !u.done; u = s.next()) {
          var s;
          var u;
          if ((h = u.value) < a && h > o) {
            a = h;
          }
        }
      } catch (p) {
        e = {
          error: p
        };
      } finally {
        try {
          if (u && !u.done && (n = s.return)) {
            n.call(s);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      o = a;
      r = 0;
      for (var c = 0, l = 0, f = 0; f < i; f++) {
        if ((h = t[f]) > o) {
          l |= 1 << i - 1 - f;
          r++;
          c += h;
        }
      }
      if (3 === r) {
        for (f = 0; f < i && r > 0; f++) {
          var h;
          if ((h = t[f]) > o && (r--, 2 * h >= c)) {
            return -1;
          }
        }
        return l;
      }
    } while (r > 3);
    return -1;
  };
  e.patternToChar = function (t) {
    for (var n = 0; n < e.CHARACTER_ENCODINGS.length; n++) {
      if (e.CHARACTER_ENCODINGS[n] === t) {
        return e.ALPHABET_STRING.charAt(n);
      }
    }
    if (t === e.ASTERISK_ENCODING) {
      return "*";
    }
    throw new a.a();
  };
  e.decodeExtended = function (t) {
    for (var e = t.length, n = "", r = 0; r < e; r++) {
      var i = t.charAt(r);
      if ("+" === i || "$" === i || "%" === i || "/" === i) {
        var a = t.charAt(r + 1);
        var s = "\u0000";
        switch (i) {
          case "+":
            if (!(a >= "A" && a <= "Z")) {
              throw new o.a();
            }
            s = String.fromCharCode(a.charCodeAt(0) + 32);
            break;
          case "$":
            if (!(a >= "A" && a <= "Z")) {
              throw new o.a();
            }
            s = String.fromCharCode(a.charCodeAt(0) - 64);
            break;
          case "%":
            if (a >= "A" && a <= "E") {
              s = String.fromCharCode(a.charCodeAt(0) - 38);
            } else if (a >= "F" && a <= "J") {
              s = String.fromCharCode(a.charCodeAt(0) - 11);
            } else if (a >= "K" && a <= "O") {
              s = String.fromCharCode(a.charCodeAt(0) + 16);
            } else if (a >= "P" && a <= "T") {
              s = String.fromCharCode(a.charCodeAt(0) + 43);
            } else if ("U" === a) {
              s = "\u0000";
            } else if ("V" === a) {
              s = "@";
            } else if ("W" === a) {
              s = "`";
            } else {
              if ("X" !== a && "Y" !== a && "Z" !== a) {
                throw new o.a();
              }
              s = "";
            }
            break;
          case "/":
            if (a >= "A" && a <= "O") {
              s = String.fromCharCode(a.charCodeAt(0) - 32);
            } else {
              if ("Z" !== a) {
                throw new o.a();
              }
              s = ":";
            }
        }
        n += s;
        r++;
      } else {
        n += i;
      }
    }
    return n;
  };
  e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
  e.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42];
  e.ASTERISK_ENCODING = 148;
  return e;
}(s.a);
exports.a = f;