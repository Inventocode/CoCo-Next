"use strict";

/* harmony export (binding) */
export { SetPasswordComponent };
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
import * as __WEBPACK_IMPORTED_MODULE_10__utils__ from "./utils-rEd4";
var useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState,
  useEffect = __WEBPACK_IMPORTED_MODULE_3_react__.useEffect,
  useCallback = __WEBPACK_IMPORTED_MODULE_3_react__.useCallback,
  Fragment = __WEBPACK_IMPORTED_MODULE_3_react__.Fragment,
  useRef = __WEBPACK_IMPORTED_MODULE_3_react__.useRef;
var passwordInputEl;
var confirmPasswordInputEl;
var SetPasswordComponent = function SetPasswordComponent(props) {
  var ticket = props.ticket,
    isRequesting = props.isRequesting,
    setIsRequesting = props.setIsRequesting,
    setResetSuccess = props.setResetSuccess;
  var _useState = useState(true),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    disableSubmit = _useState2[0],
    setDisableSubmit = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    pwdError = _useState4[0],
    setPwdError = _useState4[1];
  var _useState5 = useState(undefined),
    _useState6 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState5, 2),
    cpwdError = _useState6[0],
    setCpwdError = _useState6[1];
  var _useState7 = useState(undefined),
    _useState8 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState7, 2),
    otherError = _useState8[0],
    setotherError = _useState8[1];
  var isDestory = useRef(false);
  var isPasswordCodeErr = useCallback(function () {
    return pwdError && pwdError.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD;
  }, [pwdError]);
  var isConfirmPasswordCodeErr = useCallback(function () {
    return cpwdError && cpwdError.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD_CONFIRM;
  }, [cpwdError]);
  var isOtherErr = function isOtherErr() {
    return otherError && otherError.type === __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.OTHER;
  };
  useEffect(function () {
    isDestory.current = false;
    return function () {
      isDestory.current = true;
    };
  });
  var onCompleteClick = /*#__PURE__*/function () {
    var _ref = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      var password, passwordConfirm, result;
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isRequesting || disableSubmit)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              password = passwordInputEl.value;
              passwordConfirm = confirmPasswordInputEl.value;
              setPwdError(undefined);
              setCpwdError(undefined);
              setotherError(undefined);
              if (!(password !== passwordConfirm)) {
                _context.next = 10;
                break;
              }
              setCpwdError({
                msg: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password_confirm/not_same'),
                type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD_CONFIRM
              });
              return _context.abrupt("return");
            case 10:
              if (Object(__WEBPACK_IMPORTED_MODULE_10__utils__.validatePassword)(password)) {
                _context.next = 13;
                break;
              }
              setPwdError({
                type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD,
                msg: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password/format')
              });
              return _context.abrupt("return");
            case 13:
              _context.next = 15;
              return Object(__WEBPACK_IMPORTED_MODULE_7__auth__.handleResetPwd)({
                ticket: ticket,
                password: password,
                passwordConfirm: passwordConfirm
              });
            case 15:
              result = _context.sent;
              if (!isDestory.current) {
                setIsRequesting(false);
                if (!result.isSuccess) {
                  setotherError(result.error);
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
    return function onCompleteClick() {
      return _ref.apply(this, arguments);
    };
  }();
  var updateSubmitBtn = function updateSubmitBtn() {
    // 两个框都有输入的情况下就可以点击按钮
    var cLength = confirmPasswordInputEl.value.length;
    var pLength = passwordInputEl.value.length;
    setDisableSubmit(cLength === 0 || pLength === 0);
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-tip"
  }, Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/reset_password_tip')), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    autofocus: true,
    inputStyle: {
      fontSize: 18,
      width: '352px',
      height: '44px'
    },
    clearBtn: true,
    onEnterDown: onCompleteClick,
    isError: isPasswordCodeErr(),
    type: "password",
    label: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password/format'),
    getInputEl: function getInputEl(el) {
      passwordInputEl = el;
    },
    onBlur: function onBlur() {
      if ((passwordInputEl.value.length < 6 || passwordInputEl.value.length > 20) && passwordInputEl.value.length > 0) {
        setPwdError({
          type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD,
          msg: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password/format')
        });
      } else {
        setPwdError(undefined);
      }
      props.reportMethod && props.reportMethod('用户信息-重置设置密码');
    },
    onChange: function onChange() {
      updateSubmitBtn();
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isPasswordCodeErr() && pwdError && pwdError.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__base_input__.Input, {
    clearBtn: true,
    inputStyle: {
      fontSize: 18,
      width: '352px',
      height: '44px'
    },
    isError: isConfirmPasswordCodeErr(),
    type: "password",
    label: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/placeholder/password_confirm'),
    getInputEl: function getInputEl(el) {
      confirmPasswordInputEl = el;
    },
    onBlur: function onBlur() {
      if (passwordInputEl.value !== confirmPasswordInputEl.value) {
        setCpwdError({
          type: __WEBPACK_IMPORTED_MODULE_7__auth__.AuthErrorType.PWD_CONFIRM,
          msg: Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/error/password_confirm/not_same')
        });
      } else {
        setCpwdError(undefined);
      }
      props.reportMethod && props.reportMethod('用户信息-重置设置密码');
    },
    onChange: function onChange() {
      updateSubmitBtn();
    }
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-input-error"
  }, isConfirmPasswordCodeErr() && cpwdError && cpwdError.msg), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("div", {
    className: "CUI-sign-in-dialog-submit-error"
  }, isOtherErr() && otherError && otherError.msg)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__base_button__.Button, {
    height: "44px",
    onClick: onCompleteClick,
    disable: disableSubmit,
    className: "CUI-sign-in-dialog-sign-in-btn",
    "data-report": "\u7528\u6237\u4FE1\u606F-\u91CD\u7F6E\u5B8C\u6210"
  }, isRequesting ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__base_spinner__.Spinner, {
    size: 18,
    themeColor: "10"
  }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react__.createElement("span", {
    className: "CUI-sign-in-dialog-btn-text"
  }, Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.getLanguage)('sign_in_dialog/finish'))));
};
SetPasswordComponent.defaultProps = {
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/