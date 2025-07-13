"use strict";

/* unused harmony export Tooltip */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "./style.module.css-pe4G";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "./style.module.css-pe4G";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), !0).forEach(function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default)(target, key, source[key]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
  }
  return target;
}
var _styleModuleImportMap = {
  "./style_module.css": {
    "wrapper": "CUI-tooltip-wrapper",
    "content": "CUI-tooltip-content",
    "up": "CUI-tooltip-up",
    "down": "CUI-tooltip-down",
    "left": "CUI-tooltip-left",
    "right": "CUI-tooltip-right"
  }
};
var Tooltip = function Tooltip(props) {
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_3_react__.useState)(false);
  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2);
  var visible = _useState2[0];
  var setVisible = _useState2[1];
  var tooltipRef = Object(__WEBPACK_IMPORTED_MODULE_3_react__.useRef)(null);
  var getRenderPos = function getRenderPos() {
    if (!tooltipRef.current) {
      return {};
    }
    var _getBoundingClientRec = tooltipRef.current.firstElementChild.getBoundingClientRect();
    var top = _getBoundingClientRec.top;
    var left = _getBoundingClientRec.left;
    var bottom = _getBoundingClientRec.bottom;
    var right = _getBoundingClientRec.right;
    var width = _getBoundingClientRec.width;
    var height = _getBoundingClientRec.height;
    if (props.placement === 'up') {
      return {
        top: "".concat(top, "px"),
        left: "".concat(left + width / 2, "px")
      };
    }
    if (props.placement === 'down') {
      return {
        top: "".concat(bottom, "px"),
        left: "".concat(left + width / 2, "px")
      };
    }
    if (props.placement === 'left') {
      return {
        top: "".concat(top + height / 2, "px"),
        left: "".concat(left, "px")
      };
    }
    if (props.placement === 'right') {
      return {
        top: "".concat(top + height / 2, "px"),
        left: "".concat(right, "px")
      };
    }
    return {};
  };
  return (/*#__PURE__*/
    // TODO: 渲染解构可以参照 antd 进一步调整
    __WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
      className: (props.className ? props.className + " " : "") + "CUI-tooltip-wrapper"
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
      ref: tooltipRef,
      onClick: props.trigger === 'click' ? function () {
        return setVisible(!visible);
      } : undefined,
      onMouseEnter: props.trigger === 'hover' ? function () {
        return setVisible(true);
      } : undefined,
      onMouseLeave: props.trigger === 'hover' ? function () {
        return setVisible(false);
      } : undefined
    }, props.children), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
      style: _objectSpread(_objectSpread(_objectSpread({}, props.style), getRenderPos()), {}, {
        visibility: visible ? 'visible' : 'hidden'
      }),
      className: (props.className ? props.className + " " : "") + __WEBPACK_IMPORTED_MODULE_2_babel_plugin_react_css_modules_dist_browser_getClassName___default("content ".concat(props.placement), _styleModuleImportMap, {
        "autoResolveMultipleImports": true,
        "handleMissingStyleName": "throw"
      })
    }, typeof props.content === 'function' ? props.content() : props.content))
  );
};
Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'up'
};

/***/