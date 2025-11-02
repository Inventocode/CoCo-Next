/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：165
 */

"use strict"

var n = require("./63")
var o = require("./181/index")
var i = require("./105")
var a = require("./117")
var u = function () {
  function t(e, r) {
    if (undefined === e) {
      this.size = 0
      this.bits = new Int32Array(1)
    } else {
      this.size = e
      this.bits = undefined === r || null === r ? t.makeArray(e) : r
    }
  }
  t.prototype.getSize = function () {
    return this.size
  }
  t.prototype.getSizeInBytes = function () {
    return Math.floor((this.size + 7) / 8)
  }
  t.prototype.ensureCapacity = function (e) {
    if (e > 32 * this.bits.length) {
      var r = t.makeArray(e)
      a.a.arraycopy(this.bits, 0, r, 0, this.bits.length)
      this.bits = r
    }
  }
  t.prototype.get = function (t) {
    return 0 !== (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
  }
  t.prototype.set = function (t) {
    this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
  }
  t.prototype.flip = function (t) {
    this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
  }
  t.prototype.getNextSet = function (t) {
    var this$size = this.size
    if (t >= this$size) {
      return this$size
    }
    var this$bits = this.bits
    var n = Math.floor(t / 32)
    var o = this$bits[n]
    o &= ~((1 << (31 & t)) - 1)
    for (var this$bits$length = this$bits.length; 0 === o;) {
      if (++n === this$bits$length) {
        return this$size
      }
      o = this$bits[n]
    }
    var u = 32 * n + i.a.numberOfTrailingZeros(o)
    return u > this$size ? this$size : u
  }
  t.prototype.getNextUnset = function (t) {
    var this$size = this.size
    if (t >= this$size) {
      return this$size
    }
    var this$bits = this.bits
    var n = Math.floor(t / 32)
    var o = ~this$bits[n]
    o &= ~((1 << (31 & t)) - 1)
    for (var this$bits$length = this$bits.length; 0 === o;) {
      if (++n === this$bits$length) {
        return this$size
      }
      o = ~this$bits[n]
    }
    var u = 32 * n + i.a.numberOfTrailingZeros(o)
    return u > this$size ? this$size : u
  }
  t.prototype.setBulk = function (t, e) {
    this.bits[Math.floor(t / 32)] = e
  }
  t.prototype.setRange = function (t, e) {
    if (e < t || t < 0 || e > this.size) {
      throw new n.a()
    }
    if (e !== t) {
      e--
      for (var r = Math.floor(t / 32), o = Math.floor(e / 32), this$bits = this.bits, a = r; a <= o; a++) {
        var u = (2 << (a < o ? 31 : 31 & e)) - (1 << (a > r ? 0 : 31 & t))
        this$bits[a] |= u
      }
    }
  }
  t.prototype.clear = function () {
    for (var this$bits$length = this.bits.length, this$bits = this.bits, r = 0; r < this$bits$length; r++) {
      this$bits[r] = 0
    }
  }
  t.prototype.isRange = function (t, e, r) {
    if (e < t || t < 0 || e > this.size) {
      throw new n.a()
    }
    if (e === t) {
      return true
    }
    e--
    for (var o = Math.floor(t / 32), i = Math.floor(e / 32), this$bits = this.bits, u = o; u <= i; u++) {
      var s = (2 << (u < i ? 31 : 31 & e)) - (1 << (u > o ? 0 : 31 & t)) & 4294967295
      if ((this$bits[u] & s) !== (r ? s : 0)) {
        return false
      }
    }
    return true
  }
  t.prototype.appendBit = function (t) {
    this.ensureCapacity(this.size + 1)
    if (t) {
      this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)
    }
    this.size++
  }
  t.prototype.appendBits = function (t, e) {
    if (e < 0 || e > 32) {
      throw new n.a("Num bits must be between 0 and 32")
    }
    this.ensureCapacity(this.size + e)
    for (var r = e; r > 0; r--) {
      this.appendBit(1 === (t >> r - 1 & 1))
    }
  }
  t.prototype.appendBitArray = function (t) {
    var t$size = t.size
    this.ensureCapacity(this.size + t$size)
    for (var r = 0; r < t$size; r++) {
      this.appendBit(t.get(r))
    }
  }
  t.prototype.xor = function (t) {
    if (this.size !== t.size) {
      throw new n.a("Sizes don't match")
    }
    for (var this$bits = this.bits, r = 0, this$bits$length = this$bits.length; r < this$bits$length; r++) {
      this$bits[r] ^= t.bits[r]
    }
  }
  t.prototype.toBytes = function (t, e, r, n) {
    for (var o = 0; o < n; o++) {
      for (var i = 0, a = 0; a < 8; a++) {
        if (this.get(t)) {
          i |= 1 << 7 - a
        }
        t++
      }
      e[r + o] = i
    }
  }
  t.prototype.getBitArray = function () {
    return this.bits
  }
  t.prototype.reverse = function () {
    for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), r = e + 1, this$bits = this.bits, o = 0; o < r; o++) {
      var i = this$bits[o]
      i = (i = (i = (i = (i = i >> 1 & 1431655765 | (1431655765 & i) << 1) >> 2 & 858993459 | (858993459 & i) << 2) >> 4 & 252645135 | (252645135 & i) << 4) >> 8 & 16711935 | (16711935 & i) << 8) >> 16 & 65535 | (65535 & i) << 16
      t[e - o] = i
    }
    if (this.size !== 32 * r) {
      var a = 32 * r - this.size
      var u = t[0] >>> a
      for (o = 1; o < r; o++) {
        var s = t[o]
        u |= s << 32 - a
        t[o - 1] = u
        u = s >>> a
      }
      t[r - 1] = u
    }
    this.bits = t
  }
  t.makeArray = function (t) {
    return new Int32Array(Math.floor((t + 31) / 32))
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var r = e
    return this.size === r.size && o.a.equals(this.bits, r.bits)
  }
  t.prototype.hashCode = function () {
    return 31 * this.size + o.a.hashCode(this.bits)
  }
  t.prototype.toString = function () {
    for (var t = "", e = 0, this$size = this.size; e < this$size; e++) {
      if (0 === (7 & e)) {
        t += " "
      }
      t += this.get(e) ? "X" : "."
    }
    return t
  }
  t.prototype.clone = function () {
    return new t(this.size, this.bits.slice())
  }
  return t
}()
exports.a = u
