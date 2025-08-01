"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.isReservedWord = l;
exports.isStrictReservedWord = u;
exports.isStrictBindOnlyReservedWord = c;
exports.isStrictBindReservedWord = function (e, t) {
  return u(e, t) || c(e);
};
exports.isKeyword = function (e) {
  return a.has(e);
};
var r = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"];
var i = ["eval", "arguments"];
var a = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]);
var s = new Set(r);
var o = new Set(i);
function l(e, t) {
  return t && "await" === e || "enum" === e;
}
function u(e, t) {
  return l(e, t) || s.has(e);
}
function c(e) {
  return o.has(e);
}