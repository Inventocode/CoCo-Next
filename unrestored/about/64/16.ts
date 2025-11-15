/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16
 */

"use strict"

export { s as a }
export { u as b }
export { l as c }
function r(e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
function i() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(r(arguments[t]))
  }
  return e
}
import * as /* [auto-meaningful-name] */$_72_32 from "./72/32"
function a(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  var r = $_72_32.b()
  if (r && r[e]) {
    return r[e].apply(r, i(t))
  }
  throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
}
function s(e, t) {
  var n
  try {
    throw new Error("Sentry syntheticException")
  } catch (e) {
    n = e
  }
  return a("captureException", e, {
    captureContext: t,
    originalException: e,
    syntheticException: n
  })
}
function u(e) {
  a("setUser", e)
}
function l(e) {
  a("withScope", e)
}
export default s
