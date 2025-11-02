/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：jG9v
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { Camera }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_three_fiber__ from "@react-three/fiber"
var Camera = function Camera(props) {
  var ref = __WEBPACK_IMPORTED_MODULE_1_react__.useRef()
  var _useThree = __WEBPACK_IMPORTED_MODULE_2_react_three_fiber__.useThree()
  var setDefaultCamera = _useThree.setDefaultCamera // Make the camera known to the system
  __WEBPACK_IMPORTED_MODULE_1_react__.useEffect(function () {
    if (ref.current) {
      setDefaultCamera(ref.current)
    }
  }, [setDefaultCamera]) // Update it every frame
  __WEBPACK_IMPORTED_MODULE_2_react_three_fiber__.useFrame(function () {
    var _ref$current
    return (_ref$current = ref.current) === null || _ref$current === undefined ? undefined : _ref$current.updateMatrixWorld()
  })
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("perspectiveCamera", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default({}, props, {
    ref: ref
  }))
}

/***/
