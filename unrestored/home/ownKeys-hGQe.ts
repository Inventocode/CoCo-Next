"use strict";

/* harmony export (immutable) */
export default ownKeys;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__isMap__ from "./isMap-OWFF";
function ownKeys(object) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isMap__.default)(object)) {
    // We are using loose transforms in babel. Here we are trying to convert an
    // interable to an array. Loose mode expects everything to already be an
    // array. The problem is that our eslint rules encourage us to prefer
    // spread over Array.from.
    //
    // Instead of disabling loose mode we simply disable the warning.
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(object.keys());
  }
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }
  var keys = Object.getOwnPropertyNames(object);
  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }
  return keys;
}

/***/