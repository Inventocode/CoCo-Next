/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：181
 */

"use strict"

var r = require("./166")
var i = require("./115")
var o = require("./182/index")
var a = require("./108")
var s = require("./63")
var u = function () {
  function t(t, e, n, r) {
    this.width = t
    this.height = e
    this.rowSize = n
    this.bits = r
    if (!(undefined !== e && null !== e)) {
      e = t
    }
    this.height = e
    if (t < 1 || e < 1) {
      throw new s.a("Both dimensions must be greater than 0")
    }
    if (!(undefined !== n && null !== n)) {
      n = Math.floor((t + 31) / 32)
    }
    this.rowSize = n
    if (!(undefined !== r && null !== r)) {
      this.bits = new Int32Array(this.rowSize * this.height)
    }
  }
  t.parseFromBooleanArray = function (e) {
    for (var /* [auto-meaningful-name] */e$length = e.length, /* [auto-meaningful-name] */e0$length = e[0].length, i = new t(e0$length, e$length), o = 0; o < e$length; o++) {
      for (var a = e[o], s = 0; s < e0$length; s++) {
        if (a[s]) {
          i.set(s, o)
        }
      }
    }
    return i
  }
  t.parseFromString = function (e, n, r) {
    if (null === e) {
      throw new s.a("stringRepresentation cannot be null")
    }
    for (var i = new Array(e.length), o = 0, a = 0, u = -1, c = 0, l = 0; l < e.length;) {
      if ("\n" === e.charAt(l) || "\r" === e.charAt(l)) {
        if (o > a) {
          if (-1 === u) {
            u = o - a
          } else if (o - a !== u) {
            throw new s.a("row lengths do not match")
          }
          a = o
          c++
        }
        l++
      } else if (e.substring(l, l + n.length) === n) {
        l += n.length
        i[o] = true
        o++
      } else {
        if (e.substring(l, l + r.length) !== r) {
          throw new s.a("illegal character encountered: " + e.substring(l))
        }
        l += r.length
        i[o] = false
        o++
      }
    }
    if (o > a) {
      if (-1 === u) {
        u = o - a
      } else if (o - a !== u) {
        throw new s.a("row lengths do not match")
      }
      c++
    }
    for (var d = new t(u, c), f = 0; f < o; f++) {
      if (i[f]) {
        d.set(Math.floor(f % u), Math.floor(f / u))
      }
    }
    return d
  }
  t.prototype.get = function (t, e) {
    var n = e * this.rowSize + Math.floor(t / 32)
    return 0 !== (this.bits[n] >>> (31 & t) & 1)
  }
  t.prototype.set = function (t, e) {
    var n = e * this.rowSize + Math.floor(t / 32)
    this.bits[n] |= 1 << (31 & t) & 4294967295
  }
  t.prototype.unset = function (t, e) {
    var n = e * this.rowSize + Math.floor(t / 32)
    this.bits[n] &= ~(1 << (31 & t) & 4294967295)
  }
  t.prototype.flip = function (t, e) {
    var n = e * this.rowSize + Math.floor(t / 32)
    this.bits[n] ^= 1 << (31 & t) & 4294967295
  }
  t.prototype.xor = function (t) {
    if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) {
      throw new s.a("input matrix dimensions do not match")
    }
    for (var e = new r.a(Math.floor(this.width / 32) + 1), /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, o = 0, /* [auto-meaningful-name] */this$height = this.height; o < this$height; o++) {
      for (var u = o * this$rowSize, c = t.getRow(o, e).getBitArray(), l = 0; l < this$rowSize; l++) {
        this$bits[u + l] ^= c[l]
      }
    }
  }
  t.prototype.clear = function () {
    for (var /* [auto-meaningful-name] */this$bits = this.bits, /* [auto-meaningful-name] */this$bits$length = this$bits.length, n = 0; n < this$bits$length; n++) {
      this$bits[n] = 0
    }
  }
  t.prototype.setRegion = function (t, e, n, r) {
    if (e < 0 || t < 0) {
      throw new s.a("Left and top must be nonnegative")
    }
    if (r < 1 || n < 1) {
      throw new s.a("Height and width must be at least 1")
    }
    var i = t + n
    var o = e + r
    if (o > this.height || i > this.width) {
      throw new s.a("The region must fit inside the matrix")
    }
    for (var /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, c = e; c < o; c++) {
      for (var l = c * this$rowSize, d = t; d < i; d++) {
        this$bits[l + Math.floor(d / 32)] |= 1 << (31 & d) & 4294967295
      }
    }
  }
  t.prototype.getRow = function (t, e) {
    if (null === e || undefined === e || e.getSize() < this.width) {
      e = new r.a(this.width)
    } else {
      e.clear()
    }
    for (var /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, o = t * this$rowSize, a = 0; a < this$rowSize; a++) {
      e.setBulk(32 * a, this$bits[o + a])
    }
    return e
  }
  t.prototype.setRow = function (t, e) {
    i.a.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
  }
  t.prototype.rotate180 = function () {
    for (var t = this.getWidth(), e = this.getHeight(), n = new r.a(t), i = new r.a(t), o = 0, a = Math.floor((e + 1) / 2); o < a; o++) {
      n = this.getRow(o, n)
      i = this.getRow(e - 1 - o, i)
      n.reverse()
      i.reverse()
      this.setRow(o, i)
      this.setRow(e - 1 - o, n)
    }
  }
  t.prototype.getEnclosingRectangle = function () {
    for (var /* [auto-meaningful-name] */this$width = this.width, /* [auto-meaningful-name] */this$height = this.height, /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, i = this$width, o = this$height, a = -1, s = -1, u = 0; u < this$height; u++) {
      for (var c = 0; c < this$rowSize; c++) {
        var l = this$bits[u * this$rowSize + c]
        if (0 !== l) {
          if (u < o) {
            o = u
          }
          if (u > s) {
            s = u
          }
          if (32 * c < i) {
            for (var d = 0; 0 === (l << 31 - d & 4294967295);) {
              d++
            }
            if (32 * c + d < i) {
              i = 32 * c + d
            }
          }
          if (32 * c + 31 > a) {
            for (d = 31; l >>> d === 0;) {
              d--
            }
            if (32 * c + d > a) {
              a = 32 * c + d
            }
          }
        }
      }
    }
    return a < i || s < o ? null : Int32Array.from([i, o, a - i + 1, s - o + 1])
  }
  t.prototype.getTopLeftOnBit = function () {
    for (var /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, n = 0; n < this$bits.length && 0 === this$bits[n];) {
      n++
    }
    if (n === this$bits.length) {
      return null
    }
    for (var r = n / this$rowSize, i = n % this$rowSize * 32, o = this$bits[n], a = 0; 0 === (o << 31 - a & 4294967295);) {
      a++
    }
    i += a
    return Int32Array.from([i, r])
  }
  t.prototype.getBottomRightOnBit = function () {
    for (var /* [auto-meaningful-name] */this$rowSize = this.rowSize, /* [auto-meaningful-name] */this$bits = this.bits, n = this$bits.length - 1; n >= 0 && 0 === this$bits[n];) {
      n--
    }
    if (n < 0) {
      return null
    }
    for (var r = Math.floor(n / this$rowSize), i = 32 * Math.floor(n % this$rowSize), o = this$bits[n], a = 31; o >>> a === 0;) {
      a--
    }
    i += a
    return Int32Array.from([i, r])
  }
  t.prototype.getWidth = function () {
    return this.width
  }
  t.prototype.getHeight = function () {
    return this.height
  }
  t.prototype.getRowSize = function () {
    return this.rowSize
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var n = e
    return this.width === n.width && this.height === n.height && this.rowSize === n.rowSize && o.a.equals(this.bits, n.bits)
  }
  t.prototype.hashCode = function () {
    var /* [auto-meaningful-name] */this$width = this.width
    return this$width = 31 * (this$width = 31 * (this$width = 31 * (this$width = 31 * this$width + this.width) + this.height) + this.rowSize) + o.a.hashCode(this.bits)
  }
  t.prototype.toString = function (t, e, n) {
    if (undefined === t) {
      t = "X "
    }
    if (undefined === e) {
      e = "  "
    }
    if (undefined === n) {
      n = "\n"
    }
    return this.buildToString(t, e, n)
  }
  t.prototype.buildToString = function (t, e, n) {
    for (var r = new a.a(), i = 0, /* [auto-meaningful-name] */this$height = this.height; i < this$height; i++) {
      for (var s = 0, /* [auto-meaningful-name] */this$width = this.width; s < this$width; s++) {
        r.append(this.get(s, i) ? t : e)
      }
      r.append(n)
    }
    return r.toString()
  }
  t.prototype.clone = function () {
    return new t(this.width, this.height, this.rowSize, this.bits.slice())
  }
  return t
}()
exports.a = u
