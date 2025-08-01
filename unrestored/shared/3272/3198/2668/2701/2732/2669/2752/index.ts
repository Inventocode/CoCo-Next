"use strict";

var r = require("../../../../../../3200/624/index");
var i = require("../../../../220");
var a = require("../../../../230");
var s = require("../../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var o = require("./2936/index");
var l = require("../index");
var u = require("./2753");
var c = require("../../../../2647/2787/2754/index");
var p = require("../../2634/index");
var f = require("../2665");
var d = p.NOT_LOCAL_BINDING;
var h = p.callExpression;
var y = p.cloneNode;
var m = p.getBindingIdentifiers;
var v = p.identifier;
var g = p.isArrayExpression;
var T = p.isBinary;
var b = p.isClass;
var S = p.isClassBody;
var E = p.isClassDeclaration;
var x = p.isExportAllDeclaration;
var P = p.isExportDefaultDeclaration;
var A = p.isExportNamedDeclaration;
var k = p.isFunctionDeclaration;
var w = p.isIdentifier;
var O = p.isImportDeclaration;
var C = p.isLiteral;
var I = p.isMethod;
var N = p.isModuleDeclaration;
var _ = p.isModuleSpecifier;
var D = p.isObjectExpression;
var j = p.isProperty;
var L = p.isPureish;
var M = p.isSuper;
var B = p.isTaggedTemplateExpression;
var F = p.isTemplateLiteral;
var R = p.isThisExpression;
var U = p.isUnaryExpression;
var K = p.isVariableDeclaration;
var V = p.matchesPattern;
var W = p.memberExpression;
var Y = p.numericLiteral;
var H = p.toIdentifier;
var q = p.unaryExpression;
var J = p.variableDeclaration;
var X = p.variableDeclarator;
var G = {
  ForStatement: function (e) {
    var t = e.get("init");
    if (t.isVar()) {
      var n = e.scope;
      (n.getFunctionParent() || n.getProgramParent()).registerBinding("var", t);
    }
  },
  Declaration: function (e) {
    if (!e.isBlockScoped()) {
      if (!(e.isImportDeclaration() || e.isExportDeclaration())) {
        (e.scope.getFunctionParent() || e.scope.getProgramParent()).registerDeclaration(e);
      }
    }
  },
  ImportDeclaration: function (e) {
    e.scope.getBlockParent().registerDeclaration(e);
  },
  ReferencedIdentifier: function (e, t) {
    t.references.push(e);
  },
  ForXStatement: function (e, t) {
    var n = e.get("left");
    if (n.isPattern() || n.isIdentifier()) {
      t.constantViolations.push(e);
    } else if (n.isVar()) {
      var r = e.scope;
      (r.getFunctionParent() || r.getProgramParent()).registerBinding("var", n);
    }
  },
  ExportDeclaration: {
    exit: function (e) {
      var t = e.node;
      var n = e.scope;
      if (!x(t)) {
        var r = t.declaration;
        if (E(r) || k(r)) {
          var i = r.id;
          if (!i) {
            return;
          }
          var a = n.getBinding(i.name);
          if (!(null == a)) {
            a.reference(e);
          }
        } else if (K(r)) {
          var o;
          var l = s(r.declarations);
          try {
            for (l.s(); !(o = l.n()).done;) {
              for (var u = o.value, c = 0, p = Object.keys(m(u)); c < p.length; c++) {
                var f = p[c];
                var d = n.getBinding(f);
                if (!(null == d)) {
                  d.reference(e);
                }
              }
            }
          } catch (h) {
            l.e(h);
          } finally {
            l.f();
          }
        }
      }
    }
  },
  LabeledStatement: function (e) {
    e.scope.getBlockParent().registerDeclaration(e);
  },
  AssignmentExpression: function (e, t) {
    t.assignments.push(e);
  },
  UpdateExpression: function (e, t) {
    t.constantViolations.push(e);
  },
  UnaryExpression: function (e, t) {
    if ("delete" === e.node.operator) {
      t.constantViolations.push(e);
    }
  },
  BlockScoped: function (e) {
    var t = e.scope;
    if (t.path === e && (t = t.parent), t.getBlockParent().registerDeclaration(e), e.isClassDeclaration() && e.node.id) {
      var n = e.node.id.name;
      e.scope.bindings[n] = e.scope.parent.getBinding(n);
    }
  },
  CatchClause: function (e) {
    e.scope.registerBinding("let", e);
  },
  Function: function (e) {
    var t;
    var n = e.get("params");
    var r = s(n);
    try {
      for (r.s(); !(t = r.n()).done;) {
        var i = t.value;
        e.scope.registerBinding("param", i);
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
    if (e.isFunctionExpression() && e.has("id") && !e.get("id").node[d]) {
      e.scope.registerBinding("local", e.get("id"), e);
    }
  },
  ClassExpression: function (e) {
    if (e.has("id") && !e.get("id").node[d]) {
      e.scope.registerBinding("local", e);
    }
  }
};
var z = 0;
var $ = function () {
  function e(t) {
    i(this, e);
    this.uid = void 0;
    this.path = void 0;
    this.block = void 0;
    this.labels = void 0;
    this.inited = void 0;
    this.bindings = void 0;
    this.references = void 0;
    this.globals = void 0;
    this.uids = void 0;
    this.data = void 0;
    this.crawling = void 0;
    var n = t.node;
    var r = f.scope.get(n);
    if ((null == r ? void 0 : r.path) === t) {
      return r;
    }
    f.scope.set(n, this);
    this.uid = z++;
    this.block = n;
    this.path = t;
    this.labels = new Map();
    this.inited = !1;
  }
  a(e, [{
    key: "parent",
    get: function () {
      var e;
      var t;
      var n = this.path;
      do {
        var r = "key" === n.key;
        n = n.parentPath;
        if (r && n.isMethod()) {
          n = n.parentPath;
        }
        if (n && n.isScope()) {
          t = n;
        }
      } while (n && !t);
      return null == (e = t) ? void 0 : e.scope;
    }
  }, {
    key: "parentBlock",
    get: function () {
      return this.path.parent;
    }
  }, {
    key: "hub",
    get: function () {
      return this.path.hub;
    }
  }, {
    key: "traverse",
    value: function (e, t, n) {
      (0, l.default)(e, t, this, n, this.path);
    }
  }, {
    key: "generateDeclaredUidIdentifier",
    value: function (e) {
      var t = this.generateUidIdentifier(e);
      this.push({
        id: t
      });
      return y(t);
    }
  }, {
    key: "generateUidIdentifier",
    value: function (e) {
      return v(this.generateUid(e));
    }
  }, {
    key: "generateUid",
    value: function () {
      var e;
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "temp";
      t = H(t).replace(/^_+/, "").replace(/[0-9]+$/g, "");
      var n = 1;
      do {
        e = this._generateUid(t, n);
        n++;
      } while (this.hasLabel(e) || this.hasBinding(e) || this.hasGlobal(e) || this.hasReference(e));
      var r = this.getProgramParent();
      r.references[e] = !0;
      r.uids[e] = !0;
      return e;
    }
  }, {
    key: "_generateUid",
    value: function (e, t) {
      var n = e;
      if (t > 1) {
        n += t;
      }
      return "_".concat(n);
    }
  }, {
    key: "generateUidBasedOnNode",
    value: function (e, t) {
      var n = [];
      !function e(t, n) {
        switch (null == t ? void 0 : t.type) {
          default:
            if (N(t)) {
              if ((x(t) || A(t) || O(t)) && t.source) {
                e(t.source, n);
              } else if ((A(t) || O(t)) && t.specifiers && t.specifiers.length) {
                var r;
                var i = s(t.specifiers);
                try {
                  for (i.s(); !(r = i.n()).done;) {
                    e(r.value, n);
                  }
                } catch (l) {
                  i.e(l);
                } finally {
                  i.f();
                }
              } else if ((P(t) || A(t)) && t.declaration) {
                e(t.declaration, n);
              }
            } else if (_(t)) {
              e(t.local, n);
            } else {
              if (C(t)) {
                n.push(t.value);
              }
            }
            break;
          case "MemberExpression":
          case "OptionalMemberExpression":
          case "JSXMemberExpression":
            e(t.object, n);
            e(t.property, n);
            break;
          case "Identifier":
          case "JSXIdentifier":
            n.push(t.name);
            break;
          case "CallExpression":
          case "OptionalCallExpression":
          case "NewExpression":
            e(t.callee, n);
            break;
          case "ObjectExpression":
          case "ObjectPattern":
            var a,
              o = s(t.properties);
            try {
              for (o.s(); !(a = o.n()).done;) {
                e(a.value, n);
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            break;
          case "SpreadElement":
          case "RestElement":
            e(t.argument, n);
            break;
          case "ObjectProperty":
          case "ObjectMethod":
          case "ClassProperty":
          case "ClassMethod":
          case "ClassPrivateProperty":
          case "ClassPrivateMethod":
            e(t.key, n);
            break;
          case "ThisExpression":
            n.push("this");
            break;
          case "Super":
            n.push("super");
            break;
          case "Import":
            n.push("import");
            break;
          case "DoExpression":
            n.push("do");
            break;
          case "YieldExpression":
            n.push("yield");
            e(t.argument, n);
            break;
          case "AwaitExpression":
            n.push("await");
            e(t.argument, n);
            break;
          case "AssignmentExpression":
            e(t.left, n);
            break;
          case "VariableDeclarator":
            e(t.id, n);
            break;
          case "FunctionExpression":
          case "FunctionDeclaration":
          case "ClassExpression":
          case "ClassDeclaration":
          case "PrivateName":
            e(t.id, n);
            break;
          case "ParenthesizedExpression":
            e(t.expression, n);
            break;
          case "UnaryExpression":
          case "UpdateExpression":
            e(t.argument, n);
            break;
          case "MetaProperty":
            e(t.meta, n);
            e(t.property, n);
            break;
          case "JSXElement":
            e(t.openingElement, n);
            break;
          case "JSXOpeningElement":
            n.push(t.name);
            break;
          case "JSXFragment":
            e(t.openingFragment, n);
            break;
          case "JSXOpeningFragment":
            n.push("Fragment");
            break;
          case "JSXNamespacedName":
            e(t.namespace, n);
            e(t.name, n);
        }
      }(e, n);
      var r = n.join("$");
      r = r.replace(/^_/, "") || t || "ref";
      return this.generateUid(r.slice(0, 20));
    }
  }, {
    key: "generateUidIdentifierBasedOnNode",
    value: function (e, t) {
      return v(this.generateUidBasedOnNode(e, t));
    }
  }, {
    key: "isStatic",
    value: function (e) {
      if (R(e) || M(e)) {
        return !0;
      }
      if (w(e)) {
        var t = this.getBinding(e.name);
        return t ? t.constant : this.hasBinding(e.name);
      }
      return !1;
    }
  }, {
    key: "maybeGenerateMemoised",
    value: function (e, t) {
      if (this.isStatic(e)) {
        return null;
      }
      var n = this.generateUidIdentifierBasedOnNode(e);
      return t ? n : (this.push({
        id: n
      }), y(n));
    }
  }, {
    key: "checkBlockScopedCollisions",
    value: function (e, t, n, r) {
      if ("param" !== t && "local" !== e.kind && ("let" === t || "let" === e.kind || "const" === e.kind || "module" === e.kind || "param" === e.kind && ("let" === t || "const" === t))) {
        throw this.hub.buildError(r, 'Duplicate declaration "'.concat(n, '"'), TypeError);
      }
    }
  }, {
    key: "rename",
    value: function (e, t, n) {
      var r = this.getBinding(e);
      if (r) {
        t = t || this.generateUidIdentifier(e).name;
        return new o.default(r, e, t).rename(n);
      }
    }
  }, {
    key: "_renameFromMap",
    value: function (e, t, n, r) {
      if (e[t]) {
        e[n] = r;
        e[t] = null;
      }
    }
  }, {
    key: "dump",
    value: function () {
      var e = "-".repeat(60);
      console.log(e);
      var t = this;
      do {
        console.log("#", t.block.type);
        for (var n = 0, r = Object.keys(t.bindings); n < r.length; n++) {
          var i = r[n];
          var a = t.bindings[i];
          console.log(" -", i, {
            constant: a.constant,
            references: a.references,
            violations: a.constantViolations.length,
            kind: a.kind
          });
        }
      } while (t = t.parent);
      console.log(e);
    }
  }, {
    key: "toArray",
    value: function (e, t, n) {
      if (w(e)) {
        var r = this.getBinding(e.name);
        if (null != r && r.constant && r.path.isGenericType("Array")) {
          return e;
        }
      }
      if (g(e)) {
        return e;
      }
      if (w(e, {
        name: "arguments"
      })) {
        return h(W(W(W(v("Array"), v("prototype")), v("slice")), v("call")), [e]);
      }
      var i;
      var a = [e];
      if (!0 === t) {
        i = "toConsumableArray";
      } else {
        if (t) {
          a.push(Y(t));
          i = "slicedToArray";
        } else {
          i = "toArray";
        }
      }
      if (n) {
        a.unshift(this.hub.addHelper(i));
        i = "maybeArrayLike";
      }
      return h(this.hub.addHelper(i), a);
    }
  }, {
    key: "hasLabel",
    value: function (e) {
      return !!this.getLabel(e);
    }
  }, {
    key: "getLabel",
    value: function (e) {
      return this.labels.get(e);
    }
  }, {
    key: "registerLabel",
    value: function (e) {
      this.labels.set(e.node.label.name, e);
    }
  }, {
    key: "registerDeclaration",
    value: function (e) {
      if (e.isLabeledStatement()) {
        this.registerLabel(e);
      } else if (e.isFunctionDeclaration()) {
        this.registerBinding("hoisted", e.get("id"), e);
      } else if (e.isVariableDeclaration()) {
        var t;
        var n = e.get("declarations");
        var r = s(n);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            this.registerBinding(e.node.kind, i);
          }
        } catch (p) {
          r.e(p);
        } finally {
          r.f();
        }
      } else if (e.isClassDeclaration()) {
        this.registerBinding("let", e);
      } else if (e.isImportDeclaration()) {
        var a;
        var o = e.get("specifiers");
        var l = s(o);
        try {
          for (l.s(); !(a = l.n()).done;) {
            var u = a.value;
            this.registerBinding("module", u);
          }
        } catch (p) {
          l.e(p);
        } finally {
          l.f();
        }
      } else if (e.isExportDeclaration()) {
        var c = e.get("declaration");
        if (c.isClassDeclaration() || c.isFunctionDeclaration() || c.isVariableDeclaration()) {
          this.registerDeclaration(c);
        }
      } else {
        this.registerBinding("unknown", e);
      }
    }
  }, {
    key: "buildUndefinedNode",
    value: function () {
      return q("void", Y(0), !0);
    }
  }, {
    key: "registerConstantViolation",
    value: function (e) {
      for (var t = e.getBindingIdentifiers(), n = 0, r = Object.keys(t); n < r.length; n++) {
        var i = r[n];
        var a = this.getBinding(i);
        if (a) {
          a.reassign(e);
        }
      }
    }
  }, {
    key: "registerBinding",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
      if (!e) {
        throw new ReferenceError("no `kind`");
      }
      if (t.isVariableDeclaration()) {
        var r;
        var i = t.get("declarations");
        var a = s(i);
        try {
          for (a.s(); !(r = a.n()).done;) {
            var o = r.value;
            this.registerBinding(e, o);
          }
        } catch (g) {
          a.e(g);
        } finally {
          a.f();
        }
      } else {
        for (var l = this.getProgramParent(), c = t.getOuterBindingIdentifiers(!0), p = 0, f = Object.keys(c); p < f.length; p++) {
          var d = f[p];
          l.references[d] = !0;
          var h;
          var y = s(c[d]);
          try {
            for (y.s(); !(h = y.n()).done;) {
              var m = h.value;
              var v = this.getOwnBinding(d);
              if (v) {
                if (v.identifier === m) {
                  continue;
                }
                this.checkBlockScopedCollisions(v, e, d, m);
              }
              if (v) {
                this.registerConstantViolation(n);
              } else {
                this.bindings[d] = new u.default({
                  identifier: m,
                  scope: this,
                  path: n,
                  kind: e
                });
              }
            }
          } catch (g) {
            y.e(g);
          } finally {
            y.f();
          }
        }
      }
    }
  }, {
    key: "addGlobal",
    value: function (e) {
      this.globals[e.name] = e;
    }
  }, {
    key: "hasUid",
    value: function (e) {
      var t = this;
      do {
        if (t.uids[e]) {
          return !0;
        }
      } while (t = t.parent);
      return !1;
    }
  }, {
    key: "hasGlobal",
    value: function (e) {
      var t = this;
      do {
        if (t.globals[e]) {
          return !0;
        }
      } while (t = t.parent);
      return !1;
    }
  }, {
    key: "hasReference",
    value: function (e) {
      return !!this.getProgramParent().references[e];
    }
  }, {
    key: "isPure",
    value: function (e, t) {
      if (w(e)) {
        var n = this.getBinding(e.name);
        return !!n && (!t || n.constant);
      }
      if (b(e)) {
        return !(e.superClass && !this.isPure(e.superClass, t)) && this.isPure(e.body, t);
      }
      if (S(e)) {
        var r;
        var i = s(e.body);
        try {
          for (i.s(); !(r = i.n()).done;) {
            var a = r.value;
            if (!this.isPure(a, t)) {
              return !1;
            }
          }
        } catch (m) {
          i.e(m);
        } finally {
          i.f();
        }
        return !0;
      }
      if (T(e)) {
        return this.isPure(e.left, t) && this.isPure(e.right, t);
      }
      if (g(e)) {
        var o;
        var l = s(e.elements);
        try {
          for (l.s(); !(o = l.n()).done;) {
            var u = o.value;
            if (!this.isPure(u, t)) {
              return !1;
            }
          }
        } catch (m) {
          l.e(m);
        } finally {
          l.f();
        }
        return !0;
      }
      if (D(e)) {
        var c;
        var p = s(e.properties);
        try {
          for (p.s(); !(c = p.n()).done;) {
            var f = c.value;
            if (!this.isPure(f, t)) {
              return !1;
            }
          }
        } catch (m) {
          p.e(m);
        } finally {
          p.f();
        }
        return !0;
      }
      if (I(e)) {
        return !(e.computed && !this.isPure(e.key, t)) && "get" !== e.kind && "set" !== e.kind;
      }
      if (j(e)) {
        return !(e.computed && !this.isPure(e.key, t)) && this.isPure(e.value, t);
      }
      if (U(e)) {
        return this.isPure(e.argument, t);
      }
      if (B(e)) {
        return V(e.tag, "String.raw") && !this.hasBinding("String", !0) && this.isPure(e.quasi, t);
      }
      if (F(e)) {
        var d;
        var h = s(e.expressions);
        try {
          for (h.s(); !(d = h.n()).done;) {
            var y = d.value;
            if (!this.isPure(y, t)) {
              return !1;
            }
          }
        } catch (m) {
          h.e(m);
        } finally {
          h.f();
        }
        return !0;
      }
      return L(e);
    }
  }, {
    key: "setData",
    value: function (e, t) {
      return this.data[e] = t;
    }
  }, {
    key: "getData",
    value: function (e) {
      var t = this;
      do {
        var n = t.data[e];
        if (null != n) {
          return n;
        }
      } while (t = t.parent);
    }
  }, {
    key: "removeData",
    value: function (e) {
      var t = this;
      do {
        if (null != t.data[e]) {
          t.data[e] = null;
        }
      } while (t = t.parent);
    }
  }, {
    key: "init",
    value: function () {
      if (!this.inited) {
        this.inited = !0;
        this.crawl();
      }
    }
  }, {
    key: "crawl",
    value: function () {
      var e = this.path;
      this.references = Object.create(null);
      this.bindings = Object.create(null);
      this.globals = Object.create(null);
      this.uids = Object.create(null);
      this.data = Object.create(null);
      var t = this.getProgramParent();
      if (!t.crawling) {
        var n = {
          references: [],
          constantViolations: [],
          assignments: []
        };
        if (this.crawling = !0, "Program" !== e.type && G._exploded) {
          var r;
          var i = s(G.enter);
          try {
            for (i.s(); !(r = i.n()).done;) {
              (0, r.value)(e, n);
            }
          } catch (x) {
            i.e(x);
          } finally {
            i.f();
          }
          var a = G[e.type];
          if (a) {
            var o;
            var l = s(a.enter);
            try {
              for (l.s(); !(o = l.n()).done;) {
                (0, o.value)(e, n);
              }
            } catch (x) {
              l.e(x);
            } finally {
              l.f();
            }
          }
        }
        e.traverse(G, n);
        this.crawling = !1;
        var u;
        var c = s(n.assignments);
        try {
          for (c.s(); !(u = c.n()).done;) {
            for (var p = u.value, f = p.getBindingIdentifiers(), d = 0, h = Object.keys(f); d < h.length; d++) {
              var y = h[d];
              if (!p.scope.getBinding(y)) {
                t.addGlobal(f[y]);
              }
            }
            p.scope.registerConstantViolation(p);
          }
        } catch (x) {
          c.e(x);
        } finally {
          c.f();
        }
        var m;
        var v = s(n.references);
        try {
          for (v.s(); !(m = v.n()).done;) {
            var g = m.value;
            var T = g.scope.getBinding(g.node.name);
            if (T) {
              T.reference(g);
            } else {
              t.addGlobal(g.node);
            }
          }
        } catch (x) {
          v.e(x);
        } finally {
          v.f();
        }
        var b;
        var S = s(n.constantViolations);
        try {
          for (S.s(); !(b = S.n()).done;) {
            var E = b.value;
            E.scope.registerConstantViolation(E);
          }
        } catch (x) {
          S.e(x);
        } finally {
          S.f();
        }
      }
    }
  }, {
    key: "push",
    value: function (e) {
      var t = this.path;
      if (!(t.isBlockStatement() || t.isProgram())) {
        t = this.getBlockParent().path;
      }
      if (t.isSwitchStatement()) {
        t = (this.getFunctionParent() || this.getProgramParent()).path;
      }
      if (t.isLoop() || t.isCatchClause() || t.isFunction()) {
        t.ensureBlock();
        t = t.get("body");
      }
      var n = e.unique;
      var i = e.kind || "var";
      var a = null == e._blockHoist ? 2 : e._blockHoist;
      var s = "declaration:".concat(i, ":").concat(a);
      var o = !n && t.getData(s);
      if (!o) {
        var l = J(i, []);
        l._blockHoist = a;
        var u = t.unshiftContainer("body", [l]);
        o = r(u, 1)[0];
        if (!n) {
          t.setData(s, o);
        }
      }
      var c = X(e.id, e.init);
      o.node.declarations.push(c);
      this.registerBinding(i, o.get("declarations").pop());
    }
  }, {
    key: "getProgramParent",
    value: function () {
      var e = this;
      do {
        if (e.path.isProgram()) {
          return e;
        }
      } while (e = e.parent);
      throw new Error("Couldn't find a Program");
    }
  }, {
    key: "getFunctionParent",
    value: function () {
      var e = this;
      do {
        if (e.path.isFunctionParent()) {
          return e;
        }
      } while (e = e.parent);
      return null;
    }
  }, {
    key: "getBlockParent",
    value: function () {
      var e = this;
      do {
        if (e.path.isBlockParent()) {
          return e;
        }
      } while (e = e.parent);
      throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
    }
  }, {
    key: "getAllBindings",
    value: function () {
      var e = Object.create(null);
      var t = this;
      do {
        for (var n = 0, r = Object.keys(t.bindings); n < r.length; n++) {
          var i = r[n];
          if (i in e === !1) {
            e[i] = t.bindings[i];
          }
        }
        t = t.parent;
      } while (t);
      return e;
    }
  }, {
    key: "getAllBindingsOfKind",
    value: function () {
      for (var e = Object.create(null), t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      for (var i = 0, a = n; i < a.length; i++) {
        var s = a[i];
        var o = this;
        do {
          for (var l = 0, u = Object.keys(o.bindings); l < u.length; l++) {
            var c = u[l];
            var p = o.bindings[c];
            if (p.kind === s) {
              e[c] = p;
            }
          }
          o = o.parent;
        } while (o);
      }
      return e;
    }
  }, {
    key: "bindingIdentifierEquals",
    value: function (e, t) {
      return this.getBindingIdentifier(e) === t;
    }
  }, {
    key: "getBinding",
    value: function (e) {
      var t;
      var n = this;
      do {
        var r;
        var i = n.getOwnBinding(e);
        if (i) {
          if (null == (r = t) || !r.isPattern() || "param" === i.kind || "local" === i.kind) {
            return i;
          }
        }
        t = n.path;
      } while (n = n.parent);
    }
  }, {
    key: "getOwnBinding",
    value: function (e) {
      return this.bindings[e];
    }
  }, {
    key: "getBindingIdentifier",
    value: function (e) {
      var t;
      return null == (t = this.getBinding(e)) ? void 0 : t.identifier;
    }
  }, {
    key: "getOwnBindingIdentifier",
    value: function (e) {
      var t = this.bindings[e];
      return null == t ? void 0 : t.identifier;
    }
  }, {
    key: "hasOwnBinding",
    value: function (e) {
      return !!this.getOwnBinding(e);
    }
  }, {
    key: "hasBinding",
    value: function (t, n) {
      return !!t && (!!this.hasOwnBinding(t) || !!this.parentHasBinding(t, n) || !!this.hasUid(t) || !(n || !e.globals.includes(t)) || !(n || !e.contextVariables.includes(t)));
    }
  }, {
    key: "parentHasBinding",
    value: function (e, t) {
      var n;
      return null == (n = this.parent) ? void 0 : n.hasBinding(e, t);
    }
  }, {
    key: "moveBindingTo",
    value: function (e, t) {
      var n = this.getBinding(e);
      if (n) {
        n.scope.removeOwnBinding(e);
        n.scope = t;
        t.bindings[e] = n;
      }
    }
  }, {
    key: "removeOwnBinding",
    value: function (e) {
      delete this.bindings[e];
    }
  }, {
    key: "removeBinding",
    value: function (e) {
      var t;
      if (!(null == (t = this.getBinding(e)))) {
        t.scope.removeOwnBinding(e);
      }
      var n = this;
      do {
        if (n.uids[e]) {
          n.uids[e] = !1;
        }
      } while (n = n.parent);
    }
  }]);
  return e;
}();
exports.default = $;
$.globals = Object.keys(c.builtin);
$.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];