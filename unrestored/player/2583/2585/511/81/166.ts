/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：166
 */

"use strict"

var r
var i = require("./56")
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
!function (t) {
  t[t.Cp437 = 0] = "Cp437"
  t[t.ISO8859_1 = 1] = "ISO8859_1"
  t[t.ISO8859_2 = 2] = "ISO8859_2"
  t[t.ISO8859_3 = 3] = "ISO8859_3"
  t[t.ISO8859_4 = 4] = "ISO8859_4"
  t[t.ISO8859_5 = 5] = "ISO8859_5"
  t[t.ISO8859_6 = 6] = "ISO8859_6"
  t[t.ISO8859_7 = 7] = "ISO8859_7"
  t[t.ISO8859_8 = 8] = "ISO8859_8"
  t[t.ISO8859_9 = 9] = "ISO8859_9"
  t[t.ISO8859_10 = 10] = "ISO8859_10"
  t[t.ISO8859_11 = 11] = "ISO8859_11"
  t[t.ISO8859_13 = 12] = "ISO8859_13"
  t[t.ISO8859_14 = 13] = "ISO8859_14"
  t[t.ISO8859_15 = 14] = "ISO8859_15"
  t[t.ISO8859_16 = 15] = "ISO8859_16"
  t[t.SJIS = 16] = "SJIS"
  t[t.Cp1250 = 17] = "Cp1250"
  t[t.Cp1251 = 18] = "Cp1251"
  t[t.Cp1252 = 19] = "Cp1252"
  t[t.Cp1256 = 20] = "Cp1256"
  t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked"
  t[t.UTF8 = 22] = "UTF8"
  t[t.ASCII = 23] = "ASCII"
  t[t.Big5 = 24] = "Big5"
  t[t.GB18030 = 25] = "GB18030"
  t[t.EUC_KR = 26] = "EUC_KR"
}(r || (r = {}))
var a = function () {
  function t(e, n, r) {
    for (var i, /* [auto-meaningful-name] */h$return, s = [], u = 3; u < arguments.length; u++) {
      s[u - 3] = arguments[u]
    }
    this.valueIdentifier = e
    this.name = r
    this.values = "number" === typeof n ? Int32Array.from([n]) : n
    this.otherEncodingNames = s
    t.VALUE_IDENTIFIER_TO_ECI.set(e, this)
    t.NAME_TO_ECI.set(r, this)
    for (var /* [auto-meaningful-name] */this$values = this.values, l = 0, /* [auto-meaningful-name] */this$values$length = this$values.length; l !== this$values$length; l++) {
      var f = this$values[l]
      t.VALUES_TO_ECI.set(f, this)
    }
    try {
      for (var h = o(s), p = h.next(); !p.done; p = h.next()) {
        var /* [auto-meaningful-name] */p$value = p.value
        t.NAME_TO_ECI.set(p$value, this)
      }
    } catch (b) {
      i = {
        error: b
      }
    } finally {
      try {
        if (p && !p.done && (h$return = h.return)) {
          h$return.call(h)
        }
      } finally {
        if (i) {
          throw i.error
        }
      }
    }
  }
  t.prototype.getValueIdentifier = function () {
    return this.valueIdentifier
  }
  t.prototype.getName = function () {
    return this.name
  }
  t.prototype.getValue = function () {
    return this.values[0]
  }
  t.getCharacterSetECIByValue = function (e) {
    if (e < 0 || e >= 900) {
      throw new i.a("incorect value")
    }
    var n = t.VALUES_TO_ECI.get(e)
    if (undefined === n) {
      throw new i.a("incorect value")
    }
    return n
  }
  t.getCharacterSetECIByName = function (e) {
    var n = t.NAME_TO_ECI.get(e)
    if (undefined === n) {
      throw new i.a("incorect value")
    }
    return n
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var n = e
    return this.getName() === n.getName()
  }
  t.VALUE_IDENTIFIER_TO_ECI = new Map()
  t.VALUES_TO_ECI = new Map()
  t.NAME_TO_ECI = new Map()
  t.Cp437 = new t(r.Cp437, Int32Array.from([0, 2]), "Cp437")
  t.ISO8859_1 = new t(r.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1")
  t.ISO8859_2 = new t(r.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2")
  t.ISO8859_3 = new t(r.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3")
  t.ISO8859_4 = new t(r.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4")
  t.ISO8859_5 = new t(r.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5")
  t.ISO8859_6 = new t(r.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6")
  t.ISO8859_7 = new t(r.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7")
  t.ISO8859_8 = new t(r.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8")
  t.ISO8859_9 = new t(r.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9")
  t.ISO8859_10 = new t(r.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10")
  t.ISO8859_11 = new t(r.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11")
  t.ISO8859_13 = new t(r.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13")
  t.ISO8859_14 = new t(r.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14")
  t.ISO8859_15 = new t(r.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15")
  t.ISO8859_16 = new t(r.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16")
  t.SJIS = new t(r.SJIS, 20, "SJIS", "Shift_JIS")
  t.Cp1250 = new t(r.Cp1250, 21, "Cp1250", "windows-1250")
  t.Cp1251 = new t(r.Cp1251, 22, "Cp1251", "windows-1251")
  t.Cp1252 = new t(r.Cp1252, 23, "Cp1252", "windows-1252")
  t.Cp1256 = new t(r.Cp1256, 24, "Cp1256", "windows-1256")
  t.UnicodeBigUnmarked = new t(r.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig")
  t.UTF8 = new t(r.UTF8, 26, "UTF8", "UTF-8")
  t.ASCII = new t(r.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII")
  t.Big5 = new t(r.Big5, 28, "Big5")
  t.GB18030 = new t(r.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK")
  t.EUC_KR = new t(r.EUC_KR, 30, "EUC_KR", "EUC-KR")
  return t
}()
exports.a = a
