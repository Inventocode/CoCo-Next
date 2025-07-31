"use strict";

var r = require("../../../../../2873/2721/805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_OR_BLOCK_KEYS = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.NOT_LOCAL_BINDING = exports.LOGICAL_OPERATORS = exports.INHERIT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.EQUALITY_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BLOCK_SCOPED_SYMBOL = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = void 0;
exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.FLATTENABLE_KEYS = ["body", "expressions"];
exports.FOR_INIT_KEYS = ["left", "init"];
exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
var i = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = i;
exports.UPDATE_OPERATORS = ["++", "--"];
var a = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = a;
var s = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = s;
var o = [].concat(s, ["in", "instanceof"]);
exports.COMPARISON_BINARY_OPERATORS = o;
var l = [].concat(r(o), a);
exports.BOOLEAN_BINARY_OPERATORS = l;
var u = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = u;
var c = ["+"].concat(u, r(l));
exports.BINARY_OPERATORS = c;
var p = ["=", "+="].concat(r(u.map(function (e) {
  return e + "=";
})), r(i.map(function (e) {
  return e + "=";
})));
exports.ASSIGNMENT_OPERATORS = p;
var f = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = f;
var d = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = d;
var h = ["typeof"];
exports.STRING_UNARY_OPERATORS = h;
var y = ["void", "throw"].concat(f, d, h);
exports.UNARY_OPERATORS = y;
exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
var m = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = m;
var v = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = v;