/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33
 */

"use strict"

export { o as b }
export { a }
export { s as c }
import * as /* [auto-meaningful-name] */Module_178 from /* 178 */"./178"
function o() {
  return !Module_178.a() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0)
}
function a(e, t) {
  return e.require(t)
}
function s(e) {
  var t
  try {
    t = a(module, e)
  } catch (i) {}
  try {
    var /* [auto-meaningful-name] */aModuleProcess$cwd = a(module, "process").cwd
    t = a(module, aModuleProcess$cwd() + "/node_modules/" + e)
  } catch (i) {}
  return t
}
export default a
