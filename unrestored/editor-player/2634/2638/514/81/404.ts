/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：404
 */

"use strict"

var n = require("./73")
var o = require("./116")
var i = require("./36")
var a = function () {
  function t(e, r, n, o) {
    this.image = e
    this.height = e.getHeight()
    this.width = e.getWidth()
    if (!(undefined !== r && null !== r)) {
      r = t.INIT_SIZE
    }
    if (!(undefined !== n && null !== n)) {
      n = e.getWidth() / 2 | 0
    }
    if (!(undefined !== o && null !== o)) {
      o = e.getHeight() / 2 | 0
    }
    var a = r / 2 | 0
    this.leftInit = n - a
    this.rightInit = n + a
    this.upInit = o - a
    this.downInit = o + a
    if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
      throw new i.a()
    }
  }
  t.prototype.detect = function () {
    for (var /* [auto-meaningful-name] */this$leftInit = this.leftInit, /* [auto-meaningful-name] */this$rightInit = this.rightInit, /* [auto-meaningful-name] */this$upInit = this.upInit, /* [auto-meaningful-name] */this$downInit = this.downInit, o = false, a = true, u = false, s = false, c = false, f = false, h = false, /* [auto-meaningful-name] */this$width = this.width, /* [auto-meaningful-name] */this$height = this.height; a;) {
      a = false
      for (var p = true; (p || !s) && this$rightInit < this$width;) {
        if (p = this.containsBlackPoint(this$upInit, this$downInit, this$rightInit, false)) {
          this$rightInit++
          a = true
          s = true
        } else {
          if (!s) {
            this$rightInit++
          }
        }
      }
      if (this$rightInit >= this$width) {
        o = true
        break
      }
      for (var g = true; (g || !c) && this$downInit < this$height;) {
        if (g = this.containsBlackPoint(this$leftInit, this$rightInit, this$downInit, true)) {
          this$downInit++
          a = true
          c = true
        } else {
          if (!c) {
            this$downInit++
          }
        }
      }
      if (this$downInit >= this$height) {
        o = true
        break
      }
      for (var y = true; (y || !f) && this$leftInit >= 0;) {
        if (y = this.containsBlackPoint(this$upInit, this$downInit, this$leftInit, false)) {
          this$leftInit--
          a = true
          f = true
        } else {
          if (!f) {
            this$leftInit--
          }
        }
      }
      if (this$leftInit < 0) {
        o = true
        break
      }
      for (var w = true; (w || !h) && this$upInit >= 0;) {
        if (w = this.containsBlackPoint(this$leftInit, this$rightInit, this$upInit, true)) {
          this$upInit--
          a = true
          h = true
        } else {
          if (!h) {
            this$upInit--
          }
        }
      }
      if (this$upInit < 0) {
        o = true
        break
      }
      if (a) {
        u = true
      }
    }
    if (!o && u) {
      for (var v = this$rightInit - this$leftInit, _ = null, m = 1; null === _ && m < v; m++) {
        _ = this.getBlackPointOnSegment(this$leftInit, this$downInit - m, this$leftInit + m, this$downInit)
      }
      if (null == _) {
        throw new i.a()
      }
      var A = null
      for (m = 1; null === A && m < v; m++) {
        A = this.getBlackPointOnSegment(this$leftInit, this$upInit + m, this$leftInit + m, this$upInit)
      }
      if (null == A) {
        throw new i.a()
      }
      var E = null
      for (m = 1; null === E && m < v; m++) {
        E = this.getBlackPointOnSegment(this$rightInit, this$upInit + m, this$rightInit - m, this$upInit)
      }
      if (null == E) {
        throw new i.a()
      }
      var C = null
      for (m = 1; null === C && m < v; m++) {
        C = this.getBlackPointOnSegment(this$rightInit, this$downInit - m, this$rightInit - m, this$downInit)
      }
      if (null == C) {
        throw new i.a()
      }
      return this.centerEdges(C, _, E, A)
    }
    throw new i.a()
  }
  t.prototype.getBlackPointOnSegment = function (t, e, r, i) {
    for (var a = o.a.round(o.a.distance(t, e, r, i)), u = (r - t) / a, s = (i - e) / a, /* [auto-meaningful-name] */this$image = this.image, f = 0; f < a; f++) {
      var h = o.a.round(t + f * u)
      var l = o.a.round(e + f * s)
      if (this$image.get(h, l)) {
        return new n.a(h, l)
      }
    }
    return null
  }
  t.prototype.centerEdges = function (e, r, o, i) {
    var a = e.getX()
    var u = e.getY()
    var s = r.getX()
    var c = r.getY()
    var f = o.getX()
    var h = o.getY()
    var l = i.getX()
    var d = i.getY()
    var /* [auto-meaningful-name] */t$CORR = t.CORR
    return a < this.width / 2 ? [new n.a(l - t$CORR, d + t$CORR), new n.a(s + t$CORR, c + t$CORR), new n.a(f - t$CORR, h - t$CORR), new n.a(a + t$CORR, u - t$CORR)] : [new n.a(l + t$CORR, d + t$CORR), new n.a(s + t$CORR, c - t$CORR), new n.a(f - t$CORR, h + t$CORR), new n.a(a - t$CORR, u - t$CORR)]
  }
  t.prototype.containsBlackPoint = function (t, e, r, n) {
    var /* [auto-meaningful-name] */this$image = this.image
    if (n) {
      for (var i = t; i <= e; i++) {
        if (this$image.get(i, r)) {
          return true
        }
      }
    } else {
      for (var a = t; a <= e; a++) {
        if (this$image.get(r, a)) {
          return true
        }
      }
    }
    return false
  }
  t.INIT_SIZE = 10
  t.CORR = 1
  return t
}()
exports.a = a
