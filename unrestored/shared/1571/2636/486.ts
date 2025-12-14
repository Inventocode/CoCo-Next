/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：486
 */

"use strict"

export { i as a }
import * as r from "./21"
function i(e, t) {
  var n = r.a({}, e)
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e]
    })
  }
  return n
}
export default i
