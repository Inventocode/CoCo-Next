"use strict";

/* harmony export (binding) */
export { Button };
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
import * as __WEBPACK_IMPORTED_MODULE_9__style_module_css__ from "./style.module.css-6eWy";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__style_module_css___default from "./style.module.css-6eWy";
var _styleModuleImportMap = {
  "./style_module.css": {
    "btn-wrap": "CUI-button-btn-wrap",
    "btn-tooltip": "CUI-button-btn-tooltip",
    "btn": "CUI-button-btn",
    "size-lg": "CUI-button-size-lg",
    "size-md": "CUI-button-size-md",
    "size-sm": "CUI-button-size-sm",
    "size-esm": "CUI-button-size-esm",
    "size-custom": "CUI-button-size-custom",
    "primary": "CUI-button-primary",
    "disabled": "CUI-button-disabled",
    "secondary": "CUI-button-secondary",
    "danger": "CUI-button-danger",
    "transparent": "CUI-button-transparent",
    "transparent-fb": "CUI-button-transparent-fb"
  }
};
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default)(Derived);
    var result;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false;
  }
  if (Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy === "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
var Button = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default)(Button, _React$Component);
  var _super = _createSuper(Button);
  function Button() {
    var _this;
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default)(this, Button);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "setClass", function () {
      var _this$props = _this.props;
      var _this$props$type = _this$props.type;
      var type = _this$props$type === undefined ? 'transparent' : _this$props$type;
      var _this$props$size = _this$props.size;
      var size = _this$props$size === undefined ? 'md' : _this$props$size;
      return "".concat(type, " size-").concat(size);
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "preventMouseEventWhenDisable", function (type) {
      return function (e) {
        if (_this.props.disable) {
          return;
        }
        var _this$props2 = _this.props;
        var onClick = _this$props2.onClick;
        var onContextMenu = _this$props2.onContextMenu;
        var onMouseEnter = _this$props2.onMouseEnter;
        var onMouseLeave = _this$props2.onMouseLeave;
        if (type === 'click' && onClick) {
          onClick(e);
          return;
        }
        if (type === 'context' && onContextMenu) {
          onContextMenu(e);
          return;
        }
        if (type === 'enter' && onMouseEnter) {
          onMouseEnter(e);
          return;
        }
        if (type === 'leave' && onMouseLeave) {
          onMouseLeave(e);
          return;
        }
      };
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "inserSpaceIfTwoText", function () {
      var children = _this.props.children;
      if (typeof children === 'string' && children.length === 2 && /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(children)) {
        return children.split('').join(' ');
      }
      return children;
    });
    return _this;
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default)(Button, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props;
      var bgColor = _this$props3.bgColor;
      var tooltip = _this$props3.tooltip;
      var width = _this$props3.width;
      var height = _this$props3.height;
      var dataReport = _this$props3.dataReport;
      var margin = _this$props3.margin;
      var isSelected = _this$props3.isSelected;
      var borderRadius = _this$props3.borderRadius;
      var disable = _this$props3.disable;
      var className = _this$props3.className;
      var padding = _this$props3.padding;
      var wrapClassName = _this$props3.wrapClassName;
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: (wrapClassName ? wrapClassName + " " : "") + "CUI-button-btn-wrap",
        style: {
          width: width,
          height: height,
          margin: margin,
          borderRadius: borderRadius
        }
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        id: this.props.id,
        style: {
          borderRadius: borderRadius ? borderRadius : '',
          backgroundColor: bgColor || undefined,
          padding: padding
        },
        onClick: this.preventMouseEventWhenDisable('click'),
        onMouseEnter: this.preventMouseEventWhenDisable('enter'),
        onMouseLeave: this.preventMouseEventWhenDisable('leave'),
        onContextMenu: this.preventMouseEventWhenDisable('context'),
        "data-report-click": dataReport,
        className: ("".concat(isSelected ? 'selected' : '', " ").concat(className !== null && className !== undefined ? className : '') ? "".concat(isSelected ? 'selected' : '', " ").concat(className !== null && className !== undefined ? className : '') + " " : "") + __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("btn ".concat(disable ? 'disabled' : '', " ").concat(this.setClass()), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, this.inserSpaceIfTwoText()), tooltip != null && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
        className: "CUI-button-btn-tooltip"
      }, tooltip));
    }
  }]);
  return Button;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.Component);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Button, "defaultProps", {
  type: 'transparent',
  size: 'md'
});

/***/