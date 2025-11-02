/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：589
 */

"use strict"

var r
var i = require("./334")
var o = require("./454")
var a = require("./109")
var s = require("./226")
var u = require("./126")
var c = require("./56")
var l = require("./221")
!function (t) {
  t[t.PAD_ENCODE = 0] = "PAD_ENCODE"
  t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE"
  t[t.C40_ENCODE = 2] = "C40_ENCODE"
  t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE"
  t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE"
  t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE"
  t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE"
}(r || (r = {}))
var d = function () {
  function t() {}
  t.decode = function (t) {
    var e = new o.a(t)
    var n = new a.a()
    var s = new a.a()
    var u = new Array()
    var r$ASCII_ENCODE = r.ASCII_ENCODE
    do {
      if (r$ASCII_ENCODE === r.ASCII_ENCODE) {
        r$ASCII_ENCODE = this.decodeAsciiSegment(e, n, s)
      } else {
        switch (r$ASCII_ENCODE) {
          case r.C40_ENCODE:
            this.decodeC40Segment(e, n)
            break
          case r.TEXT_ENCODE:
            this.decodeTextSegment(e, n)
            break
          case r.ANSIX12_ENCODE:
            this.decodeAnsiX12Segment(e, n)
            break
          case r.EDIFACT_ENCODE:
            this.decodeEdifactSegment(e, n)
            break
          case r.BASE256_ENCODE:
            this.decodeBase256Segment(e, n, u)
            break
          default:
            throw new c.a()
        }
        r$ASCII_ENCODE = r.ASCII_ENCODE
      }
    } while (r$ASCII_ENCODE !== r.PAD_ENCODE && e.available() > 0)
    if (s.length() > 0) {
      n.append(s.toString())
    }
    return new i.a(t, n.toString(), 0 === u.length ? null : u, null)
  }
  t.decodeAsciiSegment = function (t, e, n) {
    var i = false
    do {
      var o = t.readBits(8)
      if (0 === o) {
        throw new c.a()
      }
      if (o <= 128) {
        if (i) {
          o += 128
        }
        e.append(String.fromCharCode(o - 1))
        return r.ASCII_ENCODE
      }
      if (129 === o) {
        return r.PAD_ENCODE
      }
      if (o <= 229) {
        var a = o - 130
        if (a < 10) {
          e.append("0")
        }
        e.append("" + a)
      } else {
        switch (o) {
          case 230:
            return r.C40_ENCODE
          case 231:
            return r.BASE256_ENCODE
          case 232:
            e.append(String.fromCharCode(29))
            break
          case 233:
          case 234:
            break
          case 235:
            i = true
            break
          case 236:
            e.append("[)>\u001e05\u001d")
            n.insert(0, "\u001e\u0004")
            break
          case 237:
            e.append("[)>\u001e06\u001d")
            n.insert(0, "\u001e\u0004")
            break
          case 238:
            return r.ANSIX12_ENCODE
          case 239:
            return r.TEXT_ENCODE
          case 240:
            return r.EDIFACT_ENCODE
          case 241:
            break
          default:
            if (254 !== o || 0 !== t.available()) {
              throw new c.a()
            }
        }
      }
    } while (t.available() > 0)
    return r.ASCII_ENCODE
  }
  t.decodeC40Segment = function (t, e) {
    var n = false
    var r = []
    var i = 0
    do {
      if (8 === t.available()) {
        return
      }
      var o = t.readBits(8)
      if (254 === o) {
        return
      }
      this.parseTwoBytes(o, t.readBits(8), r)
      for (var a = 0; a < 3; a++) {
        var s = r[a]
        switch (i) {
          case 0:
            if (s < 3) {
              i = s + 1
            } else {
              if (!(s < this.C40_BASIC_SET_CHARS.length)) {
                throw new c.a()
              }
              var u = this.C40_BASIC_SET_CHARS[s]
              if (n) {
                e.append(String.fromCharCode(u.charCodeAt(0) + 128))
                n = false
              } else {
                e.append(u)
              }
            }
            break
          case 1:
            if (n) {
              e.append(String.fromCharCode(s + 128))
              n = false
            } else {
              e.append(String.fromCharCode(s))
            }
            i = 0
            break
          case 2:
            if (s < this.C40_SHIFT2_SET_CHARS.length) {
              u = this.C40_SHIFT2_SET_CHARS[s]
              if (n) {
                e.append(String.fromCharCode(u.charCodeAt(0) + 128))
                n = false
              } else {
                e.append(u)
              }
            } else {
              switch (s) {
                case 27:
                  e.append(String.fromCharCode(29))
                  break
                case 30:
                  n = true
                  break
                default:
                  throw new c.a()
              }
            }
            i = 0
            break
          case 3:
            if (n) {
              e.append(String.fromCharCode(s + 224))
              n = false
            } else {
              e.append(String.fromCharCode(s + 96))
            }
            i = 0
            break
          default:
            throw new c.a()
        }
      }
    } while (t.available() > 0)
  }
  t.decodeTextSegment = function (t, e) {
    var n = false
    var r = []
    var i = 0
    do {
      if (8 === t.available()) {
        return
      }
      var o = t.readBits(8)
      if (254 === o) {
        return
      }
      this.parseTwoBytes(o, t.readBits(8), r)
      for (var a = 0; a < 3; a++) {
        var s = r[a]
        switch (i) {
          case 0:
            if (s < 3) {
              i = s + 1
            } else {
              if (!(s < this.TEXT_BASIC_SET_CHARS.length)) {
                throw new c.a()
              }
              var u = this.TEXT_BASIC_SET_CHARS[s]
              if (n) {
                e.append(String.fromCharCode(u.charCodeAt(0) + 128))
                n = false
              } else {
                e.append(u)
              }
            }
            break
          case 1:
            if (n) {
              e.append(String.fromCharCode(s + 128))
              n = false
            } else {
              e.append(String.fromCharCode(s))
            }
            i = 0
            break
          case 2:
            if (s < this.TEXT_SHIFT2_SET_CHARS.length) {
              u = this.TEXT_SHIFT2_SET_CHARS[s]
              if (n) {
                e.append(String.fromCharCode(u.charCodeAt(0) + 128))
                n = false
              } else {
                e.append(u)
              }
            } else {
              switch (s) {
                case 27:
                  e.append(String.fromCharCode(29))
                  break
                case 30:
                  n = true
                  break
                default:
                  throw new c.a()
              }
            }
            i = 0
            break
          case 3:
            if (!(s < this.TEXT_SHIFT3_SET_CHARS.length)) {
              throw new c.a()
            }
            u = this.TEXT_SHIFT3_SET_CHARS[s]
            if (n) {
              e.append(String.fromCharCode(u.charCodeAt(0) + 128))
              n = false
            } else {
              e.append(u)
            }
            i = 0
            break
          default:
            throw new c.a()
        }
      }
    } while (t.available() > 0)
  }
  t.decodeAnsiX12Segment = function (t, e) {
    var n = []
    do {
      if (8 === t.available()) {
        return
      }
      var r = t.readBits(8)
      if (254 === r) {
        return
      }
      this.parseTwoBytes(r, t.readBits(8), n)
      for (var i = 0; i < 3; i++) {
        var o = n[i]
        switch (o) {
          case 0:
            e.append("\r")
            break
          case 1:
            e.append("*")
            break
          case 2:
            e.append(">")
            break
          case 3:
            e.append(" ")
            break
          default:
            if (o < 14) {
              e.append(String.fromCharCode(o + 44))
            } else {
              if (!(o < 40)) {
                throw new c.a()
              }
              e.append(String.fromCharCode(o + 51))
            }
        }
      }
    } while (t.available() > 0)
  }
  t.parseTwoBytes = function (t, e, n) {
    var r = (t << 8) + e - 1
    var i = Math.floor(r / 1600)
    n[0] = i
    r -= 1600 * i
    i = Math.floor(r / 40)
    n[1] = i
    n[2] = r - 40 * i
  }
  t.decodeEdifactSegment = function (t, e) {
    do {
      if (t.available() <= 16) {
        return
      }
      for (var n = 0; n < 4; n++) {
        var r = t.readBits(6)
        if (31 === r) {
          var i = 8 - t.getBitOffset()
          return void (8 !== i && t.readBits(i))
        }
        if (0 === (32 & r)) {
          r |= 64
        }
        e.append(String.fromCharCode(r))
      }
    } while (t.available() > 0)
  }
  t.decodeBase256Segment = function (t, e, n) {
    var r
    var i = 1 + t.getByteOffset()
    var o = this.unrandomize255State(t.readBits(8), i++)
    if ((r = 0 === o ? t.available() / 8 | 0 : o < 250 ? o : 250 * (o - 249) + this.unrandomize255State(t.readBits(8), i++)) < 0) {
      throw new c.a()
    }
    for (var a = new Uint8Array(r), d = 0; d < r; d++) {
      if (t.available() < 8) {
        throw new c.a()
      }
      a[d] = this.unrandomize255State(t.readBits(8), i++)
    }
    n.push(a)
    try {
      e.append(s.a.decode(a, u.a.ISO88591))
    } catch (f) {
      throw new l.a("Platform does not support required encoding: " + f.message)
    }
  }
  t.unrandomize255State = function (t, e) {
    var n = t - (149 * e % 255 + 1)
    return n >= 0 ? n : n + 256
  }
  t.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  t.C40_SHIFT2_SET_CHARS = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"]
  t.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS
  t.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)]
  return t
}()
exports.a = d
