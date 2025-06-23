"use strict";

/* unused harmony export takeEvery */
/* harmony export (binding) */
export { takeLatest };
/* unused harmony export throttle */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__takeEvery__ from "../takeEvery-ByiR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__takeLatest__ from "../takeLatest-Avhb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__throttle__ from "../throttle-oj4W";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils__ from "../utils-Vr3j";
/* harmony reexport (binding) */
export { default as takeEveryHelper } from "../takeEvery-ByiR";
/* harmony reexport (binding) */
export { default as takeLatestHelper } from "../takeLatest-Avhb";
/* harmony reexport (binding) */
export { default as throttleHelper } from "../throttle-oj4W";
var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};
var takeEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__.deprecate)(__WEBPACK_IMPORTED_MODULE_0__takeEvery__.default, /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__.deprecate)(__WEBPACK_IMPORTED_MODULE_1__takeLatest__.default, /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__.deprecate)(__WEBPACK_IMPORTED_MODULE_2__throttle__.default, /*#__PURE__*/deprecationWarning('throttle'));

/***/