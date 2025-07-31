"use strict";

var r = require("./2645");
var a = (0, r.defineAliasedType)("Flow");
var i = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TypeParameterDeclaration";
  a(e, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, r.validateType)("Identifier"),
      typeParameters: (0, r.validateOptionalType)(t),
      extends: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
      mixins: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
      implements: (0, r.validateOptional)((0, r.arrayOfType)("ClassImplements")),
      body: (0, r.validateType)("ObjectTypeAnnotation")
    }
  });
};
a("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: (0, r.validateType)("FlowType")
  }
});
a("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
i("DeclareClass");
a("DeclareFunction", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    predicate: (0, r.validateOptionalType)("DeclaredPredicate")
  }
});
i("DeclareInterface");
a("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    body: (0, r.validateType)("BlockStatement"),
    kind: (0, r.validateOptional)((0, r.assertOneOf)("CommonJS", "ES"))
  }
});
a("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, r.validateType)("TypeAnnotation")
  }
});
a("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, r.validateType)("FlowType")
  }
});
a("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, r.validateOptionalType)("FlowType"),
    impltype: (0, r.validateOptionalType)("FlowType")
  }
});
a("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
a("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, r.validateOptionalType)("Flow"),
    specifiers: (0, r.validateOptional)((0, r.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, r.validateOptionalType)("StringLiteral"),
    default: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
  }
});
a("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, r.validateType)("StringLiteral"),
    exportKind: (0, r.validateOptional)((0, r.assertOneOf)("type", "value"))
  }
});
a("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: (0, r.validateType)("Flow")
  }
});
a("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
a("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["FlowType"],
  fields: {
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, r.validate)((0, r.arrayOfType)("FunctionTypeParam")),
    rest: (0, r.validateOptionalType)("FunctionTypeParam"),
    this: (0, r.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, r.validateType)("FlowType")
  }
});
a("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: (0, r.validateOptionalType)("Identifier"),
    typeAnnotation: (0, r.validateType)("FlowType"),
    optional: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
  }
});
a("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
a("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
a("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
i("InterfaceDeclaration");
a("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
    body: (0, r.validateType)("ObjectTypeAnnotation")
  }
});
a("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
a("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: (0, r.validateType)("FlowType")
  }
});
a("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("number"))
  }
});
a("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, r.validate)((0, r.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, r.assertValueType)("boolean"),
      default: !1
    },
    inexact: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
  }
});
a("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    value: (0, r.validateType)("FlowType"),
    optional: (0, r.validate)((0, r.assertValueType)("boolean")),
    static: (0, r.validate)((0, r.assertValueType)("boolean")),
    method: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: (0, r.validateType)("FlowType"),
    static: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, r.validateOptionalType)("Identifier"),
    key: (0, r.validateType)("FlowType"),
    value: (0, r.validateType)("FlowType"),
    static: (0, r.validate)((0, r.assertValueType)("boolean")),
    variance: (0, r.validateOptionalType)("Variance")
  }
});
a("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    key: (0, r.validateType)(["Identifier", "StringLiteral"]),
    value: (0, r.validateType)("FlowType"),
    kind: (0, r.validate)((0, r.assertOneOf)("init", "get", "set")),
    static: (0, r.validate)((0, r.assertValueType)("boolean")),
    proto: (0, r.validate)((0, r.assertValueType)("boolean")),
    optional: (0, r.validate)((0, r.assertValueType)("boolean")),
    variance: (0, r.validateOptionalType)("Variance"),
    method: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: (0, r.validateType)("FlowType")
  }
});
a("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, r.validateOptionalType)("FlowType"),
    impltype: (0, r.validateType)("FlowType")
  }
});
a("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    qualification: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
a("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("string"))
  }
});
a("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
a("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: (0, r.validateType)("FlowType")
  }
});
a("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, r.validateType)("FlowType")
  }
});
a("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("FlowType")
  }
});
a("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, r.validateType)("Expression"),
    typeAnnotation: (0, r.validateType)("TypeAnnotation")
  }
});
a("TypeParameter", {
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, r.validate)((0, r.assertValueType)("string")),
    bound: (0, r.validateOptionalType)("TypeAnnotation"),
    default: (0, r.validateOptionalType)("FlowType"),
    variance: (0, r.validateOptionalType)("Variance")
  }
});
a("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: (0, r.validate)((0, r.arrayOfType)("TypeParameter"))
  }
});
a("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
a("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
a("Variance", {
  builder: ["kind"],
  fields: {
    kind: (0, r.validate)((0, r.assertOneOf)("minus", "plus"))
  }
});
a("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
a("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    body: (0, r.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
a("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, r.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
a("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("BooleanLiteral")
  }
});
a("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("NumericLiteral")
  }
});
a("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("StringLiteral")
  }
});
a("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
a("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, r.validateType)("FlowType"),
    indexType: (0, r.validateType)("FlowType")
  }
});
a("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, r.validateType)("FlowType"),
    indexType: (0, r.validateType)("FlowType"),
    optional: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});