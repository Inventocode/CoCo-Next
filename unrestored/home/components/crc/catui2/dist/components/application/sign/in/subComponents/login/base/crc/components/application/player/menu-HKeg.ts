"use strict";

/* unused harmony export PlayerMenu */
/* harmony import */
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
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "./style.module.css-3pun";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "./style.module.css-3pun";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__crc_catui2__ from "../../../catui2-TOtg";
var _styleModuleImportMap = {
  "./style_module.css": {
    "menu": "CUI-player-menu-menu",
    "button": "CUI-player-menu-button",
    "button-on": "CUI-player-menu-button-on",
    "tools": "CUI-player-menu-tools",
    "item": "CUI-player-menu-item",
    "item-on": "CUI-player-menu-item-on",
    "menu-wrapper": "CUI-player-menu-menu-wrapper"
  }
};
var PlayerMenu = function PlayerMenu(props) {
  var initMenuOn = props.initMenuOn;
  var children = props.children;
  var style = props.style;
  var menuHeight = props.menuHeight ? props.menuHeight : 44;
  var itemHeight = props.itemHeight ? props.itemHeight : 36;
  var spaceBettwen = props.spaceBettwen ? props.spaceBettwen : 20;
  var circleHeight = itemHeight;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)(initMenuOn);
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var isMenuOn = _useState2[0];
  var setMenuOn = _useState2[1];
  var legalChildNum = 0;
  var TOTALCHILDNUM = __WEBPACK_IMPORTED_MODULE_2_react___default.Children.count(children);
  var TRANSITIONDURATION = 0.5;
  var menuItems = __WEBPACK_IMPORTED_MODULE_2_react___default.Children.map(children, function (child, index) {
    if (!__WEBPACK_IMPORTED_MODULE_2_react___default.isValidElement(child)) {
      return;
    }
    if (child.type !== __WEBPACK_IMPORTED_MODULE_4__crc_catui2__.PlayerMenuItem) {
      console.error(['catUI2:The Menu component doesn\'t accept other element as a child.', 'Consider providing a MenuItem instead.'].join('\n'));
    } else {
      legalChildNum++;
      return child.type === __WEBPACK_IMPORTED_MODULE_4__crc_catui2__.PlayerMenuItem && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        key: index,
        style: {
          width: "".concat(circleHeight, "px"),
          height: "".concat(circleHeight, "px"),
          marginRight: "".concat(isMenuOn ? spaceBettwen + menuHeight - circleHeight : -circleHeight / 2, "px"),
          transition: "".concat(isMenuOn ? 1.2 * (TRANSITIONDURATION * (index + 1)) / TOTALCHILDNUM : 1.4 * TRANSITIONDURATION - TRANSITIONDURATION * (index + 1) / TOTALCHILDNUM, "s ").concat(isMenuOn ? 0.3 * TRANSITIONDURATION * (index + 1) / TOTALCHILDNUM : 0.3 * TRANSITIONDURATION * (1 - (index + 1)) / TOTALCHILDNUM, "s opacity ease-in-out, margin-right ").concat(0.8 * TRANSITIONDURATION, "s ").concat(0.1 * TRANSITIONDURATION, "s ease-in-out")
        },
        className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("item ".concat(isMenuOn ? 'item-on' : ''), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, child);
    }
  });
  var menuWidth = (legalChildNum + 1) * (menuHeight + spaceBettwen) - spaceBettwen;
  var toolsWidth = menuWidth - circleHeight - (menuHeight - circleHeight) / 2;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-menu-menu-wrapper",
    style: style
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-menu-menu",
    style: {
      top: '0',
      right: '0',
      height: "".concat(menuHeight, "px"),
      width: "".concat(isMenuOn ? (legalChildNum + 1) * (menuHeight + spaceBettwen) - spaceBettwen : menuHeight, "px"),
      borderRadius: "".concat(menuHeight / 2, "px"),
      transition: "".concat(TRANSITIONDURATION, "s width ease-in-out")
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    style: {
      width: "".concat(circleHeight, "px"),
      height: "".concat(circleHeight, "px"),
      top: "".concat((menuHeight - circleHeight) / 2, "px"),
      right: "".concat((menuHeight - circleHeight) / 2, "px")
    },
    onClick: function onClick() {
      setMenuOn(!isMenuOn);
    },
    className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("button ".concat(isMenuOn ? 'button-on' : ''), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("i", null)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-menu-tools",
    style: {
      width: "".concat(toolsWidth, "px"),
      marginLeft: "".concat((menuHeight - circleHeight) / 2, "px")
    }
  }, menuItems)));
};
PlayerMenu.defaultProps = {
  initMenuOn: false,
  menuHeight: 44,
  spaceBettwen: 20
};

/***/