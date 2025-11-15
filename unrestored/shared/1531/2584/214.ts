/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：214
 */

"use strict"

export { o as b }
export { i as c }
export { a }
var r = new Map()
function o(e) {
  return r.get(e)
}
function i(e, t) {
  return r.set(e, t)
}
function a(e) {
  r.delete(e)
}
export default a
