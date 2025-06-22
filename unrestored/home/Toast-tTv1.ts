"use strict";

/* harmony export (binding) */
export { Toast };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__crc_catui2__ from "./crc/catui2/index-TOtg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "./style/module/css-psOT";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "./style/module/css-psOT";
var _styleModuleImportMap = {
  "./style_module.css": {
    "wrapper": "CUI-toast-wrapper",
    "dark": "CUI-toast-dark",
    "light": "CUI-toast-light",
    "container": "CUI-toast-container",
    "show": "CUI-toast-show",
    "closing": "CUI-toast-closing",
    "close": "CUI-toast-close",
    "icon": "CUI-toast-icon",
    "content": "CUI-toast-content",
    "btn": "CUI-toast-btn",
    "btn-close": "CUI-toast-btn-close",
    "btn-cancel": "CUI-toast-btn-cancel",
    "btn-retry": "CUI-toast-btn-retry",
    "btn-ignore": "CUI-toast-btn-ignore",
    "open": "CUI-toast-open"
  }
};
var DEFAULT_TIMEOUT = 3000;
var Toast = function Toast(props) {
  var content = props.content,
    onClose = props.onClose,
    duration = props.duration;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)(false),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    isClosing = _useState2[0],
    setIsClosing = _useState2[1];
  var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)(),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    clickType = _useState4[0],
    setClickType = _useState4[1];
  var toastRef = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useRef)(null);
  var timer = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useRef)();
  Object(__WEBPACK_IMPORTED_MODULE_2_react__.useEffect)(function () {
    return props.getToastDOM && props.getToastDOM(toastRef.current);
  });
  Object(__WEBPACK_IMPORTED_MODULE_2_react__.useEffect)(function () {
    var toastEl = toastRef.current;
    if (duration !== 'persist') {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(function () {
        setIsClosing(true);
        timer.current = 0;
      }, duration !== null && duration !== void 0 ? duration : DEFAULT_TIMEOUT);
    }
    return function () {
      toastEl && onClose && toastEl.removeEventListener('animationend', onClose);
    };
  }, [duration]);
  Object(__WEBPACK_IMPORTED_MODULE_2_react__.useEffect)(function () {
    var toastEl = toastRef.current;
    isClosing && toastEl && onClose && toastEl.addEventListener('animationend', onClose);
  }, [isClosing, onClose]);
  var handleClickBtn = function handleClickBtn(type) {
    return function () {
      setClickType(type);
      var onCancel = props.onCancel,
        onRetry = props.onRetry,
        onIgnore = props.onIgnore;
      switch (clickType) {
        case 'retry':
          {
            onRetry && onRetry();
            break;
          }
        case 'ignore':
          {
            onIgnore && onIgnore();
            break;
          }
        case 'cancel':
          {
            onCancel && onCancel();
            break;
          }
        default:
          break;
      }
      setIsClosing(true);
    };
  };
  var getIconId = function getIconId() {
    if (props.type === 'info') {
      return '#icon_chaxun';
    }
    if (props.type === 'error') {
      return '#iconiconshibai';
    }
    if (props.type === 'warning') {
      return '#iconalert_warningx';
    }
    return '#iconiconchenggong';
  };
  var renderIcon = function renderIcon() {
    if (props.type === 'custom' && !props.icon) {
      return null;
    }
    if (props.type === 'custom') {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        className: "CUI-toast-icon"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.isValidElement(props.icon) ? props.icon : typeof props.icon === 'function' ? props.icon() : null);
    }
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
      className: "CUI-toast-icon"
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__crc_catui2__.Icon, {
      size: 20,
      id: getIconId()
    }));
  };
  var renderBtn = function renderBtn() {
    if (!props.btn) {
      return null;
    }
    if (typeof props.btn === 'function') {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        className: "CUI-toast-btn"
      }, props.btn());
    }
    if (/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.isValidElement(props.btn)) {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        className: "CUI-toast-btn"
      }, props.btn);
    }
    if (Array.isArray(props.btn)) {
      var _props$btn, _props$btn2, _props$btn3, _props$btn4;
      var btns = [];
      if ((_props$btn = props.btn) !== null && _props$btn !== void 0 && _props$btn.includes('retry')) {
        var retry = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", {
          key: "retry",
          className: "CUI-toast-btn-retry",
          onClick: handleClickBtn('retry')
        }, "\u91CD\u8BD5");
        btns.push(retry);
      }
      if ((_props$btn2 = props.btn) !== null && _props$btn2 !== void 0 && _props$btn2.includes('ignore')) {
        var ignore = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", {
          key: "ignore",
          className: "CUI-toast-btn-ignore",
          onClick: handleClickBtn('ignore')
        }, "\u5FFD\u7565");
        btns.push(ignore);
      }
      if ((_props$btn3 = props.btn) !== null && _props$btn3 !== void 0 && _props$btn3.includes('cancel')) {
        var cancel = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", {
          key: "cancel",
          className: "CUI-toast-btn-cancel",
          onClick: handleClickBtn('cancel')
        }, "\u53D6\u6D88");
        btns.push(cancel);
      }
      if ((_props$btn4 = props.btn) !== null && _props$btn4 !== void 0 && _props$btn4.includes('close')) {
        var close = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", {
          key: "close",
          className: "CUI-toast-btn-close",
          onClick: handleClickBtn('close')
        }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__crc_catui2__.Icon, {
          size: 16,
          id: "#cui_iconnor2"
        }));
        btns.push(close);
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        className: "CUI-toast-btn"
      }, btns);
    }
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    ref: toastRef,
    style: {
      padding: props.type !== 'custom' || props.icon ? '9px 32px' : '9px 24px',
      minHeight: props.type !== 'custom' || props.icon ? 48 : 40
    },
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("container ".concat(props.colorType, " ").concat(isClosing ? 'closing' : ''), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, renderIcon(), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-toast-content"
  }, content), renderBtn());
};
Toast.defaultProps = {
  colorType: 'light'
};

/***/