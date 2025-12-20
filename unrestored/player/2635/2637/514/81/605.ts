/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：605
 */

"use strict"

var r = function () {
  function t() {}
  t.singletonList = function (t) {
    return [t]
  }
  t.min = function (t, e) {
    return t.sort(e)[0]
  }
  return t
}()
var i = require("./166")
var o = function () {
  function t(t) {
    this.previous = t
  }
  t.prototype.getPrevious = function () {
    return this.previous
  }
  return t
}()
var a = require("./102")
var s = function () {
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
var u = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e) || this
    i.value = n
    i.bitCount = r
    return i
  }
  s(e, t)
  e.prototype.appendTo = function (t, e) {
    t.appendBits(this.value, this.bitCount)
  }
  e.prototype.add = function (t, n) {
    return new e(this, t, n)
  }
  e.prototype.addBinaryShift = function (t, n) {
    console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token")
    return new e(this, t, n)
  }
  e.prototype.toString = function () {
    var t = this.value & (1 << this.bitCount) - 1
    t |= 1 << this.bitCount
    return "<" + a.a.toBinaryString(t | 1 << this.bitCount).substring(1) + ">"
  }
  return e
}(o)
var c = function () {
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
var l = function (t) {
  function e(e, n, r) {
    var i = t.call(this, e, 0, 0) || this
    i.binaryShiftStart = n
    i.binaryShiftByteCount = r
    return i
  }
  c(e, t)
  e.prototype.appendTo = function (t, e) {
    for (var n = 0; n < this.binaryShiftByteCount; n++) {
      if (0 === n || 31 === n && this.binaryShiftByteCount <= 62) {
        t.appendBits(31, 5)
        if (this.binaryShiftByteCount > 62) {
          t.appendBits(this.binaryShiftByteCount - 31, 16)
        } else {
          if (0 === n) {
            t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5)
          } else {
            t.appendBits(this.binaryShiftByteCount - 31, 5)
          }
        }
      }
      t.appendBits(e[this.binaryShiftStart + n], 8)
    }
  }
  e.prototype.addBinaryShift = function (t, n) {
    return new e(this, t, n)
  }
  e.prototype.toString = function () {
    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">"
  }
  return e
}(u)
function d(t, e, n) {
  return new u(t, e, n)
}
var f = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"]
var h = new u(null, 0, 0)
var p = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])]
var m = require("./182/index")
var b = function (t) {
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
var g = function (t) {
  var e
  var /* [auto-meaningful-name] */r$return
  try {
    for (var r = b(t), i = r.next(); !i.done; i = r.next()) {
      var /* [auto-meaningful-name] */i$value = i.value
      m.a.fill(i$value, -1)
    }
  } catch (a) {
    e = {
      error: a
    }
  } finally {
    try {
      if (i && !i.done && (r$return = r.return)) {
        r$return.call(r)
      }
    } finally {
      if (e) {
        throw e.error
      }
    }
  }
  t[0][4] = 0
  t[1][4] = 0
  t[1][0] = 28
  t[3][4] = 0
  t[2][4] = 0
  t[2][0] = 15
  return t
}(m.a.createInt32Array(6, 6))
var v = require("./124")
var _ = function (t) {
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
var y = function () {
  function t(t, e, n, r) {
    this.token = t
    this.mode = e
    this.binaryShiftByteCount = n
    this.bitCount = r
  }
  t.prototype.getMode = function () {
    return this.mode
  }
  t.prototype.getToken = function () {
    return this.token
  }
  t.prototype.getBinaryShiftByteCount = function () {
    return this.binaryShiftByteCount
  }
  t.prototype.getBitCount = function () {
    return this.bitCount
  }
  t.prototype.latchAndAppend = function (e, n) {
    var /* [auto-meaningful-name] */this$bitCount = this.bitCount
    var /* [auto-meaningful-name] */this$token = this.token
    if (e !== this.mode) {
      var o = p[this.mode][e]
      this$token = d(this$token, 65535 & o, o >> 16)
      this$bitCount += o >> 16
    }
    var a = 2 === e ? 4 : 5
    return new t(this$token = d(this$token, n, a), e, 0, this$bitCount + a)
  }
  t.prototype.shiftAndAppend = function (e, n) {
    var /* [auto-meaningful-name] */this$token = this.token
    var i = 2 === this.mode ? 4 : 5
    this$token = d(this$token, g[this.mode][e], i)
    return new t(this$token = d(this$token, n, 5), this.mode, 0, this.bitCount + i + 5)
  }
  t.prototype.addBinaryShiftChar = function (e) {
    var /* [auto-meaningful-name] */this$token = this.token
    var /* [auto-meaningful-name] */this$mode = this.mode
    var /* [auto-meaningful-name] */this$bitCount = this.bitCount
    if (4 === this.mode || 2 === this.mode) {
      var o = p[this$mode][0]
      this$token = d(this$token, 65535 & o, o >> 16)
      this$bitCount += o >> 16
      this$mode = 0
    }
    var a = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8
    var s = new t(this$token, this$mode, this.binaryShiftByteCount + 1, this$bitCount + a)
    if (2078 === s.binaryShiftByteCount) {
      s = s.endBinaryShift(e + 1)
    }
    return s
  }
  t.prototype.endBinaryShift = function (e) {
    if (0 === this.binaryShiftByteCount) {
      return this
    }
    var /* [auto-meaningful-name] */this$token = this.token
    return new t(this$token = function (t, e, n) {
      return new l(t, e, n)
    }(this$token, e - this.binaryShiftByteCount, this.binaryShiftByteCount), this.mode, 0, this.bitCount)
  }
  t.prototype.isBetterThanOrEqualTo = function (e) {
    var n = this.bitCount + (p[this.mode][e.mode] >> 16)
    if (this.binaryShiftByteCount < e.binaryShiftByteCount) {
      n += t.calculateBinaryShiftCost(e) - t.calculateBinaryShiftCost(this)
    } else {
      if (this.binaryShiftByteCount > e.binaryShiftByteCount && e.binaryShiftByteCount > 0) {
        n += 10
      }
    }
    return n <= e.bitCount
  }
  t.prototype.toBitArray = function (t) {
    for (var e, /* [auto-meaningful-name] */s$return, r = [], /* [auto-meaningful-name] */this$endBinaryShiftT$length$token = this.endBinaryShift(t.length).token; null !== this$endBinaryShiftT$length$token; this$endBinaryShiftT$length$token = this$endBinaryShiftT$length$token.getPrevious()) {
      r.unshift(this$endBinaryShiftT$length$token)
    }
    var a = new i.a()
    try {
      for (var s = _(r), u = s.next(); !u.done; u = s.next()) {
        u.value.appendTo(a, t)
      }
    } catch (c) {
      e = {
        error: c
      }
    } finally {
      try {
        if (u && !u.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return a
  }
  t.prototype.toString = function () {
    return v.a.format("%s bits=%d bytes=%d", f[this.mode], this.bitCount, this.binaryShiftByteCount)
  }
  t.calculateBinaryShiftCost = function (t) {
    return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0
  }
  t.INITIAL_STATE = new t(h, 0, 0, 0)
  return t
}()
var w = function (t) {
  var e = v.a.getCharCode(" ")
  var n = v.a.getCharCode(".")
  var r = v.a.getCharCode(",")
  t[0][e] = 1
  for (var i = v.a.getCharCode("Z"), o = v.a.getCharCode("A"), a = o; a <= i; a++) {
    t[0][a] = a - o + 2
  }
  t[1][e] = 1
  var s = v.a.getCharCode("z")
  var u = v.a.getCharCode("a")
  for (a = u; a <= s; a++) {
    t[1][a] = a - u + 2
  }
  t[2][e] = 1
  var c = v.a.getCharCode("9")
  var l = v.a.getCharCode("0")
  for (a = l; a <= c; a++) {
    t[2][a] = a - l + 2
  }
  t[2][r] = 12
  t[2][n] = 13
  for (var d = ["\u0000", " ", "\u0001", "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007", "\b", "\t", "\n", "\u000b", "\f", "\r", "\u001b", "\u001c", "\u001d", "\u001e", "\u001f", "@", "\\", "^", "_", "`", "|", "~", ""], f = 0; f < d.length; f++) {
    t[3][v.a.getCharCode(d[f])] = f
  }
  var h = ["\u0000", "\r", "\u0000", "\u0000", "\u0000", "\u0000", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"]
  for (f = 0; f < h.length; f++) {
    if (v.a.getCharCode(h[f]) > 0) {
      t[4][v.a.getCharCode(h[f])] = f
    }
  }
  return t
}(m.a.createInt32Array(5, 256))
var E = function (t) {
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
var O = function () {
  function t(t) {
    this.text = t
  }
  t.prototype.encode = function () {
    for (var e = v.a.getCharCode(" "), n = v.a.getCharCode("\n"), i = r.singletonList(y.INITIAL_STATE), o = 0; o < this.text.length; o++) {
      var a = undefined
      var s = o + 1 < this.text.length ? this.text[o + 1] : 0
      switch (this.text[o]) {
        case v.a.getCharCode("\r"):
          a = s === n ? 2 : 0
          break
        case v.a.getCharCode("."):
          a = s === e ? 3 : 0
          break
        case v.a.getCharCode(","):
          a = s === e ? 4 : 0
          break
        case v.a.getCharCode(":"):
          a = s === e ? 5 : 0
          break
        default:
          a = 0
      }
      if (a > 0) {
        i = t.updateStateListForPair(i, o, a)
        o++
      } else {
        i = this.updateStateListForChar(i, o)
      }
    }
    return r.min(i, function (t, e) {
      return t.getBitCount() - e.getBitCount()
    }).toBitArray(this.text)
  }
  t.prototype.updateStateListForChar = function (e, n) {
    var r
    var /* [auto-meaningful-name] */a$return
    var o = []
    try {
      for (var a = E(e), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        this.updateStateForChar(s$value, n, o)
      }
    } catch (c) {
      r = {
        error: c
      }
    } finally {
      try {
        if (s && !s.done && (a$return = a.return)) {
          a$return.call(a)
        }
      } finally {
        if (r) {
          throw r.error
        }
      }
    }
    return t.simplifyStates(o)
  }
  t.prototype.updateStateForChar = function (t, e, n) {
    for (var r = 255 & this.text[e], i = w[t.getMode()][r] > 0, o = null, a = 0; a <= 4; a++) {
      var s = w[a][r]
      if (s > 0) {
        if (null == o) {
          o = t.endBinaryShift(e)
        }
        if (!i || a === t.getMode() || 2 === a) {
          var u = o.latchAndAppend(a, s)
          n.push(u)
        }
        if (!i && g[t.getMode()][a] >= 0) {
          var c = o.shiftAndAppend(a, s)
          n.push(c)
        }
      }
    }
    if (t.getBinaryShiftByteCount() > 0 || 0 === w[t.getMode()][r]) {
      var l = t.addBinaryShiftChar(e)
      n.push(l)
    }
  }
  t.updateStateListForPair = function (t, e, n) {
    var r
    var /* [auto-meaningful-name] */a$return
    var o = []
    try {
      for (var a = E(t), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        this.updateStateForPair(s$value, e, n, o)
      }
    } catch (c) {
      r = {
        error: c
      }
    } finally {
      try {
        if (s && !s.done && (a$return = a.return)) {
          a$return.call(a)
        }
      } finally {
        if (r) {
          throw r.error
        }
      }
    }
    return this.simplifyStates(o)
  }
  t.updateStateForPair = function (t, e, n, r) {
    var i = t.endBinaryShift(e)
    r.push(i.latchAndAppend(4, n))
    if (4 !== t.getMode()) {
      r.push(i.shiftAndAppend(4, n))
    }
    if (3 === n || 4 === n) {
      var o = i.latchAndAppend(2, 16 - n).latchAndAppend(2, 1)
      r.push(o)
    }
    if (t.getBinaryShiftByteCount() > 0) {
      var a = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1)
      r.push(a)
    }
  }
  t.simplifyStates = function (t) {
    var e
    var /* [auto-meaningful-name] */a$return
    var r
    var /* [auto-meaningful-name] */d$return
    var o = []
    try {
      for (var a = E(t), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        var c = true
        var l = function (t) {
          if (t.isBetterThanOrEqualTo(s$value)) {
            c = false
            return "break"
          }
          if (s$value.isBetterThanOrEqualTo(t)) {
            o = o.filter(function (e) {
              return e !== t
            })
          }
        }
        try {
          for (r = undefined, d = E(o), f = d.next(), undefined; !f.done; f = d.next()) {
            var d
            var f
            if ("break" === l(f.value)) {
              break
            }
          }
        } catch (h) {
          r = {
            error: h
          }
        } finally {
          try {
            if (f && !f.done && (d$return = d.return)) {
              d$return.call(d)
            }
          } finally {
            if (r) {
              throw r.error
            }
          }
        }
        if (c) {
          o.push(s$value)
        }
      }
    } catch (p) {
      e = {
        error: p
      }
    } finally {
      try {
        if (s && !s.done && (a$return = a.return)) {
          a$return.call(a)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return o
  }
  return t
}()
exports.a = O
