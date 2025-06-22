"use strict";

/* harmony export (immutable) */
export default hasGeneratorInterface;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__ownKeys__ from "./ownKeys-hGQe";
function hasGeneratorInterface(handler) {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_0__ownKeys__.default)(handler);
  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
    return ownKey === 'next' || ownKey === 'throw';
  });
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}

/***/