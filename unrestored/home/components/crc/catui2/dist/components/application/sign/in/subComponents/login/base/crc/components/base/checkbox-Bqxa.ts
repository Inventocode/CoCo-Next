/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Bqxa
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { Checkbox };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "./style.module.css-SzTw";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "./style.module.css-SzTw";
var _styleModuleImportMap = {
  "./style_module.css": {
    "container": "CUI-checkbox-container",
    "checked": "CUI-checkbox-checked",
    "icon": "CUI-checkbox-icon"
  }
};
var Checkbox = function Checkbox(props) {
  var children = props.children;
  var checked = props.checked;
  var onChange = props.onChange;
  var style = props.style;
  var _useState = __WEBPACK_IMPORTED_MODULE_2_react__.useState(false);
  var _useState2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2);
  var stateChecked = _useState2[0];
  var setStateChecked = _useState2[1];
  var isUncontrolled = checked === undefined;
  var isActualChecked = isUncontrolled ? stateChecked : checked;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    onClick: function onClick() {
      var nextCheckStatus = !isActualChecked;
      if (isUncontrolled) {
        setStateChecked(nextCheckStatus);
      }
      if (onChange) {
        onChange(nextCheckStatus);
      }
    },
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("container ".concat(isActualChecked ? "checked" : ""), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("icon  ".concat(isActualChecked ? "checked" : ""), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }));
};

/***/