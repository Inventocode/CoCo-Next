/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：505
 */

"use strict";

var n = require("./74");
var o = require("./124");
var i = require("./56");
var a = require("./37");
var u = require("./150");
var s = require("./73/index");
var c = require("./109");
var f = require("./117");
var h = require("./170");
var l = function () {
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
          t = undefined;
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
var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.narrowLineWidth = -1;
    return e;
  }
  l(e, t);
  e.prototype.decodeRow = function (t, r, a) {
    var f;
    var h;
    var l = this.decodeStart(r);
    var p = this.decodeEnd(r);
    var g = new c.a();
    e.decodeMiddle(r, l[1], p[0], g);
    var y = g.toString();
    var w = null;
    if (null != a) {
      w = a.get(o.a.ALLOWED_LENGTHS);
    }
    if (null == w) {
      w = e.DEFAULT_ALLOWED_LENGTHS;
    }
    var v = y.length;
    var _ = false;
    var m = 0;
    try {
      for (var A = d(w), E = A.next(); !E.done; E = A.next()) {
        var C = E.value;
        if (v === C) {
          _ = true;
          break;
        }
        if (C > m) {
          m = C;
        }
      }
    } catch (S) {
      f = {
        error: S
      };
    } finally {
      try {
        if (E && !E.done && (h = A.return)) {
          h.call(A);
        }
      } finally {
        if (f) {
          throw f.error;
        }
      }
    }
    if (!_ && v > m) {
      _ = true;
    }
    if (!_) {
      throw new i.a();
    }
    var I = [new s.a(l[1], t), new s.a(p[0], t)];
    return new u.a(y, null, 0, I, n.a.ITF, new Date().getTime());
  };
  e.decodeMiddle = function (t, r, n, o) {
    var i = new Int32Array(10);
    var a = new Int32Array(5);
    var u = new Int32Array(5);
    for (i.fill(0), a.fill(0), u.fill(0); r < n;) {
      h.a.recordPattern(t, r, i);
      for (var s = 0; s < 5; s++) {
        var c = 2 * s;
        a[s] = i[c];
        u[s] = i[c + 1];
      }
      var f = e.decodeDigit(a);
      o.append(f.toString());
      f = this.decodeDigit(u);
      o.append(f.toString());
      i.forEach(function (t) {
        r += t;
      });
    }
  };
  e.prototype.decodeStart = function (t) {
    var r = e.skipWhiteSpace(t);
    var n = e.findGuardPattern(t, r, e.START_PATTERN);
    this.narrowLineWidth = (n[1] - n[0]) / 4;
    this.validateQuietZone(t, n[0]);
    return n;
  };
  e.prototype.validateQuietZone = function (t, e) {
    var r = 10 * this.narrowLineWidth;
    r = r < e ? r : e;
    for (var n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) {
      r--;
    }
    if (0 !== r) {
      throw new a.a();
    }
  };
  e.skipWhiteSpace = function (t) {
    var e = t.getSize();
    var r = t.getNextSet(0);
    if (r === e) {
      throw new a.a();
    }
    return r;
  };
  e.prototype.decodeEnd = function (t) {
    t.reverse();
    try {
      var r = e.skipWhiteSpace(t);
      var n = undefined;
      try {
        n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[0]);
      } catch (i) {
        if (i instanceof a.a) {
          n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[1]);
        }
      }
      this.validateQuietZone(t, n[0]);
      var o = n[0];
      n[0] = t.getSize() - n[1];
      n[1] = t.getSize() - o;
      return n;
    } finally {
      t.reverse();
    }
  };
  e.findGuardPattern = function (t, r, n) {
    var o = n.length;
    var i = new Int32Array(o);
    var u = t.getSize();
    var s = false;
    var c = 0;
    var l = r;
    i.fill(0);
    for (var d = r; d < u; d++) {
      if (t.get(d) !== s) {
        i[c]++;
      } else {
        if (c === o - 1) {
          if (h.a.patternMatchVariance(i, n, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
            return [l, d];
          }
          l += i[0] + i[1];
          f.a.arraycopy(i, 2, i, 0, c - 1);
          i[c - 1] = 0;
          i[c] = 0;
          c--;
        } else {
          c++;
        }
        i[c] = 1;
        s = !s;
      }
    }
    throw new a.a();
  };
  e.decodeDigit = function (t) {
    for (var r = e.MAX_AVG_VARIANCE, n = -1, o = e.PATTERNS.length, i = 0; i < o; i++) {
      var u = e.PATTERNS[i];
      var s = h.a.patternMatchVariance(t, u, e.MAX_INDIVIDUAL_VARIANCE);
      if (s < r) {
        r = s;
        n = i;
      } else {
        if (s === r) {
          n = -1;
        }
      }
    }
    if (n >= 0) {
      return n % 10;
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
}(h.a);
exports.a = p;