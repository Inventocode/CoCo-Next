"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_classnames__ from "classnames";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_classnames___default from "classnames";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_dom__ from "react-dom";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_dom___default from "react-dom";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__IconFont__ from "../components/IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_scss__ from "../style/scss-A8ak";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_scss___default from "../style/scss-A8ak";
var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var DIALOG_CONTAINER_ID = '_cocoDialogContainer';
var Dialog = function Dialog(props) {
  var className = props.className,
    style = props.style,
    visible = props.visible,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === undefined ? false : _props$maskClosable,
    _props$mask = props.mask,
    mask = _props$mask === undefined ? true : _props$mask,
    onClose = props.onClose,
    children = props.children,
    _props$showCloseButto = props.showCloseButton,
    showCloseButton = _props$showCloseButto === undefined ? true : _props$showCloseButto,
    _props$withPortal = props.withPortal,
    withPortal = _props$withPortal === undefined ? false : _props$withPortal,
    title = props.title,
    footer = props.footer;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  // 创建一个放置 dialog 的容器

  var container = document.getElementById(DIALOG_CONTAINER_ID);
  if (!container) {
    container = document.createElement('div');
    container.id = DIALOG_CONTAINER_ID;
    document.body.appendChild(container);
  }
  var handleClickClose = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useCallback)(function () {
    onClose && onClose();
  }, [onClose]);
  var handleMaskClick = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useCallback)(function () {
    maskClosable && handleClickClose();
  }, [handleClickClose, maskClosable]);
  Object(__WEBPACK_IMPORTED_MODULE_1_react__.useEffect)(function () {
    if (visible) {
      setDisplay(true);
    }
  }, [visible]);
  var animationEnd = function animationEnd() {
    if (!visible) {
      setDisplay(false);
    }
  };
  var dialog = __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    "data-html2canvas-ignore": "true",
    tabIndex: -1,
    className: __WEBPACK_IMPORTED_MODULE_0_classnames___default('coco-dialog', className),
    style: Object.assign({
      display: visible ? 'block' : 'none'
    }, style)
  }, mask && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: visible ? 'coco-dialog-mask' : __WEBPACK_IMPORTED_MODULE_0_classnames___default('coco-dialog-mask', 'hidden'),
    onClick: handleMaskClick
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-dialog-scroll"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: visible ? __WEBPACK_IMPORTED_MODULE_0_classnames___default('coco-dialog-wrapper', 'show') : __WEBPACK_IMPORTED_MODULE_0_classnames___default('coco-dialog-wrapper', 'hidden'),
    onAnimationEnd: animationEnd
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: title && showCloseButton ? 'coco-dialog-title' : ''
  }, title && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", null, title), showCloseButton && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("span", {
    className: "coco-dialog-close",
    onClick: handleClickClose
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
    type: "icon-close"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-dialog-content"
  }, children), footer && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-dialog-footer"
  }, footer))));
  if (withPortal) {
    return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.createPortal(dialog, container);
  } else {
    return dialog;
  }
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react__.memo)(Dialog);
/***/