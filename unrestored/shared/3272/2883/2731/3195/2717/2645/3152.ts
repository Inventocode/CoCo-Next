"use strict";

var r = require("./2654");
var a = (0, r.defineAliasedType)("JSX");
a("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, r.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: !0,
      validate: (0, r.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
a("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
a("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, r.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: !0,
      validate: (0, r.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    },
    selfClosing: {
      validate: (0, r.assertValueType)("boolean"),
      optional: !0
    }
  }
});
a("JSXEmptyExpression", {});
a("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, r.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
a("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, r.assertNodeType)("Expression")
    }
  }
});
a("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, r.assertValueType)("string")
    }
  }
});
a("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: (0, r.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, r.assertNodeType)("JSXIdentifier")
    }
  }
});
a("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: (0, r.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, r.assertNodeType)("JSXIdentifier")
    }
  }
});
a("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: !1
    },
    attributes: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !0
    }
  }
});
a("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: (0, r.assertNodeType)("Expression")
    }
  }
});
a("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, r.assertValueType)("string")
    }
  }
});
a("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, r.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, r.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
a("JSXOpeningFragment", {
  aliases: ["Immutable"]
});
a("JSXClosingFragment", {
  aliases: ["Immutable"]
});