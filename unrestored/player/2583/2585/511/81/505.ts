/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：505
 */

"use strict";

var r = require("./74");
var i = require("./124");
var o = require("./56");
var a = require("./37");
var s = require("./150");
var u = require("./73/index");
var c = require("./109");
var l = require("./117");
var d = require("./170");
var f = function () {
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
          t = undefined;
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
var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.narrowLineWidth = -1;
    return e;
  }
  f(e, t);
  e.prototype.decodeRow = function (t, n, a) {
    var l;
    var d;
    var f = this.decodeStart(n);
    var p = this.decodeEnd(n);
    var m = new c.a();
    e.decodeMiddle(n, f[1], p[0], m);
    var b = m.toString();
    var g = null;
    if (null != a) {
      g = a.get(i.a.ALLOWED_LENGTHS);
    }
    if (null == g) {
      g = e.DEFAULT_ALLOWED_LENGTHS;
    }
    var v = b.length;
    var _ = false;
    var y = 0;
    try {
      for (var w = h(g), E = w.next(); !E.done; E = w.next()) {
        var O = E.value;
        if (v === O) {
          _ = true;
          break;
        }
        if (O > y) {
          y = O;
        }
      }
    } catch (A) {
      l = {
        error: A
      };
    } finally {
      try {
        if (E && !E.done && (d = w.return)) {
          d.call(w);
        }
      } finally {
        if (l) {
          throw l.error;
        }
      }
    }
    if (!_ && v > y) {
      _ = true;
    }
    if (!_) {
      throw new o.a();
    }
    var T = [new u.a(f[1], t), new u.a(p[0], t)];
    return new s.a(b, null, 0, T, r.a.ITF, new Date().getTime());
  };
  e.decodeMiddle = function (t, n, r, i) {
    var o = new Int32Array(10);
    var a = new Int32Array(5);
    var s = new Int32Array(5);
    for (o.fill(0), a.fill(0), s.fill(0); n < r;) {
      d.a.recordPattern(t, n, o);
      for (var u = 0; u < 5; u++) {
        var c = 2 * u;
        a[u] = o[c];
        s[u] = o[c + 1];
      }
      var l = e.decodeDigit(a);
      i.append(l.toString());
      l = this.decodeDigit(s);
      i.append(l.toString());
      o.forEach(function (t) {
        n += t;
      });
    }
  };
  e.prototype.decodeStart = function (t) {
    var n = e.skipWhiteSpace(t);
    var r = e.findGuardPattern(t, n, e.START_PATTERN);
    this.narrowLineWidth = (r[1] - r[0]) / 4;
    this.validateQuietZone(t, r[0]);
    return r;
  };
  e.prototype.validateQuietZone = function (t, e) {
    var n = 10 * this.narrowLineWidth;
    n = n < e ? n : e;
    for (var r = e - 1; n > 0 && r >= 0 && !t.get(r); r--) {
      n--;
    }
    if (0 !== n) {
      throw new a.a();
    }
  };
  e.skipWhiteSpace = function (t) {
    var e = t.getSize();
    var n = t.getNextSet(0);
    if (n === e) {
      throw new a.a();
    }
    return n;
  };
  e.prototype.decodeEnd = function (t) {
    t.reverse();
    try {
      var n = e.skipWhiteSpace(t);
      var r = undefined;
      try {
        r = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[0]);
      } catch (o) {
        if (o instanceof a.a) {
          r = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[1]);
        }
      }
      this.validateQuietZone(t, r[0]);
      var i = r[0];
      r[0] = t.getSize() - r[1];
      r[1] = t.getSize() - i;
      return r;
    } finally {
      t.reverse();
    }
  };
  e.findGuardPattern = function (t, n, r) {
    var i = r.length;
    var o = new Int32Array(i);
    var s = t.getSize();
    var u = false;
    var c = 0;
    var f = n;
    o.fill(0);
    for (var h = n; h < s; h++) {
      if (t.get(h) !== u) {
        o[c]++;
      } else {
        if (c === i - 1) {
          if (d.a.patternMatchVariance(o, r, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
            return [f, h];
          }
          f += o[0] + o[1];
          l.a.arraycopy(o, 2, o, 0, c - 1);
          o[c - 1] = 0;
          o[c] = 0;
          c--;
        } else {
          c++;
        }
        o[c] = 1;
        u = !u;
      }
    }
    throw new a.a();
  };
  e.decodeDigit = function (t) {
    for (var n = e.MAX_AVG_VARIANCE, r = -1, i = e.PATTERNS.length, o = 0; o < i; o++) {
      var s = e.PATTERNS[o];
      var u = d.a.patternMatchVariance(t, s, e.MAX_INDIVIDUAL_VARIANCE);
      if (u < n) {
        n = u;
        r = o;
      } else {
        if (u === n) {
          r = -1;
        }
      }
    }
    if (r >= 0) {
      return r % 10;
    }
    throw new a.a();
  };
  e.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])];
  e.MAX_AVG_VARIANCE = .38;
  e.MAX_INDIVIDUAL_VARIANCE = .5;
  e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
  e.START_PATTERN = Int32Array.from([1, 1, 1, 1]);
  e.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])];
  return e;
}(d.a);
exports.a = p;