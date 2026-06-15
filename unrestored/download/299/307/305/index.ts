/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：305
 */

"use strict"

export { u as a }
export { c as b }
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"../5"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Module_183 from /* 183 */"./183"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"../23"
import * as /* [auto-meaningful-name] */Module_88 from /* 88 */"../88"
function u(e, t, n) {
  if (undefined === t) {
    t = 1 / 0
  }
  if (undefined === n) {
    n = 1 / 0
  }
  try {
    return l("", e, t, n)
  } catch (r) {
    return {
      ERROR: "**non-serializable** (" + r + ")"
    }
  }
}
function c(e, t, n) {
  if (undefined === t) {
    t = 3
  }
  if (undefined === n) {
    n = 102400
  }
  var r
  var i = u(e, t)
  r = i
  return function (e) {
    return ~-encodeURI(e).split(/%..|./).length
  }(JSON.stringify(r)) > n ? c(e, t - 1, n) : i
}
function l(t, n, u, c, f) {
  if (undefined === u) {
    u = 1 / 0
  }
  if (undefined === c) {
    c = 1 / 0
  }
  if (undefined === f) {
    f = Module_183.a()
  }
  var p = Module_5.c(f, 2)
  var d = p[0]
  var h = p[1]
  var g = n
  if (g && "function" === typeof g.toJSON) {
    try {
      return g.toJSON()
    } catch (S) {}
  }
  if (null === n || ["number", "boolean", "string"].includes(typeof n) && !Module_11.h(n)) {
    return n
  }
  var m = function (t, n) {
    try {
      return "domain" === t && n && "object" === typeof n && n._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" !== typeof global && n === global ? "[Global]" : "undefined" !== typeof window && n === window ? "[Window]" : "undefined" !== typeof document && n === document ? "[Document]" : Module_11.m(n) ? "[SyntheticEvent]" : "number" === typeof n && n !== n ? "[NaN]" : undefined === n ? "[undefined]" : "function" === typeof n ? "[Function: " + Module_88.b(n) + "]" : "symbol" === typeof n ? "[" + String(n) + "]" : "bigint" === typeof n ? "[BigInt: " + String(n) + "]" : "[object " + Object.getPrototypeOf(n).constructor.name + "]"
    } catch (S) {
      return "**non-serializable** (" + S + ")"
    }
  }(t, n)
  if (!m.startsWith("[object ")) {
    return m
  }
  if (0 === u) {
    return m.replace("object ", "")
  }
  if (d(n)) {
    return "[Circular ~]"
  }
  var v = Array.isArray(n) ? [] : {}
  var y = 0
  var _ = Module_11.d(n) || Module_11.f(n) ? Module_23.b(n) : n
  for (var b in _) if (Object.prototype.hasOwnProperty.call(_, b)) {
    if (y >= c) {
      v[b] = "[MaxProperties ~]"
      break
    }
    var w = _[b]
    v[b] = l(b, w, u - 1, c, f)
    y += 1
  }
  h(n)
  return v
}
export default u
