"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_to_camel_case__ from "to-camel-case";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_to_camel_case___default from "to-camel-case";
var namespacer = '/';
/* harmony default export */
export default (function (type) {
  return type.indexOf(namespacer) === -1 ? __WEBPACK_IMPORTED_MODULE_0_to_camel_case___default(type) : type.split(namespacer).map(__WEBPACK_IMPORTED_MODULE_0_to_camel_case___default).join(namespacer);
});
/***/