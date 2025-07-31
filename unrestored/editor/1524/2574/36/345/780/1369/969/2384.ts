"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.makeLogger = exports.LogLevel = void 0;
(function (e) {
  e.DEBUG = "debug";
  e.INFO = "info";
  e.WARN = "warn";
  e.ERROR = "error";
})(exports.LogLevel || (exports.LogLevel = {}));
exports.makeLogger = function (e) {
  return function (t, n, r) {
    console[t](e + " " + t + ":", n, r);
  };
};