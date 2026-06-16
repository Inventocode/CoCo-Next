/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：486
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"./21"
function i(e, t) {
  var n = Module_21.a({}, e)
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e]
    })
  }
  return n
}
export default i
