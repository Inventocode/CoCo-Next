/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16__part-1
 */

"use strict"

import { i } from "./index__part-0"
import * as o from "./32"
function a(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  var r = o.b()
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
export { s }
export { u }
export { l }
