"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = e.map(function (e) {
    return e.typeAnnotation;
  });
  var n = (0, i.default)(t);
  return 1 === n.length ? n[0] : (0, r.tsUnionType)(n);
};
var r = require("../2629/index");
var i = require("./2893");