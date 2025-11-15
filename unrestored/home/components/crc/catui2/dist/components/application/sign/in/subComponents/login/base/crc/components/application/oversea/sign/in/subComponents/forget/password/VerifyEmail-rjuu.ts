/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：rjuu
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { VerifyEmailComponent }
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
import * as __WEBPACK_IMPORTED_MODULE_4__base_button__ from "../../../../../../../../../../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_input__ from "../../../../../../../../../../../register/base/input-qXMC"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_spinner__ from "../../../../../../../../../../../register/base/spinner-WvBG"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__def__ from "../../../def-PqOj"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__auth__ from "../../../auth-U9Jd"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__utils__ from "../../register/utils-im4M"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__i18n__ from "../../../i18n-4U0O"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__style_module_css__ from "../../../style.module.css-YMKY"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_11__style_module_css___default from "../../../style.module.css-YMKY"
var _this = this
var useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState
var useEffect = __WEBPACK_IMPORTED_MODULE_3_react__.useEffect
var useCallback = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback
var Fragment = __WEBPACK_IMPORTED_MODULE_3_react__.Fragment
var useRef = __WEBPACK_IMPORTED_MODULE_3_react__.useRef
var emailInputEl
var VerifyEmailComponent = function VerifyEmailComponent(props) {
  var switchView = props.switchView
  var isRequesting = props.isRequesting
  var setIsRequesting = props.setIsRequesting
  var setResetSuccess = props.setResetSuccess
  var _useState = useState(true)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var disableNext = _useState2[0]
  var setDisableNext = _useState2[1]
  var _useState3 = useState(undefined)
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2)
  var error = _useState4[0]
  var setError = _useState4[1]
  var isDestory = useRef(false)
  var isEmailErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL
  }, [error])
  var isOtherErr = function isOtherErr() {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.OTHER
  }
  useEffect(function () {
    isDestory.current = false
    return function () {
      isDestory.current = true
    }
  })
  useEffect(function () {
    if (isEmailErr()) {
      emailInputEl.focus()
    }
  }, [isEmailErr])
  var onNextClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      var email
      var result
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isRequesting || disableNext)) {
                _context.next = 2
                break
              }
              return _context.abrupt("return")
            case 2:
              email = emailInputEl.value
              if (__WEBPACK_IMPORTED_MODULE_9__utils__.validateEmail(email)) {
                _context.next = 6
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/email/format"),
                type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL
              })
              return _context.abrupt("return")
            case 6:
              setIsRequesting(true)
              _context.next = 9
              return __WEBPACK_IMPORTED_MODULE_8__auth__.handleResetPwd(email)
            case 9:
              result = _context.sent
              if (isDestory.current) {
                _context.next = 18
                break
              }
              setIsRequesting(false)
              if (result.isSuccess) {
                _context.next = 17
                break
              }
              setError(result.error)
              return _context.abrupt("return")
            case 17:
              setResetSuccess(true)
            case 18:
            case "end":
              return _context.stop()
          }
        }
      }, _callee)
    }))
    return function onNextClick() {
      return _ref.apply(this, arguments)
    }
  }()
  var updateLoginBtn = function updateLoginBtn() {
    setDisableNext(emailInputEl.value === "")
  }
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-tab-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-tab"
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/reset_password"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    autofocus: true,
    clearBtn: true,
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    maxLength: 100,
    isError: isEmailErr(),
    onChange: function onChange() {
      updateLoginBtn()
      if (isEmailErr()) {
        setError(undefined)
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/placeholder/email"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      emailInputEl = el
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-重置邮箱密码")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-input-error"
  }, isEmailErr() && error && error.msg, error && error.msg === __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/email/unregisterd") && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-link",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_7__def__.ContentView.REGISTER)
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/create_account"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_button__.Button, {
    height: "44px",
    onClick: onNextClick,
    disable: disableNext,
    className: "CUI-oversea-sign-in-dialog-sign-in-btn",
    "data-report": "用户信息-重置确认"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/register/confirm")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-divide-line"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("b", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", null, "•"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("b", null)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_button__.Button, {
    height: "44px",
    width: "calc(100% - 80px)",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_7__def__.ContentView.LOGIN),
    type: "secondary"
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/already_has_account"))))
}
VerifyEmailComponent.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined
  }
}

/***/
