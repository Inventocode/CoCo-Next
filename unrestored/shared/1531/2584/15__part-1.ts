/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_13_225 from "./13/225"
import /* [auto-meaningful-name] */_$_13_ from "./13/225"
var /* [auto-meaningful-name] */B3B3B3 = "#B3B3B3"
var _ = function (e) {
  return "#00000000" === e || "rgba(0,0,0,0)" === e || "transparent" === e
}
var v = function (e, t) {
  return _Color(e).fade(1 - t).string()
}
var b = function (e) {
  return "#ffffff" === _Color(e).hex().toLowerCase()
}
var y = function (e, t) {
  window.Color = _Color
  return _Color(e).darken(t).hex()
}
var E = function (e) {
  try {
    return _Color(e).toString()
  } catch (t) {
    console.error("formatColor error", e)
  }
  return e
}
var O = function (e) {
  return _Color(e).hsl().lightness() > 85.7
}
var w = function (e) {
  if ("string" !== typeof e) {
    return false
  }
  var t = true
  try {
    _Color(e).toString()
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
    return C(_Color(e))
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
var I = function (e, t) {
  var n = e.HEX ? _$_13_(e.HEX) : _$_13_(e)
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
export { B3B3B3 as "15__part-1__g" }
export { _ as "15__part-1___" }
export { v as "15__part-1__v" }
export { b as "15__part-1__b" }
export { y as "15__part-1__y" }
export { E as "15__part-1__E" }
export { O as "15__part-1__O" }
export { w as "15__part-1__w" }
export { C as "15__part-1__C" }
export { T as "15__part-1__T" }
export { S as "15__part-1__S" }
export { I as "15__part-1__I" }
