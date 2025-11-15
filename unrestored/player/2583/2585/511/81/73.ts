/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：73
 */

"use strict"

var r = require("./118")
var i = require("./404/515")
var o = function () {
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
      var n = e
      return this.x === n.x && this.y === n.y
    }
    return false
  }
  t.prototype.hashCode = function () {
    return 31 * i.a.floatToIntBits(this.x) + i.a.floatToIntBits(this.y)
  }
  t.prototype.toString = function () {
    return "(" + this.x + "," + this.y + ")"
  }
  t.orderBestPatterns = function (t) {
    var e
    var n
    var r
    var i = this.distance(t[0], t[1])
    var o = this.distance(t[1], t[2])
    var a = this.distance(t[0], t[2])
    if (o >= i && o >= a) {
      n = t[0]
      e = t[1]
      r = t[2]
    } else {
      if (a >= o && a >= i) {
        n = t[1]
        e = t[0]
        r = t[2]
      } else {
        n = t[2]
        e = t[0]
        r = t[1]
      }
    }
    if (this.crossProductZ(e, n, r) < 0) {
      var s = e
      e = r
      r = s
    }
    t[0] = e
    t[1] = n
    t[2] = r
  }
  t.distance = function (t, e) {
    return r.a.distance(t.x, t.y, e.x, e.y)
  }
  t.crossProductZ = function (t, e, n) {
    var r = e.x
    var i = e.y
    return (n.x - r) * (t.y - i) - (n.y - i) * (t.x - r)
  }
  return t
}()
exports.a = o
