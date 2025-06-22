"use strict";

/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__io__ from "../../io-JJnU";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ from "../../internal/sagaHelpers-2iFZ";
function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return __WEBPACK_IMPORTED_MODULE_0__io__.fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__.takeEveryHelper, patternOrChannel, worker].concat(args));
}
function takeLatest(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }
  return __WEBPACK_IMPORTED_MODULE_0__io__.fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__.takeLatestHelper, patternOrChannel, worker].concat(args));
}
function throttle(ms, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }
  return __WEBPACK_IMPORTED_MODULE_0__io__.fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__.throttleHelper, ms, pattern, worker].concat(args));
}

/***/