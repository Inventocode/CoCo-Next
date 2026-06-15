/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49
 */

"use strict"

var r
var i
var o
var a = require(/* 148 */"./148")
var s = require(/* 16 */"../../275/16")
var u = require(/* 6 */"../../275/6")
var c = require(/* 14 */"../../228/14")
var l = require(/* 26 */"../../237/26")
var f = require(/* 24 */"../../233/24")
var p = require(/* 47 */"../47/index")
var d = require(/* 62 */"./62")
var h = require(/* 42 */"../../233/42")
var g = require(/* 34 */"../../228/34/index")
var m = require(/* 48 */"../../236/48")
var v = require(/* 45 */"../../233/45")
var y = require(/* 86 */"./86/index")
var _ = require(/* 72 */"./72/index")
var b = require(/* 18 */"../../233/18/index")
var w = require(/* 100 */"./100")
var S = require(/* 35 */"../../233/35/index")
var /* [auto-meaningful-name] */S$enforce = S.enforce
var /* [auto-meaningful-name] */S$get = S.get
var /* [auto-meaningful-name] */u$Int8Array = u.Int8Array
var T = u$Int8Array && u$Int8Array.prototype
var /* [auto-meaningful-name] */u$Uint8ClampedArray = u.Uint8ClampedArray
var j = u$Uint8ClampedArray && u$Uint8ClampedArray.prototype
var P = u$Int8Array && y(u$Int8Array)
var C = T && y(T)
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */u$TypeError = u.TypeError
var A = b("toStringTag")
var R = w("TYPED_ARRAY_TAG")
var /* [auto-meaningful-name] */TypedArrayConstructor = "TypedArrayConstructor"
var D = a && !!_ && "Opera" !== p(u.opera)
var M = false
var U = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
}
var B = {
  BigInt64Array: 8,
  BigUint64Array: 8
}
var H = function (e) {
  var t = y(e)
  if (l(t)) {
    var n = S$get(t)
    return n && f(n, TypedArrayConstructor) ? n[TypedArrayConstructor] : H(t)
  }
}
var F = function (e) {
  if (!l(e)) {
    return false
  }
  var t = p(e)
  return f(U, t) || f(B, t)
}
for (r in U) if (o = (i = u[r]) && i.prototype) {
  S$enforce(o)[TypedArrayConstructor] = i
} else {
  D = false
}
for (r in B) if (o = (i = u[r]) && i.prototype) {
  S$enforce(o)[TypedArrayConstructor] = i
}
if ((!D || !c(P) || P === Function.prototype) && (P = function () {
  throw new u$TypeError("Incorrect invocation")
}, D)) {
  for (r in U) if (u[r]) {
    _(u[r], P)
  }
}
if ((!D || !C || C === Object$prototype) && (C = P.prototype, D)) {
  for (r in U) if (u[r]) {
    _(u[r].prototype, C)
  }
}
if (D && y(j) !== C) {
  _(j, C)
}
if (s && !f(C, A)) {
  for (r in M = true, m(C, A, {
    configurable: true,
    get: function () {
      return l(this) ? this[R] : undefined
    }
  }), U) if (u[r]) {
    h(u[r], R, r)
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: D,
  TYPED_ARRAY_TAG: M && R,
  aTypedArray: function (e) {
    if (F(e)) {
      return e
    }
    throw new u$TypeError("Target is not a typed array")
  },
  aTypedArrayConstructor: function (e) {
    if (c(e) && (!_ || v(P, e))) {
      return e
    }
    throw new u$TypeError(d(e) + " is not a typed array constructor")
  },
  exportTypedArrayMethod: function (e, t, n, r) {
    if (s) {
      if (n) {
        for (var i in U) {
          var o = u[i]
          if (o && f(o.prototype, e)) {
            try {
              delete o.prototype[e]
            } catch (a) {
              try {
                o.prototype[e] = t
              } catch (c) {}
            }
          }
        }
      }
      if (!(C[e] && !n)) {
        g(C, e, n ? t : D && T[e] || t, r)
      }
    }
  },
  exportTypedArrayStaticMethod: function (e, t, n) {
    var r
    var i
    if (s) {
      if (_) {
        if (n) {
          for (r in U) if ((i = u[r]) && f(i, e)) {
            try {
              delete i[e]
            } catch (o) {}
          }
        }
        if (P[e] && !n) {
          return
        }
        try {
          return g(P, e, n ? t : D && P[e] || t)
        } catch (o) {}
      }
      for (r in U) if (!(!(i = u[r]) || i[e] && !n)) {
        g(i, e, t)
      }
    }
  },
  getTypedArrayConstructor: H,
  isView: function (e) {
    if (!l(e)) {
      return false
    }
    var t = p(e)
    return "DataView" === t || f(U, t) || f(B, t)
  },
  isTypedArray: F,
  TypedArray: P,
  TypedArrayPrototype: C
}
