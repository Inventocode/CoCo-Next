"use strict";

/* harmony export (binding) */
export { Spinner };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__themes__ from "../../../../../../../themes-P22Q";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils__ from "./utils-DnTb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "./style.module.css-cHub";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "./style.module.css-cHub";
var Spinner = function Spinner(props) {
  var stroke = props.stroke;
  var themeColor = props.themeColor;
  var strokeWidth = props.strokeWidth;
  var size = props.size;
  var margin = props.margin;
  var strokeColor = stroke || 'white';
  var currentTheme = Object(__WEBPACK_IMPORTED_MODULE_2__themes__.getTheme)();
  if (themeColor) {
    if (typeof themeColor === 'string') {
      strokeColor = Object(__WEBPACK_IMPORTED_MODULE_2__themes__.getColor)(currentTheme, Object(__WEBPACK_IMPORTED_MODULE_3__utils__.getNewThemeColorName)(themeColor), '16');
    } else {
      var _themeColor = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(themeColor, 2);
      var dark = _themeColor[0];
      var light = _themeColor[1];
      if (currentTheme === __WEBPACK_IMPORTED_MODULE_2__themes__.ThemeTypeEnum.Yellow) {
        strokeColor = Object(__WEBPACK_IMPORTED_MODULE_2__themes__.getColor)(currentTheme, Object(__WEBPACK_IMPORTED_MODULE_3__utils__.getNewThemeColorName)(light), '16');
      } else {
        strokeColor = Object(__WEBPACK_IMPORTED_MODULE_2__themes__.getColor)(currentTheme, Object(__WEBPACK_IMPORTED_MODULE_3__utils__.getNewThemeColorName)(dark), '16');
      }
    } // 如果不存在主题，或者不存在对应色值，默认为橙色主题 0 号色
    strokeColor = "#".concat(strokeColor);
  }
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("svg", {
    className: "CUI-spinner-spinner",
    viewBox: "0 0 50 50",
    style: {
      width: size || 50,
      margin: margin
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("circle", {
    className: "CUI-spinner-path",
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    strokeWidth: strokeWidth ? strokeWidth.toString() : '6',
    stroke: strokeColor
  }));
};
Spinner.defaultProps = {
  stroke: undefined,
  strokeWidth: 6,
  size: 50,
  themeColor: undefined,
  // 主题色号 - 数组即[深色色号, 浅色色号]
  margin: '0'
};

/***/