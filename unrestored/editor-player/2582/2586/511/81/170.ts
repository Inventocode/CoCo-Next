/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：170
 */

"use strict";

var n = require("./165");
var o = require("./124");
var i = require("./169");
var a = require("./73/index");
var u = require("./37");
var s = function () {
  function t() {}
  t.prototype.decode = function (t, e) {
    try {
      return this.doDecode(t, e);
    } catch (d) {
      if (e && true === e.get(o.a.TRY_HARDER) && t.isRotateSupported()) {
        var r = t.rotateCounterClockwise();
        var n = this.doDecode(r, e);
        var s = n.getResultMetadata();
        var c = 270;
        if (null !== s && true === s.get(i.a.ORIENTATION)) {
          c += s.get(i.a.ORIENTATION) % 360;
        }
        n.putMetadata(i.a.ORIENTATION, c);
        var f = n.getResultPoints();
        if (null !== f) {
          for (var h = r.getHeight(), l = 0; l < f.length; l++) {
            f[l] = new a.a(h - f[l].getY() - 1, f[l].getX());
          }
        }
        return n;
      }
      throw new u.a();
    }
  };
  t.prototype.reset = function () {};
  t.prototype.doDecode = function (t, e) {
    var r;
    var s = t.getWidth();
    var c = t.getHeight();
    var f = new n.a(s);
    var h = e && true === e.get(o.a.TRY_HARDER);
    var l = Math.max(1, c >> (h ? 8 : 5));
    r = h ? c : 15;
    for (var d = Math.trunc(c / 2), p = 0; p < r; p++) {
      var g = Math.trunc((p + 1) / 2);
      var y = d + l * (0 === (1 & p) ? g : -g);
      if (y < 0 || y >= c) {
        break;
      }
      try {
        f = t.getBlackRow(y, f);
      } catch (A) {
        continue;
      }
      for (var w = function (t) {
          if (1 === t && (f.reverse(), e && true === e.get(o.a.NEED_RESULT_POINT_CALLBACK))) {
            var r = new Map();
            e.forEach(function (t, e) {
              return r.set(e, t);
            });
            r.delete(o.a.NEED_RESULT_POINT_CALLBACK);
            e = r;
          }
          try {
            var n = v.decodeRow(y, f, e);
            if (1 === t) {
              n.putMetadata(i.a.ORIENTATION, 180);
              var u = n.getResultPoints();
              if (null !== u) {
                u[0] = new a.a(s - u[0].getX() - 1, u[0].getY());
                u[1] = new a.a(s - u[1].getX() - 1, u[1].getY());
              }
            }
            return {
              value: n
            };
          } catch (c) {}
        }, v = this, _ = 0; _ < 2; _++) {
        var m = w(_);
        if ("object" === typeof m) {
          return m.value;
        }
      }
    }
    throw new u.a();
  };
  t.recordPattern = function (t, e, r) {
    for (var n = r.length, o = 0; o < n; o++) {
      r[o] = 0;
    }
    var i = t.getSize();
    if (e >= i) {
      throw new u.a();
    }
    for (var a = !t.get(e), s = 0, c = e; c < i;) {
      if (t.get(c) !== a) {
        r[s]++;
      } else {
        if (++s === n) {
          break;
        }
        r[s] = 1;
        a = !a;
      }
      c++;
    }
    if (s !== n && (s !== n - 1 || c !== i)) {
      throw new u.a();
    }
  };
  t.recordPatternInReverse = function (e, r, n) {
    for (var o = n.length, i = e.get(r); r > 0 && o >= 0;) {
      if (e.get(--r) !== i) {
        o--;
        i = !i;
      }
    }
    if (o >= 0) {
      throw new u.a();
    }
    t.recordPattern(e, r + 1, n);
  };
  t.patternMatchVariance = function (t, e, r) {
    for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++) {
      o += t[a];
      i += e[a];
    }
    if (o < i) {
      return Number.POSITIVE_INFINITY;
    }
    var u = o / i;
    r *= u;
    for (var s = 0, c = 0; c < n; c++) {
      var f = t[c];
      var h = e[c] * u;
      var l = f > h ? f - h : h - f;
      if (l > r) {
        return Number.POSITIVE_INFINITY;
      }
      s += l;
    }
    return s / o;
  };
  return t;
}();
exports.a = s;