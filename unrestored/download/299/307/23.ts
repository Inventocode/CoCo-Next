/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：23
 */

"use strict"

export { s as e }
export { u as a }
export { c as g }
export { l as f }
export { f as h }
export { p as b }
export { g as d }
export { m as c }
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_179 from /* 179 */"./179"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_57 from /* 57 */"./57"
function s(e, t, n) {
  if (t in e) {
    var r = e[t]
    var i = n(r)
    if ("function" === typeof i) {
      try {
        c(i, r)
      } catch (o) {}
    }
    e[t] = i
  }
}
function u(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: true,
    configurable: true
  })
}
function c(e, t) {
  var n = t.prototype || {}
  e.prototype = t.prototype = n
  u(e, "__sentry_original__", t)
}
function l(e) {
  return e.__sentry_original__
}
function f(e) {
  return Object.keys(e).map(function (t) {
    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
  }).join("&")
}
function p(e) {
  var t = e
  if (Module_11.d(e)) {
    t = Module_5.a({
      message: e.message,
      name: e.name,
      stack: e.stack
    }, h(e))
  } else if (Module_11.f(e)) {
    var n = e
    t = Module_5.a({
      type: n.type,
      target: d(n.target),
      currentTarget: d(n.currentTarget)
    }, h(n))
    if ("undefined" !== typeof CustomEvent && Module_11.g(e, CustomEvent)) {
      t.detail = n.detail
    }
  }
  return t
}
function d(e) {
  try {
    return Module_11.c(e) ? Module_179.b(e) : Object.prototype.toString.call(e)
  } catch (t) {
    return "<unknown>"
  }
}
function h(e) {
  var t = {}
  for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
    t[n] = e[n]
  }
  return t
}
function g(e, t) {
  if (undefined === t) {
    t = 40
  }
  var n = Object.keys(p(e))
  n.sort()
  if (!n.length) {
    return "[object has no keys]"
  }
  if (n[0].length >= t) {
    return Module_57.d(n[0], t)
  }
  for (var /* [auto-meaningful-name] */n$length = n.length; n$length > 0; n$length--) {
    var i = n.slice(0, n$length).join(", ")
    if (!(i.length > t)) {
      return n$length === n.length ? i : Module_57.d(i, t)
    }
  }
  return ""
}
function m(e) {
  var t
  var /* [auto-meaningful-name] */a$return
  if (Module_11.i(e)) {
    var i = {}
    try {
      for (var a = Module_5.e(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        if ("undefined" !== typeof e[s$value]) {
          i[s$value] = m(e[s$value])
        }
      }
    } catch (c) {
      t = {
        error: c
      }
    } finally {
      try {
        if (s && !s.done && (a$return = a.return)) {
          a$return.call(a)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return i
  }
  return Array.isArray(e) ? e.map(m) : e
}
export default u
