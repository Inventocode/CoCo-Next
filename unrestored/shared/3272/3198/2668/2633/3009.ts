"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = (0, i.default)(e);
  return 1 === t.length ? t[0] : (0, r.unionTypeAnnotation)(t);
};
var r = require("./2640/index");
var i = require("./2775");