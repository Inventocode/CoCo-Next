/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1XJz
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { SetPasswordComponent }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__base_input__ from "../../../../../../../../../../../register/base/input-qXMC"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_button__ from "../../../../../../../../../../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_spinner__ from "../../../../../../../../../../../register/base/spinner-WvBG"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__auth__ from "../../auth-DKlr"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__i18n__ from "../../i18n-K_kJ"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__utils__ from "../login/utils-cJBm"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__style_module_css__ from "../../style.module.css-idDZ"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_10__style_module_css___default from "../../style.module.css-idDZ"
var Fragment = __WEBPACK_IMPORTED_MODULE_3_react__.Fragment
var passwordInputEl
var rePasswordInputEl
var SetPasswordComponent = function SetPasswordComponent(props) {
  var isRequesting = props.isRequesting
  var captchaTicket = props.captchaTicket
  var setIsRequesting = props.setIsRequesting
  var reportMethod = props.reportMethod
  var onRegisterSuccess = props.onRegisterSuccess
  var setIsRegisterSuccess = props.setIsRegisterSuccess
  var _useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState(undefined)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var error = _useState2[0]
  var setError = _useState2[1]
  var isPasswordErr = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD
  }, [error])
  var isRePasswordErr = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.REPWD
  }, [error])
  var isOtherErr = function isOtherErr() {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.OTHER
  }
  var _useState3 = __WEBPACK_IMPORTED_MODULE_3_react__.useState(true)
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2)
  var disableRegister = _useState4[0]
  var setDisableRegister = _useState4[1]
  var updateRegisterBtn = function updateRegisterBtn() {
    setDisableRegister(passwordInputEl.value.length < 6 || rePasswordInputEl.value.length < 6)
  }
  var onRegisterClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee(password, rePassword) {
      var result
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!disableRegister) {
                _context.next = 2
                break
              }
              return _context.abrupt("return")
            case 2:
              if (__WEBPACK_IMPORTED_MODULE_9__utils__.validatePassword(password)) {
                _context.next = 5
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/error/password/format"),
                type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD
              })
              return _context.abrupt("return")
            case 5:
              if (__WEBPACK_IMPORTED_MODULE_9__utils__.validatePassword(rePassword)) {
                _context.next = 8
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/error/password/format"),
                type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.REPWD
              })
              return _context.abrupt("return")
            case 8:
              setError(undefined)
              setIsRequesting(true)
              _context.next = 12
              return __WEBPACK_IMPORTED_MODULE_7__auth__.register({
                captchaTicket: captchaTicket,
                password: password,
                rePassword: rePassword
              })
            case 12:
              result = _context.sent
              setIsRequesting(false)
              if (!result.isSuccess) {
                setError(result.error)
              } else {
                if (onRegisterSuccess) {
                  onRegisterSuccess(result.authInfo, true)
                }
                setIsRegisterSuccess()
              }
            case 15:
            case "end":
              return _context.stop()
          }
        }
      }, _callee)
    }))
    return function onRegisterClick(_x, _x2) {
      return _ref.apply(this, arguments)
    }
  }()
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-title"
  }, __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/set_password")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    autofocus: true,
    maxLength: 20,
    clearBtn: true,
    isError: isPasswordErr(),
    onChange: function onChange() {
      updateRegisterBtn()
      if (isPasswordErr() && passwordInputEl.value) {
        setError(undefined)
      }
    },
    type: "password",
    label: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/placeholder/password"),
    topLabel: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/placeholder/password_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el
    },
    onBlur: function onBlur() {
      if (reportMethod) {
        reportMethod("用户信息-注册设置密码")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isPasswordErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    maxLength: 20,
    clearBtn: true,
    onEnterDown: function onEnterDown() {
      return onRegisterClick(passwordInputEl.value, rePasswordInputEl.value)
    },
    isError: isRePasswordErr(),
    onChange: function onChange() {
      updateRegisterBtn()
      if (isRePasswordErr() && rePasswordInputEl.value) {
        setError(undefined)
      }
    },
    type: "password",
    label: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/confirm_password"),
    topLabel: __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/placeholder/password_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      rePasswordInputEl = el
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-注册确认密码")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isRePasswordErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    height: "44px",
    width: "100%",
    className: "CUI-new-oversea-sign-in-dialog-sign-in-btn",
    disable: disableRegister,
    onClick: function onClick() {
      return onRegisterClick(passwordInputEl.value, rePasswordInputEl.value)
    },
    "data-report": "用户信息-注册完成"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-new-oversea-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage("sign_in_dialog/finish"))))
}
SetPasswordComponent.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined
  },
  onRegisterSuccess: function onRegisterSuccess() {
    return undefined
  }
}

/***/
