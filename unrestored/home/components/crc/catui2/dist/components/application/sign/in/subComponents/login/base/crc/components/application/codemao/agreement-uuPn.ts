/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：uuPn
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { CodemaoAgreement };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__entry_dialog__ from "./entry/dialog-3yDL";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__sign_agreement_dialog__ from "./sign/agreement/dialog-TIFA";
var SignStatus;
(function (SignStatus) {
  SignStatus[SignStatus["ENTRY"] = 0] = "ENTRY";
  SignStatus[SignStatus["SIGN"] = 1] = "SIGN";
  SignStatus[SignStatus["CLOSED"] = 2] = "CLOSED";
})(SignStatus || (SignStatus = {}));
var CodemaoAgreement = function CodemaoAgreement(props) {
  var children = props.children;
  var onClose = props.onClose;
  var _onSignSuccess = props.onSignSuccess;
  var onSignError = props.onSignError;
  var entryDialogText = props.entryDialogText;
  var _useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState(SignStatus.ENTRY);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var status = _useState2[0];
  var setStatus = _useState2[1];
  var onDialogClose = function onDialogClose() {
    setStatus(SignStatus.CLOSED);
    if (onClose) {
      onClose();
    }
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.Fragment, null, status === SignStatus.ENTRY && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__entry_dialog__.EntryDialog, {
    onNextClick: function onNextClick() {
      return setStatus(SignStatus.SIGN);
    },
    onClose: onDialogClose,
    entryDialogText: entryDialogText
  }), status === SignStatus.SIGN && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__sign_agreement_dialog__.SignAgreementDialog, {
    onSignSuccess: function onSignSuccess() {
      return _onSignSuccess && _onSignSuccess();
    },
    onSignError: onSignError,
    onClose: onDialogClose
  }));
};

/***/