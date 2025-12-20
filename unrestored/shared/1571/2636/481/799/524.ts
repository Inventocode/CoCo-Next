/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：524
 */

"use strict"

function i() {
  return "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0)
}
function o(e, t) {
  return e.require(t)
}
function a(e) {
  var t
  try {
    t = o(module, e)
  } catch (i) {}
  try {
    var /* [auto-meaningful-name] */oModuleProcess$cwd = o(module, "process").cwd
    t = o(module, oModuleProcess$cwd() + "/node_modules/" + e)
  } catch (i) {}
  return t
}
export { i as b }
export { o as a }
export { a as c }
export default o
