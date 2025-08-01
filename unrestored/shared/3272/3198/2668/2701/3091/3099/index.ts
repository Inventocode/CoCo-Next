"use strict";

var r;
var i = require("../../../3103/2686");
var a = require("../../../../../3200/624/index");
var s = require("../../../../../2883/2731/806/index");
var o = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n;
  var r = new Map();
  var i = new Map();
  var l = function (t) {
    e.requeue(t);
  };
  var u = o(t.source);
  try {
    for (u.s(); !(n = u.n()).done;) {
      var c;
      var f = a(n.value, 2);
      var h = f[0];
      var y = f[1];
      var m = o(y.imports);
      try {
        for (m.s(); !(c = m.n()).done;) {
          var g = a(c.value, 2);
          var T = g[0];
          var b = g[1];
          r.set(T, [h, b, null]);
        }
      } catch (B) {
        m.e(B);
      } finally {
        m.f();
      }
      var S;
      var x = o(y.importsNamespace);
      try {
        for (x.s(); !(S = x.n()).done;) {
          var P = S.value;
          r.set(P, [h, null, P]);
        }
      } catch (B) {
        x.e(B);
      } finally {
        x.f();
      }
    }
  } catch (B) {
    u.e(B);
  } finally {
    u.f();
  }
  var k;
  var w = o(t.local);
  try {
    for (w.s(); !(k = w.n()).done;) {
      var C;
      var I = a(k.value, 2);
      var _ = I[0];
      var D = I[1];
      var j = i.get(_);
      if (!j) {
        j = [];
        i.set(_, j);
      }
      (C = j).push.apply(C, s(D.names));
    }
  } catch (B) {
    w.e(B);
  } finally {
    w.f();
  }
  var L = {
    metadata: t,
    requeueInParent: l,
    scope: e.scope,
    exported: i
  };
  e.traverse(O, L);
  (0, p.default)(e, new Set([].concat(s(Array.from(r.keys())), s(Array.from(i.keys())))));
  var M = {
    seen: new WeakSet(),
    metadata: t,
    requeueInParent: l,
    scope: e.scope,
    imported: r,
    exported: i,
    buildImportReference: function (e, n) {
      var r = a(e, 3);
      var i = r[0];
      var s = r[1];
      var o = r[2];
      var l = t.source.get(i);
      if (o) {
        if (l.lazy) {
          n = d(n, []);
        }
        return n;
      }
      var u = v(l.name);
      if (l.lazy) {
        u = d(u, []);
      }
      if ("default" === s && "node-default" === l.interop) {
        return u;
      }
      var c = t.stringSpecifiers.has(s);
      return E(u, c ? A(s) : v(s), c);
    }
  };
  e.traverse(N, M);
};
var l = require("../../../../../../1531/2584/1036/1363/569");
var u = require("../../../2633/index");
var c = require("../../../2677/index");
var p = require("./3100");
var f = u.assignmentExpression;
var d = u.callExpression;
var h = u.cloneNode;
var y = u.expressionStatement;
var m = u.getOuterBindingIdentifiers;
var v = u.identifier;
var g = u.isMemberExpression;
var T = u.isVariableDeclaration;
var b = u.jsxIdentifier;
var S = u.jsxMemberExpression;
var E = u.memberExpression;
var x = u.numericLiteral;
var P = u.sequenceExpression;
var A = u.stringLiteral;
var k = u.variableDeclaration;
var w = u.variableDeclarator;
var O = {
  Scope: function (e) {
    e.skip();
  },
  ClassDeclaration: function (e) {
    var t = this.requeueInParent;
    var n = this.exported;
    var r = this.metadata;
    var i = e.node.id;
    if (!i) {
      throw new Error("Expected class to have a name");
    }
    var a = i.name;
    var s = n.get(a) || [];
    if (s.length > 0) {
      var o = y(C(r, s, v(a)));
      o._blockHoist = e.node._blockHoist;
      t(e.insertAfter(o)[0]);
    }
  },
  VariableDeclaration: function (e) {
    var t = this.requeueInParent;
    var n = this.exported;
    var r = this.metadata;
    Object.keys(e.getOuterBindingIdentifiers()).forEach(function (i) {
      var a = n.get(i) || [];
      if (a.length > 0) {
        var s = y(C(r, a, v(i)));
        s._blockHoist = e.node._blockHoist;
        t(e.insertAfter(s)[0]);
      }
    });
  }
};
var C = function (e, t, n) {
  return (t || []).reduce(function (t, n) {
    var r = e.stringSpecifiers.has(n);
    return f("=", E(v(e.exportName), r ? A(n) : v(n), r), t);
  }, n);
};
var I = function (e) {
  return c.default.expression.ast(r || (r = i(["\n    (function() {\n      throw new Error('\"' + '", "' + '\" is read-only.');\n    })()\n  "])), e);
};
var N = {
  ReferencedIdentifier: function (e) {
    var t = this.seen;
    var n = this.buildImportReference;
    var r = this.scope;
    var i = this.imported;
    var a = this.requeueInParent;
    if (!t.has(e.node)) {
      t.add(e.node);
      var s = e.node.name;
      var o = i.get(s);
      if (o) {
        if (function (e) {
          do {
            switch (e.parent.type) {
              case "TSTypeAnnotation":
              case "TSTypeAliasDeclaration":
              case "TSTypeReference":
              case "TypeAnnotation":
              case "TypeAlias":
                return !0;
              case "ExportSpecifier":
                return "type" === e.parentPath.parent.exportKind;
              default:
                if (e.parentPath.isStatement() || e.parentPath.isExpression()) {
                  return !1;
                }
            }
          } while (e = e.parentPath);
        }(e)) {
          throw e.buildCodeFrameError('Cannot transform the imported binding "'.concat(s, "\" since it's also used in a type annotation. ") + "Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.");
        }
        var l = e.scope.getBinding(s);
        if (r.getBinding(s) !== l) {
          return;
        }
        var u = n(o, e.node);
        u.loc = e.node.loc;
        if ((e.parentPath.isCallExpression({
          callee: e.node
        }) || e.parentPath.isOptionalCallExpression({
          callee: e.node
        }) || e.parentPath.isTaggedTemplateExpression({
          tag: e.node
        })) && g(u)) {
          e.replaceWith(P([x(0), u]));
        } else if (e.isJSXIdentifier() && g(u)) {
          var c = u.object;
          var p = u.property;
          e.replaceWith(S(b(c.name), b(p.name)));
        } else {
          e.replaceWith(u);
        }
        a(e);
        e.skip();
      }
    }
  },
  AssignmentExpression: {
    exit: function (e) {
      var t = this;
      var n = this.scope;
      var r = this.seen;
      var i = this.imported;
      var a = this.exported;
      var s = this.requeueInParent;
      var o = this.buildImportReference;
      if (!r.has(e.node)) {
        r.add(e.node);
        var u = e.get("left");
        if (!u.isMemberExpression()) {
          if (u.isIdentifier()) {
            var c = u.node.name;
            if (n.getBinding(c) !== e.scope.getBinding(c)) {
              return;
            }
            var p = a.get(c);
            var f = i.get(c);
            if ((null == p ? void 0 : p.length) > 0 || f) {
              l("=" === e.node.operator, "Path was not simplified");
              var d = e.node;
              if (f) {
                d.left = o(f, d.left);
                d.right = P([d.right, I(c)]);
              }
              e.replaceWith(C(this.metadata, p, d));
              s(e);
            }
          } else {
            var h = u.getOuterBindingIdentifiers();
            var m = Object.keys(h).filter(function (t) {
              return n.getBinding(t) === e.scope.getBinding(t);
            });
            var g = m.find(function (e) {
              return i.has(e);
            });
            if (g) {
              e.node.right = P([e.node.right, I(g)]);
            }
            var T = [];
            m.forEach(function (e) {
              var n = a.get(e) || [];
              if (n.length > 0) {
                T.push(C(t.metadata, n, v(e)));
              }
            });
            if (T.length > 0) {
              var b = P(T);
              if (e.parentPath.isExpressionStatement()) {
                (b = y(b))._blockHoist = e.parentPath.node._blockHoist;
              }
              s(e.insertAfter(b)[0]);
            }
          }
        }
      }
    }
  },
  "ForOfStatement|ForInStatement": function (e) {
    var t = e.scope;
    var n = e.node.left;
    var r = this.exported;
    var i = this.imported;
    var a = this.scope;
    if (!T(n)) {
      for (var s, o = !1, l = e.get("body").scope, u = 0, c = Object.keys(m(n)); u < c.length; u++) {
        var p = c[u];
        if (a.getBinding(p) === t.getBinding(p)) {
          if (r.has(p)) {
            o = !0;
            if (l.hasOwnBinding(p)) {
              l.rename(p);
            }
          }
          if (i.has(p) && !s) {
            s = p;
          }
        }
      }
      if (!o && !s) {
        return;
      }
      e.ensureBlock();
      var d = e.get("body");
      var v = t.generateUidIdentifierBasedOnNode(n);
      e.get("left").replaceWith(k("let", [w(h(v))]));
      t.registerDeclaration(e.get("left"));
      if (o) {
        d.unshiftContainer("body", y(f("=", n, v)));
      }
      if (s) {
        d.unshiftContainer("body", y(I(s)));
      }
    }
  }
};