"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.fail = exports.assert = void 0;
exports.assert = function (e, t) {
  if (!e) {
    throw new Error(t);
  }
};
exports.fail = function (e) {
  console.error(e);
};