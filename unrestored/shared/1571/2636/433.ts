/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：433
 */

"use strict"

export { o as b }
export { i as a }
import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"./206"
function o(e) {
  switch (e) {
    case Module_206.a.CONTAIN:
      return "contain"
    case Module_206.a.COVER:
      return "cover"
    case Module_206.a.STRETCH:
      return "fill"
    default:
      return "cover"
  }
}
function i(e) {
  switch (e) {
    case Module_206.a.CONTAIN:
      return "contain"
    case Module_206.a.COVER:
      return "cover"
    case Module_206.a.STRETCH:
      return "100% 100%"
    default:
      return "cover"
  }
}
export default i
