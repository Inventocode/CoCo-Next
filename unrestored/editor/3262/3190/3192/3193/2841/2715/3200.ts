"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.isReservedWord = u;
exports.isStrictReservedWord = l;
exports.isStrictBindOnlyReservedWord = p;
exports.isStrictBindReservedWord = function (e, t) {
  return l(e, t) || p(e);
};
exports.isKeyword = function (e) {
  return i.has(e);
};
var r = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"];
var a = ["eval", "arguments"];
var i = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]);
var o = new Set(r);
var s = new Set(a);
function u(e, t) {
  return t && "await" === e || "enum" === e;
}
function l(e, t) {
  return u(e, t) || o.has(e);
}
function p(e) {
  return s.has(e);
}