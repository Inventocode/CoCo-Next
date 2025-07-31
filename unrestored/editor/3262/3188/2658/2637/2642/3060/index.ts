"use strict";

var r = require("../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._replaceWith = function (e) {
  var t;
  if (!this.container) {
    throw new ReferenceError("Container is falsy");
  }
  if (this.inList) {
    C(this.parent, this.key, [e]);
  } else {
    C(this.parent, this.key, e);
  }
  this.debug("Replace with ".concat(null == e ? void 0 : e.type));
  if (!(null == (t = o.path.get(this.parent)))) {
    t.set(e, this).delete(this.node);
  }
  this.node = this.container[this.key] = e;
};
exports.replaceExpressionWithStatements = function (e) {
  var t = this;
  this.resync();
  var n = O(e, this.scope);
  if (n) {
    return this.replaceWith(n)[0].get("expressions");
  }
  var i = this.getFunctionParent();
  var s = null == i ? void 0 : i.is("async");
  var o = null == i ? void 0 : i.is("generator");
  var l = f([], y(e));
  this.replaceWith(m(l, []));
  var u = this.get("callee");
  (0, c.default)(u.get("body"), function (e) {
    t.scope.push({
      id: e
    });
  }, "var");
  var g;
  var b = this.get("callee").getCompletionRecords();
  var S = r(b);
  try {
    for (S.s(); !(g = S.n()).done;) {
      var E = g.value;
      if (E.isExpressionStatement()) {
        var x = E.findParent(function (e) {
          return e.isLoop();
        });
        if (x) {
          var P = x.getData("expressionReplacementReturnUid");
          if (P) {
            P = T(P.name);
          } else {
            P = u.scope.generateDeclaredUidIdentifier("ret");
            u.get("body").pushContainer("body", w(v(P)));
            x.setData("expressionReplacementReturnUid", P);
          }
          E.get("expression").replaceWith(d("=", v(P), E.node.expression));
        } else {
          E.replaceWith(w(E.node.expression));
        }
      }
    }
  } catch (N) {
    S.e(N);
  } finally {
    S.f();
  }
  u.arrowFunctionToExpression();
  var A = u;
  var k = s && a.default.hasType(this.get("callee.body").node, "AwaitExpression", p);
  var C = o && a.default.hasType(this.get("callee.body").node, "YieldExpression", p);
  if (k) {
    A.set("async", !0);
    if (!C) {
      this.replaceWith(h(this.node));
    }
  }
  if (C) {
    A.set("generator", !0);
    this.replaceWith(I(this.node, !0));
  }
  return A.get("body.body");
};
exports.replaceInline = function (e) {
  if (this.resync(), Array.isArray(e)) {
    if (Array.isArray(this.container)) {
      e = this._verifyNodeList(e);
      var t = this._containerInsertAfter(e);
      this.remove();
      return t;
    }
    return this.replaceWithMultiple(e);
  }
  return this.replaceWith(e);
};
exports.replaceWith = function (e) {
  if (this.resync(), this.removed) {
    throw new Error("You can't replace this node, we've already removed it");
  }
  if (e instanceof s.default) {
    e = e.node;
  }
  if (!e) {
    throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
  }
  if (this.node === e) {
    return [this];
  }
  if (this.isProgram() && !P(e)) {
    throw new Error("You can only replace a Program root node with another Program node");
  }
  if (Array.isArray(e)) {
    throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
  }
  if ("string" === typeof e) {
    throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
  }
  var t = "";
  if (this.isNodeType("Statement") && x(e)) {
    if (!(this.canHaveVariableDeclarationOrExpression() || this.canSwapBetweenExpressionAndStatement(e) || this.parentPath.isExportDefaultDeclaration())) {
      e = g(e);
      t = "expression";
    }
  }
  if (this.isNodeType("Expression") && A(e) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(e)) {
    return this.replaceExpressionWithStatements([e]);
  }
  var n = this.node;
  if (n) {
    E(e, n);
    k(n);
  }
  this._replaceWith(e);
  this.type = e.type;
  this.setScope();
  this.requeue();
  return [t ? this.get(t) : this];
};
exports.replaceWithMultiple = function (e) {
  var t;
  this.resync();
  e = this._verifyNodeList(e);
  b(e[0], this.node);
  S(e[e.length - 1], this.node);
  if (!(null == (t = o.path.get(this.parent)))) {
    t.delete(this.node);
  }
  this.node = this.container[this.key] = null;
  var n = this.insertAfter(e);
  if (this.node) {
    this.requeue();
  } else {
    this.remove();
  }
  return n;
};
exports.replaceWithSourceString = function (e) {
  this.resync();
  try {
    e = "(".concat(e, ")");
    e = (0, l.parse)(e);
  } catch (n) {
    var t = n.loc;
    throw t && (n.message += " - make sure this is an expression.\n" + (0, i.codeFrameColumns)(e, {
      start: {
        line: t.line,
        column: t.column + 1
      }
    }), n.code = "BABEL_REPLACE_SOURCE_ERROR"), n;
  }
  e = e.program.body[0].expression;
  a.default.removeProperties(e);
  return this.replaceWith(e);
};
var i = require("../../../2691/2678/index");
var a = require("../../index");
var s = require("../index");
var o = require("../../2656");
var l = require("../../../2679/index");
var u = require("../../../2623/index");
var c = require("./3062");
var p = u.FUNCTION_TYPES;
var f = u.arrowFunctionExpression;
var d = u.assignmentExpression;
var h = u.awaitExpression;
var y = u.blockStatement;
var m = u.callExpression;
var v = u.cloneNode;
var g = u.expressionStatement;
var T = u.identifier;
var b = u.inheritLeadingComments;
var S = u.inheritTrailingComments;
var E = u.inheritsComments;
var x = u.isExpression;
var P = u.isProgram;
var A = u.isStatement;
var k = u.removeComments;
var w = u.returnStatement;
var O = u.toSequenceExpression;
var C = u.validate;
var I = u.yieldExpression;