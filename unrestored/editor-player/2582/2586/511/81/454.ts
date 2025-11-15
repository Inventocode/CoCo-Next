/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：454
 */

"use strict"

var n = require("./63")
var o = function () {
  function t(t) {
    this.bytes = t
    this.byteOffset = 0
    this.bitOffset = 0
  }
  t.prototype.getBitOffset = function () {
    return this.bitOffset
  }
  t.prototype.getByteOffset = function () {
    return this.byteOffset
  }
  t.prototype.readBits = function (t) {
    if (t < 1 || t > 32 || t > this.available()) {
      throw new n.a("" + t)
    }
    var e = 0
    var /* [auto-meaningful-name] */this$bitOffset = this.bitOffset
    var /* [auto-meaningful-name] */this$byteOffset = this.byteOffset
    var /* [auto-meaningful-name] */this$bytes = this.bytes
    if (this$bitOffset > 0) {
      var a = 8 - this$bitOffset
      var u = t < a ? t : a
      var s = 255 >> 8 - u << (c = a - u)
      e = (this$bytes[this$byteOffset] & s) >> c
      t -= u
      if (8 === (this$bitOffset += u)) {
        this$bitOffset = 0
        this$byteOffset++
      }
    }
    if (t > 0) {
      for (; t >= 8;) {
        e = e << 8 | 255 & this$bytes[this$byteOffset]
        this$byteOffset++
        t -= 8
      }
      if (t > 0) {
        var c
        s = 255 >> (c = 8 - t) << c
        e = e << t | (this$bytes[this$byteOffset] & s) >> c
        this$bitOffset += t
      }
    }
    this.bitOffset = this$bitOffset
    this.byteOffset = this$byteOffset
    return e
  }
  t.prototype.available = function () {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
  }
  return t
}()
exports.a = o
