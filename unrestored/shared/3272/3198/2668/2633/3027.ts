"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = require("./2636");
var i = require("./2640/index");
var a = function (e, t) {
  if ((0, r.isStatement)(e)) {
    return e;
  }
  var n;
  var a = !1;
  if ((0, r.isClass)(e)) {
    a = !0;
    n = "ClassDeclaration";
  } else if ((0, r.isFunction)(e)) {
    a = !0;
    n = "FunctionDeclaration";
  } else if ((0, r.isAssignmentExpression)(e)) {
    return (0, i.expressionStatement)(e);
  }
  if (a && !e.id) {
    n = !1;
  }
  if (!n) {
    if (t) {
      return !1;
    }
    throw new Error("cannot turn ".concat(e.type, " to a statement"));
  }
  e.type = n;
  return e;
};
exports.default = a;