"use strict";

var r = require("../../../../../../3200/494");
function i(e, t) {
  if (!0 !== t) {
    e.token(t);
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.TSAnyKeyword = function () {
  this.word("any");
};
exports.TSArrayType = function (e) {
  this.print(e.elementType, e);
  this.token("[]");
};
exports.TSAsExpression = function (e) {
  var t = e.expression;
  var n = e.typeAnnotation;
  this.print(t, e);
  this.space();
  this.word("as");
  this.space();
  this.print(n, e);
};
exports.TSBigIntKeyword = function () {
  this.word("bigint");
};
exports.TSBooleanKeyword = function () {
  this.word("boolean");
};
exports.TSCallSignatureDeclaration = function (e) {
  this.tsPrintSignatureDeclarationBase(e);
  this.token(";");
};
exports.TSConditionalType = function (e) {
  this.print(e.checkType);
  this.space();
  this.word("extends");
  this.space();
  this.print(e.extendsType);
  this.space();
  this.token("?");
  this.space();
  this.print(e.trueType);
  this.space();
  this.token(":");
  this.space();
  this.print(e.falseType);
};
exports.TSConstructSignatureDeclaration = function (e) {
  this.word("new");
  this.space();
  this.tsPrintSignatureDeclarationBase(e);
  this.token(";");
};
exports.TSConstructorType = function (e) {
  if (e.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("new");
  this.space();
  this.tsPrintFunctionOrConstructorType(e);
};
exports.TSDeclareFunction = function (e) {
  if (e.declare) {
    this.word("declare");
    this.space();
  }
  this._functionHead(e);
  this.token(";");
};
exports.TSDeclareMethod = function (e) {
  this._classMethodHead(e);
  this.token(";");
};
exports.TSEnumDeclaration = function (e) {
  var t = e.declare;
  var n = e.const;
  var r = e.id;
  var i = e.members;
  if (t) {
    this.word("declare");
    this.space();
  }
  if (n) {
    this.word("const");
    this.space();
  }
  this.word("enum");
  this.space();
  this.print(r, e);
  this.space();
  this.tsPrintBraced(i, e);
};
exports.TSEnumMember = function (e) {
  var t = e.id;
  var n = e.initializer;
  this.print(t, e);
  if (n) {
    this.space();
    this.token("=");
    this.space();
    this.print(n, e);
  }
  this.token(",");
};
exports.TSExportAssignment = function (e) {
  this.word("export");
  this.space();
  this.token("=");
  this.space();
  this.print(e.expression, e);
  this.token(";");
};
exports.TSExpressionWithTypeArguments = function (e) {
  this.print(e.expression, e);
  this.print(e.typeParameters, e);
};
exports.TSExternalModuleReference = function (e) {
  this.token("require(");
  this.print(e.expression, e);
  this.token(")");
};
exports.TSFunctionType = function (e) {
  this.tsPrintFunctionOrConstructorType(e);
};
exports.TSImportEqualsDeclaration = function (e) {
  var t = e.isExport;
  var n = e.id;
  var r = e.moduleReference;
  if (t) {
    this.word("export");
    this.space();
  }
  this.word("import");
  this.space();
  this.print(n, e);
  this.space();
  this.token("=");
  this.space();
  this.print(r, e);
  this.token(";");
};
exports.TSImportType = function (e) {
  var t = e.argument;
  var n = e.qualifier;
  var r = e.typeParameters;
  this.word("import");
  this.token("(");
  this.print(t, e);
  this.token(")");
  if (n) {
    this.token(".");
    this.print(n, e);
  }
  if (r) {
    this.print(r, e);
  }
};
exports.TSIndexSignature = function (e) {
  var t = e.readonly;
  if (e.static) {
    this.word("static");
    this.space();
  }
  if (t) {
    this.word("readonly");
    this.space();
  }
  this.token("[");
  this._parameters(e.parameters, e);
  this.token("]");
  this.print(e.typeAnnotation, e);
  this.token(";");
};
exports.TSIndexedAccessType = function (e) {
  this.print(e.objectType, e);
  this.token("[");
  this.print(e.indexType, e);
  this.token("]");
};
exports.TSInferType = function (e) {
  this.token("infer");
  this.space();
  this.print(e.typeParameter);
};
exports.TSInterfaceBody = function (e) {
  this.tsPrintTypeLiteralOrInterfaceBody(e.body, e);
};
exports.TSInterfaceDeclaration = function (e) {
  var t = e.declare;
  var n = e.id;
  var r = e.typeParameters;
  var i = e.extends;
  var a = e.body;
  if (t) {
    this.word("declare");
    this.space();
  }
  this.word("interface");
  this.space();
  this.print(n, e);
  this.print(r, e);
  if (null != i && i.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(i, e);
  }
  this.space();
  this.print(a, e);
};
exports.TSIntersectionType = function (e) {
  this.tsPrintUnionOrIntersectionType(e, "&");
};
exports.TSIntrinsicKeyword = function () {
  this.word("intrinsic");
};
exports.TSLiteralType = function (e) {
  this.print(e.literal, e);
};
exports.TSMappedType = function (e) {
  var t = e.nameType;
  var n = e.optional;
  var r = e.readonly;
  var a = e.typeParameter;
  this.token("{");
  this.space();
  if (r) {
    i(this, r);
    this.word("readonly");
    this.space();
  }
  this.token("[");
  this.word(a.name);
  this.space();
  this.word("in");
  this.space();
  this.print(a.constraint, a);
  if (t) {
    this.space();
    this.word("as");
    this.space();
    this.print(t, e);
  }
  this.token("]");
  if (n) {
    i(this, n);
    this.token("?");
  }
  this.token(":");
  this.space();
  this.print(e.typeAnnotation, e);
  this.space();
  this.token("}");
};
exports.TSMethodSignature = function (e) {
  var t = e.kind;
  if (!("set" !== t && "get" !== t)) {
    this.word(t);
    this.space();
  }
  this.tsPrintPropertyOrMethodName(e);
  this.tsPrintSignatureDeclarationBase(e);
  this.token(";");
};
exports.TSModuleBlock = function (e) {
  this.tsPrintBraced(e.body, e);
};
exports.TSModuleDeclaration = function (e) {
  var t = e.declare;
  var n = e.id;
  if (t) {
    this.word("declare");
    this.space();
  }
  if (!e.global) {
    this.word("Identifier" === n.type ? "namespace" : "module");
    this.space();
  }
  this.print(n, e);
  if (!e.body) {
    return void this.token(";");
  }
  var r = e.body;
  for (; "TSModuleDeclaration" === r.type;) {
    this.token(".");
    this.print(r.id, r);
    r = r.body;
  }
  this.space();
  this.print(r, e);
};
exports.TSNamedTupleMember = function (e) {
  this.print(e.label, e);
  if (e.optional) {
    this.token("?");
  }
  this.token(":");
  this.space();
  this.print(e.elementType, e);
};
exports.TSNamespaceExportDeclaration = function (e) {
  this.word("export");
  this.space();
  this.word("as");
  this.space();
  this.word("namespace");
  this.space();
  this.print(e.id, e);
};
exports.TSNeverKeyword = function () {
  this.word("never");
};
exports.TSNonNullExpression = function (e) {
  this.print(e.expression, e);
  this.token("!");
};
exports.TSNullKeyword = function () {
  this.word("null");
};
exports.TSNumberKeyword = function () {
  this.word("number");
};
exports.TSObjectKeyword = function () {
  this.word("object");
};
exports.TSOptionalType = function (e) {
  this.print(e.typeAnnotation, e);
  this.token("?");
};
exports.TSParameterProperty = function (e) {
  if (e.accessibility) {
    this.word(e.accessibility);
    this.space();
  }
  if (e.readonly) {
    this.word("readonly");
    this.space();
  }
  this._param(e.parameter);
};
exports.TSParenthesizedType = function (e) {
  this.token("(");
  this.print(e.typeAnnotation, e);
  this.token(")");
};
exports.TSPropertySignature = function (e) {
  var t = e.readonly;
  var n = e.initializer;
  if (t) {
    this.word("readonly");
    this.space();
  }
  this.tsPrintPropertyOrMethodName(e);
  this.print(e.typeAnnotation, e);
  if (n) {
    this.space();
    this.token("=");
    this.space();
    this.print(n, e);
  }
  this.token(";");
};
exports.TSQualifiedName = function (e) {
  this.print(e.left, e);
  this.token(".");
  this.print(e.right, e);
};
exports.TSRestType = function (e) {
  this.token("...");
  this.print(e.typeAnnotation, e);
};
exports.TSStringKeyword = function () {
  this.word("string");
};
exports.TSSymbolKeyword = function () {
  this.word("symbol");
};
exports.TSThisType = function () {
  this.word("this");
};
exports.TSTupleType = function (e) {
  this.token("[");
  this.printList(e.elementTypes, e);
  this.token("]");
};
exports.TSTypeAliasDeclaration = function (e) {
  var t = e.declare;
  var n = e.id;
  var r = e.typeParameters;
  var i = e.typeAnnotation;
  if (t) {
    this.word("declare");
    this.space();
  }
  this.word("type");
  this.space();
  this.print(n, e);
  this.print(r, e);
  this.space();
  this.token("=");
  this.space();
  this.print(i, e);
  this.token(";");
};
exports.TSTypeAnnotation = function (e) {
  this.token(":");
  this.space();
  if (e.optional) {
    this.token("?");
  }
  this.print(e.typeAnnotation, e);
};
exports.TSTypeAssertion = function (e) {
  var t = e.typeAnnotation;
  var n = e.expression;
  this.token("<");
  this.print(t, e);
  this.token(">");
  this.space();
  this.print(n, e);
};
exports.TSTypeLiteral = function (e) {
  this.tsPrintTypeLiteralOrInterfaceBody(e.members, e);
};
exports.TSTypeOperator = function (e) {
  this.word(e.operator);
  this.space();
  this.print(e.typeAnnotation, e);
};
exports.TSTypeParameter = function (e) {
  this.word(e.name);
  if (e.constraint) {
    this.space();
    this.word("extends");
    this.space();
    this.print(e.constraint, e);
  }
  if (e.default) {
    this.space();
    this.token("=");
    this.space();
    this.print(e.default, e);
  }
};
exports.TSTypeParameterDeclaration = exports.TSTypeParameterInstantiation = function (e) {
  this.token("<");
  this.printList(e.params, e, {});
  this.token(">");
};
exports.TSTypePredicate = function (e) {
  if (e.asserts) {
    this.word("asserts");
    this.space();
  }
  this.print(e.parameterName);
  if (e.typeAnnotation) {
    this.space();
    this.word("is");
    this.space();
    this.print(e.typeAnnotation.typeAnnotation);
  }
};
exports.TSTypeQuery = function (e) {
  this.word("typeof");
  this.space();
  this.print(e.exprName);
};
exports.TSTypeReference = function (e) {
  this.print(e.typeName, e);
  this.print(e.typeParameters, e);
};
exports.TSUndefinedKeyword = function () {
  this.word("undefined");
};
exports.TSUnionType = function (e) {
  this.tsPrintUnionOrIntersectionType(e, "|");
};
exports.TSUnknownKeyword = function () {
  this.word("unknown");
};
exports.TSVoidKeyword = function () {
  this.word("void");
};
exports.tsPrintBraced = function (e, t) {
  this.token("{");
  if (e.length) {
    this.indent();
    this.newline();
    var n;
    var i = r(e);
    try {
      for (i.s(); !(n = i.n()).done;) {
        var a = n.value;
        this.print(a, t);
        this.newline();
      }
    } catch (s) {
      i.e(s);
    } finally {
      i.f();
    }
    this.dedent();
    this.rightBrace();
  } else {
    this.token("}");
  }
};
exports.tsPrintClassMemberModifiers = function (e, t) {
  if (t && e.declare) {
    this.word("declare");
    this.space();
  }
  if (e.accessibility) {
    this.word(e.accessibility);
    this.space();
  }
  if (e.static) {
    this.word("static");
    this.space();
  }
  if (e.override) {
    this.word("override");
    this.space();
  }
  if (e.abstract) {
    this.word("abstract");
    this.space();
  }
  if (t && e.readonly) {
    this.word("readonly");
    this.space();
  }
};
exports.tsPrintFunctionOrConstructorType = function (e) {
  var t = e.typeParameters;
  var n = e.parameters;
  this.print(t, e);
  this.token("(");
  this._parameters(n, e);
  this.token(")");
  this.space();
  this.token("=>");
  this.space();
  this.print(e.typeAnnotation.typeAnnotation, e);
};
exports.tsPrintPropertyOrMethodName = function (e) {
  if (e.computed) {
    this.token("[");
  }
  this.print(e.key, e);
  if (e.computed) {
    this.token("]");
  }
  if (e.optional) {
    this.token("?");
  }
};
exports.tsPrintSignatureDeclarationBase = function (e) {
  var t = e.typeParameters;
  var n = e.parameters;
  this.print(t, e);
  this.token("(");
  this._parameters(n, e);
  this.token(")");
  this.print(e.typeAnnotation, e);
};
exports.tsPrintTypeLiteralOrInterfaceBody = function (e, t) {
  this.tsPrintBraced(e, t);
};
exports.tsPrintUnionOrIntersectionType = function (e, t) {
  this.printJoin(e.types, e, {
    separator: function () {
      this.space();
      this.token(t);
      this.space();
    }
  });
};