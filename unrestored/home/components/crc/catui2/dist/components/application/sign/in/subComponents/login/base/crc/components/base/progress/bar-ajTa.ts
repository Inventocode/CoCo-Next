/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ajTa
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { ProgressBar };
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__themes__ from "../../../../../../../../../../../themes-P22Q";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__style_module_css__ from "./style.module.css-mqD4";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__style_module_css___default from "./style.module.css-mqD4"; // TODO: enhance:color, type
var getLegalnumber = function getLegalnumber(num, max) {
  if (!num || num < 0) {
    return 0;
  }
  if (max && num > max) {
    num = max;
  }
  return num;
};
var ProgressBar = function ProgressBar(props) {
  var percentage = props.percentage;
  var width = props.width;
  var height = props.height;
  var noText = props.noText;
  var barColor = props.barColor;
  var barBorderStyle = props.barBorderStyle;
  var strokeColor = props.strokeColor;
  var legalHeight = getLegalnumber(height);
  var underpainting = __WEBPACK_IMPORTED_MODULE_1__themes__.getColor(__WEBPACK_IMPORTED_MODULE_1__themes__.getTheme(), __WEBPACK_IMPORTED_MODULE_1__themes__.ColorEnum.TC7, "16");
  var mainColor = __WEBPACK_IMPORTED_MODULE_1__themes__.getColor(__WEBPACK_IMPORTED_MODULE_1__themes__.getTheme(), __WEBPACK_IMPORTED_MODULE_1__themes__.ColorEnum.TC0, "16");
  var barStyle = {
    marginTop: noText ? undefined : "21px",
    width: "".concat(getLegalnumber(width), "px"),
    height: "".concat(legalHeight !== null && legalHeight !== undefined ? legalHeight : 8, "px"),
    border: barBorderStyle,
    borderRadius: "".concat(legalHeight / 2, "px"),
    backgroundColor: barColor !== null && barColor !== undefined ? barColor : "#".concat(underpainting),
    borderColor: barColor !== null && barColor !== undefined ? barColor : "#".concat(underpainting)
  };
  var strokeStyle = {
    fontSize: "".concat(legalHeight * 0.6, "px"),
    height: "".concat(legalHeight !== null && legalHeight !== undefined ? legalHeight : 8, "px"),
    width: "".concat(getLegalnumber(percentage, 100), "%"),
    borderRadius: "".concat(legalHeight / 2, "px"),
    backgroundColor: strokeColor !== null && strokeColor !== undefined ? strokeColor : "#".concat(mainColor),
    borderColor: strokeColor !== null && strokeColor !== undefined ? strokeColor : "#".concat(mainColor)
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-progress-bar-bar",
    style: barStyle
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-progress-bar-stroke",
    style: strokeStyle
  }, noText ? null : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("span", {
    className: "CUI-progress-bar-follow-text",
    style: {
      transform: "translate(".concat(100 - percentage, "%, -16px)")
    }
  }, percentage, "%")));
}; // default
ProgressBar.defaultProps = {
  percentage: 0,
  width: 300,
  height: 8,
  noText: false
}; // TODO:add property control, limit range, illegal solution etc

/***/