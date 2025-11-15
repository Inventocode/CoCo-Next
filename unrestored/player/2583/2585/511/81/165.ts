/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：165
 */

"use strict"

var r = require("./63")
var i = require("./181/index")
var o = require("./105")
var a = require("./117")
var s = function () {
  function t(e, n) {
    if (undefined === e) {
      this.size = 0
      this.bits = new Int32Array(1)
    } else {
      this.size = e
      this.bits = undefined === n || null === n ? t.makeArray(e) : n
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
      var n = t.makeArray(e)
      a.a.arraycopy(this.bits, 0, n, 0, this.bits.length)
      this.bits = n
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
    var /* [auto-meaningful-name] */this$size = this.size
    if (t >= this$size) {
      return this$size
    }
    var /* [auto-meaningful-name] */this$bits = this.bits
    var r = Math.floor(t / 32)
    var i = this$bits[r]
    i &= ~((1 << (31 & t)) - 1)
    for (var /* [auto-meaningful-name] */this$bits$length = this$bits.length; 0 === i;) {
      if (++r === this$bits$length) {
        return this$size
      }
      i = this$bits[r]
    }
    var s = 32 * r + o.a.numberOfTrailingZeros(i)
    return s > this$size ? this$size : s
  }
  t.prototype.getNextUnset = function (t) {
    var /* [auto-meaningful-name] */this$size = this.size
    if (t >= this$size) {
      return this$size
    }
    var /* [auto-meaningful-name] */this$bits = this.bits
    var r = Math.floor(t / 32)
    var i = ~this$bits[r]
    i &= ~((1 << (31 & t)) - 1)
    for (var /* [auto-meaningful-name] */this$bits$length = this$bits.length; 0 === i;) {
      if (++r === this$bits$length) {
        return this$size
      }
      i = ~this$bits[r]
    }
    var s = 32 * r + o.a.numberOfTrailingZeros(i)
    return s > this$size ? this$size : s
  }
  t.prototype.setBulk = function (t, e) {
    this.bits[Math.floor(t / 32)] = e
  }
  t.prototype.setRange = function (t, e) {
    if (e < t || t < 0 || e > this.size) {
      throw new r.a()
    }
    if (e !== t) {
      e--
      for (var n = Math.floor(t / 32), i = Math.floor(e / 32), /* [auto-meaningful-name] */this$bits = this.bits, a = n; a <= i; a++) {
        var s = (2 << (a < i ? 31 : 31 & e)) - (1 << (a > n ? 0 : 31 & t))
        this$bits[a] |= s
      }
    }
  }
  t.prototype.clear = function () {
    for (var /* [auto-meaningful-name] */this$bits$length = this.bits.length, /* [auto-meaningful-name] */this$bits = this.bits, n = 0; n < this$bits$length; n++) {
      this$bits[n] = 0
    }
  }
  t.prototype.isRange = function (t, e, n) {
    if (e < t || t < 0 || e > this.size) {
      throw new r.a()
    }
    if (e === t) {
      return true
    }
    e--
    for (var i = Math.floor(t / 32), o = Math.floor(e / 32), /* [auto-meaningful-name] */this$bits = this.bits, s = i; s <= o; s++) {
      var u = (2 << (s < o ? 31 : 31 & e)) - (1 << (s > i ? 0 : 31 & t)) & 4294967295
      if ((this$bits[s] & u) !== (n ? u : 0)) {
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
      throw new r.a("Num bits must be between 0 and 32")
    }
    this.ensureCapacity(this.size + e)
    for (var n = e; n > 0; n--) {
      this.appendBit(1 === (t >> n - 1 & 1))
    }
  }
  t.prototype.appendBitArray = function (t) {
    var /* [auto-meaningful-name] */t$size = t.size
    this.ensureCapacity(this.size + t$size)
    for (var n = 0; n < t$size; n++) {
      this.appendBit(t.get(n))
    }
  }
  t.prototype.xor = function (t) {
    if (this.size !== t.size) {
      throw new r.a("Sizes don't match")
    }
    for (var /* [auto-meaningful-name] */this$bits = this.bits, n = 0, /* [auto-meaningful-name] */this$bits$length = this$bits.length; n < this$bits$length; n++) {
      this$bits[n] ^= t.bits[n]
    }
  }
  t.prototype.toBytes = function (t, e, n, r) {
    for (var i = 0; i < r; i++) {
      for (var o = 0, a = 0; a < 8; a++) {
        if (this.get(t)) {
          o |= 1 << 7 - a
        }
        t++
      }
      e[n + i] = o
    }
  }
  t.prototype.getBitArray = function () {
    return this.bits
  }
  t.prototype.reverse = function () {
    for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), n = e + 1, /* [auto-meaningful-name] */this$bits = this.bits, i = 0; i < n; i++) {
      var o = this$bits[i]
      o = (o = (o = (o = (o = o >> 1 & 1431655765 | (1431655765 & o) << 1) >> 2 & 858993459 | (858993459 & o) << 2) >> 4 & 252645135 | (252645135 & o) << 4) >> 8 & 16711935 | (16711935 & o) << 8) >> 16 & 65535 | (65535 & o) << 16
      t[e - i] = o
    }
    if (this.size !== 32 * n) {
      var a = 32 * n - this.size
      var s = t[0] >>> a
      for (i = 1; i < n; i++) {
        var u = t[i]
        s |= u << 32 - a
        t[i - 1] = s
        s = u >>> a
      }
      t[n - 1] = s
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
    var n = e
    return this.size === n.size && i.a.equals(this.bits, n.bits)
  }
  t.prototype.hashCode = function () {
    return 31 * this.size + i.a.hashCode(this.bits)
  }
  t.prototype.toString = function () {
    for (var t = "", e = 0, /* [auto-meaningful-name] */this$size = this.size; e < this$size; e++) {
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
exports.a = s
