/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：733
 */

"use strict"

import React = require("react");
import o = require("./8");
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(o)
var _a
_a = function (e) {
  var t
  var e$className = e.className
  var e$customizeIcon = e.customizeIcon
  var e$customizeIconProps = e.customizeIconProps
  var e$onMouseDown = e.onMouseDown
  var e$onClick = e.onClick
  var e$children = e.children
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
    className: i()(e$className.split(/\s+/).map(function (e) {
      return "".concat(e, "-icon")
    }))
  }, e$children))
}
export { _a as a }
export default _a
