/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：73
 */

"use strict"

var n = require("../118")
var o = require("./515")
var i = function () {
  function t(t, e) {
    this.x = t
    this.y = e
  }
  t.prototype.getX = function () {
    return this.x
  }
  t.prototype.getY = function () {
    return this.y
  }
  t.prototype.equals = function (e) {
    if (e instanceof t) {
      var r = e
      return this.x === r.x && this.y === r.y
    }
    return false
  }
  t.prototype.hashCode = function () {
    return 31 * o.a.floatToIntBits(this.x) + o.a.floatToIntBits(this.y)
  }
  t.prototype.toString = function () {
    return "(" + this.x + "," + this.y + ")"
  }
  t.orderBestPatterns = function (t) {
    var e
    var r
    var n
    var o = this.distance(t[0], t[1])
    var i = this.distance(t[1], t[2])
    var a = this.distance(t[0], t[2])
    if (i >= o && i >= a) {
      r = t[0]
      e = t[1]
      n = t[2]
    } else {
      if (a >= i && a >= o) {
        r = t[1]
        e = t[0]
        n = t[2]
      } else {
        r = t[2]
        e = t[0]
        n = t[1]
      }
    }
    if (this.crossProductZ(e, r, n) < 0) {
      var u = e
      e = n
      n = u
    }
    t[0] = e
    t[1] = r
    t[2] = n
  }
  t.distance = function (t, e) {
    return n.a.distance(t.x, t.y, e.x, e.y)
  }
  t.crossProductZ = function (t, e, r) {
    var n = e.x
    var o = e.y
    return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n)
  }
  return t
}()
exports.a = i
