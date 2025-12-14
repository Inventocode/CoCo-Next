/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：456
 */

"use strict"

var n = function () {
  function t(t, e, r, n, o, i, a, u, s) {
    this.a11 = t
    this.a21 = e
    this.a31 = r
    this.a12 = n
    this.a22 = o
    this.a32 = i
    this.a13 = a
    this.a23 = u
    this.a33 = s
  }
  t.quadrilateralToQuadrilateral = function (e, r, n, o, i, a, u, s, c, f, h, l, d, p, g, y) {
    var w = t.quadrilateralToSquare(e, r, n, o, i, a, u, s)
    return t.squareToQuadrilateral(c, f, h, l, d, p, g, y).times(w)
  }
  t.prototype.transformPoints = function (t) {
    for (var /* [auto-meaningful-name] */t$length = t.length, /* [auto-meaningful-name] */this$a11 = this.a11, /* [auto-meaningful-name] */this$a12 = this.a12, /* [auto-meaningful-name] */this$a13 = this.a13, /* [auto-meaningful-name] */this$a21 = this.a21, /* [auto-meaningful-name] */this$a22 = this.a22, /* [auto-meaningful-name] */this$a23 = this.a23, /* [auto-meaningful-name] */this$a31 = this.a31, /* [auto-meaningful-name] */this$a32 = this.a32, /* [auto-meaningful-name] */this$a33 = this.a33, h = 0; h < t$length; h += 2) {
      var l = t[h]
      var d = t[h + 1]
      var p = this$a13 * l + this$a23 * d + this$a33
      t[h] = (this$a11 * l + this$a21 * d + this$a31) / p
      t[h + 1] = (this$a12 * l + this$a22 * d + this$a32) / p
    }
  }
  t.prototype.transformPointsWithValues = function (t, e) {
    for (var /* [auto-meaningful-name] */this$a11 = this.a11, /* [auto-meaningful-name] */this$a12 = this.a12, /* [auto-meaningful-name] */this$a13 = this.a13, /* [auto-meaningful-name] */this$a21 = this.a21, /* [auto-meaningful-name] */this$a22 = this.a22, /* [auto-meaningful-name] */this$a23 = this.a23, /* [auto-meaningful-name] */this$a31 = this.a31, /* [auto-meaningful-name] */this$a32 = this.a32, /* [auto-meaningful-name] */this$a33 = this.a33, /* [auto-meaningful-name] */t$length = t.length, l = 0; l < t$length; l++) {
      var d = t[l]
      var p = e[l]
      var g = this$a13 * d + this$a23 * p + this$a33
      t[l] = (this$a11 * d + this$a21 * p + this$a31) / g
      e[l] = (this$a12 * d + this$a22 * p + this$a32) / g
    }
  }
  t.squareToQuadrilateral = function (e, r, n, o, i, a, u, s) {
    var c = e - n + i - u
    var f = r - o + a - s
    if (0 === c && 0 === f) {
      return new t(n - e, i - n, e, o - r, a - o, r, 0, 0, 1)
    }
    var h = n - i
    var l = u - i
    var d = o - a
    var p = s - a
    var g = h * p - l * d
    var y = (c * p - l * f) / g
    var w = (h * f - c * d) / g
    return new t(n - e + y * n, u - e + w * u, e, o - r + y * o, s - r + w * s, r, y, w, 1)
  }
  t.quadrilateralToSquare = function (e, r, n, o, i, a, u, s) {
    return t.squareToQuadrilateral(e, r, n, o, i, a, u, s).buildAdjoint()
  }
  t.prototype.buildAdjoint = function () {
    return new t(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
  }
  t.prototype.times = function (e) {
    return new t(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
  }
  return t
}()
exports.a = n
