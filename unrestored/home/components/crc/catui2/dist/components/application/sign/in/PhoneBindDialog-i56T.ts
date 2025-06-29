"use strict";

/* unused harmony export PhoneBindDialog */
/* harmony import */
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
import * as __WEBPACK_IMPORTED_MODULE_4__subComponents_phone_bind_page__ from "./subComponents/phone/bind/page-GvA0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__i18n__ from "./i18n-FsOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__style_module_css__ from "./style.module.css-VPet";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6__style_module_css___default from "./style.module.css-VPet";
var useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState,
  useEffect = __WEBPACK_IMPORTED_MODULE_1_react__.useEffect;
var PhoneBindDialog = function PhoneBindDialog(props) {
  var _useState = useState(false),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    isRequesting = _useState2[0],
    setIsrequesting = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    smsTimeStamp = _useState4[0],
    setSmsTimeStamp = _useState4[1];
  var _useState5 = useState(props.show),
    _useState6 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var onCloseAnimationEnd = props.onCloseAnimationEnd,
    reportMethod = props.reportMethod,
    onSuccess = props.onSuccess;
  Object(__WEBPACK_IMPORTED_MODULE_5__i18n__.setLanguage)(props.language || '');
  useEffect(function () {
    setShow(props.show);
  }, [props.show]);
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
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__subComponents_phone_bind_page__.PhoneBindPageContainer, {
    smsTimeStamp: smsTimeStamp,
    setSmsTimeStamp: setSmsTimeStamp,
    isRequesting: isRequesting,
    setIsRequesting: setIsrequesting,
    reportMethod: reportMethod,
    onSuccess: onSuccess
  })));
};
PhoneBindDialog.defaultProps = {
  language: 'zh',
  onCloseAnimationEnd: function onCloseAnimationEnd() {
    return undefined;
  },
  reportMethod: function reportMethod() {
    return undefined;
  },
  onSuccess: function onSuccess() {
    return undefined;
  }
};

/***/