/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：112
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var i = require(/* 10 */"../../208/10")
var o = require(/* 16 */"../../275/16")
var a = require(/* 148 */"../../263/49/148")
var s = require(/* 83 */"./83")
var u = require(/* 42 */"../../233/42")
var c = require(/* 48 */"../../236/48")
var l = require(/* 149 */"./149")
var f = require(/* 9 */"../../275/9")
var p = require(/* 85 */"../../280/281/85")
var d = require(/* 46 */"../../204/46/index")
var h = require(/* 64 */"../../225/64")
var g = require(/* 150 */"./150")
var m = require(/* 216 */"./216/index")
var v = require(/* 220 */"./220")
var y = require(/* 86 */"../../263/49/86/index")
var _ = require(/* 72 */"../../263/49/72/index")
var b = require(/* 151 */"../../263/151")
var w = require(/* 71 */"../../280/281/71")
var S = require(/* 113 */"../../233/113")
var k = require(/* 103 */"../../193/103/index")
var O = require(/* 65 */"../../268/65/index")
var E = require(/* 35 */"../../233/35/index")
var /* [auto-meaningful-name] */s$PROPER = s.PROPER
var /* [auto-meaningful-name] */s$CONFIGURABLE = s.CONFIGURABLE
var /* [auto-meaningful-name] */_ArrayBuffer = "ArrayBuffer"
var /* [auto-meaningful-name] */_DataView = "DataView"
var /* [auto-meaningful-name] */Prototype = "prototype"
var /* [auto-meaningful-name] */WrongIndex = "Wrong index"
var N = E.getterFor(_ArrayBuffer)
var A = E.getterFor(_DataView)
var /* [auto-meaningful-name] */E$set = E.set
var L = r[_ArrayBuffer]
var D = L
var M = D && D[Prototype]
var U = r[_DataView]
var B = U && U[Prototype]
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */r$Array = r.Array
var /* [auto-meaningful-name] */r$RangeError = r.RangeError
var z = i(b)
var q = i([].reverse)
var /* [auto-meaningful-name] */v$pack = v.pack
var /* [auto-meaningful-name] */v$unpack = v.unpack
var W = function (e) {
  return [255 & e]
}
var K = function (e) {
  return [255 & e, e >> 8 & 255]
}
var J = function (e) {
  return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
}
var Y = function (e) {
  return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
}
var X = function (e) {
  return v$pack(m(e), 23, 4)
}
var Q = function (e) {
  return v$pack(e, 52, 8)
}
var Z = function (e, t, n) {
  c(e[Prototype], t, {
    configurable: true,
    get: function () {
      return n(this)[t]
    }
  })
}
var ee = function (e, t, n, r) {
  var i = A(e)
  var o = g(n)
  var a = !!r
  if (o + t > i.byteLength) {
    throw new r$RangeError(WrongIndex)
  }
  var /* [auto-meaningful-name] */i$bytes = i.bytes
  var u = o + i.byteOffset
  var c = w(i$bytes, u, u + t)
  return a ? c : q(c)
}
var te = function (e, t, n, r, i, o) {
  var a = A(e)
  var s = g(n)
  var u = r(+i)
  var c = !!o
  if (s + t > a.byteLength) {
    throw new r$RangeError(WrongIndex)
  }
  for (var /* [auto-meaningful-name] */a$bytes = a.bytes, f = s + a.byteOffset, p = 0; p < t; p++) {
    a$bytes[f + p] = u[c ? p : t - p - 1]
  }
}
if (a) {
  var ne = s$PROPER && L.name !== _ArrayBuffer
  if (f(function () {
    L(1)
  }) && f(function () {
    new L(-1)
  }) && !f(function () {
    new L()
    new L(1.5)
    new L(NaN)
    return 1 !== L.length || ne && !s$CONFIGURABLE
  })) {
    if (ne && s$CONFIGURABLE) {
      u(L, "name", _ArrayBuffer)
    }
  } else {
    (D = function (e) {
      p(this, M)
      return S(new L(g(e)), this, D)
    })[Prototype] = M
    M.constructor = D
    k(D, L)
  }
  if (_ && y(B) !== Object$prototype) {
    _(B, Object$prototype)
  }
  var re = new U(new D(2))
  var ie = i(B.setInt8)
  re.setInt8(0, 2147483648)
  re.setInt8(1, 2147483649)
  if (!(!re.getInt8(0) && re.getInt8(1))) {
    l(B, {
      setInt8: function (e, t) {
        ie(this, e, t << 24 >> 24)
      },
      setUint8: function (e, t) {
        ie(this, e, t << 24 >> 24)
      }
    }, {
      unsafe: true
    })
  }
} else {
  M = (D = function (e) {
    p(this, M)
    var t = g(e)
    E$set(this, {
      type: _ArrayBuffer,
      bytes: z(r$Array(t), 0),
      byteLength: t
    })
    if (!o) {
      this.byteLength = t
      this.detached = false
    }
  })[Prototype]
  B = (U = function (e, t, n) {
    p(this, B)
    p(e, M)
    var r = N(e)
    var /* [auto-meaningful-name] */r$byteLength = r.byteLength
    var a = d(t)
    if (a < 0 || a > r$byteLength) {
      throw new r$RangeError("Wrong offset")
    }
    if (a + (n = undefined === n ? r$byteLength - a : h(n)) > r$byteLength) {
      throw new r$RangeError("Wrong length")
    }
    E$set(this, {
      type: _DataView,
      buffer: e,
      byteLength: n,
      byteOffset: a,
      bytes: r.bytes
    })
    if (!o) {
      this.buffer = e
      this.byteLength = n
      this.byteOffset = a
    }
  })[Prototype]
  if (o) {
    Z(D, "byteLength", N)
    Z(U, "buffer", A)
    Z(U, "byteLength", A)
    Z(U, "byteOffset", A)
  }
  l(B, {
    getInt8: function (e) {
      return ee(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function (e) {
      return ee(this, 1, e)[0]
    },
    getInt16: function (e) {
      var t = ee(this, 2, e, arguments.length > 1 && arguments[1])
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function (e) {
      var t = ee(this, 2, e, arguments.length > 1 && arguments[1])
      return t[1] << 8 | t[0]
    },
    getInt32: function (e) {
      return Y(ee(this, 4, e, arguments.length > 1 && arguments[1]))
    },
    getUint32: function (e) {
      return Y(ee(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0
    },
    getFloat32: function (e) {
      return v$unpack(ee(this, 4, e, arguments.length > 1 && arguments[1]), 23)
    },
    getFloat64: function (e) {
      return v$unpack(ee(this, 8, e, arguments.length > 1 && arguments[1]), 52)
    },
    setInt8: function (e, t) {
      te(this, 1, e, W, t)
    },
    setUint8: function (e, t) {
      te(this, 1, e, W, t)
    },
    setInt16: function (e, t) {
      te(this, 2, e, K, t, arguments.length > 2 && arguments[2])
    },
    setUint16: function (e, t) {
      te(this, 2, e, K, t, arguments.length > 2 && arguments[2])
    },
    setInt32: function (e, t) {
      te(this, 4, e, J, t, arguments.length > 2 && arguments[2])
    },
    setUint32: function (e, t) {
      te(this, 4, e, J, t, arguments.length > 2 && arguments[2])
    },
    setFloat32: function (e, t) {
      te(this, 4, e, X, t, arguments.length > 2 && arguments[2])
    },
    setFloat64: function (e, t) {
      te(this, 8, e, Q, t, arguments.length > 2 && arguments[2])
    }
  })
}
O(D, _ArrayBuffer)
O(U, _DataView)
module.exports = {
  ArrayBuffer: D,
  DataView: U
}
