"use strict";

var r = require("../../806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_OR_BLOCK_KEYS = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.NOT_LOCAL_BINDING = exports.LOGICAL_OPERATORS = exports.INHERIT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.EQUALITY_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BLOCK_SCOPED_SYMBOL = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = void 0;
exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.FLATTENABLE_KEYS = ["body", "expressions"];
exports.FOR_INIT_KEYS = ["left", "init"];
exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var a = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = a;
exports.UPDATE_OPERATORS = ["++", "--"];
var i = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = i;
var o = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = o;
var s = [].concat(o, ["in", "instanceof"]);
exports.COMPARISON_BINARY_OPERATORS = s;
var u = [].concat(r(s), i);
exports.BOOLEAN_BINARY_OPERATORS = u;
var l = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = l;
var p = ["+"].concat(l, r(u));
exports.BINARY_OPERATORS = p;
var f = ["=", "+="].concat(r(l.map(function (e) {
  return e + "=";
})), r(a.map(function (e) {
  return e + "=";
})));
exports.ASSIGNMENT_OPERATORS = f;
var d = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = d;
var c = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = c;
var y = ["typeof"];
exports.STRING_UNARY_OPERATORS = y;
var T = ["void", "throw"].concat(d, c, y);
exports.UNARY_OPERATORS = T;
exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var m = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = m;
var S = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = S;