"use strict";

/* harmony export (immutable) */
export default get;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__isMap__ from "./isMap-OWFF";
function get(key, x) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__isMap__.default)(x) ? x.get(key) : x[key];
}

/***/