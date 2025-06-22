"use strict";

/* harmony export (immutable) */
export default createAction;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_invariant__ from "external/invariant-crWv";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_invariant___default from "external/invariant-crWv";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ from "./utils/isFunction-mYNI";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__utils_identity__ from "./utils/identity-hFCR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils_isNull__ from "./utils/isNull-fPAS";
function createAction(type, payloadCreator, metaCreator) {
  if (payloadCreator === void 0) {
    payloadCreator = __WEBPACK_IMPORTED_MODULE_2__utils_identity__.default;
  }
  __WEBPACK_IMPORTED_MODULE_0_invariant___default(Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__.default)(payloadCreator) || Object(__WEBPACK_IMPORTED_MODULE_3__utils_isNull__.default)(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
  var finalPayloadCreator = Object(__WEBPACK_IMPORTED_MODULE_3__utils_isNull__.default)(payloadCreator) || payloadCreator === __WEBPACK_IMPORTED_MODULE_2__utils_identity__.default ? __WEBPACK_IMPORTED_MODULE_2__utils_identity__.default : function (head) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
  };
  var hasMeta = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__.default)(metaCreator);
  var typeString = type.toString();
  var actionCreator = function actionCreator() {
    var payload = finalPayloadCreator.apply(void 0, arguments);
    var action = {
      type: type
    };
    if (payload instanceof Error) {
      action.error = true;
    }
    if (payload !== undefined) {
      action.payload = payload;
    }
    if (hasMeta) {
      action.meta = metaCreator.apply(void 0, arguments);
    }
    return action;
  };
  actionCreator.toString = function () {
    return typeString;
  };
  return actionCreator;
}

/***/