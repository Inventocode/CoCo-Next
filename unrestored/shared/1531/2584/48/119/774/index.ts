/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：774
 */

(function (process, global) {
  var __WEBPACK_AMD_DEFINE_RESULT__
  !function () {
    "use strict"

    var ERROR = "input is invalid type"
    var WINDOW = "object" === typeof window
    var root = WINDOW ? window : {}
    if (root.JS_SHA256_NO_WINDOW) {
      WINDOW = false
    }
    var WEB_WORKER = !WINDOW && "object" === typeof self
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node
    if (NODE_JS) {
      root = global
    } else {
      if (WEB_WORKER) {
        root = self
      }
    }
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === typeof module && module.exports
    var AMD = require("./1983")
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer
    var HEX_CHARS = "0123456789abcdef".split("")
    var EXTRA = [-2147483648, 8388608, 32768, 128]
    var SHIFT = [24, 16, 8, 0]
    var K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
    var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
    var blocks = []
    if (!(!root.JS_SHA256_NO_NODE_JS && Array.isArray)) {
      Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    }
    if (!(!ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView)) {
      ArrayBuffer.isView = function (e) {
        return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
      }
    }
    var createOutputMethod = function (e, t) {
      return function (n) {
        return new Sha256(t, true).update(n)[e]()
      }
    }
    var createMethod = function (e) {
      var t = createOutputMethod("hex", e)
      if (NODE_JS) {
        t = nodeWrap(t, e)
      }
      t.create = function () {
        return new Sha256(e)
      }
      t.update = function (e) {
        return t.create().update(e)
      }
      for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
        var r = OUTPUT_TYPES[n]
        t[r] = createOutputMethod(r, e)
      }
      return t
    }
    var nodeWrap = function nodeWrap(method, is224) {
      var crypto = eval("require('crypto')")
      var Buffer = eval("require('buffer').Buffer")
      var algorithm = is224 ? "sha224" : "sha256"
      var nodeMethod = function (e) {
        if ("string" === typeof e) {
          return crypto.createHash(algorithm).update(e, "utf8").digest("hex")
        }
        if (null === e || undefined === e) {
          throw new Error(ERROR)
        }
        if (e.constructor === ArrayBuffer) {
          e = new Uint8Array(e)
        }
        return Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
      }
      return nodeMethod
    }
    var createHmacOutputMethod = function (e, t) {
      return function (n, r) {
        return new HmacSha256(n, t, true).update(r)[e]()
      }
    }
    var createHmacMethod = function (e) {
      var t = createHmacOutputMethod("hex", e)
      t.create = function (t) {
        return new HmacSha256(t, e)
      }
      t.update = function (e, n) {
        return t.create(e).update(n)
      }
      for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
        var r = OUTPUT_TYPES[n]
        t[r] = createHmacOutputMethod(r, e)
      }
      return t
    }
    function Sha256(e, t) {
      if (t) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0
        this.blocks = blocks
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
      if (e) {
        this.h0 = 3238371032
        this.h1 = 914150663
        this.h2 = 812702999
        this.h3 = 4144912697
        this.h4 = 4290775857
        this.h5 = 1750603025
        this.h6 = 1694076839
        this.h7 = 3204075428
      } else {
        this.h0 = 1779033703
        this.h1 = 3144134277
        this.h2 = 1013904242
        this.h3 = 2773480762
        this.h4 = 1359893119
        this.h5 = 2600822924
        this.h6 = 528734635
        this.h7 = 1541459225
      }
      this.block = this.start = this.bytes = this.hBytes = 0
      this.finalized = this.hashed = false
      this.first = true
      this.is224 = e
    }
    function HmacSha256(e, t, n) {
      var r
      var i = typeof e
      if ("string" === i) {
        var o
        var a = []
        var e$length = e.length
        var c = 0
        for (r = 0; r < e$length; ++r) {
          if ((o = e.charCodeAt(r)) < 128) {
            a[c++] = o
          } else {
            if (o < 2048) {
              a[c++] = 192 | o >> 6
              a[c++] = 128 | 63 & o
            } else {
              if (o < 55296 || o >= 57344) {
                a[c++] = 224 | o >> 12
                a[c++] = 128 | o >> 6 & 63
                a[c++] = 128 | 63 & o
              } else {
                o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++r))
                a[c++] = 240 | o >> 18
                a[c++] = 128 | o >> 12 & 63
                a[c++] = 128 | o >> 6 & 63
                a[c++] = 128 | 63 & o
              }
            }
          }
        }
        e = a
      } else {
        if ("object" !== i) {
          throw new Error(ERROR)
        }
        if (null === e) {
          throw new Error(ERROR)
        }
        if (ARRAY_BUFFER && e.constructor === ArrayBuffer) {
          e = new Uint8Array(e)
        } else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) {
          throw new Error(ERROR)
        }
      }
      if (e.length > 64) {
        e = new Sha256(t, true).update(e).array()
      }
      var u = []
      var l = []
      for (r = 0; r < 64; ++r) {
        var f = e[r] || 0
        u[r] = 92 ^ f
        l[r] = 54 ^ f
      }
      Sha256.call(this, t, n)
      this.update(l)
      this.oKeyPad = u
      this.inner = true
      this.sharedMemory = n
    }
    Sha256.prototype.update = function (e) {
      if (!this.finalized) {
        var t
        var n = typeof e
        if ("string" !== n) {
          if ("object" !== n) {
            throw new Error(ERROR)
          }
          if (null === e) {
            throw new Error(ERROR)
          }
          if (ARRAY_BUFFER && e.constructor === ArrayBuffer) {
            e = new Uint8Array(e)
          } else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) {
            throw new Error(ERROR)
          }
          t = true
        }
        for (var r, i, o = 0, e$length = e.length, this$blocks = this.blocks; o < e$length;) {
          if (this.hashed) {
            this.hashed = false
            this$blocks[0] = this.block
            this$blocks[16] = this$blocks[1] = this$blocks[2] = this$blocks[3] = this$blocks[4] = this$blocks[5] = this$blocks[6] = this$blocks[7] = this$blocks[8] = this$blocks[9] = this$blocks[10] = this$blocks[11] = this$blocks[12] = this$blocks[13] = this$blocks[14] = this$blocks[15] = 0
          }
          if (t) {
            for (i = this.start; o < e$length && i < 64; ++o) {
              this$blocks[i >> 2] |= e[o] << SHIFT[3 & i++]
            }
          } else {
            for (i = this.start; o < e$length && i < 64; ++o) {
              if ((r = e.charCodeAt(o)) < 128) {
                this$blocks[i >> 2] |= r << SHIFT[3 & i++]
              } else {
                if (r < 2048) {
                  this$blocks[i >> 2] |= (192 | r >> 6) << SHIFT[3 & i++]
                  this$blocks[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]
                } else {
                  if (r < 55296 || r >= 57344) {
                    this$blocks[i >> 2] |= (224 | r >> 12) << SHIFT[3 & i++]
                    this$blocks[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++]
                    this$blocks[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]
                  } else {
                    r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++o))
                    this$blocks[i >> 2] |= (240 | r >> 18) << SHIFT[3 & i++]
                    this$blocks[i >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & i++]
                    this$blocks[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++]
                    this$blocks[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]
                  }
                }
              }
            }
          }
          this.lastByteIndex = i
          this.bytes += i - this.start
          if (i >= 64) {
            this.block = this$blocks[16]
            this.start = i - 64
            this.hash()
            this.hashed = true
          } else {
            this.start = i
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0
          this.bytes = this.bytes % 4294967296
        }
        return this
      }
    }
    Sha256.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = true
        var this$blocks = this.blocks
        var this$lastByteIndex = this.lastByteIndex
        this$blocks[16] = this.block
        this$blocks[this$lastByteIndex >> 2] |= EXTRA[3 & this$lastByteIndex]
        this.block = this$blocks[16]
        if (this$lastByteIndex >= 56) {
          if (!this.hashed) {
            this.hash()
          }
          this$blocks[0] = this.block
          this$blocks[16] = this$blocks[1] = this$blocks[2] = this$blocks[3] = this$blocks[4] = this$blocks[5] = this$blocks[6] = this$blocks[7] = this$blocks[8] = this$blocks[9] = this$blocks[10] = this$blocks[11] = this$blocks[12] = this$blocks[13] = this$blocks[14] = this$blocks[15] = 0
        }
        this$blocks[14] = this.hBytes << 3 | this.bytes >>> 29
        this$blocks[15] = this.bytes << 3
        this.hash()
      }
    }
    Sha256.prototype.hash = function () {
      var e
      var t
      var n
      var r
      var i
      var o
      var a
      var s
      var c
      var this$h0 = this.h0
      var this$h1 = this.h1
      var this$h2 = this.h2
      var this$h3 = this.h3
      var this$h4 = this.h4
      var this$h5 = this.h5
      var this$h6 = this.h6
      var this$h7 = this.h7
      var this$blocks = this.blocks
      for (e = 16; e < 64; ++e) {
        t = ((i = this$blocks[e - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3
        n = ((i = this$blocks[e - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10
        this$blocks[e] = this$blocks[e - 16] + t + this$blocks[e - 7] + n << 0
      }
      for (c = this$h1 & this$h2, e = 0; e < 64; e += 4) {
        if (this.first) {
          if (this.is224) {
            o = 300032
            this$h7 = (i = this$blocks[0] - 1413257819) - 150054599 << 0
            this$h3 = i + 24177077 << 0
          } else {
            o = 704751109
            this$h7 = (i = this$blocks[0] - 210244248) - 1521486534 << 0
            this$h3 = i + 143694565 << 0
          }
          this.first = false
        } else {
          t = (this$h0 >>> 2 | this$h0 << 30) ^ (this$h0 >>> 13 | this$h0 << 19) ^ (this$h0 >>> 22 | this$h0 << 10)
          r = (o = this$h0 & this$h1) ^ this$h0 & this$h2 ^ c
          this$h7 = this$h3 + (i = this$h7 + (n = (this$h4 >>> 6 | this$h4 << 26) ^ (this$h4 >>> 11 | this$h4 << 21) ^ (this$h4 >>> 25 | this$h4 << 7)) + (this$h4 & this$h5 ^ ~this$h4 & this$h6) + K[e] + this$blocks[e]) << 0
          this$h3 = i + (t + r) << 0
        }
        t = (this$h3 >>> 2 | this$h3 << 30) ^ (this$h3 >>> 13 | this$h3 << 19) ^ (this$h3 >>> 22 | this$h3 << 10)
        r = (a = this$h3 & this$h0) ^ this$h3 & this$h1 ^ o
        this$h6 = this$h2 + (i = this$h6 + (n = (this$h7 >>> 6 | this$h7 << 26) ^ (this$h7 >>> 11 | this$h7 << 21) ^ (this$h7 >>> 25 | this$h7 << 7)) + (this$h7 & this$h4 ^ ~this$h7 & this$h5) + K[e + 1] + this$blocks[e + 1]) << 0
        t = ((this$h2 = i + (t + r) << 0) >>> 2 | this$h2 << 30) ^ (this$h2 >>> 13 | this$h2 << 19) ^ (this$h2 >>> 22 | this$h2 << 10)
        r = (s = this$h2 & this$h3) ^ this$h2 & this$h0 ^ a
        this$h5 = this$h1 + (i = this$h5 + (n = (this$h6 >>> 6 | this$h6 << 26) ^ (this$h6 >>> 11 | this$h6 << 21) ^ (this$h6 >>> 25 | this$h6 << 7)) + (this$h6 & this$h7 ^ ~this$h6 & this$h4) + K[e + 2] + this$blocks[e + 2]) << 0
        t = ((this$h1 = i + (t + r) << 0) >>> 2 | this$h1 << 30) ^ (this$h1 >>> 13 | this$h1 << 19) ^ (this$h1 >>> 22 | this$h1 << 10)
        r = (c = this$h1 & this$h2) ^ this$h1 & this$h3 ^ s
        this$h4 = this$h0 + (i = this$h4 + (n = (this$h5 >>> 6 | this$h5 << 26) ^ (this$h5 >>> 11 | this$h5 << 21) ^ (this$h5 >>> 25 | this$h5 << 7)) + (this$h5 & this$h6 ^ ~this$h5 & this$h7) + K[e + 3] + this$blocks[e + 3]) << 0
        this$h0 = i + (t + r) << 0
      }
      this.h0 = this.h0 + this$h0 << 0
      this.h1 = this.h1 + this$h1 << 0
      this.h2 = this.h2 + this$h2 << 0
      this.h3 = this.h3 + this$h3 << 0
      this.h4 = this.h4 + this$h4 << 0
      this.h5 = this.h5 + this$h5 << 0
      this.h6 = this.h6 + this$h6 << 0
      this.h7 = this.h7 + this$h7 << 0
    }
    Sha256.prototype.hex = function () {
      this.finalize()
      var this$h0 = this.h0
      var this$h1 = this.h1
      var this$h2 = this.h2
      var this$h3 = this.h3
      var this$h4 = this.h4
      var this$h5 = this.h5
      var this$h6 = this.h6
      var this$h7 = this.h7
      var c = HEX_CHARS[this$h0 >> 28 & 15] + HEX_CHARS[this$h0 >> 24 & 15] + HEX_CHARS[this$h0 >> 20 & 15] + HEX_CHARS[this$h0 >> 16 & 15] + HEX_CHARS[this$h0 >> 12 & 15] + HEX_CHARS[this$h0 >> 8 & 15] + HEX_CHARS[this$h0 >> 4 & 15] + HEX_CHARS[15 & this$h0] + HEX_CHARS[this$h1 >> 28 & 15] + HEX_CHARS[this$h1 >> 24 & 15] + HEX_CHARS[this$h1 >> 20 & 15] + HEX_CHARS[this$h1 >> 16 & 15] + HEX_CHARS[this$h1 >> 12 & 15] + HEX_CHARS[this$h1 >> 8 & 15] + HEX_CHARS[this$h1 >> 4 & 15] + HEX_CHARS[15 & this$h1] + HEX_CHARS[this$h2 >> 28 & 15] + HEX_CHARS[this$h2 >> 24 & 15] + HEX_CHARS[this$h2 >> 20 & 15] + HEX_CHARS[this$h2 >> 16 & 15] + HEX_CHARS[this$h2 >> 12 & 15] + HEX_CHARS[this$h2 >> 8 & 15] + HEX_CHARS[this$h2 >> 4 & 15] + HEX_CHARS[15 & this$h2] + HEX_CHARS[this$h3 >> 28 & 15] + HEX_CHARS[this$h3 >> 24 & 15] + HEX_CHARS[this$h3 >> 20 & 15] + HEX_CHARS[this$h3 >> 16 & 15] + HEX_CHARS[this$h3 >> 12 & 15] + HEX_CHARS[this$h3 >> 8 & 15] + HEX_CHARS[this$h3 >> 4 & 15] + HEX_CHARS[15 & this$h3] + HEX_CHARS[this$h4 >> 28 & 15] + HEX_CHARS[this$h4 >> 24 & 15] + HEX_CHARS[this$h4 >> 20 & 15] + HEX_CHARS[this$h4 >> 16 & 15] + HEX_CHARS[this$h4 >> 12 & 15] + HEX_CHARS[this$h4 >> 8 & 15] + HEX_CHARS[this$h4 >> 4 & 15] + HEX_CHARS[15 & this$h4] + HEX_CHARS[this$h5 >> 28 & 15] + HEX_CHARS[this$h5 >> 24 & 15] + HEX_CHARS[this$h5 >> 20 & 15] + HEX_CHARS[this$h5 >> 16 & 15] + HEX_CHARS[this$h5 >> 12 & 15] + HEX_CHARS[this$h5 >> 8 & 15] + HEX_CHARS[this$h5 >> 4 & 15] + HEX_CHARS[15 & this$h5] + HEX_CHARS[this$h6 >> 28 & 15] + HEX_CHARS[this$h6 >> 24 & 15] + HEX_CHARS[this$h6 >> 20 & 15] + HEX_CHARS[this$h6 >> 16 & 15] + HEX_CHARS[this$h6 >> 12 & 15] + HEX_CHARS[this$h6 >> 8 & 15] + HEX_CHARS[this$h6 >> 4 & 15] + HEX_CHARS[15 & this$h6]
      if (!this.is224) {
        c += HEX_CHARS[this$h7 >> 28 & 15] + HEX_CHARS[this$h7 >> 24 & 15] + HEX_CHARS[this$h7 >> 20 & 15] + HEX_CHARS[this$h7 >> 16 & 15] + HEX_CHARS[this$h7 >> 12 & 15] + HEX_CHARS[this$h7 >> 8 & 15] + HEX_CHARS[this$h7 >> 4 & 15] + HEX_CHARS[15 & this$h7]
      }
      return c
    }
    Sha256.prototype.toString = Sha256.prototype.hex
    Sha256.prototype.digest = function () {
      this.finalize()
      var this$h0 = this.h0
      var this$h1 = this.h1
      var this$h2 = this.h2
      var this$h3 = this.h3
      var this$h4 = this.h4
      var this$h5 = this.h5
      var this$h6 = this.h6
      var this$h7 = this.h7
      var c = [this$h0 >> 24 & 255, this$h0 >> 16 & 255, this$h0 >> 8 & 255, 255 & this$h0, this$h1 >> 24 & 255, this$h1 >> 16 & 255, this$h1 >> 8 & 255, 255 & this$h1, this$h2 >> 24 & 255, this$h2 >> 16 & 255, this$h2 >> 8 & 255, 255 & this$h2, this$h3 >> 24 & 255, this$h3 >> 16 & 255, this$h3 >> 8 & 255, 255 & this$h3, this$h4 >> 24 & 255, this$h4 >> 16 & 255, this$h4 >> 8 & 255, 255 & this$h4, this$h5 >> 24 & 255, this$h5 >> 16 & 255, this$h5 >> 8 & 255, 255 & this$h5, this$h6 >> 24 & 255, this$h6 >> 16 & 255, this$h6 >> 8 & 255, 255 & this$h6]
      if (!this.is224) {
        c.push(this$h7 >> 24 & 255, this$h7 >> 16 & 255, this$h7 >> 8 & 255, 255 & this$h7)
      }
      return c
    }
    Sha256.prototype.array = Sha256.prototype.digest
    Sha256.prototype.arrayBuffer = function () {
      this.finalize()
      var e = new ArrayBuffer(this.is224 ? 28 : 32)
      var t = new DataView(e)
      t.setUint32(0, this.h0)
      t.setUint32(4, this.h1)
      t.setUint32(8, this.h2)
      t.setUint32(12, this.h3)
      t.setUint32(16, this.h4)
      t.setUint32(20, this.h5)
      t.setUint32(24, this.h6)
      if (!this.is224) {
        t.setUint32(28, this.h7)
      }
      return e
    }
    HmacSha256.prototype = new Sha256()
    HmacSha256.prototype.finalize = function () {
      Sha256.prototype.finalize.call(this)
      if (this.inner) {
        this.inner = false
        var e = this.array()
        Sha256.call(this, this.is224, this.sharedMemory)
        this.update(this.oKeyPad)
        this.update(e)
        Sha256.prototype.finalize.call(this)
      }
    }
    var exports = createMethod()
    exports.sha256 = exports
    exports.sha224 = createMethod(true)
    exports.sha256.hmac = createHmacMethod()
    exports.sha224.hmac = createHmacMethod(true)
    if (COMMON_JS) {
      module.exports = exports
    } else {
      root.sha256 = exports.sha256
      root.sha224 = exports.sha224
      if (AMD) {
        __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return exports
        }.call(exports, require, exports, module)
        if (!(undefined === __WEBPACK_AMD_DEFINE_RESULT__)) {
          module.exports = __WEBPACK_AMD_DEFINE_RESULT__
        }
      }
    }
  }()
}).call(this, require("../../../710/368"), require("../../../710/251"))
