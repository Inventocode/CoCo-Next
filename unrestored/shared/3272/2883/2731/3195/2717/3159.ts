"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = (0, a.default)(e);
  return 1 === t.length ? t[0] : (0, r.unionTypeAnnotation)(t);
};
var r = require("./2641/index");
var a = require("./2825");