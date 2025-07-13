"use strict";

var r = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
var i = r(require("../../0/index"));
function o(e) {
  return "function" === typeof e ? i.default.createElement(a, {
    stage: e
  }) : e;
}
function a(e) {
  return o(e.stage());
}
exports.staged = function (e) {
  return function (t, n) {
    return o(e(t, n));
  };
};