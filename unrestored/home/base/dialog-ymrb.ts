"use strict";

/* harmony export (binding) */
export { Dialog };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ from "@babel/runtime/helpers/esm/assertThisInitialized";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__ from "@babel/runtime/helpers/esm/inherits";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ from "@babel/runtime/helpers/esm/possibleConstructorReturn";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ from "@babel/runtime/helpers/esm/getPrototypeOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9_react_dom__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9_react_dom___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__button__ from "../button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__icon__ from "../icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__OptionsDialog__ from "../OptionsDialog-4q1J";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_13__WarningDialog__ from "../WarningDialog-p9_9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_14__InfoDialog__ from "../InfoDialog-bbgg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_15__style_module_css__ from "../style/module/css-vF4h";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_15__style_module_css___default from "../style/module/css-vF4h";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var _styleModuleImportMap = {
  "./style_module.css": {
    "wrapper": "CUI-dialog-wrapper",
    "position": "CUI-dialog-position",
    "confirm": "CUI-dialog-confirm",
    "content": "CUI-dialog-content",
    "open-dialog": "CUI-dialog-open-dialog",
    "showDialog": "CUI-dialog-showDialog",
    "close-dialog": "CUI-dialog-close-dialog",
    "closeDialog": "CUI-dialog-closeDialog",
    "header": "CUI-dialog-header",
    "body": "CUI-dialog-body",
    "footer": "CUI-dialog-footer",
    "mask": "CUI-dialog-mask",
    "btn-close": "CUI-dialog-btn-close",
    "showMask": "CUI-dialog-showMask"
  }
};
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
var openPos = null;
var hasInitMouseEvnet = false;
function initMouseListener() {
  if (typeof document !== 'undefined') {
    document.body.addEventListener('click', function (e) {
      openPos = {
        x: e.clientX,
        y: e.clientY
      };
    }, true);
    hasInitMouseEvnet = true;
  }
}
var Dialog = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default)(Dialog, _React$Component);
  var _super = _createSuper(Dialog);
  function Dialog(props) {
    var _this;
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default)(this, Dialog);
    _this = _super.call(this, props);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "hadInitShowUp", false);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "animationPos", {
      x: 0,
      y: 0
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "contentRef", void 0);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "triggerBtn", '');
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "closeDialog", function () {
      // 避免触发多次关闭逻辑
      if (!_this.state._show) {
        return;
      }
      if (!_this.props.closeAnimation) {
        _this.onAnimationEnd(true);
        _this.setState({
          mask: false,
          animationType: null
        });
        return;
      }
      _this.closeAnimation();
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "closeAnimation", function () {
      _this.setState({
        mask: false,
        animationType: 'close'
      });
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onAnimationEnd", function (notAnimation) {
      var animationType = _this.state.animationType;
      if (!notAnimation && !animationType) {
        return;
      }
      if (animationType === 'open') {
        _this.props.onOpen && _this.props.onOpen();
      } else {
        // close
        // 只触发默认按钮上的 onOk、onCancel事件，因为有可能默认按钮和自定义组件混用
        switch (_this.triggerBtn) {
          case 'ok':
            _this.props.onOk && _this.props.onOk();
            break;
          case 'cancel':
            _this.props.onCancel && _this.props.onCancel();
            break;
        }
        _this.props.onClose && _this.props.onClose();
      }
      _this.triggerBtn = '';
      _this.setState({
        _show: animationType === 'open',
        animationType: null
      });
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "handleOk", function () {
      _this.triggerBtn = 'ok';
      _this.closeDialog();
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "handleCancel", function () {
      _this.triggerBtn = 'cancel';
      _this.closeDialog();
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "renderCloseBtn", function () {
      var _ref, _ref2;
      var closeBtn = _this.props.closeBtn;
      if (/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.isValidElement(closeBtn)) {
        return closeBtn;
      }
      if (!closeBtn) {
        return null;
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        style: closeBtn === true ? undefined : closeBtn.style,
        className: ((closeBtn === true ? '' : closeBtn.classname) ? (closeBtn === true ? '' : closeBtn.classname) + " " : "") + "CUI-dialog-btn-close",
        onClick: _this.handleCancel
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_11__icon__.Icon, {
        id: closeBtn === true ? '#cui_iconnor2' : (_ref = closeBtn.id) !== null && _ref !== void 0 ? _ref : '#cui_iconnor2',
        size: closeBtn === true ? 12 : (_ref2 = closeBtn.size) !== null && _ref2 !== void 0 ? _ref2 : 12
      }));
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "renderHeader", function () {
      var header = _this.props.header; // null 渲染 null
      if (header === null) {
        return _this.renderCloseBtn();
      }
      if (typeof header === 'function') {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
          className: "CUI-dialog-header"
        }, header(), _this.renderCloseBtn());
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-dialog-header"
      }, _this.props.header, _this.renderCloseBtn());
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "renderFooter", function () {
      var _this$props = _this.props,
        footer = _this$props.footer,
        cancelText = _this$props.cancelText,
        okText = _this$props.okText; // null 渲染 null
      if (footer === null) {
        return null;
      }
      if (typeof footer === 'function') {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
          className: "CUI-dialog-footer"
        }, footer());
      } // 过滤 undefined，如果是 undefined 渲染默认 footer
      if (footer !== undefined) {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
          className: "CUI-dialog-footer"
        }, footer);
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-dialog-footer"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_10__button__.Button, {
        type: "secondary",
        width: 112,
        height: 36,
        className: "btn-cancel",
        onClick: _this.handleCancel
      }, cancelText ? cancelText : '取消'), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_10__button__.Button, {
        type: "primary",
        width: 112,
        height: 36,
        className: "btn-ok",
        margin: "0 0 0 20px",
        onClick: _this.handleOk
      }, okText ? okText : '确定'));
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "getTOPos", function () {
      var _this$props$top = _this.props.top,
        top = _this$props$top === void 0 ? '20%' : _this$props$top; // 不规则值，返回 undefined，居中出现
      if (top === 'center' || !/px$/.test(top) && !/%$/.test(top)) {
        return;
      }
      var offsetY = 0;
      if (/px$/.test(top)) {
        offsetY = Number(top.replace('px', ''));
        return "".concat(_this.animationPos.x, "px ").concat(_this.animationPos.y - offsetY, "px");
      }
      if (/%$/.test(top)) {
        offsetY = Number(top.replace('%', '')) / 100;
        return "".concat(_this.animationPos.x, "px ").concat(_this.animationPos.y - window.innerHeight * offsetY, "px");
      }
    });
    _this.state = {
      _show: false,
      mask: !!props.mask,
      animationType: null
    };
    !hasInitMouseEvnet && initMouseListener();
    return _this;
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default)(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.show) {
        this.setState({
          _show: true,
          animationType: 'open'
        });
        this.hadInitShowUp = true;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var curShow = this.props.show; // 从隐藏到显示
      if (prevProps.show !== curShow && curShow) {
        openPos && (this.animationPos = {
          x: openPos.x,
          y: openPos.y
        });
        this.setState({
          _show: true,
          mask: true,
          animationType: 'open'
        });
        this.hadInitShowUp = true;
      } // 从显示到隐藏
      if (prevProps.show !== curShow && !curShow) {
        // 触发动画后再更改 _show 为 false，隐藏掉 dialog
        this.closeDialog();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.show && this.closeDialog();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _ref3;
      if (!this.hadInitShowUp) {
        return null;
      }
      var _this$state = this.state,
        mask = _this$state.mask,
        animationType = _this$state.animationType,
        _show = _this$state._show;
      var _this$props2 = this.props,
        children = _this$props2.children,
        maskClose = _this$props2.maskClose,
        centerShowUp = _this$props2.centerShowUp,
        contentStyle = _this$props2.contentStyle,
        top = _this$props2.top,
        container = _this$props2.container,
        className = _this$props2.className,
        wrapClassName = _this$props2.wrapClassName,
        layout = _this$props2.layout;
      return typeof window !== 'undefined' ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react_dom___default.createPortal(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        style: {
          display: _show ? 'flex' : 'none',
          alignItems: top === 'center' ? 'center' : undefined
        },
        className: (wrapClassName ? wrapClassName + " " : "") + "CUI-dialog-wrapper",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, mask && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-dialog-mask",
        onClick: maskClose ? this.handleCancel : undefined
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        style: {
          top: top === 'center' ? undefined : top !== null && top !== void 0 ? top : '20%',
          transformOrigin: centerShowUp ? undefined : this.getTOPos()
        },
        onAnimationEnd: function onAnimationEnd() {
          return _this2.onAnimationEnd(false);
        },
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("position ".concat(animationType === 'open' ? 'open-dialog ' : '', " ").concat(animationType === 'close' ? ' close-dialog ' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        ref: function ref(el) {
          return _this2.contentRef = el;
        },
        className: (className ? className + " " : "") + "CUI-dialog-content",
        style: _objectSpread({
          minHeight: layout === 'custom' ? 0 : undefined,
          minWidth: layout === 'custom' ? 0 : undefined
        }, contentStyle),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, this.renderHeader(), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-dialog-body",
        style: layout === 'custom' ? {
          padding: '0'
        } : undefined
      }, children), this.renderFooter()))), (_ref3 = isDOM(container) ? container : container === null || container === void 0 ? void 0 : container.current) !== null && _ref3 !== void 0 ? _ref3 : document.body) : null;
    }
  }]);
  return Dialog;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.Component);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Dialog, "defaultProps", {
  mask: true,
  maskClose: true,
  closeBtn: false,
  closeAnimation: true,
  centerShowUp: false
});
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Dialog, "options", __WEBPACK_IMPORTED_MODULE_12__OptionsDialog__.createOptions);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Dialog, "warning", __WEBPACK_IMPORTED_MODULE_13__WarningDialog__.createWarning);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Dialog, "info", __WEBPACK_IMPORTED_MODULE_14__InfoDialog__.createInfo);
function isDOM(elm) {
  if (!elm) return false;
  return elm.current === undefined;
}

/***/