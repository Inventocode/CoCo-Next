"use strict";

exports.ClassBody = function (e) {
  this.token("{");
  this.printInnerComments(e);
  if (0 === e.body.length) {
    this.token("}");
  } else {
    this.newline();
    this.indent();
    this.printSequence(e.body, e);
    this.dedent();
    if (!this.endsWith(10)) {
      this.newline();
    }
    this.rightBrace();
  }
};
exports.ClassExpression = t.ClassDeclaration = function (e, t) {
  if (!(this.format.decoratorsBeforeExport && (i(t) || a(t)))) {
    this.printJoin(e.decorators, e);
  }
  if (e.declare) {
    this.word("declare");
    this.space();
  }
  if (e.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("class");
  this.printInnerComments(e);
  if (e.id) {
    this.space();
    this.print(e.id, e);
  }
  this.print(e.typeParameters, e);
  if (e.superClass) {
    this.space();
    this.word("extends");
    this.space();
    this.print(e.superClass, e);
    this.print(e.superTypeParameters, e);
  }
  if (e.implements) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(e.implements, e);
  }
  this.space();
  this.print(e.body, e);
};
exports.ClassMethod = function (e) {
  this._classMethodHead(e);
  this.space();
  this.print(e.body, e);
};
exports.ClassPrivateMethod = function (e) {
  this._classMethodHead(e);
  this.space();
  this.print(e.body, e);
};
exports.ClassPrivateProperty = function (e) {
  this.printJoin(e.decorators, e);
  if (e.static) {
    this.word("static");
    this.space();
  }
  this.print(e.key, e);
  this.print(e.typeAnnotation, e);
  if (e.value) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.value, e);
  }
  this.semicolon();
};
exports.ClassProperty = function (e) {
  this.printJoin(e.decorators, e);
  this.source("end", e.key.loc);
  this.tsPrintClassMemberModifiers(e, !0);
  if (e.computed) {
    this.token("[");
    this.print(e.key, e);
    this.token("]");
  } else {
    this._variance(e);
    this.print(e.key, e);
  }
  if (e.optional) {
    this.token("?");
  }
  if (e.definite) {
    this.token("!");
  }
  this.print(e.typeAnnotation, e);
  if (e.value) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.value, e);
  }
  this.semicolon();
};
exports.StaticBlock = function (e) {
  this.word("static");
  this.space();
  this.token("{");
  if (0 === e.body.length) {
    this.token("}");
  } else {
    this.newline();
    this.printSequence(e.body, e, {
      indent: !0
    });
    this.rightBrace();
  }
};
exports._classMethodHead = function (e) {
  this.printJoin(e.decorators, e);
  this.source("end", e.key.loc);
  this.tsPrintClassMemberModifiers(e, !1);
  this._methodHead(e);
};
import * as r from "../../../../../2624/index";
var i = r.isExportDefaultDeclaration;
var a = r.isExportNamedDeclaration;