"use strict";

var r = require("../74");
var i = require("../124");
var o = require("../150");
var a = require("../169");
var s = require("../73/index");
var u = require("../170");
var c = require("../37");
var l = require("../56");
var d = function () {
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
var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.decodeRowStringBuffer = "";
    return e;
  }
  d(e, t);
  e.findStartGuardPattern = function (t) {
    for (var n, r = !1, i = 0, o = Int32Array.from([0, 0, 0]); !r;) {
      o = Int32Array.from([0, 0, 0]);
      var a = (n = e.findGuardPattern(t, i, !1, this.START_END_PATTERN, o))[0];
      var s = a - ((i = n[1]) - a);
      if (s >= 0) {
        r = t.isRange(s, a, !1);
      }
    }
    return n;
  };
  e.checkChecksum = function (t) {
    return e.checkStandardUPCEANChecksum(t);
  };
  e.checkStandardUPCEANChecksum = function (t) {
    var n = t.length;
    if (0 === n) {
      return !1;
    }
    var r = parseInt(t.charAt(n - 1), 10);
    return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === r;
  };
  e.getStandardUPCEANChecksum = function (t) {
    for (var e = t.length, n = 0, r = e - 1; r >= 0; r -= 2) {
      if ((i = t.charAt(r).charCodeAt(0) - "0".charCodeAt(0)) < 0 || i > 9) {
        throw new l.a();
      }
      n += i;
    }
    n *= 3;
    for (r = e - 2; r >= 0; r -= 2) {
      var i;
      if ((i = t.charAt(r).charCodeAt(0) - "0".charCodeAt(0)) < 0 || i > 9) {
        throw new l.a();
      }
      n += i;
    }
    return (1e3 - n) % 10;
  };
  e.decodeEnd = function (t, n) {
    return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
  };
  e.findGuardPatternWithoutCounters = function (t, e, n, r) {
    return this.findGuardPattern(t, e, n, r, new Int32Array(r.length));
  };
  e.findGuardPattern = function (t, n, r, i, o) {
    for (var a = t.getSize(), s = 0, l = n = r ? t.getNextUnset(n) : t.getNextSet(n), d = i.length, f = r, h = n; h < a; h++) {
      if (t.get(h) !== f) {
        o[s]++;
      } else {
        if (s === d - 1) {
          if (u.a.patternMatchVariance(o, i, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
            return Int32Array.from([l, h]);
          }
          l += o[0] + o[1];
          for (var p = o.slice(2, o.length - 1), m = 0; m < s - 1; m++) {
            o[m] = p[m];
          }
          o[s - 1] = 0;
          o[s] = 0;
          s--;
        } else {
          s++;
        }
        o[s] = 1;
        f = !f;
      }
    }
    throw new c.a();
  };
  e.decodeDigit = function (t, n, r, i) {
    this.recordPattern(t, r, n);
    for (var o = this.MAX_AVG_VARIANCE, a = -1, s = i.length, l = 0; l < s; l++) {
      var d = i[l];
      var f = u.a.patternMatchVariance(n, d, e.MAX_INDIVIDUAL_VARIANCE);
      if (f < o) {
        o = f;
        a = l;
      }
    }
    if (a >= 0) {
      return a;
    }
    throw new c.a();
  };
  e.MAX_AVG_VARIANCE = .48;
  e.MAX_INDIVIDUAL_VARIANCE = .7;
  e.START_END_PATTERN = Int32Array.from([1, 1, 1]);
  e.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]);
  e.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
  e.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
  return e;
}(u.a);
var h = function (t) {
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
var p = function () {
  function t() {
    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  t.prototype.decodeRow = function (e, n, i) {
    var a = this.decodeRowStringBuffer;
    var u = this.decodeMiddle(n, i, a);
    var c = a.toString();
    var l = t.parseExtensionString(c);
    var d = [new s.a((i[0] + i[1]) / 2, e), new s.a(u, e)];
    var f = new o.a(c, null, 0, d, r.a.UPC_EAN_EXTENSION, new Date().getTime());
    if (null != l) {
      f.putAllMetadata(l);
    }
    return f;
  };
  t.prototype.decodeMiddle = function (e, n, r) {
    var i;
    var o;
    var a = this.decodeMiddleCounters;
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    for (var s = e.getSize(), u = n[1], l = 0, d = 0; d < 5 && u < s; d++) {
      var p = f.decodeDigit(e, a, u, f.L_AND_G_PATTERNS);
      r += String.fromCharCode("0".charCodeAt(0) + p % 10);
      try {
        for (i = void 0, m = h(a), b = m.next(), void 0; !b.done; b = m.next()) {
          var m;
          var b;
          u += b.value;
        }
      } catch (v) {
        i = {
          error: v
        };
      } finally {
        try {
          if (b && !b.done && (o = m.return)) {
            o.call(m);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      if (p >= 10) {
        l |= 1 << 4 - d;
      }
      if (4 !== d) {
        u = e.getNextSet(u);
        u = e.getNextUnset(u);
      }
    }
    if (5 !== r.length) {
      throw new c.a();
    }
    var g = this.determineCheckDigit(l);
    if (t.extensionChecksum(r.toString()) !== g) {
      throw new c.a();
    }
    return u;
  };
  t.extensionChecksum = function (t) {
    for (var e = t.length, n = 0, r = e - 2; r >= 0; r -= 2) {
      n += t.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
    }
    n *= 3;
    for (r = e - 1; r >= 0; r -= 2) {
      n += t.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
    }
    return (n *= 3) % 10;
  };
  t.prototype.determineCheckDigit = function (t) {
    for (var e = 0; e < 10; e++) {
      if (t === this.CHECK_DIGIT_ENCODINGS[e]) {
        return e;
      }
    }
    throw new c.a();
  };
  t.parseExtensionString = function (e) {
    if (5 !== e.length) {
      return null;
    }
    var n = t.parseExtension5String(e);
    return null == n ? null : new Map([[a.a.SUGGESTED_PRICE, n]]);
  };
  t.parseExtension5String = function (t) {
    var e;
    switch (t.charAt(0)) {
      case "0":
        e = "\xa3";
        break;
      case "5":
        e = "$";
        break;
      case "9":
        switch (t) {
          case "90000":
            return null;
          case "99991":
            return "0.00";
          case "99990":
            return "Used";
        }
        e = "";
        break;
      default:
        e = "";
    }
    var n = parseInt(t.substring(1));
    var r = n % 100;
    return e + (n / 100).toString() + "." + (r < 10 ? "0" + r : r.toString());
  };
  return t;
}();
var m = function (t) {
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
var b = function () {
  function t() {
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  t.prototype.decodeRow = function (e, n, i) {
    var a = this.decodeRowStringBuffer;
    var u = this.decodeMiddle(n, i, a);
    var c = a.toString();
    var l = t.parseExtensionString(c);
    var d = [new s.a((i[0] + i[1]) / 2, e), new s.a(u, e)];
    var f = new o.a(c, null, 0, d, r.a.UPC_EAN_EXTENSION, new Date().getTime());
    if (null != l) {
      f.putAllMetadata(l);
    }
    return f;
  };
  t.prototype.decodeMiddle = function (t, e, n) {
    var r;
    var i;
    var o = this.decodeMiddleCounters;
    o[0] = 0;
    o[1] = 0;
    o[2] = 0;
    o[3] = 0;
    for (var a = t.getSize(), s = e[1], u = 0, l = 0; l < 2 && s < a; l++) {
      var d = f.decodeDigit(t, o, s, f.L_AND_G_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + d % 10);
      try {
        for (r = void 0, h = m(o), p = h.next(), void 0; !p.done; p = h.next()) {
          var h;
          var p;
          s += p.value;
        }
      } catch (b) {
        r = {
          error: b
        };
      } finally {
        try {
          if (p && !p.done && (i = h.return)) {
            i.call(h);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      if (d >= 10) {
        u |= 1 << 1 - l;
      }
      if (1 !== l) {
        s = t.getNextSet(s);
        s = t.getNextUnset(s);
      }
    }
    if (2 !== n.length) {
      throw new c.a();
    }
    if (parseInt(n.toString()) % 4 !== u) {
      throw new c.a();
    }
    return s;
  };
  t.parseExtensionString = function (t) {
    return 2 !== t.length ? null : new Map([[a.a.ISSUE_NUMBER, parseInt(t)]]);
  };
  return t;
}();
var g = function () {
  function t() {}
  t.decodeRow = function (t, e, n) {
    var r = f.findGuardPattern(e, n, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
    try {
      return new p().decodeRow(t, e, r);
    } catch (i) {
      return new b().decodeRow(t, e, r);
    }
  };
  t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
  return t;
}();
var v = require("../164");
var _ = function () {
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
var y = function (t) {
  function e() {
    var n = t.call(this) || this;
    n.decodeRowStringBuffer = "";
    e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function (t) {
      return Int32Array.from(t);
    });
    for (var r = 10; r < 20; r++) {
      for (var i = e.L_PATTERNS[r - 10], o = new Int32Array(i.length), a = 0; a < i.length; a++) {
        o[a] = i[i.length - a - 1];
      }
      e.L_AND_G_PATTERNS[r] = o;
    }
    return n;
  }
  _(e, t);
  e.prototype.decodeRow = function (t, n, u) {
    var d = e.findStartGuardPattern(n);
    var f = null == u ? null : u.get(i.a.NEED_RESULT_POINT_CALLBACK);
    if (null != f) {
      var h = new s.a((d[0] + d[1]) / 2, t);
      f.foundPossibleResultPoint(h);
    }
    var p = this.decodeMiddle(n, d, this.decodeRowStringBuffer);
    var m = p.rowOffset;
    var b = p.resultString;
    if (null != f) {
      var _ = new s.a(m, t);
      f.foundPossibleResultPoint(_);
    }
    var y = e.decodeEnd(n, m);
    if (null != f) {
      var w = new s.a((y[0] + y[1]) / 2, t);
      f.foundPossibleResultPoint(w);
    }
    var E = y[1];
    var O = E + (E - y[0]);
    if (O >= n.getSize() || !n.isRange(E, O, !1)) {
      throw new c.a();
    }
    var T = b.toString();
    if (T.length < 8) {
      throw new l.a();
    }
    if (!e.checkChecksum(T)) {
      throw new v.a();
    }
    var A = (d[1] + d[0]) / 2;
    var S = (y[1] + y[0]) / 2;
    var I = this.getBarcodeFormat();
    var C = [new s.a(A, t), new s.a(S, t)];
    var j = new o.a(T, null, 0, C, I, new Date().getTime());
    var M = 0;
    try {
      var k = g.decodeRow(t, n, y[1]);
      j.putMetadata(a.a.UPC_EAN_EXTENSION, k.getText());
      j.putAllMetadata(k.getResultMetadata());
      j.addResultPoints(k.getResultPoints());
      M = k.getText().length;
    } catch (D) {}
    var R = null == u ? null : u.get(i.a.ALLOWED_EAN_EXTENSIONS);
    if (null != R) {
      var N = !1;
      for (var x in R) if (M.toString() === x) {
        N = !0;
        break;
      }
      if (!N) {
        throw new c.a();
      }
    }
    if (!(I === r.a.EAN_13)) {
      r.a.UPC_A;
    }
    return j;
  };
  e.checkChecksum = function (t) {
    return e.checkStandardUPCEANChecksum(t);
  };
  e.checkStandardUPCEANChecksum = function (t) {
    var n = t.length;
    if (0 === n) {
      return !1;
    }
    var r = parseInt(t.charAt(n - 1), 10);
    return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === r;
  };
  e.getStandardUPCEANChecksum = function (t) {
    for (var e = t.length, n = 0, r = e - 1; r >= 0; r -= 2) {
      if ((i = t.charAt(r).charCodeAt(0) - "0".charCodeAt(0)) < 0 || i > 9) {
        throw new l.a();
      }
      n += i;
    }
    n *= 3;
    for (r = e - 2; r >= 0; r -= 2) {
      var i;
      if ((i = t.charAt(r).charCodeAt(0) - "0".charCodeAt(0)) < 0 || i > 9) {
        throw new l.a();
      }
      n += i;
    }
    return (1e3 - n) % 10;
  };
  e.decodeEnd = function (t, n) {
    return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
  };
  return e;
}(f);
exports.a = y;