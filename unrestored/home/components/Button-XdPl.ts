"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_classnames__ from "classnames";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_classnames___default from "classnames";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_scss__ from "./style/scss-1mrc";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_scss___default from "./style/scss-1mrc";
var Button = function Button(props) {
  var type = props.type;
  var icon = props.icon;
  var onClick = props.onClick;
  var disabled = props.disabled;
  var _props$style = props.style;
  var style = _props$style === undefined ? {} : _props$style;
  var className = props.className;
  var danger = props.danger;
  var children = props.children;
  var _props$shape = props.shape;
  var shape = _props$shape === undefined ? 'circle' : _props$shape;
  var generateClassName = function generateClassName() {
    var basic = 'coco-button-';
    var typeClass = type ? basic + type : '';
    var dangerClass = danger ? basic + 'dangerous' : '';
    var shapeClass = shape ? basic + shape : '';
    return typeClass + ' ' + dangerClass + ' ' + shapeClass;
  };
  return __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("button", {
    className: __WEBPACK_IMPORTED_MODULE_0_classnames___default('coco-button', generateClassName(), className),
    disabled: disabled,
    style: style,
    onClick: onClick
  }, icon && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__.default, {
    type: icon
  }), children);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react__.memo)(Button);
/***/