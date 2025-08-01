"use strict";

var r = require("./2655");
(0, r.default)("ArgumentPlaceholder", {});
(0, r.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_TYPES_8_BREAKING ? {
    object: {
      validate: (0, r.assertNodeType)("Expression")
    },
    callee: {
      validate: (0, r.assertNodeType)("Expression")
    }
  } : {
    object: {
      validate: Object.assign(function () {}, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(function () {}, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  }
});
(0, r.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, r.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, r.assertNodeType)("StringLiteral")
    }
  }
});
(0, r.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, r.assertNodeType)("Expression")
    }
  }
});
(0, r.default)("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, r.assertNodeType)("BlockStatement")
    },
    async: {
      validate: (0, r.assertValueType)("boolean"),
      default: !1
    }
  }
});
(0, r.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, r.assertNodeType)("Identifier")
    }
  }
});
(0, r.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, r.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, r.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, r.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, r.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, r.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
(0, r.default)("TopicReference", {
  aliases: ["Expression"]
});
(0, r.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, r.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, r.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, r.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, r.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});