/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：KKeI
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { RegisterContainer }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__def__ from "../../def-9+Hp"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_input__ from "./base/input-qXMC"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__base_button__ from "../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__base_spinner__ from "./base/spinner-WvBG"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__auth__ from "../../auth-819E"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__utils__ from "./utils-rEd4"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__i18n__ from "../../i18n-FsOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__style_module_css__ from "../../style.module.css-VPet"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_12__style_module_css___default from "../../style.module.css-VPet"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_13__agreement__ from "./agreement-q2lc"
var _this = this
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
}
var phoneInputEl
var passwordInputEl
var smsCodeInputEl
var useState = __WEBPACK_IMPORTED_MODULE_4_react__.useState
var useEffect = __WEBPACK_IMPORTED_MODULE_4_react__.useEffect
var useCallback = __WEBPACK_IMPORTED_MODULE_4_react__.useCallback
var useRef = __WEBPACK_IMPORTED_MODULE_4_react__.useRef
var RegisterContainer = function RegisterContainer(props) {
  var isRequesting = props.isRequesting
  var setIsRequesting = props.setIsRequesting
  var smsTimeStamp = props.smsTimeStamp
  var setSmsTimeStamp = props.setSmsTimeStamp
  var switchView = props.switchView
  var setResetSuccess = props.setResetSuccess
  var _useState = useState(true)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var disableRegister = _useState2[0]
  var setDisableRegister = _useState2[1]
  var _useState3 = useState(0)
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2)
  var smsCountDown = _useState4[0]
  var setSmsCountDown = _useState4[1]
  var _useState5 = useState(undefined)
  var _useState6 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState5, 2)
  var error = _useState6[0]
  var setError = _useState6[1]
  var isDestory = useRef(false)
  var _useState7 = useState(false)
  var _useState8 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState7, 2)
  var agreementChecked = _useState8[0]
  var setAgreementChecked = _useState8[1]
  var isPhoneErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PHONE
  }, [error])
  var isPasswordCodeErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PWD
  }, [error])
  var isSmsCodeErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.SMS_CODE
  }, [error])
  var isOtherErr = function isOtherErr() {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.OTHER
  }
  useEffect(function () {
    isDestory.current = false
    return function () {
      isDestory.current = true
    }
  })
  useEffect(function () {
    updateRegisterBtn()
  }, [agreementChecked])
  useEffect(function () {
    if (isPhoneErr()) {
      phoneInputEl.focus()
    }
    if (isSmsCodeErr()) {
      smsCodeInputEl.focus()
    }
    var diffSecond = (Date.now() - smsTimeStamp) / 1000
    if (diffSecond > __WEBPACK_IMPORTED_MODULE_5__def__.SMS_COUNT_DOWN) {
      return
    }
    var remainSeconds = Math.ceil(__WEBPACK_IMPORTED_MODULE_5__def__.SMS_COUNT_DOWN - diffSecond)
    setSmsCountDown(remainSeconds)
    var timer = setInterval(function () {
      remainSeconds--
      setSmsCountDown(remainSeconds)
      if (remainSeconds === 0) {
        clearInterval(timer)
      }
    }, 1000)
    return function () {
      clearInterval(timer)
    }
  }, [isSmsCodeErr, isPhoneErr, smsTimeStamp])
  var updateRegisterBtn = function updateRegisterBtn() {
    setDisableRegister(phoneInputEl.value === "" || passwordInputEl.value.length < 6 || smsCodeInputEl.value === "" || !agreementChecked)
  }
  var onRegisterClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee() {
      var phone
      var code
      var password
      var result
      return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!disableRegister) {
                _context.next = 2
                break
              }
              return _context.abrupt("return")
            case 2:
              setError(undefined)
              phone = phoneInputEl.value
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validatePhoneNumber(phone)) {
                _context.next = 7
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/phone/format"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PHONE
              })
              return _context.abrupt("return")
            case 7:
              code = smsCodeInputEl.value
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validCode(code)) {
                _context.next = 11
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/sms_code/fail"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.SMS_CODE
              })
              return _context.abrupt("return")
            case 11:
              setIsRequesting(true)
              password = passwordInputEl.value
              _context.prev = 13
              _context.next = 16
              return __WEBPACK_IMPORTED_MODULE_9__auth__.handleRegister({
                phone: phone,
                password: password,
                code: code
              })
            case 16:
              result = _context.sent
              if (isDestory.current) {
                _context.next = 26
                break
              }
              setIsRequesting(false)
              if (result.isSuccess) {
                _context.next = 24
                break
              }
              setError(result.error)
              throw result.error
            case 24:
              if (props.onRegisterSuccess) {
                props.onRegisterSuccess(result.authInfo)
              }
              setResetSuccess(true)
            case 26:
              _context.next = 31
              break
            case 28:
              _context.prev = 28
              _context.t0 = _context["catch"](13)
              if (props.onRegisterFailure) {
                props.onRegisterFailure({
                  source: "register",
                  isSuccess: false,
                  error: _context.t0
                })
              }
            case 31:
            case "end":
              return _context.stop()
          }
        }
      }, _callee, null, [[13, 28]])
    }))
    return function onRegisterClick() {
      return _ref.apply(this, arguments)
    }
  }()
  var getCaptchaFallback = function getCaptchaFallback() {
    setIsRequesting(false)
  }
  var onGetCodeClick = /*#__PURE__*/function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee2() {
      var phone
      var /* [auto-meaningful-name] */_context2$sent
      return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!smsCountDown) {
                _context2.next = 2
                break
              }
              return _context2.abrupt("return")
            case 2:
              setError(undefined)
              phone = phoneInputEl.value
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validatePhoneNumber(phone)) {
                _context2.next = 7
                break
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/phone/format"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PHONE
              })
              return _context2.abrupt("return")
            case 7:
              _context2.next = 9
              return __WEBPACK_IMPORTED_MODULE_9__auth__.handleSendSmsCode(phone, "register", getCaptchaFallback)
            case 9:
              _context2$sent = _context2.sent
              if (_context2$sent) {
                setError(_context2$sent)
              } else {
                setSmsTimeStamp(Date.now())
              }
            case 11:
            case "end":
              return _context2.stop()
          }
        }
      }, _callee2)
    }))
    return function onGetCodeClick() {
      return _ref2.apply(this, arguments)
    }
  }()
  var renderGetCode = function renderGetCode() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
      onClick: onGetCodeClick,
      "data-report-click": "用户信息-注册验证码",
      className: __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default("get-code ".concat(smsCountDown ? "disable" : "enable"), _styleModuleImportMap, {
        "autoResolveMultipleImports": true,
        "handleMissingStyleName": "throw"
      })
    }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/btn_code"), smsCountDown ? "(".concat(smsCountDown, ")") : "")
  }
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-tab-wrap"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-tab"
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/new_user_sign_up"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("form", {
    style: {
      height: "208px"
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    autofocus: true,
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    clearBtn: true,
    maxLength: 100,
    isError: isPhoneErr(),
    onChange: function onChange() {
      updateRegisterBtn()
      if (isPhoneErr()) {
        setError(undefined)
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/mobile_phone"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      phoneInputEl = el
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-注册手机号")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isPhoneErr() && error && error.msg, error && error.msg === __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/phone/registered") && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-link",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_5__def__.ContentView.LOGIN)
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/login_now"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    clearBtn: true,
    onEnterDown: onRegisterClick,
    isError: isPasswordCodeErr(),
    onChange: function onChange() {
      updateRegisterBtn()
      if (isPasswordCodeErr() && passwordInputEl.value) {
        setError(undefined)
      }
    },
    type: "password",
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/password_n_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el
    },
    onBlur: function onBlur() {
      if ((passwordInputEl.value.length < 6 || passwordInputEl.value.length > 20) && passwordInputEl.value.length > 0) {
        setError({
          type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PWD,
          msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/password/format")
        })
      }
      if (props.reportMethod) {
        props.reportMethod("用户信息-注册设置密码")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isPasswordCodeErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    onEnterDown: onRegisterClick,
    isError: isSmsCodeErr(),
    onChange: function onChange() {
      updateRegisterBtn()
      if (isSmsCodeErr()) {
        setError(undefined)
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/code"),
    autoComplete: "off",
    maxLength: 10,
    getInputEl: function getInputEl(el) {
      if (el) {
        smsCodeInputEl = el
      }
    },
    iconsSuffix: renderGetCode(),
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-注册验证码")
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isSmsCodeErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-sign-in-dialog-submit-error",
    style: {
      bottom: "20px"
    }
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__base_button__.Button, {
    height: "44px",
    width: "100%",
    className: "CUI-sign-in-dialog-sign-in-btn",
    disable: disableRegister,
    onClick: onRegisterClick,
    "data-report": "用户信息-注册完成"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_8__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/register"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_13__agreement__.AgreementContainer, {
    onCheckChange: setAgreementChecked,
    style: {
      marginTop: "12px"
    }
  }))
}
RegisterContainer.defaultProps = {
  onRegisterSuccess: function onRegisterSuccess() {
    return undefined
  },
  onRegisterFailure: function onRegisterFailure() {
    return undefined
  },
  reportMethod: function reportMethod() {
    return undefined
  }
}

/***/
