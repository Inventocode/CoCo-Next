"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ from "../isPlainObject-AgG9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__isMap__ from "../isMap-OWFF";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__ from "../hasGeneratorInterface-Qlj1";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__flattenWhenNode__ from "../flattenWhenNode-ViZ7";
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_3__flattenWhenNode__.default)(function (node) {
  return (Object(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__.default)(node) || Object(__WEBPACK_IMPORTED_MODULE_1__isMap__.default)(node)) && !Object(__WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__.default)(node);
});
/***/