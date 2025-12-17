/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：459
 */

"use strict"

var n = require("./338")
var o = require("./102")
var i = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var r = e && t[e]
  var n = 0
  if (r) {
    return r.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined
        }
        return {
          value: t && t[n++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var a = function () {
  function t(t) {
    this.errorCorrectionLevel = n.a.forBits(t >> 3 & 3)
    this.dataMask = 7 & t
  }
  t.numBitsDiffering = function (t, e) {
    return o.a.bitCount(t ^ e)
  }
  t.decodeFormatInformation = function (e, r) {
    var n = t.doDecodeFormatInformation(e, r)
    return null !== n ? n : t.doDecodeFormatInformation(e ^ t.FORMAT_INFO_MASK_QR, r ^ t.FORMAT_INFO_MASK_QR)
  }
  t.doDecodeFormatInformation = function (e, r) {
    var n
    var /* [auto-meaningful-name] */s$return
    var /* [auto-meaningful-name] */Number$MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
    var u = 0
    try {
      for (var s = i(t.FORMAT_INFO_DECODE_LOOKUP), c = s.next(); !c.done; c = s.next()) {
        var /* [auto-meaningful-name] */c$value = c.value
        var h = c$value[0]
        if (h === e || h === r) {
          return new t(c$value[1])
        }
        var l = t.numBitsDiffering(e, h)
        if (l < Number$MAX_SAFE_INTEGER) {
          u = c$value[1]
          Number$MAX_SAFE_INTEGER = l
        }
        if (e !== r && (l = t.numBitsDiffering(r, h)) < Number$MAX_SAFE_INTEGER) {
          u = c$value[1]
          Number$MAX_SAFE_INTEGER = l
        }
      }
    } catch (d) {
      n = {
        error: d
      }
    } finally {
      try {
        if (c && !c.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    return Number$MAX_SAFE_INTEGER <= 3 ? new t(u) : null
  }
  t.prototype.getErrorCorrectionLevel = function () {
    return this.errorCorrectionLevel
  }
  t.prototype.getDataMask = function () {
    return this.dataMask
  }
  t.prototype.hashCode = function () {
    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var r = e
    return this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask
  }
  t.FORMAT_INFO_MASK_QR = 21522
  t.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])]
  return t
}()
exports.a = a
