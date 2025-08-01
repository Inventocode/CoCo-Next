"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = require("./2637");
var a = require("./2641/index");
var i = function (e, t) {
  if ((0, r.isStatement)(e)) {
    return e;
  }
  var n;
  var i = !1;
  if ((0, r.isClass)(e)) {
    i = !0;
    n = "ClassDeclaration";
  } else if ((0, r.isFunction)(e)) {
    i = !0;
    n = "FunctionDeclaration";
  } else if ((0, r.isAssignmentExpression)(e)) {
    return (0, a.expressionStatement)(e);
  }
  if (i && !e.id) {
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
exports.default = i;