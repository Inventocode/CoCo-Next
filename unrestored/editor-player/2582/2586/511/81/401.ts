"use strict";

var n = require("./73/index");
var o = require("./118");
var i = require("./37");
var a = function () {
  function t(e, r, n, o) {
    this.image = e;
    this.height = e.getHeight();
    this.width = e.getWidth();
    if (!(void 0 !== r && null !== r)) {
      r = t.INIT_SIZE;
    }
    if (!(void 0 !== n && null !== n)) {
      n = e.getWidth() / 2 | 0;
    }
    if (!(void 0 !== o && null !== o)) {
      o = e.getHeight() / 2 | 0;
    }
    var a = r / 2 | 0;
    if (this.leftInit = n - a, this.rightInit = n + a, this.upInit = o - a, this.downInit = o + a, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
      throw new i.a();
    }
  }
  t.prototype.detect = function () {
    for (var t = this.leftInit, e = this.rightInit, r = this.upInit, n = this.downInit, o = !1, a = !0, u = !1, s = !1, c = !1, f = !1, h = !1, l = this.width, d = this.height; a;) {
      a = !1;
      for (var p = !0; (p || !s) && e < l;) {
        if (p = this.containsBlackPoint(r, n, e, !1)) {
          e++;
          a = !0;
          s = !0;
        } else {
          if (!s) {
            e++;
          }
        }
      }
      if (e >= l) {
        o = !0;
        break;
      }
      for (var g = !0; (g || !c) && n < d;) {
        if (g = this.containsBlackPoint(t, e, n, !0)) {
          n++;
          a = !0;
          c = !0;
        } else {
          if (!c) {
            n++;
          }
        }
      }
      if (n >= d) {
        o = !0;
        break;
      }
      for (var y = !0; (y || !f) && t >= 0;) {
        if (y = this.containsBlackPoint(r, n, t, !1)) {
          t--;
          a = !0;
          f = !0;
        } else {
          if (!f) {
            t--;
          }
        }
      }
      if (t < 0) {
        o = !0;
        break;
      }
      for (var w = !0; (w || !h) && r >= 0;) {
        if (w = this.containsBlackPoint(t, e, r, !0)) {
          r--;
          a = !0;
          h = !0;
        } else {
          if (!h) {
            r--;
          }
        }
      }
      if (r < 0) {
        o = !0;
        break;
      }
      if (a) {
        u = !0;
      }
    }
    if (!o && u) {
      for (var v = e - t, _ = null, m = 1; null === _ && m < v; m++) {
        _ = this.getBlackPointOnSegment(t, n - m, t + m, n);
      }
      if (null == _) {
        throw new i.a();
      }
      var A = null;
      for (m = 1; null === A && m < v; m++) {
        A = this.getBlackPointOnSegment(t, r + m, t + m, r);
      }
      if (null == A) {
        throw new i.a();
      }
      var E = null;
      for (m = 1; null === E && m < v; m++) {
        E = this.getBlackPointOnSegment(e, r + m, e - m, r);
      }
      if (null == E) {
        throw new i.a();
      }
      var C = null;
      for (m = 1; null === C && m < v; m++) {
        C = this.getBlackPointOnSegment(e, n - m, e - m, n);
      }
      if (null == C) {
        throw new i.a();
      }
      return this.centerEdges(C, _, E, A);
    }
    throw new i.a();
  };
  t.prototype.getBlackPointOnSegment = function (t, e, r, i) {
    for (var a = o.a.round(o.a.distance(t, e, r, i)), u = (r - t) / a, s = (i - e) / a, c = this.image, f = 0; f < a; f++) {
      var h = o.a.round(t + f * u);
      var l = o.a.round(e + f * s);
      if (c.get(h, l)) {
        return new n.a(h, l);
      }
    }
    return null;
  };
  t.prototype.centerEdges = function (e, r, o, i) {
    var a = e.getX();
    var u = e.getY();
    var s = r.getX();
    var c = r.getY();
    var f = o.getX();
    var h = o.getY();
    var l = i.getX();
    var d = i.getY();
    var p = t.CORR;
    return a < this.width / 2 ? [new n.a(l - p, d + p), new n.a(s + p, c + p), new n.a(f - p, h - p), new n.a(a + p, u - p)] : [new n.a(l + p, d + p), new n.a(s + p, c - p), new n.a(f - p, h + p), new n.a(a - p, u - p)];
  };
  t.prototype.containsBlackPoint = function (t, e, r, n) {
    var o = this.image;
    if (n) {
      for (var i = t; i <= e; i++) {
        if (o.get(i, r)) {
          return !0;
        }
      }
    } else {
      for (var a = t; a <= e; a++) {
        if (o.get(r, a)) {
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