/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：44
 */

"use strict"

var r = require(/* 13 */"../../288/13/index")
var i = require(/* 6 */"../../275/6")
var o = require(/* 20 */"../../288/20/index")
var a = require(/* 16 */"../../275/16")
var s = require(/* 122 */"../../264/122/index")
var u = require(/* 49 */"../../263/49/index")
var c = require(/* 112 */"../../215/112/index")
var l = require(/* 85 */"../../280/281/85")
var f = require(/* 60 */"../../226/153/60")
var p = require(/* 42 */"../../233/42")
var d = require(/* 249 */"./249")
var h = require(/* 64 */"../../225/64")
var g = require(/* 150 */"../../215/112/150")
var m = require(/* 164 */"../../266/164/index")
var v = require(/* 251 */"./251")
var y = require(/* 94 */"./94")
var _ = require(/* 24 */"../../233/24")
var b = require(/* 47 */"../../263/47/index")
var w = require(/* 26 */"../../237/26")
var S = require(/* 95 */"./95")
var k = require(/* 55 */"../../233/55/index")
var O = require(/* 45 */"../../233/45")
var E = require(/* 72 */"../../263/49/72/index")
var /* [auto-meaningful-name] */require_104_$$_$$_233_104_index$f = require(/* 104 */"../../233/104/index").f
var x = require(/* 165 */"../../264/165/index")
var /* [auto-meaningful-name] */require_253_$_253$forEach = require(/* 253 */"./253").forEach
var P = require(/* 114 */"../../215/114")
var C = require(/* 48 */"../../236/48")
var I = require(/* 30 */"../../268/65/30/index")
var N = require(/* 92 */"../../288/13/92/index")
var A = require(/* 254 */"./254")
var R = require(/* 35 */"../../233/35/index")
var L = require(/* 113 */"../../233/113")
var /* [auto-meaningful-name] */R$get = R.get
var /* [auto-meaningful-name] */R$set = R.set
var /* [auto-meaningful-name] */R$enforce = R.enforce
var B = I.f
var H = N.f
var /* [auto-meaningful-name] */i$RangeError = i.RangeError
var /* [auto-meaningful-name] */c$ArrayBuffer = c.ArrayBuffer
var /* [auto-meaningful-name] */c$ArrayBuffer$prototype = c$ArrayBuffer.prototype
var /* [auto-meaningful-name] */c$DataView = c.DataView
var /* [auto-meaningful-name] */u$NATIVE_ARRAY_BUFFER_VIEWS = u.NATIVE_ARRAY_BUFFER_VIEWS
var /* [auto-meaningful-name] */u$TYPED_ARRAY_TAG = u.TYPED_ARRAY_TAG
var /* [auto-meaningful-name] */u$TypedArray = u.TypedArray
var /* [auto-meaningful-name] */u$TypedArrayPrototype = u.TypedArrayPrototype
var /* [auto-meaningful-name] */u$isTypedArray = u.isTypedArray
var /* [auto-meaningful-name] */BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT"
var /* [auto-meaningful-name] */WrongLength = "Wrong length"
var Q = function (e, t) {
  C(e, t, {
    configurable: true,
    get: function () {
      return R$get(this)[t]
    }
  })
}
var Z = function (e) {
  var t
  return O(c$ArrayBuffer$prototype, e) || "ArrayBuffer" === (t = b(e)) || "SharedArrayBuffer" === t
}
var ee = function (e, t) {
  return u$isTypedArray(e) && !S(t) && t in e && d(+t) && t >= 0
}
var te = function (e, t) {
  t = y(t)
  return ee(e, t) ? f(2, e[t]) : H(e, t)
}
var ne = function (e, t, n) {
  t = y(t)
  return !(ee(e, t) && w(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? B(e, t, n) : (e[t] = n.value, e)
}
if (a) {
  if (!u$NATIVE_ARRAY_BUFFER_VIEWS) {
    N.f = te
    I.f = ne
    Q(u$TypedArrayPrototype, "buffer")
    Q(u$TypedArrayPrototype, "byteOffset")
    Q(u$TypedArrayPrototype, "byteLength")
    Q(u$TypedArrayPrototype, "length")
  }
  r({
    target: "Object",
    stat: true,
    forced: !u$NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    getOwnPropertyDescriptor: te,
    defineProperty: ne
  })
  module.exports = function (e, t, n) {
    var a = e.match(/\d+/)[0] / 8
    var u = e + (n ? "Clamped" : "") + "Array"
    var c = "get" + e
    var f = "set" + e
    var d = i[u]
    var y = d
    var _ = y && y.prototype
    var b = {}
    var S = function (e, t) {
      B(e, t, {
        get: function () {
          return function (e, t) {
            var n = R$get(e)
            return n.view[c](t * a + n.byteOffset, true)
          }(this, t)
        },
        set: function (e) {
          return function (e, t, r) {
            var i = R$get(e)
            i.view[f](t * a + i.byteOffset, n ? v(r) : r, true)
          }(this, t, e)
        },
        enumerable: true
      })
    }
    if (u$NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        y = t(function (e, t, n, r) {
          l(e, _)
          return L(w(t) ? Z(t) ? undefined !== r ? new d(t, m(n, a), r) : undefined !== n ? new d(t, m(n, a)) : new d(t) : u$isTypedArray(t) ? A(y, t) : o(x, y, t) : new d(g(t)), e, y)
        })
        if (E) {
          E(y, u$TypedArray)
        }
        require_253_$_253$forEach(require_104_$$_$$_233_104_index$f(d), function (e) {
          if (!(e in y)) {
            p(y, e, d[e])
          }
        })
        y.prototype = _
      }
    } else {
      y = t(function (e, t, n, r) {
        l(e, _)
        var i
        var s
        var u
        var c = 0
        var f = 0
        if (w(t)) {
          if (!Z(t)) {
            return u$isTypedArray(t) ? A(y, t) : o(x, y, t)
          }
          i = t
          f = m(n, a)
          var /* [auto-meaningful-name] */t$byteLength = t.byteLength
          if (undefined === r) {
            if (t$byteLength % a) {
              throw new i$RangeError(WrongLength)
            }
            if ((s = t$byteLength - f) < 0) {
              throw new i$RangeError(WrongLength)
            }
          } else if ((s = h(r) * a) + f > t$byteLength) {
            throw new i$RangeError(WrongLength)
          }
          u = s / a
        } else {
          u = g(t)
          i = new c$ArrayBuffer(s = u * a)
        }
        for (R$set(e, {
          buffer: i,
          byteOffset: f,
          byteLength: s,
          length: u,
          view: new c$DataView(i)
        }); c < u;) {
          S(e, c++)
        }
      })
      if (E) {
        E(y, u$TypedArray)
      }
      _ = y.prototype = k(u$TypedArrayPrototype)
    }
    if (_.constructor !== y) {
      p(_, "constructor", y)
    }
    R$enforce(_).TypedArrayConstructor = y
    if (u$TYPED_ARRAY_TAG) {
      p(_, u$TYPED_ARRAY_TAG, u)
    }
    var O = y !== d
    b[u] = y
    r({
      global: true,
      constructor: true,
      forced: O,
      sham: !u$NATIVE_ARRAY_BUFFER_VIEWS
    }, b)
    if (!(BYTES_PER_ELEMENT in y)) {
      p(y, BYTES_PER_ELEMENT, a)
    }
    if (!(BYTES_PER_ELEMENT in _)) {
      p(_, BYTES_PER_ELEMENT, a)
    }
    P(u)
  }
} else {
  module.exports = function () {}
}
