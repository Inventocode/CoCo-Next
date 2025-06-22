"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__constants__ from "./constants-Hize";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__ownKeys__ from "./ownKeys-hGQe";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__get__ from "./get-Flou";
/* harmony default export */
export default (function (predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__.DEFAULT_NAMESPACE : _ref$namespace,
      prefix = _ref.prefix;
    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }
    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }
    function connectNamespace(type) {
      var _ref2;
      if (!partialFlatActionType) return type;
      var types = type.toString().split(__WEBPACK_IMPORTED_MODULE_0__constants__.ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(__WEBPACK_IMPORTED_MODULE_0__constants__.ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(__WEBPACK_IMPORTED_MODULE_0__constants__.ACTION_TYPE_DELIMITER);
    }
    function connectPrefix(type) {
      if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
        return type;
      }
      return "" + prefix + namespace + type;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__ownKeys__.default)(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = Object(__WEBPACK_IMPORTED_MODULE_2__get__.default)(type, map);
      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
});
/***/