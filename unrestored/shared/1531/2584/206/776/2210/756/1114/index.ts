/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1114
 */

"use strict"

var r = require("lodash")
var i = require("./2212/index")
function o(e) {
  return !e.reachable
}
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "require `return` statements to either always or never specify values",
      category: "Best Practices",
      recommended: false,
      url: "https://eslint.org/docs/rules/consistent-return"
    },
    schema: [{
      type: "object",
      properties: {
        treatUndefinedAsUnspecified: {
          type: "boolean",
          default: false
        }
      },
      additionalProperties: false
    }],
    messages: {
      missingReturn: "Expected to return a value at the end of {{name}}.",
      missingReturnValue: "{{name}} expected a return value.",
      unexpectedReturnValue: "{{name}} expected no return value."
    }
  },
  create: function (e) {
    var t = true === (e.options[0] || {}).treatUndefinedAsUnspecified
    var n = null
    function a(t) {
      var r
      var a
      if (!(!n.hasReturnValue || n.codePath.currentSegments.every(o) || i.isES5Constructor(t) || function (e) {
        return "FunctionExpression" === e.type && e.parent && "MethodDefinition" === e.parent.type && "constructor" === e.parent.kind
      }(t))) {
        if ("Program" === t.type) {
          r = {
            line: 1,
            column: 0
          }
          a = "program"
        } else {
          r = "ArrowFunctionExpression" === t.type ? e.getSourceCode().getTokenBefore(t.body, i.isArrowToken).loc.start : "MethodDefinition" === t.parent.type || "Property" === t.parent.type && t.parent.method ? t.parent.key.loc.start : (t.id || t).loc.start
        }
        if (!a) {
          a = i.getFunctionNameWithKind(t)
        }
        e.report({
          node: t,
          loc: r,
          messageId: "missingReturn",
          data: {
            name: a
          }
        })
      }
    }
    return {
      onCodePathStart: function (e, t) {
        n = {
          upper: n,
          codePath: e,
          hasReturn: false,
          hasReturnValue: false,
          messageId: "",
          node: t
        }
      },
      onCodePathEnd: function () {
        n = n.upper
      },
      ReturnStatement: function (o) {
        var o$argument = o.argument
        var s = Boolean(o$argument)
        if (t && s) {
          s = !function (e, t) {
            return "Identifier" === e.type && e.name === t
          }(o$argument, "undefined") && "void" !== o$argument.operator
        }
        if (n.hasReturn) {
          if (n.hasReturnValue !== s) {
            e.report({
              node: o,
              messageId: n.messageId,
              data: n.data
            })
          }
        } else {
          n.hasReturn = true
          n.hasReturnValue = s
          n.messageId = s ? "missingReturnValue" : "unexpectedReturnValue"
          n.data = {
            name: "Program" === n.node.type ? "Program" : r.upperFirst(i.getFunctionNameWithKind(n.node))
          }
        }
      },
      "Program:exit": a,
      "FunctionDeclaration:exit": a,
      "FunctionExpression:exit": a,
      "ArrowFunctionExpression:exit": a
    }
  }
}
