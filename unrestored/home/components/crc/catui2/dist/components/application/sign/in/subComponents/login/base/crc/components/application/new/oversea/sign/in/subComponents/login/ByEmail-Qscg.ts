/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Qscg
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { ByEmailComponent };
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
import * as __WEBPACK_IMPORTED_MODULE_4__utils__ from "./utils-cJBm";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_button__ from "../../../../../../../../../../../../base/button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_input__ from "../../../../../../../../../../../register/base/input-qXMC";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__base_spinner__ from "../../../../../../../../../../../register/base/spinner-WvBG";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__auth__ from "../../auth-DKlr";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__i18n__ from "../../i18n-K_kJ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__style_module_css__ from "../../style.module.css-idDZ";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_10__style_module_css___default from "../../style.module.css-idDZ";
var useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState;
var useEffect = __WEBPACK_IMPORTED_MODULE_3_react__.useEffect;
var useCallback = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback;
var Fragment = __WEBPACK_IMPORTED_MODULE_3_react__.Fragment;
var useRef = __WEBPACK_IMPORTED_MODULE_3_react__.useRef;
var emailInputEl;
var passwordInputEl;
var ByEmailComponent = function ByEmailComponent(props) {
  var isRequesting = props.isRequesting;
  var setIsRequesting = props.setIsRequesting;
  var _useState = useState(true);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var disableLogin = _useState2[0];
  var setDisableLogin = _useState2[1];
  var _useState3 = useState(undefined);
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2);
  var error = _useState4[0];
  var setError = _useState4[1];
  var isDestroy = useRef(false);
  var isEmailErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL;
  }, [error]);
  var isPasswordErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.PWD;
  }, [error]);
  var isOtherErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.OTHER;
  }, [error]);
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
  }, [error, isEmailErr]);
  var onLoginClick = /*#__PURE__*/function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      var email;
      var password;
      var result;
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isRequesting || disableLogin)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              email = emailInputEl.value;
              password = passwordInputEl.value;
              if (__WEBPACK_IMPORTED_MODULE_4__utils__.validateEmail(email)) {
                _context.next = 7;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/error/email/format"),
                type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.EMAIL
              });
              return _context.abrupt("return");
            case 7:
              ;
              if (__WEBPACK_IMPORTED_MODULE_4__utils__.validatePassword(password)) {
                _context.next = 11;
                break;
              }
              setError({
                msg: __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/error/password/format"),
                type: __WEBPACK_IMPORTED_MODULE_8__auth__.AuthErrorType.PWD
              });
              return _context.abrupt("return");
            case 11:
              ;
              setIsRequesting(true);
              _context.next = 15;
              return __WEBPACK_IMPORTED_MODULE_8__auth__.handleLoginByEmail({
                email: email,
                password: password
              });
            case 15:
              result = _context.sent;
              if (!isDestroy.current) {
                setIsRequesting(false);
                if (!result.isSuccess) {
                  setError(result.error);
                } else {
                  if (props.onEmailLoginSuccess) {
                    props.onEmailLoginSuccess(result.authInfo);
                  }
                }
              }
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onLoginClick() {
      return _ref.apply(this, arguments);
    };
  }();
  var updateLoginBtn = function updateLoginBtn() {
    setDisableLogin(emailInputEl.value.length === 0 || passwordInputEl.value.length < 6);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
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
      updateLoginBtn();
      if (isEmailErr()) {
        setError(undefined);
      }
    },
    label: __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/placeholder/email"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      emailInputEl = el;
      emailInputEl.focus();
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-输入账号");
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isEmailErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_input__.Input, {
    clearBtn: true,
    inputStyle: {
      fontSize: 18,
      width: "352px",
      height: "44px"
    },
    maxLength: 20,
    onEnterDown: onLoginClick,
    isError: isPasswordErr(),
    onChange: function onChange() {
      updateLoginBtn();
      if (isPasswordErr() && passwordInputEl.value) {
        setError(undefined);
      }
    },
    type: "password",
    label: __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/placeholder/password"),
    topLabel: __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/placeholder/password_tip"),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el;
    },
    onBlur: function onBlur() {
      if (props.reportMethod) {
        props.reportMethod("用户信息-输入密码");
      }
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-input-error"
  }, isPasswordErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-new-oversea-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    height: "44px",
    onClick: onLoginClick,
    disable: disableLogin,
    className: "CUI-new-oversea-sign-in-dialog-sign-in-btn",
    "data-report": "用户信息-邮箱登录"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-new-oversea-sign-in-dialog-btn-text"
  }, __WEBPACK_IMPORTED_MODULE_9__i18n__.getLanguage("sign_in_dialog/login"))));
};
ByEmailComponent.defaultProps = {
  onEmailLoginSuccess: function onEmailLoginSuccess() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/