/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：342
 */

"use strict"

export { a }
export { s as b }
export { c }
import * as /* [auto-meaningful-name] */$_799_38 from "./799/38"
import * as /* [auto-meaningful-name] */$_1212_2644 from "./1212/2644"
function o(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  var o = $_1212_2644.a()
  if (o && o[e]) {
    return o[e].apply(o, $_799_38.f(t))
  }
  throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
}
function a(e, t) {
  var n
  try {
    throw new Error("Sentry syntheticException")
  } catch (e) {
    n = e
  }
  return o("captureException", e, {
    captureContext: t,
    originalException: e,
    syntheticException: n
  })
}
function s(e) {
  o("setUser", e)
}
function c(e) {
  o("withScope", e)
}
export default a
