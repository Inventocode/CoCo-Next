"use strict";

var n = require("./74");
var o = require("./164");
var i = require("./56");
var a = require("./37");
var u = require("./170");
var s = require("./150");
var c = require("./73/index");
var f = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r];
      }
    })(e, r);
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r);
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
var h = function (t) {
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
var l = function (t) {
  function e(e, r) {
    if (void 0 === e) {
      e = !1;
    }
    if (void 0 === r) {
      r = !1;
    }
    var n = t.call(this) || this;
    n.usingCheckDigit = e;
    n.extendedMode = r;
    n.decodeRowResult = "";
    n.counters = new Int32Array(9);
    return n;
  }
  f(e, t);
  e.prototype.decodeRow = function (t, r, i) {
    var u;
    var f;
    var l;
    var d;
    var p = this.counters;
    p.fill(0);
    this.decodeRowResult = "";
    var g;
    var y;
    var w = e.findAsteriskPattern(r, p);
    var v = r.getNextSet(w[1]);
    var _ = r.getSize();
    do {
      e.recordPattern(r, v, p);
      var m = e.toNarrowWidePattern(p);
      if (m < 0) {
        throw new a.a();
      }
      g = e.patternToChar(m);
      this.decodeRowResult += g;
      y = v;
      try {
        for (u = void 0, A = h(p), E = A.next(), void 0; !E.done; E = A.next()) {
          var A;
          var E;
          v += E.value;
        }
      } catch (M) {
        u = {
          error: M
        };
      } finally {
        try {
          if (E && !E.done && (f = A.return)) {
            f.call(A);
          }
        } finally {
          if (u) {
            throw u.error;
          }
        }
      }
      v = r.getNextSet(v);
    } while ("*" !== g);
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var C;
    var I = 0;
    try {
      for (var S = h(p), T = S.next(); !T.done; T = S.next()) {
        I += T.value;
      }
    } catch (P) {
      l = {
        error: P
      };
    } finally {
      try {
        if (T && !T.done && (d = S.return)) {
          d.call(S);
        }
      } finally {
        if (l) {
          throw l.error;
        }
      }
    }
    if (v !== _ && 2 * (v - y - I) < I) {
      throw new a.a();
    }
    if (this.usingCheckDigit) {
      for (var O = this.decodeRowResult.length - 1, b = 0, R = 0; R < O; R++) {
        b += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(R));
      }
      if (this.decodeRowResult.charAt(O) !== e.ALPHABET_STRING.charAt(b % 43)) {
        throw new o.a();
      }
      this.decodeRowResult = this.decodeRowResult.substring(0, O);
    }
    if (0 === this.decodeRowResult.length) {
      throw new a.a();
    }
    C = this.extendedMode ? e.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
    var N = (w[1] + w[0]) / 2;
    var D = y + I / 2;
    return new s.a(C, null, 0, [new c.a(N, t), new c.a(D, t)], n.a.CODE_39, new Date().getTime());
  };
  e.findAsteriskPattern = function (t, r) {
    for (var n = t.getSize(), o = t.getNextSet(0), i = 0, u = o, s = !1, c = r.length, f = o; f < n; f++) {
      if (t.get(f) !== s) {
        r[i]++;
      } else {
        if (i === c - 1) {
          if (this.toNarrowWidePattern(r) === e.ASTERISK_ENCODING && t.isRange(Math.max(0, u - Math.floor((f - u) / 2)), u, !1)) {
            return [u, f];
          }
          u += r[0] + r[1];
          r.copyWithin(0, 2, 2 + i - 1);
          r[i - 1] = 0;
          r[i] = 0;
          i--;
        } else {
          i++;
        }
        r[i] = 1;
        s = !s;
      }
    }
    throw new a.a();
  };
  e.toNarrowWidePattern = function (t) {
    var e;
    var r;
    var n;
    var o = t.length;
    var i = 0;
    do {
      var a = 2147483647;
      try {
        for (e = void 0, u = h(t), s = u.next(), void 0; !s.done; s = u.next()) {
          var u;
          var s;
          if ((d = s.value) < a && d > i) {
            a = d;
          }
        }
      } catch (p) {
        e = {
          error: p
        };
      } finally {
        try {
          if (s && !s.done && (r = u.return)) {
            r.call(u);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      i = a;
      n = 0;
      for (var c = 0, f = 0, l = 0; l < o; l++) {
        if ((d = t[l]) > i) {
          f |= 1 << o - 1 - l;
          n++;
          c += d;
        }
      }
      if (3 === n) {
        for (l = 0; l < o && n > 0; l++) {
          var d;
          if ((d = t[l]) > i && (n--, 2 * d >= c)) {
            return -1;
          }
        }
        return f;
      }
    } while (n > 3);
    return -1;
  };
  e.patternToChar = function (t) {
    for (var r = 0; r < e.CHARACTER_ENCODINGS.length; r++) {
      if (e.CHARACTER_ENCODINGS[r] === t) {
        return e.ALPHABET_STRING.charAt(r);
      }
    }
    if (t === e.ASTERISK_ENCODING) {
      return "*";
    }
    throw new a.a();
  };
  e.decodeExtended = function (t) {
    for (var e = t.length, r = "", n = 0; n < e; n++) {
      var o = t.charAt(n);
      if ("+" === o || "$" === o || "%" === o || "/" === o) {
        var a = t.charAt(n + 1);
        var u = "\u0000";
        switch (o) {
          case "+":
            if (!(a >= "A" && a <= "Z")) {
              throw new i.a();
            }
            u = String.fromCharCode(a.charCodeAt(0) + 32);
            break;
          case "$":
            if (!(a >= "A" && a <= "Z")) {
              throw new i.a();
            }
            u = String.fromCharCode(a.charCodeAt(0) - 64);
            break;
          case "%":
            if (a >= "A" && a <= "E") {
              u = String.fromCharCode(a.charCodeAt(0) - 38);
            } else if (a >= "F" && a <= "J") {
              u = String.fromCharCode(a.charCodeAt(0) - 11);
            } else if (a >= "K" && a <= "O") {
              u = String.fromCharCode(a.charCodeAt(0) + 16);
            } else if (a >= "P" && a <= "T") {
              u = String.fromCharCode(a.charCodeAt(0) + 43);
            } else if ("U" === a) {
              u = "\u0000";
            } else if ("V" === a) {
              u = "@";
            } else if ("W" === a) {
              u = "`";
            } else {
              if ("X" !== a && "Y" !== a && "Z" !== a) {
                throw new i.a();
              }
              u = "";
            }
            break;
          case "/":
            if (a >= "A" && a <= "O") {
              u = String.fromCharCode(a.charCodeAt(0) - 32);
            } else {
              if ("Z" !== a) {
                throw new i.a();
              }
              u = ":";
            }
        }
        r += u;
        n++;
      } else {
        r += o;
      }
    }
    return r;
  };
  e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
  e.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42];
  e.ASTERISK_ENCODING = 148;
  return e;
}(u.a);
exports.a = l;