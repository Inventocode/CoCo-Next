"use strict";

var r = require("../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._guessExecutionStatusRelativeTo = function (e) {
  var t = {
    this: m(this),
    target: m(e)
  };
  if (t.target.node !== t.this.node) {
    return this._guessExecutionStatusRelativeToDifferentFunctions(t.target);
  }
  var n;
  var r = {
    target: e.getAncestry(),
    this: this.getAncestry()
  };
  if (r.target.indexOf(this) >= 0) {
    return "after";
  }
  if (r.this.indexOf(e) >= 0) {
    return "before";
  }
  var i = {
    target: 0,
    this: 0
  };
  for (; !n && i.this < r.this.length;) {
    var a = r.this[i.this];
    i.target = r.target.indexOf(a);
    if (i.target >= 0) {
      n = a;
    } else {
      i.this++;
    }
  }
  if (!n) {
    throw new Error("Internal Babel error - The two compared nodes don't appear to belong to the same program.");
  }
  if (g(r.this, i.this - 1) || g(r.target, i.target - 1)) {
    return "unknown";
  }
  var o = {
    this: r.this[i.this - 1],
    target: r.target[i.target - 1]
  };
  if (o.target.listKey && o.this.listKey && o.target.container === o.this.container) {
    return o.target.key > o.this.key ? "before" : "after";
  }
  var l = s[n.type];
  var u = {
    this: l.indexOf(o.this.parentKey),
    target: l.indexOf(o.target.parentKey)
  };
  return u.target > u.this ? "before" : "after";
};
exports._guessExecutionStatusRelativeToDifferentFunctions = function (e) {
  if (!e.isFunctionDeclaration() || e.parentPath.isExportDeclaration()) {
    return "unknown";
  }
  var t = e.scope.getBinding(e.node.id.name);
  if (!t.references) {
    return "before";
  }
  var n;
  var i;
  var a = t.referencePaths;
  var s = r(a);
  try {
    for (s.s(); !(i = s.n()).done;) {
      var o = i.value;
      if (!!!o.find(function (t) {
        return t.node === e.node;
      })) {
        if ("callee" !== o.key || !o.parentPath.isCallExpression()) {
          return "unknown";
        }
        if (!T.has(o.node)) {
          T.add(o.node);
          var l = this._guessExecutionStatusRelativeTo(o);
          T.delete(o.node);
          if (n && n !== l) {
            return "unknown";
          }
          n = l;
        }
      }
    }
  } catch (u) {
    s.e(u);
  } finally {
    s.f();
  }
  return n;
};
exports._resolve = function (e, t) {
  if (t && t.indexOf(this) >= 0) {
    return;
  }
  (t = t || []).push(this);
  if (this.isVariableDeclarator()) {
    if (this.get("id").isIdentifier()) {
      return this.get("init").resolve(e, t);
    }
  } else if (this.isReferencedIdentifier()) {
    var n = this.scope.getBinding(this.node.name);
    if (!n) {
      return;
    }
    if (!n.constant) {
      return;
    }
    if ("module" === n.kind) {
      return;
    }
    if (n.path !== this) {
      var i = n.path.resolve(e, t);
      if (this.find(function (e) {
        return e.node === i.node;
      })) {
        return;
      }
      return i;
    }
  } else {
    if (this.isTypeCastExpression()) {
      return this.get("expression").resolve(e, t);
    }
    if (e && this.isMemberExpression()) {
      var a = this.toComputedKey();
      if (!c(a)) {
        return;
      }
      var s = a.value;
      var o = this.get("object").resolve(e, t);
      if (o.isObjectExpression()) {
        var l;
        var u = o.get("properties");
        var p = r(u);
        try {
          for (p.s(); !(l = p.n()).done;) {
            var f = l.value;
            if (f.isProperty()) {
              var d = f.get("key");
              var h = f.isnt("computed") && d.isIdentifier({
                name: s
              });
              if (h = h || d.isLiteral({
                value: s
              })) {
                return f.get("value").resolve(e, t);
              }
            }
          }
        } catch (m) {
          p.e(m);
        } finally {
          p.f();
        }
      } else if (o.isArrayExpression() && !isNaN(+s)) {
        var y = o.get("elements")[s];
        if (y) {
          return y.resolve(e, t);
        }
      }
    }
  }
};
exports.canHaveVariableDeclarationOrExpression = function () {
  return ("init" === this.key || "left" === this.key) && this.parentPath.isFor();
};
exports.canSwapBetweenExpressionAndStatement = function (e) {
  if ("body" !== this.key || !this.parentPath.isArrowFunctionExpression()) {
    return !1;
  }
  if (this.isExpression()) {
    return o(e);
  }
  if (this.isBlockStatement()) {
    return l(e);
  }
  return !1;
};
exports.equals = function (e, t) {
  return this.node[e] === t;
};
exports.getSource = function () {
  var e = this.node;
  if (e.end) {
    var t = this.hub.getCode();
    if (t) {
      return t.slice(e.start, e.end);
    }
  }
  return "";
};
exports.has = h;
exports.is = void 0;
exports.isCompletionRecord = function (e) {
  var t = this;
  var n = !0;
  do {
    var r = t.container;
    if (t.isFunction() && !n) {
      return !!e;
    }
    n = !1;
    if (Array.isArray(r) && t.key !== r.length - 1) {
      return !1;
    }
  } while ((t = t.parentPath) && !t.isProgram());
  return !0;
};
exports.isConstantExpression = function () {
  if (this.isIdentifier()) {
    var e = this.scope.getBinding(this.node.name);
    return !!e && e.constant;
  }
  if (this.isLiteral()) {
    return !this.isRegExpLiteral() && (!this.isTemplateLiteral() || this.get("expressions").every(function (e) {
      return e.isConstantExpression();
    }));
  }
  if (this.isUnaryExpression()) {
    return "void" === this.node.operator && this.get("argument").isConstantExpression();
  }
  if (this.isBinaryExpression()) {
    return this.get("left").isConstantExpression() && this.get("right").isConstantExpression();
  }
  return !1;
};
exports.isInStrictMode = function () {
  return !!(this.isProgram() ? this : this.parentPath).find(function (e) {
    if (e.isProgram({
      sourceType: "module"
    })) {
      return !0;
    }
    if (e.isClass()) {
      return !0;
    }
    if (!e.isProgram() && !e.isFunction()) {
      return !1;
    }
    if (e.isArrowFunctionExpression() && !e.get("body").isBlockStatement()) {
      return !1;
    }
    var t;
    var n = e.isFunction() ? e.node.body : e.node;
    var i = r(n.directives);
    try {
      for (i.s(); !(t = i.n()).done;) {
        if ("use strict" === t.value.value.value) {
          return !0;
        }
      }
    } catch (a) {
      i.e(a);
    } finally {
      i.f();
    }
  });
};
exports.isNodeType = function (e) {
  return f(this.type, e);
};
exports.isStatementOrBlock = function () {
  return !this.parentPath.isLabeledStatement() && !o(this.container) && a.includes(this.key);
};
exports.isStatic = function () {
  return this.scope.isStatic(this.node);
};
exports.isnt = function (e) {
  return !this.has(e);
};
exports.matchesPattern = function (e, t) {
  return d(this.node, e, t);
};
exports.referencesImport = function (e, t) {
  if (!this.isReferencedIdentifier()) {
    if ((this.isMemberExpression() || this.isOptionalMemberExpression()) && (this.node.computed ? p(this.node.property, {
      value: t
    }) : this.node.property.name === t)) {
      var n = this.get("object");
      return n.isReferencedIdentifier() && n.referencesImport(e, "*");
    }
    return !1;
  }
  var r = this.scope.getBinding(this.node.name);
  if (!r || "module" !== r.kind) {
    return !1;
  }
  var i = r.path;
  var a = i.parentPath;
  if (!a.isImportDeclaration()) {
    return !1;
  }
  if (a.node.source.value !== e) {
    return !1;
  }
  if (!t) {
    return !0;
  }
  if (i.isImportDefaultSpecifier() && "default" === t) {
    return !0;
  }
  if (i.isImportNamespaceSpecifier() && "*" === t) {
    return !0;
  }
  if (i.isImportSpecifier() && u(i.node.imported, {
    name: t
  })) {
    return !0;
  }
  return !1;
};
exports.resolve = function (e, t) {
  return this._resolve(e, t) || this;
};
exports.willIMaybeExecuteBefore = function (e) {
  return "after" !== this._guessExecutionStatusRelativeTo(e);
};
var i = require("../../2633/index");
var a = i.STATEMENT_OR_BLOCK_KEYS;
var s = i.VISITOR_KEYS;
var o = i.isBlockStatement;
var l = i.isExpression;
var u = i.isIdentifier;
var c = i.isLiteral;
var p = i.isStringLiteral;
var f = i.isType;
var d = i.matchesPattern;
function h(e) {
  var t = this.node && this.node[e];
  return t && Array.isArray(t) ? !!t.length : !!t;
}
var y = h;
function m(e) {
  return (e.scope.getFunctionParent() || e.scope.getProgramParent()).path;
}
function v(e, t) {
  switch (e) {
    case "LogicalExpression":
      return "right" === t;
    case "ConditionalExpression":
    case "IfStatement":
      return "consequent" === t || "alternate" === t;
    case "WhileStatement":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return "body" === t;
    case "ForStatement":
      return "body" === t || "update" === t;
    case "SwitchStatement":
      return "cases" === t;
    case "TryStatement":
      return "handler" === t;
    case "AssignmentPattern":
      return "right" === t;
    case "OptionalMemberExpression":
      return "property" === t;
    case "OptionalCallExpression":
      return "arguments" === t;
    default:
      return !1;
  }
}
function g(e, t) {
  for (var n = 0; n < t; n++) {
    var r = e[n];
    if (v(r.parent.type, r.parentKey)) {
      return !0;
    }
  }
  return !1;
}
exports.is = y;
var T = new WeakSet();