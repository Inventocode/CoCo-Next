!function e(t) {
  "use strict";

  var r;
  var i;
  var o;
  var a;
  var s;
  var c;
  function u(e) {
    var t;
    var n;
    var r = {};
    for (t in e) if (e.hasOwnProperty(t)) {
      n = e[t];
      r[t] = "object" === typeof n && null !== n ? u(n) : n;
    }
    return r;
  }
  function l(e, t) {
    this.parent = e;
    this.key = t;
  }
  function f(e, t, n, r) {
    this.node = e;
    this.path = t;
    this.wrap = n;
    this.ref = r;
  }
  function d() {}
  function h(e) {
    return null != e && "object" === typeof e && "string" === typeof e.type;
  }
  function p(e, t) {
    return (e === r.ObjectExpression || e === r.ObjectPattern) && "properties" === t;
  }
  function _(e, t) {
    return new d().traverse(e, t);
  }
  function A(e, t) {
    var n;
    n = function (e, t) {
      var n;
      var r;
      var i;
      var o;
      for (r = e.length, i = 0; r;) {
        if (t(e[o = i + (n = r >>> 1)])) {
          r = n;
        } else {
          i = o + 1;
          r -= n + 1;
        }
      }
      return i;
    }(t, function (t) {
      return t.range[0] > e.range[0];
    });
    e.extendedRange = [e.range[0], e.range[1]];
    if (n !== t.length) {
      e.extendedRange[1] = t[n].range[0];
    }
    if ((n -= 1) >= 0) {
      e.extendedRange[0] = t[n].range[1];
    }
    return e;
  }
  r = {
    AssignmentExpression: "AssignmentExpression",
    AssignmentPattern: "AssignmentPattern",
    ArrayExpression: "ArrayExpression",
    ArrayPattern: "ArrayPattern",
    ArrowFunctionExpression: "ArrowFunctionExpression",
    AwaitExpression: "AwaitExpression",
    BlockStatement: "BlockStatement",
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    CallExpression: "CallExpression",
    CatchClause: "CatchClause",
    ClassBody: "ClassBody",
    ClassDeclaration: "ClassDeclaration",
    ClassExpression: "ClassExpression",
    ComprehensionBlock: "ComprehensionBlock",
    ComprehensionExpression: "ComprehensionExpression",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DebuggerStatement: "DebuggerStatement",
    DirectiveStatement: "DirectiveStatement",
    DoWhileStatement: "DoWhileStatement",
    EmptyStatement: "EmptyStatement",
    ExportAllDeclaration: "ExportAllDeclaration",
    ExportDefaultDeclaration: "ExportDefaultDeclaration",
    ExportNamedDeclaration: "ExportNamedDeclaration",
    ExportSpecifier: "ExportSpecifier",
    ExpressionStatement: "ExpressionStatement",
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    ForOfStatement: "ForOfStatement",
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    GeneratorExpression: "GeneratorExpression",
    Identifier: "Identifier",
    IfStatement: "IfStatement",
    ImportExpression: "ImportExpression",
    ImportDeclaration: "ImportDeclaration",
    ImportDefaultSpecifier: "ImportDefaultSpecifier",
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
    ImportSpecifier: "ImportSpecifier",
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    LogicalExpression: "LogicalExpression",
    MemberExpression: "MemberExpression",
    MetaProperty: "MetaProperty",
    MethodDefinition: "MethodDefinition",
    ModuleSpecifier: "ModuleSpecifier",
    NewExpression: "NewExpression",
    ObjectExpression: "ObjectExpression",
    ObjectPattern: "ObjectPattern",
    Program: "Program",
    Property: "Property",
    RestElement: "RestElement",
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SpreadElement: "SpreadElement",
    Super: "Super",
    SwitchStatement: "SwitchStatement",
    SwitchCase: "SwitchCase",
    TaggedTemplateExpression: "TaggedTemplateExpression",
    TemplateElement: "TemplateElement",
    TemplateLiteral: "TemplateLiteral",
    ThisExpression: "ThisExpression",
    ThrowStatement: "ThrowStatement",
    TryStatement: "TryStatement",
    UnaryExpression: "UnaryExpression",
    UpdateExpression: "UpdateExpression",
    VariableDeclaration: "VariableDeclaration",
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement",
    YieldExpression: "YieldExpression"
  };
  o = {
    AssignmentExpression: ["left", "right"],
    AssignmentPattern: ["left", "right"],
    ArrayExpression: ["elements"],
    ArrayPattern: ["elements"],
    ArrowFunctionExpression: ["params", "body"],
    AwaitExpression: ["argument"],
    BlockStatement: ["body"],
    BinaryExpression: ["left", "right"],
    BreakStatement: ["label"],
    CallExpression: ["callee", "arguments"],
    CatchClause: ["param", "body"],
    ClassBody: ["body"],
    ClassDeclaration: ["id", "superClass", "body"],
    ClassExpression: ["id", "superClass", "body"],
    ComprehensionBlock: ["left", "right"],
    ComprehensionExpression: ["blocks", "filter", "body"],
    ConditionalExpression: ["test", "consequent", "alternate"],
    ContinueStatement: ["label"],
    DebuggerStatement: [],
    DirectiveStatement: [],
    DoWhileStatement: ["body", "test"],
    EmptyStatement: [],
    ExportAllDeclaration: ["source"],
    ExportDefaultDeclaration: ["declaration"],
    ExportNamedDeclaration: ["declaration", "specifiers", "source"],
    ExportSpecifier: ["exported", "local"],
    ExpressionStatement: ["expression"],
    ForStatement: ["init", "test", "update", "body"],
    ForInStatement: ["left", "right", "body"],
    ForOfStatement: ["left", "right", "body"],
    FunctionDeclaration: ["id", "params", "body"],
    FunctionExpression: ["id", "params", "body"],
    GeneratorExpression: ["blocks", "filter", "body"],
    Identifier: [],
    IfStatement: ["test", "consequent", "alternate"],
    ImportExpression: ["source"],
    ImportDeclaration: ["specifiers", "source"],
    ImportDefaultSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportSpecifier: ["imported", "local"],
    Literal: [],
    LabeledStatement: ["label", "body"],
    LogicalExpression: ["left", "right"],
    MemberExpression: ["object", "property"],
    MetaProperty: ["meta", "property"],
    MethodDefinition: ["key", "value"],
    ModuleSpecifier: [],
    NewExpression: ["callee", "arguments"],
    ObjectExpression: ["properties"],
    ObjectPattern: ["properties"],
    Program: ["body"],
    Property: ["key", "value"],
    RestElement: ["argument"],
    ReturnStatement: ["argument"],
    SequenceExpression: ["expressions"],
    SpreadElement: ["argument"],
    Super: [],
    SwitchStatement: ["discriminant", "cases"],
    SwitchCase: ["test", "consequent"],
    TaggedTemplateExpression: ["tag", "quasi"],
    TemplateElement: [],
    TemplateLiteral: ["quasis", "expressions"],
    ThisExpression: [],
    ThrowStatement: ["argument"],
    TryStatement: ["block", "handler", "finalizer"],
    UnaryExpression: ["argument"],
    UpdateExpression: ["argument"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id", "init"],
    WhileStatement: ["test", "body"],
    WithStatement: ["object", "body"],
    YieldExpression: ["argument"]
  };
  i = {
    Break: a = {},
    Skip: s = {},
    Remove: c = {}
  };
  l.prototype.replace = function (e) {
    this.parent[this.key] = e;
  };
  l.prototype.remove = function () {
    return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
  };
  d.prototype.path = function () {
    var e;
    var t;
    var n;
    var r;
    var i;
    function o(e, t) {
      if (Array.isArray(t)) {
        for (n = 0, r = t.length; n < r; ++n) {
          e.push(t[n]);
        }
      } else {
        e.push(t);
      }
    }
    if (!this.__current.path) {
      return null;
    }
    for (i = [], e = 2, t = this.__leavelist.length; e < t; ++e) {
      o(i, this.__leavelist[e].path);
    }
    o(i, this.__current.path);
    return i;
  };
  d.prototype.type = function () {
    return this.current().type || this.__current.wrap;
  };
  d.prototype.parents = function () {
    var e;
    var t;
    var n;
    for (n = [], e = 1, t = this.__leavelist.length; e < t; ++e) {
      n.push(this.__leavelist[e].node);
    }
    return n;
  };
  d.prototype.current = function () {
    return this.__current.node;
  };
  d.prototype.__execute = function (e, t) {
    var n;
    var r;
    r = void 0;
    n = this.__current;
    this.__current = t;
    this.__state = null;
    if (e) {
      r = e.call(this, t.node, this.__leavelist[this.__leavelist.length - 1].node);
    }
    this.__current = n;
    return r;
  };
  d.prototype.notify = function (e) {
    this.__state = e;
  };
  d.prototype.skip = function () {
    this.notify(s);
  };
  d.prototype.break = function () {
    this.notify(a);
  };
  d.prototype.remove = function () {
    this.notify(c);
  };
  d.prototype.__initialize = function (e, t) {
    this.visitor = t;
    this.root = e;
    this.__worklist = [];
    this.__leavelist = [];
    this.__current = null;
    this.__state = null;
    this.__fallback = null;
    if ("iteration" === t.fallback) {
      this.__fallback = Object.keys;
    } else {
      if ("function" === typeof t.fallback) {
        this.__fallback = t.fallback;
      }
    }
    this.__keys = o;
    if (t.keys) {
      this.__keys = Object.assign(Object.create(this.__keys), t.keys);
    }
  };
  d.prototype.traverse = function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var c;
    var u;
    var l;
    var d;
    var _;
    var A;
    var g;
    var v;
    for (this.__initialize(e, t), v = {}, n = this.__worklist, r = this.__leavelist, n.push(new f(e, null, null, null)), r.push(new f(null, null, null, null)); n.length;) {
      if ((i = n.pop()) !== v) {
        if (i.node) {
          u = this.__execute(t.enter, i);
          if (this.__state === a || u === a) {
            return;
          }
          n.push(v);
          r.push(i);
          if (this.__state === s || u === s) {
            continue;
          }
          c = (o = i.node).type || i.wrap;
          if (!(A = this.__keys[c])) {
            if (!this.__fallback) {
              throw new Error("Unknown node type " + c + ".");
            }
            A = this.__fallback(o);
          }
          for (d = A.length; (d -= 1) >= 0;) {
            if (g = o[l = A[d]]) {
              if (Array.isArray(g)) {
                for (_ = g.length; (_ -= 1) >= 0;) {
                  if (g[_]) {
                    if (p(c, A[d])) {
                      i = new f(g[_], [l, _], "Property", null);
                    } else {
                      if (!h(g[_])) {
                        continue;
                      }
                      i = new f(g[_], [l, _], null, null);
                    }
                    n.push(i);
                  }
                }
              } else if (h(g)) {
                n.push(new f(g, l, null, null));
              }
            }
          }
        }
      } else if (i = r.pop(), u = this.__execute(t.leave, i), this.__state === a || u === a) {
        return;
      }
    }
  };
  d.prototype.replace = function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var u;
    var d;
    var _;
    var A;
    var g;
    var v;
    var m;
    var y;
    var b;
    function w(e) {
      var t;
      var r;
      var i;
      var o;
      if (e.ref.remove()) {
        for (r = e.ref.key, o = e.ref.parent, t = n.length; t--;) {
          if ((i = n[t]).ref && i.ref.parent === o) {
            if (i.ref.key < r) {
              break;
            }
            --i.ref.key;
          }
        }
      }
    }
    for (this.__initialize(e, t), m = {}, n = this.__worklist, r = this.__leavelist, d = new f(e, null, null, new l(y = {
      root: e
    }, "root")), n.push(d), r.push(d); n.length;) {
      if ((d = n.pop()) !== m) {
        if (void 0 !== (u = this.__execute(t.enter, d)) && u !== a && u !== s && u !== c) {
          d.ref.replace(u);
          d.node = u;
        }
        if (!(this.__state !== c && u !== c)) {
          w(d);
          d.node = null;
        }
        if (this.__state === a || u === a) {
          return y.root;
        }
        if ((i = d.node) && (n.push(m), r.push(d), this.__state !== s && u !== s)) {
          o = i.type || d.wrap;
          if (!(g = this.__keys[o])) {
            if (!this.__fallback) {
              throw new Error("Unknown node type " + o + ".");
            }
            g = this.__fallback(i);
          }
          for (_ = g.length; (_ -= 1) >= 0;) {
            if (v = i[b = g[_]]) {
              if (Array.isArray(v)) {
                for (A = v.length; (A -= 1) >= 0;) {
                  if (v[A]) {
                    if (p(o, g[_])) {
                      d = new f(v[A], [b, A], "Property", new l(v, A));
                    } else {
                      if (!h(v[A])) {
                        continue;
                      }
                      d = new f(v[A], [b, A], null, new l(v, A));
                    }
                    n.push(d);
                  }
                }
              } else if (h(v)) {
                n.push(new f(v, b, null, new l(i, b)));
              }
            }
          }
        }
      } else if (d = r.pop(), void 0 !== (u = this.__execute(t.leave, d)) && u !== a && u !== s && u !== c && d.ref.replace(u), this.__state !== c && u !== c || w(d), this.__state === a || u === a) {
        return y.root;
      }
    }
    return y.root;
  };
  t.version = require("./2194").version;
  t.Syntax = r;
  t.traverse = _;
  t.replace = function (e, t) {
    return new d().replace(e, t);
  };
  t.attachComments = function (e, t, n) {
    var r;
    var o;
    var a;
    var s;
    var c = [];
    if (!e.range) {
      throw new Error("attachComments needs range information");
    }
    if (!n.length) {
      if (t.length) {
        for (a = 0, o = t.length; a < o; a += 1) {
          (r = u(t[a])).extendedRange = [0, e.range[0]];
          c.push(r);
        }
        e.leadingComments = c;
      }
      return e;
    }
    for (a = 0, o = t.length; a < o; a += 1) {
      c.push(A(u(t[a]), n));
    }
    s = 0;
    _(e, {
      enter: function (e) {
        for (var t; s < c.length && !((t = c[s]).extendedRange[1] > e.range[0]);) {
          if (t.extendedRange[1] === e.range[0]) {
            if (!e.leadingComments) {
              e.leadingComments = [];
            }
            e.leadingComments.push(t);
            c.splice(s, 1);
          } else {
            s += 1;
          }
        }
        return s === c.length ? i.Break : c[s].extendedRange[0] > e.range[1] ? i.Skip : void 0;
      }
    });
    s = 0;
    _(e, {
      leave: function (e) {
        for (var t; s < c.length && (t = c[s], !(e.range[1] < t.extendedRange[0]));) {
          if (e.range[1] === t.extendedRange[0]) {
            if (!e.trailingComments) {
              e.trailingComments = [];
            }
            e.trailingComments.push(t);
            c.splice(s, 1);
          } else {
            s += 1;
          }
        }
        return s === c.length ? i.Break : c[s].extendedRange[0] > e.range[1] ? i.Skip : void 0;
      }
    });
    return e;
  };
  t.VisitorKeys = o;
  t.VisitorOption = i;
  t.Controller = d;
  t.cloneEnvironment = function () {
    return e({});
  };
  return t;
}(exports);