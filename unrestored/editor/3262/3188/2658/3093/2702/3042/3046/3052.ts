"use strict";

var r = require("../../../../../../2873/2721/805/index");
var i = require("../../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.AnyTypeAnnotation = function () {
  this.word("any");
};
exports.ArrayTypeAnnotation = function (e) {
  this.print(e.elementType, e);
  this.token("[");
  this.token("]");
};
exports.BooleanLiteralTypeAnnotation = function (e) {
  this.word(e.value ? "true" : "false");
};
exports.BooleanTypeAnnotation = function () {
  this.word("boolean");
};
exports.DeclareClass = function (e, t) {
  if (!l(t)) {
    this.word("declare");
    this.space();
  }
  this.word("class");
  this.space();
  this._interfaceish(e);
};
exports.DeclareExportAllDeclaration = function () {
  this.word("declare");
  this.space();
  s.ExportAllDeclaration.apply(this, arguments);
};
exports.DeclareExportDeclaration = function (e) {
  this.word("declare");
  this.space();
  this.word("export");
  this.space();
  if (e.default) {
    this.word("default");
    this.space();
  }
  d.apply(this, arguments);
};
exports.DeclareFunction = function (e, t) {
  if (!l(t)) {
    this.word("declare");
    this.space();
  }
  this.word("function");
  this.space();
  this.print(e.id, e);
  this.print(e.id.typeAnnotation.typeAnnotation, e);
  if (e.predicate) {
    this.space();
    this.print(e.predicate, e);
  }
  this.semicolon();
};
exports.DeclareInterface = function (e) {
  this.word("declare");
  this.space();
  this.InterfaceDeclaration(e);
};
exports.DeclareModule = function (e) {
  this.word("declare");
  this.space();
  this.word("module");
  this.space();
  this.print(e.id, e);
  this.space();
  this.print(e.body, e);
};
exports.DeclareModuleExports = function (e) {
  this.word("declare");
  this.space();
  this.word("module");
  this.token(".");
  this.word("exports");
  this.print(e.typeAnnotation, e);
};
exports.DeclareOpaqueType = function (e, t) {
  if (!l(t)) {
    this.word("declare");
    this.space();
  }
  this.OpaqueType(e);
};
exports.DeclareTypeAlias = function (e) {
  this.word("declare");
  this.space();
  this.TypeAlias(e);
};
exports.DeclareVariable = function (e, t) {
  if (!l(t)) {
    this.word("declare");
    this.space();
  }
  this.word("var");
  this.space();
  this.print(e.id, e);
  this.print(e.id.typeAnnotation, e);
  this.semicolon();
};
exports.DeclaredPredicate = function (e) {
  this.token("%");
  this.word("checks");
  this.token("(");
  this.print(e.value, e);
  this.token(")");
};
exports.EmptyTypeAnnotation = function () {
  this.word("empty");
};
exports.EnumBooleanBody = function (e) {
  c(this, "boolean", e.explicitType);
  p(this, e);
};
exports.EnumBooleanMember = function (e) {
  f(this, e);
};
exports.EnumDeclaration = function (e) {
  var t = e.id;
  var n = e.body;
  this.word("enum");
  this.space();
  this.print(t, e);
  this.print(n, e);
};
exports.EnumDefaultedMember = function (e) {
  var t = e.id;
  this.print(t, e);
  this.token(",");
};
exports.EnumNumberBody = function (e) {
  c(this, "number", e.explicitType);
  p(this, e);
};
exports.EnumNumberMember = function (e) {
  f(this, e);
};
exports.EnumStringBody = function (e) {
  c(this, "string", e.explicitType);
  p(this, e);
};
exports.EnumStringMember = function (e) {
  f(this, e);
};
exports.EnumSymbolBody = function (e) {
  c(this, "symbol", !0);
  p(this, e);
};
exports.ExistsTypeAnnotation = function () {
  this.token("*");
};
exports.FunctionTypeAnnotation = function (e, t) {
  this.print(e.typeParameters, e);
  this.token("(");
  if (e.this) {
    this.word("this");
    this.token(":");
    this.space();
    this.print(e.this.typeAnnotation, e);
    if (e.params.length || e.rest) {
      this.token(",");
      this.space();
    }
  }
  this.printList(e.params, e);
  if (e.rest) {
    if (e.params.length) {
      this.token(",");
      this.space();
    }
    this.token("...");
    this.print(e.rest, e);
  }
  this.token(")");
  if ("ObjectTypeCallProperty" === t.type || "DeclareFunction" === t.type || "ObjectTypeProperty" === t.type && t.method) {
    this.token(":");
  } else {
    this.space();
    this.token("=>");
  }
  this.space();
  this.print(e.returnType, e);
};
exports.FunctionTypeParam = function (e) {
  this.print(e.name, e);
  if (e.optional) {
    this.token("?");
  }
  if (e.name) {
    this.token(":");
    this.space();
  }
  this.print(e.typeAnnotation, e);
};
exports.IndexedAccessType = function (e) {
  this.print(e.objectType, e);
  this.token("[");
  this.print(e.indexType, e);
  this.token("]");
};
exports.InferredPredicate = function () {
  this.token("%");
  this.word("checks");
};
exports.InterfaceDeclaration = function (e) {
  this.word("interface");
  this.space();
  this._interfaceish(e);
};
exports.GenericTypeAnnotation = exports.ClassImplements = exports.InterfaceExtends = function (e) {
  this.print(e.id, e);
  this.print(e.typeParameters, e);
};
exports.InterfaceTypeAnnotation = function (e) {
  this.word("interface");
  if (e.extends && e.extends.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(e.extends, e);
  }
  this.space();
  this.print(e.body, e);
};
exports.IntersectionTypeAnnotation = function (e) {
  this.printJoin(e.types, e, {
    separator: h
  });
};
exports.MixedTypeAnnotation = function () {
  this.word("mixed");
};
exports.NullLiteralTypeAnnotation = function () {
  this.word("null");
};
exports.NullableTypeAnnotation = function (e) {
  this.token("?");
  this.print(e.typeAnnotation, e);
};
Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
  enumerable: !0,
  get: function () {
    return o.NumericLiteral;
  }
});
exports.NumberTypeAnnotation = function () {
  this.word("number");
};
exports.ObjectTypeAnnotation = function (e) {
  var t = this;
  if (e.exact) {
    this.token("{|");
  } else {
    this.token("{");
  }
  var n = [].concat(r(e.properties), r(e.callProperties || []), r(e.indexers || []), r(e.internalSlots || []));
  if (n.length) {
    this.space();
    this.printJoin(n, e, {
      addNewlines: function (e) {
        if (e && !n[0]) {
          return 1;
        }
      },
      indent: !0,
      statement: !0,
      iterator: function () {
        if (1 !== n.length || e.inexact) {
          t.token(",");
          t.space();
        }
      }
    });
    this.space();
  }
  if (e.inexact) {
    this.indent();
    this.token("...");
    if (n.length) {
      this.newline();
    }
    this.dedent();
  }
  if (e.exact) {
    this.token("|}");
  } else {
    this.token("}");
  }
};
exports.ObjectTypeCallProperty = function (e) {
  if (e.static) {
    this.word("static");
    this.space();
  }
  this.print(e.value, e);
};
exports.ObjectTypeIndexer = function (e) {
  if (e.static) {
    this.word("static");
    this.space();
  }
  this._variance(e);
  this.token("[");
  if (e.id) {
    this.print(e.id, e);
    this.token(":");
    this.space();
  }
  this.print(e.key, e);
  this.token("]");
  this.token(":");
  this.space();
  this.print(e.value, e);
};
exports.ObjectTypeInternalSlot = function (e) {
  if (e.static) {
    this.word("static");
    this.space();
  }
  this.token("[");
  this.token("[");
  this.print(e.id, e);
  this.token("]");
  this.token("]");
  if (e.optional) {
    this.token("?");
  }
  if (!e.method) {
    this.token(":");
    this.space();
  }
  this.print(e.value, e);
};
exports.ObjectTypeProperty = function (e) {
  if (e.proto) {
    this.word("proto");
    this.space();
  }
  if (e.static) {
    this.word("static");
    this.space();
  }
  if (!("get" !== e.kind && "set" !== e.kind)) {
    this.word(e.kind);
    this.space();
  }
  this._variance(e);
  this.print(e.key, e);
  if (e.optional) {
    this.token("?");
  }
  if (!e.method) {
    this.token(":");
    this.space();
  }
  this.print(e.value, e);
};
exports.ObjectTypeSpreadProperty = function (e) {
  this.token("...");
  this.print(e.argument, e);
};
exports.OpaqueType = function (e) {
  this.word("opaque");
  this.space();
  this.word("type");
  this.space();
  this.print(e.id, e);
  this.print(e.typeParameters, e);
  if (e.supertype) {
    this.token(":");
    this.space();
    this.print(e.supertype, e);
  }
  if (e.impltype) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.impltype, e);
  }
  this.semicolon();
};
exports.OptionalIndexedAccessType = function (e) {
  this.print(e.objectType, e);
  if (e.optional) {
    this.token("?.");
  }
  this.token("[");
  this.print(e.indexType, e);
  this.token("]");
};
exports.QualifiedTypeIdentifier = function (e) {
  this.print(e.qualification, e);
  this.token(".");
  this.print(e.id, e);
};
Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
  enumerable: !0,
  get: function () {
    return o.StringLiteral;
  }
});
exports.StringTypeAnnotation = function () {
  this.word("string");
};
exports.SymbolTypeAnnotation = function () {
  this.word("symbol");
};
exports.ThisTypeAnnotation = function () {
  this.word("this");
};
exports.TupleTypeAnnotation = function (e) {
  this.token("[");
  this.printList(e.types, e);
  this.token("]");
};
exports.TypeAlias = function (e) {
  this.word("type");
  this.space();
  this.print(e.id, e);
  this.print(e.typeParameters, e);
  this.space();
  this.token("=");
  this.space();
  this.print(e.right, e);
  this.semicolon();
};
exports.TypeAnnotation = function (e) {
  this.token(":");
  this.space();
  if (e.optional) {
    this.token("?");
  }
  this.print(e.typeAnnotation, e);
};
exports.TypeCastExpression = function (e) {
  this.token("(");
  this.print(e.expression, e);
  this.print(e.typeAnnotation, e);
  this.token(")");
};
exports.TypeParameter = function (e) {
  this._variance(e);
  this.word(e.name);
  if (e.bound) {
    this.print(e.bound, e);
  }
  if (e.default) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.default, e);
  }
};
exports.TypeParameterDeclaration = exports.TypeParameterInstantiation = function (e) {
  this.token("<");
  this.printList(e.params, e, {});
  this.token(">");
};
exports.TypeofTypeAnnotation = function (e) {
  this.word("typeof");
  this.space();
  this.print(e.argument, e);
};
exports.UnionTypeAnnotation = function (e) {
  this.printJoin(e.types, e, {
    separator: y
  });
};
exports.Variance = function (e) {
  if ("plus" === e.kind) {
    this.token("+");
  } else {
    this.token("-");
  }
};
exports.VoidTypeAnnotation = function () {
  this.word("void");
};
exports._interfaceish = function (e) {
  var t;
  this.print(e.id, e);
  this.print(e.typeParameters, e);
  if (null != (t = e.extends) && t.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(e.extends, e);
  }
  if (e.mixins && e.mixins.length) {
    this.space();
    this.word("mixins");
    this.space();
    this.printList(e.mixins, e);
  }
  if (e.implements && e.implements.length) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(e.implements, e);
  }
  this.space();
  this.print(e.body, e);
};
exports._variance = function (e) {
  if (e.variance) {
    if ("plus" === e.variance.kind) {
      this.token("+");
    } else {
      if ("minus" === e.variance.kind) {
        this.token("-");
      }
    }
  }
};
var a = require("../../../../2623/index");
var s = require("./2785");
var o = require("./2786/index");
var l = a.isDeclareExportDeclaration;
var u = a.isStatement;
function c(e, t, n) {
  if (n) {
    e.space();
    e.word("of");
    e.space();
    e.word(t);
  }
  e.space();
}
function p(e, t) {
  var n = t.members;
  e.token("{");
  e.indent();
  e.newline();
  var r;
  var a = i(n);
  try {
    for (a.s(); !(r = a.n()).done;) {
      var s = r.value;
      e.print(s, t);
      e.newline();
    }
  } catch (o) {
    a.e(o);
  } finally {
    a.f();
  }
  if (t.hasUnknownMembers) {
    e.token("...");
    e.newline();
  }
  e.dedent();
  e.token("}");
}
function f(e, t) {
  var n = t.id;
  var r = t.init;
  e.print(n, t);
  e.space();
  e.token("=");
  e.space();
  e.print(r, t);
  e.token(",");
}
function d(e) {
  if (e.declaration) {
    var t = e.declaration;
    this.print(t, e);
    if (!u(t)) {
      this.semicolon();
    }
  } else {
    this.token("{");
    if (e.specifiers.length) {
      this.space();
      this.printList(e.specifiers, e);
      this.space();
    }
    this.token("}");
    if (e.source) {
      this.space();
      this.word("from");
      this.space();
      this.print(e.source, e);
    }
    this.semicolon();
  }
}
function h() {
  this.space();
  this.token("&");
  this.space();
}
function y() {
  this.space();
  this.token("|");
  this.space();
}