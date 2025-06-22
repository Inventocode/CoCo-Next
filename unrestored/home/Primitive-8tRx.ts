"use strict";

/* harmony export (immutable) */
export { Primitive };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__ from "@babel/runtime/helpers/esm/objectWithoutProperties";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_three_fiber__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_three_examples_jsm_loaders_GLTFLoader__ from "./three/examples/jsm/loaders/GLTFLoader-hV_q";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__common_hooks_useEventListener__ from "./common/hooks/useEventListener-I2hg";
var _excluded = ["url", "position"];
function Primitive(_ref) {
  var url = _ref.url,
    position = _ref.position,
    props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__.default)(_ref, _excluded);
  var gltf = Object(__WEBPACK_IMPORTED_MODULE_3_react_three_fiber__.useLoader)(__WEBPACK_IMPORTED_MODULE_4_three_examples_jsm_loaders_GLTFLoader__.GLTFLoader, url);
  var _useGraph = Object(__WEBPACK_IMPORTED_MODULE_3_react_three_fiber__.useGraph)(gltf.scene),
    nodes = _useGraph.nodes,
    materials = _useGraph.materials;
  var grabbing = Object(__WEBPACK_IMPORTED_MODULE_2_react__.useRef)(false);
  Object(__WEBPACK_IMPORTED_MODULE_5__common_hooks_useEventListener__.useEventListener)(document, 'pointerup', function () {
    if (!grabbing.current) {
      return;
    }
    document.documentElement.style.cursor = 'default';
    grabbing.current = false;
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("primitive", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default)({}, props, {
    object: gltf.scene,
    position: position,
    onPointerEnter: function onPointerEnter() {
      if (grabbing.current) {
        return;
      }
      document.documentElement.style.cursor = 'grab';
    },
    onPointerLeave: function onPointerLeave() {
      if (grabbing.current) {
        return;
      }
      document.documentElement.style.cursor = 'default';
    },
    onPointerDown: function onPointerDown() {
      grabbing.current = true;
      document.documentElement.style.cursor = 'grabbing';
    },
    onPointerUp: function onPointerUp(e) {
      grabbing.current = false;
      document.documentElement.style.cursor = 'grab';
      e.stopPropagation();
    }
  }));
}

/***/