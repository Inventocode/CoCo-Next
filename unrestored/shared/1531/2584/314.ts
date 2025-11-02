/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：314
 */

"use strict"

export { react$isValidElement as b }
export { o as a }
import React = require("react");
var react$isValidElement = React.isValidElement
function o(e, t) {
  return function (e, t, n) {
    return react$isValidElement(e) ? React.cloneElement(e, "function" === typeof n ? n(e.props || {}) : n) : t
  }(e, e, t)
}
export default o
