"use strict";

/* harmony export (binding) */
export { Light };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_three_fiber__ from "@react-three/fiber";
var Light = function Light(props) {
  var ref = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useRef)();
  var _useThree = Object(__WEBPACK_IMPORTED_MODULE_2_react_three_fiber__.useThree)();
  var camera = _useThree.camera;
  Object(__WEBPACK_IMPORTED_MODULE_2_react_three_fiber__.useFrame)(function () {
    var _ref$current;
    if ((_ref$current = ref.current) === null || _ref$current === undefined) {
      undefined;
    } else {
      _ref$current.position.copy(camera.position);
    }
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("pointLight", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default)({}, props, {
    ref: ref
  }));
};

/***/