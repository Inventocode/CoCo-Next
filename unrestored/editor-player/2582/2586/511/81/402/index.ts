"use strict";

var n = require("../74");
var o = require("./192");
var i = require("../37");
var a = function () {
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
var u = function (t) {
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
var s = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    return e;
  }
  a(e, t);
  e.prototype.decodeMiddle = function (t, r, n) {
    var i;
    var a;
    var s;
    var c;
    var f = this.decodeMiddleCounters;
    f[0] = 0;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    for (var h = t.getSize(), l = r[1], d = 0, p = 0; p < 6 && l < h; p++) {
      var g = o.a.decodeDigit(t, f, l, o.a.L_AND_G_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + g % 10);
      try {
        for (i = void 0, y = u(f), w = y.next(), void 0; !w.done; w = y.next()) {
          var y;
          var w;
          l += w.value;
        }
      } catch (m) {
        i = {
          error: m
        };
      } finally {
        try {
          if (w && !w.done && (a = y.return)) {
            a.call(y);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      if (g >= 10) {
        d |= 1 << 5 - p;
      }
    }
    n = e.determineFirstDigit(n, d);
    l = o.a.findGuardPattern(t, l, !0, o.a.MIDDLE_PATTERN, new Int32Array(o.a.MIDDLE_PATTERN.length).fill(0))[1];
    for (p = 0; p < 6 && l < h; p++) {
      g = o.a.decodeDigit(t, f, l, o.a.L_PATTERNS);
      n += String.fromCharCode("0".charCodeAt(0) + g);
      try {
        for (s = void 0, v = u(f), _ = v.next(), void 0; !_.done; _ = v.next()) {
          var v;
          var _;
          l += _.value;
        }
      } catch (A) {
        s = {
          error: A
        };
      } finally {
        try {
          if (_ && !_.done && (c = v.return)) {
            c.call(v);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
    }
    return {
      rowOffset: l,
      resultString: n
    };
  };
  e.prototype.getBarcodeFormat = function () {
    return n.a.EAN_13;
  };
  e.determineFirstDigit = function (t, e) {
    for (var r = 0; r < 10; r++) {
      if (e === this.FIRST_DIGIT_ENCODINGS[r]) {
        return t = String.fromCharCode("0".charCodeAt(0) + r) + t;
      }
    }
    throw new i.a();
  };
  e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
  return e;
}(o.a);
exports.a = s;