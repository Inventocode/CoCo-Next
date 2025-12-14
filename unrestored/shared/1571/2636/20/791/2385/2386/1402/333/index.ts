/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：333
 */

"use strict"

var r = require("./1806")
var i = require("../../../../2393/2394/1288")
var o = require("./1807")
function a() {
  return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}
function s(e, t) {
  if (a() < t) {
    throw new RangeError("Invalid typed array length")
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    (e = new Uint8Array(t)).__proto__ = c.prototype
  } else {
    if (null === e) {
      e = new c(t)
    }
    e.length = t
  }
  return e
}
function c(e, t, n) {
  if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) {
    return new c(e, t, n)
  }
  if ("number" === typeof e) {
    if ("string" === typeof t) {
      throw new Error("If encoding is specified then the first argument must be a string")
    }
    return f(this, e)
  }
  return u(this, e, t, n)
}
function u(e, t, n, r) {
  if ("number" === typeof t) {
    throw new TypeError("\"value\" argument must not be a number")
  }
  return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
    t.byteLength
    if (n < 0 || t.byteLength < n) {
      throw new RangeError("'offset' is out of bounds")
    }
    if (t.byteLength < n + (r || 0)) {
      throw new RangeError("'length' is out of bounds")
    }
    t = undefined === n && undefined === r ? new Uint8Array(t) : undefined === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r)
    if (c.TYPED_ARRAY_SUPPORT) {
      (e = t).__proto__ = c.prototype
    } else {
      e = d(e, t)
    }
    return e
  }(e, t, n, r) : "string" === typeof t ? function (e, t, n) {
    if (!("string" === typeof n && "" !== n)) {
      n = "utf8"
    }
    if (!c.isEncoding(n)) {
      throw new TypeError("\"encoding\" must be a valid string encoding")
    }
    var r = 0 | p(t, n)
    var i = (e = s(e, r)).write(t, n)
    if (i !== r) {
      e = e.slice(0, i)
    }
    return e
  }(e, t, n) : function (e, t) {
    if (c.isBuffer(t)) {
      var n = 0 | h(t.length)
      if (!(0 === (e = s(e, n)).length)) {
        t.copy(e, 0, 0, n)
      }
      return e
    }
    if (t) {
      if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) {
        return "number" !== typeof t.length || (t$length = t.length) !== t$length ? s(e, 0) : d(e, t)
      }
      if ("Buffer" === t.type && o(t.data)) {
        return d(e, t.data)
      }
    }
    var /* [auto-meaningful-name] */t$length
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
  }(e, t)
}
function l(e) {
  if ("number" !== typeof e) {
    throw new TypeError("\"size\" argument must be a number")
  }
  if (e < 0) {
    throw new RangeError("\"size\" argument must not be negative")
  }
}
function f(e, t) {
  l(t)
  e = s(e, t < 0 ? 0 : 0 | h(t))
  if (!c.TYPED_ARRAY_SUPPORT) {
    for (var n = 0; n < t; ++n) {
      e[n] = 0
    }
  }
  return e
}
function d(e, t) {
  var n = t.length < 0 ? 0 : 0 | h(t.length)
  e = s(e, n)
  for (var r = 0; r < n; r += 1) {
    e[r] = 255 & t[r]
  }
  return e
}
function h(e) {
  if (e >= a()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes")
  }
  return 0 | e
}
function p(e, t) {
  if (c.isBuffer(e)) {
    return e.length
  }
  if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) {
    return e.byteLength
  }
  if ("string" !== typeof e) {
    e = "" + e
  }
  var /* [auto-meaningful-name] */e$length = e.length
  if (0 === e$length) {
    return 0
  }
  for (var r = false;;) {
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return e$length
      case "utf8":
      case "utf-8":
      case undefined:
        return U(e).length
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e$length
      case "hex":
        return e$length >>> 1
      case "base64":
        return H(e).length
      default:
        if (r) {
          return U(e).length
        }
        t = ("" + t).toLowerCase()
        r = true
    }
  }
}
function _(e, t, n) {
  var r = false
  if (undefined === t || t < 0) {
    t = 0
  }
  if (t > this.length) {
    return ""
  }
  if (undefined === n || n > this.length) {
    n = this.length
  }
  if (n <= 0) {
    return ""
  }
  if ((n >>>= 0) <= (t >>>= 0)) {
    return ""
  }
  for (e || (e = "utf8");;) {
    switch (e) {
      case "hex":
        return T(this, t, n)
      case "utf8":
      case "utf-8":
        return O(this, t, n)
      case "ascii":
        return k(this, t, n)
      case "latin1":
      case "binary":
        return S(this, t, n)
      case "base64":
        return C(this, t, n)
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return B(this, t, n)
      default:
        if (r) {
          throw new TypeError("Unknown encoding: " + e)
        }
        e = (e + "").toLowerCase()
        r = true
    }
  }
}
function A(e, t, n) {
  var r = e[t]
  e[t] = e[n]
  e[n] = r
}
function g(e, t, n, r, i) {
  if (0 === e.length) {
    return -1
  }
  if ("string" === typeof n) {
    r = n
    n = 0
  } else {
    if (n > 2147483647) {
      n = 2147483647
    } else {
      if (n < -2147483648) {
        n = -2147483648
      }
    }
  }
  n = +n
  if (isNaN(n)) {
    n = i ? 0 : e.length - 1
  }
  if (n < 0) {
    n = e.length + n
  }
  if (n >= e.length) {
    if (i) {
      return -1
    }
    n = e.length - 1
  } else if (n < 0) {
    if (!i) {
      return -1
    }
    n = 0
  }
  if ("string" === typeof t) {
    t = c.from(t, r)
  }
  if (c.isBuffer(t)) {
    return 0 === t.length ? -1 : v(e, t, n, r, i)
  }
  if ("number" === typeof t) {
    t &= 255
    return c.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, i)
  }
  throw new TypeError("val must be string, number or Buffer")
}
function v(e, t, n, r, i) {
  var o
  var a = 1
  var /* [auto-meaningful-name] */e$length = e.length
  var /* [auto-meaningful-name] */t$length = t.length
  if (undefined !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
    if (e.length < 2 || t.length < 2) {
      return -1
    }
    a = 2
    e$length /= 2
    t$length /= 2
    n /= 2
  }
  function u(e, t) {
    return 1 === a ? e[t] : e.readUInt16BE(t * a)
  }
  if (i) {
    var l = -1
    for (o = n; o < e$length; o++) {
      if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
        if (-1 === l) {
          l = o
        }
        if (o - l + 1 === t$length) {
          return l * a
        }
      } else {
        if (-1 !== l) {
          o -= o - l
        }
        l = -1
      }
    }
  } else {
    for (n + t$length > e$length && (n = e$length - t$length), o = n; o >= 0; o--) {
      for (var f = true, d = 0; d < t$length; d++) {
        if (u(e, o + d) !== u(t, d)) {
          f = false
          break
        }
      }
      if (f) {
        return o
      }
    }
  }
  return -1
}
function m(e, t, n, r) {
  n = Number(n) || 0
  var i = e.length - n
  if (r) {
    if ((r = Number(r)) > i) {
      r = i
    }
  } else {
    r = i
  }
  var /* [auto-meaningful-name] */t$length = t.length
  if (t$length % 2 !== 0) {
    throw new TypeError("Invalid hex string")
  }
  if (r > t$length / 2) {
    r = t$length / 2
  }
  for (var a = 0; a < r; ++a) {
    var s = parseInt(t.substr(2 * a, 2), 16)
    if (isNaN(s)) {
      return a
    }
    e[n + a] = s
  }
  return a
}
function y(e, t, n, r) {
  return V(U(t, e.length - n), e, n, r)
}
function b(e, t, n, r) {
  return V(function (e) {
    for (var t = [], n = 0; n < e.length; ++n) {
      t.push(255 & e.charCodeAt(n))
    }
    return t
  }(t), e, n, r)
}
function w(e, t, n, r) {
  return b(e, t, n, r)
}
function E(e, t, n, r) {
  return V(H(t), e, n, r)
}
function x(e, t, n, r) {
  return V(function (e, t) {
    for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
      n = e.charCodeAt(a)
      r = n >> 8
      i = n % 256
      o.push(i)
      o.push(r)
    }
    return o
  }(t, e.length - n), e, n, r)
}
function C(e, t, n) {
  return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
}
function O(e, t, n) {
  n = Math.min(e.length, n)
  for (var r = [], i = t; i < n;) {
    var o
    var a
    var s
    var c
    var u = e[i]
    var l = null
    var f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1
    if (i + f <= n) {
      switch (f) {
        case 1:
          if (u < 128) {
            l = u
          }
          break
        case 2:
          if (128 === (192 & (o = e[i + 1])) && (c = (31 & u) << 6 | 63 & o) > 127) {
            l = c
          }
          break
        case 3:
          o = e[i + 1]
          a = e[i + 2]
          if (128 === (192 & o) && 128 === (192 & a) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343)) {
            l = c
          }
          break
        case 4:
          o = e[i + 1]
          a = e[i + 2]
          s = e[i + 3]
          if (128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112) {
            l = c
          }
      }
    }
    if (null === l) {
      l = 65533
      f = 1
    } else {
      if (l > 65535) {
        l -= 65536
        r.push(l >>> 10 & 1023 | 55296)
        l = 56320 | 1023 & l
      }
    }
    r.push(l)
    i += f
  }
  return function (e) {
    var /* [auto-meaningful-name] */e$length = e.length
    if (e$length <= 4096) {
      return String.fromCharCode.apply(String, e)
    }
    var n = ""
    var r = 0
    for (; r < e$length;) {
      n += String.fromCharCode.apply(String, e.slice(r, r += 4096))
    }
    return n
  }(r)
}
exports.Buffer = c
exports.SlowBuffer = function (e) {
  if (+e != e) {
    e = 0
  }
  return c.alloc(+e)
}
exports.INSPECT_MAX_BYTES = 50
c.TYPED_ARRAY_SUPPORT = undefined !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : function () {
  try {
    var e = new Uint8Array(1)
    e.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42
      }
    }
    return 42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
  } catch (t) {
    return false
  }
}()
exports.kMaxLength = a()
c.poolSize = 8192
c._augment = function (e) {
  e.__proto__ = c.prototype
  return e
}
c.from = function (e, t, n) {
  return u(null, e, t, n)
}
if (c.TYPED_ARRAY_SUPPORT) {
  c.prototype.__proto__ = Uint8Array.prototype
  c.__proto__ = Uint8Array
  if ("undefined" !== typeof Symbol && Symbol.species && c[Symbol.species] === c) {
    Object.defineProperty(c, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}
c.alloc = function (e, t, n) {
  return function (e, t, n, r) {
    l(t)
    return t <= 0 ? s(e, t) : undefined !== n ? "string" === typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
  }(null, e, t, n)
}
c.allocUnsafe = function (e) {
  return f(null, e)
}
c.allocUnsafeSlow = function (e) {
  return f(null, e)
}
c.isBuffer = function (e) {
  return !(null == e || !e._isBuffer)
}
c.compare = function (e, t) {
  if (!c.isBuffer(e) || !c.isBuffer(t)) {
    throw new TypeError("Arguments must be Buffers")
  }
  if (e === t) {
    return 0
  }
  for (var /* [auto-meaningful-name] */e$length = e.length, /* [auto-meaningful-name] */t$length = t.length, i = 0, o = Math.min(e$length, t$length); i < o; ++i) {
    if (e[i] !== t[i]) {
      e$length = e[i]
      t$length = t[i]
      break
    }
  }
  return e$length < t$length ? -1 : t$length < e$length ? 1 : 0
}
c.isEncoding = function (e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true
    default:
      return false
  }
}
c.concat = function (e, t) {
  if (!o(e)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers")
  }
  if (0 === e.length) {
    return c.alloc(0)
  }
  var n
  if (undefined === t) {
    for (t = 0, n = 0; n < e.length; ++n) {
      t += e[n].length
    }
  }
  var r = c.allocUnsafe(t)
  var i = 0
  for (n = 0; n < e.length; ++n) {
    var a = e[n]
    if (!c.isBuffer(a)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers")
    }
    a.copy(r, i)
    i += a.length
  }
  return r
}
c.byteLength = p
c.prototype._isBuffer = true
c.prototype.swap16 = function () {
  var /* [auto-meaningful-name] */this$length = this.length
  if (this$length % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits")
  }
  for (var t = 0; t < this$length; t += 2) {
    A(this, t, t + 1)
  }
  return this
}
c.prototype.swap32 = function () {
  var /* [auto-meaningful-name] */this$length = this.length
  if (this$length % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits")
  }
  for (var t = 0; t < this$length; t += 4) {
    A(this, t, t + 3)
    A(this, t + 1, t + 2)
  }
  return this
}
c.prototype.swap64 = function () {
  var /* [auto-meaningful-name] */this$length = this.length
  if (this$length % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits")
  }
  for (var t = 0; t < this$length; t += 8) {
    A(this, t, t + 7)
    A(this, t + 1, t + 6)
    A(this, t + 2, t + 5)
    A(this, t + 3, t + 4)
  }
  return this
}
c.prototype.toString = function () {
  var e = 0 | this.length
  return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : _.apply(this, arguments)
}
c.prototype.equals = function (e) {
  if (!c.isBuffer(e)) {
    throw new TypeError("Argument must be a Buffer")
  }
  return this === e || 0 === c.compare(this, e)
}
c.prototype.inspect = function () {
  var e = ""
  var /* [auto-meaningful-name] */exports$INSPECT_MAX_BYTES = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    e = this.toString("hex", 0, exports$INSPECT_MAX_BYTES).match(/.{2}/g).join(" ")
    if (this.length > exports$INSPECT_MAX_BYTES) {
      e += " ... "
    }
  }
  return "<Buffer " + e + ">"
}
c.prototype.compare = function (e, t, n, r, i) {
  if (!c.isBuffer(e)) {
    throw new TypeError("Argument must be a Buffer")
  }
  if (undefined === t) {
    t = 0
  }
  if (undefined === n) {
    n = e ? e.length : 0
  }
  if (undefined === r) {
    r = 0
  }
  if (undefined === i) {
    i = this.length
  }
  if (t < 0 || n > e.length || r < 0 || i > this.length) {
    throw new RangeError("out of range index")
  }
  if (r >= i && t >= n) {
    return 0
  }
  if (r >= i) {
    return -1
  }
  if (t >= n) {
    return 1
  }
  if (this === e) {
    return 0
  }
  for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(o, a), u = this.slice(r, i), l = e.slice(t, n), f = 0; f < s; ++f) {
    if (u[f] !== l[f]) {
      o = u[f]
      a = l[f]
      break
    }
  }
  return o < a ? -1 : a < o ? 1 : 0
}
c.prototype.includes = function (e, t, n) {
  return -1 !== this.indexOf(e, t, n)
}
c.prototype.indexOf = function (e, t, n) {
  return g(this, e, t, n, true)
}
c.prototype.lastIndexOf = function (e, t, n) {
  return g(this, e, t, n, false)
}
c.prototype.write = function (e, t, n, r) {
  if (undefined === t) {
    r = "utf8"
    n = this.length
    t = 0
  } else if (undefined === n && "string" === typeof t) {
    r = t
    n = this.length
    t = 0
  } else {
    if (!isFinite(t)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
    }
    t |= 0
    if (isFinite(n)) {
      n |= 0
      if (undefined === r) {
        r = "utf8"
      }
    } else {
      r = n
      n = undefined
    }
  }
  var i = this.length - t
  if (undefined === n || n > i) {
    n = i
  }
  if (e.length > 0 && (n < 0 || t < 0) || t > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds")
  }
  if (!r) {
    r = "utf8"
  }
  for (var o = false;;) {
    switch (r) {
      case "hex":
        return m(this, e, t, n)
      case "utf8":
      case "utf-8":
        return y(this, e, t, n)
      case "ascii":
        return b(this, e, t, n)
      case "latin1":
      case "binary":
        return w(this, e, t, n)
      case "base64":
        return E(this, e, t, n)
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return x(this, e, t, n)
      default:
        if (o) {
          throw new TypeError("Unknown encoding: " + r)
        }
        r = ("" + r).toLowerCase()
        o = true
    }
  }
}
c.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}
function k(e, t, n) {
  var r = ""
  n = Math.min(e.length, n)
  for (var i = t; i < n; ++i) {
    r += String.fromCharCode(127 & e[i])
  }
  return r
}
function S(e, t, n) {
  var r = ""
  n = Math.min(e.length, n)
  for (var i = t; i < n; ++i) {
    r += String.fromCharCode(e[i])
  }
  return r
}
function T(e, t, n) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (!t || t < 0) {
    t = 0
  }
  if (!n || n < 0 || n > e$length) {
    n = e$length
  }
  for (var i = "", o = t; o < n; ++o) {
    i += j(e[o])
  }
  return i
}
function B(e, t, n) {
  for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
    i += String.fromCharCode(r[o] + 256 * r[o + 1])
  }
  return i
}
function D(e, t, n) {
  if (e % 1 !== 0 || e < 0) {
    throw new RangeError("offset is not uint")
  }
  if (e + t > n) {
    throw new RangeError("Trying to access beyond buffer length")
  }
}
function I(e, t, n, r, i, o) {
  if (!c.isBuffer(e)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance")
  }
  if (t > i || t < o) {
    throw new RangeError("\"value\" argument is out of bounds")
  }
  if (n + r > e.length) {
    throw new RangeError("Index out of range")
  }
}
function R(e, t, n, r) {
  if (t < 0) {
    t = 65535 + t + 1
  }
  for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) {
    e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
  }
}
function F(e, t, n, r) {
  if (t < 0) {
    t = 4294967295 + t + 1
  }
  for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) {
    e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
  }
}
function P(e, t, n, r, i, o) {
  if (n + r > e.length) {
    throw new RangeError("Index out of range")
  }
  if (n < 0) {
    throw new RangeError("Index out of range")
  }
}
function N(e, t, n, r, o) {
  if (!o) {
    P(e, 0, n, 4)
  }
  i.write(e, t, n, r, 23, 4)
  return n + 4
}
function M(e, t, n, r, o) {
  if (!o) {
    P(e, 0, n, 8)
  }
  i.write(e, t, n, r, 52, 8)
  return n + 8
}
c.prototype.slice = function (e, t) {
  var n
  var /* [auto-meaningful-name] */this$length = this.length
  if ((e = ~~e) < 0) {
    if ((e += this$length) < 0) {
      e = 0
    }
  } else {
    if (e > this$length) {
      e = this$length
    }
  }
  if ((t = undefined === t ? this$length : ~~t) < 0) {
    if ((t += this$length) < 0) {
      t = 0
    }
  } else {
    if (t > this$length) {
      t = this$length
    }
  }
  if (t < e) {
    t = e
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    (n = this.subarray(e, t)).__proto__ = c.prototype
  } else {
    var i = t - e
    n = new c(i, undefined)
    for (var o = 0; o < i; ++o) {
      n[o] = this[o + e]
    }
  }
  return n
}
c.prototype.readUIntLE = function (e, t, n) {
  e |= 0
  t |= 0
  if (!n) {
    D(e, t, this.length)
  }
  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
    r += this[e + o] * i
  }
  return r
}
c.prototype.readUIntBE = function (e, t, n) {
  e |= 0
  t |= 0
  if (!n) {
    D(e, t, this.length)
  }
  for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) {
    r += this[e + --t] * i
  }
  return r
}
c.prototype.readUInt8 = function (e, t) {
  if (!t) {
    D(e, 1, this.length)
  }
  return this[e]
}
c.prototype.readUInt16LE = function (e, t) {
  if (!t) {
    D(e, 2, this.length)
  }
  return this[e] | this[e + 1] << 8
}
c.prototype.readUInt16BE = function (e, t) {
  if (!t) {
    D(e, 2, this.length)
  }
  return this[e] << 8 | this[e + 1]
}
c.prototype.readUInt32LE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
}
c.prototype.readUInt32BE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
}
c.prototype.readIntLE = function (e, t, n) {
  e |= 0
  t |= 0
  if (!n) {
    D(e, t, this.length)
  }
  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
    r += this[e + o] * i
  }
  if (r >= (i *= 128)) {
    r -= Math.pow(2, 8 * t)
  }
  return r
}
c.prototype.readIntBE = function (e, t, n) {
  e |= 0
  t |= 0
  if (!n) {
    D(e, t, this.length)
  }
  for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) {
    o += this[e + --r] * i
  }
  if (o >= (i *= 128)) {
    o -= Math.pow(2, 8 * t)
  }
  return o
}
c.prototype.readInt8 = function (e, t) {
  if (!t) {
    D(e, 1, this.length)
  }
  return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
}
c.prototype.readInt16LE = function (e, t) {
  if (!t) {
    D(e, 2, this.length)
  }
  var n = this[e] | this[e + 1] << 8
  return 32768 & n ? 4294901760 | n : n
}
c.prototype.readInt16BE = function (e, t) {
  if (!t) {
    D(e, 2, this.length)
  }
  var n = this[e + 1] | this[e] << 8
  return 32768 & n ? 4294901760 | n : n
}
c.prototype.readInt32LE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
}
c.prototype.readInt32BE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
}
c.prototype.readFloatLE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return i.read(this, e, true, 23, 4)
}
c.prototype.readFloatBE = function (e, t) {
  if (!t) {
    D(e, 4, this.length)
  }
  return i.read(this, e, false, 23, 4)
}
c.prototype.readDoubleLE = function (e, t) {
  if (!t) {
    D(e, 8, this.length)
  }
  return i.read(this, e, true, 52, 8)
}
c.prototype.readDoubleBE = function (e, t) {
  if (!t) {
    D(e, 8, this.length)
  }
  return i.read(this, e, false, 52, 8)
}
c.prototype.writeUIntLE = function (e, t, n, r) {
  if (!(e = +e, t |= 0, n |= 0, r)) {
    I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
  }
  var i = 1
  var o = 0
  for (this[t] = 255 & e; ++o < n && (i *= 256);) {
    this[t + o] = e / i & 255
  }
  return t + n
}
c.prototype.writeUIntBE = function (e, t, n, r) {
  if (!(e = +e, t |= 0, n |= 0, r)) {
    I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
  }
  var i = n - 1
  var o = 1
  for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
    this[t + i] = e / o & 255
  }
  return t + n
}
c.prototype.writeUInt8 = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 1, 255, 0)
  }
  if (!c.TYPED_ARRAY_SUPPORT) {
    e = Math.floor(e)
  }
  this[t] = 255 & e
  return t + 1
}
c.prototype.writeUInt16LE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 2, 65535, 0)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = 255 & e
    this[t + 1] = e >>> 8
  } else {
    R(this, e, t, true)
  }
  return t + 2
}
c.prototype.writeUInt16BE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 2, 65535, 0)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 8
    this[t + 1] = 255 & e
  } else {
    R(this, e, t, false)
  }
  return t + 2
}
c.prototype.writeUInt32LE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 4, 4294967295, 0)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t + 3] = e >>> 24
    this[t + 2] = e >>> 16
    this[t + 1] = e >>> 8
    this[t] = 255 & e
  } else {
    F(this, e, t, true)
  }
  return t + 4
}
c.prototype.writeUInt32BE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 4, 4294967295, 0)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 24
    this[t + 1] = e >>> 16
    this[t + 2] = e >>> 8
    this[t + 3] = 255 & e
  } else {
    F(this, e, t, false)
  }
  return t + 4
}
c.prototype.writeIntLE = function (e, t, n, r) {
  e = +e
  t |= 0
  if (!r) {
    var i = Math.pow(2, 8 * n - 1)
    I(this, e, t, n, i - 1, -i)
  }
  var o = 0
  var a = 1
  var s = 0
  for (this[t] = 255 & e; ++o < n && (a *= 256);) {
    if (e < 0 && 0 === s && 0 !== this[t + o - 1]) {
      s = 1
    }
    this[t + o] = (e / a >> 0) - s & 255
  }
  return t + n
}
c.prototype.writeIntBE = function (e, t, n, r) {
  e = +e
  t |= 0
  if (!r) {
    var i = Math.pow(2, 8 * n - 1)
    I(this, e, t, n, i - 1, -i)
  }
  var o = n - 1
  var a = 1
  var s = 0
  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
    if (e < 0 && 0 === s && 0 !== this[t + o + 1]) {
      s = 1
    }
    this[t + o] = (e / a >> 0) - s & 255
  }
  return t + n
}
c.prototype.writeInt8 = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 1, 127, -128)
  }
  if (!c.TYPED_ARRAY_SUPPORT) {
    e = Math.floor(e)
  }
  if (e < 0) {
    e = 255 + e + 1
  }
  this[t] = 255 & e
  return t + 1
}
c.prototype.writeInt16LE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 2, 32767, -32768)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = 255 & e
    this[t + 1] = e >>> 8
  } else {
    R(this, e, t, true)
  }
  return t + 2
}
c.prototype.writeInt16BE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 2, 32767, -32768)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 8
    this[t + 1] = 255 & e
  } else {
    R(this, e, t, false)
  }
  return t + 2
}
c.prototype.writeInt32LE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 4, 2147483647, -2147483648)
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = 255 & e
    this[t + 1] = e >>> 8
    this[t + 2] = e >>> 16
    this[t + 3] = e >>> 24
  } else {
    F(this, e, t, true)
  }
  return t + 4
}
c.prototype.writeInt32BE = function (e, t, n) {
  e = +e
  t |= 0
  if (!n) {
    I(this, e, t, 4, 2147483647, -2147483648)
  }
  if (e < 0) {
    e = 4294967295 + e + 1
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 24
    this[t + 1] = e >>> 16
    this[t + 2] = e >>> 8
    this[t + 3] = 255 & e
  } else {
    F(this, e, t, false)
  }
  return t + 4
}
c.prototype.writeFloatLE = function (e, t, n) {
  return N(this, e, t, true, n)
}
c.prototype.writeFloatBE = function (e, t, n) {
  return N(this, e, t, false, n)
}
c.prototype.writeDoubleLE = function (e, t, n) {
  return M(this, e, t, true, n)
}
c.prototype.writeDoubleBE = function (e, t, n) {
  return M(this, e, t, false, n)
}
c.prototype.copy = function (e, t, n, r) {
  if (!n) {
    n = 0
  }
  if (!(r || 0 === r)) {
    r = this.length
  }
  if (t >= e.length) {
    t = e.length
  }
  if (!t) {
    t = 0
  }
  if (r > 0 && r < n) {
    r = n
  }
  if (r === n) {
    return 0
  }
  if (0 === e.length || 0 === this.length) {
    return 0
  }
  if (t < 0) {
    throw new RangeError("targetStart out of bounds")
  }
  if (n < 0 || n >= this.length) {
    throw new RangeError("sourceStart out of bounds")
  }
  if (r < 0) {
    throw new RangeError("sourceEnd out of bounds")
  }
  if (r > this.length) {
    r = this.length
  }
  if (e.length - t < r - n) {
    r = e.length - t + n
  }
  var i
  var o = r - n
  if (this === e && n < t && t < r) {
    for (i = o - 1; i >= 0; --i) {
      e[i + t] = this[i + n]
    }
  } else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < o; ++i) {
      e[i + t] = this[i + n]
    }
  } else {
    Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t)
  }
  return o
}
c.prototype.fill = function (e, t, n, r) {
  if ("string" === typeof e) {
    if ("string" === typeof t) {
      r = t
      t = 0
      n = this.length
    } else {
      if ("string" === typeof n) {
        r = n
        n = this.length
      }
    }
    if (1 === e.length) {
      var i = e.charCodeAt(0)
      if (i < 256) {
        e = i
      }
    }
    if (undefined !== r && "string" !== typeof r) {
      throw new TypeError("encoding must be a string")
    }
    if ("string" === typeof r && !c.isEncoding(r)) {
      throw new TypeError("Unknown encoding: " + r)
    }
  } else if ("number" === typeof e) {
    e &= 255
  }
  if (t < 0 || this.length < t || this.length < n) {
    throw new RangeError("Out of range index")
  }
  if (n <= t) {
    return this
  }
  var o
  t >>>= 0
  n = undefined === n ? this.length : n >>> 0
  if (!e) {
    e = 0
  }
  if ("number" === typeof e) {
    for (o = t; o < n; ++o) {
      this[o] = e
    }
  } else {
    var a = c.isBuffer(e) ? e : U(new c(e, r).toString())
    var /* [auto-meaningful-name] */a$length = a.length
    for (o = 0; o < n - t; ++o) {
      this[o + t] = a[o % a$length]
    }
  }
  return this
}
var L = /[^+\/0-9A-Za-z-_]/g
function j(e) {
  return e < 16 ? "0" + e.toString(16) : e.toString(16)
}
function U(e, t) {
  var n
  t = t || 1 / 0
  for (var /* [auto-meaningful-name] */e$length = e.length, i = null, o = [], a = 0; a < e$length; ++a) {
    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
      if (!i) {
        if (n > 56319) {
          if ((t -= 3) > -1) {
            o.push(239, 191, 189)
          }
          continue
        }
        if (a + 1 === e$length) {
          if ((t -= 3) > -1) {
            o.push(239, 191, 189)
          }
          continue
        }
        i = n
        continue
      }
      if (n < 56320) {
        if ((t -= 3) > -1) {
          o.push(239, 191, 189)
        }
        i = n
        continue
      }
      n = 65536 + (i - 55296 << 10 | n - 56320)
    } else if (i && (t -= 3) > -1) {
      o.push(239, 191, 189)
    }
    i = null
    if (n < 128) {
      if ((t -= 1) < 0) {
        break
      }
      o.push(n)
    } else if (n < 2048) {
      if ((t -= 2) < 0) {
        break
      }
      o.push(n >> 6 | 192, 63 & n | 128)
    } else if (n < 65536) {
      if ((t -= 3) < 0) {
        break
      }
      o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
    } else {
      if (!(n < 1114112)) {
        throw new Error("Invalid code point")
      }
      if ((t -= 4) < 0) {
        break
      }
      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
    }
  }
  return o
}
function H(e) {
  return r.toByteArray(function (e) {
    if ((e = function (e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
    }(e).replace(L, "")).length < 2) {
      return ""
    }
    for (; e.length % 4 !== 0;) {
      e += "="
    }
    return e
  }(e))
}
function V(e, t, n, r) {
  for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) {
    t[i + n] = e[i]
  }
  return i
}
