"use strict";

/* harmony export (binding) */
export { RegisterPageContainer };
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
import * as __WEBPACK_IMPORTED_MODULE_3__def__ from "../../def-9+Hp";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__i18n__ from "../../i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__style_module_css__ from "../../style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_5__style_module_css___default from "../../style.module.css-VPet";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__Confirm__ from "./Confirm-Tody";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__Register__ from "./Register-KKeI";
var _this = this;
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
var useState = __WEBPACK_IMPORTED_MODULE_2_react__.useState;
var RegisterPageContainer = function RegisterPageContainer(props) {
  var isRequesting = props.isRequesting;
  var setIsRequesting = props.setIsRequesting;
  var smsTimeStamp = props.smsTimeStamp;
  var setSmsTimeStamp = props.setSmsTimeStamp;
  var switchView = props.switchView;
  var onRegisterSuccess = props.onRegisterSuccess;
  var onRegisterFailure = props.onRegisterFailure;
  var onRegisterConfirm = props.onRegisterConfirm;
  var reportMethod = props.reportMethod;
  var _useState = useState(false);
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var resetSuccess = _useState2[0];
  var setResetSuccess = _useState2[1];
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default(resetSuccess ? 'fully-content' : 'content', _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, resetSuccess ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__Confirm__.ConfirmComponent, {
    onRegisterConfirm: onRegisterConfirm
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__Register__.RegisterContainer, {
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    onRegisterSuccess: onRegisterSuccess,
    onRegisterFailure: onRegisterFailure,
    setResetSuccess: setResetSuccess,
    reportMethod: reportMethod
  })), !resetSuccess && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
    className: "CUI-sign-in-dialog-footer",
    style: {
      paddingBottom: '24px'
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("div", {
    className: "CUI-sign-in-dialog-footer-text",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("span", {
    className: "CUI-sign-in-dialog-text-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__.createElement("span", {
    className: "CUI-sign-in-dialog-center CUI-sign-in-dialog-clickable CUI-sign-in-dialog-tab-text",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_3__def__.ContentView.LOGIN)
  }, Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/back_to_login'))))));
};
RegisterPageContainer.defaultProps = {
  onRegisterSuccess: function onRegisterSuccess() {
    return undefined;
  },
  onRegisterFailure: function onRegisterFailure() {
    return undefined;
  },
  onRegisterConfirm: function onRegisterConfirm() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/