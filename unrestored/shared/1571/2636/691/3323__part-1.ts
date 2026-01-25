/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3323__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_39 from "../39"
var o = function () {
  function t() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : .5
    var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : .5
    var s = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : .5
    var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1
    $$_27.a(this, t)
    this.r = e
    this.g = i
    this.b = s
    this.a = r
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
        this.r = t.r
        this.g = t.g
        this.b = t.b
        this.a = t.a
        return this
      }
    }, {
      key: "IsEqual",
      value: function (t) {
        return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a
      }
    }, {
      key: "IsZero",
      value: function () {
        return 0 === this.r && 0 === this.g && 0 === this.b && 0 === this.a
      }
    }, {
      key: "Set",
      value: function (t, e, i) {
        var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : this.a
        this.SetRGBA(t, e, i, n)
      }
    }, {
      key: "SetByteRGB",
      value: function (t, e, i) {
        this.r = t / 255
        this.g = e / 255
        this.b = i / 255
        return this
      }
    }, {
      key: "SetByteRGBA",
      value: function (t, e, i, n) {
        this.r = t / 255
        this.g = e / 255
        this.b = i / 255
        this.a = n / 255
        return this
      }
    }, {
      key: "SetRGB",
      value: function (t, e, i) {
        this.r = t
        this.g = e
        this.b = i
        return this
      }
    }, {
      key: "SetRGBA",
      value: function (t, e, i, n) {
        this.r = t
        this.g = e
        this.b = i
        this.a = n
        return this
      }
    }, {
      key: "SelfAdd",
      value: function (t) {
        this.r += t.r
        this.g += t.g
        this.b += t.b
        this.a += t.a
        return this
      }
    }, {
      key: "Add",
      value: function (t, e) {
        e.r = this.r + t.r
        e.g = this.g + t.g
        e.b = this.b + t.b
        e.a = this.a + t.a
        return e
      }
    }, {
      key: "SelfSub",
      value: function (t) {
        this.r -= t.r
        this.g -= t.g
        this.b -= t.b
        this.a -= t.a
        return this
      }
    }, {
      key: "Sub",
      value: function (t, e) {
        e.r = this.r - t.r
        e.g = this.g - t.g
        e.b = this.b - t.b
        e.a = this.a - t.a
        return e
      }
    }, {
      key: "SelfMul",
      value: function (t) {
        this.r *= t
        this.g *= t
        this.b *= t
        this.a *= t
        return this
      }
    }, {
      key: "Mul",
      value: function (t, e) {
        e.r = this.r * t
        e.g = this.g * t
        e.b = this.b * t
        e.a = this.a * t
        return e
      }
    }, {
      key: "Mix",
      value: function (e, i) {
        t.MixColors(this, e, i)
      }
    }, {
      key: "MakeStyleString",
      value: function () {
        var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.a
        return t.MakeStyleString(this.r, this.g, this.b, e)
      }
    }
  ], [
    {
      key: "MixColors",
      value: function (t, e, i) {
        var n = i * (e.r - t.r)
        var s = i * (e.g - t.g)
        var r = i * (e.b - t.b)
        var o = i * (e.a - t.a)
        t.r += n
        t.g += s
        t.b += r
        t.a += o
        e.r -= n
        e.g -= s
        e.b -= r
        e.a -= o
      }
    }, {
      key: "MakeStyleString",
      value: function (t, e, i) {
        var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1
        t *= 255
        e *= 255
        i *= 255
        return n < 1 ? "rgba(".concat(t, ",").concat(e, ",").concat(i, ",").concat(n, ")") : "rgb(".concat(t, ",").concat(e, ",").concat(i, ")")
      }
    }
  ])
  return t
}()
o.ZERO = new o(0, 0, 0, 0)
o.RED = new o(1, 0, 0)
o.GREEN = new o(0, 1, 0)
o.BLUE = new o(0, 0, 1)
var a
var u = function () {
  function t() {
    $$_27.a(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      i[s] = arguments[s]
    }
    if (i[0] instanceof Float32Array) {
      if (4 !== i[0].length) {
        throw new Error()
      }
      this.data = i[0]
    } else {
      var r = "number" === typeof i[0] ? i[0] : .5
      var o = "number" === typeof i[1] ? i[1] : .5
      var a = "number" === typeof i[2] ? i[2] : .5
      var u = "number" === typeof i[3] ? i[3] : 1
      this.data = new Float32Array([r, o, a, u])
    }
  }
  $$_39.a(t, [
    {
      key: "r",
      get: function () {
        return this.data[0]
      },
      set: function (t) {
        this.data[0] = t
      }
    }, {
      key: "g",
      get: function () {
        return this.data[1]
      },
      set: function (t) {
        this.data[1] = t
      }
    }, {
      key: "b",
      get: function () {
        return this.data[2]
      },
      set: function (t) {
        this.data[2] = t
      }
    }, {
      key: "a",
      get: function () {
        return this.data[3]
      },
      set: function (t) {
        this.data[3] = t
      }
    }, {
      key: "Clone",
      value: function () {
        return new t(new Float32Array(this.data))
      }
    }, {
      key: "Copy",
      value: function (e) {
        if (e instanceof t) {
          this.data.set(e.data)
        } else {
          this.r = e.r
          this.g = e.g
          this.b = e.b
          this.a = e.a
        }
        return this
      }
    }, {
      key: "IsEqual",
      value: function (t) {
        return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a
      }
    }, {
      key: "IsZero",
      value: function () {
        return 0 === this.r && 0 === this.g && 0 === this.b && 0 === this.a
      }
    }, {
      key: "Set",
      value: function (t, e, i) {
        var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : this.a
        this.SetRGBA(t, e, i, n)
      }
    }, {
      key: "SetByteRGB",
      value: function (t, e, i) {
        this.r = t / 255
        this.g = e / 255
        this.b = i / 255
        return this
      }
    }, {
      key: "SetByteRGBA",
      value: function (t, e, i, n) {
        this.r = t / 255
        this.g = e / 255
        this.b = i / 255
        this.a = n / 255
        return this
      }
    }, {
      key: "SetRGB",
      value: function (t, e, i) {
        this.r = t
        this.g = e
        this.b = i
        return this
      }
    }, {
      key: "SetRGBA",
      value: function (t, e, i, n) {
        this.r = t
        this.g = e
        this.b = i
        this.a = n
        return this
      }
    }, {
      key: "SelfAdd",
      value: function (t) {
        this.r += t.r
        this.g += t.g
        this.b += t.b
        this.a += t.a
        return this
      }
    }, {
      key: "Add",
      value: function (t, e) {
        e.r = this.r + t.r
        e.g = this.g + t.g
        e.b = this.b + t.b
        e.a = this.a + t.a
        return e
      }
    }, {
      key: "SelfSub",
      value: function (t) {
        this.r -= t.r
        this.g -= t.g
        this.b -= t.b
        this.a -= t.a
        return this
      }
    }, {
      key: "Sub",
      value: function (t, e) {
        e.r = this.r - t.r
        e.g = this.g - t.g
        e.b = this.b - t.b
        e.a = this.a - t.a
        return e
      }
    }, {
      key: "SelfMul",
      value: function (t) {
        this.r *= t
        this.g *= t
        this.b *= t
        this.a *= t
        return this
      }
    }, {
      key: "Mul",
      value: function (t, e) {
        e.r = this.r * t
        e.g = this.g * t
        e.b = this.b * t
        e.a = this.a * t
        return e
      }
    }, {
      key: "Mix",
      value: function (t, e) {
        o.MixColors(this, t, e)
      }
    }, {
      key: "MakeStyleString",
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.a
        return o.MakeStyleString(this.r, this.g, this.b, t)
      }
    }
  ])
  return t
}()
!function (t) {
  t[t.e_none = 0] = "e_none"
  t[t.e_shapeBit = 1] = "e_shapeBit"
  t[t.e_jointBit = 2] = "e_jointBit"
  t[t.e_aabbBit = 4] = "e_aabbBit"
  t[t.e_pairBit = 8] = "e_pairBit"
  t[t.e_centerOfMassBit = 16] = "e_centerOfMassBit"
  t[t.e_particleBit = 32] = "e_particleBit"
  t[t.e_particleTriadBit = 128] = "e_particleTriadBit"
  t[t.e_controllerBit = 64] = "e_controllerBit"
  t[t.e_all = 63] = "e_all"
}(a || (a = {}))
var l = function () {
  function t() {
    $$_27.a(this, t)
    this.m_drawFlags = 0
  }
  $$_39.a(t, [
    {
      key: "SetFlags",
      value: function (t) {
        this.m_drawFlags = t
      }
    }, {
      key: "GetFlags",
      value: function () {
        return this.m_drawFlags
      }
    }, {
      key: "AppendFlags",
      value: function (t) {
        this.m_drawFlags |= t
      }
    }, {
      key: "ClearFlags",
      value: function (t) {
        this.m_drawFlags &= ~t
      }
    }
  ])
  return t
}()
export { o }
export { a }
export { u }
export { l }
export default a
