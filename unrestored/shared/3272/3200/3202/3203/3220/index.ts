"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = e.map(function (e) {
    return e.typeAnnotation;
  });
  var n = (0, a.default)(t);
  return 1 === n.length ? n[0] : (0, r.tsUnionType)(n);
};
var r = require("../2642/index");
var a = require("./3221");