"use strict";

import * as r from "./2644";
import * as a from "./2811";
import * as i from "../2668";
var o = (0, r.defineAliasedType)("TypeScript");
var s = (0, r.assertValueType)("boolean");
var u = {
  returnType: {
    validate: (0, r.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: !0
  },
  typeParameters: {
    validate: (0, r.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: !0
  }
};
o("TSParameterProperty", {
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
o("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, a.functionDeclarationCommon, u)
});
o("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, a.classMethodOrDeclareMethodCommon, u)
});
o("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, r.validateType)("TSEntityName"),
    right: (0, r.validateType)("Identifier")
  }
});
var l = {
  typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, r.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
};
var p = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: l
};
o("TSCallSignatureDeclaration", p);
o("TSConstructSignatureDeclaration", p);
var f = {
  key: (0, r.validateType)("Expression"),
  computed: (0, r.validate)(s),
  optional: (0, r.validateOptional)(s)
};
o("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, f, {
    readonly: (0, r.validateOptional)(s),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, r.validateOptionalType)("Expression"),
    kind: {
      validate: (0, r.assertOneOf)("get", "set")
    }
  })
});
o("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, l, f, {
    kind: {
      validate: (0, r.assertOneOf)("method", "get", "set")
    }
  })
});
o("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, r.validateOptional)(s),
    static: (0, r.validateOptional)(s),
    parameters: (0, r.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
  }
});
for (var d = 0, c = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"]; d < c.length; d++) {
  o(c[d], {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}
o("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
var y = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
o("TSFunctionType", Object.assign({}, y, {
  fields: l
}));
o("TSConstructorType", Object.assign({}, y, {
  fields: Object.assign({}, l, {
    abstract: (0, r.validateOptional)(s)
  })
}));
o("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, r.validateType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
o("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, r.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, r.validateOptional)(s)
  }
});
o("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, r.validateType)(["TSEntityName", "TSImportType"])
  }
});
o("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, r.validateArrayOfType)("TSTypeElement")
  }
});
o("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, r.validateType)("TSType")
  }
});
o("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, r.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
o("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, r.validateType)("Identifier"),
    optional: {
      validate: s,
      default: !1
    },
    elementType: (0, r.validateType)("TSType")
  }
});
var T = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, r.validateArrayOfType)("TSType")
  }
};
o("TSUnionType", T);
o("TSIntersectionType", T);
o("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, r.validateType)("TSType"),
    extendsType: (0, r.validateType)("TSType"),
    trueType: (0, r.validateType)("TSType"),
    falseType: (0, r.validateType)("TSType")
  }
});
o("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, r.validateType)("TSTypeParameter")
  }
});
o("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, r.validate)((0, r.assertValueType)("string")),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, r.validateType)("TSType"),
    indexType: (0, r.validateType)("TSType")
  }
});
o("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, r.validateOptional)(s),
    typeParameter: (0, r.validateType)("TSTypeParameter"),
    optional: (0, r.validateOptional)(s),
    typeAnnotation: (0, r.validateOptionalType)("TSType"),
    nameType: (0, r.validateOptionalType)("TSType")
  }
});
o("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function () {
        var e = (0, r.assertNodeType)("NumericLiteral", "BigIntLiteral");
        var t = (0, r.assertOneOf)("-");
        var n = (0, r.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");
        function a(r, a, o) {
          if ((0, i.default)("UnaryExpression", o)) {
            t(o, "operator", o.operator);
            e(o, "argument", o.argument);
          } else {
            n(r, a, o);
          }
        }
        a.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"];
        return a;
      }()
    }
  }
});
o("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, r.validateType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
o("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, r.validateOptional)(s),
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, r.validateOptional)((0, r.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, r.validateType)("TSInterfaceBody")
  }
});
o("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, r.validateArrayOfType)("TSTypeElement")
  }
});
o("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, r.validateOptional)(s),
    id: (0, r.validateType)("Identifier"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, r.validateType)("Expression"),
    typeAnnotation: (0, r.validateType)("TSType")
  }
});
o("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, r.validateType)("TSType"),
    expression: (0, r.validateType)("Expression")
  }
});
o("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, r.validateOptional)(s),
    const: (0, r.validateOptional)(s),
    id: (0, r.validateType)("Identifier"),
    members: (0, r.validateArrayOfType)("TSEnumMember"),
    initializer: (0, r.validateOptionalType)("Expression")
  }
});
o("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, r.validateOptionalType)("Expression")
  }
});
o("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, r.validateOptional)(s),
    global: (0, r.validateOptional)(s),
    id: (0, r.validateType)(["Identifier", "StringLiteral"]),
    body: (0, r.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
o("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, r.validateArrayOfType)("Statement")
  }
});
o("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, r.validateType)("StringLiteral"),
    qualifier: (0, r.validateOptionalType)("TSEntityName"),
    typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
o("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, r.validate)(s),
    id: (0, r.validateType)("Identifier"),
    moduleReference: (0, r.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, r.assertOneOf)("type", "value"),
      optional: !0
    }
  }
});
o("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("StringLiteral")
  }
});
o("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("Expression")
  }
});
o("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, r.validateType)("Expression")
  }
});
o("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, r.validateType)("Identifier")
  }
});
o("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, r.assertNodeType)("TSType")
    }
  }
});
o("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSType")))
    }
  }
});
o("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSTypeParameter")))
    }
  }
});
o("TSTypeParameter", {
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