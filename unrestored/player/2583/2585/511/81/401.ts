"use strict";

var r = require("./73/index");
var i = require("./118");
var o = require("./37");
var a = function () {
  function t(e, n, r, i) {
    this.image = e;
    this.height = e.getHeight();
    this.width = e.getWidth();
    if (!(void 0 !== n && null !== n)) {
      n = t.INIT_SIZE;
    }
    if (!(void 0 !== r && null !== r)) {
      r = e.getWidth() / 2 | 0;
    }
    if (!(void 0 !== i && null !== i)) {
      i = e.getHeight() / 2 | 0;
    }
    var a = n / 2 | 0;
    this.leftInit = r - a;
    this.rightInit = r + a;
    this.upInit = i - a;
    this.downInit = i + a;
    if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
      throw new o.a();
    }
  }
  t.prototype.detect = function () {
    for (var t = this.leftInit, e = this.rightInit, n = this.upInit, r = this.downInit, i = !1, a = !0, s = !1, u = !1, c = !1, l = !1, d = !1, f = this.width, h = this.height; a;) {
      a = !1;
      for (var p = !0; (p || !u) && e < f;) {
        if (p = this.containsBlackPoint(n, r, e, !1)) {
          e++;
          a = !0;
          u = !0;
        } else {
          if (!u) {
            e++;
          }
        }
      }
      if (e >= f) {
        i = !0;
        break;
      }
      for (var m = !0; (m || !c) && r < h;) {
        if (m = this.containsBlackPoint(t, e, r, !0)) {
          r++;
          a = !0;
          c = !0;
        } else {
          if (!c) {
            r++;
          }
        }
      }
      if (r >= h) {
        i = !0;
        break;
      }
      for (var b = !0; (b || !l) && t >= 0;) {
        if (b = this.containsBlackPoint(n, r, t, !1)) {
          t--;
          a = !0;
          l = !0;
        } else {
          if (!l) {
            t--;
          }
        }
      }
      if (t < 0) {
        i = !0;
        break;
      }
      for (var g = !0; (g || !d) && n >= 0;) {
        if (g = this.containsBlackPoint(t, e, n, !0)) {
          n--;
          a = !0;
          d = !0;
        } else {
          if (!d) {
            n--;
          }
        }
      }
      if (n < 0) {
        i = !0;
        break;
      }
      if (a) {
        s = !0;
      }
    }
    if (!i && s) {
      for (var v = e - t, _ = null, y = 1; null === _ && y < v; y++) {
        _ = this.getBlackPointOnSegment(t, r - y, t + y, r);
      }
      if (null == _) {
        throw new o.a();
      }
      var w = null;
      for (y = 1; null === w && y < v; y++) {
        w = this.getBlackPointOnSegment(t, n + y, t + y, n);
      }
      if (null == w) {
        throw new o.a();
      }
      var E = null;
      for (y = 1; null === E && y < v; y++) {
        E = this.getBlackPointOnSegment(e, n + y, e - y, n);
      }
      if (null == E) {
        throw new o.a();
      }
      var O = null;
      for (y = 1; null === O && y < v; y++) {
        O = this.getBlackPointOnSegment(e, r - y, e - y, r);
      }
      if (null == O) {
        throw new o.a();
      }
      return this.centerEdges(O, _, E, w);
    }
    throw new o.a();
  };
  t.prototype.getBlackPointOnSegment = function (t, e, n, o) {
    for (var a = i.a.round(i.a.distance(t, e, n, o)), s = (n - t) / a, u = (o - e) / a, c = this.image, l = 0; l < a; l++) {
      var d = i.a.round(t + l * s);
      var f = i.a.round(e + l * u);
      if (c.get(d, f)) {
        return new r.a(d, f);
      }
    }
    return null;
  };
  t.prototype.centerEdges = function (e, n, i, o) {
    var a = e.getX();
    var s = e.getY();
    var u = n.getX();
    var c = n.getY();
    var l = i.getX();
    var d = i.getY();
    var f = o.getX();
    var h = o.getY();
    var p = t.CORR;
    return a < this.width / 2 ? [new r.a(f - p, h + p), new r.a(u + p, c + p), new r.a(l - p, d - p), new r.a(a + p, s - p)] : [new r.a(f + p, h + p), new r.a(u + p, c - p), new r.a(l - p, d + p), new r.a(a - p, s - p)];
  };
  t.prototype.containsBlackPoint = function (t, e, n, r) {
    var i = this.image;
    if (r) {
      for (var o = t; o <= e; o++) {
        if (i.get(o, n)) {
          return !0;
        }
      }
    } else {
      for (var a = t; a <= e; a++) {
        if (i.get(n, a)) {
          return !0;
        }
      }
    }
    return !1;
  };
  t.INIT_SIZE = 10;
  t.CORR = 1;
  return t;
}();
exports.a = a;