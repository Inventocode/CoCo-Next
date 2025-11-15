/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：156
 */

"use strict"

var n
var o = require("./63")
!function (t) {
  t[t.TERMINATOR = 0] = "TERMINATOR"
  t[t.NUMERIC = 1] = "NUMERIC"
  t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC"
  t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND"
  t[t.BYTE = 4] = "BYTE"
  t[t.ECI = 5] = "ECI"
  t[t.KANJI = 6] = "KANJI"
  t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION"
  t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION"
  t[t.HANZI = 9] = "HANZI"
}(n || (n = {}))
var i = function () {
  function t(e, r, n, o) {
    this.value = e
    this.stringValue = r
    this.characterCountBitsForVersions = n
    this.bits = o
    t.FOR_BITS.set(o, this)
    t.FOR_VALUE.set(e, this)
  }
  t.forBits = function (e) {
    var r = t.FOR_BITS.get(e)
    if (undefined === r) {
      throw new o.a()
    }
    return r
  }
  t.prototype.getCharacterCountBits = function (t) {
    var e
    var r = t.getVersionNumber()
    e = r <= 9 ? 0 : r <= 26 ? 1 : 2
    return this.characterCountBitsForVersions[e]
  }
  t.prototype.getValue = function () {
    return this.value
  }
  t.prototype.getBits = function () {
    return this.bits
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var r = e
    return this.value === r.value
  }
  t.prototype.toString = function () {
    return this.stringValue
  }
  t.FOR_BITS = new Map()
  t.FOR_VALUE = new Map()
  t.TERMINATOR = new t(n.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0)
  t.NUMERIC = new t(n.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1)
  t.ALPHANUMERIC = new t(n.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2)
  t.STRUCTURED_APPEND = new t(n.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3)
  t.BYTE = new t(n.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4)
  t.ECI = new t(n.ECI, "ECI", Int32Array.from([0, 0, 0]), 7)
  t.KANJI = new t(n.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8)
  t.FNC1_FIRST_POSITION = new t(n.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5)
  t.FNC1_SECOND_POSITION = new t(n.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9)
  t.HANZI = new t(n.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13)
  return t
}()
exports.a = i
