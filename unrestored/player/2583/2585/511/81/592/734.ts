"use strict";

var r = function () {
  function t() {}
  t.parseLong = function (t, e) {
    if (undefined === e) {
      e = undefined;
    }
    return parseInt(t, e);
  };
  return t;
}();
exports.a = r;