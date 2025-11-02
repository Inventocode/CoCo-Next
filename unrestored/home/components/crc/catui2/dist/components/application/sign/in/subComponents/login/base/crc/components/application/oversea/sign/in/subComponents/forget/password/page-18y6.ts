/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：18y6
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { ForgetPasswordPageContainer }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__Confirm__ from "./Confirm-4CP_"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__VerifyEmail__ from "./VerifyEmail-rjuu"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "../../../style.module.css-YMKY"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "../../../style.module.css-YMKY"
var ForgetPasswordPageContainer = function ForgetPasswordPageContainer(props) {
  var isRequesting = props.isRequesting
  var setIsRequesting = props.setIsRequesting
  var switchView = props.switchView
  var reportMethod = props.reportMethod
  var handleClose = props.handleClose
  var _useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState(false)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var resetSuccess = _useState2[0]
  var setResetSuccess = _useState2[1]
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react__.Fragment, null, resetSuccess ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__Confirm__.ConfirmComponent, {
    handleClose: handleClose
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__VerifyEmail__.VerifyEmailComponent, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    reportMethod: reportMethod,
    setResetSuccess: setResetSuccess
  }))
}
ForgetPasswordPageContainer.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined
  }
}

/***/
