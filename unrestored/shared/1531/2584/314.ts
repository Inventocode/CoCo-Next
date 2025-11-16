/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：314
 */

"use strict"

export { React$isValidElement as b }
export { o as a }
import * as /* [auto-meaningful-name] */React from "react"
var /* [auto-meaningful-name] */React$isValidElement = React.isValidElement
function o(e, t) {
  return function (e, t, n) {
    return React$isValidElement(e) ? React.cloneElement(e, "function" === typeof n ? n(e.props || {}) : n) : t
  }(e, e, t)
}
export default o
