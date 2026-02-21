/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15
 */

"use strict"

export { i as eb }
export { a as M }
export { s as z }
export { c as mb }
export { l as r }
export { u as j }
export { B3B3B3 as a }
export { _ as i }
export { v as hb }
export { b as Z }
export { y as ib }
export { E as v }
export { O as V }
export { w as pb }
export { C as l }
export { T as nb }
export { S as kb }
export { A as C }
export { b as s } from "../../../unrestored/shared/1571/2636/454"
export { c as u } from "../../../unrestored/shared/1571/2636/454"
export { g as L } from "../../../unrestored/shared/1571/2636/454"
export { a as c } from "../../../unrestored/shared/1571/2636/454"
export { m as qb } from "../../../unrestored/shared/1571/2636/454"
export { f as I } from "../../../unrestored/shared/1571/2636/454"
export { n as rb } from "../../../unrestored/shared/1571/2636/454"
export { e as y } from "../../../unrestored/shared/1571/2636/454"
export { d as w } from "../../../unrestored/shared/1571/2636/454"
export { j as fb } from "../../../unrestored/shared/1571/2636/454"
export { k as gb } from "../../../unrestored/shared/1571/2636/454"
export { j as W }
export { N as Q }
export { R as h }
export { a as b } from "./url"
export { t as R } from "./url"
export { v as T } from "./url"
export { u as S } from "./url"
export { s as P } from "./url"
export { w as U } from "./url"
export { g as m } from "./url"
export { i as o } from "./url"
export { c as e } from "./url"
export { d as f } from "./url"
export { e as g } from "./url"
export { b as d } from "./url"
export { h as n } from "./url"
export { A as ob } from "./url"
export { q as N } from "./url"
export { f as k } from "./url"
export { z as jb } from "./url"
export { j as x } from "./url"
export { n as E } from "./url"
export { p as J } from "./url"
export { o as F } from "./url"
export { l as B } from "./url"
export { k as A } from "./url"
export { x as X } from "./url"
export { y as Y } from "./url"
export { r as O } from "./url"
export { m as D } from "./url"
export { x as G }
export { D as K }
export { B as db }
export { F as bb }
export { W as p }
export { U as q }
export { H as lb }
export { V as cb }
export { z as ab }
export { Y as H }
export { K as t }
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_47_index from "../../../unrestored/shared/1571/2636/47/index"
function i(e, t, n) {
  return (e / t * 100).toFixed(n)
}
function a(e, t, n) {
  return Math.min(Math.max(e, t), n)
}
function s(e, t) {
  var n = t.indexOf(e)
  return n > -1 ? t[n] : t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t
  })
}
function c(e) {
  if ("string" !== typeof e || e.startsWith("0x") || "" === e.trim() || "Infinity" === e) {
    return e
  }
  var t = Number(e)
  return isNaN(t) ? e : t
}
function l(e, t) {
  var n
  var r = new Set(e)
  var i = new Set(t)
  var a = []
  var s = $$_$$_$$_unrestored_shared_1571_2636_47_index.a(r)
  try {
    for (s.s(); !(n = s.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      if (!i.has(n$value)) {
        a.push(n$value)
      }
    }
  } catch (l) {
    s.e(l)
  } finally {
    s.f()
  }
  return a
}
function u(e) {
  return /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9_]*$/.test(e)
}
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_13_226 from "../../../unrestored/shared/1571/2636/13/226"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_13_2261 from "../../../unrestored/shared/1571/2636/13/226"
var /* [auto-meaningful-name] */B3B3B3 = "#B3B3B3"
var _ = function (e) {
  return "#00000000" === e || "rgba(0,0,0,0)" === e || "transparent" === e
}
var v = function (e, t) {
  return Color1(e).fade(1 - t).string()
}
var b = function (e) {
  return "#ffffff" === Color1(e).hex().toLowerCase()
}
var y = function (e, t) {
  window.Color = Color1
  return Color1(e).darken(t).hex()
}
var E = function (e) {
  try {
    return Color1(e).toString()
  } catch (t) {
    console.error("formatColor error", e)
  }
  return e
}
var O = function (e) {
  return Color1(e).hsl().lightness() > 85.7
}
var w = function (e) {
  if ("string" !== typeof e) {
    return false
  }
  var t = true
  try {
    Color1(e).toString()
  } catch (n) {
    t = false
  }
  return t
}
var C = function (e) {
  var t = e.alpha()
  var n = Math.round(255 * Lodash.clamp(t, 0, 1))
  var r = n.toString(16)
  var o = n <= 15 ? "0".concat(r) : r
  return e.hex() + o.toUpperCase()
}
function T(e) {
  try {
    return C(Color1(e))
  } catch (t) {
    return ""
  }
}
var S = function (e) {
  var t = 0
  var n = 0
  Lodash.each(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1
      }
    }
  })
  return t === n && e
}
var A = function (e, t) {
  var n = e.HEX ? $$_$$_$$_unrestored_shared_1571_2636_13_2261(e.HEX) : $$_$$_$$_unrestored_shared_1571_2636_13_2261(e)
  var r = n.toHsl()
  var o = n.toHsv()
  var i = n.toRgb()
  var a = n.toHex()
  if (0 === r.s) {
    r.h = t || 0
    o.h = t || 0
  }
  return {
    hsl: r,
    hex: "000000" === a && 0 === i.a ? "transparent" : "#".concat(a),
    rgb: i,
    hsv: o,
    oldHue: e.h || t || r.h,
    source: e.source
  }
}
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_454 from "../../../unrestored/shared/1571/2636/454"
function j() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return !!["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].find(function (t) {
    return navigator$userAgent.includes(t)
  })
}
function N() {
  return navigator.userAgent.includes("Chrome")
}
function R() {
  var e = navigator.userAgent.indexOf("Chrome") > -1
  return navigator.userAgent.indexOf("Safari") > -1 && !e
}
import * as /* [auto-meaningful-name] */$_url from "./url"
function x(e, t) {
  var n = new Date(e)
  n.setDate(n.getDate() + t)
  n.setHours(0)
  n.setMinutes(0)
  n.setSeconds(0)
  n.setMilliseconds(0)
  return n.getTime()
}
function D(e) {
  var t = e.getHours()
  var n = "0".concat(e.getMinutes()).slice(-2)
  return "".concat(t, ":").concat(n)
}
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../unrestored/shared/1571/2636/7"
var B = {}
function F(e, t) {
  return G.apply(this, arguments)
}
function G() {
  return (G = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = new FontFace(t, "url(".concat(n, ")"))
            e.next = 3
            return r.load()
          case 3:
            document.fonts.add(r)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function W(e, t, n) {
  var r = null
  return n ? function () {
    if (r) {
      window.clearTimeout(r)
    }
    if (!r) {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      e.apply(this, o)
    }
    r = window.setTimeout(function () {
      r = null
    }, t)
  } : function () {
    for (var n = this, /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), a = 0; a < arguments$length; a++) {
      i[a] = arguments[a]
    }
    if (r) {
      window.clearTimeout(r)
    }
    r = window.setTimeout(function () {
      return e.apply(n, i)
    }, t)
  }
}
function U(e) {
  if ("object" === typeof e) {
    var t = Array.isArray(e) ? [] : {}
    Object.entries(e).forEach(function (e) {
      var n = $$_$$_$$_unrestored_shared_1571_2636_10_index.a(e, 2)
      var o = n[0]
      var i = n[1]
      t[o] = U(i)
    })
    return t
  }
  return e
}
function H(e) {
  return new Promise(function (t) {
    setTimeout(function () {
      t()
    }, e)
  })
}
function V(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("script")
    r.onload = function () {
      t(null)
    }
    r.src = e
    document.head.appendChild(r)
  })
}
function z(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link")
    r.setAttribute("rel", "stylesheet")
    r.onload = function () {
      t(null)
    }
    r.onerror = function () {
      n()
    }
    r.setAttribute("href", e)
    document.head.appendChild(r)
  })
}
function Y(e, t) {
  if (e && t) {
    var n = e.getClientRects()[0]
    var r = t.getClientRects()[0]
    return {
      left: n.x - r.x,
      top: n.y - r.y
    }
  }
}
function K(e) {
  return e && e.replace ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : e
}
export default B3B3B3
