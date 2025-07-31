"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if ((0, r.isBlockStatement)(e)) {
    return e;
  }
  var n = [];
  if ((0, r.isEmptyStatement)(e)) {
    n = [];
  } else {
    if (!(0, r.isStatement)(e)) {
      e = (0, r.isFunction)(t) ? (0, i.returnStatement)(e) : (0, i.expressionStatement)(e);
    }
    n = [e];
  }
  return (0, i.blockStatement)(n);
};
var r = require("./2626");
var i = require("./2630/index");