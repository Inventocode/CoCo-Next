"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BlockStatement = function (e) {
  var t;
  this.token("{");
  this.printInnerComments(e);
  var n = null == (t = e.directives) ? void 0 : t.length;
  if (e.body.length || n) {
    this.newline();
    this.printSequence(e.directives, e, {
      indent: !0
    });
    if (n) {
      this.newline();
    }
    this.printSequence(e.body, e, {
      indent: !0
    });
    this.removeTrailingNewline();
    this.source("end", e.loc);
    if (!this.endsWith(10)) {
      this.newline();
    }
    this.rightBrace();
  } else {
    this.source("end", e.loc);
    this.token("}");
  }
};
exports.Directive = function (e) {
  this.print(e.value, e);
  this.semicolon();
};
exports.DirectiveLiteral = function (e) {
  var t = this.getPossibleRaw(e);
  if (null != t) {
    return void this.token(t);
  }
  var n = e.value;
  if (i.test(n)) {
    if (r.test(n)) {
      throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");
    }
    this.token("'".concat(n, "'"));
  } else {
    this.token('"'.concat(n, '"'));
  }
};
exports.File = function (e) {
  if (e.program) {
    this.print(e.program.interpreter, e);
  }
  this.print(e.program, e);
};
exports.InterpreterDirective = function (e) {
  this.token("#!".concat(e.value, "\n"));
};
exports.Placeholder = function (e) {
  this.token("%%");
  this.print(e.name);
  this.token("%%");
  if ("Statement" === e.expectedNode) {
    this.semicolon();
  }
};
exports.Program = function (e) {
  this.printInnerComments(e, !1);
  this.printSequence(e.directives, e);
  if (e.directives && e.directives.length) {
    this.newline();
  }
  this.printSequence(e.body, e);
};
var r = /(?:^|[^\\])(?:\\\\)*'/;
var i = /(?:^|[^\\])(?:\\\\)*"/;