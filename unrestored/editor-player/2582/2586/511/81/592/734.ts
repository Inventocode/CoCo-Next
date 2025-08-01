"use strict";

var n = function () {
  function t() {}
  t.parseLong = function (t, e) {
    if (void 0 === e) {
      e = void 0;
    }
    return parseInt(t, e);
  };
  return t;
}();
exports.a = n;