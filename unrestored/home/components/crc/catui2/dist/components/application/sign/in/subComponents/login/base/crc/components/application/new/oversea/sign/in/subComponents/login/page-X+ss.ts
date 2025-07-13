"use strict";

/* harmony export (binding) */
export { LoginPageContainer };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__def__ from "../../def-YMpR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__i18n__ from "../../i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__base_button__ from "../../../../../../../../../../../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__ByEmail__ from "./ByEmail-Qscg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__style_module_css__ from "../../style.module.css-idDZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6__style_module_css___default from "../../style.module.css-idDZ";
var _this = this;
var _styleModuleImportMap = {
  "../../style_module.css": {
    "wrap": "CUI-new-oversea-sign-in-dialog-wrap",
    "login-header": "CUI-new-oversea-sign-in-dialog-login-header",
    "dialog-btn-close": "CUI-new-oversea-sign-in-dialog-dialog-btn-close",
    "main": "CUI-new-oversea-sign-in-dialog-main",
    "content": "CUI-new-oversea-sign-in-dialog-content",
    "title": "CUI-new-oversea-sign-in-dialog-title",
    "fully-content": "CUI-new-oversea-sign-in-dialog-fully-content",
    "error": "CUI-new-oversea-sign-in-dialog-error",
    "text": "CUI-new-oversea-sign-in-dialog-text",
    "tab-wrap": "CUI-new-oversea-sign-in-dialog-tab-wrap",
    "tab": "CUI-new-oversea-sign-in-dialog-tab",
    "slider": "CUI-new-oversea-sign-in-dialog-slider",
    "input-error": "CUI-new-oversea-sign-in-dialog-input-error",
    "submit-error": "CUI-new-oversea-sign-in-dialog-submit-error",
    "footer": "CUI-new-oversea-sign-in-dialog-footer",
    "footer-text": "CUI-new-oversea-sign-in-dialog-footer-text",
    "text-wrap": "CUI-new-oversea-sign-in-dialog-text-wrap",
    "disable-btn": "CUI-new-oversea-sign-in-dialog-disable-btn",
    "left": "CUI-new-oversea-sign-in-dialog-left",
    "right": "CUI-new-oversea-sign-in-dialog-right",
    "center": "CUI-new-oversea-sign-in-dialog-center",
    "tab-text": "CUI-new-oversea-sign-in-dialog-tab-text",
    "switch-login": "CUI-new-oversea-sign-in-dialog-switch-login",
    "tip": "CUI-new-oversea-sign-in-dialog-tip",
    "btn-text": "CUI-new-oversea-sign-in-dialog-btn-text",
    "link": "CUI-new-oversea-sign-in-dialog-link",
    "tab-seleted": "CUI-new-oversea-sign-in-dialog-tab-seleted",
    "tab-unseleted": "CUI-new-oversea-sign-in-dialog-tab-unseleted",
    "clickable": "CUI-new-oversea-sign-in-dialog-clickable",
    "sign-in-btn": "CUI-new-oversea-sign-in-dialog-sign-in-btn",
    "switch-btn": "CUI-new-oversea-sign-in-dialog-switch-btn",
    "get-code": "CUI-new-oversea-sign-in-dialog-get-code",
    "enable": "CUI-new-oversea-sign-in-dialog-enable",
    "disable": "CUI-new-oversea-sign-in-dialog-disable",
    "text-area": "CUI-new-oversea-sign-in-dialog-text-area",
    "text-main": "CUI-new-oversea-sign-in-dialog-text-main",
    "text-second": "CUI-new-oversea-sign-in-dialog-text-second"
  }
};
var LoginPageContainer = function LoginPageContainer(props) {
  var isRequesting = props.isRequesting;
  var setIsRequesting = props.setIsRequesting;
  var switchView = props.switchView;
  var onEmailLoginSuccess = props.onEmailLoginSuccess;
  var reportMethod = props.reportMethod;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__ByEmail__.ByEmailComponent, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    onEmailLoginSuccess: onEmailLoginSuccess,
    reportMethod: reportMethod
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-footer-text"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("span", {
    className: "CUI-new-oversea-sign-in-dialog-text-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("span", {
    onClick: !isRequesting ? switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_2__def__.ContentView.FORGET_PASSWORD) : undefined,
    className: __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName___default("center clickable tab-text ".concat(isRequesting ? 'disable-btn' : ''), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_3__i18n__.getLanguage)('sign_in_dialog/forget_password/entry')))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_button__.Button, {
    disable: isRequesting,
    height: "44px",
    width: "calc(100% - 80px)",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_2__def__.ContentView.REGISTER),
    type: "transparent",
    className: "CUI-new-oversea-sign-in-dialog-switch-btn"
  }, Object(__WEBPACK_IMPORTED_MODULE_3__i18n__.getLanguage)('sign_in_dialog/create_new_register'))));
};
LoginPageContainer.defaultProps = {
  onEmailLoginSuccess: function onEmailLoginSuccess() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/