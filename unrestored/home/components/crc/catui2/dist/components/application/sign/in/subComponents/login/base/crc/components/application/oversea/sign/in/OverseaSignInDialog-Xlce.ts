"use strict";

/* unused harmony export OverseaSignInDialog */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_icon__ from "../../../../../../../../../base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_dialog__ from "../../../../../../../../../base/dialog-ymrb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__def__ from "./def-PqOj";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__ from "./subComponents/forget/password/page-18y6";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__ from "./subComponents/login/page-Ma8d";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__ from "./subComponents/register/page-0wKj";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__i18n__ from "./i18n-4U0O";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__style_module_css__ from "./style.module.css-YMKY";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__style_module_css___default from "./style.module.css-YMKY";
var useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState,
  useEffect = __WEBPACK_IMPORTED_MODULE_1_react__.useEffect;
var OverseaSignInDialog = function OverseaSignInDialog(props) {
  var _useState = useState(__WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    contentView = _useState2[0],
    setContentView = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    isRequesting = _useState4[0],
    setIsrequesting = _useState4[1];
  var _useState5 = useState(props.show),
    _useState6 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var onEmailLoginSuccess = props.onEmailLoginSuccess,
    onCloseAnimationEnd = props.onCloseAnimationEnd,
    reportMethod = props.reportMethod;
  Object(__WEBPACK_IMPORTED_MODULE_8__i18n__.setLanguage)(props.language || '');
  useEffect(function () {
    setShow(props.show);
  }, [props.show]);
  var switchView = function switchView(view) {
    if (reportMethod) {
      reportMethod('\u7528\u6237\u4FE1\u606F-'.concat(contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN ? '登录' : contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER ? '注册' : '找回密码'));
    }
    setContentView(view);
  };
  var closeHandler = function closeHandler() {
    if (onCloseAnimationEnd) {
      onCloseAnimationEnd();
    } else {
      console.log('close');
    }
  };
  var closeBtnHandler = function closeBtnHandler() {
    setShow(false);
  };
  var renderHeader = function renderHeader() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-oversea-sign-in-dialog-login-header"
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-oversea-sign-in-dialog-dialog-btn-close",
      onClick: closeBtnHandler
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__base_icon__.Icon, {
      id: "#cui_iconnor2",
      size: 10
    })));
  };
  var renderFooter = function renderFooter() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      id: "captcha_container"
    });
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__base_dialog__.Dialog, {
    centerShowUp: true,
    show: show,
    mask: true,
    maskClose: false,
    header: renderHeader,
    footer: renderFooter,
    className: "CUI-oversea-sign-in-dialog-wrap",
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
    className: "CUI-oversea-sign-in-dialog-main"
  }, contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__.LoginPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    onEmailLoginSuccess: onEmailLoginSuccess,
    reportMethod: reportMethod
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__.RegisterPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    reportMethod: reportMethod,
    handleClose: closeHandler
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.FORGET_PASSWORD && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__.ForgetPasswordPageContainer, {
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    reportMethod: reportMethod,
    handleClose: closeHandler
  })));
};
OverseaSignInDialog.defaultProps = {
  language: 'zh',
  onCloseAnimationEnd: function onCloseAnimationEnd() {
    return undefined;
  },
  onEmailLoginSuccess: function onEmailLoginSuccess() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  }
};

/***/