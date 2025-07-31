"use strict";

var r = require("../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
exports.ensure = function (e, t) {
  if (!y) {
    y = t;
  }
  v(e);
};
exports.get = g;
exports.getDependencies = function (e) {
  return Array.from(v(e).dependencies.values());
};
exports.list = void 0;
exports.minVersion = function (e) {
  return v(e).minVersion();
};
var i = require("./2659/index");
var a = require("./2624/index");
var s = require("./2981/index");
var o = a.assignmentExpression;
var l = a.cloneNode;
var u = a.expressionStatement;
var c = a.file;
var p = a.identifier;
var f = a.variableDeclaration;
var d = a.variableDeclarator;
function h(e) {
  for (var t = []; e.parentPath; e = e.parentPath) {
    t.push(e.key);
    if (e.inList) {
      t.push(e.listKey);
    }
  }
  return t.reverse().join(".");
}
var y = void 0;
var m = Object.create(null);
function v(e) {
  if (!m[e]) {
    var t = s.default[e];
    if (!t) {
      throw Object.assign(new ReferenceError("Unknown helper ".concat(e)), {
        code: "BABEL_HELPER_UNKNOWN",
        helper: e
      });
    }
    var n = function () {
      var n = {
        ast: c(t.ast())
      };
      return y ? new y({
        filename: "babel-helper://".concat(e)
      }, n) : n;
    };
    var a = function (e) {
      var t;
      var n;
      var r = new Set();
      var a = new Set();
      var o = new Map();
      var l = [];
      var u = [];
      var c = [];
      var p = {
        ImportDeclaration: function (e) {
          var t = e.node.source.value;
          if (!s.default[t]) {
            throw e.buildCodeFrameError("Unknown helper ".concat(t));
          }
          if (1 !== e.get("specifiers").length || !e.get("specifiers.0").isImportDefaultSpecifier()) {
            throw e.buildCodeFrameError("Helpers can only import a default value");
          }
          var n = e.node.specifiers[0].local;
          o.set(n, t);
          u.push(h(e));
        },
        ExportDefaultDeclaration: function (e) {
          var r = e.get("declaration");
          if (r.isFunctionDeclaration()) {
            if (!r.node.id) {
              throw r.buildCodeFrameError("Helpers should give names to their exported func declaration");
            }
            t = r.node.id.name;
          }
          n = h(e);
        },
        ExportAllDeclaration: function (e) {
          throw e.buildCodeFrameError("Helpers can only export default");
        },
        ExportNamedDeclaration: function (e) {
          throw e.buildCodeFrameError("Helpers can only export default");
        },
        Statement: function (e) {
          if (!e.isModuleDeclaration()) {
            e.skip();
          }
        }
      };
      var f = {
        Program: function (e) {
          var n = e.scope.getAllBindings();
          Object.keys(n).forEach(function (e) {
            if (e !== t) {
              if (!o.has(n[e].identifier)) {
                a.add(e);
              }
            }
          });
        },
        ReferencedIdentifier: function (e) {
          var t = e.node.name;
          var n = e.scope.getBinding(t);
          if (n) {
            if (o.has(n.identifier)) {
              c.push(h(e));
            }
          } else {
            r.add(t);
          }
        },
        AssignmentExpression: function (e) {
          var n = e.get("left");
          if (t in n.getBindingIdentifiers()) {
            if (!n.isIdentifier()) {
              throw n.buildCodeFrameError("Only simple assignments to exports are allowed in helpers");
            }
            var r = e.scope.getBinding(t);
            if (null != r && r.scope.path.isProgram()) {
              l.push(h(e));
            }
          }
        }
      };
      if ((0, i.default)(e.ast, p, e.scope), (0, i.default)(e.ast, f, e.scope), !n) {
        throw new Error("Helpers must default-export something.");
      }
      l.reverse();
      return {
        globals: Array.from(r),
        localBindingNames: Array.from(a),
        dependencies: o,
        exportBindingAssignments: l,
        exportPath: n,
        exportName: t,
        importBindingsReferences: c,
        importPaths: u
      };
    }(n());
    m[e] = {
      build: function (e, t, s) {
        var c = n();
        (function (e, t, n, a, s) {
          if (a && !n) {
            throw new Error("Unexpected local bindings for module-based helpers.");
          }
          if (n) {
            var c = t.localBindingNames;
            var h = t.dependencies;
            var y = t.exportBindingAssignments;
            var m = t.exportPath;
            var v = t.exportName;
            var g = t.importBindingsReferences;
            var T = t.importPaths;
            var b = {};
            h.forEach(function (e, t) {
              b[t.name] = "function" === typeof s && s(e) || t;
            });
            var S = {};
            var E = new Set(a || []);
            c.forEach(function (e) {
              for (var t = e; E.has(t);) {
                t = "_" + t;
              }
              if (t !== e) {
                S[e] = t;
              }
            });
            if ("Identifier" === n.type && v !== n.name) {
              S[v] = n.name;
            }
            var x = {
              Program: function (e) {
                var t = e.get(m);
                var i = T.map(function (t) {
                  return e.get(t);
                });
                var a = g.map(function (t) {
                  return e.get(t);
                });
                var s = t.get("declaration");
                if ("Identifier" === n.type) {
                  if (s.isFunctionDeclaration()) {
                    t.replaceWith(s);
                  } else {
                    t.replaceWith(f("var", [d(n, s.node)]));
                  }
                } else {
                  if ("MemberExpression" !== n.type) {
                    throw new Error("Unexpected helper format.");
                  }
                  if (s.isFunctionDeclaration()) {
                    y.forEach(function (t) {
                      var r = e.get(t);
                      r.replaceWith(o("=", n, r.node));
                    });
                    t.replaceWith(s);
                    e.pushContainer("body", u(o("=", n, p(v))));
                  } else {
                    t.replaceWith(u(o("=", n, s.node)));
                  }
                }
                Object.keys(S).forEach(function (t) {
                  e.scope.rename(t, S[t]);
                });
                var c;
                var h = r(i);
                try {
                  for (h.s(); !(c = h.n()).done;) {
                    c.value.remove();
                  }
                } catch (k) {
                  h.e(k);
                } finally {
                  h.f();
                }
                var E;
                var x = r(a);
                try {
                  for (x.s(); !(E = x.n()).done;) {
                    var P = E.value;
                    var A = l(b[P.node.name]);
                    P.replaceWith(A);
                  }
                } catch (k) {
                  x.e(k);
                } finally {
                  x.f();
                }
                e.stop();
              }
            };
            (0, i.default)(e.ast, x, e.scope);
          }
        })(c, a, t, s, e);
        return {
          nodes: c.ast.program.body,
          globals: a.globals
        };
      },
      minVersion: function () {
        return t.minVersion;
      },
      dependencies: a.dependencies
    };
  }
  return m[e];
}
function g(e, t, n, r) {
  return v(e).build(t, n, r);
}
var T = Object.keys(s.default).map(function (e) {
  return e.replace(/^_/, "");
});
exports.list = T;
var b = g;
exports.default = b;