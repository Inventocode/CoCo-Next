/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：MTtJ
 */

"use strict"

/* unused harmony export NewOverseaSignInDialog */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_icon__ from "../../../../../../../../../../base/icon-0d1w"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_dialog__ from "../../../../../../../../../../base/dialog-ymrb"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__def__ from "./def-YMpR"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__ from "./subComponents/forget/password/page-yuH9"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__ from "./subComponents/login/page-X+ss"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__ from "./subComponents/register/page-wpqZ"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__i18n__ from "./i18n-K_kJ"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__style_module_css__ from "./style.module.css-idDZ"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__style_module_css___default from "./style.module.css-idDZ"
var useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState
var useEffect = __WEBPACK_IMPORTED_MODULE_1_react__.useEffect
var NewOverseaSignInDialog = function NewOverseaSignInDialog(props) {
  var _useState = useState(__WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var contentView = _useState2[0]
  var setContentView = _useState2[1]
  var _useState3 = useState(false)
  var _useState4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2)
  var isRequesting = _useState4[0]
  var setIsRequesting = _useState4[1]
  var _useState5 = useState(props.show)
  var _useState6 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState5, 2)
  var show = _useState6[0]
  var setShow = _useState6[1]
  var onEmailLoginSuccess = props.onEmailLoginSuccess
  var onCloseAnimationEnd = props.onCloseAnimationEnd
  var reportMethod = props.reportMethod
  var onRegisterSuccess = props.onRegisterSuccess
  __WEBPACK_IMPORTED_MODULE_8__i18n__.setLanguage(props.language || "")
  useEffect(function () {
    setShow(props.show)
  }, [props.show])
  var switchView = function switchView(view) {
    if (reportMethod) {
      reportMethod("用户信息-".concat(contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN ? "登录" : contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER ? "注册" : "找回密码"))
    }
    setContentView(view)
  }
  var closeHandler = function closeHandler() {
    if (onCloseAnimationEnd) {
      onCloseAnimationEnd()
    }
  }
  var closeBtnHandler = function closeBtnHandler() {
    setShow(false)
  }
  var renderHeader = function renderHeader() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-new-oversea-sign-in-dialog-login-header"
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-new-oversea-sign-in-dialog-dialog-btn-close",
      onClick: closeBtnHandler
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__base_icon__.Icon, {
      id: "#cui_iconnor2",
      size: 10
    })))
  }
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__base_dialog__.Dialog, {
    centerShowUp: true,
    show: show,
    mask: true,
    maskClose: false,
    header: renderHeader,
    footer: null,
    className: "CUI-new-oversea-sign-in-dialog-wrap",
    contentStyle: {
      width: 434,
      height: 579,
      padding: 0,
      borderRadius: 12
    },
    layout: "custom",
    onClose: closeHandler,
    top: "center"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-main"
  }, contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__.LoginPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    onEmailLoginSuccess: onEmailLoginSuccess,
    reportMethod: reportMethod
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__.RegisterPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    reportMethod: reportMethod,
    onRegisterSuccess: onRegisterSuccess,
    handleClose: closeBtnHandler
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.FORGET_PASSWORD && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__.ForgetPasswordPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsRequesting,
    switchView: switchView,
    reportMethod: reportMethod
  })))
}
NewOverseaSignInDialog.defaultProps = {
  language: "en",
  onCloseAnimationEnd: function onCloseAnimationEnd() {
    return undefined
  },
  onEmailLoginSuccess: function onEmailLoginSuccess() {
    return undefined
  },
  reportMethod: function reportMethod() {
    return undefined
  },
  onRegisterSuccess: function onRegisterSuccess() {
    return undefined
  }
}

/***/
