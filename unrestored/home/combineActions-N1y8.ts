"use strict";

/* unused harmony export default */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_invariant__ from "invariant";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_invariant___default from "invariant";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ from "./utils/isFunction-mYNI";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__utils_isSymbol__ from "./utils/isSymbol-Ijtg";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils_isEmpty__ from "./isEmpty-lMb0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__utils_toString__ from "./utils/toString-UoeN";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__utils_isString__ from "./utils/isString-tvs0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__constants__ from "./constants-Hize";
function isValidActionType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__.default)(type) || Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__.default)(type) || Object(__WEBPACK_IMPORTED_MODULE_2__utils_isSymbol__.default)(type);
}
function isValidActionTypes(types) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_isEmpty__.default)(types)) {
    return false;
  }
  return types.every(isValidActionType);
}
function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }
  __WEBPACK_IMPORTED_MODULE_0_invariant___default(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(__WEBPACK_IMPORTED_MODULE_4__utils_toString__.default).join(__WEBPACK_IMPORTED_MODULE_6__constants__.ACTION_TYPE_DELIMITER);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}

/***/