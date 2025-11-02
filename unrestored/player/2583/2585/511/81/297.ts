/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：297
 */

"use strict"

var r = require("./180")
var i = require("./455")
var o = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var a = function () {
  function t(t) {
    for (var e = [], n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n]
    }
    this.ecCodewordsPerBlock = t
    this.ecBlocks = e
  }
  t.prototype.getECCodewordsPerBlock = function () {
    return this.ecCodewordsPerBlock
  }
  t.prototype.getNumBlocks = function () {
    var t
    var /* [auto-meaningful-name] */i$return
    var n = 0
    var this$ecBlocks = this.ecBlocks
    try {
      for (var i = o(this$ecBlocks), a = i.next(); !a.done; a = i.next()) {
        n += a.value.getCount()
      }
    } catch (s) {
      t = {
        error: s
      }
    } finally {
      try {
        if (a && !a.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return n
  }
  t.prototype.getTotalECCodewords = function () {
    return this.ecCodewordsPerBlock * this.getNumBlocks()
  }
  t.prototype.getECBlocks = function () {
    return this.ecBlocks
  }
  return t
}()
var s = function () {
  function t(t, e) {
    this.count = t
    this.dataCodewords = e
  }
  t.prototype.getCount = function () {
    return this.count
  }
  t.prototype.getDataCodewords = function () {
    return this.dataCodewords
  }
  return t
}()
var u = require("./56")
var c = require("./63")
var l = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var d = function () {
  function t(t, e) {
    for (var n, /* [auto-meaningful-name] */c$return, i = [], o = 2; o < arguments.length; o++) {
      i[o - 2] = arguments[o]
    }
    this.versionNumber = t
    this.alignmentPatternCenters = e
    this.ecBlocks = i
    var a = 0
    var s = i[0].getECCodewordsPerBlock()
    var u = i[0].getECBlocks()
    try {
      for (var c = l(u), d = c.next(); !d.done; d = c.next()) {
        var d$value = d.value
        a += d$value.getCount() * (d$value.getDataCodewords() + s)
      }
    } catch (h) {
      n = {
        error: h
      }
    } finally {
      try {
        if (d && !d.done && (c$return = c.return)) {
          c$return.call(c)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    this.totalCodewords = a
  }
  t.prototype.getVersionNumber = function () {
    return this.versionNumber
  }
  t.prototype.getAlignmentPatternCenters = function () {
    return this.alignmentPatternCenters
  }
  t.prototype.getTotalCodewords = function () {
    return this.totalCodewords
  }
  t.prototype.getDimensionForVersion = function () {
    return 17 + 4 * this.versionNumber
  }
  t.prototype.getECBlocksForLevel = function (t) {
    return this.ecBlocks[t.getValue()]
  }
  t.getProvisionalVersionForDimension = function (t) {
    if (t % 4 !== 1) {
      throw new u.a()
    }
    try {
      return this.getVersionForNumber((t - 17) / 4)
    } catch (e) {
      throw new u.a()
    }
  }
  t.getVersionForNumber = function (e) {
    if (e < 1 || e > 40) {
      throw new c.a()
    }
    return t.VERSIONS[e - 1]
  }
  t.decodeVersionInformation = function (e) {
    for (var number$MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER, r = 0, o = 0; o < t.VERSION_DECODE_INFO.length; o++) {
      var a = t.VERSION_DECODE_INFO[o]
      if (a === e) {
        return t.getVersionForNumber(o + 7)
      }
      var s = i.a.numBitsDiffering(e, a)
      if (s < number$MAX_SAFE_INTEGER) {
        r = o + 7
        number$MAX_SAFE_INTEGER = s
      }
    }
    return number$MAX_SAFE_INTEGER <= 3 ? t.getVersionForNumber(r) : null
  }
  t.prototype.buildFunctionPattern = function () {
    var t = this.getDimensionForVersion()
    var e = new r.a(t)
    e.setRegion(0, 0, 9, 9)
    e.setRegion(t - 8, 0, 8, 9)
    e.setRegion(0, t - 8, 9, 8)
    for (var this$alignmentPatternCenters$length = this.alignmentPatternCenters.length, i = 0; i < this$alignmentPatternCenters$length; i++) {
      for (var o = this.alignmentPatternCenters[i] - 2, a = 0; a < this$alignmentPatternCenters$length; a++) {
        if (!(0 === i && (0 === a || a === this$alignmentPatternCenters$length - 1) || i === this$alignmentPatternCenters$length - 1 && 0 === a)) {
          e.setRegion(this.alignmentPatternCenters[a] - 2, o, 5, 5)
        }
      }
    }
    e.setRegion(6, 9, 1, t - 17)
    e.setRegion(9, 6, t - 17, 1)
    if (this.versionNumber > 6) {
      e.setRegion(t - 11, 0, 3, 6)
      e.setRegion(0, t - 11, 6, 3)
    }
    return e
  }
  t.prototype.toString = function () {
    return "" + this.versionNumber
  }
  t.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017])
  t.VERSIONS = [new t(1, new Int32Array(0), new a(7, new s(1, 19)), new a(10, new s(1, 16)), new a(13, new s(1, 13)), new a(17, new s(1, 9))), new t(2, Int32Array.from([6, 18]), new a(10, new s(1, 34)), new a(16, new s(1, 28)), new a(22, new s(1, 22)), new a(28, new s(1, 16))), new t(3, Int32Array.from([6, 22]), new a(15, new s(1, 55)), new a(26, new s(1, 44)), new a(18, new s(2, 17)), new a(22, new s(2, 13))), new t(4, Int32Array.from([6, 26]), new a(20, new s(1, 80)), new a(18, new s(2, 32)), new a(26, new s(2, 24)), new a(16, new s(4, 9))), new t(5, Int32Array.from([6, 30]), new a(26, new s(1, 108)), new a(24, new s(2, 43)), new a(18, new s(2, 15), new s(2, 16)), new a(22, new s(2, 11), new s(2, 12))), new t(6, Int32Array.from([6, 34]), new a(18, new s(2, 68)), new a(16, new s(4, 27)), new a(24, new s(4, 19)), new a(28, new s(4, 15))), new t(7, Int32Array.from([6, 22, 38]), new a(20, new s(2, 78)), new a(18, new s(4, 31)), new a(18, new s(2, 14), new s(4, 15)), new a(26, new s(4, 13), new s(1, 14))), new t(8, Int32Array.from([6, 24, 42]), new a(24, new s(2, 97)), new a(22, new s(2, 38), new s(2, 39)), new a(22, new s(4, 18), new s(2, 19)), new a(26, new s(4, 14), new s(2, 15))), new t(9, Int32Array.from([6, 26, 46]), new a(30, new s(2, 116)), new a(22, new s(3, 36), new s(2, 37)), new a(20, new s(4, 16), new s(4, 17)), new a(24, new s(4, 12), new s(4, 13))), new t(10, Int32Array.from([6, 28, 50]), new a(18, new s(2, 68), new s(2, 69)), new a(26, new s(4, 43), new s(1, 44)), new a(24, new s(6, 19), new s(2, 20)), new a(28, new s(6, 15), new s(2, 16))), new t(11, Int32Array.from([6, 30, 54]), new a(20, new s(4, 81)), new a(30, new s(1, 50), new s(4, 51)), new a(28, new s(4, 22), new s(4, 23)), new a(24, new s(3, 12), new s(8, 13))), new t(12, Int32Array.from([6, 32, 58]), new a(24, new s(2, 92), new s(2, 93)), new a(22, new s(6, 36), new s(2, 37)), new a(26, new s(4, 20), new s(6, 21)), new a(28, new s(7, 14), new s(4, 15))), new t(13, Int32Array.from([6, 34, 62]), new a(26, new s(4, 107)), new a(22, new s(8, 37), new s(1, 38)), new a(24, new s(8, 20), new s(4, 21)), new a(22, new s(12, 11), new s(4, 12))), new t(14, Int32Array.from([6, 26, 46, 66]), new a(30, new s(3, 115), new s(1, 116)), new a(24, new s(4, 40), new s(5, 41)), new a(20, new s(11, 16), new s(5, 17)), new a(24, new s(11, 12), new s(5, 13))), new t(15, Int32Array.from([6, 26, 48, 70]), new a(22, new s(5, 87), new s(1, 88)), new a(24, new s(5, 41), new s(5, 42)), new a(30, new s(5, 24), new s(7, 25)), new a(24, new s(11, 12), new s(7, 13))), new t(16, Int32Array.from([6, 26, 50, 74]), new a(24, new s(5, 98), new s(1, 99)), new a(28, new s(7, 45), new s(3, 46)), new a(24, new s(15, 19), new s(2, 20)), new a(30, new s(3, 15), new s(13, 16))), new t(17, Int32Array.from([6, 30, 54, 78]), new a(28, new s(1, 107), new s(5, 108)), new a(28, new s(10, 46), new s(1, 47)), new a(28, new s(1, 22), new s(15, 23)), new a(28, new s(2, 14), new s(17, 15))), new t(18, Int32Array.from([6, 30, 56, 82]), new a(30, new s(5, 120), new s(1, 121)), new a(26, new s(9, 43), new s(4, 44)), new a(28, new s(17, 22), new s(1, 23)), new a(28, new s(2, 14), new s(19, 15))), new t(19, Int32Array.from([6, 30, 58, 86]), new a(28, new s(3, 113), new s(4, 114)), new a(26, new s(3, 44), new s(11, 45)), new a(26, new s(17, 21), new s(4, 22)), new a(26, new s(9, 13), new s(16, 14))), new t(20, Int32Array.from([6, 34, 62, 90]), new a(28, new s(3, 107), new s(5, 108)), new a(26, new s(3, 41), new s(13, 42)), new a(30, new s(15, 24), new s(5, 25)), new a(28, new s(15, 15), new s(10, 16))), new t(21, Int32Array.from([6, 28, 50, 72, 94]), new a(28, new s(4, 116), new s(4, 117)), new a(26, new s(17, 42)), new a(28, new s(17, 22), new s(6, 23)), new a(30, new s(19, 16), new s(6, 17))), new t(22, Int32Array.from([6, 26, 50, 74, 98]), new a(28, new s(2, 111), new s(7, 112)), new a(28, new s(17, 46)), new a(30, new s(7, 24), new s(16, 25)), new a(24, new s(34, 13))), new t(23, Int32Array.from([6, 30, 54, 78, 102]), new a(30, new s(4, 121), new s(5, 122)), new a(28, new s(4, 47), new s(14, 48)), new a(30, new s(11, 24), new s(14, 25)), new a(30, new s(16, 15), new s(14, 16))), new t(24, Int32Array.from([6, 28, 54, 80, 106]), new a(30, new s(6, 117), new s(4, 118)), new a(28, new s(6, 45), new s(14, 46)), new a(30, new s(11, 24), new s(16, 25)), new a(30, new s(30, 16), new s(2, 17))), new t(25, Int32Array.from([6, 32, 58, 84, 110]), new a(26, new s(8, 106), new s(4, 107)), new a(28, new s(8, 47), new s(13, 48)), new a(30, new s(7, 24), new s(22, 25)), new a(30, new s(22, 15), new s(13, 16))), new t(26, Int32Array.from([6, 30, 58, 86, 114]), new a(28, new s(10, 114), new s(2, 115)), new a(28, new s(19, 46), new s(4, 47)), new a(28, new s(28, 22), new s(6, 23)), new a(30, new s(33, 16), new s(4, 17))), new t(27, Int32Array.from([6, 34, 62, 90, 118]), new a(30, new s(8, 122), new s(4, 123)), new a(28, new s(22, 45), new s(3, 46)), new a(30, new s(8, 23), new s(26, 24)), new a(30, new s(12, 15), new s(28, 16))), new t(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new a(30, new s(3, 117), new s(10, 118)), new a(28, new s(3, 45), new s(23, 46)), new a(30, new s(4, 24), new s(31, 25)), new a(30, new s(11, 15), new s(31, 16))), new t(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new a(30, new s(7, 116), new s(7, 117)), new a(28, new s(21, 45), new s(7, 46)), new a(30, new s(1, 23), new s(37, 24)), new a(30, new s(19, 15), new s(26, 16))), new t(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new a(30, new s(5, 115), new s(10, 116)), new a(28, new s(19, 47), new s(10, 48)), new a(30, new s(15, 24), new s(25, 25)), new a(30, new s(23, 15), new s(25, 16))), new t(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new a(30, new s(13, 115), new s(3, 116)), new a(28, new s(2, 46), new s(29, 47)), new a(30, new s(42, 24), new s(1, 25)), new a(30, new s(23, 15), new s(28, 16))), new t(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new a(30, new s(17, 115)), new a(28, new s(10, 46), new s(23, 47)), new a(30, new s(10, 24), new s(35, 25)), new a(30, new s(19, 15), new s(35, 16))), new t(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new a(30, new s(17, 115), new s(1, 116)), new a(28, new s(14, 46), new s(21, 47)), new a(30, new s(29, 24), new s(19, 25)), new a(30, new s(11, 15), new s(46, 16))), new t(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new a(30, new s(13, 115), new s(6, 116)), new a(28, new s(14, 46), new s(23, 47)), new a(30, new s(44, 24), new s(7, 25)), new a(30, new s(59, 16), new s(1, 17))), new t(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new a(30, new s(12, 121), new s(7, 122)), new a(28, new s(12, 47), new s(26, 48)), new a(30, new s(39, 24), new s(14, 25)), new a(30, new s(22, 15), new s(41, 16))), new t(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new a(30, new s(6, 121), new s(14, 122)), new a(28, new s(6, 47), new s(34, 48)), new a(30, new s(46, 24), new s(10, 25)), new a(30, new s(2, 15), new s(64, 16))), new t(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new a(30, new s(17, 122), new s(4, 123)), new a(28, new s(29, 46), new s(14, 47)), new a(30, new s(49, 24), new s(10, 25)), new a(30, new s(24, 15), new s(46, 16))), new t(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new a(30, new s(4, 122), new s(18, 123)), new a(28, new s(13, 46), new s(32, 47)), new a(30, new s(48, 24), new s(14, 25)), new a(30, new s(42, 15), new s(32, 16))), new t(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new a(30, new s(20, 117), new s(4, 118)), new a(28, new s(40, 47), new s(7, 48)), new a(30, new s(43, 24), new s(22, 25)), new a(30, new s(10, 15), new s(67, 16))), new t(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new a(30, new s(19, 118), new s(6, 119)), new a(28, new s(18, 47), new s(31, 48)), new a(30, new s(34, 24), new s(34, 25)), new a(30, new s(20, 15), new s(61, 16)))]
  return t
}()
exports.a = d
