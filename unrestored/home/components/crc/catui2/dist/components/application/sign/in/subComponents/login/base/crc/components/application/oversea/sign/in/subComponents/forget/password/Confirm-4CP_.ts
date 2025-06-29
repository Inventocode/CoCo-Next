"use strict";

/* harmony export (binding) */
export { ConfirmComponent };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__base_button__ from "../../../../../../../../../../../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__i18n__ from "../../../i18n-4U0O";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "../../../style.module.css-YMKY";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "../../../style.module.css-YMKY";
var Fragment = __WEBPACK_IMPORTED_MODULE_0_react__.Fragment;
var ConfirmComponent = function ConfirmComponent(props) {
  var handleClose = props.handleClose;
  var onCompleteClick = function onCompleteClick() {
    handleClose();
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-fully-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-text-area"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-text-main"
  }, Object(__WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage)('sign_in_dialog/verify_email/email_title')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-text-second"
  }, Object(__WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage)('sign_in_dialog/verify_email/email_success_content_1')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-text-second"
  }, Object(__WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage)('sign_in_dialog/verify_email/email_success_content_2'))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1__base_button__.Button, {
    height: "44px",
    width: "100%",
    onClick: onCompleteClick,
    type: "secondary",
    "data-report": '\u7528\u6237\u4FE1\u606F-\u786E\u8BA4'
  }, Object(__WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage)('sign_in_dialog/register/confirm'))));
};

/***/