/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：I2hg
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { useEventListener };
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
var useEventListener = function useEventListener(target, type, listener) {
  return __WEBPACK_IMPORTED_MODULE_0_react__.useEffect(function () {
    target.addEventListener(type, listener);
    return function () {
      target.removeEventListener(type, listener);
    };
  }, [target, type, listener]);
};

/***/