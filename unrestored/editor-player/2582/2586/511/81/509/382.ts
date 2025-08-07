"use strict";

var n = function (t) {
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
var o = function () {
  function t() {}
  t.getRSSvalue = function (e, r, o) {
    var i;
    var a;
    var u = 0;
    try {
      for (var s = n(e), c = s.next(); !c.done; c = s.next()) {
        u += c.value;
      }
    } catch (v) {
      i = {
        error: v
      };
    } finally {
      try {
        if (c && !c.done && (a = s.return)) {
          a.call(s);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    for (var f = 0, h = 0, l = e.length, d = 0; d < l - 1; d++) {
      var p = undefined;
      for (p = 1, h |= 1 << d; p < e[d]; p++, h &= ~(1 << d)) {
        var g = t.combins(u - p - 1, l - d - 2);
        if (o && 0 === h && u - p - (l - d - 1) >= l - d - 1) {
          g -= t.combins(u - p - (l - d), l - d - 2);
        }
        if (l - d - 1 > 1) {
          for (var y = 0, w = u - p - (l - d - 2); w > r; w--) {
            y += t.combins(u - p - w - 1, l - d - 3);
          }
          g -= y * (l - 1 - d);
        } else if (u - p > r) {
          g--;
        }
        f += g;
      }
      u -= p;
    }
    return f;
  };
  t.combins = function (t, e) {
    var r;
    var n;
    if (t - e > e) {
      n = e;
      r = t - e;
    } else {
      n = t - e;
      r = e;
    }
    for (var o = 1, i = 1, a = t; a > r; a--) {
      o *= a;
      if (i <= n) {
        o /= i;
        i++;
      }
    }
    for (; i <= n;) {
      o /= i;
      i++;
    }
    return o;
  };
  return t;
}();
exports.a = o;