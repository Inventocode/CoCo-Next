"use strict";

import * as r from "../../../2873/2721/805/index";
exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.FLATTENABLE_KEYS = ["body", "expressions"];
exports.FOR_INIT_KEYS = ["left", "init"];
exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var a = ["||", "&&", "??"];
export { a as LOGICAL_OPERATORS };
exports.UPDATE_OPERATORS = ["++", "--"];
var i = [">", "<", ">=", "<="];
export { i as BOOLEAN_NUMBER_BINARY_OPERATORS };
var o = ["==", "===", "!=", "!=="];
export { o as EQUALITY_BINARY_OPERATORS };
var s = [].concat(o, ["in", "instanceof"]);
export { s as COMPARISON_BINARY_OPERATORS };
var u = [].concat(r(s), i);
export { u as BOOLEAN_BINARY_OPERATORS };
var l = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
export { l as NUMBER_BINARY_OPERATORS };
var p = ["+"].concat(l, r(u));
export { p as BINARY_OPERATORS };
var f = ["=", "+="].concat(r(l.map(function (e) {
  return e + "=";
})), r(a.map(function (e) {
  return e + "=";
})));
export { f as ASSIGNMENT_OPERATORS };
var d = ["delete", "!"];
export { d as BOOLEAN_UNARY_OPERATORS };
var c = ["+", "-", "~"];
export { c as NUMBER_UNARY_OPERATORS };
var y = ["typeof"];
export { y as STRING_UNARY_OPERATORS };
var T = ["void", "throw"].concat(d, c, y);
export { T as UNARY_OPERATORS };
exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var m = Symbol.for("var used to be block scoped");
export { m as BLOCK_SCOPED_SYMBOL };
var S = Symbol.for("should not be considered a local binding");
export { S as NOT_LOCAL_BINDING };