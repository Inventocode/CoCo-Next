/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：504
 */

"use strict"

var n
var o = require("./336")
var i = require("./191")
var a = require("./337")
var u = require("./222")
var s = require("./56")
var c = require("./124")
var f = require("./102")
!function (t) {
  t[t.UPPER = 0] = "UPPER"
  t[t.LOWER = 1] = "LOWER"
  t[t.MIXED = 2] = "MIXED"
  t[t.DIGIT = 3] = "DIGIT"
  t[t.PUNCT = 4] = "PUNCT"
  t[t.BINARY = 5] = "BINARY"
}(n || (n = {}))
var h = function () {
  function t() {}
  t.prototype.decode = function (e) {
    this.ddata = e
    var r = e.getBits()
    var n = this.extractBits(r)
    var i = this.correctBits(n)
    var a = t.convertBoolArrayToByteArray(i)
    var u = t.getEncodedData(i)
    var s = new o.a(a, u, null, null)
    s.setNumBits(i.length)
    return s
  }
  t.highLevelDecode = function (t) {
    return this.getEncodedData(t)
  }
  t.getEncodedData = function (e) {
    for (var /* [auto-meaningful-name] */e$length = e.length, /* [auto-meaningful-name] */n$UPPER = n.UPPER, /* [auto-meaningful-name] */_n$UPPER = n.UPPER, a = "", u = 0; u < e$length;) {
      if (_n$UPPER === n.BINARY) {
        if (e$length - u < 5) {
          break
        }
        var s = t.readCode(e, u, 5)
        u += 5
        if (0 === s) {
          if (e$length - u < 11) {
            break
          }
          s = t.readCode(e, u, 11) + 31
          u += 11
        }
        for (var f = 0; f < s; f++) {
          if (e$length - u < 8) {
            u = e$length
            break
          }
          var h = t.readCode(e, u, 8)
          a += c.a.castAsNonUtf8Char(h)
          u += 8
        }
        _n$UPPER = n$UPPER
      } else {
        var l = _n$UPPER === n.DIGIT ? 4 : 5
        if (e$length - u < l) {
          break
        }
        h = t.readCode(e, u, l)
        u += l
        var d = t.getCharacter(_n$UPPER, h)
        if (d.startsWith("CTRL_")) {
          n$UPPER = _n$UPPER
          _n$UPPER = t.getTable(d.charAt(5))
          if ("L" === d.charAt(6)) {
            n$UPPER = _n$UPPER
          }
        } else {
          a += d
          _n$UPPER = n$UPPER
        }
      }
    }
    return a
  }
  t.getTable = function (t) {
    switch (t) {
      case "L":
        return n.LOWER
      case "P":
        return n.PUNCT
      case "M":
        return n.MIXED
      case "D":
        return n.DIGIT
      case "B":
        return n.BINARY
      case "U":
      default:
        return n.UPPER
    }
  }
  t.getCharacter = function (e, r) {
    switch (e) {
      case n.UPPER:
        return t.UPPER_TABLE[r]
      case n.LOWER:
        return t.LOWER_TABLE[r]
      case n.MIXED:
        return t.MIXED_TABLE[r]
      case n.PUNCT:
        return t.PUNCT_TABLE[r]
      case n.DIGIT:
        return t.DIGIT_TABLE[r]
      default:
        throw new u.a("Bad table")
    }
  }
  t.prototype.correctBits = function (e) {
    var r
    var n
    if (this.ddata.getNbLayers() <= 2) {
      n = 6
      r = i.a.AZTEC_DATA_6
    } else {
      if (this.ddata.getNbLayers() <= 8) {
        n = 8
        r = i.a.AZTEC_DATA_8
      } else {
        if (this.ddata.getNbLayers() <= 22) {
          n = 10
          r = i.a.AZTEC_DATA_10
        } else {
          n = 12
          r = i.a.AZTEC_DATA_12
        }
      }
    }
    var o = this.ddata.getNbDatablocks()
    var u = e.length / n
    if (u < o) {
      throw new s.a()
    }
    for (var c = e.length % n, f = new Int32Array(u), h = 0; h < u; h++, c += n) {
      f[h] = t.readCode(e, c, n)
    }
    try {
      new a.a(r).decode(f, u - o)
    } catch (v) {
      throw new s.a(v)
    }
    var l = (1 << n) - 1
    var d = 0
    for (h = 0; h < o; h++) {
      if (0 === (y = f[h]) || y === l) {
        throw new s.a()
      }
      if (!(1 !== y && y !== l - 1)) {
        d++
      }
    }
    var p = new Array(o * n - d)
    var g = 0
    for (h = 0; h < o; h++) {
      var y
      if (1 === (y = f[h]) || y === l - 1) {
        p.fill(y > 1, g, g + n - 1)
        g += n - 1
      } else {
        for (var w = n - 1; w >= 0; --w) {
          p[g++] = 0 !== (y & 1 << w)
        }
      }
    }
    return p
  }
  t.prototype.extractBits = function (t) {
    var e = this.ddata.isCompact()
    var r = this.ddata.getNbLayers()
    var n = (e ? 11 : 14) + 4 * r
    var o = new Int32Array(n)
    var i = new Array(this.totalBitsInLayer(r, e))
    if (e) {
      for (var a = 0; a < o.length; a++) {
        o[a] = a
      }
    } else {
      var u = n + 1 + 2 * f.a.truncDivision(f.a.truncDivision(n, 2) - 1, 15)
      var s = n / 2
      var c = f.a.truncDivision(u, 2)
      for (a = 0; a < s; a++) {
        var h = a + f.a.truncDivision(a, 15)
        o[s - a - 1] = c - h - 1
        o[s + a] = c + h + 1
      }
    }
    a = 0
    for (var l = 0; a < r; a++) {
      for (var d = 4 * (r - a) + (e ? 9 : 12), p = 2 * a, g = n - 1 - p, y = 0; y < d; y++) {
        for (var w = 2 * y, v = 0; v < 2; v++) {
          i[l + w + v] = t.get(o[p + v], o[p + y])
          i[l + 2 * d + w + v] = t.get(o[p + y], o[g - v])
          i[l + 4 * d + w + v] = t.get(o[g - v], o[g - y])
          i[l + 6 * d + w + v] = t.get(o[g - y], o[p + v])
        }
      }
      l += 8 * d
    }
    return i
  }
  t.readCode = function (t, e, r) {
    for (var n = 0, o = e; o < e + r; o++) {
      n <<= 1
      if (t[o]) {
        n |= 1
      }
    }
    return n
  }
  t.readByte = function (e, r) {
    var n = e.length - r
    return n >= 8 ? t.readCode(e, r, 8) : t.readCode(e, r, n) << 8 - n
  }
  t.convertBoolArrayToByteArray = function (e) {
    for (var r = new Uint8Array((e.length + 7) / 8), n = 0; n < r.length; n++) {
      r[n] = t.readByte(e, 8 * n)
    }
    return r
  }
  t.prototype.totalBitsInLayer = function (t, e) {
    return ((e ? 88 : 112) + 16 * t) * t
  }
  t.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"]
  t.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"]
  t.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"]
  t.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"]
  t.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"]
  return t
}()
exports.a = h
