"use strict";

var r = require("../../../../../../3190/624/index");
var i = require("../../../../../../2873/2721/805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.patternLikeCommon = exports.functionTypeAnnotationCommon = exports.functionDeclarationCommon = exports.functionCommon = exports.classMethodOrPropertyCommon = exports.classMethodOrDeclareMethodCommon = void 0;
var a = require("../2660");
var s = require("../2661");
var o = require("../2737/2674/index");
var l = require("../2647");
var u = require("./2641");
var c = (0, u.defineAliasedType)("Standardized");
c("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
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
c("AssignmentExpression", {
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
          return (0, u.assertValueType)("string");
        }
        var e = u.assertOneOf.apply(void 0, i(l.ASSIGNMENT_OPERATORS));
        var t = (0, u.assertOneOf)("=");
        return function (n, r, i) {
          ((0, a.default)("Pattern", n.left) ? t : e)(n, r, i);
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
      }).BABEL_TYPES_8_BREAKING ? (0, u.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0, u.assertNodeType)("LVal")
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
c("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: u.assertOneOf.apply(void 0, i(l.BINARY_OPERATORS))
    },
    left: {
      validate: function () {
        var e = (0, u.assertNodeType)("Expression");
        var t = (0, u.assertNodeType)("Expression", "PrivateName");
        var n = function (n, r, i) {
          var a = "in" === n.operator ? t : e;
          a(n, r, i);
        };
        n.oneOfNodeTypes = ["Expression", "PrivateName"];
        return n;
      }()
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
c("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, u.assertValueType)("string")
    }
  }
});
c("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, u.assertNodeType)("DirectiveLiteral")
    }
  }
});
c("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, u.assertValueType)("string")
    }
  }
});
c("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
c("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, u.assertNodeType)("Identifier"),
      optional: !0
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
c("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, u.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? {} : {
    optional: {
      validate: (0, u.assertOneOf)(!0, !1),
      optional: !0
    }
  }, {
    typeArguments: {
      validate: (0, u.assertNodeType)("TypeParameterInstantiation"),
      optional: !0
    },
    typeParameters: {
      validate: (0, u.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !0
    }
  })
});
c("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, u.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
c("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, u.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, u.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, u.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
c("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, u.assertNodeType)("Identifier"),
      optional: !0
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
c("DebuggerStatement", {
  aliases: ["Statement"]
});
c("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, u.assertNodeType)("Expression")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
c("EmptyStatement", {
  aliases: ["Statement"]
});
c("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, u.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
c("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, u.assertNodeType)("Program")
    },
    comments: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, u.assertEach)((0, u.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign(function () {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }),
      optional: !0
    },
    tokens: {
      validate: (0, u.assertEach)(Object.assign(function () {}, {
        type: "any"
      })),
      optional: !0
    }
  }
});
c("ForInStatement", {
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
      }).BABEL_TYPES_8_BREAKING ? (0, u.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0, u.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
c("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, u.assertNodeType)("VariableDeclaration", "Expression"),
      optional: !0
    },
    test: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    },
    update: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
var p = {
  params: {
    validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: !1
  },
  async: {
    default: !1
  }
};
exports.functionCommon = p;
var f = {
  returnType: {
    validate: (0, u.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !0
  },
  typeParameters: {
    validate: (0, u.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: !0
  }
};
exports.functionTypeAnnotationCommon = f;
var d = Object.assign({}, p, {
  declare: {
    validate: (0, u.assertValueType)("boolean"),
    optional: !0
  },
  id: {
    validate: (0, u.assertNodeType)("Identifier"),
    optional: !0
  }
});
exports.functionDeclarationCommon = d;
c("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, d, f, {
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
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
    var e = (0, u.assertNodeType)("Identifier");
    return function (t, n, r) {
      if (!(0, a.default)("ExportDefaultDeclaration", t)) {
        e(r, "id", r.id);
      }
    };
  }()
});
c("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, p, f, {
    id: {
      validate: (0, u.assertNodeType)("Identifier"),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  })
});
var h = {
  typeAnnotation: {
    validate: (0, u.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !0
  },
  decorators: {
    validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = h;
c("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, h, {
    name: {
      validate: (0, u.chain)((0, u.assertValueType)("string"), Object.assign(function (e, t, n) {
        if (Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING && !(0, s.default)(n, !1)) {
          throw new TypeError('"'.concat(n, '" is not a valid identifier name'));
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, u.assertValueType)("boolean"),
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
      var i = /\.(\w+)$/.exec(t);
      if (i) {
        var s = r(i, 2)[1];
        var l = {
          computed: !1
        };
        if ("property" === s) {
          if ((0, a.default)("MemberExpression", e, l)) {
            return;
          }
          if ((0, a.default)("OptionalMemberExpression", e, l)) {
            return;
          }
        } else if ("key" === s) {
          if ((0, a.default)("Property", e, l)) {
            return;
          }
          if ((0, a.default)("Method", e, l)) {
            return;
          }
        } else if ("exported" === s) {
          if ((0, a.default)("ExportSpecifier", e)) {
            return;
          }
        } else if ("imported" === s) {
          if ((0, a.default)("ImportSpecifier", e, {
            imported: n
          })) {
            return;
          }
        } else if ("meta" === s && (0, a.default)("MetaProperty", e, {
          meta: n
        })) {
          return;
        }
        if (((0, o.isKeyword)(n.name) || (0, o.isReservedWord)(n.name, !1)) && "this" !== n.name) {
          throw new TypeError('"'.concat(n.name, '" is not a valid identifier'));
        }
      }
    }
  }
});
c("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, u.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, u.assertNodeType)("Statement")
    },
    alternate: {
      optional: !0,
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
c("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, u.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
c("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, u.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
c("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, u.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
c("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
c("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, u.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
c("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, u.assertValueType)("string")
    },
    flags: {
      validate: (0, u.chain)((0, u.assertValueType)("string"), Object.assign(function (e, t, n) {
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
c("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: u.assertOneOf.apply(void 0, i(l.LOGICAL_OPERATORS))
    },
    left: {
      validate: (0, u.assertNodeType)("Expression")
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("MemberExpression", {
  builder: ["object", "property", "computed"].concat(i(Object({
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
      validate: (0, u.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var e = (0, u.assertNodeType)("Identifier", "PrivateName");
        var t = (0, u.assertNodeType)("Expression");
        var n = function (n, r, i) {
          var a = n.computed ? t : e;
          a(n, r, i);
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
      validate: (0, u.assertOneOf)(!0, !1),
      optional: !0
    }
  })
});
c("NewExpression", {
  inherits: "CallExpression"
});
c("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, u.assertValueType)("string")
    },
    sourceType: {
      validate: (0, u.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, u.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: !0
    },
    directives: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
c("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
c("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, p, f, {
    kind: Object.assign({
      validate: (0, u.assertOneOf)("method", "get", "set")
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
        var e = (0, u.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var t = (0, u.assertNodeType)("Expression");
        var n = function (n, r, i) {
          var a = n.computed ? t : e;
          a(n, r, i);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return n;
      }()
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
c("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand"].concat(i(Object({
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
        var e = (0, u.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var t = (0, u.assertNodeType)("Expression");
        var n = function (n, r, i) {
          var a = n.computed ? t : e;
          a(n, r, i);
        };
        n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return n;
      }()
    },
    value: {
      validate: (0, u.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, u.chain)((0, u.assertValueType)("boolean"), Object.assign(function (e, t, n) {
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
        }).BABEL_TYPES_8_BREAKING && n && !(0, a.default)("Identifier", e.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: !1
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    var e = (0, u.assertNodeType)("Identifier", "Pattern");
    var t = (0, u.assertNodeType)("Expression");
    return function (n, r, i) {
      if (Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING) {
        ((0, a.default)("ObjectPattern", n) ? e : t)(i, "value", i.value);
      }
    };
  }()
});
c("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, h, {
    argument: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, u.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression") : (0, u.assertNodeType)("LVal")
    },
    optional: {
      validate: (0, u.assertValueType)("boolean"),
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
      var i = r(n, 3);
      var a = i[1];
      var s = i[2];
      if (e[a].length > s + 1) {
        throw new TypeError("RestElement must be last element of ".concat(a));
      }
    }
  }
});
c("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    }
  }
});
c("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
c("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    },
    consequent: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Statement")))
    }
  }
});
c("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, u.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("SwitchCase")))
    }
  }
});
c("ThisExpression", {
  aliases: ["Expression"]
});
c("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, u.chain)((0, u.assertNodeType)("BlockStatement"), Object.assign(function (e) {
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
      validate: (0, u.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: !0,
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  }
});
c("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: !0
    },
    argument: {
      validate: (0, u.assertNodeType)("Expression")
    },
    operator: {
      validate: u.assertOneOf.apply(void 0, i(l.UNARY_OPERATORS))
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
c("UpdateExpression", {
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
      }).BABEL_TYPES_8_BREAKING ? (0, u.assertNodeType)("Identifier", "MemberExpression") : (0, u.assertNodeType)("Expression")
    },
    operator: {
      validate: u.assertOneOf.apply(void 0, i(l.UPDATE_OPERATORS))
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
c("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    kind: {
      validate: (0, u.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("VariableDeclarator")))
    }
  },
  validate: function (e, t, n) {
    if (Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0
    }).BABEL_TYPES_8_BREAKING && (0, a.default)("ForXStatement", e, {
      left: n
    }) && 1 !== n.declarations.length) {
      throw new TypeError("Exactly one VariableDeclarator is required in the VariableDeclaration of a ".concat(e.type));
    }
  }
});
c("VariableDeclarator", {
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
          return (0, u.assertNodeType)("LVal");
        }
        var e = (0, u.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        var t = (0, u.assertNodeType)("Identifier");
        return function (n, r, i) {
          (n.init ? e : t)(n, r, i);
        };
      }()
    },
    definite: {
      optional: !0,
      validate: (0, u.assertValueType)("boolean")
    },
    init: {
      optional: !0,
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, u.assertNodeType)("Expression")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
c("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, u.assertNodeType)("Expression")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    }
  }
});
c("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, h, {
    left: {
      validate: (0, u.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    }
  })
});
c("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, h, {
    elements: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    optional: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    }
  })
});
c("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, p, f, {
    expression: {
      validate: (0, u.assertValueType)("boolean")
    },
    body: {
      validate: (0, u.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
c("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
c("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, u.assertNodeType)("Identifier"),
      optional: !0
    },
    typeParameters: {
      validate: (0, u.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !0,
      validate: (0, u.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, u.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    },
    implements: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !0
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    mixins: {
      validate: (0, u.assertNodeType)("InterfaceExtends"),
      optional: !0
    }
  }
});
c("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, u.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, u.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    },
    body: {
      validate: (0, u.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !0,
      validate: (0, u.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, u.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    },
    implements: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !0
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    mixins: {
      validate: (0, u.assertNodeType)("InterfaceExtends"),
      optional: !0
    },
    declare: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    abstract: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    }
  },
  validate: function () {
    var e = (0, u.assertNodeType)("Identifier");
    return function (t, n, r) {
      if (Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING) {
        if (!(0, a.default)("ExportDefaultDeclaration", t)) {
          e(r, "id", r.id);
        }
      }
    };
  }()
});
c("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, u.assertNodeType)("StringLiteral")
    },
    exportKind: (0, u.validateOptional)((0, u.assertOneOf)("type", "value")),
    assertions: {
      optional: !0,
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ImportAttribute")))
    }
  }
});
c("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, u.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    },
    exportKind: (0, u.validateOptional)((0, u.assertOneOf)("value"))
  }
});
c("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: !0,
      validate: (0, u.chain)((0, u.assertNodeType)("Declaration"), Object.assign(function (e, t, n) {
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
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)(function () {
        var e = (0, u.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        var t = (0, u.assertNodeType)("ExportSpecifier");
        return Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).BABEL_TYPES_8_BREAKING ? function (n, r, i) {
          (n.source ? e : t)(n, r, i);
        } : e;
      }()))
    },
    source: {
      validate: (0, u.assertNodeType)("StringLiteral"),
      optional: !0
    },
    exportKind: (0, u.validateOptional)((0, u.assertOneOf)("type", "value"))
  }
});
c("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, u.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, u.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, u.assertOneOf)("type", "value"),
      optional: !0
    }
  }
});
c("ForOfStatement", {
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
          return (0, u.assertNodeType)("VariableDeclaration", "LVal");
        }
        var e = (0, u.assertNodeType)("VariableDeclaration");
        var t = (0, u.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
        return function (n, r, i) {
          if ((0, a.default)("VariableDeclaration", i)) {
            e(n, r, i);
          } else {
            t(n, r, i);
          }
        };
      }()
    },
    right: {
      validate: (0, u.assertNodeType)("Expression")
    },
    body: {
      validate: (0, u.assertNodeType)("Statement")
    },
    await: {
      default: !1
    }
  }
});
c("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: !0,
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, u.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, u.assertOneOf)("type", "typeof", "value"),
      optional: !0
    }
  }
});
c("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, u.assertNodeType)("Identifier")
    }
  }
});
c("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, u.assertNodeType)("Identifier")
    }
  }
});
c("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, u.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, u.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, u.assertOneOf)("type", "typeof", "value"),
      optional: !0
    }
  }
});
c("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, u.chain)((0, u.assertNodeType)("Identifier"), Object.assign(function (e, t, n) {
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
          if (!(0, a.default)("Identifier", e.property, {
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
      validate: (0, u.assertNodeType)("Identifier")
    }
  }
});
var y = {
  abstract: {
    validate: (0, u.assertValueType)("boolean"),
    optional: !0
  },
  accessibility: {
    validate: (0, u.assertOneOf)("public", "private", "protected"),
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
    validate: (0, u.assertValueType)("boolean"),
    optional: !0
  },
  key: {
    validate: (0, u.chain)(function () {
      var e = (0, u.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      var t = (0, u.assertNodeType)("Expression");
      return function (n, r, i) {
        (n.computed ? t : e)(n, r, i);
      };
    }(), (0, u.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = y;
var m = Object.assign({}, p, y, {
  params: {
    validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, u.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, u.chain)((0, u.assertValueType)("string"), (0, u.assertOneOf)("public", "private", "protected")),
    optional: !0
  },
  decorators: {
    validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
    optional: !0
  }
});
exports.classMethodOrDeclareMethodCommon = m;
c("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, m, f, {
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  })
});
c("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, h, {
    properties: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
c("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("Super", {
  aliases: ["Expression"]
});
c("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, u.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, u.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, u.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    }
  }
});
c("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, u.assertShape)({
        raw: {
          validate: (0, u.assertValueType)("string")
        },
        cooked: {
          validate: (0, u.assertValueType)("string"),
          optional: !0
        }
      })
    },
    tail: {
      default: !1
    }
  }
});
c("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Expression", "TSType")), function (e, t, n) {
        if (e.quasis.length !== n.length + 1) {
          throw new TypeError("Number of ".concat(e.type, " quasis should be exactly one more than the number of expressions.\nExpected ").concat(n.length + 1, " quasis but got ").concat(e.quasis.length));
        }
      })
    }
  }
});
c("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, u.chain)((0, u.assertValueType)("boolean"), Object.assign(function (e, t, n) {
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
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, u.assertNodeType)("Expression")
    }
  }
});
c("Import", {
  aliases: ["Expression"]
});
c("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, u.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
c("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, u.assertNodeType)("Identifier")
    }
  }
});
c("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, u.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var e = (0, u.assertNodeType)("Identifier");
        var t = (0, u.assertNodeType)("Expression");
        var n = function (n, r, i) {
          var a = n.computed ? t : e;
          a(n, r, i);
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
      }).BABEL_TYPES_8_BREAKING ? (0, u.chain)((0, u.assertValueType)("boolean"), (0, u.assertOptionalChainStart)()) : (0, u.assertValueType)("boolean")
    }
  }
});
c("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, u.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).BABEL_TYPES_8_BREAKING ? (0, u.chain)((0, u.assertValueType)("boolean"), (0, u.assertOptionalChainStart)()) : (0, u.assertValueType)("boolean")
    },
    typeArguments: {
      validate: (0, u.assertNodeType)("TypeParameterInstantiation"),
      optional: !0
    },
    typeParameters: {
      validate: (0, u.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !0
    }
  }
});
c("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, y, {
    value: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    },
    definite: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    typeAnnotation: {
      validate: (0, u.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    readonly: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    declare: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    variance: {
      validate: (0, u.assertNodeType)("Variance"),
      optional: !0
    }
  })
});
c("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, u.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, u.assertNodeType)("Expression"),
      optional: !0
    },
    typeAnnotation: {
      validate: (0, u.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Decorator"))),
      optional: !0
    },
    readonly: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    definite: {
      validate: (0, u.assertValueType)("boolean"),
      optional: !0
    },
    variance: {
      validate: (0, u.assertNodeType)("Variance"),
      optional: !0
    }
  }
});
c("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, m, f, {
    key: {
      validate: (0, u.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, u.assertNodeType)("BlockStatement")
    }
  })
});
c("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, u.assertNodeType)("Identifier")
    }
  }
});
c("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, u.chain)((0, u.assertValueType)("array"), (0, u.assertEach)((0, u.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});