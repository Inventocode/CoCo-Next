"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return (0, r.isImportDefaultSpecifier)(e) || (0, r.isIdentifier)(e.imported || e.exported, {
    name: "default"
  });
};
var r = require("./2637");