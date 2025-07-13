"use strict";

/* unused harmony export PlayerLoader */
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
import * as __WEBPACK_IMPORTED_MODULE_3__base_progress_bar_index__ from "../../base/progress/bar-ajTa";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "./style.module.css-6USV";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "./style.module.css-6USV";
var _styleModuleImportMap = {
  "./style_module.css": {
    "loader-wrapper": "CUI-player-loader-loader-wrapper",
    "progress-bar": "CUI-player-loader-progress-bar",
    "text": "CUI-player-loader-text",
    "animation": "CUI-player-loader-animation",
    "bird": "CUI-player-loader-bird",
    "chicken-bounce": "CUI-player-loader-chicken-bounce",
    "cry": "CUI-player-loader-cry",
    "chicken-cry": "CUI-player-loader-chicken-cry",
    "cloud-1": "CUI-player-loader-cloud-1",
    "passby-200vw": "CUI-player-loader-passby-200vw",
    "cloud-1-copy": "CUI-player-loader-cloud-1-copy",
    "cloud-2": "CUI-player-loader-cloud-2",
    "cloud-2-copy": "CUI-player-loader-cloud-2-copy",
    "cloud-3": "CUI-player-loader-cloud-3",
    "cloud-3-copy": "CUI-player-loader-cloud-3-copy",
    "cloud-4": "CUI-player-loader-cloud-4",
    "cloud-4-copy": "CUI-player-loader-cloud-4-copy",
    "cloud-5": "CUI-player-loader-cloud-5",
    "cloud-5-copy": "CUI-player-loader-cloud-5-copy"
  }
};
var CLOUDS_MAP = {
  'cloud-1': 2.027,
  'cloud-2': 2.1428,
  'cloud-3': 1.7045,
  'cloud-4': 1.4423,
  'cloud-5': 1.3157,
  'cloud-1-copy': 2.027,
  'cloud-2-copy': 2.1428,
  'cloud-3-copy': 1.7045,
  'cloud-4-copy': 1.4423,
  'cloud-5-copy': 1.3157
};
var PlayerLoader = function PlayerLoader(props) {
  var percent = props.percent;
  var promptText = props.promptText;
  var style = props.style;
  var status = props.status ? props.status : 'loading';
  var loader = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useRef)(null);
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useState)(1);
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var animationDurRatio = _useState2[0];
  var setAnimationDurRatio = _useState2[1];
  Object(__WEBPACK_IMPORTED_MODULE_2_react__.useEffect)(function () {
    var loaderEl = loader.current;
    var updateAnimationDur = function updateAnimationDur() {
      if (!loaderEl) {
        return;
      }
      var ratio = loaderEl.getBoundingClientRect().width / 375;
      if (ratio !== animationDurRatio) {
        setAnimationDurRatio(ratio);
      }
    };
    updateAnimationDur();
    window.addEventListener('resize', updateAnimationDur);
    return function () {
      window.removeEventListener('resize', updateAnimationDur);
    };
  }, []);
  var getClouds = function getClouds(CLOUDS_MAP) {
    var res = [];
    for (var cloudName in CLOUDS_MAP) {
      res.push(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
        key: cloudName,
        style: {
          animationDuration: "".concat(status === 'loading' ? CLOUDS_MAP[cloudName] * animationDurRatio : 0, "s")
        },
        className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default(cloudName, _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }));
    }
    return res;
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    ref: loader,
    className: "CUI-player-loader-loader-wrapper",
    style: style
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-loader-animation"
  }, Object(__WEBPACK_IMPORTED_MODULE_2_react__.useMemo)(function () {
    return getClouds(CLOUDS_MAP);
  }, [status]), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-loader-progress-bar"
  }, Object(__WEBPACK_IMPORTED_MODULE_2_react__.useMemo)(function () {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_1_babel_plugin_react_css_modules_dist_browser_getClassName___default("".concat(status === 'loading' ? 'bird' : 'cry'), _styleModuleImportMap, {
        "autoResolveMultipleImports": true,
        "handleMissingStyleName": "throw"
      })
    });
  }, [status]), status === 'loading' && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__base_progress_bar_index__.ProgressBar, {
    width: 238,
    height: 4,
    barColor: "#D1D1EE",
    strokeColor: "#7272CE",
    percentage: percent,
    noText: true
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", {
    className: "CUI-player-loader-text"
  }, promptText)))));
};

/***/