/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2/Pt
 */

"use strict"

/* unused harmony export PlayerBlurBackground */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__common_util__ from "../../../../../../../../../../../../common/util-Yw5u"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__style_module_css__ from "./style.module.css-AK0g"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__style_module_css___default from "./style.module.css-AK0g"
/**
 * Player专用毛玻璃背景组件（不支持Android chrome < 55）
 * - iOS: 使用backdrop blur实现虚化（iOS旧版本使用filter blur有渲染问题）
 * - Android (chrome < 55) : 使用纯黑色背景元素
 * - 其他: 使用filter blur实现虚化（X5内核对backdrop不支持）
 */
var PlayerBlurBackground = function PlayerBlurBackground(props) {
  var imgSrc = props.imgSrc
  var style = props.style
  var outterStyle = Object.assign({
    backgroundImage: __WEBPACK_IMPORTED_MODULE_1__common_util__.isIos ? "url(".concat(imgSrc, ")") : "",
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__common_util__.isCssFilterBlurCompatible ? "black" : ""
  }, style)
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-blur-background-background",
    style: outterStyle
  }, __WEBPACK_IMPORTED_MODULE_1__common_util__.isIos && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-blur-background-ios-blur"
  }), !__WEBPACK_IMPORTED_MODULE_1__common_util__.isIos && __WEBPACK_IMPORTED_MODULE_1__common_util__.isCssFilterBlurCompatible && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("img", {
    src: imgSrc
  }))
}

/***/
