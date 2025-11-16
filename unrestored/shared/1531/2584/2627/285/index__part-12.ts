/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-12
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_1026_1011 from "../../1026/1011"
import * as /* [auto-meaningful-name] */$_266 from "./266"
import * as /* [auto-meaningful-name] */$_912 from "./912"
import * as /* [auto-meaningful-name] */$_740 from "./740"
import * as /* [auto-meaningful-name] */$_210 from "./210"
var An = function () {
  function e(t, n) {
    var /* [auto-meaningful-name] */n$format
    if (undefined === t) {
      t = ""
    }
    if (undefined === n) {
      n = {}
    }
    if (t instanceof e) {
      return t
    }
    if ("number" === typeof t) {
      t = $_266.d(t)
    }
    this.originalInput = t
    var i = $_740.a(t)
    this.originalInput = t
    this.r = i.r
    this.g = i.g
    this.b = i.b
    this.a = i.a
    this.roundA = Math.round(100 * this.a) / 100
    this.format = null !== (n$format = n.format) && undefined !== n$format ? n$format : i.format
    this.gradientType = n.gradientType
    if (this.r < 1) {
      this.r = Math.round(this.r)
    }
    if (this.g < 1) {
      this.g = Math.round(this.g)
    }
    if (this.b < 1) {
      this.b = Math.round(this.b)
    }
    this.isValid = i.ok
  }
  e.prototype.isDark = function () {
    return this.getBrightness() < 128
  }
  e.prototype.isLight = function () {
    return !this.isDark()
  }
  e.prototype.getBrightness = function () {
    var e = this.toRgb()
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
  }
  e.prototype.getLuminance = function () {
    var e = this.toRgb()
    var t = e.r / 255
    var n = e.g / 255
    var r = e.b / 255
    return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
  }
  e.prototype.getAlpha = function () {
    return this.a
  }
  e.prototype.setAlpha = function (e) {
    this.a = $_210.b(e)
    this.roundA = Math.round(100 * this.a) / 100
    return this
  }
  e.prototype.toHsv = function () {
    var e = $_266.h(this.r, this.g, this.b)
    return {
      h: 360 * e.h,
      s: e.s,
      v: e.v,
      a: this.a
    }
  }
  e.prototype.toHsvString = function () {
    var e = $_266.h(this.r, this.g, this.b)
    var t = Math.round(360 * e.h)
    var n = Math.round(100 * e.s)
    var r = Math.round(100 * e.v)
    return 1 === this.a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")"
  }
  e.prototype.toHsl = function () {
    var e = $_266.g(this.r, this.g, this.b)
    return {
      h: 360 * e.h,
      s: e.s,
      l: e.l,
      a: this.a
    }
  }
  e.prototype.toHslString = function () {
    var e = $_266.g(this.r, this.g, this.b)
    var t = Math.round(360 * e.h)
    var n = Math.round(100 * e.s)
    var r = Math.round(100 * e.l)
    return 1 === this.a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")"
  }
  e.prototype.toHex = function (e) {
    if (undefined === e) {
      e = false
    }
    return $_266.f(this.r, this.g, this.b, e)
  }
  e.prototype.toHexString = function (e) {
    if (undefined === e) {
      e = false
    }
    return "#" + this.toHex(e)
  }
  e.prototype.toHex8 = function (e) {
    if (undefined === e) {
      e = false
    }
    return $_266.j(this.r, this.g, this.b, this.a, e)
  }
  e.prototype.toHex8String = function (e) {
    if (undefined === e) {
      e = false
    }
    return "#" + this.toHex8(e)
  }
  e.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    }
  }
  e.prototype.toRgbString = function () {
    var e = Math.round(this.r)
    var t = Math.round(this.g)
    var n = Math.round(this.b)
    return 1 === this.a ? "rgb(" + e + ", " + t + ", " + n + ")" : "rgba(" + e + ", " + t + ", " + n + ", " + this.roundA + ")"
  }
  e.prototype.toPercentageRgb = function () {
    var e = function (e) {
      return Math.round(100 * $_210.a(e, 255)) + "%"
    }
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    }
  }
  e.prototype.toPercentageRgbString = function () {
    var e = function (e) {
      return Math.round(100 * $_210.a(e, 255))
    }
    return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")"
  }
  e.prototype.toName = function () {
    if (0 === this.a) {
      return "transparent"
    }
    if (this.a < 1) {
      return false
    }
    for (var e = "#" + $_266.f(this.r, this.g, this.b, false), t = 0, n = Object.entries($_912.a); t < n.length; t++) {
      var r = n[t]
      var i = r[0]
      if (e === r[1]) {
        return i
      }
    }
    return false
  }
  e.prototype.toString = function (e) {
    var t = Boolean(e)
    e = null !== e && undefined !== e ? e : this.format
    var n = false
    var r = this.a < 1 && this.a >= 0
    return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(true)), "hex4" === e && (n = this.toHex8String(true)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString()
  }
  e.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
  }
  e.prototype.clone = function () {
    return new e(this.toString())
  }
  e.prototype.lighten = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.l += t / 100
    n.l = $_210.c(n.l)
    return new e(n)
  }
  e.prototype.brighten = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toRgb()
    n.r = Math.max(0, Math.min(255, n.r - Math.round(-t / 100 * 255)))
    n.g = Math.max(0, Math.min(255, n.g - Math.round(-t / 100 * 255)))
    n.b = Math.max(0, Math.min(255, n.b - Math.round(-t / 100 * 255)))
    return new e(n)
  }
  e.prototype.darken = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.l -= t / 100
    n.l = $_210.c(n.l)
    return new e(n)
  }
  e.prototype.tint = function (e) {
    if (undefined === e) {
      e = 10
    }
    return this.mix("white", e)
  }
  e.prototype.shade = function (e) {
    if (undefined === e) {
      e = 10
    }
    return this.mix("black", e)
  }
  e.prototype.desaturate = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.s -= t / 100
    n.s = $_210.c(n.s)
    return new e(n)
  }
  e.prototype.saturate = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.s += t / 100
    n.s = $_210.c(n.s)
    return new e(n)
  }
  e.prototype.greyscale = function () {
    return this.desaturate(100)
  }
  e.prototype.spin = function (t) {
    var n = this.toHsl()
    var r = (n.h + t) % 360
    n.h = r < 0 ? 360 + r : r
    return new e(n)
  }
  e.prototype.mix = function (t, n) {
    if (undefined === n) {
      n = 50
    }
    var r = this.toRgb()
    var i = new e(t).toRgb()
    var o = n / 100
    return new e({
      r: (i.r - r.r) * o + r.r,
      g: (i.g - r.g) * o + r.g,
      b: (i.b - r.b) * o + r.b,
      a: (i.a - r.a) * o + r.a
    })
  }
  e.prototype.analogous = function (t, n) {
    if (undefined === t) {
      t = 6
    }
    if (undefined === n) {
      n = 30
    }
    var r = this.toHsl()
    var i = 360 / n
    var o = [this]
    for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) {
      r.h = (r.h + i) % 360
      o.push(new e(r))
    }
    return o
  }
  e.prototype.complement = function () {
    var t = this.toHsl()
    t.h = (t.h + 180) % 360
    return new e(t)
  }
  e.prototype.monochromatic = function (t) {
    if (undefined === t) {
      t = 6
    }
    for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--;) {
      a.push(new e({
        h: r,
        s: i,
        v: o
      }))
      o = (o + s) % 1
    }
    return a
  }
  e.prototype.splitcomplement = function () {
    var t = this.toHsl()
    var n = t.h
    return [this, new e({
      h: (n + 72) % 360,
      s: t.s,
      l: t.l
    }), new e({
      h: (n + 216) % 360,
      s: t.s,
      l: t.l
    })]
  }
  e.prototype.onBackground = function (t) {
    var n = this.toRgb()
    var r = new e(t).toRgb()
    return new e({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    })
  }
  e.prototype.triad = function () {
    return this.polyad(3)
  }
  e.prototype.tetrad = function () {
    return this.polyad(4)
  }
  e.prototype.polyad = function (t) {
    for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1; a < t; a++) {
      i.push(new e({
        h: (r + a * o) % 360,
        s: n.s,
        l: n.l
      }))
    }
    return i
  }
  e.prototype.equals = function (t) {
    return this.toRgbString() === new e(t).toRgbString()
  }
  return e
}()
export { An as "285__part-12__An" }
