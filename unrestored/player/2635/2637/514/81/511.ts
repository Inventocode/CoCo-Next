/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511
 */

"use strict"

var r = require("./166")
var i = require("./102")
var o = require("./406")
var a = require("./350")
var s = require("./158")
var u = require("./63")
var c = function () {
  function t() {}
  t.clearMatrix = function (t) {
    t.clear(255)
  }
  t.buildMatrix = function (e, n, r, i, o) {
    t.clearMatrix(o)
    t.embedBasicPatterns(r, o)
    t.embedTypeInfo(n, i, o)
    t.maybeEmbedVersionInfo(r, o)
    t.embedDataBits(e, i, o)
  }
  t.embedBasicPatterns = function (e, n) {
    t.embedPositionDetectionPatternsAndSeparators(n)
    t.embedDarkDotAtLeftBottomCorner(n)
    t.maybeEmbedPositionAdjustmentPatterns(e, n)
    t.embedTimingPatterns(n)
  }
  t.embedTypeInfo = function (e, n, i) {
    var o = new r.a()
    t.makeTypeInfoBits(e, n, o)
    for (var a = 0, s = o.getSize(); a < s; ++a) {
      var u = o.get(o.getSize() - 1 - a)
      var c = t.TYPE_INFO_COORDINATES[a]
      var l = c[0]
      var d = c[1]
      i.setBoolean(l, d, u)
      if (a < 8) {
        var f = i.getWidth() - a - 1
        var h = 8
        i.setBoolean(f, h, u)
      } else {
        f = 8
        h = i.getHeight() - 7 + (a - 8)
        i.setBoolean(f, h, u)
      }
    }
  }
  t.maybeEmbedVersionInfo = function (e, n) {
    if (!(e.getVersionNumber() < 7)) {
      var i = new r.a()
      t.makeVersionInfoBits(e, i)
      for (var o = 17, a = 0; a < 6; ++a) {
        for (var s = 0; s < 3; ++s) {
          var u = i.get(o)
          o--
          n.setBoolean(a, n.getHeight() - 11 + s, u)
          n.setBoolean(n.getHeight() - 11 + s, a, u)
        }
      }
    }
  }
  t.embedDataBits = function (e, n, r) {
    for (var i = 0, o = -1, u = r.getWidth() - 1, c = r.getHeight() - 1; u > 0;) {
      for (6 === u && (u -= 1); c >= 0 && c < r.getHeight();) {
        for (var l = 0; l < 2; ++l) {
          var d = u - l
          if (t.isEmpty(r.get(d, c))) {
            var f = undefined
            if (i < e.getSize()) {
              f = e.get(i)
              ++i
            } else {
              f = false
            }
            if (255 !== n && a.a.getDataMaskBit(n, d, c)) {
              f = !f
            }
            r.setBoolean(d, c, f)
          }
        }
        c += o
      }
      c += o = -o
      u -= 2
    }
    if (i !== e.getSize()) {
      throw new s.a("Not all bits consumed: " + i + "/" + e.getSize())
    }
  }
  t.findMSBSet = function (t) {
    return 32 - i.a.numberOfLeadingZeros(t)
  }
  t.calculateBCHCode = function (e, n) {
    if (0 === n) {
      throw new u.a("0 polynomial")
    }
    var r = t.findMSBSet(n)
    for (e <<= r - 1; t.findMSBSet(e) >= r;) {
      e ^= n << t.findMSBSet(e) - r
    }
    return e
  }
  t.makeTypeInfoBits = function (e, n, i) {
    if (!o.a.isValidMaskPattern(n)) {
      throw new s.a("Invalid mask pattern")
    }
    var a = e.getBits() << 3 | n
    i.appendBits(a, 5)
    var u = t.calculateBCHCode(a, t.TYPE_INFO_POLY)
    i.appendBits(u, 10)
    var c = new r.a()
    c.appendBits(t.TYPE_INFO_MASK_PATTERN, 15)
    i.xor(c)
    if (15 !== i.getSize()) {
      throw new s.a("should not happen but we got: " + i.getSize())
    }
  }
  t.makeVersionInfoBits = function (e, n) {
    n.appendBits(e.getVersionNumber(), 6)
    var r = t.calculateBCHCode(e.getVersionNumber(), t.VERSION_INFO_POLY)
    n.appendBits(r, 12)
    if (18 !== n.getSize()) {
      throw new s.a("should not happen but we got: " + n.getSize())
    }
  }
  t.isEmpty = function (t) {
    return 255 === t
  }
  t.embedTimingPatterns = function (e) {
    for (var n = 8; n < e.getWidth() - 8; ++n) {
      var r = (n + 1) % 2
      if (t.isEmpty(e.get(n, 6))) {
        e.setNumber(n, 6, r)
      }
      if (t.isEmpty(e.get(6, n))) {
        e.setNumber(6, n, r)
      }
    }
  }
  t.embedDarkDotAtLeftBottomCorner = function (t) {
    if (0 === t.get(8, t.getHeight() - 8)) {
      throw new s.a()
    }
    t.setNumber(8, t.getHeight() - 8, 1)
  }
  t.embedHorizontalSeparationPattern = function (e, n, r) {
    for (var i = 0; i < 8; ++i) {
      if (!t.isEmpty(r.get(e + i, n))) {
        throw new s.a()
      }
      r.setNumber(e + i, n, 0)
    }
  }
  t.embedVerticalSeparationPattern = function (e, n, r) {
    for (var i = 0; i < 7; ++i) {
      if (!t.isEmpty(r.get(e, n + i))) {
        throw new s.a()
      }
      r.setNumber(e, n + i, 0)
    }
  }
  t.embedPositionAdjustmentPattern = function (e, n, r) {
    for (var i = 0; i < 5; ++i) {
      for (var o = t.POSITION_ADJUSTMENT_PATTERN[i], a = 0; a < 5; ++a) {
        r.setNumber(e + a, n + i, o[a])
      }
    }
  }
  t.embedPositionDetectionPattern = function (e, n, r) {
    for (var i = 0; i < 7; ++i) {
      for (var o = t.POSITION_DETECTION_PATTERN[i], a = 0; a < 7; ++a) {
        r.setNumber(e + a, n + i, o[a])
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
  t.maybeEmbedPositionAdjustmentPatterns = function (e, n) {
    if (!(e.getVersionNumber() < 2)) {
      for (var r = e.getVersionNumber() - 1, i = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r], o = 0, /* [auto-meaningful-name] */i$length = i.length; o !== i$length; o++) {
        var s = i[o]
        if (s >= 0) {
          for (var u = 0; u !== i$length; u++) {
            var c = i[u]
            if (c >= 0 && t.isEmpty(n.get(c, s))) {
              t.embedPositionAdjustmentPattern(c - 2, s - 2, n)
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
