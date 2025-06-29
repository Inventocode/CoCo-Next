"use strict";

/* harmony export (binding) */
export { useEventListener };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
var useEventListener = function useEventListener(target, type, listener) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__.useEffect)(function () {
    target.addEventListener(type, listener);
    return function () {
      target.removeEventListener(type, listener);
    };
  }, [target, type, listener]);
};

/***/