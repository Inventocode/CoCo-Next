"use strict";

exports.ArrowFunctionExpression = function (e) {
  if (e.async) {
    this.word("async");
    this.space();
  }
  var t = e.params[0];
  if (this.format.retainLines || this.format.auxiliaryCommentBefore || this.format.auxiliaryCommentAfter || 1 !== e.params.length || !r(t) || function (e, t) {
    var n;
    var r;
    return !!(e.typeParameters || e.returnType || e.predicate || t.typeAnnotation || t.optional || null != (n = t.leadingComments) && n.length || null != (r = t.trailingComments) && r.length);
  }(e, t)) {
    this._params(e);
  } else {
    this.print(t, e);
  }
  this._predicate(e);
  this.space();
  this.token("=>");
  this.space();
  this.print(e.body, e);
};
exports.FunctionDeclaration = t.FunctionExpression = function (e) {
  this._functionHead(e);
  this.space();
  this.print(e.body, e);
};
exports._functionHead = function (e) {
  if (e.async) {
    this.word("async");
    this.space();
  }
  this.word("function");
  if (e.generator) {
    this.token("*");
  }
  this.printInnerComments(e);
  this.space();
  if (e.id) {
    this.print(e.id, e);
  }
  this._params(e);
  this._predicate(e);
};
exports._methodHead = function (e) {
  var t = e.kind;
  var n = e.key;
  if (!("get" !== t && "set" !== t)) {
    this.word(t);
    this.space();
  }
  if (e.async) {
    this._catchUp("start", n.loc);
    this.word("async");
    this.space();
  }
  if (!("method" !== t && "init" !== t)) {
    if (e.generator) {
      this.token("*");
    }
  }
  if (e.computed) {
    this.token("[");
    this.print(n, e);
    this.token("]");
  } else {
    this.print(n, e);
  }
  if (e.optional) {
    this.token("?");
  }
  this._params(e);
};
exports._param = function (e, t) {
  this.printJoin(e.decorators, e);
  this.print(e, t);
  if (e.optional) {
    this.token("?");
  }
  this.print(e.typeAnnotation, e);
};
exports._parameters = function (e, t) {
  for (var n = 0; n < e.length; n++) {
    this._param(e[n], t);
    if (n < e.length - 1) {
      this.token(",");
      this.space();
    }
  }
};
exports._params = function (e) {
  this.print(e.typeParameters, e);
  this.token("(");
  this._parameters(e.params, e);
  this.token(")");
  this.print(e.returnType, e);
};
exports._predicate = function (e) {
  if (e.predicate) {
    if (!e.returnType) {
      this.token(":");
    }
    this.space();
    this.print(e.predicate, e);
  }
};
var r = require("../../../../2623/index").isIdentifier;