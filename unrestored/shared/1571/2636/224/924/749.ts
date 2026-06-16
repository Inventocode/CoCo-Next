/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：749
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_265 from /* 265 */"./265"
import * as /* [auto-meaningful-name] */Module_925 from /* 925 */"../../2680/285/925"
import * as /* [auto-meaningful-name] */Module_211 from /* 211 */"../../2680/285/211"
function a(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }
  var n = 1
  var a = null
  var s = null
  var c = null
  var u = false
  var d = false
  if ("string" === typeof e) {
    e = function (e) {
      if (0 === (e = e.trim().toLowerCase()).length) {
        return false
      }
      var t = false
      if (Module_925.a[e]) {
        e = Module_925.a[e]
        t = true
      } else if ("transparent" === e) {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        }
      }
      var n = l.rgb.exec(e)
      if (n) {
        return {
          r: n[1],
          g: n[2],
          b: n[3]
        }
      }
      if (n = l.rgba.exec(e)) {
        return {
          r: n[1],
          g: n[2],
          b: n[3],
          a: n[4]
        }
      }
      if (n = l.hsl.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          l: n[3]
        }
      }
      if (n = l.hsla.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          l: n[3],
          a: n[4]
        }
      }
      if (n = l.hsv.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          v: n[3]
        }
      }
      if (n = l.hsva.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          v: n[3],
          a: n[4]
        }
      }
      if (n = l.hex8.exec(e)) {
        return {
          r: Module_265.e(n[1]),
          g: Module_265.e(n[2]),
          b: Module_265.e(n[3]),
          a: Module_265.a(n[4]),
          format: t ? "name" : "hex8"
        }
      }
      if (n = l.hex6.exec(e)) {
        return {
          r: Module_265.e(n[1]),
          g: Module_265.e(n[2]),
          b: Module_265.e(n[3]),
          format: t ? "name" : "hex"
        }
      }
      if (n = l.hex4.exec(e)) {
        return {
          r: Module_265.e(n[1] + n[1]),
          g: Module_265.e(n[2] + n[2]),
          b: Module_265.e(n[3] + n[3]),
          a: Module_265.a(n[4] + n[4]),
          format: t ? "name" : "hex8"
        }
      }
      if (n = l.hex3.exec(e)) {
        return {
          r: Module_265.e(n[1] + n[1]),
          g: Module_265.e(n[2] + n[2]),
          b: Module_265.e(n[3] + n[3]),
          format: t ? "name" : "hex"
        }
      }
      return false
    }(e)
  }
  if ("object" === typeof e) {
    if (f(e.r) && f(e.g) && f(e.b)) {
      t = Module_265.i(e.r, e.g, e.b)
      u = true
      d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"
    } else {
      if (f(e.h) && f(e.s) && f(e.v)) {
        a = Module_211.d(e.s)
        s = Module_211.d(e.v)
        t = Module_265.c(e.h, a, s)
        u = true
        d = "hsv"
      } else {
        if (f(e.h) && f(e.s) && f(e.l)) {
          a = Module_211.d(e.s)
          c = Module_211.d(e.l)
          t = Module_265.b(e.h, a, c)
          u = true
          d = "hsl"
        }
      }
    }
    if (Object.prototype.hasOwnProperty.call(e, "a")) {
      n = e.a
    }
  }
  n = Module_211.b(n)
  return {
    ok: u,
    format: e.format || d,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  }
}
var /* [auto-meaningful-name] */____d__$__d____d = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"
var c = "[\\s|\\(]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")\\s*\\)?"
var u = "[\\s|\\(]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")\\s*\\)?"
var l = {
  CSS_UNIT: new RegExp(____d__$__d____d),
  rgb: new RegExp("rgb" + c),
  rgba: new RegExp("rgba" + u),
  hsl: new RegExp("hsl" + c),
  hsla: new RegExp("hsla" + u),
  hsv: new RegExp("hsv" + c),
  hsva: new RegExp("hsva" + u),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}
function f(e) {
  return Boolean(l.CSS_UNIT.exec(String(e)))
}
export default a
