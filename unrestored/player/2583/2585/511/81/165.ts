"use strict";

var r = require("./63");
var i = require("./181/index");
var o = require("./105");
var a = require("./117");
var s = function () {
  function t(e, n) {
    if (undefined === e) {
      this.size = 0;
      this.bits = new Int32Array(1);
    } else {
      this.size = e;
      this.bits = undefined === n || null === n ? t.makeArray(e) : n;
    }
  }
  t.prototype.getSize = function () {
    return this.size;
  };
  t.prototype.getSizeInBytes = function () {
    return Math.floor((this.size + 7) / 8);
  };
  t.prototype.ensureCapacity = function (e) {
    if (e > 32 * this.bits.length) {
      var n = t.makeArray(e);
      a.a.arraycopy(this.bits, 0, n, 0, this.bits.length);
      this.bits = n;
    }
  };
  t.prototype.get = function (t) {
    return 0 !== (this.bits[Math.floor(t / 32)] & 1 << (31 & t));
  };
  t.prototype.set = function (t) {
    this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
  };
  t.prototype.flip = function (t) {
    this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
  };
  t.prototype.getNextSet = function (t) {
    var e = this.size;
    if (t >= e) {
      return e;
    }
    var n = this.bits;
    var r = Math.floor(t / 32);
    var i = n[r];
    i &= ~((1 << (31 & t)) - 1);
    for (var a = n.length; 0 === i;) {
      if (++r === a) {
        return e;
      }
      i = n[r];
    }
    var s = 32 * r + o.a.numberOfTrailingZeros(i);
    return s > e ? e : s;
  };
  t.prototype.getNextUnset = function (t) {
    var e = this.size;
    if (t >= e) {
      return e;
    }
    var n = this.bits;
    var r = Math.floor(t / 32);
    var i = ~n[r];
    i &= ~((1 << (31 & t)) - 1);
    for (var a = n.length; 0 === i;) {
      if (++r === a) {
        return e;
      }
      i = ~n[r];
    }
    var s = 32 * r + o.a.numberOfTrailingZeros(i);
    return s > e ? e : s;
  };
  t.prototype.setBulk = function (t, e) {
    this.bits[Math.floor(t / 32)] = e;
  };
  t.prototype.setRange = function (t, e) {
    if (e < t || t < 0 || e > this.size) {
      throw new r.a();
    }
    if (e !== t) {
      e--;
      for (var n = Math.floor(t / 32), i = Math.floor(e / 32), o = this.bits, a = n; a <= i; a++) {
        var s = (2 << (a < i ? 31 : 31 & e)) - (1 << (a > n ? 0 : 31 & t));
        o[a] |= s;
      }
    }
  };
  t.prototype.clear = function () {
    for (var t = this.bits.length, e = this.bits, n = 0; n < t; n++) {
      e[n] = 0;
    }
  };
  t.prototype.isRange = function (t, e, n) {
    if (e < t || t < 0 || e > this.size) {
      throw new r.a();
    }
    if (e === t) {
      return true;
    }
    e--;
    for (var i = Math.floor(t / 32), o = Math.floor(e / 32), a = this.bits, s = i; s <= o; s++) {
      var u = (2 << (s < o ? 31 : 31 & e)) - (1 << (s > i ? 0 : 31 & t)) & 4294967295;
      if ((a[s] & u) !== (n ? u : 0)) {
        return false;
      }
    }
    return true;
  };
  t.prototype.appendBit = function (t) {
    this.ensureCapacity(this.size + 1);
    if (t) {
      this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size);
    }
    this.size++;
  };
  t.prototype.appendBits = function (t, e) {
    if (e < 0 || e > 32) {
      throw new r.a("Num bits must be between 0 and 32");
    }
    this.ensureCapacity(this.size + e);
    for (var n = e; n > 0; n--) {
      this.appendBit(1 === (t >> n - 1 & 1));
    }
  };
  t.prototype.appendBitArray = function (t) {
    var e = t.size;
    this.ensureCapacity(this.size + e);
    for (var n = 0; n < e; n++) {
      this.appendBit(t.get(n));
    }
  };
  t.prototype.xor = function (t) {
    if (this.size !== t.size) {
      throw new r.a("Sizes don't match");
    }
    for (var e = this.bits, n = 0, i = e.length; n < i; n++) {
      e[n] ^= t.bits[n];
    }
  };
  t.prototype.toBytes = function (t, e, n, r) {
    for (var i = 0; i < r; i++) {
      for (var o = 0, a = 0; a < 8; a++) {
        if (this.get(t)) {
          o |= 1 << 7 - a;
        }
        t++;
      }
      e[n + i] = o;
    }
  };
  t.prototype.getBitArray = function () {
    return this.bits;
  };
  t.prototype.reverse = function () {
    for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), n = e + 1, r = this.bits, i = 0; i < n; i++) {
      var o = r[i];
      o = (o = (o = (o = (o = o >> 1 & 1431655765 | (1431655765 & o) << 1) >> 2 & 858993459 | (858993459 & o) << 2) >> 4 & 252645135 | (252645135 & o) << 4) >> 8 & 16711935 | (16711935 & o) << 8) >> 16 & 65535 | (65535 & o) << 16;
      t[e - i] = o;
    }
    if (this.size !== 32 * n) {
      var a = 32 * n - this.size;
      var s = t[0] >>> a;
      for (i = 1; i < n; i++) {
        var u = t[i];
        s |= u << 32 - a;
        t[i - 1] = s;
        s = u >>> a;
      }
      t[n - 1] = s;
    }
    this.bits = t;
  };
  t.makeArray = function (t) {
    return new Int32Array(Math.floor((t + 31) / 32));
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false;
    }
    var n = e;
    return this.size === n.size && i.a.equals(this.bits, n.bits);
  };
  t.prototype.hashCode = function () {
    return 31 * this.size + i.a.hashCode(this.bits);
  };
  t.prototype.toString = function () {
    for (var t = "", e = 0, n = this.size; e < n; e++) {
      if (0 === (7 & e)) {
        t += " ";
      }
      t += this.get(e) ? "X" : ".";
    }
    return t;
  };
  t.prototype.clone = function () {
    return new t(this.size, this.bits.slice());
  };
  return t;
}();
exports.a = s;