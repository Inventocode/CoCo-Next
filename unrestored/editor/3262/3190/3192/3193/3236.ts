"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  if ((0, r.default)(e.type, "Immutable")) {
    return !0;
  }
  if ((0, a.isIdentifier)(e)) {
    return "undefined" === e.name;
  }
  return !1;
};
var r = require("./2714");
var a = require("./2628");