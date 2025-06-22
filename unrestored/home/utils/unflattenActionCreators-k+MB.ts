"use strict";

/* harmony export (immutable) */
export default unflattenActionCreators;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__constants__ from "../constants-Hize";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__isEmpty__ from "../isEmpty-lMb0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__camelCase__ from "../utils/camelCase-DPjB";
function unflattenActionCreators(flatActionCreators, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$namespace = _ref.namespace,
    namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__.DEFAULT_NAMESPACE : _ref$namespace,
    prefix = _ref.prefix;
  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
    var nextNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__camelCase__.default)(partialFlatActionTypePath.shift());
    if (Object(__WEBPACK_IMPORTED_MODULE_1__isEmpty__.default)(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }
      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    }
  }
  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
  });
  return nestedActionCreators;
}

/***/