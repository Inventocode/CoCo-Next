"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isVariableDeclaration)(e, {
    kind: "var"
  }) && !e[a.BLOCK_SCOPED_SYMBOL];
};
var r = require("./2627");
var a = require("./2651");