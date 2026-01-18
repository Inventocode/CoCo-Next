/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：233
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$_1547 from "./1547"
function i(e) {
  if ("string" !== typeof e) {
    throw new Error($_1547.a(7))
  }
  return e.charAt(0).toUpperCase() + e.slice(1)
}
export default i
