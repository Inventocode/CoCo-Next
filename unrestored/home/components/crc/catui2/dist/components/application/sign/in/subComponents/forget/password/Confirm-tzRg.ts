/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：tzRg
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { ConfirmComponent }
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__base_button__ from "../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_icon__ from "../../../base/icon-0d1w"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__def__ from "../../../def-9+Hp"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__i18n__ from "../../../i18n-FsOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__style_module_css__ from "../../../style.module.css-VPet"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_5__style_module_css___default from "../../../style.module.css-VPet"
var Fragment = __WEBPACK_IMPORTED_MODULE_0_react__.Fragment
var ConfirmComponent = function ConfirmComponent(props) {
  var switchView = props.switchView
  var onCompleteClick = function onCompleteClick() {
    switchView(__WEBPACK_IMPORTED_MODULE_3__def__.ContentView.LOGIN)
  }
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__base_icon__.Icon, {
    id: "#cui_iconicon_chenggong",
    size: 92
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-sign-in-dialog-text-main"
  }, __WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage("sign_in_dialog/forget_password/success")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-sign-in-dialog-text-second"
  }, __WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage("sign_in_dialog/forget_password/login_notice"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1__base_button__.Button, {
    height: "44px",
    onClick: onCompleteClick,
    className: "CUI-sign-in-dialog-sign-in-btn",
    "data-report": "用户信息-去登录"
  }, __WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage("sign_in_dialog/go_to_login")))
}

/***/
