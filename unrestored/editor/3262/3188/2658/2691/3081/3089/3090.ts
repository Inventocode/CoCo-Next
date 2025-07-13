"use strict";

export default (function (e, t) {
  e.traverse(d, {
    scope: e.scope,
    bindingNames: t,
    seen: new WeakSet()
  });
});
import * as r from "../../../2623/index";
var i = r.LOGICAL_OPERATORS;
var a = r.assignmentExpression;
var s = r.binaryExpression;
var o = r.cloneNode;
var l = r.identifier;
var u = r.logicalExpression;
var c = r.numericLiteral;
var p = r.sequenceExpression;
var f = r.unaryExpression;
var d = {
  UpdateExpression: {
    exit: function (e) {
      var t = this.scope;
      var n = this.bindingNames;
      var r = e.get("argument");
      if (r.isIdentifier()) {
        var i = r.node.name;
        if (n.has(i) && t.getBinding(i) === e.scope.getBinding(i)) {
          if (e.parentPath.isExpressionStatement() && !e.isCompletionRecord()) {
            var u = "++" == e.node.operator ? "+=" : "-=";
            e.replaceWith(a(u, r.node, c(1)));
          } else if (e.node.prefix) {
            e.replaceWith(a("=", l(i), s(e.node.operator[0], f("+", r.node), c(1))));
          } else {
            var d = e.scope.generateUidIdentifierBasedOnNode(r.node, "old");
            var h = d.name;
            e.scope.push({
              id: d
            });
            var y = s(e.node.operator[0], l(h), c(1));
            e.replaceWith(p([a("=", l(h), f("+", r.node)), a("=", o(r.node), y), l(h)]));
          }
        }
      }
    }
  },
  AssignmentExpression: {
    exit: function (e) {
      var t = this.scope;
      var n = this.seen;
      var r = this.bindingNames;
      if ("=" !== e.node.operator && !n.has(e.node)) {
        n.add(e.node);
        var l = e.get("left");
        if (l.isIdentifier()) {
          var c = l.node.name;
          if (r.has(c) && t.getBinding(c) === e.scope.getBinding(c)) {
            var p = e.node.operator.slice(0, -1);
            if (i.includes(p)) {
              e.replaceWith(u(p, e.node.left, a("=", o(e.node.left), e.node.right)));
            } else {
              e.node.right = s(p, o(e.node.left), e.node.right);
              e.node.operator = "=";
            }
          }
        }
      }
    }
  }
};