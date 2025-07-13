"use strict";

/* harmony export (binding) */
export { AgreementContainer };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_icon__ from "../../base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "../../style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "../../style.module.css-VPet";
var _styleModuleImportMap = {
  "../../style_module.css": {
    "wrap": "CUI-sign-in-dialog-wrap",
    "login-header": "CUI-sign-in-dialog-login-header",
    "dialog-btn-close": "CUI-sign-in-dialog-dialog-btn-close",
    "main": "CUI-sign-in-dialog-main",
    "content": "CUI-sign-in-dialog-content",
    "fully-content": "CUI-sign-in-dialog-fully-content",
    "error": "CUI-sign-in-dialog-error",
    "text": "CUI-sign-in-dialog-text",
    "tab-wrap": "CUI-sign-in-dialog-tab-wrap",
    "tab": "CUI-sign-in-dialog-tab",
    "slider": "CUI-sign-in-dialog-slider",
    "footer-text": "CUI-sign-in-dialog-footer-text",
    "text-wrap": "CUI-sign-in-dialog-text-wrap",
    "left": "CUI-sign-in-dialog-left",
    "right": "CUI-sign-in-dialog-right",
    "center": "CUI-sign-in-dialog-center",
    "tab-text": "CUI-sign-in-dialog-tab-text",
    "get-code": "CUI-sign-in-dialog-get-code",
    "enable": "CUI-sign-in-dialog-enable",
    "disable": "CUI-sign-in-dialog-disable",
    "input-error": "CUI-sign-in-dialog-input-error",
    "submit-error": "CUI-sign-in-dialog-submit-error",
    "login-agreement": "CUI-sign-in-dialog-login-agreement",
    "footer": "CUI-sign-in-dialog-footer",
    "third-party-btn-wrap": "CUI-sign-in-dialog-third-party-btn-wrap",
    "third-party-btn": "CUI-sign-in-dialog-third-party-btn",
    "agreement-container": "CUI-sign-in-dialog-agreement-container",
    "check-box": "CUI-sign-in-dialog-check-box",
    "agree": "CUI-sign-in-dialog-agree",
    "tip": "CUI-sign-in-dialog-tip",
    "btn-text": "CUI-sign-in-dialog-btn-text",
    "link": "CUI-sign-in-dialog-link",
    "tab-seleted": "CUI-sign-in-dialog-tab-seleted",
    "tab-unseleted": "CUI-sign-in-dialog-tab-unseleted",
    "clickable": "CUI-sign-in-dialog-clickable",
    "sign-in-btn": "CUI-sign-in-dialog-sign-in-btn",
    "text-main": "CUI-sign-in-dialog-text-main",
    "text-second": "CUI-sign-in-dialog-text-second"
  }
};
var AgreementContainer = function AgreementContainer(props) {
  var onCheckChange = props.onCheckChange;
  var style = props.style;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)(false);
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var agreementChecked = _useState2[0];
  var setAgreementChecked = _useState2[1];
  var handleCheckChange = function handleCheckChange() {
    setAgreementChecked(!agreementChecked);
    onCheckChange(!agreementChecked);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default('agreement-container', _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
    onClick: handleCheckChange,
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("check-box ".concat(agreementChecked ? 'agree' : ''), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, agreementChecked && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__base_icon__.Icon, {
    id: "#cui_check",
    size: 8,
    color: "#ffffff"
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("p", null, "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("a", {
    href: "https://static-platform.codemao.cn/926/protocols/_userserviceProtocol.html",
    target: "_blank",
    rel: "noreferrer"
  }, "\u300A\u7528\u6237\u534F\u8BAE\u300B"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("a", {
    href: "https://static-platform.codemao.cn/926/protocols/_privacyProtocol.html",
    target: "_blank",
    rel: "noreferrer"
  }, "\u300A\u9690\u79C1\u534F\u8BAE\u300B"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("a", {
    href: "https://static-platform.codemao.cn/926/protocols/_childrenPrivacyProtectProtocol.html",
    target: "_blank",
    rel: "noreferrer"
  }, "\u300A\u513F\u7AE5\u9690\u79C1\u4FDD\u62A4\u534F\u8BAE\u300B"))));
};

/***/