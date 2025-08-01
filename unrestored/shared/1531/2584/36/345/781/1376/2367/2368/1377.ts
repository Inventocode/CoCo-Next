"use strict";

module.exports = function (e, t) {
  return function () {
    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
      n[r] = arguments[r];
    }
    return e.apply(t, n);
  };
};