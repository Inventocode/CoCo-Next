/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3323__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_34_465 from "../34/465"
function _(t) {
  if (!t) {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length > 1 ? arguments$length - 1 : 0), n = 1; n < arguments$length; n++) {
      i[n - 1] = arguments[n]
    }
    throw $$_34_465.a(Error, i)
  }
}
function m(t, e) {
  return undefined !== t ? t : e
}
var c = 1e37
var f = 1e-5
var d = f * f
var v = 3.14159265359
var y = 1
var p = 8
var x = 2
var B = .1 * y
var S = 4
var A = .005 * y
var C = 2 / 180 * v
var b = 2 * A
var g = 8
var V = 32
var w = .2 * y
var k = 8 / 180 * v
var M = 2 * y
var P = M * M
var I = .5 * v
var G = I * I
var D = .2
var F = .75
var L = -1
var R = 2147483647
var j = .75
var T = 1
var O = .25
var q = .5
var z = 2 * y
var E = z * z
var N = 256
var J = 2.5
var X = .5
var Z = .01 * y
var U = 2 / 180 * v
var W = function () {
  function t() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
    var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
    var s = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0
    $$_27.a(this, t)
    this.major = 0
    this.minor = 0
    this.revision = 0
    this.major = e
    this.minor = i
    this.revision = s
  }
  $$_39.a(t, [
    {
      key: "toString",
      value: function () {
        return this.major + "." + this.minor + "." + this.revision
      }
    }
  ])
  return t
}()
var Q = new W(2, 4, 1)
var /* [auto-meaningful-name] */Master = "master"
var /* [auto-meaningful-name] */_9ebbbcd960ad424e03e5de6e66a40764c16f51bc = "9ebbbcd960ad424e03e5de6e66a40764c16f51bc"
function H(t) {
  return parseInt(t, 10)
}
function $(t) {
  return Math.abs(parseInt(t, 10))
}
function tt(t, e) {
  for (var i = new Array(t), n = 0; n < t; ++n) {
    i[n] = e(n)
  }
  return i
}
function et(t) {
  for (var e = new Array(t), i = 0; i < t; ++i) {
    e[i] = null
  }
  return e
}
function it(t) {
  for (var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, i = new Array(t), n = 0; n < t; ++n) {
    i[n] = e
  }
  return i
}
function nt(t) {
  return null
}
function st(t) {}
function rt(t) {}
var ot = function () {
  function t(e) {
    $$_27.a(this, t)
    this.m_stack = []
    this.m_count = 0
    this.m_stack = tt(e, function (t) {
      return null
    })
    this.m_count = 0
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.m_count = 0
        return this
      }
    }, {
      key: "Push",
      value: function (t) {
        this.m_stack[this.m_count] = t
        this.m_count++
      }
    }, {
      key: "Pop",
      value: function () {
        this.m_count--
        var t = this.m_stack[this.m_count]
        this.m_stack[this.m_count] = null
        return t
      }
    }, {
      key: "GetCount",
      value: function () {
        return this.m_count
      }
    }
  ])
  return t
}()
var at = v / 180
var ut = 180 / v
var lt = 2 * v
var /* [auto-meaningful-name] */Math$abs = Math.abs
function _t(t, e) {
  return t < e ? t : e
}
function mt(t, e) {
  return t > e ? t : e
}
function ct(t, e, i) {
  return t < e ? e : t > i ? i : t
}
function ft(t, e) {
  var i = t[0]
  t[0] = e[0]
  e[0] = i
}
var dt = isFinite
function vt(t) {
  return t * t
}
function yt(t) {
  return 1 / Math.sqrt(t)
}
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
var /* [auto-meaningful-name] */Math$pow = Math.pow
function Bt(t) {
  return t * at
}
function St(t) {
  return t * ut
}
var /* [auto-meaningful-name] */Math$cos = Math.cos
var /* [auto-meaningful-name] */Math$sin = Math.sin
var /* [auto-meaningful-name] */Math$acos = Math.acos
var /* [auto-meaningful-name] */Math$asin = Math.asin
var /* [auto-meaningful-name] */Math$atan2 = Math.atan2
function wt(t) {
  t |= t >> 1 & 2147483647
  t |= t >> 2 & 1073741823
  t |= t >> 4 & 268435455
  t |= t >> 8 & 16777215
  return (t |= t >> 16 & 65535) + 1
}
function kt(t) {
  return t > 0 && 0 === (t & t - 1)
}
function Mt() {
  return 2 * Math.random() - 1
}
function Pt(t, e) {
  return (e - t) * Math.random() + t
}
var It = function () {
  function t() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
    var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
    $$_27.a(this, t)
    this.x = e
    this.y = i
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t(this.x, this.y)
      }
    }, {
      key: "SetZero",
      value: function () {
        this.x = 0
        this.y = 0
        return this
      }
    }, {
      key: "Set",
      value: function (t, e) {
        this.x = t
        this.y = e
        return this
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.x = t.x
        this.y = t.y
        return this
      }
    }, {
      key: "SelfAdd",
      value: function (t) {
        this.x += t.x
        this.y += t.y
        return this
      }
    }, {
      key: "SelfAddXY",
      value: function (t, e) {
        this.x += t
        this.y += e
        return this
      }
    }, {
      key: "SelfSub",
      value: function (t) {
        this.x -= t.x
        this.y -= t.y
        return this
      }
    }, {
      key: "SelfSubXY",
      value: function (t, e) {
        this.x -= t
        this.y -= e
        return this
      }
    }, {
      key: "SelfMul",
      value: function (t) {
        this.x *= t
        this.y *= t
        return this
      }
    }, {
      key: "SelfMulAdd",
      value: function (t, e) {
        this.x += t * e.x
        this.y += t * e.y
        return this
      }
    }, {
      key: "SelfMulSub",
      value: function (t, e) {
        this.x -= t * e.x
        this.y -= t * e.y
        return this
      }
    }, {
      key: "Dot",
      value: function (t) {
        return this.x * t.x + this.y * t.y
      }
    }, {
      key: "Cross",
      value: function (t) {
        return this.x * t.y - this.y * t.x
      }
    }, {
      key: "Length",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        var /* [auto-meaningful-name] */this$y = this.y
        return Math.sqrt(this$x * this$x + this$y * this$y)
      }
    }, {
      key: "LengthSquared",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        var /* [auto-meaningful-name] */this$y = this.y
        return this$x * this$x + this$y * this$y
      }
    }, {
      key: "Normalize",
      value: function () {
        var t = this.Length()
        if (t >= f) {
          var e = 1 / t
          this.x *= e
          this.y *= e
        }
        return t
      }
    }, {
      key: "SelfNormalize",
      value: function () {
        var t = this.Length()
        if (t >= f) {
          var e = 1 / t
          this.x *= e
          this.y *= e
        }
        return this
      }
    }, {
      key: "SelfRotate",
      value: function (t) {
        var e = Math.cos(t)
        var i = Math.sin(t)
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = e * this$x - i * this.y
        this.y = i * this$x + e * this.y
        return this
      }
    }, {
      key: "SelfRotateCosSin",
      value: function (t, e) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = t * this$x - e * this.y
        this.y = e * this$x + t * this.y
        return this
      }
    }, {
      key: "IsValid",
      value: function () {
        return isFinite(this.x) && isFinite(this.y)
      }
    }, {
      key: "SelfCrossVS",
      value: function (t) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = t * this.y
        this.y = -t * this$x
        return this
      }
    }, {
      key: "SelfCrossSV",
      value: function (t) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = -t * this.y
        this.y = t * this$x
        return this
      }
    }, {
      key: "SelfMinV",
      value: function (t) {
        this.x = _t(this.x, t.x)
        this.y = _t(this.y, t.y)
        return this
      }
    }, {
      key: "SelfMaxV",
      value: function (t) {
        this.x = mt(this.x, t.x)
        this.y = mt(this.y, t.y)
        return this
      }
    }, {
      key: "SelfAbs",
      value: function () {
        this.x = Math$abs(this.x)
        this.y = Math$abs(this.y)
        return this
      }
    }, {
      key: "SelfNeg",
      value: function () {
        this.x = -this.x
        this.y = -this.y
        return this
      }
    }, {
      key: "SelfSkew",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = -this.y
        this.y = this$x
        return this
      }
    }
  ], [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }, {
      key: "AbsV",
      value: function (t, e) {
        e.x = Math$abs(t.x)
        e.y = Math$abs(t.y)
        return e
      }
    }, {
      key: "MinV",
      value: function (t, e, i) {
        i.x = _t(t.x, e.x)
        i.y = _t(t.y, e.y)
        return i
      }
    }, {
      key: "MaxV",
      value: function (t, e, i) {
        i.x = mt(t.x, e.x)
        i.y = mt(t.y, e.y)
        return i
      }
    }, {
      key: "ClampV",
      value: function (t, e, i, n) {
        n.x = ct(t.x, e.x, i.x)
        n.y = ct(t.y, e.y, i.y)
        return n
      }
    }, {
      key: "RotateV",
      value: function (t, e, i) {
        var n = t.x
        var s = t.y
        var r = Math.cos(e)
        var o = Math.sin(e)
        i.x = r * n - o * s
        i.y = o * n + r * s
        return i
      }
    }, {
      key: "DotVV",
      value: function (t, e) {
        return t.x * e.x + t.y * e.y
      }
    }, {
      key: "CrossVV",
      value: function (t, e) {
        return t.x * e.y - t.y * e.x
      }
    }, {
      key: "CrossVS",
      value: function (t, e, i) {
        var n = t.x
        i.x = e * t.y
        i.y = -e * n
        return i
      }
    }, {
      key: "CrossVOne",
      value: function (t, e) {
        var i = t.x
        e.x = t.y
        e.y = -i
        return e
      }
    }, {
      key: "CrossSV",
      value: function (t, e, i) {
        var n = e.x
        i.x = -t * e.y
        i.y = t * n
        return i
      }
    }, {
      key: "CrossOneV",
      value: function (t, e) {
        var i = t.x
        e.x = -t.y
        e.y = i
        return e
      }
    }, {
      key: "AddVV",
      value: function (t, e, i) {
        i.x = t.x + e.x
        i.y = t.y + e.y
        return i
      }
    }, {
      key: "SubVV",
      value: function (t, e, i) {
        i.x = t.x - e.x
        i.y = t.y - e.y
        return i
      }
    }, {
      key: "MulSV",
      value: function (t, e, i) {
        i.x = e.x * t
        i.y = e.y * t
        return i
      }
    }, {
      key: "MulVS",
      value: function (t, e, i) {
        i.x = t.x * e
        i.y = t.y * e
        return i
      }
    }, {
      key: "AddVMulSV",
      value: function (t, e, i, n) {
        n.x = t.x + e * i.x
        n.y = t.y + e * i.y
        return n
      }
    }, {
      key: "SubVMulSV",
      value: function (t, e, i, n) {
        n.x = t.x - e * i.x
        n.y = t.y - e * i.y
        return n
      }
    }, {
      key: "AddVCrossSV",
      value: function (t, e, i, n) {
        n.x = t.x - e * i.y
        n.y = t.y + e * i.x
        return n
      }
    }, {
      key: "MidVV",
      value: function (t, e, i) {
        i.x = .5 * (t.x + e.x)
        i.y = .5 * (t.y + e.y)
        return i
      }
    }, {
      key: "ExtVV",
      value: function (t, e, i) {
        i.x = .5 * (e.x - t.x)
        i.y = .5 * (e.y - t.y)
        return i
      }
    }, {
      key: "IsEqualToV",
      value: function (t, e) {
        return t.x === e.x && t.y === e.y
      }
    }, {
      key: "DistanceVV",
      value: function (t, e) {
        var i = t.x - e.x
        var n = t.y - e.y
        return Math.sqrt(i * i + n * n)
      }
    }, {
      key: "DistanceSquaredVV",
      value: function (t, e) {
        var i = t.x - e.x
        var n = t.y - e.y
        return i * i + n * n
      }
    }, {
      key: "NegV",
      value: function (t, e) {
        e.x = -t.x
        e.y = -t.y
        return e
      }
    }
  ])
  return t
}()
It.ZERO = new It(0, 0)
It.UNITX = new It(1, 0)
It.UNITY = new It(0, 1)
It.s_t0 = new It()
It.s_t1 = new It()
It.s_t2 = new It()
It.s_t3 = new It()
var Gt = new It(0, 0)
var Dt = function () {
  function t() {
    $$_27.a(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      i[s] = arguments[s]
    }
    if (i[0] instanceof Float32Array) {
      if (2 !== i[0].length) {
        throw new Error()
      }
      this.data = i[0]
    } else {
      var r = "number" === typeof i[0] ? i[0] : 0
      var o = "number" === typeof i[1] ? i[1] : 0
      this.data = new Float32Array([r, o])
    }
  }
  $$_39.a(t, [
    {
      key: "x",
      get: function () {
        return this.data[0]
      },
      set: function (t) {
        this.data[0] = t
      }
    }, {
      key: "y",
      get: function () {
        return this.data[1]
      },
      set: function (t) {
        this.data[1] = t
      }
    }, {
      key: "Clone",
      value: function () {
        return new t(new Float32Array(this.data))
      }
    }, {
      key: "SetZero",
      value: function () {
        this.x = 0
        this.y = 0
        return this
      }
    }, {
      key: "Set",
      value: function (t, e) {
        this.x = t
        this.y = e
        return this
      }
    }, {
      key: "Copy",
      value: function (e) {
        if (e instanceof t) {
          this.data.set(e.data)
        } else {
          this.x = e.x
          this.y = e.y
        }
        return this
      }
    }, {
      key: "SelfAdd",
      value: function (t) {
        this.x += t.x
        this.y += t.y
        return this
      }
    }, {
      key: "SelfAddXY",
      value: function (t, e) {
        this.x += t
        this.y += e
        return this
      }
    }, {
      key: "SelfSub",
      value: function (t) {
        this.x -= t.x
        this.y -= t.y
        return this
      }
    }, {
      key: "SelfSubXY",
      value: function (t, e) {
        this.x -= t
        this.y -= e
        return this
      }
    }, {
      key: "SelfMul",
      value: function (t) {
        this.x *= t
        this.y *= t
        return this
      }
    }, {
      key: "SelfMulAdd",
      value: function (t, e) {
        this.x += t * e.x
        this.y += t * e.y
        return this
      }
    }, {
      key: "SelfMulSub",
      value: function (t, e) {
        this.x -= t * e.x
        this.y -= t * e.y
        return this
      }
    }, {
      key: "Dot",
      value: function (t) {
        return this.x * t.x + this.y * t.y
      }
    }, {
      key: "Cross",
      value: function (t) {
        return this.x * t.y - this.y * t.x
      }
    }, {
      key: "Length",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        var /* [auto-meaningful-name] */this$y = this.y
        return Math.sqrt(this$x * this$x + this$y * this$y)
      }
    }, {
      key: "LengthSquared",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        var /* [auto-meaningful-name] */this$y = this.y
        return this$x * this$x + this$y * this$y
      }
    }, {
      key: "Normalize",
      value: function () {
        var t = this.Length()
        if (t >= f) {
          var e = 1 / t
          this.x *= e
          this.y *= e
        }
        return t
      }
    }, {
      key: "SelfNormalize",
      value: function () {
        var t = this.Length()
        if (t >= f) {
          var e = 1 / t
          this.x *= e
          this.y *= e
        }
        return this
      }
    }, {
      key: "SelfRotate",
      value: function (t) {
        var e = Math.cos(t)
        var i = Math.sin(t)
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = e * this$x - i * this.y
        this.y = i * this$x + e * this.y
        return this
      }
    }, {
      key: "SelfRotateCosSin",
      value: function (t, e) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = t * this$x - e * this.y
        this.y = e * this$x + t * this.y
        return this
      }
    }, {
      key: "IsValid",
      value: function () {
        return isFinite(this.x) && isFinite(this.y)
      }
    }, {
      key: "SelfCrossVS",
      value: function (t) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = t * this.y
        this.y = -t * this$x
        return this
      }
    }, {
      key: "SelfCrossSV",
      value: function (t) {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = -t * this.y
        this.y = t * this$x
        return this
      }
    }, {
      key: "SelfMinV",
      value: function (t) {
        this.x = _t(this.x, t.x)
        this.y = _t(this.y, t.y)
        return this
      }
    }, {
      key: "SelfMaxV",
      value: function (t) {
        this.x = mt(this.x, t.x)
        this.y = mt(this.y, t.y)
        return this
      }
    }, {
      key: "SelfAbs",
      value: function () {
        this.x = Math$abs(this.x)
        this.y = Math$abs(this.y)
        return this
      }
    }, {
      key: "SelfNeg",
      value: function () {
        this.x = -this.x
        this.y = -this.y
        return this
      }
    }, {
      key: "SelfSkew",
      value: function () {
        var /* [auto-meaningful-name] */this$x = this.x
        this.x = -this.y
        this.y = this$x
        return this
      }
    }
  ])
  return t
}()
var Ft = function () {
  function t() {
    $$_27.a(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      i[s] = arguments[s]
    }
    if (i[0] instanceof Float32Array) {
      if (3 !== i[0].length) {
        throw new Error()
      }
      this.data = i[0]
    } else {
      var r = "number" === typeof i[0] ? i[0] : 0
      var o = "number" === typeof i[1] ? i[1] : 0
      var a = "number" === typeof i[2] ? i[2] : 0
      this.data = new Float32Array([r, o, a])
    }
  }
  $$_39.a(t, [
    {
      key: "x",
      get: function () {
        return this.data[0]
      },
      set: function (t) {
        this.data[0] = t
      }
    }, {
      key: "y",
      get: function () {
        return this.data[1]
      },
      set: function (t) {
        this.data[1] = t
      }
    }, {
      key: "z",
      get: function () {
        return this.data[2]
      },
      set: function (t) {
        this.data[2] = t
      }
    }, {
      key: "Clone",
      value: function () {
        return new t(this.x, this.y, this.z)
      }
    }, {
      key: "SetZero",
      value: function () {
        this.x = 0
        this.y = 0
        this.z = 0
        return this
      }
    }, {
      key: "SetXYZ",
      value: function (t, e, i) {
        this.x = t
        this.y = e
        this.z = i
        return this
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.x = t.x
        this.y = t.y
        this.z = t.z
        return this
      }
    }, {
      key: "SelfNeg",
      value: function () {
        this.x = -this.x
        this.y = -this.y
        this.z = -this.z
        return this
      }
    }, {
      key: "SelfAdd",
      value: function (t) {
        this.x += t.x
        this.y += t.y
        this.z += t.z
        return this
      }
    }, {
      key: "SelfAddXYZ",
      value: function (t, e, i) {
        this.x += t
        this.y += e
        this.z += i
        return this
      }
    }, {
      key: "SelfSub",
      value: function (t) {
        this.x -= t.x
        this.y -= t.y
        this.z -= t.z
        return this
      }
    }, {
      key: "SelfSubXYZ",
      value: function (t, e, i) {
        this.x -= t
        this.y -= e
        this.z -= i
        return this
      }
    }, {
      key: "SelfMul",
      value: function (t) {
        this.x *= t
        this.y *= t
        this.z *= t
        return this
      }
    }
  ], [
    {
      key: "DotV3V3",
      value: function (t, e) {
        return t.x * e.x + t.y * e.y + t.z * e.z
      }
    }, {
      key: "CrossV3V3",
      value: function (t, e, i) {
        var n = t.x
        var s = t.y
        var r = t.z
        var o = e.x
        var a = e.y
        var u = e.z
        i.x = s * u - r * a
        i.y = r * o - n * u
        i.z = n * a - s * o
        return i
      }
    }
  ])
  return t
}()
Ft.ZERO = new Ft(0, 0, 0)
Ft.s_t0 = new Ft()
var Lt = function () {
  function t() {
    $$_27.a(this, t)
    this.ex = new It(1, 0)
    this.ey = new It(0, 1)
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "SetSSSS",
      value: function (t, e, i, n) {
        this.ex.Set(t, i)
        this.ey.Set(e, n)
        return this
      }
    }, {
      key: "SetVV",
      value: function (t, e) {
        this.ex.Copy(t)
        this.ey.Copy(e)
        return this
      }
    }, {
      key: "SetAngle",
      value: function (t) {
        var e = Math.cos(t)
        var i = Math.sin(t)
        this.ex.Set(e, i)
        this.ey.Set(-i, e)
        return this
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.ex.Copy(t.ex)
        this.ey.Copy(t.ey)
        return this
      }
    }, {
      key: "SetIdentity",
      value: function () {
        this.ex.Set(1, 0)
        this.ey.Set(0, 1)
        return this
      }
    }, {
      key: "SetZero",
      value: function () {
        this.ex.SetZero()
        this.ey.SetZero()
        return this
      }
    }, {
      key: "GetAngle",
      value: function () {
        return Math.atan2(this.ex.y, this.ex.x)
      }
    }, {
      key: "GetInverse",
      value: function (t) {
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ex$y = this.ex.y
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var r = this$ex$x * this$ey$y - this$ey$x * this$ex$y
        if (0 !== r) {
          r = 1 / r
        }
        t.ex.x = r * this$ey$y
        t.ey.x = -r * this$ey$x
        t.ex.y = -r * this$ex$y
        t.ey.y = r * this$ex$x
        return t
      }
    }, {
      key: "Solve",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ex$y = this.ex.y
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var a = this$ex$x * this$ey$y - this$ey$x * this$ex$y
        if (0 !== a) {
          a = 1 / a
        }
        i.x = a * (this$ey$y * t - this$ey$x * e)
        i.y = a * (this$ex$x * e - this$ex$y * t)
        return i
      }
    }, {
      key: "SelfAbs",
      value: function () {
        this.ex.SelfAbs()
        this.ey.SelfAbs()
        return this
      }
    }, {
      key: "SelfInv",
      value: function () {
        this.GetInverse(this)
        return this
      }
    }, {
      key: "SelfAddM",
      value: function (t) {
        this.ex.SelfAdd(t.ex)
        this.ey.SelfAdd(t.ey)
        return this
      }
    }, {
      key: "SelfSubM",
      value: function (t) {
        this.ex.SelfSub(t.ex)
        this.ey.SelfSub(t.ey)
        return this
      }
    }
  ], [
    {
      key: "FromVV",
      value: function (e, i) {
        return new t().SetVV(e, i)
      }
    }, {
      key: "FromSSSS",
      value: function (e, i, n, s) {
        return new t().SetSSSS(e, i, n, s)
      }
    }, {
      key: "FromAngle",
      value: function (e) {
        return new t().SetAngle(e)
      }
    }, {
      key: "AbsM",
      value: function (t, e) {
        var i = t.ex
        var n = t.ey
        e.ex.x = Math$abs(i.x)
        e.ex.y = Math$abs(i.y)
        e.ey.x = Math$abs(n.x)
        e.ey.y = Math$abs(n.y)
        return e
      }
    }, {
      key: "MulMV",
      value: function (t, e, i) {
        var n = t.ex
        var s = t.ey
        var r = e.x
        var o = e.y
        i.x = n.x * r + s.x * o
        i.y = n.y * r + s.y * o
        return i
      }
    }, {
      key: "MulTMV",
      value: function (t, e, i) {
        var n = t.ex
        var s = t.ey
        var r = e.x
        var o = e.y
        i.x = n.x * r + n.y * o
        i.y = s.x * r + s.y * o
        return i
      }
    }, {
      key: "AddMM",
      value: function (t, e, i) {
        var n = t.ex
        var s = t.ey
        var r = e.ex
        var o = e.ey
        i.ex.x = n.x + r.x
        i.ex.y = n.y + r.y
        i.ey.x = s.x + o.x
        i.ey.y = s.y + o.y
        return i
      }
    }, {
      key: "MulMM",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */t$ex$x = t.ex.x
        var /* [auto-meaningful-name] */t$ex$y = t.ex.y
        var /* [auto-meaningful-name] */t$ey$x = t.ey.x
        var /* [auto-meaningful-name] */t$ey$y = t.ey.y
        var /* [auto-meaningful-name] */e$ex$x = e.ex.x
        var /* [auto-meaningful-name] */e$ex$y = e.ex.y
        var /* [auto-meaningful-name] */e$ey$x = e.ey.x
        var /* [auto-meaningful-name] */e$ey$y = e.ey.y
        i.ex.x = t$ex$x * e$ex$x + t$ey$x * e$ex$y
        i.ex.y = t$ex$y * e$ex$x + t$ey$y * e$ex$y
        i.ey.x = t$ex$x * e$ey$x + t$ey$x * e$ey$y
        i.ey.y = t$ex$y * e$ey$x + t$ey$y * e$ey$y
        return i
      }
    }, {
      key: "MulTMM",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */t$ex$x = t.ex.x
        var /* [auto-meaningful-name] */t$ex$y = t.ex.y
        var /* [auto-meaningful-name] */t$ey$x = t.ey.x
        var /* [auto-meaningful-name] */t$ey$y = t.ey.y
        var /* [auto-meaningful-name] */e$ex$x = e.ex.x
        var /* [auto-meaningful-name] */e$ex$y = e.ex.y
        var /* [auto-meaningful-name] */e$ey$x = e.ey.x
        var /* [auto-meaningful-name] */e$ey$y = e.ey.y
        i.ex.x = t$ex$x * e$ex$x + t$ex$y * e$ex$y
        i.ex.y = t$ey$x * e$ex$x + t$ey$y * e$ex$y
        i.ey.x = t$ex$x * e$ey$x + t$ex$y * e$ey$y
        i.ey.y = t$ey$x * e$ey$x + t$ey$y * e$ey$y
        return i
      }
    }
  ])
  return t
}()
Lt.IDENTITY = new Lt()
var Rt = function () {
  function t() {
    $$_27.a(this, t)
    this.data = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
    this.ex = new Ft(this.data.subarray(0, 3))
    this.ey = new Ft(this.data.subarray(3, 6))
    this.ez = new Ft(this.data.subarray(6, 9))
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "SetVVV",
      value: function (t, e, i) {
        this.ex.Copy(t)
        this.ey.Copy(e)
        this.ez.Copy(i)
        return this
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.ex.Copy(t.ex)
        this.ey.Copy(t.ey)
        this.ez.Copy(t.ez)
        return this
      }
    }, {
      key: "SetIdentity",
      value: function () {
        this.ex.SetXYZ(1, 0, 0)
        this.ey.SetXYZ(0, 1, 0)
        this.ez.SetXYZ(0, 0, 1)
        return this
      }
    }, {
      key: "SetZero",
      value: function () {
        this.ex.SetZero()
        this.ey.SetZero()
        this.ez.SetZero()
        return this
      }
    }, {
      key: "SelfAddM",
      value: function (t) {
        this.ex.SelfAdd(t.ex)
        this.ey.SelfAdd(t.ey)
        this.ez.SelfAdd(t.ez)
        return this
      }
    }, {
      key: "Solve33",
      value: function (t, e, i, n) {
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ex$y = this.ex.y
        var /* [auto-meaningful-name] */this$ex$z = this.ex.z
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var /* [auto-meaningful-name] */this$ey$z = this.ey.z
        var /* [auto-meaningful-name] */this$ez$x = this.ez.x
        var /* [auto-meaningful-name] */this$ez$y = this.ez.y
        var /* [auto-meaningful-name] */this$ez$z = this.ez.z
        var c = this$ex$x * (this$ey$y * this$ez$z - this$ey$z * this$ez$y) + this$ex$y * (this$ey$z * this$ez$x - this$ey$x * this$ez$z) + this$ex$z * (this$ey$x * this$ez$y - this$ey$y * this$ez$x)
        if (0 !== c) {
          c = 1 / c
        }
        n.x = c * (t * (this$ey$y * this$ez$z - this$ey$z * this$ez$y) + e * (this$ey$z * this$ez$x - this$ey$x * this$ez$z) + i * (this$ey$x * this$ez$y - this$ey$y * this$ez$x))
        n.y = c * (this$ex$x * (e * this$ez$z - i * this$ez$y) + this$ex$y * (i * this$ez$x - t * this$ez$z) + this$ex$z * (t * this$ez$y - e * this$ez$x))
        n.z = c * (this$ex$x * (this$ey$y * i - this$ey$z * e) + this$ex$y * (this$ey$z * t - this$ey$x * i) + this$ex$z * (this$ey$x * e - this$ey$y * t))
        return n
      }
    }, {
      key: "Solve22",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ex$y = this.ex.y
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var a = this$ex$x * this$ey$y - this$ey$x * this$ex$y
        if (0 !== a) {
          a = 1 / a
        }
        i.x = a * (this$ey$y * t - this$ey$x * e)
        i.y = a * (this$ex$x * e - this$ex$y * t)
        return i
      }
    }, {
      key: "GetInverse22",
      value: function (t) {
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ex$y = this.ex.y
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var r = this$ex$x * this$ey$y - this$ey$x * this$ex$y
        if (0 !== r) {
          r = 1 / r
        }
        t.ex.x = r * this$ey$y
        t.ey.x = -r * this$ey$x
        t.ex.z = 0
        t.ex.y = -r * this$ex$y
        t.ey.y = r * this$ex$x
        t.ey.z = 0
        t.ez.x = 0
        t.ez.y = 0
        t.ez.z = 0
      }
    }, {
      key: "GetSymInverse33",
      value: function (t) {
        var e = Ft.DotV3V3(this.ex, Ft.CrossV3V3(this.ey, this.ez, Ft.s_t0))
        if (0 !== e) {
          e = 1 / e
        }
        var /* [auto-meaningful-name] */this$ex$x = this.ex.x
        var /* [auto-meaningful-name] */this$ey$x = this.ey.x
        var /* [auto-meaningful-name] */this$ez$x = this.ez.x
        var /* [auto-meaningful-name] */this$ey$y = this.ey.y
        var /* [auto-meaningful-name] */this$ez$y = this.ez.y
        var /* [auto-meaningful-name] */this$ez$z = this.ez.z
        t.ex.x = e * (this$ey$y * this$ez$z - this$ez$y * this$ez$y)
        t.ex.y = e * (this$ez$x * this$ez$y - this$ey$x * this$ez$z)
        t.ex.z = e * (this$ey$x * this$ez$y - this$ez$x * this$ey$y)
        t.ey.x = t.ex.y
        t.ey.y = e * (this$ex$x * this$ez$z - this$ez$x * this$ez$x)
        t.ey.z = e * (this$ez$x * this$ey$x - this$ex$x * this$ez$y)
        t.ez.x = t.ex.z
        t.ez.y = t.ey.z
        t.ez.z = e * (this$ex$x * this$ey$y - this$ey$x * this$ey$x)
      }
    }
  ], [
    {
      key: "MulM33V3",
      value: function (t, e, i) {
        var n = e.x
        var s = e.y
        var r = e.z
        i.x = t.ex.x * n + t.ey.x * s + t.ez.x * r
        i.y = t.ex.y * n + t.ey.y * s + t.ez.y * r
        i.z = t.ex.z * n + t.ey.z * s + t.ez.z * r
        return i
      }
    }, {
      key: "MulM33XYZ",
      value: function (t, e, i, n, s) {
        s.x = t.ex.x * e + t.ey.x * i + t.ez.x * n
        s.y = t.ex.y * e + t.ey.y * i + t.ez.y * n
        s.z = t.ex.z * e + t.ey.z * i + t.ez.z * n
        return s
      }
    }, {
      key: "MulM33V2",
      value: function (t, e, i) {
        var n = e.x
        var s = e.y
        i.x = t.ex.x * n + t.ey.x * s
        i.y = t.ex.y * n + t.ey.y * s
        return i
      }
    }, {
      key: "MulM33XY",
      value: function (t, e, i, n) {
        n.x = t.ex.x * e + t.ey.x * i
        n.y = t.ex.y * e + t.ey.y * i
        return n
      }
    }
  ])
  return t
}()
Rt.IDENTITY = new Rt()
var jt = function () {
  function t() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
    $$_27.a(this, t)
    this.s = 0
    this.c = 1
    if (e) {
      this.s = Math.sin(e)
      this.c = Math.cos(e)
    }
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.s = t.s
        this.c = t.c
        return this
      }
    }, {
      key: "SetAngle",
      value: function (t) {
        this.s = Math.sin(t)
        this.c = Math.cos(t)
        return this
      }
    }, {
      key: "SetIdentity",
      value: function () {
        this.s = 0
        this.c = 1
        return this
      }
    }, {
      key: "GetAngle",
      value: function () {
        return Math.atan2(this.s, this.c)
      }
    }, {
      key: "GetXAxis",
      value: function (t) {
        t.x = this.c
        t.y = this.s
        return t
      }
    }, {
      key: "GetYAxis",
      value: function (t) {
        t.x = -this.s
        t.y = this.c
        return t
      }
    }
  ], [
    {
      key: "MulRR",
      value: function (t, e, i) {
        var n = t.c
        var s = t.s
        var r = e.c
        var o = e.s
        i.s = s * r + n * o
        i.c = n * r - s * o
        return i
      }
    }, {
      key: "MulTRR",
      value: function (t, e, i) {
        var n = t.c
        var s = t.s
        var r = e.c
        var o = e.s
        i.s = n * o - s * r
        i.c = n * r + s * o
        return i
      }
    }, {
      key: "MulRV",
      value: function (t, e, i) {
        var n = t.c
        var s = t.s
        var r = e.x
        var o = e.y
        i.x = n * r - s * o
        i.y = s * r + n * o
        return i
      }
    }, {
      key: "MulTRV",
      value: function (t, e, i) {
        var n = t.c
        var s = t.s
        var r = e.x
        var o = e.y
        i.x = n * r + s * o
        i.y = -s * r + n * o
        return i
      }
    }
  ])
  return t
}()
jt.IDENTITY = new jt()
var Tt = function () {
  function t() {
    $$_27.a(this, t)
    this.p = new It()
    this.q = new jt()
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.p.Copy(t.p)
        this.q.Copy(t.q)
        return this
      }
    }, {
      key: "SetIdentity",
      value: function () {
        this.p.SetZero()
        this.q.SetIdentity()
        return this
      }
    }, {
      key: "SetPositionRotation",
      value: function (t, e) {
        this.p.Copy(t)
        this.q.Copy(e)
        return this
      }
    }, {
      key: "SetPositionAngle",
      value: function (t, e) {
        this.p.Copy(t)
        this.q.SetAngle(e)
        return this
      }
    }, {
      key: "SetPosition",
      value: function (t) {
        this.p.Copy(t)
        return this
      }
    }, {
      key: "SetPositionXY",
      value: function (t, e) {
        this.p.Set(t, e)
        return this
      }
    }, {
      key: "SetRotation",
      value: function (t) {
        this.q.Copy(t)
        return this
      }
    }, {
      key: "SetRotationAngle",
      value: function (t) {
        this.q.SetAngle(t)
        return this
      }
    }, {
      key: "GetPosition",
      value: function () {
        return this.p
      }
    }, {
      key: "GetRotation",
      value: function () {
        return this.q
      }
    }, {
      key: "GetRotationAngle",
      value: function () {
        return this.q.GetAngle()
      }
    }, {
      key: "GetAngle",
      value: function () {
        return this.q.GetAngle()
      }
    }
  ], [
    {
      key: "MulXV",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */t$q$c = t.q.c
        var /* [auto-meaningful-name] */t$q$s = t.q.s
        var r = e.x
        var o = e.y
        i.x = t$q$c * r - t$q$s * o + t.p.x
        i.y = t$q$s * r + t$q$c * o + t.p.y
        return i
      }
    }, {
      key: "MulTXV",
      value: function (t, e, i) {
        var /* [auto-meaningful-name] */t$q$c = t.q.c
        var /* [auto-meaningful-name] */t$q$s = t.q.s
        var r = e.x - t.p.x
        var o = e.y - t.p.y
        i.x = t$q$c * r + t$q$s * o
        i.y = -t$q$s * r + t$q$c * o
        return i
      }
    }, {
      key: "MulXX",
      value: function (t, e, i) {
        jt.MulRR(t.q, e.q, i.q)
        It.AddVV(jt.MulRV(t.q, e.p, i.p), t.p, i.p)
        return i
      }
    }, {
      key: "MulTXX",
      value: function (t, e, i) {
        jt.MulTRR(t.q, e.q, i.q)
        jt.MulTRV(t.q, It.SubVV(e.p, t.p, i.p), i.p)
        return i
      }
    }
  ])
  return t
}()
Tt.IDENTITY = new Tt()
var Ot = function () {
  function t() {
    $$_27.a(this, t)
    this.localCenter = new It()
    this.c0 = new It()
    this.c = new It()
    this.a0 = 0
    this.a = 0
    this.alpha0 = 0
  }
  $$_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.localCenter.Copy(t.localCenter)
        this.c0.Copy(t.c0)
        this.c.Copy(t.c)
        this.a0 = t.a0
        this.a = t.a
        this.alpha0 = t.alpha0
        return this
      }
    }, {
      key: "GetTransform",
      value: function (t, e) {
        t.p.x = (1 - e) * this.c0.x + e * this.c.x
        t.p.y = (1 - e) * this.c0.y + e * this.c.y
        var i = (1 - e) * this.a0 + e * this.a
        t.q.SetAngle(i)
        t.p.SelfSub(jt.MulRV(t.q, this.localCenter, It.s_t0))
        return t
      }
    }, {
      key: "Advance",
      value: function (t) {
        var e = (t - this.alpha0) / (1 - this.alpha0)
        var i = 1 - e
        this.c0.x = i * this.c0.x + e * this.c.x
        this.c0.y = i * this.c0.y + e * this.c.y
        this.a0 = i * this.a0 + e * this.a
        this.alpha0 = t
      }
    }, {
      key: "Normalize",
      value: function () {
        var t = lt * Math.floor(this.a0 / lt)
        this.a0 -= t
        this.a -= t
      }
    }
  ])
  return t
}()
var qt = function t() {
  $$_27.a(this, t)
}
var zt = function () {
  function t() {
    $$_27.a(this, t)
    this.m_start = Date.now()
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.m_start = Date.now()
        return this
      }
    }, {
      key: "GetMilliseconds",
      value: function () {
        return Date.now() - this.m_start
      }
    }
  ])
  return t
}()
var Et = function () {
  function t() {
    $$_27.a(this, t)
    this.m_count = 0
    this.m_min_count = 0
    this.m_max_count = 0
  }
  $$_39.a(t, [
    {
      key: "GetCount",
      value: function () {
        return this.m_count
      }
    }, {
      key: "GetMinCount",
      value: function () {
        return this.m_min_count
      }
    }, {
      key: "GetMaxCount",
      value: function () {
        return this.m_max_count
      }
    }, {
      key: "ResetCount",
      value: function () {
        var /* [auto-meaningful-name] */this$m_count = this.m_count
        this.m_count = 0
        return this$m_count
      }
    }, {
      key: "ResetMinCount",
      value: function () {
        this.m_min_count = 0
      }
    }, {
      key: "ResetMaxCount",
      value: function () {
        this.m_max_count = 0
      }
    }, {
      key: "Increment",
      value: function () {
        this.m_count++
        if (this.m_max_count < this.m_count) {
          this.m_max_count = this.m_count
        }
      }
    }, {
      key: "Decrement",
      value: function () {
        this.m_count--
        if (this.m_min_count > this.m_count) {
          this.m_min_count = this.m_count
        }
      }
    }
  ])
  return t
}()
var Nt = function () {
  function t() {
    $$_27.a(this, t)
    this.m_buffer = It.MakeArray(2)
    this.m_vertices = this.m_buffer
    this.m_count = 0
    this.m_radius = 0
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        if (t.m_vertices === t.m_buffer) {
          this.m_vertices = this.m_buffer
          this.m_buffer[0].Copy(t.m_buffer[0])
          this.m_buffer[1].Copy(t.m_buffer[1])
        } else {
          this.m_vertices = t.m_vertices
        }
        this.m_count = t.m_count
        this.m_radius = t.m_radius
        return this
      }
    }, {
      key: "Reset",
      value: function () {
        this.m_vertices = this.m_buffer
        this.m_count = 0
        this.m_radius = 0
        return this
      }
    }, {
      key: "SetShape",
      value: function (t, e) {
        t.SetupDistanceProxy(this, e)
      }
    }, {
      key: "SetVerticesRadius",
      value: function (t, e, i) {
        this.m_vertices = t
        this.m_count = e
        this.m_radius = i
      }
    }, {
      key: "GetSupport",
      value: function (t) {
        for (var e = 0, i = It.DotVV(this.m_vertices[0], t), n = 1; n < this.m_count; ++n) {
          var s = It.DotVV(this.m_vertices[n], t)
          if (s > i) {
            e = n
            i = s
          }
        }
        return e
      }
    }, {
      key: "GetSupportVertex",
      value: function (t) {
        for (var e = 0, i = It.DotVV(this.m_vertices[0], t), n = 1; n < this.m_count; ++n) {
          var s = It.DotVV(this.m_vertices[n], t)
          if (s > i) {
            e = n
            i = s
          }
        }
        return this.m_vertices[e]
      }
    }, {
      key: "GetVertexCount",
      value: function () {
        return this.m_count
      }
    }, {
      key: "GetVertex",
      value: function (t) {
        return this.m_vertices[t]
      }
    }
  ])
  return t
}()
var Jt = function () {
  function t() {
    $$_27.a(this, t)
    this.metric = 0
    this.count = 0
    this.indexA = [0, 0, 0]
    this.indexB = [0, 0, 0]
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.metric = 0
        this.count = 0
        return this
      }
    }
  ])
  return t
}()
var Xt = function () {
  function t() {
    $$_27.a(this, t)
    this.proxyA = new Nt()
    this.proxyB = new Nt()
    this.transformA = new Tt()
    this.transformB = new Tt()
    this.useRadii = false
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.proxyA.Reset()
        this.proxyB.Reset()
        this.transformA.SetIdentity()
        this.transformB.SetIdentity()
        this.useRadii = false
        return this
      }
    }
  ])
  return t
}()
var Zt = function () {
  function t() {
    $$_27.a(this, t)
    this.pointA = new It()
    this.pointB = new It()
    this.distance = 0
    this.iterations = 0
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.pointA.SetZero()
        this.pointB.SetZero()
        this.distance = 0
        this.iterations = 0
        return this
      }
    }
  ])
  return t
}()
var Ut = function t() {
  $$_27.a(this, t)
  this.proxyA = new Nt()
  this.proxyB = new Nt()
  this.transformA = new Tt()
  this.transformB = new Tt()
  this.translationB = new It()
}
var Wt = function t() {
  $$_27.a(this, t)
  this.point = new It()
  this.normal = new It()
  this.lambda = 0
  this.iterations = 0
}
var Qt = 0
var Yt = 0
var Kt = 0
function Ht() {
  Qt = 0
  Yt = 0
  Kt = 0
}
var $t = function () {
  function t() {
    $$_27.a(this, t)
    this.wA = new It()
    this.wB = new It()
    this.w = new It()
    this.a = 0
    this.indexA = 0
    this.indexB = 0
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.wA.Copy(t.wA)
        this.wB.Copy(t.wB)
        this.w.Copy(t.w)
        this.a = t.a
        this.indexA = t.indexA
        this.indexB = t.indexB
        return this
      }
    }
  ])
  return t
}()
var te = function () {
  function t() {
    $$_27.a(this, t)
    this.m_v1 = new $t()
    this.m_v2 = new $t()
    this.m_v3 = new $t()
    this.m_vertices = []
    this.m_count = 0
    this.m_vertices[0] = this.m_v1
    this.m_vertices[1] = this.m_v2
    this.m_vertices[2] = this.m_v3
  }
  $$_39.a(t, [
    {
      key: "ReadCache",
      value: function (t, e, i, n, s) {
        this.m_count = t.count
        for (var /* [auto-meaningful-name] */this$m_vertices = this.m_vertices, o = 0; o < this.m_count; ++o) {
          var a = this$m_vertices[o]
          a.indexA = t.indexA[o]
          a.indexB = t.indexB[o]
          var u = e.GetVertex(a.indexA)
          var l = n.GetVertex(a.indexB)
          Tt.MulXV(i, u, a.wA)
          Tt.MulXV(s, l, a.wB)
          It.SubVV(a.wB, a.wA, a.w)
          a.a = 0
        }
        if (this.m_count > 1) {
          var /* [auto-meaningful-name] */t$metric = t.metric
          var _ = this.GetMetric()
          if (_ < .5 * t$metric || 2 * t$metric < _ || _ < f) {
            this.m_count = 0
          }
        }
        if (0 === this.m_count) {
          var m = this$m_vertices[0]
          m.indexA = 0
          m.indexB = 0
          var c = e.GetVertex(0)
          var d = n.GetVertex(0)
          Tt.MulXV(i, c, m.wA)
          Tt.MulXV(s, d, m.wB)
          It.SubVV(m.wB, m.wA, m.w)
          m.a = 1
          this.m_count = 1
        }
      }
    }, {
      key: "WriteCache",
      value: function (t) {
        t.metric = this.GetMetric()
        t.count = this.m_count
        for (var /* [auto-meaningful-name] */this$m_vertices = this.m_vertices, i = 0; i < this.m_count; ++i) {
          t.indexA[i] = this$m_vertices[i].indexA
          t.indexB[i] = this$m_vertices[i].indexB
        }
      }
    }, {
      key: "GetSearchDirection",
      value: function (t) {
        switch (this.m_count) {
          case 1:
            return It.NegV(this.m_v1.w, t)
          case 2:
            var e = It.SubVV(this.m_v2.w, this.m_v1.w, t)
            return It.CrossVV(e, It.NegV(this.m_v1.w, It.s_t0)) > 0 ? It.CrossOneV(e, t) : It.CrossVOne(e, t)
          default:
            return t.SetZero()
        }
      }
    }, {
      key: "GetClosestPoint",
      value: function (t) {
        switch (this.m_count) {
          case 0:
            return t.SetZero()
          case 1:
            return t.Copy(this.m_v1.w)
          case 2:
            return t.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y)
          case 3:
          default:
            return t.SetZero()
        }
      }
    }, {
      key: "GetWitnessPoints",
      value: function (t, e) {
        switch (this.m_count) {
          case 0:
            break
          case 1:
            t.Copy(this.m_v1.wA)
            e.Copy(this.m_v1.wB)
            break
          case 2:
            t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x
            t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y
            e.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x
            e.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y
            break
          case 3:
            e.x = t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x
            e.y = t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y
        }
      }
    }, {
      key: "GetMetric",
      value: function () {
        switch (this.m_count) {
          case 0:
          case 1:
            return 0
          case 2:
            return It.DistanceVV(this.m_v1.w, this.m_v2.w)
          case 3:
            return It.CrossVV(It.SubVV(this.m_v2.w, this.m_v1.w, It.s_t0), It.SubVV(this.m_v3.w, this.m_v1.w, It.s_t1))
          default:
            return 0
        }
      }
    }, {
      key: "Solve2",
      value: function () {
        var /* [auto-meaningful-name] */this$m_v1$w = this.m_v1.w
        var /* [auto-meaningful-name] */this$m_v2$w = this.m_v2.w
        var n = It.SubVV(this$m_v2$w, this$m_v1$w, t.s_e12)
        var s = -It.DotVV(this$m_v1$w, n)
        if (s <= 0) {
          this.m_v1.a = 1
          return void (this.m_count = 1)
        }
        var r = It.DotVV(this$m_v2$w, n)
        if (r <= 0) {
          this.m_v2.a = 1
          this.m_count = 1
          return void this.m_v1.Copy(this.m_v2)
        }
        var o = 1 / (r + s)
        this.m_v1.a = r * o
        this.m_v2.a = s * o
        this.m_count = 2
      }
    }, {
      key: "Solve3",
      value: function () {
        var /* [auto-meaningful-name] */this$m_v1$w = this.m_v1.w
        var /* [auto-meaningful-name] */this$m_v2$w = this.m_v2.w
        var /* [auto-meaningful-name] */this$m_v3$w = this.m_v3.w
        var s = It.SubVV(this$m_v2$w, this$m_v1$w, t.s_e12)
        var r = It.DotVV(this$m_v1$w, s)
        var o = It.DotVV(this$m_v2$w, s)
        var a = -r
        var u = It.SubVV(this$m_v3$w, this$m_v1$w, t.s_e13)
        var l = It.DotVV(this$m_v1$w, u)
        var h = It.DotVV(this$m_v3$w, u)
        var _ = -l
        var m = It.SubVV(this$m_v3$w, this$m_v2$w, t.s_e23)
        var c = It.DotVV(this$m_v2$w, m)
        var f = It.DotVV(this$m_v3$w, m)
        var d = -c
        var v = It.CrossVV(s, u)
        var y = v * It.CrossVV(this$m_v2$w, this$m_v3$w)
        var p = v * It.CrossVV(this$m_v3$w, this$m_v1$w)
        var x = v * It.CrossVV(this$m_v1$w, this$m_v2$w)
        if (a <= 0 && _ <= 0) {
          this.m_v1.a = 1
          return void (this.m_count = 1)
        }
        if (o > 0 && a > 0 && x <= 0) {
          var B = 1 / (o + a)
          this.m_v1.a = o * B
          this.m_v2.a = a * B
          return void (this.m_count = 2)
        }
        if (h > 0 && _ > 0 && p <= 0) {
          var S = 1 / (h + _)
          this.m_v1.a = h * S
          this.m_v3.a = _ * S
          this.m_count = 2
          return void this.m_v2.Copy(this.m_v3)
        }
        if (o <= 0 && d <= 0) {
          this.m_v2.a = 1
          this.m_count = 1
          return void this.m_v1.Copy(this.m_v2)
        }
        if (h <= 0 && f <= 0) {
          this.m_v3.a = 1
          this.m_count = 1
          return void this.m_v1.Copy(this.m_v3)
        }
        if (f > 0 && d > 0 && y <= 0) {
          var A = 1 / (f + d)
          this.m_v2.a = f * A
          this.m_v3.a = d * A
          this.m_count = 2
          return void this.m_v1.Copy(this.m_v3)
        }
        var C = 1 / (y + p + x)
        this.m_v1.a = y * C
        this.m_v2.a = p * C
        this.m_v3.a = x * C
        this.m_count = 3
      }
    }
  ])
  return t
}()
te.s_e12 = new It()
te.s_e13 = new It()
te.s_e23 = new It()
var ee = new te()
var ie = [0, 0, 0]
var ne = [0, 0, 0]
var se = new It()
var re = new It()
var oe = new It()
var ae = new It()
var ue = new It()
function le(t, e, i) {
  ++Qt
  var /* [auto-meaningful-name] */i$proxyA = i.proxyA
  var /* [auto-meaningful-name] */i$proxyB = i.proxyB
  var /* [auto-meaningful-name] */i$transformA = i.transformA
  var /* [auto-meaningful-name] */i$transformB = i.transformB
  var a = ee
  a.ReadCache(e, i$proxyA, i$transformA, i$proxyB, i$transformB)
  for (var /* [auto-meaningful-name] */a$m_vertices = a.m_vertices, l = ie, h = ne, _ = 0, m = 0; m < 20;) {
    _ = a.m_count
    for (var c = 0; c < _; ++c) {
      l[c] = a$m_vertices[c].indexA
      h[c] = a$m_vertices[c].indexB
    }
    switch (a.m_count) {
      case 1:
        break
      case 2:
        a.Solve2()
        break
      case 3:
        a.Solve3()
    }
    if (3 === a.m_count) {
      break
    }
    var v = a.GetSearchDirection(re)
    if (v.LengthSquared() < d) {
      break
    }
    var y = a$m_vertices[a.m_count]
    y.indexA = i$proxyA.GetSupport(jt.MulTRV(i$transformA.q, It.NegV(v, It.s_t0), ae))
    Tt.MulXV(i$transformA, i$proxyA.GetVertex(y.indexA), y.wA)
    y.indexB = i$proxyB.GetSupport(jt.MulTRV(i$transformB.q, v, ue))
    Tt.MulXV(i$transformB, i$proxyB.GetVertex(y.indexB), y.wB)
    It.SubVV(y.wB, y.wA, y.w)
    ++m
    ++Yt
    for (var p = false, x = 0; x < _; ++x) {
      if (y.indexA === l[x] && y.indexB === h[x]) {
        p = true
        break
      }
    }
    if (p) {
      break
    }
    ++a.m_count
  }
  Kt = mt(Kt, m)
  a.GetWitnessPoints(t.pointA, t.pointB)
  t.distance = It.DistanceVV(t.pointA, t.pointB)
  t.iterations = m
  a.WriteCache(e)
  if (i.useRadii) {
    var /* [auto-meaningful-name] */i$proxyA$m_radius = i$proxyA.m_radius
    var /* [auto-meaningful-name] */i$proxyB$m_radius = i$proxyB.m_radius
    if (t.distance > i$proxyA$m_radius + i$proxyB$m_radius && t.distance > f) {
      t.distance -= i$proxyA$m_radius + i$proxyB$m_radius
      var A = It.SubVV(t.pointB, t.pointA, oe)
      A.Normalize()
      t.pointA.SelfMulAdd(i$proxyA$m_radius, A)
      t.pointB.SelfMulSub(i$proxyB$m_radius, A)
    } else {
      var C = It.MidVV(t.pointA, t.pointB, se)
      t.pointA.Copy(C)
      t.pointB.Copy(C)
      t.distance = 0
    }
  }
}
var he
var _e = new It()
var me = new te()
var ce = new It()
var fe = new It()
var de = new It()
var ve = new It()
var ye = new It()
var pe = new It()
function xe(t, e) {
  t.iterations = 0
  t.lambda = 1
  t.normal.SetZero()
  t.point.SetZero()
  var /* [auto-meaningful-name] */e$proxyA = e.proxyA
  var /* [auto-meaningful-name] */e$proxyB = e.proxyB
  var s = mt(e$proxyA.m_radius, b) + mt(e$proxyB.m_radius, b)
  var /* [auto-meaningful-name] */e$transformA = e.transformA
  var /* [auto-meaningful-name] */e$transformB = e.transformB
  var /* [auto-meaningful-name] */e$translationB = e.translationB
  var u = _e.Set(0, 0)
  var l = 0
  var h = me
  h.m_count = 0
  for (var /* [auto-meaningful-name] */h$m_vertices = h.m_vertices, m = e$proxyA.GetSupport(jt.MulTRV(e$transformA.q, It.NegV(e$translationB, It.s_t1), It.s_t0)), c = Tt.MulXV(e$transformA, e$proxyA.GetVertex(m), ce), f = e$proxyB.GetSupport(jt.MulTRV(e$transformB.q, e$translationB, It.s_t0)), d = Tt.MulXV(e$transformB, e$proxyB.GetVertex(f), fe), v = It.SubVV(c, d, de), y = mt(b, s - b), p = .5 * A, x = 0; x < 20 && v.Length() - y > p;) {
    t.iterations += 1
    m = e$proxyA.GetSupport(jt.MulTRV(e$transformA.q, It.NegV(v, It.s_t1), It.s_t0))
    c = Tt.MulXV(e$transformA, e$proxyA.GetVertex(m), ce)
    f = e$proxyB.GetSupport(jt.MulTRV(e$transformB.q, v, It.s_t0))
    d = Tt.MulXV(e$transformB, e$proxyB.GetVertex(f), fe)
    var B = It.SubVV(c, d, ve)
    v.Normalize()
    var S = It.DotVV(v, B)
    var C = It.DotVV(v, e$translationB)
    if (S - y > l * C) {
      if (C <= 0) {
        return false
      }
      if ((l = (S - y) / C) > 1) {
        return false
      }
      u.Copy(v).SelfNeg()
      h.m_count = 0
    }
    var g = h$m_vertices[h.m_count]
    switch (g.indexA = f, g.wA.Copy(d).SelfMulAdd(l, e$translationB), g.indexB = m, g.wB.Copy(c), g.w.Copy(g.wB).SelfSub(g.wA), g.a = 1, h.m_count += 1, h.m_count) {
      case 1:
        break
      case 2:
        h.Solve2()
        break
      case 3:
        h.Solve3()
    }
    if (3 === h.m_count) {
      return false
    }
    h.GetClosestPoint(v)
    ++x
  }
  if (0 === x) {
    return false
  }
  var V = ye
  var w = pe
  h.GetWitnessPoints(V, w)
  if (v.LengthSquared() > 0) {
    u.Copy(v).SelfNeg()
    u.Normalize()
  }
  t.normal.Copy(u)
  t.lambda = l
  t.iterations = x
  return true
}
!function (t) {
  t[t.e_vertex = 0] = "e_vertex"
  t[t.e_face = 1] = "e_face"
}(he || (he = {}))
var Be
var Se = function () {
  function t() {
    $$_27.a(this, t)
    this._key = 0
    this._key_invalid = false
    this._indexA = 0
    this._indexB = 0
    this._typeA = 0
    this._typeB = 0
  }
  $$_39.a(t, [
    {
      key: "key",
      get: function () {
        if (this._key_invalid) {
          this._key_invalid = false
          this._key = this._indexA | this._indexB << 8 | this._typeA << 16 | this._typeB << 24
        }
        return this._key
      },
      set: function (t) {
        this._key = t
        this._key_invalid = false
        this._indexA = 255 & this._key
        this._indexB = this._key >> 8 & 255
        this._typeA = this._key >> 16 & 255
        this._typeB = this._key >> 24 & 255
      }
    }, {
      key: "indexA",
      get: function () {
        return this._indexA
      },
      set: function (t) {
        this._indexA = t
        this._key_invalid = true
      }
    }, {
      key: "indexB",
      get: function () {
        return this._indexB
      },
      set: function (t) {
        this._indexB = t
        this._key_invalid = true
      }
    }, {
      key: "typeA",
      get: function () {
        return this._typeA
      },
      set: function (t) {
        this._typeA = t
        this._key_invalid = true
      }
    }, {
      key: "typeB",
      get: function () {
        return this._typeB
      },
      set: function (t) {
        this._typeB = t
        this._key_invalid = true
      }
    }
  ])
  return t
}()
var Ae = function () {
  function t() {
    $$_27.a(this, t)
    this.cf = new Se()
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.key = t.key
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "key",
      get: function () {
        return this.cf.key
      },
      set: function (t) {
        this.cf.key = t
      }
    }
  ])
  return t
}()
var Ce = function () {
  function t() {
    $$_27.a(this, t)
    this.localPoint = new It()
    this.normalImpulse = 0
    this.tangentImpulse = 0
    this.id = new Ae()
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.localPoint.SetZero()
        this.normalImpulse = 0
        this.tangentImpulse = 0
        this.id.key = 0
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.localPoint.Copy(t.localPoint)
        this.normalImpulse = t.normalImpulse
        this.tangentImpulse = t.tangentImpulse
        this.id.Copy(t.id)
        return this
      }
    }
  ], [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
!function (t) {
  t[t.e_unknown = -1] = "e_unknown"
  t[t.e_circles = 0] = "e_circles"
  t[t.e_faceA = 1] = "e_faceA"
  t[t.e_faceB = 2] = "e_faceB"
}(Be || (Be = {}))
var be
var ge = function () {
  function t() {
    $$_27.a(this, t)
    this.points = Ce.MakeArray(x)
    this.localNormal = new It()
    this.localPoint = new It()
    this.type = Be.e_unknown
    this.pointCount = 0
  }
  $$_39.a(t, [
    {
      key: "Reset",
      value: function () {
        for (var t = 0; t < x; ++t) {
          this.points[t].Reset()
        }
        this.localNormal.SetZero()
        this.localPoint.SetZero()
        this.type = Be.e_unknown
        this.pointCount = 0
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.pointCount = t.pointCount
        for (var e = 0; e < x; ++e) {
          this.points[e].Copy(t.points[e])
        }
        this.localNormal.Copy(t.localNormal)
        this.localPoint.Copy(t.localPoint)
        this.type = t.type
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }
  ])
  return t
}()
var Ve = function () {
  function t() {
    $$_27.a(this, t)
    this.normal = new It()
    this.points = It.MakeArray(x)
    this.separations = it(x)
  }
  $$_39.a(t, [
    {
      key: "Initialize",
      value: function (e, i, n, s, r) {
        if (0 !== e.pointCount) {
          switch (e.type) {
            case Be.e_circles:
              this.normal.Set(1, 0)
              var o = Tt.MulXV(i, e.localPoint, t.Initialize_s_pointA),
                a = Tt.MulXV(s, e.points[0].localPoint, t.Initialize_s_pointB)
              if (It.DistanceSquaredVV(o, a) > d) {
                It.SubVV(a, o, this.normal).SelfNormalize()
              }
              var u = It.AddVMulSV(o, n, this.normal, t.Initialize_s_cA),
                l = It.SubVMulSV(a, r, this.normal, t.Initialize_s_cB)
              It.MidVV(u, l, this.points[0])
              this.separations[0] = It.DotVV(It.SubVV(l, u, It.s_t0), this.normal)
              break
            case Be.e_faceA:
              jt.MulRV(i.q, e.localNormal, this.normal)
              for (var h = Tt.MulXV(i, e.localPoint, t.Initialize_s_planePoint), _ = 0; _ < e.pointCount; ++_) {
                var m = Tt.MulXV(s, e.points[_].localPoint, t.Initialize_s_clipPoint)
                var c = n - It.DotVV(It.SubVV(m, h, It.s_t0), this.normal)
                var f = It.AddVMulSV(m, c, this.normal, t.Initialize_s_cA)
                var v = It.SubVMulSV(m, r, this.normal, t.Initialize_s_cB)
                It.MidVV(f, v, this.points[_])
                this.separations[_] = It.DotVV(It.SubVV(v, f, It.s_t0), this.normal)
              }
              break
            case Be.e_faceB:
              jt.MulRV(s.q, e.localNormal, this.normal)
              for (var y = Tt.MulXV(s, e.localPoint, t.Initialize_s_planePoint), p = 0; p < e.pointCount; ++p) {
                var x = Tt.MulXV(i, e.points[p].localPoint, t.Initialize_s_clipPoint)
                var B = r - It.DotVV(It.SubVV(x, y, It.s_t0), this.normal)
                var S = It.AddVMulSV(x, B, this.normal, t.Initialize_s_cB)
                var A = It.SubVMulSV(x, n, this.normal, t.Initialize_s_cA)
                It.MidVV(A, S, this.points[p])
                this.separations[p] = It.DotVV(It.SubVV(A, S, It.s_t0), this.normal)
              }
              this.normal.SelfNeg()
          }
        }
      }
    }
  ])
  return t
}()
function we(t, e, i, n) {
  var s
  for (s = 0; s < i.pointCount; ++s) {
    var /* [auto-meaningful-name] */i$pointsS$id$key = i.points[s].id.key
    t[s] = be.b2_removeState
    for (var o = 0, /* [auto-meaningful-name] */n$pointCount = n.pointCount; o < n$pointCount; ++o) {
      if (n.points[o].id.key === i$pointsS$id$key) {
        t[s] = be.b2_persistState
        break
      }
    }
  }
  for (; s < x; ++s) {
    t[s] = be.b2_nullState
  }
  for (s = 0; s < n.pointCount; ++s) {
    var /* [auto-meaningful-name] */n$pointsS$id$key = n.points[s].id.key
    e[s] = be.b2_addState
    for (var l = 0, /* [auto-meaningful-name] */i$pointCount = i.pointCount; l < i$pointCount; ++l) {
      if (i.points[l].id.key === n$pointsS$id$key) {
        e[s] = be.b2_persistState
        break
      }
    }
  }
  for (; s < x; ++s) {
    e[s] = be.b2_nullState
  }
}
Ve.Initialize_s_pointA = new It()
Ve.Initialize_s_pointB = new It()
Ve.Initialize_s_cA = new It()
Ve.Initialize_s_cB = new It()
Ve.Initialize_s_planePoint = new It()
Ve.Initialize_s_clipPoint = new It();
(function (t) {
  t[t.b2_nullState = 0] = "b2_nullState"
  t[t.b2_addState = 1] = "b2_addState"
  t[t.b2_persistState = 2] = "b2_persistState"
  t[t.b2_removeState = 3] = "b2_removeState"
})(be || (be = {}))
var ke = function () {
  function t() {
    $$_27.a(this, t)
    this.v = new It()
    this.id = new Ae()
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.v.Copy(t.v)
        this.id.Copy(t.id)
        return this
      }
    }
  ], [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var Me = function () {
  function t() {
    $$_27.a(this, t)
    this.p1 = new It()
    this.p2 = new It()
    this.maxFraction = 1
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.p1.Copy(t.p1)
        this.p2.Copy(t.p2)
        this.maxFraction = t.maxFraction
        return this
      }
    }
  ])
  return t
}()
var Pe = function () {
  function t() {
    $$_27.a(this, t)
    this.normal = new It()
    this.fraction = 0
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.normal.Copy(t.normal)
        this.fraction = t.fraction
        return this
      }
    }
  ])
  return t
}()
var Ie = function () {
  function t() {
    $$_27.a(this, t)
    this.lowerBound = new It()
    this.upperBound = new It()
    this.m_cache_center = new It()
    this.m_cache_extent = new It()
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.lowerBound.Copy(t.lowerBound)
        this.upperBound.Copy(t.upperBound)
        return this
      }
    }, {
      key: "IsValid",
      value: function () {
        return !!this.lowerBound.IsValid() && !!this.upperBound.IsValid() && !(this.upperBound.x < this.lowerBound.x) && !(this.upperBound.y < this.lowerBound.y)
      }
    }, {
      key: "GetCenter",
      value: function () {
        return It.MidVV(this.lowerBound, this.upperBound, this.m_cache_center)
      }
    }, {
      key: "GetExtents",
      value: function () {
        return It.ExtVV(this.lowerBound, this.upperBound, this.m_cache_extent)
      }
    }, {
      key: "GetPerimeter",
      value: function () {
        return 2 * (this.upperBound.x - this.lowerBound.x + (this.upperBound.y - this.lowerBound.y))
      }
    }, {
      key: "Combine1",
      value: function (t) {
        this.lowerBound.x = _t(this.lowerBound.x, t.lowerBound.x)
        this.lowerBound.y = _t(this.lowerBound.y, t.lowerBound.y)
        this.upperBound.x = mt(this.upperBound.x, t.upperBound.x)
        this.upperBound.y = mt(this.upperBound.y, t.upperBound.y)
        return this
      }
    }, {
      key: "Combine2",
      value: function (t, e) {
        this.lowerBound.x = _t(t.lowerBound.x, e.lowerBound.x)
        this.lowerBound.y = _t(t.lowerBound.y, e.lowerBound.y)
        this.upperBound.x = mt(t.upperBound.x, e.upperBound.x)
        this.upperBound.y = mt(t.upperBound.y, e.upperBound.y)
        return this
      }
    }, {
      key: "Contains",
      value: function (t) {
        var e = true
        return e = (e = (e = (e = e && this.lowerBound.x <= t.lowerBound.x) && this.lowerBound.y <= t.lowerBound.y) && t.upperBound.x <= this.upperBound.x) && t.upperBound.y <= this.upperBound.y
      }
    }, {
      key: "RayCast",
      value: function (t, e) {
        var i = -c
        var n = c
        var /* [auto-meaningful-name] */e$p1$x = e.p1.x
        var /* [auto-meaningful-name] */e$p1$y = e.p1.y
        var o = e.p2.x - e.p1.x
        var a = e.p2.y - e.p1.y
        var u = Math$abs(o)
        var l = Math$abs(a)
        var /* [auto-meaningful-name] */t$normal = t.normal
        if (u < f) {
          if (e$p1$x < this.lowerBound.x || this.upperBound.x < e$p1$x) {
            return false
          }
        } else {
          var _ = 1 / o
          var m = (this.lowerBound.x - e$p1$x) * _
          var d = (this.upperBound.x - e$p1$x) * _
          var v = -1
          if (m > d) {
            var y = m
            m = d
            d = y
            v = 1
          }
          if (m > i) {
            t$normal.x = v
            t$normal.y = 0
            i = m
          }
          if (i > (n = _t(n, d))) {
            return false
          }
        }
        if (l < f) {
          if (e$p1$y < this.lowerBound.y || this.upperBound.y < e$p1$y) {
            return false
          }
        } else {
          var p = 1 / a
          var x = (this.lowerBound.y - e$p1$y) * p
          var B = (this.upperBound.y - e$p1$y) * p
          var S = -1
          if (x > B) {
            var A = x
            x = B
            B = A
            S = 1
          }
          if (x > i) {
            t$normal.x = 0
            t$normal.y = S
            i = x
          }
          if (i > (n = _t(n, B))) {
            return false
          }
        }
        return !(i < 0 || e.maxFraction < i) && (t.fraction = i, true)
      }
    }, {
      key: "TestContain",
      value: function (t) {
        return !(t.x < this.lowerBound.x || this.upperBound.x < t.x) && !(t.y < this.lowerBound.y || this.upperBound.y < t.y)
      }
    }, {
      key: "TestOverlap",
      value: function (t) {
        return !(this.upperBound.x < t.lowerBound.x) && !(this.upperBound.y < t.lowerBound.y) && !(t.upperBound.x < this.lowerBound.x) && !(t.upperBound.y < this.lowerBound.y)
      }
    }
  ], [
    {
      key: "Combine",
      value: function (t, e, i) {
        i.Combine2(t, e)
        return i
      }
    }
  ])
  return t
}()
function Ge(t, e) {
  return !(t.upperBound.x < e.lowerBound.x) && !(t.upperBound.y < e.lowerBound.y) && !(e.upperBound.x < t.lowerBound.x) && !(e.upperBound.y < t.lowerBound.y)
}
function De(t, e, i, n, s) {
  var r = 0
  var o = e[0]
  var a = e[1]
  var u = It.DotVV(i, o.v) - n
  var l = It.DotVV(i, a.v) - n
  if (u <= 0) {
    t[r++].Copy(o)
  }
  if (l <= 0) {
    t[r++].Copy(a)
  }
  if (u * l < 0) {
    var h = u / (u - l)
    var _ = t[r].v
    _.x = o.v.x + h * (a.v.x - o.v.x)
    _.y = o.v.y + h * (a.v.y - o.v.y)
    var /* [auto-meaningful-name] */tR$id = t[r].id
    tR$id.cf.indexA = s
    tR$id.cf.indexB = o.id.cf.indexB
    tR$id.cf.typeA = he.e_vertex
    tR$id.cf.typeB = he.e_face
    ++r
  }
  return r
}
var Fe = new Xt()
var Le = new Jt()
var Re = new Zt()
function je(t, e, i, n, s, r) {
  var o = Fe.Reset()
  o.proxyA.SetShape(t, e)
  o.proxyB.SetShape(i, n)
  o.transformA.Copy(s)
  o.transformB.Copy(r)
  o.useRadii = true
  var a = Le.Reset()
  a.count = 0
  var u = Re.Reset()
  le(u, a, o)
  return u.distance < 10 * f
}
function Te(t) {
  if (null === t) {
    throw new Error()
  }
  return t
}
var Oe = function () {
  function t() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
    $$_27.a(this, t)
    this.m_id = 0
    this.aabb = new Ie()
    this._userData = null
    this.parent = null
    this.child1 = null
    this.child2 = null
    this.height = 0
    this.moved = false
    this.m_id = e
  }
  $$_39.a(t, [
    {
      key: "userData",
      get: function () {
        if (null === this._userData) {
          throw new Error()
        }
        return this._userData
      },
      set: function (t) {
        if (null !== this._userData) {
          throw new Error()
        }
        this._userData = t
      }
    }, {
      key: "Reset",
      value: function () {
        this._userData = null
      }
    }, {
      key: "IsLeaf",
      value: function () {
        return null === this.child1
      }
    }
  ])
  return t
}()
var qe = function () {
  function t() {
    $$_27.a(this, t)
    this.m_root = null
    this.m_freeList = null
    this.m_insertionCount = 0
    this.m_stack = new ot(256)
  }
  $$_39.a(t, [
    {
      key: "Query",
      value: function (t, e) {
        var i = this.m_stack.Reset()
        for (i.Push(this.m_root); i.GetCount() > 0;) {
          var n = i.Pop()
          if (null !== n) {
            if (n.aabb.TestOverlap(t)) {
              if (n.IsLeaf()) {
                if (!e(n)) {
                  return
                }
              } else {
                i.Push(n.child1)
                i.Push(n.child2)
              }
            }
          }
        }
      }
    }, {
      key: "QueryPoint",
      value: function (t, e) {
        var i = this.m_stack.Reset()
        for (i.Push(this.m_root); i.GetCount() > 0;) {
          var n = i.Pop()
          if (null !== n) {
            if (n.aabb.TestContain(t)) {
              if (n.IsLeaf()) {
                if (!e(n)) {
                  return
                }
              } else {
                i.Push(n.child1)
                i.Push(n.child2)
              }
            }
          }
        }
      }
    }, {
      key: "RayCast",
      value: function (e, i) {
        var n = e.p1
        var s = e.p2
        var r = It.SubVV(s, n, t.s_r)
        r.Normalize()
        var o = It.CrossOneV(r, t.s_v)
        var a = It.AbsV(o, t.s_abs_v)
        var /* [auto-meaningful-name] */e$maxFraction = e.maxFraction
        var /* [auto-meaningful-name] */t$s_segmentAABB = t.s_segmentAABB
        var h = n.x + e$maxFraction * (s.x - n.x)
        var _ = n.y + e$maxFraction * (s.y - n.y)
        t$s_segmentAABB.lowerBound.x = _t(n.x, h)
        t$s_segmentAABB.lowerBound.y = _t(n.y, _)
        t$s_segmentAABB.upperBound.x = mt(n.x, h)
        t$s_segmentAABB.upperBound.y = mt(n.y, _)
        var m = this.m_stack.Reset()
        for (m.Push(this.m_root); m.GetCount() > 0;) {
          var c = m.Pop()
          if (null !== c && Ge(c.aabb, t$s_segmentAABB)) {
            var f = c.aabb.GetCenter()
            var d = c.aabb.GetExtents()
            if (!(Math$abs(It.DotVV(o, It.SubVV(n, f, It.s_t0))) - It.DotVV(a, d) > 0)) {
              if (c.IsLeaf()) {
                var /* [auto-meaningful-name] */t$s_subInput = t.s_subInput
                t$s_subInput.p1.Copy(e.p1)
                t$s_subInput.p2.Copy(e.p2)
                t$s_subInput.maxFraction = e$maxFraction
                var y = i(t$s_subInput, c)
                if (0 === y) {
                  return
                }
                if (y > 0) {
                  e$maxFraction = y
                  h = n.x + e$maxFraction * (s.x - n.x)
                  _ = n.y + e$maxFraction * (s.y - n.y)
                  t$s_segmentAABB.lowerBound.x = _t(n.x, h)
                  t$s_segmentAABB.lowerBound.y = _t(n.y, _)
                  t$s_segmentAABB.upperBound.x = mt(n.x, h)
                  t$s_segmentAABB.upperBound.y = mt(n.y, _)
                }
              } else {
                m.Push(c.child1)
                m.Push(c.child2)
              }
            }
          }
        }
      }
    }, {
      key: "AllocateNode",
      value: function () {
        if (null !== this.m_freeList) {
          var /* [auto-meaningful-name] */this$m_freeList = this.m_freeList
          this.m_freeList = this$m_freeList.parent
          this$m_freeList.parent = null
          this$m_freeList.child1 = null
          this$m_freeList.child2 = null
          this$m_freeList.height = 0
          this$m_freeList.moved = false
          return this$m_freeList
        }
        return new Oe(t.s_node_id++)
      }
    }, {
      key: "FreeNode",
      value: function (t) {
        t.parent = this.m_freeList
        t.child1 = null
        t.child2 = null
        t.height = -1
        t.Reset()
        this.m_freeList = t
      }
    }, {
      key: "CreateProxy",
      value: function (t, e) {
        var i = this.AllocateNode()
        var n = B
        var s = B
        i.aabb.lowerBound.x = t.lowerBound.x - n
        i.aabb.lowerBound.y = t.lowerBound.y - s
        i.aabb.upperBound.x = t.upperBound.x + n
        i.aabb.upperBound.y = t.upperBound.y + s
        i.userData = e
        i.height = 0
        i.moved = true
        this.InsertLeaf(i)
        return i
      }
    }, {
      key: "DestroyProxy",
      value: function (t) {
        this.RemoveLeaf(t)
        this.FreeNode(t)
      }
    }, {
      key: "MoveProxy",
      value: function (e, i, n) {
        var /* [auto-meaningful-name] */t$MoveProxy_s_fatAABB = t.MoveProxy_s_fatAABB
        var r = B
        var o = B
        t$MoveProxy_s_fatAABB.lowerBound.x = i.lowerBound.x - r
        t$MoveProxy_s_fatAABB.lowerBound.y = i.lowerBound.y - o
        t$MoveProxy_s_fatAABB.upperBound.x = i.upperBound.x + r
        t$MoveProxy_s_fatAABB.upperBound.y = i.upperBound.y + o
        var a = S * n.x
        var u = S * n.y
        if (a < 0) {
          t$MoveProxy_s_fatAABB.lowerBound.x += a
        } else {
          t$MoveProxy_s_fatAABB.upperBound.x += a
        }
        if (u < 0) {
          t$MoveProxy_s_fatAABB.lowerBound.y += u
        } else {
          t$MoveProxy_s_fatAABB.upperBound.y += u
        }
        var /* [auto-meaningful-name] */e$aabb = e.aabb
        if (e$aabb.Contains(i)) {
          var /* [auto-meaningful-name] */t$MoveProxy_s_hugeAABB = t.MoveProxy_s_hugeAABB
          t$MoveProxy_s_hugeAABB.lowerBound.x = t$MoveProxy_s_fatAABB.lowerBound.x - 4 * r
          t$MoveProxy_s_hugeAABB.lowerBound.y = t$MoveProxy_s_fatAABB.lowerBound.y - 4 * o
          t$MoveProxy_s_hugeAABB.upperBound.x = t$MoveProxy_s_fatAABB.upperBound.x + 4 * r
          t$MoveProxy_s_hugeAABB.upperBound.y = t$MoveProxy_s_fatAABB.upperBound.y + 4 * o
          if (t$MoveProxy_s_hugeAABB.Contains(e$aabb)) {
            return false
          }
        }
        this.RemoveLeaf(e)
        e.aabb.Copy(t$MoveProxy_s_fatAABB)
        this.InsertLeaf(e)
        e.moved = true
        return true
      }
    }, {
      key: "InsertLeaf",
      value: function (e) {
        ++this.m_insertionCount
        if (null === this.m_root) {
          this.m_root = e
          return void (this.m_root.parent = null)
        }
        for (var /* [auto-meaningful-name] */e$aabb = e.aabb, /* [auto-meaningful-name] */this$m_root = this.m_root; !this$m_root.IsLeaf();) {
          var s = Te(this$m_root.child1)
          var r = Te(this$m_root.child2)
          var o = this$m_root.aabb.GetPerimeter()
          var /* [auto-meaningful-name] */t$s_combinedAABB = t.s_combinedAABB
          t$s_combinedAABB.Combine2(this$m_root.aabb, e$aabb)
          var u = t$s_combinedAABB.GetPerimeter()
          var l = 2 * u
          var h = 2 * (u - o)
          var _ = undefined
          var /* [auto-meaningful-name] */t$s_aabb = t.s_aabb
          var c = undefined
          if (s.IsLeaf()) {
            t$s_aabb.Combine2(e$aabb, s.aabb)
            _ = t$s_aabb.GetPerimeter() + h
          } else {
            t$s_aabb.Combine2(e$aabb, s.aabb)
            c = s.aabb.GetPerimeter()
            _ = t$s_aabb.GetPerimeter() - c + h
          }
          var f = undefined
          if (r.IsLeaf()) {
            t$s_aabb.Combine2(e$aabb, r.aabb)
            f = t$s_aabb.GetPerimeter() + h
          } else {
            t$s_aabb.Combine2(e$aabb, r.aabb)
            c = r.aabb.GetPerimeter()
            f = t$s_aabb.GetPerimeter() - c + h
          }
          if (l < _ && l < f) {
            break
          }
          this$m_root = _ < f ? s : r
        }
        var /* [auto-meaningful-name] */this$m_root$parent = this$m_root.parent
        var v = this.AllocateNode()
        v.parent = this$m_root$parent
        v.aabb.Combine2(e$aabb, this$m_root.aabb)
        v.height = this$m_root.height + 1
        if (null !== this$m_root$parent) {
          if (this$m_root$parent.child1 === this$m_root) {
            this$m_root$parent.child1 = v
          } else {
            this$m_root$parent.child2 = v
          }
          v.child1 = this$m_root
          v.child2 = e
          this$m_root.parent = v
          e.parent = v
        } else {
          v.child1 = this$m_root
          v.child2 = e
          this$m_root.parent = v
          e.parent = v
          this.m_root = v
        }
        for (var /* [auto-meaningful-name] */e$parent = e.parent; null !== e$parent;) {
          var p = Te((e$parent = this.Balance(e$parent)).child1)
          var x = Te(e$parent.child2)
          e$parent.height = 1 + mt(p.height, x.height)
          e$parent.aabb.Combine2(p.aabb, x.aabb)
          e$parent = e$parent.parent
        }
      }
    }, {
      key: "RemoveLeaf",
      value: function (t) {
        if (t !== this.m_root) {
          var e = Te(t.parent)
          var i = e && e.parent
          var n = Te(e.child1 === t ? e.child2 : e.child1)
          if (null !== i) {
            if (i.child1 === e) {
              i.child1 = n
            } else {
              i.child2 = n
            }
            n.parent = i
            this.FreeNode(e)
            for (var s = i; null !== s;) {
              var r = Te((s = this.Balance(s)).child1)
              var o = Te(s.child2)
              s.aabb.Combine2(r.aabb, o.aabb)
              s.height = 1 + mt(r.height, o.height)
              s = s.parent
            }
          } else {
            this.m_root = n
            n.parent = null
            this.FreeNode(e)
          }
        } else {
          this.m_root = null
        }
      }
    }, {
      key: "Balance",
      value: function (t) {
        if (t.IsLeaf() || t.height < 2) {
          return t
        }
        var e = Te(t.child1)
        var i = Te(t.child2)
        var n = i.height - e.height
        if (n > 1) {
          var s = Te(i.child1)
          var r = Te(i.child2)
          i.child1 = t
          i.parent = t.parent
          t.parent = i
          if (null !== i.parent) {
            if (i.parent.child1 === t) {
              i.parent.child1 = i
            } else {
              i.parent.child2 = i
            }
          } else {
            this.m_root = i
          }
          if (s.height > r.height) {
            i.child2 = s
            t.child2 = r
            r.parent = t
            t.aabb.Combine2(e.aabb, r.aabb)
            i.aabb.Combine2(t.aabb, s.aabb)
            t.height = 1 + mt(e.height, r.height)
            i.height = 1 + mt(t.height, s.height)
          } else {
            i.child2 = r
            t.child2 = s
            s.parent = t
            t.aabb.Combine2(e.aabb, s.aabb)
            i.aabb.Combine2(t.aabb, r.aabb)
            t.height = 1 + mt(e.height, s.height)
            i.height = 1 + mt(t.height, r.height)
          }
          return i
        }
        if (n < -1) {
          var o = Te(e.child1)
          var a = Te(e.child2)
          e.child1 = t
          e.parent = t.parent
          t.parent = e
          if (null !== e.parent) {
            if (e.parent.child1 === t) {
              e.parent.child1 = e
            } else {
              e.parent.child2 = e
            }
          } else {
            this.m_root = e
          }
          if (o.height > a.height) {
            e.child2 = o
            t.child1 = a
            a.parent = t
            t.aabb.Combine2(i.aabb, a.aabb)
            e.aabb.Combine2(t.aabb, o.aabb)
            t.height = 1 + mt(i.height, a.height)
            e.height = 1 + mt(t.height, o.height)
          } else {
            e.child2 = a
            t.child1 = o
            o.parent = t
            t.aabb.Combine2(i.aabb, o.aabb)
            e.aabb.Combine2(t.aabb, a.aabb)
            t.height = 1 + mt(i.height, o.height)
            e.height = 1 + mt(t.height, a.height)
          }
          return e
        }
        return t
      }
    }, {
      key: "GetHeight",
      value: function () {
        return null === this.m_root ? 0 : this.m_root.height
      }
    }, {
      key: "GetAreaRatio",
      value: function () {
        if (null === this.m_root) {
          return 0
        }
        var e = this.m_root.aabb.GetPerimeter()
        return t.GetAreaNode(this.m_root) / e
      }
    }, {
      key: "ComputeHeight",
      value: function () {
        return t.ComputeHeightNode(this.m_root)
      }
    }, {
      key: "ValidateStructure",
      value: function (t) {
        if (null !== t && (this.m_root, !t.IsLeaf())) {
          var e = Te(t.child1)
          var i = Te(t.child2)
          this.ValidateStructure(e)
          this.ValidateStructure(i)
        }
      }
    }, {
      key: "ValidateMetrics",
      value: function (e) {
        if (null !== e && !e.IsLeaf()) {
          var i = Te(e.child1)
          var n = Te(e.child2)
          t.s_aabb.Combine2(i.aabb, n.aabb)
          this.ValidateMetrics(i)
          this.ValidateMetrics(n)
        }
      }
    }, {
      key: "Validate",
      value: function () {}
    }, {
      key: "GetMaxBalance",
      value: function () {
        return t.GetMaxBalanceNode(this.m_root, 0)
      }
    }, {
      key: "RebuildBottomUp",
      value: function () {
        this.Validate()
      }
    }, {
      key: "ShiftOrigin",
      value: function (e) {
        t.ShiftOriginNode(this.m_root, e)
      }
    }
  ], [
    {
      key: "GetAreaNode",
      value: function (e) {
        if (null === e) {
          return 0
        }
        if (e.IsLeaf()) {
          return 0
        }
        var i = e.aabb.GetPerimeter()
        i += t.GetAreaNode(e.child1)
        return i += t.GetAreaNode(e.child2)
      }
    }, {
      key: "ComputeHeightNode",
      value: function (e) {
        return null === e || e.IsLeaf() ? 0 : 1 + mt(t.ComputeHeightNode(e.child1), t.ComputeHeightNode(e.child2))
      }
    }, {
      key: "GetMaxBalanceNode",
      value: function (t, e) {
        if (null === t) {
          return e
        }
        if (t.height <= 1) {
          return e
        }
        var i = Te(t.child1)
        var n = Te(t.child2)
        return mt(e, Math$abs(n.height - i.height))
      }
    }, {
      key: "ShiftOriginNode",
      value: function (e, i) {
        if (null !== e && !(e.height <= 1)) {
          var /* [auto-meaningful-name] */e$child1 = e.child1
          var /* [auto-meaningful-name] */e$child2 = e.child2
          t.ShiftOriginNode(e$child1, i)
          t.ShiftOriginNode(e$child2, i)
          e.aabb.lowerBound.SelfSub(i)
          e.aabb.upperBound.SelfSub(i)
        }
      }
    }
  ])
  return t
}()
qe.s_r = new It()
qe.s_v = new It()
qe.s_abs_v = new It()
qe.s_segmentAABB = new Ie()
qe.s_subInput = new Me()
qe.s_combinedAABB = new Ie()
qe.s_aabb = new Ie()
qe.s_node_id = 0
qe.MoveProxy_s_fatAABB = new Ie()
qe.MoveProxy_s_hugeAABB = new Ie()
var Ee = function t(e, i) {
  $$_27.a(this, t)
  this.proxyA = e
  this.proxyB = i
}
var Ne = function () {
  function t() {
    $$_27.a(this, t)
    this.m_tree = new qe()
    this.m_proxyCount = 0
    this.m_moveBuffer = new Set()
    this.m_pairCount = 0
    this.m_pairBuffer = []
  }
  $$_39.a(t, [
    {
      key: "CreateProxy",
      value: function (t, e) {
        var i = this.m_tree.CreateProxy(t, e)
        ++this.m_proxyCount
        this.BufferMove(i)
        return i
      }
    }, {
      key: "DestroyProxy",
      value: function (t) {
        this.UnBufferMove(t)
        --this.m_proxyCount
        this.m_tree.DestroyProxy(t)
      }
    }, {
      key: "MoveProxy",
      value: function (t, e, i) {
        if (this.m_tree.MoveProxy(t, e, i)) {
          this.BufferMove(t)
        }
      }
    }, {
      key: "TouchProxy",
      value: function (t) {
        this.BufferMove(t)
      }
    }, {
      key: "GetProxyCount",
      value: function () {
        return this.m_proxyCount
      }
    }, {
      key: "UpdatePairs",
      value: function (t) {
        var e = this
        this.m_pairCount = 0
        this.m_moveBuffer.forEach(function (t) {
          var /* [auto-meaningful-name] */t$aabb = t.aabb
          e.m_tree.Query(t$aabb, function (i) {
            if (i.m_id === t.m_id) {
              return true
            }
            var n
            var s
            if (i.moved && i.m_id > t.m_id) {
              return true
            }
            if (i.m_id < t.m_id) {
              n = i
              s = t
            } else {
              n = t
              s = i
            }
            if (e.m_pairCount === e.m_pairBuffer.length) {
              e.m_pairBuffer[e.m_pairCount] = new Ee(n, s)
            } else {
              var r = e.m_pairBuffer[e.m_pairCount]
              r.proxyA = n
              r.proxyB = s
            }
            ++e.m_pairCount
            return true
          })
        })
        for (var i = 0; i < this.m_pairCount; ++i) {
          var n = this.m_pairBuffer[i]
          t(n.proxyA.userData, n.proxyB.userData)
        }
        this.m_moveBuffer.forEach(function (t) {
          return t.moved = false
        })
        this.m_moveBuffer.clear()
      }
    }, {
      key: "Query",
      value: function (t, e) {
        this.m_tree.Query(t, e)
      }
    }, {
      key: "QueryPoint",
      value: function (t, e) {
        this.m_tree.QueryPoint(t, e)
      }
    }, {
      key: "RayCast",
      value: function (t, e) {
        this.m_tree.RayCast(t, e)
      }
    }, {
      key: "GetTreeHeight",
      value: function () {
        return this.m_tree.GetHeight()
      }
    }, {
      key: "GetTreeBalance",
      value: function () {
        return this.m_tree.GetMaxBalance()
      }
    }, {
      key: "GetTreeQuality",
      value: function () {
        return this.m_tree.GetAreaRatio()
      }
    }, {
      key: "ShiftOrigin",
      value: function (t) {
        this.m_tree.ShiftOrigin(t)
      }
    }, {
      key: "BufferMove",
      value: function (t) {
        this.m_moveBuffer.add(t)
      }
    }, {
      key: "UnBufferMove",
      value: function (t) {
        this.m_moveBuffer.delete(t)
      }
    }
  ])
  return t
}()
export { _ }
export { m }
export { c }
export { f }
export { d }
export { v }
export { y }
export { p }
export { x }
export { B }
export { S }
export { A }
export { C }
export { b }
export { g }
export { V }
export { w }
export { k }
export { M }
export { P }
export { I }
export { G }
export { D }
export { F }
export { L }
export { R }
export { j }
export { T }
export { O }
export { q }
export { z }
export { E }
export { N }
export { J }
export { X }
export { Z }
export { U }
export { W }
export { Q }
export { Master as Y }
export { _9ebbbcd960ad424e03e5de6e66a40764c16f51bc as K }
export { H }
export { $ }
export { tt }
export { et }
export { it }
export { nt }
export { st }
export { rt }
export { ot }
export { at }
export { ut }
export { lt }
export { Math$abs as ht }
export { _t }
export { mt }
export { ct }
export { ft }
export { dt }
export { vt }
export { yt }
export { Math$sqrt as pt }
export { Math$pow as xt }
export { Bt }
export { St }
export { Math$cos as At }
export { Math$sin as Ct }
export { Math$acos as bt }
export { Math$asin as gt }
export { Math$atan2 as Vt }
export { wt }
export { kt }
export { Mt }
export { Pt }
export { It }
export { Gt }
export { Dt }
export { Ft }
export { Lt }
export { Rt }
export { jt }
export { Tt }
export { Ot }
export { qt }
export { zt }
export { Et }
export { Nt }
export { Jt }
export { Xt }
export { Zt }
export { Ut }
export { Wt }
export { Qt }
export { Yt }
export { Kt }
export { Ht }
export { $t }
export { te }
export { le }
export { he }
export { xe }
export { Be }
export { Se }
export { Ae }
export { Ce }
export { be }
export { ge }
export { Ve }
export { we }
export { ke }
export { Me }
export { Pe }
export { Ie }
export { Ge }
export { De }
export { je }
export { Oe }
export { qe }
export { Ee }
export { Ne }
