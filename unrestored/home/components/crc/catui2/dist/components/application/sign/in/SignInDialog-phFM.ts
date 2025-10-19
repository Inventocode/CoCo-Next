/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：phFM
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { SignInDialog };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_icon__ from "./base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_dialog__ from "./base/dialog-ymrb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__def__ from "./def-9+Hp";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__ from "./subComponents/forget/password/page-5bi6";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__ from "./subComponents/login/page-0eKj";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__ from "./subComponents/register/page-HsGv";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__i18n__ from "./i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__style_module_css__ from "./style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__style_module_css___default from "./style.module.css-VPet";
var useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState;
var useEffect = __WEBPACK_IMPORTED_MODULE_1_react__.useEffect;
var SignInDialog = function SignInDialog(props) {
  var _useState = useState(__WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var contentView = _useState2[0];
  var setContentView = _useState2[1];
  var _useState3 = useState(false);
  var _useState4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2);
  var isRequesting = _useState4[0];
  var setIsrequesting = _useState4[1];
  var _useState5 = useState(0);
  var _useState6 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState5, 2);
  var smsTimeStamp = _useState6[0];
  var setSmsTimeStamp = _useState6[1];
  var _useState7 = useState(props.show);
  var _useState8 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState7, 2);
  var show = _useState8[0];
  var setShow = _useState8[1];
  var onlyLogin = props.onlyLogin;
  var onPasswordLoginSuccess = props.onPasswordLoginSuccess;
  var onPasswordLoginFailure = props.onPasswordLoginFailure;
  var onSmsLoginSuccess = props.onSmsLoginSuccess;
  var onSmsLoginFailure = props.onSmsLoginFailure;
  var onThirdPartyLoginSuccess = props.onThirdPartyLoginSuccess;
  var onThirdPartyLoginFailure = props.onThirdPartyLoginFailure;
  var onRegisterSuccess = props.onRegisterSuccess;
  var onRegisterFailure = props.onRegisterFailure;
  var onRegisterConfirm = props.onRegisterConfirm;
  var onCloseAnimationEnd = props.onCloseAnimationEnd;
  var reportMethod = props.reportMethod;
  var disableThirdParty = props.disableThirdParty;
  __WEBPACK_IMPORTED_MODULE_8__i18n__.setLanguage(props.language || "");
  useEffect(function () {
    setShow(props.show);
  }, [props.show]);
  var switchView = function switchView(view) {
    if (reportMethod) {
      reportMethod("用户信息-".concat(contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN ? "登录" : contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER ? "注册" : "找回密码"));
    }
    setContentView(view);
  };
  var closeHandler = function closeHandler() {
    if (onCloseAnimationEnd) {
      onCloseAnimationEnd();
    } else {
      console.log("close");
    }
  };
  var closeBtnHandler = function closeBtnHandler() {
    setShow(false);
  };
  var renderHeader = function renderHeader() {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-sign-in-dialog-login-header"
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
      className: "CUI-sign-in-dialog-dialog-btn-close",
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
    className: "CUI-sign-in-dialog-wrap",
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
    className: "CUI-sign-in-dialog-main"
  }, contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.LOGIN && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__subComponents_login_page__.LoginPageContainer, {
    onlyLogin: onlyLogin || false,
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    onPasswordLoginSuccess: onPasswordLoginSuccess,
    onPasswordLoginFailure: onPasswordLoginFailure,
    onSmsLoginSuccess: onSmsLoginSuccess,
    onSmsLoginFailure: onSmsLoginFailure,
    onThirdPartyLoginSuccess: onThirdPartyLoginSuccess,
    onThirdPartyLoginFailure: onThirdPartyLoginFailure,
    reportMethod: reportMethod,
    disableThirdParty: disableThirdParty
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.REGISTER && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__subComponents_register_page__.RegisterPageContainer, {
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    onRegisterSuccess: onRegisterSuccess,
    onRegisterFailure: onRegisterFailure,
    onRegisterConfirm: onRegisterConfirm,
    reportMethod: reportMethod
  }), contentView === __WEBPACK_IMPORTED_MODULE_4__def__.ContentView.FORGET_PASSWORD && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__subComponents_forget_password_page__.ForgetPasswordPageContainer, {
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    switchView: switchView,
    reportMethod: reportMethod
  })));
};
SignInDialog.defaultProps = {
  onlyLogin: false,
  language: "zh",
  onCloseAnimationEnd: function onCloseAnimationEnd() {
    return undefined;
  },
  onPasswordLoginSuccess: function onPasswordLoginSuccess() {
    return undefined;
  },
  onSmsLoginSuccess: function onSmsLoginSuccess() {
    return undefined;
  },
  onThirdPartyLoginSuccess: function onThirdPartyLoginSuccess() {
    return undefined;
  },
  onRegisterSuccess: function onRegisterSuccess() {
    return undefined;
  },
  onPasswordLoginFailure: function onPasswordLoginFailure() {
    return undefined;
  },
  onSmsLoginFailure: function onSmsLoginFailure() {
    return undefined;
  },
  onThirdPartyLoginFailure: function onThirdPartyLoginFailure() {
    return undefined;
  },
  onRegisterFailure: function onRegisterFailure() {
    return undefined;
  },
  onRegisterConfirm: function onRegisterConfirm() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  },
  disableThirdParty: false
};

/***/