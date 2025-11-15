/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Ma8d
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { LoginPageContainer }
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__def__ from "../../def-PqOj"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__i18n__ from "../../i18n-4U0O"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_button__ from "../../../../../../../../../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__ByEmail__ from "./ByEmail-j49N"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__style_module_css__ from "../../style.module.css-YMKY"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_5__style_module_css___default from "../../style.module.css-YMKY"
var _this = this
var LoginPageContainer = function LoginPageContainer(props) {
  var isRequesting = props.isRequesting
  var setIsRequesting = props.setIsRequesting
  var switchView = props.switchView
  var onEmailLoginSuccess = props.onEmailLoginSuccess
  var reportMethod = props.reportMethod
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__ByEmail__.ByEmailComponent, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    onEmailLoginSuccess: onEmailLoginSuccess,
    reportMethod: reportMethod
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-footer-text"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-text-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-center CUI-oversea-sign-in-dialog-clickable CUI-oversea-sign-in-dialog-tab-text",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_1__def__.ContentView.FORGET_PASSWORD)
  }, __WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage("sign_in_dialog/forget_password/entry")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-divide-line"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("b", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, "•"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("b", null)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__base_button__.Button, {
    height: "44px",
    width: "calc(100% - 80px)",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_1__def__.ContentView.REGISTER),
    type: "secondary"
  }, __WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage("sign_in_dialog/create_account"))))
}
LoginPageContainer.defaultProps = {
  onEmailLoginSuccess: function onEmailLoginSuccess() {
    return undefined
  },
  reportMethod: function reportMethod() {
    return undefined
  }
}

/***/
