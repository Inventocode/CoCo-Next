/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：336
 */

"use strict"

var r
var i = require("./248")
var o = require("./63")
!function (t) {
  t[t.L = 0] = "L"
  t[t.M = 1] = "M"
  t[t.Q = 2] = "Q"
  t[t.H = 3] = "H"
}(r || (r = {}))
var a = function () {
  function t(e, n, r) {
    this.value = e
    this.stringValue = n
    this.bits = r
    t.FOR_BITS.set(r, this)
    t.FOR_VALUE.set(e, this)
  }
  t.prototype.getValue = function () {
    return this.value
  }
  t.prototype.getBits = function () {
    return this.bits
  }
  t.fromString = function (e) {
    switch (e) {
      case "L":
        return t.L
      case "M":
        return t.M
      case "Q":
        return t.Q
      case "H":
        return t.H
      default:
        throw new i.a(e + "not available")
    }
  }
  t.prototype.toString = function () {
    return this.stringValue
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var n = e
    return this.value === n.value
  }
  t.forBits = function (e) {
    if (e < 0 || e >= t.FOR_BITS.size) {
      throw new o.a()
    }
    return t.FOR_BITS.get(e)
  }
  t.FOR_BITS = new Map()
  t.FOR_VALUE = new Map()
  t.L = new t(r.L, "L", 1)
  t.M = new t(r.M, "M", 0)
  t.Q = new t(r.Q, "Q", 3)
  t.H = new t(r.H, "H", 2)
  return t
}()
exports.a = a
