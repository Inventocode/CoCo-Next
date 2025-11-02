/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：RUE5
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { HoverTips }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ from "@babel/runtime/helpers/esm/assertThisInitialized"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__ from "@babel/runtime/helpers/esm/inherits"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ from "@babel/runtime/helpers/esm/possibleConstructorReturn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ from "@babel/runtime/helpers/esm/getPrototypeOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__index_css__ from "./index/css-+aGI"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8__index_css___default from "./index/css-+aGI"
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
var HoverTips = /*#__PURE__*/function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default(HoverTips, _React$Component)
  var _super = _createSuper(HoverTips)
  function HoverTips(props) {
    var _this
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default(this, HoverTips)
    _this = _super.call(this, props)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "currentMousePosition", {
      x: 0,
      y: 0
    })
    _this.state = {
      showTips: false
    }
    return _this
  }
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default(HoverTips, [{
    key: "startHover",
    value: function startHover(e) {
      this.currentMousePosition.x = e.clientX
      this.currentMousePosition.y = e.clientY
      this.setState({
        showTips: true
      })
    }
  }, {
    key: "stopHover",
    value: function stopHover() {
      this.setState({
        showTips: false
      })
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.tips ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.createElement("div", {
        onMouseEnter: this.startHover.bind(this),
        onMouseLeave: this.stopHover.bind(this)
      }, this.props.children, this.state.showTips && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.createElement("span", {
        className: "CUI-hover-tips-hover-text",
        style: {
          top: this.currentMousePosition.y + 30,
          left: this.currentMousePosition.x
        }
      }, this.props.tips)) : this.props.children
    }
  }])
  return HoverTips
}(__WEBPACK_IMPORTED_MODULE_7_react___default.Component)

/***/
