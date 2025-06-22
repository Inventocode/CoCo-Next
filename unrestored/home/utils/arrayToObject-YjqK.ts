"use strict";

/* harmony default export */
export default (function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
});
/***/