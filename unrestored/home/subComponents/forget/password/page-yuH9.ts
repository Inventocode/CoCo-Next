"use strict";

/* harmony export (binding) */
export { ForgetPasswordPageContainer };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__def__ from "../../../def-YMpR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__Confirm__ from "../../../Confirm-3rZu";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__i18n__ from "../../../i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__VerifyEmail__ from "../../../VerifyEmail-FHsg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__style_module_css__ from "../../../style/module/css-idDZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6__style_module_css___default from "../../../style/module/css-idDZ";
var _this = this;
var ForgetPasswordPageContainer = function ForgetPasswordPageContainer(props) {
  var isRequesting = props.isRequesting,
    setIsRequesting = props.setIsRequesting,
    switchView = props.switchView,
    reportMethod = props.reportMethod;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useState)(false),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    resetSuccess = _useState2[0],
    setResetSuccess = _useState2[1];
  var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useState)(3),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    second = _useState4[0],
    setSecond = _useState4[1];
  var setIsResetSuccess = function setIsResetSuccess() {
    var sec = 3;
    var interval = setInterval(function () {
      sec--;
      setSecond(sec);
      if (sec === 0) {
        clearInterval(interval);
        switchView(__WEBPACK_IMPORTED_MODULE_2__def__.ContentView.LOGIN);
      }
    }, 1000);
    setResetSuccess(true);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react__.Fragment, null, resetSuccess ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__Confirm__.ConfirmComponent, {
    handleConfirm: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_2__def__.ContentView.LOGIN),
    successText: Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/reset/success'),
    buttonText: Object(__WEBPACK_IMPORTED_MODULE_4__i18n__.getLanguage)('sign_in_dialog/login'),
    second: second
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__VerifyEmail__.VerifyEmailComponent, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    reportMethod: reportMethod,
    setResetSuccess: setIsResetSuccess
  }));
};
ForgetPasswordPageContainer.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/