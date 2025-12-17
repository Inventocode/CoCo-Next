/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：456
 */

"use strict"

var r = function () {
  function t(t, e, n, r, i, o, a, s, u) {
    this.a11 = t
    this.a21 = e
    this.a31 = n
    this.a12 = r
    this.a22 = i
    this.a32 = o
    this.a13 = a
    this.a23 = s
    this.a33 = u
  }
  t.quadrilateralToQuadrilateral = function (e, n, r, i, o, a, s, u, c, l, d, f, h, p, m, b) {
    var g = t.quadrilateralToSquare(e, n, r, i, o, a, s, u)
    return t.squareToQuadrilateral(c, l, d, f, h, p, m, b).times(g)
  }
  t.prototype.transformPoints = function (t) {
    for (var /* [auto-meaningful-name] */t$length = t.length, /* [auto-meaningful-name] */this$a11 = this.a11, /* [auto-meaningful-name] */this$a12 = this.a12, /* [auto-meaningful-name] */this$a13 = this.a13, /* [auto-meaningful-name] */this$a21 = this.a21, /* [auto-meaningful-name] */this$a22 = this.a22, /* [auto-meaningful-name] */this$a23 = this.a23, /* [auto-meaningful-name] */this$a31 = this.a31, /* [auto-meaningful-name] */this$a32 = this.a32, /* [auto-meaningful-name] */this$a33 = this.a33, d = 0; d < t$length; d += 2) {
      var f = t[d]
      var h = t[d + 1]
      var p = this$a13 * f + this$a23 * h + this$a33
      t[d] = (this$a11 * f + this$a21 * h + this$a31) / p
      t[d + 1] = (this$a12 * f + this$a22 * h + this$a32) / p
    }
  }
  t.prototype.transformPointsWithValues = function (t, e) {
    for (var /* [auto-meaningful-name] */this$a11 = this.a11, /* [auto-meaningful-name] */this$a12 = this.a12, /* [auto-meaningful-name] */this$a13 = this.a13, /* [auto-meaningful-name] */this$a21 = this.a21, /* [auto-meaningful-name] */this$a22 = this.a22, /* [auto-meaningful-name] */this$a23 = this.a23, /* [auto-meaningful-name] */this$a31 = this.a31, /* [auto-meaningful-name] */this$a32 = this.a32, /* [auto-meaningful-name] */this$a33 = this.a33, /* [auto-meaningful-name] */t$length = t.length, f = 0; f < t$length; f++) {
      var h = t[f]
      var p = e[f]
      var m = this$a13 * h + this$a23 * p + this$a33
      t[f] = (this$a11 * h + this$a21 * p + this$a31) / m
      e[f] = (this$a12 * h + this$a22 * p + this$a32) / m
    }
  }
  t.squareToQuadrilateral = function (e, n, r, i, o, a, s, u) {
    var c = e - r + o - s
    var l = n - i + a - u
    if (0 === c && 0 === l) {
      return new t(r - e, o - r, e, i - n, a - i, n, 0, 0, 1)
    }
    var d = r - o
    var f = s - o
    var h = i - a
    var p = u - a
    var m = d * p - f * h
    var b = (c * p - f * l) / m
    var g = (d * l - c * h) / m
    return new t(r - e + b * r, s - e + g * s, e, i - n + b * i, u - n + g * u, n, b, g, 1)
  }
  t.quadrilateralToSquare = function (e, n, r, i, o, a, s, u) {
    return t.squareToQuadrilateral(e, n, r, i, o, a, s, u).buildAdjoint()
  }
  t.prototype.buildAdjoint = function () {
    return new t(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
  }
  t.prototype.times = function (e) {
    return new t(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
  }
  return t
}()
exports.a = r
