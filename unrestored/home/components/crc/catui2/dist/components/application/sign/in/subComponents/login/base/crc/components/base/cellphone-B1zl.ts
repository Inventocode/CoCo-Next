/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：B1zl
 */

"use strict"

/* unused harmony export CellPhone */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutProperties__ from "@babel/runtime/helpers/esm/objectWithoutProperties"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_three_fiber__ from "@react-three/fiber"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__Camera__ from "./Camera-jG9v"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__Controls__ from "./Controls-D4UY"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__Asset__ from "./Asset-J02Q"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__Light__ from "./Light-6PrI"
var _excluded = ["onDeviceOrientation"]
var CellPhone = function CellPhone(_ref) {
  var onDeviceOrientation = _ref.onDeviceOrientation
  var props = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutProperties__.default(_ref, _excluded)
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", props, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2_react_three_fiber__.Canvas, {
    shadowMap: true
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_6__Light__.Light, {
    intensity: 10,
    distance: 0.3,
    decay: 2
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__Camera__.Camera, {
    position: [0, 0, 0.2]
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_4__Controls__.Controls, {
    onDeviceOrientation: onDeviceOrientation
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_5__Asset__.Asset, {
    url: require("./unnamed-4J7X"),
    position: [0, -0.05, 0]
  })))
}
CellPhone.defaultProps = {
  onDeviceOrientation: undefined
}

/***/
