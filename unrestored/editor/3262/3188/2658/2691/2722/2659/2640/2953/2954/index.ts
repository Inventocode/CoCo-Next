"use strict";

export { w as ArrayExpression };
exports.AssignmentExpression = function () {
  return this.get("right").getTypeAnnotation();
};
exports.BinaryExpression = function (e) {
  var t = e.operator;
  if (o.indexOf(t) >= 0) {
    return S();
  }
  if (a.indexOf(t) >= 0) {
    return f();
  }
  if ("+" === t) {
    var n = this.get("right");
    var r = this.get("left");
    return r.isBaseType("number") && n.isBaseType("number") ? S() : r.isBaseType("string") || n.isBaseType("string") ? E() : P([E(), S()]);
  }
};
exports.BooleanLiteral = function () {
  return f();
};
exports.CallExpression = function () {
  var e = this.node.callee;
  if (I(e)) {
    return p(E());
  }
  if (C(e) || N(e)) {
    return p(c());
  }
  if (_(e)) {
    return p(x([E(), c()]));
  }
  return D(this.get("callee"));
};
exports.ConditionalExpression = function () {
  var e = [this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()];
  if (T(e[0]) && y) {
    return y(e);
  }
  if (h) {
    return h(e);
  }
  return m(e);
};
exports.ClassDeclaration = t.ClassExpression = t.FunctionDeclaration = t.ArrowFunctionExpression = t.FunctionExpression = function () {
  return v(g("Function"));
};
export { default as Identifier } from "./2955";
exports.LogicalExpression = function () {
  var e = [this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()];
  if (T(e[0]) && y) {
    return y(e);
  }
  if (h) {
    return h(e);
  }
  return m(e);
};
exports.NewExpression = function (e) {
  if (this.get("callee").isIdentifier()) {
    return v(e.callee);
  }
};
exports.NullLiteral = function () {
  return b();
};
exports.NumericLiteral = function () {
  return S();
};
exports.ObjectExpression = function () {
  return v(g("Object"));
};
exports.ParenthesizedExpression = function () {
  return this.get("expression").getTypeAnnotation();
};
exports.RegExpLiteral = function () {
  return v(g("RegExp"));
};
export { O as RestElement };
exports.SequenceExpression = function () {
  return this.get("expressions").pop().getTypeAnnotation();
};
exports.StringLiteral = function () {
  return E();
};
exports.TaggedTemplateExpression = function () {
  return D(this.get("tag"));
};
exports.TemplateLiteral = function () {
  return E();
};
export { k as TypeCastExpression };
exports.UnaryExpression = function (e) {
  var t = e.operator;
  if ("void" === t) {
    return A();
  }
  if (l.indexOf(t) >= 0) {
    return S();
  }
  if (u.indexOf(t) >= 0) {
    return E();
  }
  if (s.indexOf(t) >= 0) {
    return f();
  }
};
exports.UpdateExpression = function (e) {
  var t = e.operator;
  if ("++" === t || "--" === t) {
    return S();
  }
};
exports.VariableDeclarator = function () {
  var e;
  if (!this.get("id").isIdentifier()) {
    return;
  }
  var t = this.get("init");
  var n = t.getTypeAnnotation();
  if ("AnyTypeAnnotation" === (null == (e = n) ? void 0 : e.type) && t.isCallExpression() && t.get("callee").isIdentifier({
    name: "Array"
  }) && !t.scope.hasBinding("Array", !0)) {
    n = w();
  }
  return n;
};
import * as r from "../../../../2624/index";
import * as i from "./2955";
var a = r.BOOLEAN_BINARY_OPERATORS;
var s = r.BOOLEAN_UNARY_OPERATORS;
var o = r.NUMBER_BINARY_OPERATORS;
var l = r.NUMBER_UNARY_OPERATORS;
var u = r.STRING_UNARY_OPERATORS;
var c = r.anyTypeAnnotation;
var p = r.arrayTypeAnnotation;
var f = r.booleanTypeAnnotation;
var d = r.buildMatchMemberExpression;
var h = r.createFlowUnionType;
var y = r.createTSUnionType;
var m = r.createUnionTypeAnnotation;
var v = r.genericTypeAnnotation;
var g = r.identifier;
var T = r.isTSTypeAnnotation;
var b = r.nullLiteralTypeAnnotation;
var S = r.numberTypeAnnotation;
var E = r.stringTypeAnnotation;
var x = r.tupleTypeAnnotation;
var P = r.unionTypeAnnotation;
var A = r.voidTypeAnnotation;
function k(e) {
  return e.typeAnnotation;
}
function w() {
  return v(g("Array"));
}
function O() {
  return w();
}
k.validParent = !0;
O.validParent = !0;
var C = d("Array.from");
var I = d("Object.keys");
var N = d("Object.values");
var _ = d("Object.entries");
function D(e) {
  if ((e = e.resolve()).isFunction()) {
    if (e.is("async")) {
      return e.is("generator") ? v(g("AsyncIterator")) : v(g("Promise"));
    }
    if (e.node.returnType) {
      return e.node.returnType;
    }
  }
}