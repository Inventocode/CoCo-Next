"use strict";

/* harmony export (binding) */
export { ConfirmComponent };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__base_button__ from "../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_icon__ from "../../base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__i18n__ from "../../i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "../../style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "../../style.module.css-VPet";
var Fragment = __WEBPACK_IMPORTED_MODULE_0_react__.Fragment;
var ConfirmComponent = function ConfirmComponent(props) {
  var onRegisterConfirm = props.onRegisterConfirm;
  var onCompleteClick = function onCompleteClick() {
    onRegisterConfirm && onRegisterConfirm();
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__base_icon__.Icon, {
    id: "#cui_iconicon_chenggong",
    size: 92
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-sign-in-dialog-text-main"
  }, Object(__WEBPACK_IMPORTED_MODULE_3__i18n__.getLanguage)('sign_in_dialog/register/success')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-sign-in-dialog-text-second"
  }, Object(__WEBPACK_IMPORTED_MODULE_3__i18n__.getLanguage)('sign_in_dialog/register/account_login'))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1__base_button__.Button, {
    height: "44px",
    onClick: onCompleteClick,
    className: "CUI-sign-in-dialog-sign-in-btn",
    "data-report": '\u7528\u6237\u4FE1\u606F-\u6CE8\u518C\u6210\u529F\u786E\u5B9A'
  }, Object(__WEBPACK_IMPORTED_MODULE_3__i18n__.getLanguage)('sign_in_dialog/register/confirm')));
};
ConfirmComponent.defaultProps = {
  onRegisterConfirm: function onRegisterConfirm() {
    return undefined;
  }
};

/***/