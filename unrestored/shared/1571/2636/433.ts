/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：433
 */

"use strict"

export { o as b }
export { i as a }
import * as /* [auto-meaningful-name] */$_206 from "./206"
function o(e) {
  switch (e) {
    case $_206.a.CONTAIN:
      return "contain"
    case $_206.a.COVER:
      return "cover"
    case $_206.a.STRETCH:
      return "fill"
    default:
      return "cover"
  }
}
function i(e) {
  switch (e) {
    case $_206.a.CONTAIN:
      return "contain"
    case $_206.a.COVER:
      return "cover"
    case $_206.a.STRETCH:
      return "100% 100%"
    default:
      return "cover"
  }
}
export default i
