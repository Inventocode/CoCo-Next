/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511
 */

"use strict"

var n = require("./166")
var o = require("./102")
var i = require("./406")
var a = require("./350")
var u = require("./158")
var s = require("./63")
var c = function () {
  function t() {}
  t.clearMatrix = function (t) {
    t.clear(255)
  }
  t.buildMatrix = function (e, r, n, o, i) {
    t.clearMatrix(i)
    t.embedBasicPatterns(n, i)
    t.embedTypeInfo(r, o, i)
    t.maybeEmbedVersionInfo(n, i)
    t.embedDataBits(e, o, i)
  }
  t.embedBasicPatterns = function (e, r) {
    t.embedPositionDetectionPatternsAndSeparators(r)
    t.embedDarkDotAtLeftBottomCorner(r)
    t.maybeEmbedPositionAdjustmentPatterns(e, r)
    t.embedTimingPatterns(r)
  }
  t.embedTypeInfo = function (e, r, o) {
    var i = new n.a()
    t.makeTypeInfoBits(e, r, i)
    for (var a = 0, u = i.getSize(); a < u; ++a) {
      var s = i.get(i.getSize() - 1 - a)
      var c = t.TYPE_INFO_COORDINATES[a]
      var f = c[0]
      var h = c[1]
      o.setBoolean(f, h, s)
      if (a < 8) {
        var l = o.getWidth() - a - 1
        var d = 8
        o.setBoolean(l, d, s)
      } else {
        l = 8
        d = o.getHeight() - 7 + (a - 8)
        o.setBoolean(l, d, s)
      }
    }
  }
  t.maybeEmbedVersionInfo = function (e, r) {
    if (!(e.getVersionNumber() < 7)) {
      var o = new n.a()
      t.makeVersionInfoBits(e, o)
      for (var i = 17, a = 0; a < 6; ++a) {
        for (var u = 0; u < 3; ++u) {
          var s = o.get(i)
          i--
          r.setBoolean(a, r.getHeight() - 11 + u, s)
          r.setBoolean(r.getHeight() - 11 + u, a, s)
        }
      }
    }
  }
  t.embedDataBits = function (e, r, n) {
    for (var o = 0, i = -1, s = n.getWidth() - 1, c = n.getHeight() - 1; s > 0;) {
      for (6 === s && (s -= 1); c >= 0 && c < n.getHeight();) {
        for (var f = 0; f < 2; ++f) {
          var h = s - f
          if (t.isEmpty(n.get(h, c))) {
            var l = undefined
            if (o < e.getSize()) {
              l = e.get(o)
              ++o
            } else {
              l = false
            }
            if (255 !== r && a.a.getDataMaskBit(r, h, c)) {
              l = !l
            }
            n.setBoolean(h, c, l)
          }
        }
        c += i
      }
      c += i = -i
      s -= 2
    }
    if (o !== e.getSize()) {
      throw new u.a("Not all bits consumed: " + o + "/" + e.getSize())
    }
  }
  t.findMSBSet = function (t) {
    return 32 - o.a.numberOfLeadingZeros(t)
  }
  t.calculateBCHCode = function (e, r) {
    if (0 === r) {
      throw new s.a("0 polynomial")
    }
    var n = t.findMSBSet(r)
    for (e <<= n - 1; t.findMSBSet(e) >= n;) {
      e ^= r << t.findMSBSet(e) - n
    }
    return e
  }
  t.makeTypeInfoBits = function (e, r, o) {
    if (!i.a.isValidMaskPattern(r)) {
      throw new u.a("Invalid mask pattern")
    }
    var a = e.getBits() << 3 | r
    o.appendBits(a, 5)
    var s = t.calculateBCHCode(a, t.TYPE_INFO_POLY)
    o.appendBits(s, 10)
    var c = new n.a()
    c.appendBits(t.TYPE_INFO_MASK_PATTERN, 15)
    o.xor(c)
    if (15 !== o.getSize()) {
      throw new u.a("should not happen but we got: " + o.getSize())
    }
  }
  t.makeVersionInfoBits = function (e, r) {
    r.appendBits(e.getVersionNumber(), 6)
    var n = t.calculateBCHCode(e.getVersionNumber(), t.VERSION_INFO_POLY)
    r.appendBits(n, 12)
    if (18 !== r.getSize()) {
      throw new u.a("should not happen but we got: " + r.getSize())
    }
  }
  t.isEmpty = function (t) {
    return 255 === t
  }
  t.embedTimingPatterns = function (e) {
    for (var r = 8; r < e.getWidth() - 8; ++r) {
      var n = (r + 1) % 2
      if (t.isEmpty(e.get(r, 6))) {
        e.setNumber(r, 6, n)
      }
      if (t.isEmpty(e.get(6, r))) {
        e.setNumber(6, r, n)
      }
    }
  }
  t.embedDarkDotAtLeftBottomCorner = function (t) {
    if (0 === t.get(8, t.getHeight() - 8)) {
      throw new u.a()
    }
    t.setNumber(8, t.getHeight() - 8, 1)
  }
  t.embedHorizontalSeparationPattern = function (e, r, n) {
    for (var o = 0; o < 8; ++o) {
      if (!t.isEmpty(n.get(e + o, r))) {
        throw new u.a()
      }
      n.setNumber(e + o, r, 0)
    }
  }
  t.embedVerticalSeparationPattern = function (e, r, n) {
    for (var o = 0; o < 7; ++o) {
      if (!t.isEmpty(n.get(e, r + o))) {
        throw new u.a()
      }
      n.setNumber(e, r + o, 0)
    }
  }
  t.embedPositionAdjustmentPattern = function (e, r, n) {
    for (var o = 0; o < 5; ++o) {
      for (var i = t.POSITION_ADJUSTMENT_PATTERN[o], a = 0; a < 5; ++a) {
        n.setNumber(e + a, r + o, i[a])
      }
    }
  }
  t.embedPositionDetectionPattern = function (e, r, n) {
    for (var o = 0; o < 7; ++o) {
      for (var i = t.POSITION_DETECTION_PATTERN[o], a = 0; a < 7; ++a) {
        n.setNumber(e + a, r + o, i[a])
      }
    }
  }
  t.embedPositionDetectionPatternsAndSeparators = function (e) {
    var /* [auto-meaningful-name] */t$POSITION_DETECTION_PATTERN0$length = t.POSITION_DETECTION_PATTERN[0].length
    t.embedPositionDetectionPattern(0, 0, e)
    t.embedPositionDetectionPattern(e.getWidth() - t$POSITION_DETECTION_PATTERN0$length, 0, e)
    t.embedPositionDetectionPattern(0, e.getWidth() - t$POSITION_DETECTION_PATTERN0$length, e)
    t.embedHorizontalSeparationPattern(0, 7, e)
    t.embedHorizontalSeparationPattern(e.getWidth() - 8, 7, e)
    t.embedHorizontalSeparationPattern(0, e.getWidth() - 8, e)
    t.embedVerticalSeparationPattern(7, 0, e)
    t.embedVerticalSeparationPattern(e.getHeight() - 7 - 1, 0, e)
    t.embedVerticalSeparationPattern(7, e.getHeight() - 7, e)
  }
  t.maybeEmbedPositionAdjustmentPatterns = function (e, r) {
    if (!(e.getVersionNumber() < 2)) {
      for (var n = e.getVersionNumber() - 1, o = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n], i = 0, /* [auto-meaningful-name] */o$length = o.length; i !== o$length; i++) {
        var u = o[i]
        if (u >= 0) {
          for (var s = 0; s !== o$length; s++) {
            var c = o[s]
            if (c >= 0 && t.isEmpty(r.get(c, u))) {
              t.embedPositionAdjustmentPattern(c - 2, u - 2, r)
            }
          }
        }
      }
    }
  }
  t.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])])
  t.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])])
  t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])])
  t.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])])
  t.VERSION_INFO_POLY = 7973
  t.TYPE_INFO_POLY = 1335
  t.TYPE_INFO_MASK_PATTERN = 21522
  return t
}()
exports.a = c
