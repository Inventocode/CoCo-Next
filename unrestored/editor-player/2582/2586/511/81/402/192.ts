"use strict";

var n = require("../74");
var o = require("../124");
var i = require("../150");
var a = require("../169");
var u = require("../73/index");
var s = require("../170");
var c = require("../37");
var f = require("../56");
var h = function () {
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
var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.decodeRowStringBuffer = "";
    return e;
  }
  h(e, t);
  e.findStartGuardPattern = function (t) {
    for (var r, n = !1, o = 0, i = Int32Array.from([0, 0, 0]); !n;) {
      i = Int32Array.from([0, 0, 0]);
      var a = (r = e.findGuardPattern(t, o, !1, this.START_END_PATTERN, i))[0];
      var u = a - ((o = r[1]) - a);
      if (u >= 0) {
        n = t.isRange(u, a, !1);
      }
    }
    return r;
  };
  e.checkChecksum = function (t) {
    return e.checkStandardUPCEANChecksum(t);
  };
  e.checkStandardUPCEANChecksum = function (t) {
    var r = t.length;
    if (0 === r) {
      return !1;
    }
    var n = parseInt(t.charAt(r - 1), 10);
    return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n;
  };
  e.getStandardUPCEANChecksum = function (t) {
    for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
      if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
        throw new f.a();
      }
      r += o;
    }
    r *= 3;
    for (n = e - 2; n >= 0; n -= 2) {
      var o;
      if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
        throw new f.a();
      }
      r += o;
    }
    return (1e3 - r) % 10;
  };
  e.decodeEnd = function (t, r) {
    return e.findGuardPattern(t, r, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
  };
  e.findGuardPatternWithoutCounters = function (t, e, r, n) {
    return this.findGuardPattern(t, e, r, n, new Int32Array(n.length));
  };
  e.findGuardPattern = function (t, r, n, o, i) {
    for (var a = t.getSize(), u = 0, f = r = n ? t.getNextUnset(r) : t.getNextSet(r), h = o.length, l = n, d = r; d < a; d++) {
      if (t.get(d) !== l) {
        i[u]++;
      } else {
        if (u === h - 1) {
          if (s.a.patternMatchVariance(i, o, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
            return Int32Array.from([f, d]);
          }
          f += i[0] + i[1];
          for (var p = i.slice(2, i.length - 1), g = 0; g < u - 1; g++) {
            i[g] = p[g];
          }
          i[u - 1] = 0;
          i[u] = 0;
          u--;
        } else {
          u++;
        }
        i[u] = 1;
        l = !l;
      }
    }
    throw new c.a();
  };
  e.decodeDigit = function (t, r, n, o) {
    this.recordPattern(t, n, r);
    for (var i = this.MAX_AVG_VARIANCE, a = -1, u = o.length, f = 0; f < u; f++) {
      var h = o[f];
      var l = s.a.patternMatchVariance(r, h, e.MAX_INDIVIDUAL_VARIANCE);
      if (l < i) {
        i = l;
        a = f;
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
}(s.a);
var d = function (t) {
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
var p = function () {
  function t() {
    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  t.prototype.decodeRow = function (e, r, o) {
    var a = this.decodeRowStringBuffer;
    var s = this.decodeMiddle(r, o, a);
    var c = a.toString();
    var f = t.parseExtensionString(c);
    var h = [new u.a((o[0] + o[1]) / 2, e), new u.a(s, e)];
    var l = new i.a(c, null, 0, h, n.a.UPC_EAN_EXTENSION, new Date().getTime());
    if (null != f) {
      l.putAllMetadata(f);
    }
    return l;
  };
  t.prototype.decodeMiddle = function (e, r, n) {
    var o;
    var i;
    var a = this.decodeMiddleCounters;
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    for (var u = e.getSize(), s = r[1], f = 0, h = 0; h < 5 && s < u; h++) {
      var p = l.decodeDigit(e, a, s, l.L_AND_G_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + p % 10);
      try {
        for (o = void 0, g = d(a), y = g.next(), void 0; !y.done; y = g.next()) {
          var g;
          var y;
          s += y.value;
        }
      } catch (v) {
        o = {
          error: v
        };
      } finally {
        try {
          if (y && !y.done && (i = g.return)) {
            i.call(g);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      if (p >= 10) {
        f |= 1 << 4 - h;
      }
      if (4 !== h) {
        s = e.getNextSet(s);
        s = e.getNextUnset(s);
      }
    }
    if (5 !== n.length) {
      throw new c.a();
    }
    var w = this.determineCheckDigit(f);
    if (t.extensionChecksum(n.toString()) !== w) {
      throw new c.a();
    }
    return s;
  };
  t.extensionChecksum = function (t) {
    for (var e = t.length, r = 0, n = e - 2; n >= 0; n -= 2) {
      r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
    }
    r *= 3;
    for (n = e - 1; n >= 0; n -= 2) {
      r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
    }
    return (r *= 3) % 10;
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
    var r = t.parseExtension5String(e);
    return null == r ? null : new Map([[a.a.SUGGESTED_PRICE, r]]);
  };
  t.parseExtension5String = function (t) {
    var e;
    switch (t.charAt(0)) {
      case "0":
        e = "£";
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
    var r = parseInt(t.substring(1));
    var n = r % 100;
    return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString());
  };
  return t;
}();
var g = function (t) {
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
var y = function () {
  function t() {
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  t.prototype.decodeRow = function (e, r, o) {
    var a = this.decodeRowStringBuffer;
    var s = this.decodeMiddle(r, o, a);
    var c = a.toString();
    var f = t.parseExtensionString(c);
    var h = [new u.a((o[0] + o[1]) / 2, e), new u.a(s, e)];
    var l = new i.a(c, null, 0, h, n.a.UPC_EAN_EXTENSION, new Date().getTime());
    if (null != f) {
      l.putAllMetadata(f);
    }
    return l;
  };
  t.prototype.decodeMiddle = function (t, e, r) {
    var n;
    var o;
    var i = this.decodeMiddleCounters;
    i[0] = 0;
    i[1] = 0;
    i[2] = 0;
    i[3] = 0;
    for (var a = t.getSize(), u = e[1], s = 0, f = 0; f < 2 && u < a; f++) {
      var h = l.decodeDigit(t, i, u, l.L_AND_G_PATTERNS);
      r += String.fromCharCode("0".charCodeAt(0) + h % 10);
      try {
        for (n = void 0, d = g(i), p = d.next(), void 0; !p.done; p = d.next()) {
          var d;
          var p;
          u += p.value;
        }
      } catch (y) {
        n = {
          error: y
        };
      } finally {
        try {
          if (p && !p.done && (o = d.return)) {
            o.call(d);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      if (h >= 10) {
        s |= 1 << 1 - f;
      }
      if (1 !== f) {
        u = t.getNextSet(u);
        u = t.getNextUnset(u);
      }
    }
    if (2 !== r.length) {
      throw new c.a();
    }
    if (parseInt(r.toString()) % 4 !== s) {
      throw new c.a();
    }
    return u;
  };
  t.parseExtensionString = function (t) {
    return 2 !== t.length ? null : new Map([[a.a.ISSUE_NUMBER, parseInt(t)]]);
  };
  return t;
}();
var w = function () {
  function t() {}
  t.decodeRow = function (t, e, r) {
    var n = l.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
    try {
      return new p().decodeRow(t, e, n);
    } catch (o) {
      return new y().decodeRow(t, e, n);
    }
  };
  t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
  return t;
}();
var v = require("../164");
var _ = function () {
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
var m = function (t) {
  function e() {
    var r = t.call(this) || this;
    r.decodeRowStringBuffer = "";
    e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function (t) {
      return Int32Array.from(t);
    });
    for (var n = 10; n < 20; n++) {
      for (var o = e.L_PATTERNS[n - 10], i = new Int32Array(o.length), a = 0; a < o.length; a++) {
        i[a] = o[o.length - a - 1];
      }
      e.L_AND_G_PATTERNS[n] = i;
    }
    return r;
  }
  _(e, t);
  e.prototype.decodeRow = function (t, r, s) {
    var h = e.findStartGuardPattern(r);
    var l = null == s ? null : s.get(o.a.NEED_RESULT_POINT_CALLBACK);
    if (null != l) {
      var d = new u.a((h[0] + h[1]) / 2, t);
      l.foundPossibleResultPoint(d);
    }
    var p = this.decodeMiddle(r, h, this.decodeRowStringBuffer);
    var g = p.rowOffset;
    var y = p.resultString;
    if (null != l) {
      var _ = new u.a(g, t);
      l.foundPossibleResultPoint(_);
    }
    var m = e.decodeEnd(r, g);
    if (null != l) {
      var A = new u.a((m[0] + m[1]) / 2, t);
      l.foundPossibleResultPoint(A);
    }
    var E = m[1];
    var C = E + (E - m[0]);
    if (C >= r.getSize() || !r.isRange(E, C, !1)) {
      throw new c.a();
    }
    var I = y.toString();
    if (I.length < 8) {
      throw new f.a();
    }
    if (!e.checkChecksum(I)) {
      throw new v.a();
    }
    var S = (h[1] + h[0]) / 2;
    var T = (m[1] + m[0]) / 2;
    var O = this.getBarcodeFormat();
    var b = [new u.a(S, t), new u.a(T, t)];
    var R = new i.a(I, null, 0, b, O, new Date().getTime());
    var N = 0;
    try {
      var D = w.decodeRow(t, r, m[1]);
      R.putMetadata(a.a.UPC_EAN_EXTENSION, D.getText());
      R.putAllMetadata(D.getResultMetadata());
      R.addResultPoints(D.getResultPoints());
      N = D.getText().length;
    } catch (L) {}
    var M = null == s ? null : s.get(o.a.ALLOWED_EAN_EXTENSIONS);
    if (null != M) {
      var P = !1;
      for (var B in M) if (N.toString() === B) {
        P = !0;
        break;
      }
      if (!P) {
        throw new c.a();
      }
    }
    if (!(O === n.a.EAN_13)) {
      n.a.UPC_A;
    }
    return R;
  };
  e.checkChecksum = function (t) {
    return e.checkStandardUPCEANChecksum(t);
  };
  e.checkStandardUPCEANChecksum = function (t) {
    var r = t.length;
    if (0 === r) {
      return !1;
    }
    var n = parseInt(t.charAt(r - 1), 10);
    return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n;
  };
  e.getStandardUPCEANChecksum = function (t) {
    for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
      if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
        throw new f.a();
      }
      r += o;
    }
    r *= 3;
    for (n = e - 2; n >= 0; n -= 2) {
      var o;
      if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
        throw new f.a();
      }
      r += o;
    }
    return (1e3 - r) % 10;
  };
  e.decodeEnd = function (t, r) {
    return e.findGuardPattern(t, r, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
  };
  return e;
}(l);
exports.a = m;