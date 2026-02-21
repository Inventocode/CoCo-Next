/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：742
 */

"use strict"

import { createElement } from "react"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
var _a
_a = function (e) {
  var t
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$customizeIcon = e.customizeIcon
  var /* [auto-meaningful-name] */e$customizeIconProps = e.customizeIconProps
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$children = e.children
  t = "function" === typeof e$customizeIcon ? e$customizeIcon(e$customizeIconProps) : e$customizeIcon
  return createElement("span", {
    className: e$className,
    onMouseDown: function (e) {
      e.preventDefault()
      if (e$onMouseDown) {
        e$onMouseDown(e)
      }
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: e$onClick,
    "aria-hidden": true
  }, undefined !== t ? t : createElement("span", {
    className: Classnames1(e$className.split(/\s+/).map(function (e) {
      return "".concat(e, "-icon")
    }))
  }, e$children))
}
export { _a as a }
export default _a
