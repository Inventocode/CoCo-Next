/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：MRah
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { RegisterContainer };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__def__ from "../../def-PqOj";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_input__ from "../../../../../../../../../../register/base/input-qXMC";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_button__ from "../../../../../../../../../../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__base_spinner__ from "../../../../../../../../../../register/base/spinner-WvBG";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__auth__ from "../../auth-U9Jd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__utils__ from "./utils-im4M";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__i18n__ from "../../i18n-4U0O";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__style_module_css__ from "../../style.module.css-YMKY";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_11__style_module_css___default from "../../style.module.css-YMKY";
var _this = this;
var emailInputEl;
var passwordInputEl;
var useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState;
var useEffect = __WEBPACK_IMPORTED_MODULE_3_react__.useEffect;
var useCallback = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback;
var useRef = __WEBPACK_IMPORTED_MODULE_3_react__.useRef;
var RegisterContainer = function RegisterContainer(props) {
  var isRequesting = props.isRequesting;
  var setIsRequesting = props.setIsRequesting;
  var switchView = props.switchView;
  var setResetSuccess = props.setResetSuccess;
  var _useState = useState(true);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var disableRegister = _useState2[0];
  var setDisableRegister = _useState2[1];
  var _useState3 = useState(undefined);
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2);
  var error = _useState4[0];
  var setError = _useState4[1];
  var isDestory = useRef(false);
  var isEmailErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL;
  }, [error]);
  var isPasswordCodeErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.PWD;
  }, [error]);
  var isOtherErr = function isOtherErr() {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.OTHER;
  };
  useEffect(function () {
    isDestory.current = false;
    return function () {
      isDestory.current = true;
    };
  });
  var updateRegisterBtn = function updateRegisterBtn() {
    setDisableRegister(emailInputEl.value === "" || passwordInputEl.value.length < 6);
  };
  var onRegisterClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      var email;
      var password;
      var result;
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!disableRegister) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              setError(undefined);
              email = emailInputEl.value;
              password = passwordInputEl.value;
              if (__WEBPACK_IMPORTED_MODULE_9__utils__.validateEmail(email)) {
                _context.next = 8;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/email/format"),
                type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL
              });
              return _context.abrupt("return");
            case 8:
              ;
              if (__WEBPACK_IMPORTED_MODULE_9__utils__.validatePassword(password)) {
                _context.next = 12;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/password/format"),
                type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.PWD
              });
              return _context.abrupt("return");
            case 12:
              setIsRequesting(true);
              _context.next = 15;
              return __WEBPACK_IMPORTED_MODULE_8__auth__.handleRegisterByEmail({
                email: email,
                password: password
              });
            case 15:
              result = _context.sent;
              if (!isDestory.current) {
                setIsRequesting(false);
                if (!result.isSuccess) {
                  setError(result.error);
                } else {
                  setResetSuccess(true);
                }
              }
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onRegisterClick() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_react__.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    autofocus: true,
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    clearBtn: true,
    maxLength: 100,
    isError: isEmailErr(),
    onChange: function onChange() {
      updateRegisterBtn();
      if (isEmailErr()) {
        setError(undefined);
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/placeholder/email"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      emailInputEl = el;
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-邮箱");
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-input-error"
  }, isEmailErr() && error && error.msg, error && error.msg === __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/phone/registered") && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-link",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN)
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/login_now"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    clearBtn: true,
    onEnterDown: onRegisterClick,
    isError: isPasswordCodeErr(),
    onChange: function onChange() {
      updateRegisterBtn();
      if (isPasswordCodeErr() && passwordInputEl.value) {
        setError(undefined);
      }
    },
    type: "password",
    label: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/placeholder/password_n_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el;
    },
    onBlur: function onBlur() {
      if ((passwordInputEl.value.length < 6 || passwordInputEl.value.length > 20) && passwordInputEl.value.length > 0) {
        setError({
          type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.PWD,
          msg: __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/error/password/format")
        });
      }
      if (props.reportMethod) {
        props.reportMethod("用户信息-注册设置密码");
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-input-error"
  }, isPasswordCodeErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_button__.Button, {
    height: "44px",
    width: "100%",
    className: "CUI-oversea-sign-in-dialog-sign-in-btn",
    disable: disableRegister,
    onClick: onRegisterClick,
    "data-report": "用户信息-注册完成"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-oversea-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/register")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-oversea-sign-in-dialog-divide-line"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("b", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", null, "•"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("b", null)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_button__.Button, {
    height: "44px",
    width: "calc(100% - 80px)",
    onClick: switchView.bind(_this, __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN),
    type: "secondary"
  }, __WEBPACK_IMPORTED_MODULE_10__i18n__.getLanguage("sign_in_dialog/already_has_account"))));
};
RegisterContainer.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/