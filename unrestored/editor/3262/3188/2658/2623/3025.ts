"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isFunctionDeclaration)(e) || (0, r.isClassDeclaration)(e) || (0, i.default)(e);
};
var r = require("./2626");
var i = require("./2776");