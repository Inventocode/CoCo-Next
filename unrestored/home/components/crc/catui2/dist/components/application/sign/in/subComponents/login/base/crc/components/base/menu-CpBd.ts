/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：CpBd
 */

"use strict"

/* unused harmony export MenuListShowType */
/* unused harmony export Menu */
/* harmony import */
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
import * as __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__icon__ from "../../../../../../base/icon-0d1w"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__hover_tips__ from "./hover/tips-RUE5"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__style_module_css__ from "./style.module.css-VLra"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_11__style_module_css___default from "./style.module.css-VLra"
var _styleModuleImportMap = {
  "./style_module.css": {
    "menu": "CUI-menu-menu",
    "bg-hover": "CUI-menu-bg-hover",
    "menu-item-wrap": "CUI-menu-menu-item-wrap",
    "menu-item": "CUI-menu-menu-item",
    "bar": "CUI-menu-bar",
    "tick": "CUI-menu-tick",
    "bg": "CUI-menu-bg",
    "disabled": "CUI-menu-disabled",
    "disable-hover": "CUI-menu-disable-hover",
    "checked": "CUI-menu-checked",
    "dropdown-divider": "CUI-menu-dropdown-divider",
    "sub-menu-arrow": "CUI-menu-sub-menu-arrow",
    "menu-item-icn": "CUI-menu-menu-item-icn",
    "menu-mask": "CUI-menu-menu-mask",
    "point-before-disable-hover-item": "CUI-menu-point-before-disable-hover-item",
    "checked-bar": "CUI-menu-checked-bar"
  }
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
var MenuListShowType;
(function (MenuListShowType) {
  MenuListShowType["HOVER"] = "onParentHover"
  MenuListShowType["CLICK"] = "onParentClick"
  MenuListShowType["ALWAYS"] = "always"
})(MenuListShowType || (MenuListShowType = {}))
var Menu = /*#__PURE__*/function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default(Menu, _React$Component)
  var _super = _createSuper(Menu)
  function Menu(props) {
    var _this
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default(this, Menu)
    _this = _super.call(this, props)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "menu", null)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "subMenuHideParent", undefined)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "showMenu", function () {
      if (_this.menu) {
        _this.menu.style.display = "block"
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "hideMenu", function () {
      if (_this.menu) {
        _this.menu.style.display = "none"
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "registerListeners", function (show) {
      var hideMenu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
      if (!_this.menu || !_this.menu.parentElement) {
        return
      }
      if (show === MenuListShowType.HOVER || show === "subMenu") {
        if (hideMenu) {
          _this.hideMenu()
        }
        _this.menu.parentElement.addEventListener("mouseenter", _this.showMenu)
        _this.menu.parentElement.addEventListener("mouseleave", _this.hideMenu)
      }
      if (show === MenuListShowType.CLICK) {
        if (hideMenu) {
          _this.hideMenu()
        }
        _this.menu.parentElement.addEventListener("click", _this.showMenu)
        _this.menu.parentElement.addEventListener("mouseleave", _this.hideMenu)
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "hoverReport", function (reportContent) {
      if (!reportContent) {
        return
      }
      if (_this.props.reportEvent) {
        _this.props.reportEvent(reportContent)
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "unregisterListeners", function (show) {
      var _this$menu
      if (!((_this$menu = _this.menu) !== null && _this$menu !== undefined && _this$menu.parentElement)) {
        return
      }
      if (show === MenuListShowType.HOVER || show === MenuListShowType.CLICK || show === "subMenu") {
        var _this$menu2
        var _this$menu3
        var _this$menu4
        if ((_this$menu2 = _this.menu) === null || _this$menu2 === undefined) {
          undefined
        } else {
          _this$menu2.parentElement.removeEventListener("mouseenter", _this.showMenu)
        }
        if ((_this$menu3 = _this.menu) === null || _this$menu3 === undefined) {
          undefined
        } else {
          _this$menu3.parentElement.removeEventListener("mouseleave", _this.hideMenu)
        }
        if ((_this$menu4 = _this.menu) === null || _this$menu4 === undefined) {
          undefined
        } else {
          _this$menu4.parentElement.removeEventListener("click", _this.showMenu)
        }
      }
    })
    if (_this.props.show === "subMenu") {
      _this.subMenuHideParent = _this.props.subMenuHideParent
    } else {
      _this.subMenuHideParent = _this.hideMenu
    }
    return _this
  }
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.registerListeners(this.props.show)
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.show !== this.props.show) {
        this.unregisterListeners(nextProps.show)
        this.registerListeners(nextProps.show, false)
        return false
      }
      return true
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unregisterListeners(this.props.show)
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(item) {
      var _this2 = this
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        style: {
          display: "flex"
        },
        onMouseEnter: function onMouseEnter() {
          return _this2.hoverReport(item.dataReportHover)
        },
        className: "CUI-menu-menu-item-wrap"
      }, item.checked && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
        className: "CUI-menu-checked-bar"
      }), item.icon && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
        className: "CUI-menu-menu-item-icn"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_9__icon__.Icon, {
        id: item.icon,
        size: 17
      })), item.disableHover && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("span", {
        className: "CUI-menu-point-before-disable-hover-item"
      }), item.text)
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(item, e) {
      var show = this.props.show
      if (item.disable) {
        return
      }
      if (item.onClick) {
        item.onClick(e)
      }
      if (this.props.show === "subMenu" && this.props.subMenuHideParent) {
        this.props.subMenuHideParent()
      }
      if (show !== MenuListShowType.ALWAYS && !item.disableCloseOnClick && !item.subItems) {
        this.hideMenu()
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this
      var _this$props = this.props
      var items = _this$props.items
      var position = _this$props.position
      var mask = _this$props.mask
      var show = _this$props.show
      var checkedStyle = _this$props.checkedStyle
      var isOneOption = items.length === 1 ? true : false
      var dividerNumber = 0
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        ref: function ref(_ref) {
          return _ref && (_this3.menu = _ref)
        },
        style: position || {
          top: "100%",
          left: "0"
        },
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("menu ".concat(isOneOption ? "bg-hover" : ""), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, mask && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
        className: "CUI-menu-menu-mask",
        onClick: this.hideMenu.bind(this)
      }), items.map(function (item, index) {
        if (!item) {
          return
        }
        if (item === "divider") {
          return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
            key: "index=".concat(dividerNumber++),
            className: "CUI-menu-dropdown-divider"
          })
        }
        if (item.subItems) {
          var SubMenuComponent = getSelf()
          return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
            style: item.style,
            key: index,
            onClick: _this3.onItemClick.bind(_this3, item),
            "data-report-click": !item.disable && item.dataReport ? item.dataReport : "",
            className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("menu-item ".concat(checkedStyle || "", " ").concat(item.disable || isOneOption ? "" : "".concat(item.checked ? "bg" : "", " bg-hover"), " ").concat(item.checked ? "checked" : ""), _styleModuleImportMap, {
              "autoResolveMultipleImports": true,
              "handleMissingStyleName": "throw"
            })
          }, _this3.renderMenuItem(item), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
            className: "CUI-menu-sub-menu-arrow"
          }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(SubMenuComponent, {
            show: "subMenu",
            position: {
              left: "100%",
              top: "-5px"
            },
            items: item.subItems,
            subMenuHideParent: show === MenuListShowType.ALWAYS ? undefined : _this3.subMenuHideParent
          }))
        }
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement(__WEBPACK_IMPORTED_MODULE_10__hover_tips__.HoverTips, {
          key: index,
          tips: item.hoverTips
        }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react___default.createElement("div", {
          style: item.style,
          onClick: _this3.onItemClick.bind(_this3, item),
          "data-report-click": !item.disable && item.dataReport ? item.dataReport : "",
          className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("menu-item ".concat(item.disable ? "disabled" : "", " ").concat(item.disableHover ? "disable-hover" : "", " ").concat(_this3.props.checkedStyle || "", " ").concat(item.disable || isOneOption || item.disableHover ? "" : "".concat(item.checked ? "bg" : "", " bg-hover")), _styleModuleImportMap, {
            "autoResolveMultipleImports": true,
            "handleMissingStyleName": "throw"
          })
        }, _this3.renderMenuItem(item)))
      }))
    }
  }])
  return Menu
}(__WEBPACK_IMPORTED_MODULE_8_react___default.Component)
/**
 * 用于生成子菜单，递归挂载子组件
 */
function getSelf() {
  return Menu
}

/***/
