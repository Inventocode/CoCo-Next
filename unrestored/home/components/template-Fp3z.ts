"use strict";

/* harmony export (binding) */
export { CommonToastView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default from "react-css-modules";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__Alert__ from "./Alert-GlfS";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var styles = require("./unnamed-nlA+");
var timeId = void 0;
var CommonToastView = function (_React$Component) {
  _inherits(CommonToastView, _React$Component);
  function CommonToastView(props) {
    _classCallCheck(this, CommonToastView);
    var _this = _possibleConstructorReturn(this, (CommonToastView.__proto__ || Object.getPrototypeOf(CommonToastView)).call(this, props));
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }
  _createClass(CommonToastView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var onClose = this.props.commonToastInfo.onClose;
      onClose && onClose();
      this.props.setCommonToastAction({
        visible: false
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;
      var _nextProps$commonToas = nextProps.commonToastInfo,
        visible = _nextProps$commonToas.visible,
        _nextProps$commonToas2 = _nextProps$commonToas.duration,
        duration = _nextProps$commonToas2 === undefined ? 2000 : _nextProps$commonToas2;
      if (visible && duration) {
        timeId && window.clearTimeout(timeId);
        timeId = setTimeout(function () {
          _this2.handleClose();
        }, duration);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$commonToastInf = this.props.commonToastInfo,
        visible = _props$commonToastInf.visible,
        type = _props$commonToastInf.type,
        message = _props$commonToastInf.message,
        showCloseIcon = _props$commonToastInf.showCloseIcon,
        showPrefixIcon = _props$commonToastInf.showPrefixIcon;
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__Alert__.default, {
        visible: visible,
        type: type,
        message: message,
        onClose: this.handleClose,
        showPrefixIcon: showPrefixIcon,
        styleName: 'cocoToast',
        showCloseIcon: showCloseIcon
      });
    }
  }]);
  return CommonToastView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
CommonToastView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], CommonToastView);

/***/