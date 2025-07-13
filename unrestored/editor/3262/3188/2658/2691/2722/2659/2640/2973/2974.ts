"use strict";

exports.hooks = [function (e, t) {
  if ("test" === e.key && (t.isWhile() || t.isSwitchCase()) || "declaration" === e.key && t.isExportDeclaration() || "body" === e.key && t.isLabeledStatement() || "declarations" === e.listKey && t.isVariableDeclaration() && 1 === t.node.declarations.length || "expression" === e.key && t.isExpressionStatement()) {
    t.remove();
    return !0;
  }
}, function (e, t) {
  if (t.isSequenceExpression() && 1 === t.node.expressions.length) {
    t.replaceWith(t.node.expressions[0]);
    return !0;
  }
}, function (e, t) {
  if (t.isBinary()) {
    if ("left" === e.key) {
      t.replaceWith(t.node.right);
    } else {
      t.replaceWith(t.node.left);
    }
    return !0;
  }
}, function (e, t) {
  if (t.isIfStatement() && ("consequent" === e.key || "alternate" === e.key) || "body" === e.key && (t.isLoop() || t.isArrowFunctionExpression())) {
    e.replaceWith({
      type: "BlockStatement",
      body: []
    });
    return !0;
  }
}];