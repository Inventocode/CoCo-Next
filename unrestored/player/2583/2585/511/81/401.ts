/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：401
 */

"use strict"

var r = require("./73")
var i = require("./118")
var o = require("./37")
var a = function () {
  function t(e, n, r, i) {
    this.image = e
    this.height = e.getHeight()
    this.width = e.getWidth()
    if (!(undefined !== n && null !== n)) {
      n = t.INIT_SIZE
    }
    if (!(undefined !== r && null !== r)) {
      r = e.getWidth() / 2 | 0
    }
    if (!(undefined !== i && null !== i)) {
      i = e.getHeight() / 2 | 0
    }
    var a = n / 2 | 0
    this.leftInit = r - a
    this.rightInit = r + a
    this.upInit = i - a
    this.downInit = i + a
    if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
      throw new o.a()
    }
  }
  t.prototype.detect = function () {
    for (var /* [auto-meaningful-name] */this$leftInit = this.leftInit, /* [auto-meaningful-name] */this$rightInit = this.rightInit, /* [auto-meaningful-name] */this$upInit = this.upInit, /* [auto-meaningful-name] */this$downInit = this.downInit, i = false, a = true, s = false, u = false, c = false, l = false, d = false, /* [auto-meaningful-name] */this$width = this.width, /* [auto-meaningful-name] */this$height = this.height; a;) {
      a = false
      for (var p = true; (p || !u) && this$rightInit < this$width;) {
        if (p = this.containsBlackPoint(this$upInit, this$downInit, this$rightInit, false)) {
          this$rightInit++
          a = true
          u = true
        } else {
          if (!u) {
            this$rightInit++
          }
        }
      }
      if (this$rightInit >= this$width) {
        i = true
        break
      }
      for (var m = true; (m || !c) && this$downInit < this$height;) {
        if (m = this.containsBlackPoint(this$leftInit, this$rightInit, this$downInit, true)) {
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
        i = true
        break
      }
      for (var b = true; (b || !l) && this$leftInit >= 0;) {
        if (b = this.containsBlackPoint(this$upInit, this$downInit, this$leftInit, false)) {
          this$leftInit--
          a = true
          l = true
        } else {
          if (!l) {
            this$leftInit--
          }
        }
      }
      if (this$leftInit < 0) {
        i = true
        break
      }
      for (var g = true; (g || !d) && this$upInit >= 0;) {
        if (g = this.containsBlackPoint(this$leftInit, this$rightInit, this$upInit, true)) {
          this$upInit--
          a = true
          d = true
        } else {
          if (!d) {
            this$upInit--
          }
        }
      }
      if (this$upInit < 0) {
        i = true
        break
      }
      if (a) {
        s = true
      }
    }
    if (!i && s) {
      for (var v = this$rightInit - this$leftInit, _ = null, y = 1; null === _ && y < v; y++) {
        _ = this.getBlackPointOnSegment(this$leftInit, this$downInit - y, this$leftInit + y, this$downInit)
      }
      if (null == _) {
        throw new o.a()
      }
      var w = null
      for (y = 1; null === w && y < v; y++) {
        w = this.getBlackPointOnSegment(this$leftInit, this$upInit + y, this$leftInit + y, this$upInit)
      }
      if (null == w) {
        throw new o.a()
      }
      var E = null
      for (y = 1; null === E && y < v; y++) {
        E = this.getBlackPointOnSegment(this$rightInit, this$upInit + y, this$rightInit - y, this$upInit)
      }
      if (null == E) {
        throw new o.a()
      }
      var O = null
      for (y = 1; null === O && y < v; y++) {
        O = this.getBlackPointOnSegment(this$rightInit, this$downInit - y, this$rightInit - y, this$downInit)
      }
      if (null == O) {
        throw new o.a()
      }
      return this.centerEdges(O, _, E, w)
    }
    throw new o.a()
  }
  t.prototype.getBlackPointOnSegment = function (t, e, n, o) {
    for (var a = i.a.round(i.a.distance(t, e, n, o)), s = (n - t) / a, u = (o - e) / a, /* [auto-meaningful-name] */this$image = this.image, l = 0; l < a; l++) {
      var d = i.a.round(t + l * s)
      var f = i.a.round(e + l * u)
      if (this$image.get(d, f)) {
        return new r.a(d, f)
      }
    }
    return null
  }
  t.prototype.centerEdges = function (e, n, i, o) {
    var a = e.getX()
    var s = e.getY()
    var u = n.getX()
    var c = n.getY()
    var l = i.getX()
    var d = i.getY()
    var f = o.getX()
    var h = o.getY()
    var /* [auto-meaningful-name] */t$CORR = t.CORR
    return a < this.width / 2 ? [new r.a(f - t$CORR, h + t$CORR), new r.a(u + t$CORR, c + t$CORR), new r.a(l - t$CORR, d - t$CORR), new r.a(a + t$CORR, s - t$CORR)] : [new r.a(f + t$CORR, h + t$CORR), new r.a(u + t$CORR, c - t$CORR), new r.a(l - t$CORR, d + t$CORR), new r.a(a - t$CORR, s - t$CORR)]
  }
  t.prototype.containsBlackPoint = function (t, e, n, r) {
    var /* [auto-meaningful-name] */this$image = this.image
    if (r) {
      for (var o = t; o <= e; o++) {
        if (this$image.get(o, n)) {
          return true
        }
      }
    } else {
      for (var a = t; a <= e; a++) {
        if (this$image.get(n, a)) {
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
