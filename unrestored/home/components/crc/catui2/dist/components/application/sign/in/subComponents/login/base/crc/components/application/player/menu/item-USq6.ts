/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：USq6
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { PlayerMenuItem }
import * as __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__style_module_css__ from "./style.module.css-jT4U"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__style_module_css___default from "./style.module.css-jT4U"
var _styleModuleImportMap = {
  "./style_module.css": {
    "container": "CUI-player-menu-item-container",
    "normal": "CUI-player-menu-item-normal",
    "disabled": "CUI-player-menu-item-disabled",
    "active": "CUI-player-menu-item-active"
  }
}
var PlayerMenuItem = function PlayerMenuItem(props) {
  var _onClick = props.onClick
  var _props$iconSrc = props.iconSrc
  var iconSrc = _props$iconSrc === undefined ? "" : _props$iconSrc
  var iconSrcActive = props.iconSrcActive
  var iconSrcDisabled = props.iconSrcDisabled
  var disabled = props.disabled
  var active = props.active
  var children = props.children
  var displayIcon = (disabled ? iconSrcDisabled : active ? iconSrcActive : iconSrc) || iconSrc
  var styleName = disabled ? "disabled" : active ? "active" : "normal"
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    onClick: function onClick(e) {
      if (disabled) {
        return
      }
      if (_onClick) {
        _onClick(e)
      }
    },
    style: {
      backgroundImage: "url(".concat(displayIcon, ")")
    },
    className: __WEBPACK_IMPORTED_MODULE_0_babel_plugin_react_css_modules_dist_browser_getClassName___default("container ".concat(styleName), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, children)
}

/***/
