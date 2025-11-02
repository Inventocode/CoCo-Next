/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：449
 */

"use strict"

var n = require("./73/index")
var o = require("./587")
var i = require("./118")
var a = require("./401")
var u = require("./191/index")
var s = require("./335")
var c = require("./37")
var f = require("./372")
var h = require("./105")
var l = function () {
  function t(t, e) {
    this.x = t
    this.y = e
  }
  t.prototype.toResultPoint = function () {
    return new n.a(this.getX(), this.getY())
  }
  t.prototype.getX = function () {
    return this.x
  }
  t.prototype.getY = function () {
    return this.y
  }
  return t
}()
var d = function () {
  function t(t) {
    this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799])
    this.image = t
  }
  t.prototype.detect = function () {
    return this.detectMirror(false)
  }
  t.prototype.detectMirror = function (t) {
    var e = this.getMatrixCenter()
    var r = this.getBullsEyeCorners(e)
    if (t) {
      var n = r[0]
      r[0] = r[2]
      r[2] = n
    }
    this.extractParameters(r)
    var i = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4])
    var a = this.getMatrixCornerPoints(r)
    return new o.a(i, a, this.compact, this.nbDataBlocks, this.nbLayers)
  }
  t.prototype.extractParameters = function (t) {
    if (!this.isValidPoint(t[0]) || !this.isValidPoint(t[1]) || !this.isValidPoint(t[2]) || !this.isValidPoint(t[3])) {
      throw new c.a()
    }
    var e = 2 * this.nbCenterLayers
    var r = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(t[3], t[0], e)])
    this.shift = this.getRotation(r, e)
    for (var n = 0, o = 0; o < 4; o++) {
      var i = r[(this.shift + o) % 4]
      if (this.compact) {
        n <<= 7
        n += i >> 1 & 127
      } else {
        n <<= 10
        n += (i >> 2 & 992) + (i >> 1 & 31)
      }
    }
    var a = this.getCorrectedParameterData(n, this.compact)
    if (this.compact) {
      this.nbLayers = 1 + (a >> 6)
      this.nbDataBlocks = 1 + (63 & a)
    } else {
      this.nbLayers = 1 + (a >> 11)
      this.nbDataBlocks = 1 + (2047 & a)
    }
  }
  t.prototype.getRotation = function (t, e) {
    var r = 0
    t.forEach(function (t, n, o) {
      r = (r << 3) + ((t >> e - 2 << 1) + (1 & t))
    })
    r = ((1 & r) << 11) + (r >> 1)
    for (var n = 0; n < 4; n++) {
      if (h.a.bitCount(r ^ this.EXPECTED_CORNER_BITS[n]) <= 2) {
        return n
      }
    }
    throw new c.a()
  }
  t.prototype.getCorrectedParameterData = function (t, e) {
    var r
    var n
    if (e) {
      r = 7
      n = 2
    } else {
      r = 10
      n = 4
    }
    for (var o = r - n, i = new Int32Array(r), a = r - 1; a >= 0; --a) {
      i[a] = 15 & t
      t >>= 4
    }
    try {
      new s.a(u.a.AZTEC_PARAM).decode(i, o)
    } catch (h) {
      throw new c.a()
    }
    var f = 0
    for (a = 0; a < n; a++) {
      f = (f << 4) + i[a]
    }
    return f
  }
  t.prototype.getBullsEyeCorners = function (t) {
    var e = t
    var r = t
    var o = t
    var i = t
    var a = true
    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
      var u = this.getFirstDifferent(e, a, 1, -1)
      var s = this.getFirstDifferent(r, a, 1, 1)
      var f = this.getFirstDifferent(o, a, -1, 1)
      var h = this.getFirstDifferent(i, a, -1, -1)
      if (this.nbCenterLayers > 2) {
        var l = this.distancePoint(h, u) * this.nbCenterLayers / (this.distancePoint(i, e) * (this.nbCenterLayers + 2))
        if (l < .75 || l > 1.25 || !this.isWhiteOrBlackRectangle(u, s, f, h)) {
          break
        }
      }
      e = u
      r = s
      o = f
      i = h
      a = !a
    }
    if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) {
      throw new c.a()
    }
    this.compact = 5 === this.nbCenterLayers
    var d = new n.a(e.getX() + .5, e.getY() - .5)
    var p = new n.a(r.getX() + .5, r.getY() + .5)
    var g = new n.a(o.getX() - .5, o.getY() + .5)
    var y = new n.a(i.getX() - .5, i.getY() - .5)
    return this.expandSquare([d, p, g, y], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
  }
  t.prototype.getMatrixCenter = function () {
    var t
    var e
    var r
    var n
    try {
      t = (f = new a.a(this.image).detect())[0]
      e = f[1]
      r = f[2]
      n = f[3]
    } catch (h) {
      var o = this.image.getWidth() / 2
      var u = this.image.getHeight() / 2
      t = this.getFirstDifferent(new l(o + 7, u - 7), false, 1, -1).toResultPoint()
      e = this.getFirstDifferent(new l(o + 7, u + 7), false, 1, 1).toResultPoint()
      r = this.getFirstDifferent(new l(o - 7, u + 7), false, -1, 1).toResultPoint()
      n = this.getFirstDifferent(new l(o - 7, u - 7), false, -1, -1).toResultPoint()
    }
    var s = i.a.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)
    var c = i.a.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4)
    try {
      var f
      t = (f = new a.a(this.image, 15, s, c).detect())[0]
      e = f[1]
      r = f[2]
      n = f[3]
    } catch (h) {
      t = this.getFirstDifferent(new l(s + 7, c - 7), false, 1, -1).toResultPoint()
      e = this.getFirstDifferent(new l(s + 7, c + 7), false, 1, 1).toResultPoint()
      r = this.getFirstDifferent(new l(s - 7, c + 7), false, -1, 1).toResultPoint()
      n = this.getFirstDifferent(new l(s - 7, c - 7), false, -1, -1).toResultPoint()
    }
    s = i.a.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)
    c = i.a.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4)
    return new l(s, c)
  }
  t.prototype.getMatrixCornerPoints = function (t) {
    return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
  }
  t.prototype.sampleGrid = function (t, e, r, n, o) {
    var i = f.a.getInstance()
    var a = this.getDimension()
    var u = a / 2 - this.nbCenterLayers
    var s = a / 2 + this.nbCenterLayers
    return i.sampleGrid(t, a, a, u, u, s, u, s, s, u, s, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), o.getX(), o.getY())
  }
  t.prototype.sampleLine = function (t, e, r) {
    for (var n = 0, o = this.distanceResultPoint(t, e), a = o / r, u = t.getX(), s = t.getY(), c = a * (e.getX() - t.getX()) / o, f = a * (e.getY() - t.getY()) / o, h = 0; h < r; h++) {
      if (this.image.get(i.a.round(u + h * c), i.a.round(s + h * f))) {
        n |= 1 << r - h - 1
      }
    }
    return n
  }
  t.prototype.isWhiteOrBlackRectangle = function (t, e, r, n) {
    t = new l(t.getX() - 3, t.getY() + 3)
    e = new l(e.getX() - 3, e.getY() - 3)
    r = new l(r.getX() + 3, r.getY() - 3)
    n = new l(n.getX() + 3, n.getY() + 3)
    var o = this.getColor(n, t)
    if (0 === o) {
      return false
    }
    var i = this.getColor(t, e)
    return i === o && (i = this.getColor(e, r)) === o && (i = this.getColor(r, n)) === o
  }
  t.prototype.getColor = function (t, e) {
    for (var r = this.distancePoint(t, e), n = (e.getX() - t.getX()) / r, o = (e.getY() - t.getY()) / r, a = 0, u = t.getX(), s = t.getY(), c = this.image.get(t.getX(), t.getY()), f = Math.ceil(r), h = 0; h < f; h++) {
      u += n
      s += o
      if (this.image.get(i.a.round(u), i.a.round(s)) !== c) {
        a++
      }
    }
    var l = a / r
    return l > .1 && l < .9 ? 0 : l <= .1 === c ? 1 : -1
  }
  t.prototype.getFirstDifferent = function (t, e, r, n) {
    for (var o = t.getX() + r, i = t.getY() + n; this.isValid(o, i) && this.image.get(o, i) === e;) {
      o += r
      i += n
    }
    for (o -= r, i -= n; this.isValid(o, i) && this.image.get(o, i) === e;) {
      o += r
    }
    for (o -= r; this.isValid(o, i) && this.image.get(o, i) === e;) {
      i += n
    }
    return new l(o, i -= n)
  }
  t.prototype.expandSquare = function (t, e, r) {
    var o = r / (2 * e)
    var i = t[0].getX() - t[2].getX()
    var a = t[0].getY() - t[2].getY()
    var u = (t[0].getX() + t[2].getX()) / 2
    var s = (t[0].getY() + t[2].getY()) / 2
    var c = new n.a(u + o * i, s + o * a)
    var f = new n.a(u - o * i, s - o * a)
    i = t[1].getX() - t[3].getX()
    a = t[1].getY() - t[3].getY()
    u = (t[1].getX() + t[3].getX()) / 2
    s = (t[1].getY() + t[3].getY()) / 2
    return [c, new n.a(u + o * i, s + o * a), f, new n.a(u - o * i, s - o * a)]
  }
  t.prototype.isValid = function (t, e) {
    return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight()
  }
  t.prototype.isValidPoint = function (t) {
    var e = i.a.round(t.getX())
    var r = i.a.round(t.getY())
    return this.isValid(e, r)
  }
  t.prototype.distancePoint = function (t, e) {
    return i.a.distance(t.getX(), t.getY(), e.getX(), e.getY())
  }
  t.prototype.distanceResultPoint = function (t, e) {
    return i.a.distance(t.getX(), t.getY(), e.getX(), e.getY())
  }
  t.prototype.getDimension = function () {
    return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (h.a.truncDivision(this.nbLayers - 4, 8) + 1) + 15
  }
  return t
}()
exports.a = d
