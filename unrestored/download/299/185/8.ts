/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：8
 */

"use strict"

export { i as b }
export { o as a }
export { a as c }
export { s as d }
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"../307/69/index"
function i(e) {
  var t = Module_69.b().getClient()
  var n = e || t && t.getOptions()
  return !!n && ("tracesSampleRate" in n || "tracesSampler" in n)
}
function o(e) {
  var t = (e || Module_69.b()).getScope()
  return t && t.getTransaction()
}
function a(e) {
  return e / 1e3
}
function s(e) {
  return 1e3 * e
}
export default o
