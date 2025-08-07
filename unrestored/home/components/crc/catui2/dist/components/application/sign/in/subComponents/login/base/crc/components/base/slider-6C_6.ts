"use strict";

/* unused harmony export Slider */
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
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "./style.module.css-C6yh";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "./style.module.css-C6yh";
var _styleModuleImportMap = {
  "./style_module.css": {
    "slider-wrap": "CUI-slider-slider-wrap",
    "slider": "CUI-slider-slider",
    "tooltip": "CUI-slider-tooltip",
    "sliding": "CUI-slider-sliding",
    "disabled": "CUI-slider-disabled"
  }
};
var Slider = function Slider(props) {
  var _props$width;
  var _props$step;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)('');
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var state = _useState2[0];
  var setState = _useState2[1];
  var handleChange = function handleChange(e) {
    if (props.onChange) {
      props.onChange(Number(e.target.value));
    }
  };
  var handleMouseDown = function handleMouseDown() {
    return setState('sliding');
  };
  var handleMouseUp = function handleMouseUp() {
    return setState('');
  };
  var getPercentage = function getPercentage() {
    var value = props.value;
    var _props$min = props.min;
    var min = _props$min === undefined ? 0 : _props$min;
    var _props$max = props.max;
    var max = _props$max === undefined ? 100 : _props$max;
    return (value - min) / (max - min) * 100;
  };
  var percentage = getPercentage();
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    style: {
      width: (_props$width = props.width) !== null && _props$width !== undefined ? _props$width : 136
    },
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    className: (props.wrapClassName ? props.wrapClassName + " " : "") + __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("slider-wrap ".concat(state, " ").concat(props.disabled ? 'disabled' : ''), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "throw"
    })
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("input", {
    disabled: props.disabled,
    className: (props.className ? props.className + " " : "") + "CUI-slider-slider",
    style: {
      background: props.disabled ? "linear-gradient(to right, rgba(var(--theme-color-grey-20), 1) ".concat(percentage, "%, rgba(var(--theme-color-grey-10), 1) ").concat(percentage, "%)") : "linear-gradient(to right, rgba(var(--theme-color-0), 1) ".concat(percentage, "%, rgba(var(--theme-color-5), 1) ").concat(percentage, "%)")
    },
    type: "range",
    min: props.min,
    max: props.max,
    step: (_props$step = props.step) !== null && _props$step !== undefined ? _props$step : 1,
    value: props.value,
    onChange: handleChange
  }), props.tooltip && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", {
    className: "CUI-slider-tooltip",
    style: {
      left: "".concat(percentage, "%"),
      transform: "translate(".concat(-percentage, "%, -25px)")
    }
  }, props.value));
};
Slider.defaultProps = {
  width: 136,
  min: 0,
  max: 100,
  step: 1
};

/***/