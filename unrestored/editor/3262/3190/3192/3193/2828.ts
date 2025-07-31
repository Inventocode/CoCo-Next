"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n = e.split(".");
  return function (e) {
    return (0, r.default)(e, n, t);
  };
};
var r = require("./2829");