/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：My5k__part-1
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate } from "./template-My5k__part-0"
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx"
import * as __WEBPACK_IMPORTED_MODULE_4__IconFont__ from "./IconFont-zVV7"
import * as __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ from "react-router-dom"
import * as __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ from "react-css-modules"
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
import * as styles from "./styles-HR1v"
var MenuView = function (_React$Component) {
  _inherits(MenuView, _React$Component)
  function MenuView(props) {
    _classCallCheck(this, MenuView)
    return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, props))
  }
  _createClass(MenuView, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "handleOpenDiscoverUrl",
      value: function handleOpenDiscoverUrl() {
        var _config = __WEBPACK_IMPORTED_MODULE_5__cfg__.config()
        var discoverUrl = _config.discoverUrl
        window.open(discoverUrl, Date.now().toString())
      }
    }, {
      key: "render_navLink",
      value: function render_navLink(url, content, icon) {
        var current_url = "/" + location.pathname.split("/").pop()
        var active = current_url === url
        // 主页
        if (url === "/home") {
          active = current_url === "/" || current_url === "/home"
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.NavLink, {
          to: url,
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("menuItem", active && "active")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
          type: icon,
          styleName: "menuIcon"
        }), content)
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "menu"
        }, this.render_navLink("/home", "主页", "icon-home"), this.render_navLink("/work", "我的作品", "icon-work"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "menuItem",
          onClick: this.handleOpenDiscoverUrl
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "discover"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
          type: "icon-discover",
          styleName: "menuIcon"
        }), "发现"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__IconFont__.default, {
          type: "icon-discover-arrow",
          styleName: "menuArrow"
        }))))
      }
    }
  ])
  return MenuView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
MenuView = __decorate([
  __WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, {
    allowMultiple: true
  })
], MenuView)

/***/
export { MenuView }
