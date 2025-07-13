"use strict";

/* harmony export (binding) */
export { Input };
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
import * as __WEBPACK_IMPORTED_MODULE_9__icon__ from "../../../base/icon-0d1w";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__style_module_css__ from "./style.module.css-TB4U";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_10__style_module_css___default from "./style.module.css-TB4U";
var _styleModuleImportMap = {
  "./style_module.css": {
    "wrap": "CUI-input-wrap",
    "limit": "CUI-input-limit",
    "focus": "CUI-input-focus",
    "error": "CUI-input-error",
    "disabled": "CUI-input-disabled",
    "clear-btn": "CUI-input-clear-btn",
    "hint": "CUI-input-hint",
    "type-i": "CUI-input-type-i",
    "size-lg": "CUI-input-size-lg",
    "size-md": "CUI-input-size-md",
    "size-sm": "CUI-input-size-sm",
    "type-ta": "CUI-input-type-ta",
    "common-input": "CUI-input-common-input",
    "icns": "CUI-input-icns",
    "input-section": "CUI-input-input-section",
    "label-type": "CUI-input-label-type",
    "common-textarea": "CUI-input-common-textarea",
    "prefix": "CUI-input-prefix",
    "suffix": "CUI-input-suffix",
    "vertical-line": "CUI-input-vertical-line",
    "label": "CUI-input-label",
    "label-backdrop": "CUI-input-label-backdrop",
    "lint-wrap": "CUI-input-lint-wrap"
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
var HINT_PADDING_OFFSET_Y = 12;
var Input = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default)(Input, _React$Component);
  var _super = _createSuper(Input);
  function Input(props) {
    var _this$props$value$toS;
    var _this$props$value;
    var _this;
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default)(this, Input);
    _this = _super.call(this, props);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "input", null);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "hint", null);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "hintTimer", null);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "mousePos", {
      left: 0,
      top: 0
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "valueBeforeFocus", '');
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "inputWrap", null);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "isOnComposition", false);
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "valueBeforeChineseInput", '');
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "clearInput", function () {
      if (_this.props.label) {
        _this.setState({
          showLabel: true
        });
      }
      if (!_this.input) {
        return;
      }
      fireChangeEvent(_this.input, ''); // 异步保持 focus，否则会丢失。
      setTimeout(function () {
        var _this$input;
        return (_this$input = _this.input) === null || _this$input === void 0 ? void 0 : _this$input.focus();
      });
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "renderIcons", function (type) {
      var icons = type === 'su' ? _this.props.iconsSuffix : _this.props.iconsPrefix;
      if (typeof icons === 'function') {
        return icons();
      }
      if (Array.isArray(icons) && isIconType(icons)) {
        return _this.__renderIcons(icons);
      }
      if (/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.isValidElement(icons)) {
        return icons;
      }
      return null;
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "__renderIcons", function (icons) {
      return icons.map(function (icon, index) {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_8_react___default.Fragment, {
          key: index
        }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
          onClick: function onClick(event) {
            var _icon$onClick;
            return (_icon$onClick = icon.onClick) === null || _icon$onClick === void 0 ? void 0 : _icon$onClick.call(icon, event);
          },
          style: {
            cursor: icon.onClick ? 'pointer' : ''
          }
        }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_9__icon__.Icon, {
          id: icon.img,
          size: icon.size || 16,
          rotate: icon.rotate
        })), index + 1 !== icons.length && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
          className: "CUI-input-vertical-line"
        }));
      });
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "renderLintAlert", function () {
      var lintAlert = _this.props.lintAlert;
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-lint-wrap"
      }, typeof lintAlert === 'function' ? lintAlert() : lintAlert);
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onPointerEnterAction", function () {
      if (!_this.hint || !_this.props.tooltip) {
        return;
      }
      _this.hintTimer = setTimeout(function () {
        if (!_this.hint) {
          return;
        }
        var _this$mousePos = _this.mousePos;
        var left = _this$mousePos.left;
        var top = _this$mousePos.top;
        _this.hint.style.left = "".concat(left, "px");
        _this.hint.style.top = "".concat(top, "px");
        _this.hint.style.visibility = 'visible';
      }, 1000);
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onPointerMoveAction", function (e) {
      if (_this.props.hintYDirection === 'up') {
        var _this$hint;
        var height = (_this$hint = _this.hint) === null || _this$hint === void 0 ? void 0 : _this$hint.getBoundingClientRect().height;
        _this.mousePos = {
          left: e.clientX,
          top: e.clientY - HINT_PADDING_OFFSET_Y - (height !== null && height !== void 0 ? height : 0)
        };
      } else {
        _this.mousePos = {
          left: e.clientX,
          top: e.clientY + HINT_PADDING_OFFSET_Y
        };
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onPointerLeaveAction", function () {
      if (_this.hintTimer) {
        clearTimeout(_this.hintTimer);
      }
      if (_this.hint) {
        _this.hint.setAttribute('style', 'visibility:hidden');
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onChange", function (e) {
      var value = e.target.value;
      _this.setState({
        _value: value
      });
      if (_this.isOnComposition) {
        return;
      }
      var _this$props = _this.props;
      var onChange = _this$props.onChange;
      var lintTrigger = _this$props.lintTrigger;
      var clearBtn = _this$props.clearBtn;
      var lintState = true;
      if (lintTrigger === 'change' && value) {
        lintState = _this.lintValue(value);
      }
      _this.setState({
        lintState: lintState ? 'pass' : 'error',
        showClearBtn: clearBtn ? value !== '' : false
      });
      if (onChange) {
        onChange(e, lintState);
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onFocus", function (e) {
      _this.valueBeforeFocus = e.target.value;
      _this.setState({
        inputStatus: 'focus',
        showLabel: true
      });
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onBlur", function (e) {
      _this.setState({
        inputStatus: '',
        showLabel: e.target.value === ''
      });
      if (_this.props.lintTrigger === 'blur') {
        _this.lintValue(e.target.value);
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(e, _this.valueBeforeFocus);
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "onComposition", function (e) {
      e.persist();
      if (e.type === 'compositionstart') {
        _this.isOnComposition = true; // 由于中文输入会导致state._value长度失控，因此存储输入中文之前的input长度，在中文输入结束后更新
        _this.valueBeforeChineseInput = _this.state._value;
      }
      if (e.type === 'compositionend') {
        // compositionend 在 change 之后触发，这就贼TM恶心
        _this.isOnComposition = false;
        _this.valueBeforeChineseInput = '';
        _this.onChange(e);
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "getLabelTO", function () {
      var _this$props2 = _this.props;
      var inputStyle = _this$props2.inputStyle;
      var size = _this$props2.size;
      var offsetY = (inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.height) && parseInt(inputStyle.height) || size === 'lg' && 44 || size === 'md' && 36 || size === 'sm' && 28 || 36; // * 2 + 12 较为居中
      return "28px ".concat(-offsetY * 2 + 12, "px");
    });
    Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default)(_this), "lintValue", function (value) {
      var linter = _this.props.linter;
      if (linter && !linter(value)) {
        var _this$inputWrap;
        // 设置 lint 的目的主要就是为了这个动画
        if ((_this$inputWrap = _this.inputWrap) === null || _this$inputWrap === void 0) {
          void 0;
        } else {
          _this$inputWrap.animate([{
            backgroundColor: 'rgba(255,239,237,0)',
            boxShadow: '0 0 0 1px rgba(255,124,107,0)'
          }, {
            backgroundColor: 'rgba(255,239,237,1)',
            boxShadow: '0 0 0 1px rgba(255,124,107,1)'
          }, {
            backgroundColor: 'rgba(255,239,237,0)',
            boxShadow: '0 0 0 1px rgba(255,124,107,0)'
          }, {
            backgroundColor: 'rgba(255,239,237,1)',
            boxShadow: '0 0 0 1px rgba(255,124,107,1)'
          }, {
            backgroundColor: 'rgba(255,239,237,0)',
            boxShadow: '0 0 0 1px rgba(255,124,107,0)'
          }], {
            // timing options
            duration: 750,
            easing: 'cubic-bezier(0.2, 0, 0.2, 1)'
          });
        }
        _this.setState({
          lintState: 'error'
        });
        return false;
      }
      return true;
    });
    _this.state = {
      _value: (_this$props$value$toS = (_this$props$value = _this.props.value) === null || _this$props$value === void 0 ? void 0 : _this$props$value.toString()) !== null && _this$props$value$toS !== void 0 ? _this$props$value$toS : '',
      showClearBtn: false,
      showLabel: _this.props.value ? false : true,
      inputStatus: '',
      lintState: 'pass'
    };
    return _this;
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default)(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props;
      var getInputEl = _this$props3.getInputEl;
      var getClearInputFn = _this$props3.getClearInputFn;
      if (getInputEl) {
        getInputEl(this.input);
      }
      if (getClearInputFn) {
        getClearInputFn(this.clearInput);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;
      if (this.isOnComposition) {
        return;
      }
      if (value !== undefined && (prevProps.value !== value || this.state._value !== value.toString())) {
        this.setState({
          _value: value.toString()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props;
      var placeholder = _this$props4.placeholder;
      var onEnterDown = _this$props4.onEnterDown;
      var autofocus = _this$props4.autofocus;
      var clearBtn = _this$props4.clearBtn;
      var inputStyle = _this$props4.inputStyle;
      var disable = _this$props4.disable;
      var type = _this$props4.type;
      var autoComplete = _this$props4.autoComplete;
      var maxLength = _this$props4.maxLength;
      var label = _this$props4.label;
      var topLabel = _this$props4.topLabel;
      var isError = _this$props4.isError;
      var className = _this$props4.className;
      var size = _this$props4.size;
      var placeholderSize = _this$props4.placeholderSize;
      var iconsSuffix = _this$props4.iconsSuffix;
      var align = _this$props4.align;
      var _this$state = this.state;
      var inputStatus = _this$state.inputStatus;
      var lintState = _this$state.lintState;
      var _value = _this$state._value;
      var hintPrefix = this.props.valuePrefix ? "".concat(this.props.valuePrefix) : '';
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_8_react___default.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        tabIndex: -1,
        style: inputStyle,
        onPointerEnter: this.onPointerEnterAction,
        onPointerLeave: this.onPointerLeaveAction,
        onPointerMove: this.onPointerMoveAction,
        ref: function ref(el) {
          return _this2.inputWrap = el;
        },
        className: (className ? className + " " : "") + __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("wrap ".concat(type === 'textarea' ? 'type-ta' : 'type-i', " size-").concat(size, " ").concat(disable ? 'disabled' : '', " ").concat(inputStatus, " ").concat(isError || lintState === 'error' ? 'error' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, this.props.iconsPrefix ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-icns CUI-input-prefix"
      }, this.renderIcons('pre')) : null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-input-section"
      }, type === 'textarea' ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("textarea", {
        autoFocus: autofocus,
        maxLength: maxLength,
        ref: function ref(_ref) {
          return _ref && (_this2.input = _ref);
        },
        placeholder: label ? undefined : placeholder,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onCompositionStart: this.onComposition,
        onCompositionEnd: this.onComposition,
        value: _value,
        readOnly: disable,
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("common-textarea ".concat(disable ? 'disabled' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("input", {
        style: {
          textAlign: align
        },
        autoFocus: autofocus,
        maxLength: maxLength,
        ref: function ref(_ref2) {
          return _ref2 && (_this2.input = _ref2);
        },
        placeholder: label ? undefined : placeholder,
        onKeyDown: function onKeyDown(e) {
          return e.keyCode === 13 && onEnterDown && onEnterDown(e);
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onCompositionStart: this.onComposition,
        onCompositionEnd: this.onComposition,
        value: _value,
        readOnly: disable,
        type: type,
        autoComplete: autoComplete,
        size: placeholderSize,
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("common-input ".concat(disable ? 'disabled' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      })), (clearBtn || iconsSuffix) && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-icns CUI-input-suffix"
      }, clearBtn && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
        style: this.state.showClearBtn ? {
          opacity: 1
        } : {
          opacity: 0,
          pointerEvents: 'none'
        },
        className: "CUI-input-clear-btn",
        onClick: this.clearInput
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_9__icon__.Icon, {
        id: "#cui_iconnor2",
        size: 12
      })), this.renderIcons('su')), label !== undefined && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        style: {
          display: this.state.showLabel ? 'block' : 'none',
          transformOrigin: this.getLabelTO()
        },
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("label ".concat(inputStatus, " ").concat(isError || lintState === 'error' ? 'error' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-label-backdrop"
      }), inputStatus && topLabel ? topLabel : label), _value && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-hint",
        ref: function ref(_ref3) {
          return _ref3 && (_this2.hint = _ref3);
        },
        style: {
          visibility: 'hidden'
        }
      }, hintPrefix, _value, this.props.valueSuffix), type === 'textarea' && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-input-limit"
      }, this.valueBeforeChineseInput ? this.valueBeforeChineseInput : _value.length, "/", maxLength)), lintState === 'error' && this.renderLintAlert());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if (props.value !== undefined && props.value.toString().length > 0) {
        return {
          showClearBtn: true
        };
      }
      return null;
    }
  }]);
  return Input;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.Component);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Input, "defaultProps", {
  size: 'md',
  type: 'text',
  lintTrigger: 'blur',
  align: 'left',
  maxLength: 500
});
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Input, "SearchInput", void 0);
Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default)(Input, "UnderlineInput", void 0);
function isIconType(icons) {
  var flag = false;
  for (var i = 0; i < icons.length; i++) {
    if (icons[i].img) {
      flag = true;
      break;
    }
  }
  return flag;
} // github.com/facebook/react/issues/11488
function fireChangeEvent(input, value) {
  var _valueTracker;
  // 如果值没变化，就不触发 change，即使触发了也没用，会被忽略掉的。
  if (input.value === value) {
    return;
  }
  var lastValue = input.value;
  input.value = value;
  var evt = new Event('change', {
    bubbles: true
  });
  if (input === null || input === void 0) {
    void 0;
  } else {
    if ((_valueTracker = input._valueTracker) === null || _valueTracker === void 0) {
      void 0;
    } else {
      _valueTracker.setValue(lastValue);
    }
  }
  input.dispatchEvent(evt);
}

/***/