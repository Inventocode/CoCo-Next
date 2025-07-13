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
import * as __WEBPACK_IMPORTED_MODULE_2__i18n__ from "../../i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "../../style.module.css-idDZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "../../style.module.css-idDZ";
var Fragment = __WEBPACK_IMPORTED_MODULE_0_react__.Fragment;
var ConfirmComponent = function ConfirmComponent(props) {
  var handleConfirm = props.handleConfirm;
  var successText = props.successText;
  var buttonText = props.buttonText;
  var second = props.second;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-fully-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
    src: require("./unnamed-F6L5")
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-text-main"
  }, successText), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-text-second"
  }, Object(__WEBPACK_IMPORTED_MODULE_2__i18n__.getLanguage)('sign_in_dialog/welcome')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1__base_button__.Button, {
    height: "44px",
    width: "calc(100% - 80px)",
    type: "primary",
    onClick: handleConfirm
  }, "".concat(buttonText, "(").concat(second, "s)"))));
};

/***/