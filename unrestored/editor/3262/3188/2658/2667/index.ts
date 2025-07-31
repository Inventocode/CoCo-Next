"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.statements = exports.statement = exports.smart = exports.program = exports.expression = exports.default = void 0;
var r = require("./3067");
var i = require("./3068/index");
var a = (0, i.default)(r.smart);
exports.smart = a;
var s = (0, i.default)(r.statement);
exports.statement = s;
var o = (0, i.default)(r.statements);
exports.statements = o;
var l = (0, i.default)(r.expression);
exports.expression = l;
var u = (0, i.default)(r.program);
exports.program = u;
var c = Object.assign(a.bind(void 0), {
  smart: a,
  statement: s,
  statements: o,
  expression: l,
  program: u,
  ast: a.ast
});
exports.default = c;