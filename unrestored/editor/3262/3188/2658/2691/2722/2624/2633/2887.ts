"use strict";

var r = require("./2641");
var i = require("./2726");
var a = require("../2660");
var s = (0, r.defineAliasedType)("TypeScript");
var o = (0, r.assertValueType)("boolean");
var l = {
  returnType: {
    validate: (0, r.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: !0
  },
  typeParameters: {
    validate: (0, r.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: !0
  }
};
s("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, r.assertOneOf)("public", "private", "protected"),
      optional: !0
    },
    readonly: {
      validate: (0, r.assertValueType)("boolean"),
      optional: !0
    },
    parameter: {
      validate: (0, r.assertNodeType)("Identifier", "AssignmentPattern")
    },
    override: {
      validate: (0, r.assertValueType)("boolean"),
      optional: !0
    },
    decorators: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator"))),
      optional: !0
    }
  }
});
s("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, i.functionDeclarationCommon, l)
});
s("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, i.classMethodOrDeclareMethodCommon, l)
});
s("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, r.validateType)("TSEntityName"),
    right: (0, r.validateType)("Identifier")
  }
});
var u = {
  typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, r.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
};
var c = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: u
};
s("TSCallSignatureDeclaration", c);
s("TSConstructSignatureDeclaration", c);
var p = {
  key: (0, r.validateType)("Expression"),
  computed: (0, r.validate)(o),
  optional: (0, r.validateOptional)(o)
};
s("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, p, {
    readonly: (0, r.validateOptional)(o),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, r.validateOptionalType)("Expression"),
    kind: {
      validate: (0, r.assertOneOf)("get", "set")
    }
  })
});
s("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, u, p, {
    kind: {
      validate: (0, r.assertOneOf)("method", "get", "set")
    }
  })
});
s("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, r.validateOptional)(o),
    static: (0, r.validateOptional)(o),
    parameters: (0, r.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
  }
});
for (var f = 0, d = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"]; f < d.length; f++) {
  s(d[f], {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}
s("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
var h = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
s("TSFunctionType", Object.assign({}, h, {
  fields: u
}));
s("TSConstructorType", Object.assign({}, h, {
  fields: Object.assign({}, u, {
    abstract: (0, r.validateOptional)(o)
  })
}));
s("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, r.validateType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
s("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, r.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, r.validateOptional)(o)
  }
});
s("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, r.validateType)(["TSEntityName", "TSImportType"])
  }
});
s("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, r.validateArrayOfType)("TSTypeElement")
  }
});
s("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, r.validateType)("TSType")
  }
});
s("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, r.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
s("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, r.validateType)("Identifier"),
    optional: {
      validate: o,
      default: !1
    },
    elementType: (0, r.validateType)("TSType")
  }
});
var y = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, r.validateArrayOfType)("TSType")
  }
};
s("TSUnionType", y);
s("TSIntersectionType", y);
s("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, r.validateType)("TSType"),
    extendsType: (0, r.validateType)("TSType"),
    trueType: (0, r.validateType)("TSType"),
    falseType: (0, r.validateType)("TSType")
  }
});
s("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, r.validateType)("TSTypeParameter")
  }
});
s("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, r.validate)((0, r.assertValueType)("string")),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, r.validateType)("TSType"),
    indexType: (0, r.validateType)("TSType")
  }
});
s("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, r.validateOptional)(o),
    typeParameter: (0, r.validateType)("TSTypeParameter"),
    optional: (0, r.validateOptional)(o),
    typeAnnotation: (0, r.validateOptionalType)("TSType"),
    nameType: (0, r.validateOptionalType)("TSType")
  }
});
s("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function () {
        var e = (0, r.assertNodeType)("NumericLiteral", "BigIntLiteral");
        var t = (0, r.assertOneOf)("-");
        var n = (0, r.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");
        function i(r, i, s) {
          if ((0, a.default)("UnaryExpression", s)) {
            t(s, "operator", s.operator);
            e(s, "argument", s.argument);
          } else {
            n(r, i, s);
          }
        }
        i.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"];
        return i;
      }()
    }
  }
});
s("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, r.validateType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
s("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, r.validateOptional)(o),
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, r.validateOptional)((0, r.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, r.validateType)("TSInterfaceBody")
  }
});
s("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, r.validateArrayOfType)("TSTypeElement")
  }
});
s("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, r.validateOptional)(o),
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, r.validateType)("Expression"),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
s("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType"),
    expression: (0, r.validateType)("Expression")
  }
});
s("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, r.validateOptional)(o),
    const: (0, r.validateOptional)(o),
    id: (0, r.validateType)("Identifier"),
    members: (0, r.validateArrayOfType)("TSEnumMember"),
    initializer: (0, r.validateOptionalType)("Expression")
  }
});
s("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, r.validateOptionalType)("Expression")
  }
});
s("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, r.validateOptional)(o),
    global: (0, r.validateOptional)(o),
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    body: (0, r.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
s("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, r.validateArrayOfType)("Statement")
  }
});
s("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, r.validateType)("StringLiteral"),
    qualifier: (0, r.validateOptionalType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
s("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, r.validate)(o),
    id: (0, r.validateType)("Identifier"),
    moduleReference: (0, r.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, r.assertOneOf)("type", "value"),
      optional: !0
    }
  }
});
s("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("StringLiteral")
  }
});
s("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("Expression")
  }
});
s("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("Expression")
  }
});
s("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
s("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, r.assertNodeType)("TSType")
    }
  }
});
s("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSType")))
    }
  }
});
s("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSTypeParameter")))
    }
  }
});
s("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, r.assertValueType)("string")
    },
    constraint: {
      validate: (0, r.assertNodeType)("TSType"),
      optional: !0
    },
    default: {
      validate: (0, r.assertNodeType)("TSType"),
      optional: !0
    }
  }
});