/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28__part-1
 */

"use strict"

import { i } from "./28__part-0"
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"./307/69/index"
function a(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  var r = Module_69.b()
  if (r && r[e]) {
    return r[e].apply(r, i(t))
  }
  throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
}
function s(e, t) {
  return a("captureException", e, {
    captureContext: t,
    originalException: e,
    syntheticException: new Error("Sentry syntheticException")
  })
}
function u(e) {
  a("setUser", e)
}
function c(e) {
  a("withScope", e)
}
export { s }
export { u }
export { c }
