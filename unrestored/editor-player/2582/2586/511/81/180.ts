/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：180
 */

"use strict";

var n = require("./165");
var o = require("./117");
var i = require("./181/index");
var a = require("./109");
var u = require("./63");
var s = function () {
  function t(t, e, r, n) {
    this.width = t;
    this.height = e;
    this.rowSize = r;
    this.bits = n;
    if (!(undefined !== e && null !== e)) {
      e = t;
    }
    this.height = e;
    if (t < 1 || e < 1) {
      throw new u.a("Both dimensions must be greater than 0");
    }
    if (!(undefined !== r && null !== r)) {
      r = Math.floor((t + 31) / 32);
    }
    this.rowSize = r;
    if (!(undefined !== n && null !== n)) {
      this.bits = new Int32Array(this.rowSize * this.height);
    }
  }
  t.parseFromBooleanArray = function (e) {
    for (var r = e.length, n = e[0].length, o = new t(n, r), i = 0; i < r; i++) {
      for (var a = e[i], u = 0; u < n; u++) {
        if (a[u]) {
          o.set(u, i);
        }
      }
    }
    return o;
  };
  t.parseFromString = function (e, r, n) {
    if (null === e) {
      throw new u.a("stringRepresentation cannot be null");
    }
    for (var o = new Array(e.length), i = 0, a = 0, s = -1, c = 0, f = 0; f < e.length;) {
      if ("\n" === e.charAt(f) || "\r" === e.charAt(f)) {
        if (i > a) {
          if (-1 === s) {
            s = i - a;
          } else if (i - a !== s) {
            throw new u.a("row lengths do not match");
          }
          a = i;
          c++;
        }
        f++;
      } else if (e.substring(f, f + r.length) === r) {
        f += r.length;
        o[i] = true;
        i++;
      } else {
        if (e.substring(f, f + n.length) !== n) {
          throw new u.a("illegal character encountered: " + e.substring(f));
        }
        f += n.length;
        o[i] = false;
        i++;
      }
    }
    if (i > a) {
      if (-1 === s) {
        s = i - a;
      } else if (i - a !== s) {
        throw new u.a("row lengths do not match");
      }
      c++;
    }
    for (var h = new t(s, c), l = 0; l < i; l++) {
      if (o[l]) {
        h.set(Math.floor(l % s), Math.floor(l / s));
      }
    }
    return h;
  };
  t.prototype.get = function (t, e) {
    var r = e * this.rowSize + Math.floor(t / 32);
    return 0 !== (this.bits[r] >>> (31 & t) & 1);
  };
  t.prototype.set = function (t, e) {
    var r = e * this.rowSize + Math.floor(t / 32);
    this.bits[r] |= 1 << (31 & t) & 4294967295;
  };
  t.prototype.unset = function (t, e) {
    var r = e * this.rowSize + Math.floor(t / 32);
    this.bits[r] &= ~(1 << (31 & t) & 4294967295);
  };
  t.prototype.flip = function (t, e) {
    var r = e * this.rowSize + Math.floor(t / 32);
    this.bits[r] ^= 1 << (31 & t) & 4294967295;
  };
  t.prototype.xor = function (t) {
    if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) {
      throw new u.a("input matrix dimensions do not match");
    }
    for (var e = new n.a(Math.floor(this.width / 32) + 1), r = this.rowSize, o = this.bits, i = 0, a = this.height; i < a; i++) {
      for (var s = i * r, c = t.getRow(i, e).getBitArray(), f = 0; f < r; f++) {
        o[s + f] ^= c[f];
      }
    }
  };
  t.prototype.clear = function () {
    for (var t = this.bits, e = t.length, r = 0; r < e; r++) {
      t[r] = 0;
    }
  };
  t.prototype.setRegion = function (t, e, r, n) {
    if (e < 0 || t < 0) {
      throw new u.a("Left and top must be nonnegative");
    }
    if (n < 1 || r < 1) {
      throw new u.a("Height and width must be at least 1");
    }
    var o = t + r;
    var i = e + n;
    if (i > this.height || o > this.width) {
      throw new u.a("The region must fit inside the matrix");
    }
    for (var a = this.rowSize, s = this.bits, c = e; c < i; c++) {
      for (var f = c * a, h = t; h < o; h++) {
        s[f + Math.floor(h / 32)] |= 1 << (31 & h) & 4294967295;
      }
    }
  };
  t.prototype.getRow = function (t, e) {
    if (null === e || undefined === e || e.getSize() < this.width) {
      e = new n.a(this.width);
    } else {
      e.clear();
    }
    for (var r = this.rowSize, o = this.bits, i = t * r, a = 0; a < r; a++) {
      e.setBulk(32 * a, o[i + a]);
    }
    return e;
  };
  t.prototype.setRow = function (t, e) {
    o.a.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize);
  };
  t.prototype.rotate180 = function () {
    for (var t = this.getWidth(), e = this.getHeight(), r = new n.a(t), o = new n.a(t), i = 0, a = Math.floor((e + 1) / 2); i < a; i++) {
      r = this.getRow(i, r);
      o = this.getRow(e - 1 - i, o);
      r.reverse();
      o.reverse();
      this.setRow(i, o);
      this.setRow(e - 1 - i, r);
    }
  };
  t.prototype.getEnclosingRectangle = function () {
    for (var t = this.width, e = this.height, r = this.rowSize, n = this.bits, o = t, i = e, a = -1, u = -1, s = 0; s < e; s++) {
      for (var c = 0; c < r; c++) {
        var f = n[s * r + c];
        if (0 !== f) {
          if (s < i) {
            i = s;
          }
          if (s > u) {
            u = s;
          }
          if (32 * c < o) {
            for (var h = 0; 0 === (f << 31 - h & 4294967295);) {
              h++;
            }
            if (32 * c + h < o) {
              o = 32 * c + h;
            }
          }
          if (32 * c + 31 > a) {
            for (h = 31; f >>> h === 0;) {
              h--;
            }
            if (32 * c + h > a) {
              a = 32 * c + h;
            }
          }
        }
      }
    }
    return a < o || u < i ? null : Int32Array.from([o, i, a - o + 1, u - i + 1]);
  };
  t.prototype.getTopLeftOnBit = function () {
    for (var t = this.rowSize, e = this.bits, r = 0; r < e.length && 0 === e[r];) {
      r++;
    }
    if (r === e.length) {
      return null;
    }
    for (var n = r / t, o = r % t * 32, i = e[r], a = 0; 0 === (i << 31 - a & 4294967295);) {
      a++;
    }
    o += a;
    return Int32Array.from([o, n]);
  };
  t.prototype.getBottomRightOnBit = function () {
    for (var t = this.rowSize, e = this.bits, r = e.length - 1; r >= 0 && 0 === e[r];) {
      r--;
    }
    if (r < 0) {
      return null;
    }
    for (var n = Math.floor(r / t), o = 32 * Math.floor(r % t), i = e[r], a = 31; i >>> a === 0;) {
      a--;
    }
    o += a;
    return Int32Array.from([o, n]);
  };
  t.prototype.getWidth = function () {
    return this.width;
  };
  t.prototype.getHeight = function () {
    return this.height;
  };
  t.prototype.getRowSize = function () {
    return this.rowSize;
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false;
    }
    var r = e;
    return this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && i.a.equals(this.bits, r.bits);
  };
  t.prototype.hashCode = function () {
    var t = this.width;
    return t = 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize) + i.a.hashCode(this.bits);
  };
  t.prototype.toString = function (t, e, r) {
    if (undefined === t) {
      t = "X ";
    }
    if (undefined === e) {
      e = "  ";
    }
    if (undefined === r) {
      r = "\n";
    }
    return this.buildToString(t, e, r);
  };
  t.prototype.buildToString = function (t, e, r) {
    for (var n = new a.a(), o = 0, i = this.height; o < i; o++) {
      for (var u = 0, s = this.width; u < s; u++) {
        n.append(this.get(u, o) ? t : e);
      }
      n.append(r);
    }
    return n.toString();
  };
  t.prototype.clone = function () {
    return new t(this.width, this.height, this.rowSize, this.bits.slice());
  };
  return t;
}();
exports.a = s;