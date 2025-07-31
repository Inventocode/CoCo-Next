"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isVariableDeclaration)(e, {
    kind: "var"
  }) && !e[i.BLOCK_SCOPED_SYMBOL];
};
var r = require("./2626");
var i = require("./2649");