"use strict";

import * as r from "../../../../../31/index";
import * as i from "./2202/index";
function o(e) {
  return !e.reachable;
}
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "require `return` statements to either always or never specify values",
      category: "Best Practices",
      recommended: !1,
      url: "https://eslint.org/docs/rules/consistent-return"
    },
    schema: [{
      type: "object",
      properties: {
        treatUndefinedAsUnspecified: {
          type: "boolean",
          default: !1
        }
      },
      additionalProperties: !1
    }],
    messages: {
      missingReturn: "Expected to return a value at the end of {{name}}.",
      missingReturnValue: "{{name}} expected a return value.",
      unexpectedReturnValue: "{{name}} expected no return value."
    }
  },
  create: function (e) {
    var t = !0 === (e.options[0] || {}).treatUndefinedAsUnspecified;
    var n = null;
    function a(t) {
      var r;
      var a;
      if (!(!n.hasReturnValue || n.codePath.currentSegments.every(o) || i.isES5Constructor(t) || function (e) {
        return "FunctionExpression" === e.type && e.parent && "MethodDefinition" === e.parent.type && "constructor" === e.parent.kind;
      }(t))) {
        if ("Program" === t.type) {
          r = {
            line: 1,
            column: 0
          };
          a = "program";
        } else {
          r = "ArrowFunctionExpression" === t.type ? e.getSourceCode().getTokenBefore(t.body, i.isArrowToken).loc.start : "MethodDefinition" === t.parent.type || "Property" === t.parent.type && t.parent.method ? t.parent.key.loc.start : (t.id || t).loc.start;
        }
        if (!a) {
          a = i.getFunctionNameWithKind(t);
        }
        e.report({
          node: t,
          loc: r,
          messageId: "missingReturn",
          data: {
            name: a
          }
        });
      }
    }
    return {
      onCodePathStart: function (e, t) {
        n = {
          upper: n,
          codePath: e,
          hasReturn: !1,
          hasReturnValue: !1,
          messageId: "",
          node: t
        };
      },
      onCodePathEnd: function () {
        n = n.upper;
      },
      ReturnStatement: function (o) {
        var a = o.argument;
        var s = Boolean(a);
        if (t && s) {
          s = !function (e, t) {
            return "Identifier" === e.type && e.name === t;
          }(a, "undefined") && "void" !== a.operator;
        }
        if (n.hasReturn) {
          if (n.hasReturnValue !== s) {
            e.report({
              node: o,
              messageId: n.messageId,
              data: n.data
            });
          }
        } else {
          n.hasReturn = !0;
          n.hasReturnValue = s;
          n.messageId = s ? "missingReturnValue" : "unexpectedReturnValue";
          n.data = {
            name: "Program" === n.node.type ? "Program" : r.upperFirst(i.getFunctionNameWithKind(n.node))
          };
        }
      },
      "Program:exit": a,
      "FunctionDeclaration:exit": a,
      "FunctionExpression:exit": a,
      "ArrowFunctionExpression:exit": a
    };
  }
};