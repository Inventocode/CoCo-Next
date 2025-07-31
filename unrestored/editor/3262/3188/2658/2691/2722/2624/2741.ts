"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isVariableDeclaration)(e) && ("var" !== e.kind || e[i.BLOCK_SCOPED_SYMBOL]);
};
var r = require("./2625");
var i = require("./2647");