"use strict";

var r = require("./2651");
var i = (0, r.defineAliasedType)("Flow");
var a = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TypeParameterDeclaration";
  i(e, {
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
i("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: (0, r.validateType)("FlowType")
  }
});
i("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
a("DeclareClass");
i("DeclareFunction", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    predicate: (0, r.validateOptionalType)("DeclaredPredicate")
  }
});
a("DeclareInterface");
i("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    body: (0, r.validateType)("BlockStatement"),
    kind: (0, r.validateOptional)((0, r.assertOneOf)("CommonJS", "ES"))
  }
});
i("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, r.validateType)("TypeAnnotation")
  }
});
i("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, r.validateType)("FlowType")
  }
});
i("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, r.validateOptionalType)("FlowType"),
    impltype: (0, r.validateOptionalType)("FlowType")
  }
});
i("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
i("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, r.validateOptionalType)("Flow"),
    specifiers: (0, r.validateOptional)((0, r.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, r.validateOptionalType)("StringLiteral"),
    default: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
  }
});
i("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, r.validateType)("StringLiteral"),
    exportKind: (0, r.validateOptional)((0, r.assertOneOf)("type", "value"))
  }
});
i("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: (0, r.validateType)("Flow")
  }
});
i("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
i("FunctionTypeAnnotation", {
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
i("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: (0, r.validateOptionalType)("Identifier"),
    typeAnnotation: (0, r.validateType)("FlowType"),
    optional: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
  }
});
i("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
i("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
i("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
  }
});
a("InterfaceDeclaration");
i("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
    body: (0, r.validateType)("ObjectTypeAnnotation")
  }
});
i("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
i("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: (0, r.validateType)("FlowType")
  }
});
i("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("number"))
  }
});
i("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("ObjectTypeAnnotation", {
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
i("ObjectTypeInternalSlot", {
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
i("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: (0, r.validateType)("FlowType"),
    static: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("ObjectTypeIndexer", {
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
i("ObjectTypeProperty", {
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
i("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: (0, r.validateType)("FlowType")
  }
});
i("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, r.validateOptionalType)("FlowType"),
    impltype: (0, r.validateType)("FlowType")
  }
});
i("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    qualification: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
i("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, r.validate)((0, r.assertValueType)("string"))
  }
});
i("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
i("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: (0, r.validateType)("FlowType")
  }
});
i("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, r.validateType)("FlowType")
  }
});
i("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("FlowType")
  }
});
i("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, r.validateType)("Expression"),
    typeAnnotation: (0, r.validateType)("TypeAnnotation")
  }
});
i("TypeParameter", {
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, r.validate)((0, r.assertValueType)("string")),
    bound: (0, r.validateOptionalType)("TypeAnnotation"),
    default: (0, r.validateOptionalType)("FlowType"),
    variance: (0, r.validateOptionalType)("Variance")
  }
});
i("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: (0, r.validate)((0, r.arrayOfType)("TypeParameter"))
  }
});
i("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
i("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
  }
});
i("Variance", {
  builder: ["kind"],
  fields: {
    kind: (0, r.validate)((0, r.assertOneOf)("minus", "plus"))
  }
});
i("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
i("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    body: (0, r.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
i("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, r.validate)((0, r.assertValueType)("boolean")),
    members: (0, r.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, r.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});
i("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("BooleanLiteral")
  }
});
i("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("NumericLiteral")
  }
});
i("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, r.validateType)("Identifier"),
    init: (0, r.validateType)("StringLiteral")
  }
});
i("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
i("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, r.validateType)("FlowType"),
    indexType: (0, r.validateType)("FlowType")
  }
});
i("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, r.validateType)("FlowType"),
    indexType: (0, r.validateType)("FlowType"),
    optional: (0, r.validate)((0, r.assertValueType)("boolean"))
  }
});