/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：0d1w
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { Icon }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__ from "@babel/runtime/helpers/esm/inherits"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ from "@babel/runtime/helpers/esm/possibleConstructorReturn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ from "@babel/runtime/helpers/esm/getPrototypeOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__style_module_css__ from "./style.module.css-HUO5"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8__style_module_css___default from "./style.module.css-HUO5"
var __HAS_IMPORT_ICON__ = false;
(function () {
  if (!__HAS_IMPORT_ICON__ && typeof window !== "undefined") {
    import("./unnamed-pzzL")
    __HAS_IMPORT_ICON__ = true
  }
})()
var _styleModuleImportMap = {
  "./style_module.css": {
    "icon-wrap": "CUI-icon-icon-wrap",
    "auto-rotate": "CUI-icon-auto-rotate",
    "rotate360": "CUI-icon-rotate360",
    "icon-dropdown-wrap": "CUI-icon-icon-dropdown-wrap"
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    }
    keys.push.apply(keys, symbols)
  }
  return keys
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {}
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default(target, key, source[key])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
      }
    }
  }
  return target
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()
  return function _createSuperInternal() {
    var Super = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default(Derived)
    var result
    if (hasNativeReflectConstruct) {
      var NewTarget = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default(this).constructor
      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }
    return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__.default(this, result)
  }
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false
  }
  if (Reflect.construct.sham) {
    return false
  }
  if (typeof Proxy === "function") {
    return true
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}
var Icon = /*#__PURE__*/function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default(Icon, _React$Component)
  var _super = _createSuper(Icon)
  function Icon(props) {
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__.default(this, Icon)
    return _super.call(this, props)
  }
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__.default(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props
      var _this$props$id = _this$props.id
      var className = _this$props.className
      var size = _this$props.size
      var color = _this$props.color
      var margin = _this$props.margin
      var rotate = _this$props.rotate
      var autoRotate = _this$props.autoRotate
      var dropdown = _this$props.dropdown
      var _this$props$customSty = _this$props.customStyles
      var customStyles = _this$props$customSty === undefined ? {} : _this$props$customSty
      var style = _objectSpread({
        fontSize: "".concat(size, "px")
      }, customStyles)
      if (color) {
        style.color = color
      }
      if (rotate) {
        style.transform = "rotate(".concat(rotate, "deg)")
      }
      if (margin) {
        style.margin = margin
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6_babel_plugin_react_css_modules_dist_browser_getClassName___default(dropdown ? " icon-dropdown-wrap" : " icon-wrap", _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, _this$props$id !== "" && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.createElement("svg", {
        style: style,
        "aria-hidden": "true",
        className: (true ? "icon ".concat(className ? className : "") + " " : "") + __WEBPACK_IMPORTED_MODULE_6_babel_plugin_react_css_modules_dist_browser_getClassName___default(autoRotate ? "auto-rotate" : "", _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.createElement("use", {
        xlinkHref: _this$props$id
      })))
    }
  }])
  return Icon
}(__WEBPACK_IMPORTED_MODULE_7_react___default.Component)

/***/
