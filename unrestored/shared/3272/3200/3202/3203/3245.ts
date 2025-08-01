"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isFunctionDeclaration)(e) || (0, r.isClassDeclaration)(e) || (0, a.default)(e);
};
var r = require("./2638");
var a = require("./2855");