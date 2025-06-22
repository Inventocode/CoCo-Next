"use strict";

/* harmony export (binding) */
export { ByPasswordComponent };
/* harmony import */
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
import * as __WEBPACK_IMPORTED_MODULE_4__base_button__ from "./button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_input__ from "./base/input-qXMC";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_spinner__ from "./base/spinner-WvBG";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__auth__ from "./auth-819E";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__i18n__ from "./i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__style_module_css__ from "./style/module/css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__style_module_css___default from "./style/module/css-VPet";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__agreement__ from "./agreement-q2lc";
var useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState,
  useEffect = __WEBPACK_IMPORTED_MODULE_3_react__.useEffect,
  useCallback = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback,
  Fragment = __WEBPACK_IMPORTED_MODULE_3_react__.Fragment,
  useRef = __WEBPACK_IMPORTED_MODULE_3_react__.useRef;
var phoneInputEl;
var passwordInputEl;
var clearPasswordInput;
var ByPasswordComponent = function ByPasswordComponent(props) {
  var isRequesting = props.isRequesting,
    setIsRequesting = props.setIsRequesting,
    handleAgreementChange = props.handleAgreementChange;
  var _useState = useState(true),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    disableLogin = _useState2[0],
    setDisableLogin = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var isDestory = useRef(false);
  var _useState5 = useState(false),
    _useState6 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState5, 2),
    agreementChecked = _useState6[0],
    setAgreementChecked = _useState6[1];
  var isPhoneErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PHONE;
  }, [error]);
  var isPasswordErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD;
  }, [error]);
  var isOtherErr = useCallback(function () {
    return error && error.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.OTHER;
  }, [error]);
  useEffect(function () {
    isDestory.current = false;
    return function () {
      isDestory.current = true;
    };
  });
  useEffect(function () {
    updateLoginBtn();
    handleAgreementChange && handleAgreementChange(agreementChecked);
  }, [agreementChecked]);
  useEffect(function () {
    if (isPhoneErr()) {
      phoneInputEl.focus();
    }
    if (isPasswordErr() || error && error.msg === Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/other/acc_or_pwd')) {
      clearPasswordInput && clearPasswordInput();
    }
  }, [error, isPasswordErr, isPhoneErr]);
  var getCaptchaFallback = function getCaptchaFallback() {
    setIsRequesting(false);
  };
  var onLoginClick = /*#__PURE__*/function () {
    var _ref = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      var username, password, result;
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
              username = phoneInputEl.value;
              password = passwordInputEl.value;
              if (!(password.length < 6 || password.length > 20)) {
                _context.next = 7;
                break;
              }
              setError({
                type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD,
                msg: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password/format')
              });
              return _context.abrupt("return");
            case 7:
              setIsRequesting(true); // 密码登录的时候没有做前端校验是因为不知道用户用的是什么登录
              _context.prev = 8;
              _context.next = 11;
              return Object(__WEBPACK_IMPORTED_MODULE_7__auth__.handleLoginByPassword)({
                username: username,
                password: password,
                getCaptchaFallback: getCaptchaFallback
              });
            case 11:
              result = _context.sent;
              if (isDestory.current) {
                _context.next = 20;
                break;
              }
              setIsRequesting(false);
              if (result.isSuccess) {
                _context.next = 19;
                break;
              }
              setError(result.error);
              throw result.error;
            case 19:
              props.onPasswordLoginSuccess && props.onPasswordLoginSuccess(result.authInfo);
            case 20:
              _context.next = 25;
              break;
            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](8);
              props.onPasswordLoginFailure && props.onPasswordLoginFailure({
                source: 'pwd-login',
                isSuccess: false,
                error: _context.t0
              });
            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 22]]);
    }));
    return function onLoginClick() {
      return _ref.apply(this, arguments);
    };
  }();
  var updateLoginBtn = function updateLoginBtn() {
    // 密码至少为6位
    setDisableLogin(phoneInputEl.value === '' || passwordInputEl.value === '' || !agreementChecked);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    autofocus: true,
    clearBtn: true,
    inputStyle: {
      fontSize: 18,
      width: '352px',
      height: '44px'
    },
    maxLength: 100,
    isError: isPhoneErr(),
    onChange: function onChange() {
      updateLoginBtn();
      isPhoneErr() && setError(undefined);
    },
    label: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/placeholder/username'),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      phoneInputEl = el;
      phoneInputEl.focus();
    },
    onBlur: function onBlur() {
      props.reportMethod && props.reportMethod('用户信息-输入账号');
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isPhoneErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    clearBtn: true,
    inputStyle: {
      fontSize: 18,
      width: '352px',
      height: '44px'
    },
    onEnterDown: onLoginClick,
    isError: isPasswordErr(),
    onChange: function onChange() {
      updateLoginBtn();
      isPasswordErr() && passwordInputEl.value && setError(undefined);
    },
    type: "password",
    label: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/placeholder/password'),
    autoComplete: "on",
    getInputEl: function getInputEl(el) {
      passwordInputEl = el;
    },
    getClearInputFn: function getClearInputFn(fn) {
      return clearPasswordInput = fn;
    },
    onBlur: function onBlur() {
      props.reportMethod && props.reportMethod('用户信息-输入账号密码');
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isPasswordErr() && error && error.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-submit-error"
  }, isOtherErr() && error && error.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_button__.Button, {
    height: "44px",
    onClick: onLoginClick,
    disable: disableLogin,
    className: "CUI-sign-in-dialog-sign-in-btn",
    "data-report": "\u7528\u6237\u4FE1\u606F-\u5BC6\u7801\u767B\u5F55"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-sign-in-dialog-btn-text"
  }, Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/login'))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_10__agreement__.AgreementContainer, {
    onCheckChange: setAgreementChecked,
    style: {
      marginTop: '12px'
    }
  }));
};
ByPasswordComponent.defaultProps = {
  onPasswordLoginSuccess: function onPasswordLoginSuccess() {
    return undefined;
  },
  onPasswordLoginFailure: function onPasswordLoginFailure() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/