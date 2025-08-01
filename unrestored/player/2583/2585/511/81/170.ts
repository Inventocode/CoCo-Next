"use strict";

var r = require("./165");
var i = require("./124");
var o = require("./169");
var a = require("./73/index");
var s = require("./37");
var u = function () {
  function t() {}
  t.prototype.decode = function (t, e) {
    try {
      return this.doDecode(t, e);
    } catch (h) {
      if (e && !0 === e.get(i.a.TRY_HARDER) && t.isRotateSupported()) {
        var n = t.rotateCounterClockwise();
        var r = this.doDecode(n, e);
        var u = r.getResultMetadata();
        var c = 270;
        if (null !== u && !0 === u.get(o.a.ORIENTATION)) {
          c += u.get(o.a.ORIENTATION) % 360;
        }
        r.putMetadata(o.a.ORIENTATION, c);
        var l = r.getResultPoints();
        if (null !== l) {
          for (var d = n.getHeight(), f = 0; f < l.length; f++) {
            l[f] = new a.a(d - l[f].getY() - 1, l[f].getX());
          }
        }
        return r;
      }
      throw new s.a();
    }
  };
  t.prototype.reset = function () {};
  t.prototype.doDecode = function (t, e) {
    var n;
    var u = t.getWidth();
    var c = t.getHeight();
    var l = new r.a(u);
    var d = e && !0 === e.get(i.a.TRY_HARDER);
    var f = Math.max(1, c >> (d ? 8 : 5));
    n = d ? c : 15;
    for (var h = Math.trunc(c / 2), p = 0; p < n; p++) {
      var m = Math.trunc((p + 1) / 2);
      var b = h + f * (0 === (1 & p) ? m : -m);
      if (b < 0 || b >= c) {
        break;
      }
      try {
        l = t.getBlackRow(b, l);
      } catch (w) {
        continue;
      }
      for (var g = function (t) {
          if (1 === t && (l.reverse(), e && !0 === e.get(i.a.NEED_RESULT_POINT_CALLBACK))) {
            var n = new Map();
            e.forEach(function (t, e) {
              return n.set(e, t);
            });
            n.delete(i.a.NEED_RESULT_POINT_CALLBACK);
            e = n;
          }
          try {
            var r = v.decodeRow(b, l, e);
            if (1 === t) {
              r.putMetadata(o.a.ORIENTATION, 180);
              var s = r.getResultPoints();
              if (null !== s) {
                s[0] = new a.a(u - s[0].getX() - 1, s[0].getY());
                s[1] = new a.a(u - s[1].getX() - 1, s[1].getY());
              }
            }
            return {
              value: r
            };
          } catch (c) {}
        }, v = this, _ = 0; _ < 2; _++) {
        var y = g(_);
        if ("object" === typeof y) {
          return y.value;
        }
      }
    }
    throw new s.a();
  };
  t.recordPattern = function (t, e, n) {
    for (var r = n.length, i = 0; i < r; i++) {
      n[i] = 0;
    }
    var o = t.getSize();
    if (e >= o) {
      throw new s.a();
    }
    for (var a = !t.get(e), u = 0, c = e; c < o;) {
      if (t.get(c) !== a) {
        n[u]++;
      } else {
        if (++u === r) {
          break;
        }
        n[u] = 1;
        a = !a;
      }
      c++;
    }
    if (u !== r && (u !== r - 1 || c !== o)) {
      throw new s.a();
    }
  };
  t.recordPatternInReverse = function (e, n, r) {
    for (var i = r.length, o = e.get(n); n > 0 && i >= 0;) {
      if (e.get(--n) !== o) {
        i--;
        o = !o;
      }
    }
    if (i >= 0) {
      throw new s.a();
    }
    t.recordPattern(e, n + 1, r);
  };
  t.patternMatchVariance = function (t, e, n) {
    for (var r = t.length, i = 0, o = 0, a = 0; a < r; a++) {
      i += t[a];
      o += e[a];
    }
    if (i < o) {
      return Number.POSITIVE_INFINITY;
    }
    var s = i / o;
    n *= s;
    for (var u = 0, c = 0; c < r; c++) {
      var l = t[c];
      var d = e[c] * s;
      var f = l > d ? l - d : d - l;
      if (f > n) {
        return Number.POSITIVE_INFINITY;
      }
      u += f;
    }
    return u / i;
  };
  return t;
}();
exports.a = u;