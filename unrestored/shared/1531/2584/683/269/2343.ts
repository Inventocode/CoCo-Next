"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.multiBindToService = function (e) {
  return function (t) {
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) {
        n[r] = arguments[r];
      }
      return n.forEach(function (n) {
        return e.bind(n).toService(t);
      });
    };
  };
};