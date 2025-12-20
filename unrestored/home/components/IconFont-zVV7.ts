/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：zVV7
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_classnames__ from "classnames"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__IconFont_scss__ from "./IconFont/scss-ULrM"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__IconFont_scss___default from "./IconFont/scss-ULrM"
var IconFont = function IconFont(props) {
  var type = props.type
  var className = props.className
  var spinning = props.spinning
  var subColor = props.subColor
  var subClassName = props.subClassName
  var twoTone = props.twoTone
  var content = __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("use", {
    xlinkHref: "#" + type
  })
  if (twoTone) {
    var paths = []
    var symbol = document.getElementById(type)
    if (symbol) {
      symbol.querySelectorAll("path").forEach(function (el) {
        return paths.push(el)
      })
      content = __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("svg", {
        viewBox: symbol.getAttribute("viewBox") || undefined
      }, paths.map(function (path, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("path", {
          fill: i === 0 && subColor ? subColor : undefined,
          className: i === 0 && subClassName ? subClassName : undefined,
          key: i,
          d: path.getAttribute("d") || undefined
        })
      }))
    }
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("i", {
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default(__WEBPACK_IMPORTED_MODULE_2__IconFont_scss___default.iconFont, className)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, content))
}
IconFont.displayName = "IconFont"
/* harmony default export */
export default IconFont
/***/
