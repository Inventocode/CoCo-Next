"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = require("./2625");
var i = function (e) {
  if ((0, r.isExpressionStatement)(e)) {
    e = e.expression;
  }
  if ((0, r.isExpression)(e)) {
    return e;
  }
  if ((0, r.isClass)(e)) {
    e.type = "ClassExpression";
  } else {
    if ((0, r.isFunction)(e)) {
      e.type = "FunctionExpression";
    }
  }
  if (!(0, r.isExpression)(e)) {
    throw new Error("cannot turn ".concat(e.type, " to an expression"));
  }
  return e;
};
exports.default = i;