"use strict";

/* harmony export (immutable) */
export { handleActions };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_reduce_reducers__ from "./reduce/reducers-Hhcr";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_invariant__ from "invariant";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_invariant___default from "invariant";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__ from "./isPlainObject-AgG9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils_isMap__ from "./isMap-OWFF";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__utils_ownKeys__ from "./ownKeys-hGQe";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__utils_flattenReducerMap__ from "./utils/flattenReducerMap-wvpO";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__handleAction__ from "./handleAction-exR5";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__utils_get__ from "./get-Flou";
function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }
  __WEBPACK_IMPORTED_MODULE_1_invariant___default(Object(__WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__.default)(handlers) || Object(__WEBPACK_IMPORTED_MODULE_3__utils_isMap__.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = Object(__WEBPACK_IMPORTED_MODULE_5__utils_flattenReducerMap__.default)(handlers, options);
  var reducers = Object(__WEBPACK_IMPORTED_MODULE_4__utils_ownKeys__.default)(flattenedReducerMap).map(function (type) {
    return Object(__WEBPACK_IMPORTED_MODULE_6__handleAction__.default)(type, Object(__WEBPACK_IMPORTED_MODULE_7__utils_get__.default)(type, flattenedReducerMap), defaultState);
  });
  var reducer = __WEBPACK_IMPORTED_MODULE_0_reduce_reducers__.default.apply(void 0, reducers.concat([defaultState]));
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }
    return reducer(state, action);
  };
}

/***/