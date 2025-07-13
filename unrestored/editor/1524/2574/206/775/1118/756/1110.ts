"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow the use of undeclared variables unless mentioned in `/*global */` comments",
      category: "Variables",
      recommended: !0,
      url: "https://eslint.org/docs/rules/no-undef"
    },
    schema: [{
      type: "object",
      properties: {
        typeof: {
          type: "boolean",
          default: !1
        }
      },
      additionalProperties: !1
    }],
    messages: {
      undef: "'{{name}}' is not defined."
    }
  },
  create: function (e) {
    var t = e.options[0];
    var n = t && !0 === t.typeof || !1;
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