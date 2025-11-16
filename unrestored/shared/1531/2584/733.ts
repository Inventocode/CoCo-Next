/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：733
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import * as o from "./8"
import i from "./8"
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
  return React.createElement("span", {
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
  }, undefined !== t ? t : React.createElement("span", {
    className: i(e$className.split(/\s+/).map(function (e) {
      return "".concat(e, "-icon")
    }))
  }, e$children))
}
export { _a as a }
export default _a
