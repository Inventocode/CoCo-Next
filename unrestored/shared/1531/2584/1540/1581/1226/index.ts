/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1226
 */

"use strict"

var r = require("../../1736/194")
var o = require("../../1623/272")
var i = require("../../1720/258/1227")
var a = require("../../1740/422")
var s = require("../../1738/752")
var c = require("../../1736/167")
var l = require("../../1745/635")
var u = require("../../1680/473")
var d = require("../../1735/257")
var p = require("../../1710/576/1228")
var f = require("./1582")
var h = require("../../1660/495")
var m = require("../../1666/634")
var require$$$$1667631Index$f = require("../../1667/631/index").f
var require$$$$1623300$f = require("../../1623/300").f
var v = require("../../1713/1063")
var b = require("../../1745/531")
var y = require("../../1745/423/index")
var y$get = y.get
var y$set = y.set
var r$ArrayBuffer = r.ArrayBuffer
var C = r$ArrayBuffer
var r$DataView = r.DataView
var S = r$DataView && r$DataView.prototype
var object$prototype = Object.prototype
var r$RangeError = r.RangeError
var f$pack = f.pack
var f$unpack = f.unpack
var R = function (e) {
  return [255 & e]
}
var k = function (e) {
  return [255 & e, e >> 8 & 255]
}
var x = function (e) {
  return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
}
var D = function (e) {
  return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
}
var M = function (e) {
  return f$pack(e, 23, 4)
}
var L = function (e) {
  return f$pack(e, 52, 8)
}
var P = function (e, t) {
  require$$$$1623300$f(e.prototype, t, {
    get: function () {
      return y$get(this)[t]
    }
  })
}
var B = function (e, t, n, r) {
  var o = p(n)
  var i = y$get(e)
  if (o + t > i.byteLength) {
    throw r$RangeError("Wrong index")
  }
  var y$getI$buffer$bytes = y$get(i.buffer).bytes
  var s = o + i.byteOffset
  var c = y$getI$buffer$bytes.slice(s, s + t)
  return r ? c : c.reverse()
}
var F = function (e, t, n, r, o, i) {
  var a = p(n)
  var s = y$get(e)
  if (a + t > s.byteLength) {
    throw r$RangeError("Wrong index")
  }
  for (var y$getS$buffer$bytes = y$get(s.buffer).bytes, l = a + s.byteOffset, u = r(+o), d = 0; d < t; d++) {
    y$getS$buffer$bytes[l + d] = u[i ? d : t - d - 1]
  }
}
if (i) {
  if (!c(function () {
    r$ArrayBuffer(1)
  }) || !c(function () {
    new r$ArrayBuffer(-1)
  }) || c(function () {
    new r$ArrayBuffer()
    new r$ArrayBuffer(1.5)
    new r$ArrayBuffer(NaN)
    return "ArrayBuffer" != r$ArrayBuffer.name
  })) {
    for (var G, U = (C = function (e) {
        l(this, C)
        return new r$ArrayBuffer(p(e))
      }).prototype = r$ArrayBuffer.prototype, W = require$$$$1667631Index$f(r$ArrayBuffer), H = 0; W.length > H;) {
      if (!((G = W[H++]) in C)) {
        a(C, G, r$ArrayBuffer[G])
      }
    }
    U.constructor = C
  }
  if (m && h(S) !== object$prototype) {
    m(S, object$prototype)
  }
  var V = new r$DataView(new C(2))
  var s$setInt8 = S.setInt8
  V.setInt8(0, 2147483648)
  V.setInt8(1, 2147483649)
  if (!(!V.getInt8(0) && V.getInt8(1))) {
    s(S, {
      setInt8: function (e, t) {
        s$setInt8.call(this, e, t << 24 >> 24)
      },
      setUint8: function (e, t) {
        s$setInt8.call(this, e, t << 24 >> 24)
      }
    }, {
      unsafe: true
    })
  }
} else {
  C = function (e) {
    l(this, C, "ArrayBuffer")
    var t = p(e)
    y$set(this, {
      bytes: v.call(new Array(t), 0),
      byteLength: t
    })
    if (!o) {
      this.byteLength = t
    }
  }
  r$DataView = function (e, t, n) {
    l(this, r$DataView, "DataView")
    l(e, C, "DataView")
    var y$getE$byteLength = y$get(e).byteLength
    var i = u(t)
    if (i < 0 || i > y$getE$byteLength) {
      throw r$RangeError("Wrong offset")
    }
    if (i + (n = undefined === n ? y$getE$byteLength - i : d(n)) > y$getE$byteLength) {
      throw r$RangeError("Wrong length")
    }
    y$set(this, {
      buffer: e,
      byteLength: n,
      byteOffset: i
    })
    if (!o) {
      this.buffer = e
      this.byteLength = n
      this.byteOffset = i
    }
  }
  if (o) {
    P(C, "byteLength")
    P(r$DataView, "buffer")
    P(r$DataView, "byteLength")
    P(r$DataView, "byteOffset")
  }
  s(r$DataView.prototype, {
    getInt8: function (e) {
      return B(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function (e) {
      return B(this, 1, e)[0]
    },
    getInt16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : undefined)
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : undefined)
      return t[1] << 8 | t[0]
    },
    getInt32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined))
    },
    getUint32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined)) >>> 0
    },
    getFloat32: function (e) {
      return f$unpack(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined), 23)
    },
    getFloat64: function (e) {
      return f$unpack(B(this, 8, e, arguments.length > 1 ? arguments[1] : undefined), 52)
    },
    setInt8: function (e, t) {
      F(this, 1, e, R, t)
    },
    setUint8: function (e, t) {
      F(this, 1, e, R, t)
    },
    setInt16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setUint16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setInt32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setUint32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setFloat32: function (e, t) {
      F(this, 4, e, M, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setFloat64: function (e, t) {
      F(this, 8, e, L, t, arguments.length > 2 ? arguments[2] : undefined)
    }
  })
}
b(C, "ArrayBuffer")
b(r$DataView, "DataView")
module.exports = {
  ArrayBuffer: C,
  DataView: r$DataView
}
