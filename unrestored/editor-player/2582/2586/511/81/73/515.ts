"use strict";

var n = function () {
  function t() {}
  t.floatToIntBits = function (t) {
    return t;
  };
  t.MAX_VALUE = Number.MAX_SAFE_INTEGER;
  return t;
}();
exports.a = n;