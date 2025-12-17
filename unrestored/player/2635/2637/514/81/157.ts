/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：157
 */

"use strict"

var r
var i = require("./63")
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
}(r || (r = {}))
var o = function () {
  function t(e, n, r, i) {
    this.value = e
    this.stringValue = n
    this.characterCountBitsForVersions = r
    this.bits = i
    t.FOR_BITS.set(i, this)
    t.FOR_VALUE.set(e, this)
  }
  t.forBits = function (e) {
    var n = t.FOR_BITS.get(e)
    if (undefined === n) {
      throw new i.a()
    }
    return n
  }
  t.prototype.getCharacterCountBits = function (t) {
    var e
    var n = t.getVersionNumber()
    e = n <= 9 ? 0 : n <= 26 ? 1 : 2
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
    var n = e
    return this.value === n.value
  }
  t.prototype.toString = function () {
    return this.stringValue
  }
  t.FOR_BITS = new Map()
  t.FOR_VALUE = new Map()
  t.TERMINATOR = new t(r.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0)
  t.NUMERIC = new t(r.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1)
  t.ALPHANUMERIC = new t(r.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2)
  t.STRUCTURED_APPEND = new t(r.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3)
  t.BYTE = new t(r.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4)
  t.ECI = new t(r.ECI, "ECI", Int32Array.from([0, 0, 0]), 7)
  t.KANJI = new t(r.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8)
  t.FNC1_FIRST_POSITION = new t(r.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5)
  t.FNC1_SECOND_POSITION = new t(r.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9)
  t.HANZI = new t(r.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13)
  return t
}()
exports.a = o
