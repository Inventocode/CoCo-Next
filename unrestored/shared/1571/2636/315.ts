/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：315
 */

"use strict"

export { i as b }
export { o as a }
import { isValidElement, cloneElement } from "react"
var i = isValidElement
function o(e, t) {
  return function (e, t, n) {
    return i(e) ? cloneElement(e, "function" === typeof n ? n(e.props || {}) : n) : t
  }(e, e, t)
}
export default o
