"use strict";

var r = require("../../../../../3200/624/index");
var a = require("../../../806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.patternLikeCommon = exports.functionTypeAnnotationCommon = exports.functionDeclarationCommon = exports.functionCommon = exports.classMethodOrPropertyCommon = exports.classMethodOrDeclareMethodCommon = void 0;
var i = require("../2678");
var o = require("../2679/index");
var s = require("../2679/2720/index");
var u = require("../2661");
var l = require("./2654");
var p = (0, l.defineAliasedType)("Standardized");
p("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? void 0 : []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
p("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        if (!Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          return (0, l.assertValueType)("string");
        }
        var e = l.assertOneOf.apply(void 0, a(u.ASSIGNMENT_OPERATORS));
        var t = (0, l.assertOneOf)("=");
        return function (n, r, a) {
          ((0, i.default)("Pattern", n.left) ? t : e)(n, r, a);
        };
      }()
    },
    left: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0, l.assertNodeType)("LVal")
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
p("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: l.assertOneOf.apply(void 0, a(u.BINARY_OPERATORS))
    },
    left: {
      validate: function () {
        var e = (0, l.assertNodeType)("Expression");
        var t = (0, l.assertNodeType)("Expression", "PrivateName");
        var n = function (n, r, a) {
          var i = "in" === n.operator ? t : e;
          i(n, r, a);
        };
        n.oneOfNodeTypes = ["Expression", "PrivateName"];
        return n;
      }()
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
p("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, l.assertValueType)("string")
    }
  }
});
p("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, l.assertNodeType)("DirectiveLiteral")
    }
  }
});
p("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, l.assertValueType)("string")
    }
  }
});
p("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
p("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, l.assertNodeType)("Identifier"),
      optional: !0
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
p("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, l.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? {} : {
    optional: {
      validate: (0, l.assertOneOf)(!0, !1),
      optional: !0
    }
  }, {
    typeArguments: {
      validate: (0, l.assertNodeType)("TypeParameterInstantiation"),
      optional: !0
    },
    typeParameters: {
      validate: (0, l.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !0
    }
  })
});
p("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
p("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, l.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, l.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, l.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
p("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, l.assertNodeType)("Identifier"),
      optional: !0
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
p("DebuggerStatement", {
  aliases: ["Statement"]
});
p("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, l.assertNodeType)("Expression")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
p("EmptyStatement", {
  aliases: ["Statement"]
});
p("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, l.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
p("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, l.assertNodeType)("Program")
    },
    comments: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.assertEach)((0, l.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign(function () {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }),
      optional: !0
    },
    tokens: {
      validate: (0, l.assertEach)(Object.assign(function () {}, {
        type: "any"
      })),
      optional: !0
    }
  }
});
p("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0, l.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
p("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, l.assertNodeType)("VariableDeclaration", "Expression"),
      optional: !0
    },
    test: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    },
    update: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
var f = {
  params: {
    validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: !1
  },
  async: {
    default: !1
  }
};
exports.functionCommon = f;
var d = {
  returnType: {
    validate: (0, l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !0
  },
  typeParameters: {
    validate: (0, l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: !0
  }
};
exports.functionTypeAnnotationCommon = d;
var c = Object.assign({}, f, {
  declare: {
    validate: (0, l.assertValueType)("boolean"),
    optional: !0
  },
  id: {
    validate: (0, l.assertNodeType)("Identifier"),
    optional: !0
  }
});
exports.functionDeclarationCommon = c;
p("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, c, d, {
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    if (!Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING) {
      return function () {};
    }
    var e = (0, l.assertNodeType)("Identifier");
    return function (t, n, r) {
      if (!(0, i.default)("ExportDefaultDeclaration", t)) {
        e(r, "id", r.id);
      }
    };
  }()
});
p("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, f, d, {
    id: {
      validate: (0, l.assertNodeType)("Identifier"),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  })
});
var y = {
  typeAnnotation: {
    validate: (0, l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !0
  },
  decorators: {
    validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = y;
p("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, y, {
    name: {
      validate: (0, l.chain)((0, l.assertValueType)("string"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && !(0, o.default)(n, !1)) {
          throw new TypeError('"'.concat(n, '" is not a valid identifier name'));
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    }
  }),
  validate: function (e, t, n) {
    if (Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING) {
      var a = /\.(\w+)$/.exec(t);
      if (a) {
        var o = r(a, 2)[1];
        var u = {
          computed: !1
        };
        if ("property" === o) {
          if ((0, i.default)("MemberExpression", e, u)) {
            return;
          }
          if ((0, i.default)("OptionalMemberExpression", e, u)) {
            return;
          }
        } else if ("key" === o) {
          if ((0, i.default)("Property", e, u)) {
            return;
          }
          if ((0, i.default)("Method", e, u)) {
            return;
          }
        } else if ("exported" === o) {
          if ((0, i.default)("ExportSpecifier", e)) {
            return;
          }
        } else if ("imported" === o) {
          if ((0, i.default)("ImportSpecifier", e, {
            imported: n
          })) {
            return;
          }
        } else if ("meta" === o && (0, i.default)("MetaProperty", e, {
          meta: n
        })) {
          return;
        }
        if (((0, s.isKeyword)(n.name) || (0, s.isReservedWord)(n.name, !1)) && "this" !== n.name) {
          throw new TypeError('"'.concat(n.name, '" is not a valid identifier'));
        }
      }
    }
  }
});
p("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, l.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, l.assertNodeType)("Statement")
    },
    alternate: {
      optional: !0,
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
p("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, l.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
p("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, l.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
p("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, l.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
p("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
p("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, l.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
p("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, l.assertValueType)("string")
    },
    flags: {
      validate: (0, l.chain)((0, l.assertValueType)("string"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          var r = /[^gimsuy]/.exec(n);
          if (r) {
            throw new TypeError('"'.concat(r[0], '" is not a valid RegExp flag'));
          }
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
p("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: l.assertOneOf.apply(void 0, a(u.LOGICAL_OPERATORS))
    },
    left: {
      validate: (0, l.assertNodeType)("Expression")
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("MemberExpression", {
  builder: ["object", "property", "computed"].concat(a(Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? [] : ["optional"])),
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, l.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var e = (0, l.assertNodeType)("Identifier", "PrivateName");
        var t = (0, l.assertNodeType)("Expression");
        var n = function (n, r, a) {
          var i = n.computed ? t : e;
          i(n, r, a);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return n;
      }()
    },
    computed: {
      default: !1
    }
  }, Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? {} : {
    optional: {
      validate: (0, l.assertOneOf)(!0, !1),
      optional: !0
    }
  })
});
p("NewExpression", {
  inherits: "CallExpression"
});
p("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, l.assertValueType)("string")
    },
    sourceType: {
      validate: (0, l.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, l.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: !0
    },
    directives: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
p("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
p("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, f, d, {
    kind: Object.assign({
      validate: (0, l.assertOneOf)("method", "get", "set")
    }, Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING ? {} : {
      default: "method"
    }),
    computed: {
      default: !1
    },
    key: {
      validate: function () {
        var e = (0, l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var t = (0, l.assertNodeType)("Expression");
        var n = function (n, r, a) {
          var i = n.computed ? t : e;
          i(n, r, a);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return n;
      }()
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
p("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand"].concat(a(Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? [] : ["decorators"])),
  fields: {
    computed: {
      default: !1
    },
    key: {
      validate: function () {
        var e = (0, l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var t = (0, l.assertNodeType)("Expression");
        var n = function (n, r, a) {
          var i = n.computed ? t : e;
          i(n, r, a);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return n;
      }()
    },
    value: {
      validate: (0, l.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, l.chain)((0, l.assertValueType)("boolean"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && n && e.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, {
        type: "boolean"
      }), function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && n && !(0, i.default)("Identifier", e.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: !1
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    var e = (0, l.assertNodeType)("Identifier", "Pattern");
    var t = (0, l.assertNodeType)("Expression");
    return function (n, r, a) {
      if (Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING) {
        ((0, i.default)("ObjectPattern", n) ? e : t)(a, "value", a.value);
      }
    };
  }()
});
p("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, y, {
    argument: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression") : (0, l.assertNodeType)("LVal")
    },
    optional: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    }
  }),
  validate: function (e, t) {
    if (Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING) {
      var n = /(\w+)\[(\d+)\]/.exec(t);
      if (!n) {
        throw new Error("Internal Babel error: malformed key.");
      }
      var a = r(n, 3);
      var i = a[1];
      var o = a[2];
      if (e[i].length > o + 1) {
        throw new TypeError("RestElement must be last element of ".concat(i));
      }
    }
  }
});
p("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    }
  }
});
p("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
p("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    },
    consequent: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Statement")))
    }
  }
});
p("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, l.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("SwitchCase")))
    }
  }
});
p("ThisExpression", {
  aliases: ["Expression"]
});
p("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, l.chain)((0, l.assertNodeType)("BlockStatement"), Object.assign(function (e) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && !e.handler && !e.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: !0,
      validate: (0, l.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: !0,
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  }
});
p("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: !0
    },
    argument: {
      validate: (0, l.assertNodeType)("Expression")
    },
    operator: {
      validate: l.assertOneOf.apply(void 0, a(u.UNARY_OPERATORS))
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
p("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: !1
    },
    argument: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.assertNodeType)("Identifier", "MemberExpression") : (0, l.assertNodeType)("Expression")
    },
    operator: {
      validate: l.assertOneOf.apply(void 0, a(u.UPDATE_OPERATORS))
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
p("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    kind: {
      validate: (0, l.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("VariableDeclarator")))
    }
  },
  validate: function (e, t, n) {
    if (Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING && (0, i.default)("ForXStatement", e, {
      left: n
    }) && 1 !== n.declarations.length) {
      throw new TypeError("Exactly one VariableDeclarator is required in the VariableDeclaration of a ".concat(e.type));
    }
  }
});
p("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          return (0, l.assertNodeType)("LVal");
        }
        var e = (0, l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        var t = (0, l.assertNodeType)("Identifier");
        return function (n, r, a) {
          (n.init ? e : t)(n, r, a);
        };
      }()
    },
    definite: {
      optional: !0,
      validate: (0, l.assertValueType)("boolean")
    },
    init: {
      optional: !0,
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, l.assertNodeType)("Expression")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
p("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, l.assertNodeType)("Expression")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    }
  }
});
p("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, y, {
    left: {
      validate: (0, l.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    }
  })
});
p("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, y, {
    elements: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    optional: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    }
  })
});
p("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, f, d, {
    expression: {
      validate: (0, l.assertValueType)("boolean")
    },
    body: {
      validate: (0, l.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
p("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
p("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, l.assertNodeType)("Identifier"),
      optional: !0
    },
    typeParameters: {
      validate: (0, l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !0,
      validate: (0, l.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    },
    implements: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !0
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    mixins: {
      validate: (0, l.assertNodeType)("InterfaceExtends"),
      optional: !0
    }
  }
});
p("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, l.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    },
    body: {
      validate: (0, l.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !0,
      validate: (0, l.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    },
    implements: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !0
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    mixins: {
      validate: (0, l.assertNodeType)("InterfaceExtends"),
      optional: !0
    },
    declare: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    abstract: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    }
  },
  validate: function () {
    var e = (0, l.assertNodeType)("Identifier");
    return function (t, n, r) {
      if (Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING) {
        if (!(0, i.default)("ExportDefaultDeclaration", t)) {
          e(r, "id", r.id);
        }
      }
    };
  }()
});
p("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, l.assertNodeType)("StringLiteral")
    },
    exportKind: (0, l.validateOptional)((0, l.assertOneOf)("type", "value")),
    assertions: {
      optional: !0,
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ImportAttribute")))
    }
  }
});
p("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, l.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    },
    exportKind: (0, l.validateOptional)((0, l.assertOneOf)("value"))
  }
});
p("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: !0,
      validate: (0, l.chain)((0, l.assertNodeType)("Declaration"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && n && e.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && n && e.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    assertions: {
      optional: !0,
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)(function () {
        var e = (0, l.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        var t = (0, l.assertNodeType)("ExportSpecifier");
        return Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING ? function (n, r, a) {
          (n.source ? e : t)(n, r, a);
        } : e;
      }()))
    },
    source: {
      validate: (0, l.assertNodeType)("StringLiteral"),
      optional: !0
    },
    exportKind: (0, l.validateOptional)((0, l.assertOneOf)("type", "value"))
  }
});
p("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, l.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, l.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, l.assertOneOf)("type", "value"),
      optional: !0
    }
  }
});
p("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          return (0, l.assertNodeType)("VariableDeclaration", "LVal");
        }
        var e = (0, l.assertNodeType)("VariableDeclaration");
        var t = (0, l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
        return function (n, r, a) {
          if ((0, i.default)("VariableDeclaration", a)) {
            e(n, r, a);
          } else {
            t(n, r, a);
          }
        };
      }()
    },
    right: {
      validate: (0, l.assertNodeType)("Expression")
    },
    body: {
      validate: (0, l.assertNodeType)("Statement")
    },
    await: {
      default: !1
    }
  }
});
p("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: !0,
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, l.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, l.assertOneOf)("type", "typeof", "value"),
      optional: !0
    }
  }
});
p("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, l.assertNodeType)("Identifier")
    }
  }
});
p("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, l.assertNodeType)("Identifier")
    }
  }
});
p("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, l.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, l.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, l.assertOneOf)("type", "typeof", "value"),
      optional: !0
    }
  }
});
p("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, l.chain)((0, l.assertNodeType)("Identifier"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING) {
          var r;
          switch (n.name) {
            case "function":
              r = "sent";
              break;
            case "new":
              r = "target";
              break;
            case "import":
              r = "meta";
          }
          if (!(0, i.default)("Identifier", e.property, {
            name: r
          })) {
            throw new TypeError("Unrecognised MetaProperty");
          }
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, l.assertNodeType)("Identifier")
    }
  }
});
var T = {
  abstract: {
    validate: (0, l.assertValueType)("boolean"),
    optional: !0
  },
  accessibility: {
    validate: (0, l.assertOneOf)("public", "private", "protected"),
    optional: !0
  },
  static: {
    default: !1
  },
  override: {
    default: !1
  },
  computed: {
    default: !1
  },
  optional: {
    validate: (0, l.assertValueType)("boolean"),
    optional: !0
  },
  key: {
    validate: (0, l.chain)(function () {
      var e = (0, l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      var t = (0, l.assertNodeType)("Expression");
      return function (n, r, a) {
        (n.computed ? t : e)(n, r, a);
      };
    }(), (0, l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = T;
var m = Object.assign({}, f, T, {
  params: {
    validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, l.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, l.chain)((0, l.assertValueType)("string"), (0, l.assertOneOf)("public", "private", "protected")),
    optional: !0
  },
  decorators: {
    validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
    optional: !0
  }
});
exports.classMethodOrDeclareMethodCommon = m;
p("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, m, d, {
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  })
});
p("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, y, {
    properties: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
p("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("Super", {
  aliases: ["Expression"]
});
p("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, l.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, l.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    }
  }
});
p("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, l.assertShape)({
        raw: {
          validate: (0, l.assertValueType)("string")
        },
        cooked: {
          validate: (0, l.assertValueType)("string"),
          optional: !0
        }
      })
    },
    tail: {
      default: !1
    }
  }
});
p("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Expression", "TSType")), function (e, t, n) {
        if (e.quasis.length !== n.length + 1) {
          throw new TypeError("Number of ".concat(e.type, " quasis should be exactly one more than the number of expressions.\nExpected ").concat(n.length + 1, " quasis but got ").concat(e.quasis.length));
        }
      })
    }
  }
});
p("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, l.chain)((0, l.assertValueType)("boolean"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && n && !e.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: !1
    },
    argument: {
      optional: !0,
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, l.assertNodeType)("Expression")
    }
  }
});
p("Import", {
  aliases: ["Expression"]
});
p("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, l.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
p("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, l.assertNodeType)("Identifier")
    }
  }
});
p("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, l.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var e = (0, l.assertNodeType)("Identifier");
        var t = (0, l.assertNodeType)("Expression");
        var n = function (n, r, a) {
          var i = n.computed ? t : e;
          i(n, r, a);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier"];
        return n;
      }()
    },
    computed: {
      default: !1
    },
    optional: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.chain)((0, l.assertValueType)("boolean"), (0, l.assertOptionalChainStart)()) : (0, l.assertValueType)("boolean")
    }
  }
});
p("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, l.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, l.chain)((0, l.assertValueType)("boolean"), (0, l.assertOptionalChainStart)()) : (0, l.assertValueType)("boolean")
    },
    typeArguments: {
      validate: (0, l.assertNodeType)("TypeParameterInstantiation"),
      optional: !0
    },
    typeParameters: {
      validate: (0, l.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !0
    }
  }
});
p("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, T, {
    value: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    },
    definite: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    typeAnnotation: {
      validate: (0, l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    readonly: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    declare: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    variance: {
      validate: (0, l.assertNodeType)("Variance"),
      optional: !0
    }
  })
});
p("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, l.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, l.assertNodeType)("Expression"),
      optional: !0
    },
    typeAnnotation: {
      validate: (0, l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Decorator"))),
      optional: !0
    },
    readonly: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    definite: {
      validate: (0, l.assertValueType)("boolean"),
      optional: !0
    },
    variance: {
      validate: (0, l.assertNodeType)("Variance"),
      optional: !0
    }
  }
});
p("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, m, d, {
    key: {
      validate: (0, l.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, l.assertNodeType)("BlockStatement")
    }
  })
});
p("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, l.assertNodeType)("Identifier")
    }
  }
});
p("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, l.chain)((0, l.assertValueType)("array"), (0, l.assertEach)((0, l.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});