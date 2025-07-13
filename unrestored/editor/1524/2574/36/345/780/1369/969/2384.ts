"use strict";

(function (e) {
  e.DEBUG = "debug";
  e.INFO = "info";
  e.WARN = "warn";
  e.ERROR = "error";
})(t.LogLevel || (exports.LogLevel = {}));
exports.makeLogger = function (e) {
  return function (t, n, r) {
    console[t](e + " " + t + ":", n, r);
  };
};