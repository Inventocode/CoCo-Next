"use strict";

import * as r from "../../../2873/2721/805/index";
exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.FLATTENABLE_KEYS = ["body", "expressions"];
exports.FOR_INIT_KEYS = ["left", "init"];
exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var i = ["||", "&&", "??"];
export { i as LOGICAL_OPERATORS };
exports.UPDATE_OPERATORS = ["++", "--"];
var a = [">", "<", ">=", "<="];
export { a as BOOLEAN_NUMBER_BINARY_OPERATORS };
var s = ["==", "===", "!=", "!=="];
export { s as EQUALITY_BINARY_OPERATORS };
var o = [].concat(s, ["in", "instanceof"]);
export { o as COMPARISON_BINARY_OPERATORS };
var l = [].concat(r(o), a);
export { l as BOOLEAN_BINARY_OPERATORS };
var u = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
export { u as NUMBER_BINARY_OPERATORS };
var c = ["+"].concat(u, r(l));
export { c as BINARY_OPERATORS };
var p = ["=", "+="].concat(r(u.map(function (e) {
  return e + "=";
})), r(i.map(function (e) {
  return e + "=";
})));
export { p as ASSIGNMENT_OPERATORS };
var f = ["delete", "!"];
export { f as BOOLEAN_UNARY_OPERATORS };
var d = ["+", "-", "~"];
export { d as NUMBER_UNARY_OPERATORS };
var h = ["typeof"];
export { h as STRING_UNARY_OPERATORS };
var y = ["void", "throw"].concat(f, d, h);
export { y as UNARY_OPERATORS };
exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var m = Symbol.for("var used to be block scoped");
export { m as BLOCK_SCOPED_SYMBOL };
var v = Symbol.for("should not be considered a local binding");
export { v as NOT_LOCAL_BINDING };