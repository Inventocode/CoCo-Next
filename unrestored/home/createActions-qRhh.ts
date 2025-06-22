"use strict";

/* unused harmony export default */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_invariant__ from "external/invariant-crWv";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_invariant___default from "external/invariant-crWv";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__ from "./isPlainObject-AgG9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__utils_isFunction__ from "./utils/isFunction-mYNI";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__utils_identity__ from "./utils/identity-hFCR";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__utils_isArray__ from "./utils/isArray-vaFe";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__utils_isString__ from "./utils/isString-tvs0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__utils_isNil__ from "./utils/isNil-GpsT";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__utils_getLastElement__ from "./utils/getLastElement-vfE8";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__utils_camelCase__ from "./utils/camelCase-DPjB";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__ from "./utils/arrayToObject-YjqK";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__utils_flattenActionMap__ from "./utils/flattenActionMap-X8Bh";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__utils_unflattenActionCreators__ from "./utils/unflattenActionCreators-k+MB";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__createAction__ from "./createAction-tQF+";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_13__constants__ from "./constants-Hize";
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }
  var options = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__.default)(Object(__WEBPACK_IMPORTED_MODULE_7__utils_getLastElement__.default)(identityActions)) ? identityActions.pop() : {};
  __WEBPACK_IMPORTED_MODULE_0_invariant___default(identityActions.every(__WEBPACK_IMPORTED_MODULE_5__utils_isString__.default) && (Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__.default)(actionMap) || Object(__WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__.default)(actionMap)), 'Expected optional object followed by string action types');
  if (Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__.default)(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }
  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}
function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = Object(__WEBPACK_IMPORTED_MODULE_10__utils_flattenActionMap__.default)(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return Object(__WEBPACK_IMPORTED_MODULE_11__utils_unflattenActionCreators__.default)(flatActionCreators, options);
}
function actionMapToActionCreators(actionMap, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    prefix = _ref.prefix,
    _ref$namespace = _ref.namespace,
    namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_13__constants__.DEFAULT_NAMESPACE : _ref$namespace;
  function isValidActionMapValue(actionMapValue) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__.default)(actionMapValue) || Object(__WEBPACK_IMPORTED_MODULE_6__utils_isNil__.default)(actionMapValue)) {
      return true;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_isArray__.default)(actionMapValue)) {
      var _actionMapValue$ = actionMapValue[0],
        payload = _actionMapValue$ === void 0 ? __WEBPACK_IMPORTED_MODULE_3__utils_identity__.default : _actionMapValue$,
        meta = actionMapValue[1];
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__.default)(payload) && Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__.default)(meta);
    }
    return false;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__.default)(Object.keys(actionMap), function (partialActionCreators, type) {
    var _objectSpread2;
    var actionMapValue = actionMap[type];
    __WEBPACK_IMPORTED_MODULE_0_invariant___default(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = Object(__WEBPACK_IMPORTED_MODULE_4__utils_isArray__.default)(actionMapValue) ? __WEBPACK_IMPORTED_MODULE_12__createAction__.default.apply(void 0, [prefixedType].concat(actionMapValue)) : Object(__WEBPACK_IMPORTED_MODULE_12__createAction__.default)(prefixedType, actionMapValue);
    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
  });
}
function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__.default)(identityActions, function (partialActionMap, type) {
    var _objectSpread3;
    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = __WEBPACK_IMPORTED_MODULE_3__utils_identity__.default, _objectSpread3));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__.default)(Object.keys(actionCreators), function (partialActionCreators, type) {
    var _objectSpread4;
    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[Object(__WEBPACK_IMPORTED_MODULE_8__utils_camelCase__.default)(type)] = actionCreators[type], _objectSpread4));
  });
}

/***/