"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.transformFile = void 0;
exports.transformFileAsync = function () {
  return Promise.reject(new Error("Transforming files is not supported in browsers"));
};
exports.transformFileSync = function () {
  throw new Error("Transforming files is not supported in browsers");
};
exports.transformFile = function (e, t, n) {
  if ("function" === typeof t) {
    n = t;
  }
  n(new Error("Transforming files is not supported in browsers"), null);
};