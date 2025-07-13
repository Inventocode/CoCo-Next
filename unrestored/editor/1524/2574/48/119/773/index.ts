(function (process, global) {
  var __WEBPACK_AMD_DEFINE_RESULT__;
  !function () {
    "use strict";

    var ERROR = "input is invalid type";
    var WINDOW = "object" === typeof window;
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) {
      WINDOW = !1;
    }
    var WEB_WORKER = !WINDOW && "object" === typeof self;
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
    if (NODE_JS) {
      root = global;
    } else {
      if (WEB_WORKER) {
        root = self;
      }
    }
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === typeof module && module.exports;
    var AMD = require("./1973");
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer;
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [-2147483648, 8388608, 32768, 128];
    var SHIFT = [24, 16, 8, 0];
    var K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
    var blocks = [];
    if (!(!root.JS_SHA256_NO_NODE_JS && Array.isArray)) {
      Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    }
    if (!(!ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView)) {
      ArrayBuffer.isView = function (e) {
        return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
      };
    }
    var createOutputMethod = function (e, t) {
      return function (n) {
        return new Sha256(t, !0).update(n)[e]();
      };
    };
    var createMethod = function (e) {
      var t = createOutputMethod("hex", e);
      if (NODE_JS) {
        t = nodeWrap(t, e);
      }
      t.create = function () {
        return new Sha256(e);
      };
      t.update = function (e) {
        return t.create().update(e);
      };
      for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
        var r = OUTPUT_TYPES[n];
        t[r] = createOutputMethod(r, e);
      }
      return t;
    };
    var nodeWrap = function nodeWrap(method, is224) {
      var crypto = eval("require('crypto')");
      var Buffer = eval("require('buffer').Buffer");
      var algorithm = is224 ? "sha224" : "sha256";
      var nodeMethod = function (e) {
        if ("string" === typeof e) {
          return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
        }
        if (null === e || void 0 === e) {
          throw new Error(ERROR);
        }
        if (e.constructor === ArrayBuffer) {
          e = new Uint8Array(e);
        }
        return Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e);
      };
      return nodeMethod;
    };
    var createHmacOutputMethod = function (e, t) {
      return function (n, r) {
        return new HmacSha256(n, t, !0).update(r)[e]();
      };
    };
    var createHmacMethod = function (e) {
      var t = createHmacOutputMethod("hex", e);
      t.create = function (t) {
        return new HmacSha256(t, e);
      };
      t.update = function (e, n) {
        return t.create(e).update(n);
      };
      for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
        var r = OUTPUT_TYPES[n];
        t[r] = createHmacOutputMethod(r, e);
      }
      return t;
    };
    function Sha256(e, t) {
      if (t) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        this.blocks = blocks;
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (e) {
        this.h0 = 3238371032;
        this.h1 = 914150663;
        this.h2 = 812702999;
        this.h3 = 4144912697;
        this.h4 = 4290775857;
        this.h5 = 1750603025;
        this.h6 = 1694076839;
        this.h7 = 3204075428;
      } else {
        this.h0 = 1779033703;
        this.h1 = 3144134277;
        this.h2 = 1013904242;
        this.h3 = 2773480762;
        this.h4 = 1359893119;
        this.h5 = 2600822924;
        this.h6 = 528734635;
        this.h7 = 1541459225;
      }
      this.block = this.start = this.bytes = this.hBytes = 0;
      this.finalized = this.hashed = !1;
      this.first = !0;
      this.is224 = e;
    }
    function HmacSha256(e, t, n) {
      var r;
      var i = typeof e;
      if ("string" === i) {
        var o;
        var a = [];
        var s = e.length;
        var c = 0;
        for (r = 0; r < s; ++r) {
          if ((o = e.charCodeAt(r)) < 128) {
            a[c++] = o;
          } else {
            if (o < 2048) {
              a[c++] = 192 | o >> 6;
              a[c++] = 128 | 63 & o;
            } else {
              if (o < 55296 || o >= 57344) {
                a[c++] = 224 | o >> 12;
                a[c++] = 128 | o >> 6 & 63;
                a[c++] = 128 | 63 & o;
              } else {
                o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++r));
                a[c++] = 240 | o >> 18;
                a[c++] = 128 | o >> 12 & 63;
                a[c++] = 128 | o >> 6 & 63;
                a[c++] = 128 | 63 & o;
              }
            }
          }
        }
        e = a;
      } else {
        if ("object" !== i) {
          throw new Error(ERROR);
        }
        if (null === e) {
          throw new Error(ERROR);
        }
        if (ARRAY_BUFFER && e.constructor === ArrayBuffer) {
          e = new Uint8Array(e);
        } else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) {
          throw new Error(ERROR);
        }
      }
      if (e.length > 64) {
        e = new Sha256(t, !0).update(e).array();
      }
      var u = [];
      var l = [];
      for (r = 0; r < 64; ++r) {
        var f = e[r] || 0;
        u[r] = 92 ^ f;
        l[r] = 54 ^ f;
      }
      Sha256.call(this, t, n);
      this.update(l);
      this.oKeyPad = u;
      this.inner = !0;
      this.sharedMemory = n;
    }
    Sha256.prototype.update = function (e) {
      if (!this.finalized) {
        var t;
        var n = typeof e;
        if ("string" !== n) {
          if ("object" !== n) {
            throw new Error(ERROR);
          }
          if (null === e) {
            throw new Error(ERROR);
          }
          if (ARRAY_BUFFER && e.constructor === ArrayBuffer) {
            e = new Uint8Array(e);
          } else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) {
            throw new Error(ERROR);
          }
          t = !0;
        }
        for (var r, i, o = 0, a = e.length, s = this.blocks; o < a;) {
          if (this.hashed && (this.hashed = !1, s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), t) {
            for (i = this.start; o < a && i < 64; ++o) {
              s[i >> 2] |= e[o] << SHIFT[3 & i++];
            }
          } else {
            for (i = this.start; o < a && i < 64; ++o) {
              if ((r = e.charCodeAt(o)) < 128) {
                s[i >> 2] |= r << SHIFT[3 & i++];
              } else {
                if (r < 2048) {
                  s[i >> 2] |= (192 | r >> 6) << SHIFT[3 & i++];
                  s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++];
                } else {
                  if (r < 55296 || r >= 57344) {
                    s[i >> 2] |= (224 | r >> 12) << SHIFT[3 & i++];
                    s[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++];
                    s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++];
                  } else {
                    r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++o));
                    s[i >> 2] |= (240 | r >> 18) << SHIFT[3 & i++];
                    s[i >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & i++];
                    s[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++];
                    s[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++];
                  }
                }
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = s[16];
            this.start = i - 64;
            this.hash();
            this.hashed = !0;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      }
    };
    Sha256.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0;
        var e = this.blocks;
        var t = this.lastByteIndex;
        e[16] = this.block;
        e[t >> 2] |= EXTRA[3 & t];
        this.block = e[16];
        if (t >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          e[0] = this.block;
          e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0;
        }
        e[14] = this.hBytes << 3 | this.bytes >>> 29;
        e[15] = this.bytes << 3;
        this.hash();
      }
    };
    Sha256.prototype.hash = function () {
      var e;
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var u = this.h0;
      var l = this.h1;
      var f = this.h2;
      var h = this.h3;
      var d = this.h4;
      var p = this.h5;
      var _ = this.h6;
      var A = this.h7;
      var g = this.blocks;
      for (e = 16; e < 64; ++e) {
        t = ((i = g[e - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3;
        n = ((i = g[e - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10;
        g[e] = g[e - 16] + t + g[e - 7] + n << 0;
      }
      for (c = l & f, e = 0; e < 64; e += 4) {
        if (this.first) {
          if (this.is224) {
            o = 300032;
            A = (i = g[0] - 1413257819) - 150054599 << 0;
            h = i + 24177077 << 0;
          } else {
            o = 704751109;
            A = (i = g[0] - 210244248) - 1521486534 << 0;
            h = i + 143694565 << 0;
          }
          this.first = !1;
        } else {
          t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10);
          r = (o = u & l) ^ u & f ^ c;
          A = h + (i = A + (n = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & p ^ ~d & _) + K[e] + g[e]) << 0;
          h = i + (t + r) << 0;
        }
        t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10);
        r = (a = h & u) ^ h & l ^ o;
        _ = f + (i = _ + (n = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & d ^ ~A & p) + K[e + 1] + g[e + 1]) << 0;
        t = ((f = i + (t + r) << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10);
        r = (s = f & h) ^ f & u ^ a;
        p = l + (i = p + (n = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7)) + (_ & A ^ ~_ & d) + K[e + 2] + g[e + 2]) << 0;
        t = ((l = i + (t + r) << 0) >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10);
        r = (c = l & f) ^ l & h ^ s;
        d = u + (i = d + (n = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & _ ^ ~p & A) + K[e + 3] + g[e + 3]) << 0;
        u = i + (t + r) << 0;
      }
      this.h0 = this.h0 + u << 0;
      this.h1 = this.h1 + l << 0;
      this.h2 = this.h2 + f << 0;
      this.h3 = this.h3 + h << 0;
      this.h4 = this.h4 + d << 0;
      this.h5 = this.h5 + p << 0;
      this.h6 = this.h6 + _ << 0;
      this.h7 = this.h7 + A << 0;
    };
    Sha256.prototype.hex = function () {
      this.finalize();
      var e = this.h0;
      var t = this.h1;
      var n = this.h2;
      var r = this.h3;
      var i = this.h4;
      var o = this.h5;
      var a = this.h6;
      var s = this.h7;
      var c = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
      if (!this.is224) {
        c += HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
      }
      return c;
    };
    Sha256.prototype.toString = Sha256.prototype.hex;
    Sha256.prototype.digest = function () {
      this.finalize();
      var e = this.h0;
      var t = this.h1;
      var n = this.h2;
      var r = this.h3;
      var i = this.h4;
      var o = this.h5;
      var a = this.h6;
      var s = this.h7;
      var c = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
      if (!this.is224) {
        c.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s);
      }
      return c;
    };
    Sha256.prototype.array = Sha256.prototype.digest;
    Sha256.prototype.arrayBuffer = function () {
      this.finalize();
      var e = new ArrayBuffer(this.is224 ? 28 : 32);
      var t = new DataView(e);
      t.setUint32(0, this.h0);
      t.setUint32(4, this.h1);
      t.setUint32(8, this.h2);
      t.setUint32(12, this.h3);
      t.setUint32(16, this.h4);
      t.setUint32(20, this.h5);
      t.setUint32(24, this.h6);
      if (!this.is224) {
        t.setUint32(28, this.h7);
      }
      return e;
    };
    HmacSha256.prototype = new Sha256();
    HmacSha256.prototype.finalize = function () {
      if (Sha256.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var e = this.array();
        Sha256.call(this, this.is224, this.sharedMemory);
        this.update(this.oKeyPad);
        this.update(e);
        Sha256.prototype.finalize.call(this);
      }
    };
    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(!0);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(!0);
    if (COMMON_JS) {
      module.exports = exports;
    } else {
      root.sha256 = exports.sha256;
      root.sha224 = exports.sha224;
      if (AMD) {
        __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return exports;
        }.call(exports, __webpack_require__, exports, module);
        if (!(void 0 === __WEBPACK_AMD_DEFINE_RESULT__)) {
          module.exports = __WEBPACK_AMD_DEFINE_RESULT__;
        }
      }
    }
  }();
}).call(this, require("../../../../../3262/3188/1184/368"), require("../../../31/251"));