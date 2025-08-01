"use strict";

var r = require("../../../../../3200/624/index");
var i = require("../../../../../3200/494");
var a = require("../../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._containerInsert = function (e, t) {
  var n;
  this.updateSiblingKeys(e, t.length);
  var r = [];
  (n = this.container).splice.apply(n, [e, 0].concat(a(t)));
  for (var s = 0; s < t.length; s++) {
    var o = e + s;
    var l = this.getSibling(o);
    r.push(l);
    if (this.context && this.context.queue) {
      l.pushContext(this.context);
    }
  }
  for (var u = this._getQueueContexts(), c = 0, p = r; c < p.length; c++) {
    var f = p[c];
    f.setScope();
    f.debug("Inserted.");
    var d;
    var h = i(u);
    try {
      for (h.s(); !(d = h.n()).done;) {
        d.value.maybeQueue(f, !0);
      }
    } catch (y) {
      h.e(y);
    } finally {
      h.f();
    }
  }
  return r;
};
exports._containerInsertAfter = function (e) {
  return this._containerInsert(this.key + 1, e);
};
exports._containerInsertBefore = function (e) {
  return this._containerInsert(this.key, e);
};
exports._verifyNodeList = function (e) {
  if (!e) {
    return [];
  }
  if (!Array.isArray(e)) {
    e = [e];
  }
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    var r = void 0;
    if (n ? "object" !== typeof n ? r = "contains a non-object node" : n.type ? n instanceof l.default && (r = "has a NodePath when it expected a raw object") : r = "without a type" : r = "has falsy node", r) {
      var i = Array.isArray(n) ? "array" : typeof n;
      throw new Error("Node list ".concat(r, " with the index of ").concat(t, " and type of ").concat(i));
    }
  }
  return e;
};
exports.hoist = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.scope;
  var t = new o.default(this, e);
  return t.run();
};
exports.insertAfter = function (e) {
  this._assertUnremoved();
  var t = this._verifyNodeList(e);
  var n = this.parentPath;
  if (n.isExpressionStatement() || n.isLabeledStatement() || n.isExportNamedDeclaration() || n.isExportDefaultDeclaration() && this.isDeclaration()) {
    return n.insertAfter(t.map(function (e) {
      return v(e) ? m(e) : e;
    }));
  }
  if (this.isNodeType("Expression") && !this.isJSXElement() && !n.isJSXElement() || n.isForStatement() && "init" === this.key) {
    if (this.node) {
      var r = this.node;
      var i = this.scope;
      if (i.path.isPattern()) {
        p(r);
        this.replaceWith(h(c([], r), []));
        this.get("callee.body").insertAfter(t);
        return [this];
      }
      if (n.isMethod({
        computed: !0,
        key: r
      })) {
        i = i.parent;
      }
      var a = i.generateDeclaredUidIdentifier();
      t.unshift(m(f("=", y(a), r)));
      t.push(m(y(a)));
    }
    return this.replaceExpressionWithStatements(t);
  }
  if (Array.isArray(this.container)) {
    return this._containerInsertAfter(t);
  }
  if (this.isStatementOrBlock()) {
    var s = this.node;
    var o = s && (!this.isExpressionStatement() || null != s.expression);
    this.replaceWith(d(o ? [s] : []));
    return this.pushContainer("body", t);
  }
  throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
};
exports.insertBefore = function (e) {
  this._assertUnremoved();
  var t = this._verifyNodeList(e);
  var n = this.parentPath;
  if (n.isExpressionStatement() || n.isLabeledStatement() || n.isExportNamedDeclaration() || n.isExportDefaultDeclaration() && this.isDeclaration()) {
    return n.insertBefore(t);
  }
  if (this.isNodeType("Expression") && !this.isJSXElement() || n.isForStatement() && "init" === this.key) {
    if (this.node) {
      t.push(this.node);
    }
    return this.replaceExpressionWithStatements(t);
  }
  if (Array.isArray(this.container)) {
    return this._containerInsertBefore(t);
  }
  if (this.isStatementOrBlock()) {
    var r = this.node;
    var i = r && (!this.isExpressionStatement() || null != r.expression);
    this.replaceWith(d(i ? [r] : []));
    return this.unshiftContainer("body", t);
  }
  throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
};
exports.pushContainer = function (e, t) {
  this._assertUnremoved();
  var n = this._verifyNodeList(t);
  var r = this.node[e];
  return l.default.get({
    parentPath: this,
    parent: this.node,
    container: r,
    listKey: e,
    key: r.length
  }).setContext(this.context).replaceWithMultiple(n);
};
exports.unshiftContainer = function (e, t) {
  this._assertUnremoved();
  t = this._verifyNodeList(t);
  return l.default.get({
    parentPath: this,
    parent: this.node,
    container: this.node[e],
    listKey: e,
    key: 0
  }).setContext(this.context)._containerInsertBefore(t);
};
exports.updateSiblingKeys = function (e, t) {
  if (!this.parent) {
    return;
  }
  var n;
  var a = s.path.get(this.parent);
  var o = i(a);
  try {
    for (o.s(); !(n = o.n()).done;) {
      var l = r(n.value, 2)[1];
      if (l.key >= e) {
        l.key += t;
      }
    }
  } catch (u) {
    o.e(u);
  } finally {
    o.f();
  }
};
var s = require("../../2666");
var o = require("./3086");
var l = require("../index");
var u = require("../../../2633/index");
var c = u.arrowFunctionExpression;
var p = u.assertExpression;
var f = u.assignmentExpression;
var d = u.blockStatement;
var h = u.callExpression;
var y = u.cloneNode;
var m = u.expressionStatement;
var v = u.isExpression;