"use strict";

/* unused harmony export ProgressCircle */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inherits__ from "@babel/runtime/helpers/esm/inherits";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_possibleConstructorReturn__ from "@babel/runtime/helpers/esm/possibleConstructorReturn";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_getPrototypeOf__ from "@babel/runtime/helpers/esm/getPrototypeOf";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_6_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__themes__ from "../../../../../../../../../../../themes-P22Q";
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
        Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_defineProperty__.default)(target, key, source[key]);
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_getPrototypeOf__.default)(Derived);
    var result;
    if (hasNativeReflectConstruct) {
      var NewTarget = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_getPrototypeOf__.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_possibleConstructorReturn__.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false;
  }
  if (Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy === "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

// 全局默认字体
var DEFAULT_FONT = {
  family: 'NotoSansCJKsc',
  filename: 'NotoSansCJKsc-Regular.woff2'
};
var radius = 175;
var diameter = Math.round(Math.PI * radius * 2);
var getOffset = function getOffset() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Math.round((100 - Math.min(val, 100)) / 100 * diameter);
};
var ProgressCircle = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inherits__.default)(ProgressCircle, _React$Component);
  var _super = _createSuper(ProgressCircle);
  function ProgressCircle() {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default)(this, ProgressCircle);
    return _super.apply(this, arguments);
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default)(ProgressCircle, [{
    key: "text",
    get: function get() {
      var _this$props = this.props;
      var progress = _this$props.progress;
      var showPercentage = _this$props.showPercentage;
      var textColor = _this$props.textColor;
      var textStyle = _this$props.textStyle;
      var percentSpacing = _this$props.percentSpacing;
      var showPercentageSymbol = _this$props.showPercentageSymbol;
      if (!showPercentage) {
        return;
      }
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.createElement("text", {
        style: _objectSpread({}, textStyle),
        fill: textColor,
        x: radius,
        y: radius,
        textAnchor: "middle",
        dominantBaseline: "central"
      }, progress, showPercentageSymbol && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.createElement("tspan", {
        dx: percentSpacing
      }, "%"));
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.text;
      var _this$props2 = this.props;
      var svgStyle = _this$props2.svgStyle;
      var progress = _this$props2.progress;
      var size = _this$props2.size;
      var bgColor = _this$props2.bgColor;
      var progressColor = _this$props2.progressColor;
      var lineWidth = _this$props2.lineWidth;
      var animate = _this$props2.animate;
      var animationDuration = _this$props2.animationDuration;
      var roundedStroke = _this$props2.roundedStroke;
      var responsive = _this$props2.responsive;
      var onAnimationEnd = _this$props2.onAnimationEnd;
      var strokeDashoffset = getOffset(progress);
      var transition = animate ? "stroke-dashoffset ".concat(animationDuration, " ease-out") : undefined;
      var strokeLinecap = roundedStroke ? 'round' : 'butt';
      var svgSize = responsive ? '100%' : size;
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.createElement("svg", {
        width: svgSize,
        height: svgSize,
        viewBox: "-25 -25 400 400",
        style: Object.assign({
          pointerEvents: 'none'
        }, svgStyle)
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.createElement("circle", {
        stroke: bgColor,
        cx: "175",
        cy: "175",
        r: "175",
        strokeWidth: lineWidth,
        fill: "none"
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.createElement("circle", {
        stroke: progressColor,
        transform: "rotate(-90 175 175)",
        cx: "175",
        cy: "175",
        r: "175",
        strokeDasharray: "1100",
        strokeWidth: lineWidth,
        strokeDashoffset: "1100",
        strokeLinecap: strokeLinecap,
        fill: "none",
        style: {
          strokeDashoffset: strokeDashoffset,
          transition: transition
        },
        onTransitionEnd: onAnimationEnd
      }), text);
    }
  }]);
  return ProgressCircle;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.Component);
Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_defineProperty__.default)(ProgressCircle, "defaultProps", {
  progress: 0,
  animate: true,
  animationDuration: '0.4s',
  showPercentage: true,
  showPercentageSymbol: true,
  progressColor: "#".concat(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getColor)(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getTheme)(), __WEBPACK_IMPORTED_MODULE_7__themes__.ColorEnum.TC0, '16')),
  bgColor: "#".concat(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getColor)(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getTheme)(), __WEBPACK_IMPORTED_MODULE_7__themes__.ColorEnum.TC7, '16')),
  textColor: "#".concat(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getColor)(Object(__WEBPACK_IMPORTED_MODULE_7__themes__.getTheme)(), __WEBPACK_IMPORTED_MODULE_7__themes__.ColorEnum.TT7, '16')),
  size: '100',
  lineWidth: '20',
  percentSpacing: 10,
  textStyle: {
    font: "bold 5rem ".concat(DEFAULT_FONT['family'], ", sans-serif")
  }
});

/***/