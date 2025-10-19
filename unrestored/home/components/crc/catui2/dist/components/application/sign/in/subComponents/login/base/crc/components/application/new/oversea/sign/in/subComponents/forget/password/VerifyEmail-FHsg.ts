/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：FHsg
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { VerifyEmailComponent };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_button__ from "../../../../../../../../../../../../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_input__ from "../../../../../../../../../../../../register/base/input-qXMC";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__base_spinner__ from "../../../../../../../../../../../../register/base/spinner-WvBG";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__def__ from "../../../def-YMpR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__auth__ from "../../../auth-DKlr";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__utils__ from "../../login/utils-cJBm";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__i18n__ from "../../../i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__style_module_css__ from "../../../style.module.css-idDZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_12__style_module_css___default from "../../../style.module.css-idDZ";
var _this = this;
var _styleModuleImportMap = {
  "../../style_module.css": {
    "wrap": "CUI-new-oversea-sign-in-dialog-wrap",
    "login-header": "CUI-new-oversea-sign-in-dialog-login-header",
    "dialog-btn-close": "CUI-new-oversea-sign-in-dialog-dialog-btn-close",
    "main": "CUI-new-oversea-sign-in-dialog-main",
    "content": "CUI-new-oversea-sign-in-dialog-content",
    "title": "CUI-new-oversea-sign-in-dialog-title",
    "fully-content": "CUI-new-oversea-sign-in-dialog-fully-content",
    "error": "CUI-new-oversea-sign-in-dialog-error",
    "text": "CUI-new-oversea-sign-in-dialog-text",
    "tab-wrap": "CUI-new-oversea-sign-in-dialog-tab-wrap",
    "tab": "CUI-new-oversea-sign-in-dialog-tab",
    "slider": "CUI-new-oversea-sign-in-dialog-slider",
    "input-error": "CUI-new-oversea-sign-in-dialog-input-error",
    "submit-error": "CUI-new-oversea-sign-in-dialog-submit-error",
    "footer": "CUI-new-oversea-sign-in-dialog-footer",
    "footer-text": "CUI-new-oversea-sign-in-dialog-footer-text",
    "text-wrap": "CUI-new-oversea-sign-in-dialog-text-wrap",
    "disable-btn": "CUI-new-oversea-sign-in-dialog-disable-btn",
    "left": "CUI-new-oversea-sign-in-dialog-left",
    "right": "CUI-new-oversea-sign-in-dialog-right",
    "center": "CUI-new-oversea-sign-in-dialog-center",
    "tab-text": "CUI-new-oversea-sign-in-dialog-tab-text",
    "switch-login": "CUI-new-oversea-sign-in-dialog-switch-login",
    "tip": "CUI-new-oversea-sign-in-dialog-tip",
    "btn-text": "CUI-new-oversea-sign-in-dialog-btn-text",
    "link": "CUI-new-oversea-sign-in-dialog-link",
    "tab-seleted": "CUI-new-oversea-sign-in-dialog-tab-seleted",
    "tab-unseleted": "CUI-new-oversea-sign-in-dialog-tab-unseleted",
    "clickable": "CUI-new-oversea-sign-in-dialog-clickable",
    "sign-in-btn": "CUI-new-oversea-sign-in-dialog-sign-in-btn",
    "switch-btn": "CUI-new-oversea-sign-in-dialog-switch-btn",
    "get-code": "CUI-new-oversea-sign-in-dialog-get-code",
    "enable": "CUI-new-oversea-sign-in-dialog-enable",
    "disable": "CUI-new-oversea-sign-in-dialog-disable",
    "text-area": "CUI-new-oversea-sign-in-dialog-text-area",
    "text-main": "CUI-new-oversea-sign-in-dialog-text-main",
    "text-second": "CUI-new-oversea-sign-in-dialog-text-second"
  }
};
var useState = __WEBPACK_IMPORTED_MODULE_4_react__.useState;
var useEffect = __WEBPACK_IMPORTED_MODULE_4_react__.useEffect;
var useCallback = __WEBPACK_IMPORTED_MODULE_4_react__.useCallback;
var Fragment = __WEBPACK_IMPORTED_MODULE_4_react__.Fragment;
var useRef = __WEBPACK_IMPORTED_MODULE_4_react__.useRef;
var emailInputEl;
var codeInputEl;
var passwordInputEl;
var VerifyEmailComponent = function VerifyEmailComponent(props) {
  var switchView = props.switchView;
  var isRequesting = props.isRequesting;
  var setIsRequesting = props.setIsRequesting;
  var setResetSuccess = props.setResetSuccess;
  var _useState = useState(true);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var disableReset = _useState2[0];
  var setDisableReset = _useState2[1];
  var _useState3 = useState(undefined);
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2);
  var error = _useState4[0];
  var setError = _useState4[1];
  var isDestroy = useRef(false);
  var isEmailErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.EMAIL;
  }, [error]);
  var isCodeErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.CODE;
  }, [error]);
  var isPasswordErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PWD;
  }, [error]);
  var _useState5 = useState(0);
  var _useState6 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState5, 2);
  var smsTimeStamp = _useState6[0];
  var setSmsTimeStamp = _useState6[1];
  var _useState7 = useState(0);
  var _useState8 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState7, 2);
  var smsCountDown = _useState8[0];
  var setSmsCountDown = _useState8[1];
  var isOtherErr = function isOtherErr() {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.OTHER;
  };
  useEffect(function () {
    isDestroy.current = false;
    return function () {
      isDestroy.current = true;
    };
  });
  useEffect(function () {
    if (isEmailErr()) {
      emailInputEl.focus();
    }
    if (isCodeErr()) {
      codeInputEl.focus();
    }
    if (isPasswordErr()) {
      passwordInputEl.focus();
    }
    var diffSecond = (Date.now() - smsTimeStamp) / 1000;
    if (diffSecond > __WEBPACK_IMPORTED_MODULE_8__def__.SMS_COUNT_DOWN) {
      return;
    }
    var remainSeconds = Math.ceil(__WEBPACK_IMPORTED_MODULE_8__def__.SMS_COUNT_DOWN - diffSecond);
    setSmsCountDown(remainSeconds);
    var timer = setInterval(function () {
      remainSeconds--;
      setSmsCountDown(remainSeconds);
      if (remainSeconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, [isEmailErr, isCodeErr, isPasswordErr, smsTimeStamp]);
  var onResetClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee() {
      var email;
      var code;
      var password;
      var result;
      return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isRequesting || disableReset)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              email = emailInputEl.value;
              code = codeInputEl.value;
              password = passwordInputEl.value;
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validateEmail(email)) {
                _context.next = 8;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/email/format"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.EMAIL
              });
              return _context.abrupt("return");
            case 8:
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validatePassword(password)) {
                _context.next = 11;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/password/format"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.PWD
              });
              return _context.abrupt("return");
            case 11:
              setIsRequesting(true);
              _context.next = 14;
              return __WEBPACK_IMPORTED_MODULE_9__auth__.handleResetPwd({
                email: email,
                code: code,
                password: password
              });
            case 14:
              result = _context.sent;
              if (isDestroy.current) {
                _context.next = 23;
                break;
              }
              setIsRequesting(false);
              if (result.isSuccess) {
                _context.next = 22;
                break;
              }
              setError(result.error);
              return _context.abrupt("return");
            case 22:
              setResetSuccess(true);
            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onResetClick() {
      return _ref.apply(this, arguments);
    };
  }();
  var onGetCodeClick = /*#__PURE__*/function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.mark(function _callee2() {
      var email;
      var result;
      return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!smsCountDown) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              setError(undefined);
              email = emailInputEl.value;
              if (__WEBPACK_IMPORTED_MODULE_10__utils__.validateEmail(email)) {
                _context2.next = 7;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/error/email/format"),
                type: __WEBPACK_IMPORTED_MODULE_9__auth__.AuthErrorType.EMAIL
              });
              return _context2.abrupt("return");
            case 7:
              _context2.next = 9;
              return __WEBPACK_IMPORTED_MODULE_9__auth__.sendEmail(email, "reset", function () {
                return setIsRequesting(false);
              });
            case 9:
              result = _context2.sent;
              if (!result.isSuccess) {
                setError(result.error);
              } else {
                setSmsTimeStamp(Date.now());
              }
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function onGetCodeClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  var updateResetBtn = function updateResetBtn() {
    setDisableReset(emailInputEl.value === "" || codeInputEl.value.length < 6 || passwordInputEl.value.length < 6);
  };
  var renderGetCode = function renderGetCode() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
      onClick: onGetCodeClick,
      "data-report-click": "用户信息-重置验证码",
      className: __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default("get-code ".concat(smsCountDown ? "disable" : "enable"), _styleModuleImportMap, {
        "autoResolveMultipleImports": true,
        "handleMissingStyleName": "throw"
      })
    }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/btn_code"), smsCountDown ? "(".concat(smsCountDown, ")") : "");
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-title"
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/reset_password")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
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
      updateResetBtn();
      if (isEmailErr()) {
        setError(undefined);
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/email"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      emailInputEl = el;
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-重置邮箱密码");
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isEmailErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    isError: isCodeErr(),
    onChange: function onChange() {
      updateResetBtn();
      if (isCodeErr()) {
        setError(undefined);
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/code"),
    autoComplete: "off",
    maxLength: 10,
    getInputEl: function getInputEl(el) {
      if (el) {
        codeInputEl = el;
      }
    },
    iconsSuffix: renderGetCode()
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isCodeErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    maxLength: 20,
    clearBtn: true,
    isError: isPasswordErr(),
    onEnterDown: onResetClick,
    onChange: function onChange() {
      updateResetBtn();
      if (isPasswordErr() && passwordInputEl.value) {
        setError(undefined);
      }
    },
    type: "new-password",
    label: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/password"),
    topLabel: __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/placeholder/password_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el;
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isPasswordErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    height: "44px",
    onClick: onResetClick,
    disable: disableReset,
    className: "CUI-new-oversea-sign-in-dialog-sign-in-btn",
    "data-report": "用户信息-重置确认"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("span", {
    className: "CUI-new-oversea-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/finish")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    height: "44px",
    width: "calc(100% - 80px)",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_8__def__.ContentView.LOGIN),
    type: "transparent",
    className: "CUI-new-oversea-sign-in-dialog-switch-login"
  }, __WEBPACK_IMPORTED_MODULE_11__i18n__.getLanguage("sign_in_dialog/back_to_login"))));
};
VerifyEmailComponent.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/