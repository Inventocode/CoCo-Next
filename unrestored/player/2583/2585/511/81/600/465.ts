/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：465
 */

"use strict"

var r = require("../56")
var i = require("../221")
var o = require("../109")
var a = function () {
  function t(t, e) {
    if (e) {
      this.decodedInformation = null
    } else {
      this.finished = t
      this.decodedInformation = e
    }
  }
  t.prototype.getDecodedInformation = function () {
    return this.decodedInformation
  }
  t.prototype.isFinished = function () {
    return this.finished
  }
  return t
}()
var s = function () {
  function t(t) {
    this.newPosition = t
  }
  t.prototype.getNewPosition = function () {
    return this.newPosition
  }
  return t
}()
var u = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n]
      }
    })(e, n)
  }
  return function (e, n) {
    function r() {
      this.constructor = e
    }
    t(e, n)
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var c = function (t) {
  function e(e, n) {
    var r = t.call(this, e) || this
    r.value = n
    return r
  }
  u(e, t)
  e.prototype.getValue = function () {
    return this.value
  }
  e.prototype.isFNC1 = function () {
    return this.value === e.FNC1
  }
  e.FNC1 = "$"
  return e
}(s)
var l = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n]
      }
    })(e, n)
  }
  return function (e, n) {
    function r() {
      this.constructor = e
    }
    t(e, n)
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var d = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e) || this
    if (r) {
      i.remaining = true
      i.remainingValue = i.remainingValue
    } else {
      i.remaining = false
      i.remainingValue = 0
    }
    i.newString = n
    return i
  }
  l(e, t)
  e.prototype.getNewString = function () {
    return this.newString
  }
  e.prototype.isRemaining = function () {
    return this.remaining
  }
  e.prototype.getRemainingValue = function () {
    return this.remainingValue
  }
  return e
}(s)
var f = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n]
      }
    })(e, n)
  }
  return function (e, n) {
    function r() {
      this.constructor = e
    }
    t(e, n)
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var h = function (t) {
  function e(e, n, i) {
    var o = t.call(this, e) || this
    if (n < 0 || n > 10 || i < 0 || i > 10) {
      throw new r.a()
    }
    o.firstDigit = n
    o.secondDigit = i
    return o
  }
  f(e, t)
  e.prototype.getFirstDigit = function () {
    return this.firstDigit
  }
  e.prototype.getSecondDigit = function () {
    return this.secondDigit
  }
  e.prototype.getValue = function () {
    return 10 * this.firstDigit + this.secondDigit
  }
  e.prototype.isFirstDigitFNC1 = function () {
    return this.firstDigit === e.FNC1
  }
  e.prototype.isSecondDigitFNC1 = function () {
    return this.secondDigit === e.FNC1
  }
  e.prototype.isAnyFNC1 = function () {
    return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1
  }
  e.FNC1 = 10
  return e
}(s)
var p = require("../37")
var m = function (t) {
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
var b = function () {
  function t() {}
  t.parseFieldsInGeneralPurpose = function (e) {
    var n
    var /* [auto-meaningful-name] */d$return
    var i
    var /* [auto-meaningful-name] */b$return
    var a
    var /* [auto-meaningful-name] */v$return
    var u
    var /* [auto-meaningful-name] */w$return
    if (!e) {
      return null
    }
    if (e.length < 2) {
      throw new p.a()
    }
    var l = e.substring(0, 2)
    try {
      for (var d = m(t.TWO_DIGIT_DATA_LENGTH), f = d.next(); !f.done; f = d.next()) {
        if ((O = f.value)[0] === l) {
          return O[1] === t.VARIABLE_LENGTH ? t.processVariableAI(2, O[2], e) : t.processFixedAI(2, O[1], e)
        }
      }
    } catch (T) {
      n = {
        error: T
      }
    } finally {
      try {
        if (f && !f.done && (d$return = d.return)) {
          d$return.call(d)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    if (e.length < 3) {
      throw new p.a()
    }
    var h = e.substring(0, 3)
    try {
      for (var b = m(t.THREE_DIGIT_DATA_LENGTH), g = b.next(); !g.done; g = b.next()) {
        if ((O = g.value)[0] === h) {
          return O[1] === t.VARIABLE_LENGTH ? t.processVariableAI(3, O[2], e) : t.processFixedAI(3, O[1], e)
        }
      }
    } catch (A) {
      i = {
        error: A
      }
    } finally {
      try {
        if (g && !g.done && (b$return = b.return)) {
          b$return.call(b)
        }
      } finally {
        if (i) {
          throw i.error
        }
      }
    }
    try {
      for (var v = m(t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), _ = v.next(); !_.done; _ = v.next()) {
        if ((O = _.value)[0] === h) {
          return O[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, O[2], e) : t.processFixedAI(4, O[1], e)
        }
      }
    } catch (S) {
      a = {
        error: S
      }
    } finally {
      try {
        if (_ && !_.done && (v$return = v.return)) {
          v$return.call(v)
        }
      } finally {
        if (a) {
          throw a.error
        }
      }
    }
    if (e.length < 4) {
      throw new p.a()
    }
    var y = e.substring(0, 4)
    try {
      for (var w = m(t.FOUR_DIGIT_DATA_LENGTH), E = w.next(); !E.done; E = w.next()) {
        var O
        if ((O = E.value)[0] === y) {
          return O[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, O[2], e) : t.processFixedAI(4, O[1], e)
        }
      }
    } catch (I) {
      u = {
        error: I
      }
    } finally {
      try {
        if (E && !E.done && (w$return = w.return)) {
          w$return.call(w)
        }
      } finally {
        if (u) {
          throw u.error
        }
      }
    }
    throw new p.a()
  }
  t.processFixedAI = function (e, n, r) {
    if (r.length < e) {
      throw new p.a()
    }
    var i = r.substring(0, e)
    if (r.length < e + n) {
      throw new p.a()
    }
    var o = r.substring(e, e + n)
    var a = r.substring(e + n)
    var s = "(" + i + ")" + o
    var u = t.parseFieldsInGeneralPurpose(a)
    return null == u ? s : s + u
  }
  t.processVariableAI = function (e, n, r) {
    var i
    var o = r.substring(0, e)
    i = r.length < e + n ? r.length : e + n
    var a = r.substring(e, i)
    var s = r.substring(i)
    var u = "(" + o + ")" + a
    var c = t.parseFieldsInGeneralPurpose(s)
    return null == c ? u : u + c
  }
  t.VARIABLE_LENGTH = []
  t.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", t.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", t.VARIABLE_LENGTH, 20], ["22", t.VARIABLE_LENGTH, 29], ["30", t.VARIABLE_LENGTH, 8], ["37", t.VARIABLE_LENGTH, 8], ["90", t.VARIABLE_LENGTH, 30], ["91", t.VARIABLE_LENGTH, 30], ["92", t.VARIABLE_LENGTH, 30], ["93", t.VARIABLE_LENGTH, 30], ["94", t.VARIABLE_LENGTH, 30], ["95", t.VARIABLE_LENGTH, 30], ["96", t.VARIABLE_LENGTH, 30], ["97", t.VARIABLE_LENGTH, 3], ["98", t.VARIABLE_LENGTH, 30], ["99", t.VARIABLE_LENGTH, 30]]
  t.THREE_DIGIT_DATA_LENGTH = [["240", t.VARIABLE_LENGTH, 30], ["241", t.VARIABLE_LENGTH, 30], ["242", t.VARIABLE_LENGTH, 6], ["250", t.VARIABLE_LENGTH, 30], ["251", t.VARIABLE_LENGTH, 30], ["253", t.VARIABLE_LENGTH, 17], ["254", t.VARIABLE_LENGTH, 20], ["400", t.VARIABLE_LENGTH, 30], ["401", t.VARIABLE_LENGTH, 30], ["402", 17], ["403", t.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", t.VARIABLE_LENGTH, 20], ["421", t.VARIABLE_LENGTH, 15], ["422", 3], ["423", t.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]]
  t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", t.VARIABLE_LENGTH, 15], ["391", t.VARIABLE_LENGTH, 18], ["392", t.VARIABLE_LENGTH, 15], ["393", t.VARIABLE_LENGTH, 18], ["703", t.VARIABLE_LENGTH, 30]]
  t.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", t.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", t.VARIABLE_LENGTH, 20], ["8003", t.VARIABLE_LENGTH, 30], ["8004", t.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", t.VARIABLE_LENGTH, 30], ["8008", t.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", t.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", t.VARIABLE_LENGTH, 70], ["8200", t.VARIABLE_LENGTH, 70]]
  return t
}()
var g = function () {
  function t(t) {
    this.buffer = new o.a()
    this.information = t
  }
  t.prototype.decodeAllCodes = function (t, e) {
    for (var n = e, r = null;;) {
      var i = this.decodeGeneralPurposeField(n, r)
      var o = b.parseFieldsInGeneralPurpose(i.getNewString())
      if (null != o) {
        t.append(o)
      }
      r = i.isRemaining() ? "" + i.getRemainingValue() : null
      if (n === i.getNewPosition()) {
        break
      }
      n = i.getNewPosition()
    }
    return t.toString()
  }
  t.prototype.isStillNumeric = function (t) {
    if (t + 7 > this.information.getSize()) {
      return t + 4 <= this.information.getSize()
    }
    for (var e = t; e < t + 3; ++e) {
      if (this.information.get(e)) {
        return true
      }
    }
    return this.information.get(t + 3)
  }
  t.prototype.decodeNumeric = function (t) {
    if (t + 7 > this.information.getSize()) {
      var e = this.extractNumericValueFromBitArray(t, 4)
      return new h(this.information.getSize(), 0 === e ? h.FNC1 : e - 1, h.FNC1)
    }
    var n = this.extractNumericValueFromBitArray(t, 7)
    return new h(t + 7, (n - 8) / 11, (n - 8) % 11)
  }
  t.prototype.extractNumericValueFromBitArray = function (e, n) {
    return t.extractNumericValueFromBitArray(this.information, e, n)
  }
  t.extractNumericValueFromBitArray = function (t, e, n) {
    for (var r = 0, i = 0; i < n; ++i) {
      if (t.get(e + i)) {
        r |= 1 << n - i - 1
      }
    }
    return r
  }
  t.prototype.decodeGeneralPurposeField = function (t, e) {
    this.buffer.setLengthToZero()
    if (null != e) {
      this.buffer.append(e)
    }
    this.current.setPosition(t)
    var n = this.parseBlocks()
    return null != n && n.isRemaining() ? new d(this.current.getPosition(), this.buffer.toString(), n.getRemainingValue()) : new d(this.current.getPosition(), this.buffer.toString())
  }
  t.prototype.parseBlocks = function () {
    var t
    var e
    do {
      var n = this.current.getPosition()
      t = this.current.isAlpha() ? (e = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block()).isFinished() : (e = this.parseNumericBlock()).isFinished()
      if (!(n !== this.current.getPosition()) && !t) {
        break
      }
    } while (!t)
    return e.getDecodedInformation()
  }
  t.prototype.parseNumericBlock = function () {
    for (; this.isStillNumeric(this.current.getPosition());) {
      var t = this.decodeNumeric(this.current.getPosition())
      this.current.setPosition(t.getNewPosition())
      if (t.isFirstDigitFNC1()) {
        var e = undefined
        e = t.isSecondDigitFNC1() ? new d(this.current.getPosition(), this.buffer.toString()) : new d(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit())
        return new a(true, e)
      }
      this.buffer.append(t.getFirstDigit())
      if (t.isSecondDigitFNC1()) {
        e = new d(this.current.getPosition(), this.buffer.toString())
        return new a(true, e)
      }
      this.buffer.append(t.getSecondDigit())
    }
    if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
      this.current.setAlpha()
      this.current.incrementPosition(4)
    }
    return new a(false)
  }
  t.prototype.parseIsoIec646Block = function () {
    for (; this.isStillIsoIec646(this.current.getPosition());) {
      var t = this.decodeIsoIec646(this.current.getPosition())
      this.current.setPosition(t.getNewPosition())
      if (t.isFNC1()) {
        var e = new d(this.current.getPosition(), this.buffer.toString())
        return new a(true, e)
      }
      this.buffer.append(t.getValue())
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3)
      this.current.setNumeric()
    } else {
      if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5)
        } else {
          this.current.setPosition(this.information.getSize())
        }
        this.current.setAlpha()
      }
    }
    return new a(false)
  }
  t.prototype.parseAlphaBlock = function () {
    for (; this.isStillAlpha(this.current.getPosition());) {
      var t = this.decodeAlphanumeric(this.current.getPosition())
      this.current.setPosition(t.getNewPosition())
      if (t.isFNC1()) {
        var e = new d(this.current.getPosition(), this.buffer.toString())
        return new a(true, e)
      }
      this.buffer.append(t.getValue())
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3)
      this.current.setNumeric()
    } else {
      if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5)
        } else {
          this.current.setPosition(this.information.getSize())
        }
        this.current.setIsoIec646()
      }
    }
    return new a(false)
  }
  t.prototype.isStillIsoIec646 = function (t) {
    if (t + 5 > this.information.getSize()) {
      return false
    }
    var e = this.extractNumericValueFromBitArray(t, 5)
    if (e >= 5 && e < 16) {
      return true
    }
    if (t + 7 > this.information.getSize()) {
      return false
    }
    var n = this.extractNumericValueFromBitArray(t, 7)
    if (n >= 64 && n < 116) {
      return true
    }
    if (t + 8 > this.information.getSize()) {
      return false
    }
    var r = this.extractNumericValueFromBitArray(t, 8)
    return r >= 232 && r < 253
  }
  t.prototype.decodeIsoIec646 = function (t) {
    var e = this.extractNumericValueFromBitArray(t, 5)
    if (15 === e) {
      return new c(t + 5, c.FNC1)
    }
    if (e >= 5 && e < 15) {
      return new c(t + 5, "0" + (e - 5))
    }
    var n
    var i = this.extractNumericValueFromBitArray(t, 7)
    if (i >= 64 && i < 90) {
      return new c(t + 7, "" + (i + 1))
    }
    if (i >= 90 && i < 116) {
      return new c(t + 7, "" + (i + 7))
    }
    switch (this.extractNumericValueFromBitArray(t, 8)) {
      case 232:
        n = "!"
        break
      case 233:
        n = "\""
        break
      case 234:
        n = "%"
        break
      case 235:
        n = "&"
        break
      case 236:
        n = "'"
        break
      case 237:
        n = "("
        break
      case 238:
        n = ")"
        break
      case 239:
        n = "*"
        break
      case 240:
        n = "+"
        break
      case 241:
        n = ","
        break
      case 242:
        n = "-"
        break
      case 243:
        n = "."
        break
      case 244:
        n = "/"
        break
      case 245:
        n = ":"
        break
      case 246:
        n = ";"
        break
      case 247:
        n = "<"
        break
      case 248:
        n = "="
        break
      case 249:
        n = ">"
        break
      case 250:
        n = "?"
        break
      case 251:
        n = "_"
        break
      case 252:
        n = " "
        break
      default:
        throw new r.a()
    }
    return new c(t + 8, n)
  }
  t.prototype.isStillAlpha = function (t) {
    if (t + 5 > this.information.getSize()) {
      return false
    }
    var e = this.extractNumericValueFromBitArray(t, 5)
    if (e >= 5 && e < 16) {
      return true
    }
    if (t + 6 > this.information.getSize()) {
      return false
    }
    var n = this.extractNumericValueFromBitArray(t, 6)
    return n >= 16 && n < 63
  }
  t.prototype.decodeAlphanumeric = function (t) {
    var e = this.extractNumericValueFromBitArray(t, 5)
    if (15 === e) {
      return new c(t + 5, c.FNC1)
    }
    if (e >= 5 && e < 15) {
      return new c(t + 5, "0" + (e - 5))
    }
    var n
    var r = this.extractNumericValueFromBitArray(t, 6)
    if (r >= 32 && r < 58) {
      return new c(t + 6, "" + (r + 33))
    }
    switch (r) {
      case 58:
        n = "*"
        break
      case 59:
        n = ","
        break
      case 60:
        n = "-"
        break
      case 61:
        n = "."
        break
      case 62:
        n = "/"
        break
      default:
        throw new i.a("Decoding invalid alphanumeric value: " + r)
    }
    return new c(t + 6, n)
  }
  t.prototype.isAlphaTo646ToAlphaLatch = function (t) {
    if (t + 1 > this.information.getSize()) {
      return false
    }
    for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e) {
      if (2 === e) {
        if (!this.information.get(t + 2)) {
          return false
        }
      } else if (this.information.get(t + e)) {
        return false
      }
    }
    return true
  }
  t.prototype.isAlphaOr646ToNumericLatch = function (t) {
    if (t + 3 > this.information.getSize()) {
      return false
    }
    for (var e = t; e < t + 3; ++e) {
      if (this.information.get(e)) {
        return false
      }
    }
    return true
  }
  t.prototype.isNumericToAlphaNumericLatch = function (t) {
    if (t + 1 > this.information.getSize()) {
      return false
    }
    for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e) {
      if (this.information.get(t + e)) {
        return false
      }
    }
    return true
  }
  return t
}()
exports.a = g
