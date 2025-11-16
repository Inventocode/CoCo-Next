/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：429
 */

"use strict"

export { o as b }
export { i as a }
import * as /* [auto-meaningful-name] */$_205 from "./205"
function o(e) {
  switch (e) {
    case $_205.a.CONTAIN:
      return "contain"
    case $_205.a.COVER:
      return "cover"
    case $_205.a.STRETCH:
      return "fill"
    default:
      return "cover"
  }
}
function i(e) {
  switch (e) {
    case $_205.a.CONTAIN:
      return "contain"
    case $_205.a.COVER:
      return "cover"
    case $_205.a.STRETCH:
      return "100% 100%"
    default:
      return "cover"
  }
}
export default i
