/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1350
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = function e(t) {
  if (null === t) {
    return null
  }
  if (Array.isArray(t)) {
    return t.map(e)
  }
  if ("object" === typeof t) {
    var n = {}
    for (var r in t) n[r] = e(t[r])
    return n
  }
  return t
}
