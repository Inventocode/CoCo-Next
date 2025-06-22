"use strict";

/* harmony export (immutable) */
export default handleAction;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_invariant__ from "invariant";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_invariant___default from "invariant";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ from "./utils/isFunction-mYNI";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__ from "./isPlainObject-AgG9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils_identity__ from "./utils/identity-hFCR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__utils_isNil__ from "./utils/isNil-GpsT";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__utils_isUndefined__ from "./utils/isUndefined-x4Y+";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__utils_toString__ from "./utils/toString-UoeN";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__constants__ from "./constants-Hize";
function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = __WEBPACK_IMPORTED_MODULE_3__utils_identity__.default;
  }
  var types = Object(__WEBPACK_IMPORTED_MODULE_6__utils_toString__.default)(type).split(__WEBPACK_IMPORTED_MODULE_7__constants__.ACTION_TYPE_DELIMITER);
  __WEBPACK_IMPORTED_MODULE_0_invariant___default(!Object(__WEBPACK_IMPORTED_MODULE_5__utils_isUndefined__.default)(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  __WEBPACK_IMPORTED_MODULE_0_invariant___default(Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__.default)(reducer) || Object(__WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__.default)(reducer), 'Expected reducer to be a function or object with next and throw reducers');
  var _ref = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__.default)(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_isNil__.default)(aReducer) ? __WEBPACK_IMPORTED_MODULE_3__utils_identity__.default : aReducer;
    }),
    nextReducer = _ref[0],
    throwReducer = _ref[1];
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }
    var actionType = action.type;
    if (!actionType || types.indexOf(Object(__WEBPACK_IMPORTED_MODULE_6__utils_toString__.default)(actionType)) === -1) {
      return state;
    }
    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

/***/