/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2394
 */

"use strict"

var r = require("../../../../207/787/180")
var i = require("../../../../207/787/204")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.AnsiStringType = exports.StringType = exports.BufferType = exports.Uint8ArrayType = exports.IgnoreType = exports.Float80_LE = exports.Float80_BE = exports.Float64_LE = exports.Float64_BE = exports.Float32_LE = exports.Float32_BE = exports.Float16_LE = exports.Float16_BE = exports.INT64_BE = exports.UINT64_BE = exports.INT64_LE = exports.UINT64_LE = exports.INT32_LE = exports.INT32_BE = exports.INT24_BE = exports.INT24_LE = exports.INT16_LE = exports.INT16_BE = exports.INT8 = exports.UINT32_BE = exports.UINT32_LE = exports.UINT24_BE = exports.UINT24_LE = exports.UINT16_BE = exports.UINT16_LE = exports.UINT8 = undefined
var o = require("./1288")
function a(e) {
  return new DataView(e.buffer, e.byteOffset)
}
exports.UINT8 = {
  len: 1,
  get: function (e, t) {
    return a(e).getUint8(t)
  },
  put: function (e, t, n) {
    a(e).setUint8(t, n)
    return t + 1
  }
}
exports.UINT16_LE = {
  len: 2,
  get: function (e, t) {
    return a(e).getUint16(t, true)
  },
  put: function (e, t, n) {
    a(e).setUint16(t, n, true)
    return t + 2
  }
}
exports.UINT16_BE = {
  len: 2,
  get: function (e, t) {
    return a(e).getUint16(t)
  },
  put: function (e, t, n) {
    a(e).setUint16(t, n)
    return t + 2
  }
}
exports.UINT24_LE = {
  len: 3,
  get: function (e, t) {
    var n = a(e)
    return n.getUint8(t) + (n.getUint16(t + 1, true) << 8)
  },
  put: function (e, t, n) {
    var r = a(e)
    r.setUint8(t, 255 & n)
    r.setUint16(t + 1, n >> 8, true)
    return t + 3
  }
}
exports.UINT24_BE = {
  len: 3,
  get: function (e, t) {
    var n = a(e)
    return (n.getUint16(t) << 8) + n.getUint8(t + 2)
  },
  put: function (e, t, n) {
    var r = a(e)
    r.setUint16(t, n >> 8)
    r.setUint8(t + 2, 255 & n)
    return t + 3
  }
}
exports.UINT32_LE = {
  len: 4,
  get: function (e, t) {
    return a(e).getUint32(t, true)
  },
  put: function (e, t, n) {
    a(e).setUint32(t, n, true)
    return t + 4
  }
}
exports.UINT32_BE = {
  len: 4,
  get: function (e, t) {
    return a(e).getUint32(t)
  },
  put: function (e, t, n) {
    a(e).setUint32(t, n)
    return t + 4
  }
}
exports.INT8 = {
  len: 1,
  get: function (e, t) {
    return a(e).getInt8(t)
  },
  put: function (e, t, n) {
    a(e).setInt8(t, n)
    return t + 1
  }
}
exports.INT16_BE = {
  len: 2,
  get: function (e, t) {
    return a(e).getInt16(t)
  },
  put: function (e, t, n) {
    a(e).setInt16(t, n)
    return t + 2
  }
}
exports.INT16_LE = {
  len: 2,
  get: function (e, t) {
    return a(e).getInt16(t, true)
  },
  put: function (e, t, n) {
    a(e).setInt16(t, n, true)
    return t + 2
  }
}
exports.INT24_LE = {
  len: 3,
  get: function (e, n) {
    var r = exports.UINT24_LE.get(e, n)
    return r > 8388607 ? r - 16777216 : r
  },
  put: function (e, t, n) {
    var r = a(e)
    r.setUint8(t, 255 & n)
    r.setUint16(t + 1, n >> 8, true)
    return t + 3
  }
}
exports.INT24_BE = {
  len: 3,
  get: function (e, n) {
    var r = exports.UINT24_BE.get(e, n)
    return r > 8388607 ? r - 16777216 : r
  },
  put: function (e, t, n) {
    var r = a(e)
    r.setUint16(t, n >> 8)
    r.setUint8(t + 2, 255 & n)
    return t + 3
  }
}
exports.INT32_BE = {
  len: 4,
  get: function (e, t) {
    return a(e).getInt32(t)
  },
  put: function (e, t, n) {
    a(e).setInt32(t, n)
    return t + 4
  }
}
exports.INT32_LE = {
  len: 4,
  get: function (e, t) {
    return a(e).getInt32(t, true)
  },
  put: function (e, t, n) {
    a(e).setInt32(t, n, true)
    return t + 4
  }
}
exports.UINT64_LE = {
  len: 8,
  get: function (e, t) {
    return a(e).getBigUint64(t, true)
  },
  put: function (e, t, n) {
    a(e).setBigUint64(t, n, true)
    return t + 8
  }
}
exports.INT64_LE = {
  len: 8,
  get: function (e, t) {
    return a(e).getBigInt64(t, true)
  },
  put: function (e, t, n) {
    a(e).setBigInt64(t, n, true)
    return t + 8
  }
}
exports.UINT64_BE = {
  len: 8,
  get: function (e, t) {
    return a(e).getBigUint64(t)
  },
  put: function (e, t, n) {
    a(e).setBigUint64(t, n)
    return t + 8
  }
}
exports.INT64_BE = {
  len: 8,
  get: function (e, t) {
    return a(e).getBigInt64(t)
  },
  put: function (e, t, n) {
    a(e).setBigInt64(t, n)
    return t + 8
  }
}
exports.Float16_BE = {
  len: 2,
  get: function (e, t) {
    return o.read(e, t, false, 10, this.len)
  },
  put: function (e, t, n) {
    o.write(e, n, t, false, 10, this.len)
    return t + this.len
  }
}
exports.Float16_LE = {
  len: 2,
  get: function (e, t) {
    return o.read(e, t, true, 10, this.len)
  },
  put: function (e, t, n) {
    o.write(e, n, t, true, 10, this.len)
    return t + this.len
  }
}
exports.Float32_BE = {
  len: 4,
  get: function (e, t) {
    return a(e).getFloat32(t)
  },
  put: function (e, t, n) {
    a(e).setFloat32(t, n)
    return t + 4
  }
}
exports.Float32_LE = {
  len: 4,
  get: function (e, t) {
    return a(e).getFloat32(t, true)
  },
  put: function (e, t, n) {
    a(e).setFloat32(t, n, true)
    return t + 4
  }
}
exports.Float64_BE = {
  len: 8,
  get: function (e, t) {
    return a(e).getFloat64(t)
  },
  put: function (e, t, n) {
    a(e).setFloat64(t, n)
    return t + 8
  }
}
exports.Float64_LE = {
  len: 8,
  get: function (e, t) {
    return a(e).getFloat64(t, true)
  },
  put: function (e, t, n) {
    a(e).setFloat64(t, n, true)
    return t + 8
  }
}
exports.Float80_BE = {
  len: 10,
  get: function (e, t) {
    return o.read(e, t, false, 63, this.len)
  },
  put: function (e, t, n) {
    o.write(e, n, t, false, 63, this.len)
    return t + this.len
  }
}
exports.Float80_LE = {
  len: 10,
  get: function (e, t) {
    return o.read(e, t, true, 63, this.len)
  },
  put: function (e, t, n) {
    o.write(e, n, t, true, 63, this.len)
    return t + this.len
  }
}
var s = function () {
  function e(t) {
    r(this, e)
    this.len = t
  }
  i(e, [
    {
      key: "get",
      value: function (e, t) {}
    }
  ])
  return e
}()
exports.IgnoreType = s
var c = function () {
  function e(t) {
    r(this, e)
    this.len = t
  }
  i(e, [
    {
      key: "get",
      value: function (e, t) {
        return e.subarray(t, t + this.len)
      }
    }
  ])
  return e
}()
exports.Uint8ArrayType = c
var u = function () {
  function t(e) {
    r(this, t)
    this.len = e
  }
  i(t, [
    {
      key: "get",
      value: function (t, n) {
        return Buffer.from(t.subarray(n, n + this.len))
      }
    }
  ])
  return t
}()
exports.BufferType = u
var l = function () {
  function t(e, n) {
    r(this, t)
    this.len = e
    this.encoding = n
  }
  i(t, [
    {
      key: "get",
      value: function (t, n) {
        return Buffer.from(t).toString(this.encoding, n, n + this.len)
      }
    }
  ])
  return t
}()
exports.StringType = l
var f = function () {
  function e(t) {
    r(this, e)
    this.len = t
  }
  i(e, [
    {
      key: "get",
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
        return e.decode(t, n, n + this.len)
      }
    }
  ], [
    {
      key: "decode",
      value: function (t, n, r) {
        for (var i = "", o = n; o < r; ++o) {
          i += e.codePointToString(e.singleByteDecoder(t[o]))
        }
        return i
      }
    }, {
      key: "inRange",
      value: function (e, t, n) {
        return t <= e && e <= n
      }
    }, {
      key: "codePointToString",
      value: function (e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
      }
    }, {
      key: "singleByteDecoder",
      value: function (t) {
        if (e.inRange(t, 0, 127)) {
          return t
        }
        var n = e.windows1252[t - 128]
        if (null === n) {
          throw Error("invaliding encoding")
        }
        return n
      }
    }
  ])
  return e
}()
exports.AnsiStringType = f
f.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]
