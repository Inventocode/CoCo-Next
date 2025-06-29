"use strict";

/* harmony export (binding) */
export { Controls };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_three_fiber__ from "@react-three/fiber";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_three_examples_jsm_controls_OrbitControls__ from "three/examples/jsm/controls/OrbitControls";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__common_hooks_useEventListener__ from "./common/hooks/useEventListener-I2hg";
Object(__WEBPACK_IMPORTED_MODULE_1_react_three_fiber__.extend)({
  OrbitControls: __WEBPACK_IMPORTED_MODULE_2_three_examples_jsm_controls_OrbitControls__.OrbitControls
});
var Controls = function Controls(_ref) {
  var onDeviceOrientation = _ref.onDeviceOrientation;
  var ref = __WEBPACK_IMPORTED_MODULE_0_react__.useRef();
  var _useThree = Object(__WEBPACK_IMPORTED_MODULE_1_react_three_fiber__.useThree)(),
    camera = _useThree.camera,
    gl = _useThree.gl;
  Object(__WEBPACK_IMPORTED_MODULE_0_react__.useEffect)(function () {
    gl.domElement.style.outline = 'none';
    var orbitControls = ref.current;
    orbitControls.enableKeys = false;
    orbitControls.enableZoom = false;
    orbitControls.enableDamping = false;
    orbitControls.maxAzimuthAngle = Math.PI / 2;
    orbitControls.minAzimuthAngle = -Math.PI / 2;
    orbitControls.maxPolarAngle = Math.PI;
    orbitControls.minPolarAngle = -Math.PI;
  }, [camera, gl]);
  Object(__WEBPACK_IMPORTED_MODULE_1_react_three_fiber__.useFrame)(function () {
    var _ref$current;
    (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.update();
    if (!onDeviceOrientation) {
      return;
    }
    var orbitControls = ref.current;
    if (!orbitControls) {
      return;
    } // Beta 绕x轴
    var beta = -orbitControls.getPolarAngle() * 180 / Math.PI + 90; // Gamma 绕y轴
    var gamma = -orbitControls.getAzimuthalAngle() * 180 / Math.PI;
    onDeviceOrientation({
      absolute: false,
      alpha: 0,
      beta: beta,
      gamma: gamma
    });
  });
  Object(__WEBPACK_IMPORTED_MODULE_3__common_hooks_useEventListener__.useEventListener)(document, 'pointerup', function () {
    var orbitControls = ref.current;
    orbitControls.reset();
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__.createElement("orbitControls", {
    ref: ref,
    args: [camera, gl.domElement],
    enableDamping: true,
    dampingFactor: 0.1,
    rotateSpeed: 0.5
  });
};

/***/