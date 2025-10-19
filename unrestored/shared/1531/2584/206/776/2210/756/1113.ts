/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1113
 */

"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow the use of undeclared variables unless mentioned in `/*global */` comments",
      category: "Variables",
      recommended: true,
      url: "https://eslint.org/docs/rules/no-undef"
    },
    schema: [{
      type: "object",
      properties: {
        typeof: {
          type: "boolean",
          default: false
        }
      },
      additionalProperties: false
    }],
    messages: {
      undef: "'{{name}}' is not defined."
    }
  },
  create: function (e) {
    var t = e.options[0];
    var n = t && true === t.typeof || false;
    return {
      "Program:exit": function () {
        e.getScope().through.forEach(function (t) {
          var r = t.identifier;
          if (!(!n && function (e) {
            var t = e.parent;
            return "UnaryExpression" === t.type && "typeof" === t.operator;
          }(r))) {
            e.report({
              node: r,
              messageId: "undef",
              data: r
            });
          }
        });
      }
    };
  }
};