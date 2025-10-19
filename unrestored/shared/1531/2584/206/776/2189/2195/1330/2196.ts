/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2196
 */

!function e(t) {
  "use strict";

  var n;
  var r;
  var i;
  var o;
  var a;
  var s;
  function c(e) {
    var t;
    var n;
    var r = {};
    for (t in e) if (e.hasOwnProperty(t)) {
      n = e[t];
      r[t] = "object" === typeof n && null !== n ? c(n) : n;
    }
    return r;
  }
  function u(e, t) {
    this.parent = e;
    this.key = t;
  }
  function l(e, t, n, r) {
    this.node = e;
    this.path = t;
    this.wrap = n;
    this.ref = r;
  }
  function f() {}
  function d(e) {
    return null != e && "object" === typeof e && "string" === typeof e.type;
  }
  function h(e, t) {
    return (e === n.ObjectExpression || e === n.ObjectPattern) && "properties" === t;
  }
  function p(e, t) {
    for (var n = e.length - 1; n >= 0; --n) {
      if (e[n].node === t) {
        return true;
      }
    }
    return false;
  }
  function _(e, t) {
    return new f().traverse(e, t);
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
  n = {
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
    ChainExpression: "ChainExpression",
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
  i = {
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
    ChainExpression: ["expression"],
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
  r = {
    Break: o = {},
    Skip: a = {},
    Remove: s = {}
  };
  u.prototype.replace = function (e) {
    this.parent[this.key] = e;
  };
  u.prototype.remove = function () {
    return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), true) : (this.replace(null), false);
  };
  f.prototype.path = function () {
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
  f.prototype.type = function () {
    return this.current().type || this.__current.wrap;
  };
  f.prototype.parents = function () {
    var e;
    var t;
    var n;
    for (n = [], e = 1, t = this.__leavelist.length; e < t; ++e) {
      n.push(this.__leavelist[e].node);
    }
    return n;
  };
  f.prototype.current = function () {
    return this.__current.node;
  };
  f.prototype.__execute = function (e, t) {
    var n;
    var r;
    r = undefined;
    n = this.__current;
    this.__current = t;
    this.__state = null;
    if (e) {
      r = e.call(this, t.node, this.__leavelist[this.__leavelist.length - 1].node);
    }
    this.__current = n;
    return r;
  };
  f.prototype.notify = function (e) {
    this.__state = e;
  };
  f.prototype.skip = function () {
    this.notify(a);
  };
  f.prototype.break = function () {
    this.notify(o);
  };
  f.prototype.remove = function () {
    this.notify(s);
  };
  f.prototype.__initialize = function (e, t) {
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
    this.__keys = i;
    if (t.keys) {
      this.__keys = Object.assign(Object.create(this.__keys), t.keys);
    }
  };
  f.prototype.traverse = function (e, t) {
    var n;
    var r;
    var i;
    var s;
    var c;
    var u;
    var f;
    var _;
    var A;
    var g;
    var v;
    var m;
    for (this.__initialize(e, t), m = {}, n = this.__worklist, r = this.__leavelist, n.push(new l(e, null, null, null)), r.push(new l(null, null, null, null)); n.length;) {
      if ((i = n.pop()) !== m) {
        if (i.node) {
          u = this.__execute(t.enter, i);
          if (this.__state === o || u === o) {
            return;
          }
          n.push(m);
          r.push(i);
          if (this.__state === a || u === a) {
            continue;
          }
          c = (s = i.node).type || i.wrap;
          if (!(g = this.__keys[c])) {
            if (!this.__fallback) {
              throw new Error("Unknown node type " + c + ".");
            }
            g = this.__fallback(s);
          }
          for (_ = g.length; (_ -= 1) >= 0;) {
            if (v = s[f = g[_]]) {
              if (Array.isArray(v)) {
                for (A = v.length; (A -= 1) >= 0;) {
                  if (v[A] && !p(r, v[A])) {
                    if (h(c, g[_])) {
                      i = new l(v[A], [f, A], "Property", null);
                    } else {
                      if (!d(v[A])) {
                        continue;
                      }
                      i = new l(v[A], [f, A], null, null);
                    }
                    n.push(i);
                  }
                }
              } else if (d(v)) {
                if (p(r, v)) {
                  continue;
                }
                n.push(new l(v, f, null, null));
              }
            }
          }
        }
      } else if (i = r.pop(), u = this.__execute(t.leave, i), this.__state === o || u === o) {
        return;
      }
    }
  };
  f.prototype.replace = function (e, t) {
    var n;
    var r;
    var i;
    var c;
    var f;
    var p;
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
    for (this.__initialize(e, t), m = {}, n = this.__worklist, r = this.__leavelist, p = new l(e, null, null, new u(y = {
      root: e
    }, "root")), n.push(p), r.push(p); n.length;) {
      if ((p = n.pop()) !== m) {
        if (undefined !== (f = this.__execute(t.enter, p)) && f !== o && f !== a && f !== s) {
          p.ref.replace(f);
          p.node = f;
        }
        if (!(this.__state !== s && f !== s)) {
          w(p);
          p.node = null;
        }
        if (this.__state === o || f === o) {
          return y.root;
        }
        if ((i = p.node) && (n.push(m), r.push(p), this.__state !== a && f !== a)) {
          c = i.type || p.wrap;
          if (!(g = this.__keys[c])) {
            if (!this.__fallback) {
              throw new Error("Unknown node type " + c + ".");
            }
            g = this.__fallback(i);
          }
          for (_ = g.length; (_ -= 1) >= 0;) {
            if (v = i[b = g[_]]) {
              if (Array.isArray(v)) {
                for (A = v.length; (A -= 1) >= 0;) {
                  if (v[A]) {
                    if (h(c, g[_])) {
                      p = new l(v[A], [b, A], "Property", new u(v, A));
                    } else {
                      if (!d(v[A])) {
                        continue;
                      }
                      p = new l(v[A], [b, A], null, new u(v, A));
                    }
                    n.push(p);
                  }
                }
              } else if (d(v)) {
                n.push(new l(v, b, null, new u(i, b)));
              }
            }
          }
        }
      } else if (p = r.pop(), undefined !== (f = this.__execute(t.leave, p)) && f !== o && f !== a && f !== s && p.ref.replace(f), this.__state !== s && f !== s || w(p), this.__state === o || f === o) {
        return y.root;
      }
    }
    return y.root;
  };
  t.Syntax = n;
  t.traverse = _;
  t.replace = function (e, t) {
    return new f().replace(e, t);
  };
  t.attachComments = function (e, t, n) {
    var i;
    var o;
    var a;
    var s;
    var u = [];
    if (!e.range) {
      throw new Error("attachComments needs range information");
    }
    if (!n.length) {
      if (t.length) {
        for (a = 0, o = t.length; a < o; a += 1) {
          (i = c(t[a])).extendedRange = [0, e.range[0]];
          u.push(i);
        }
        e.leadingComments = u;
      }
      return e;
    }
    for (a = 0, o = t.length; a < o; a += 1) {
      u.push(A(c(t[a]), n));
    }
    s = 0;
    _(e, {
      enter: function (e) {
        for (var t; s < u.length && !((t = u[s]).extendedRange[1] > e.range[0]);) {
          if (t.extendedRange[1] === e.range[0]) {
            if (!e.leadingComments) {
              e.leadingComments = [];
            }
            e.leadingComments.push(t);
            u.splice(s, 1);
          } else {
            s += 1;
          }
        }
        return s === u.length ? r.Break : u[s].extendedRange[0] > e.range[1] ? r.Skip : undefined;
      }
    });
    s = 0;
    _(e, {
      leave: function (e) {
        for (var t; s < u.length && (t = u[s], !(e.range[1] < t.extendedRange[0]));) {
          if (e.range[1] === t.extendedRange[0]) {
            if (!e.trailingComments) {
              e.trailingComments = [];
            }
            e.trailingComments.push(t);
            u.splice(s, 1);
          } else {
            s += 1;
          }
        }
        return s === u.length ? r.Break : u[s].extendedRange[0] > e.range[1] ? r.Skip : undefined;
      }
    });
    return e;
  };
  t.VisitorKeys = i;
  t.VisitorOption = r;
  t.Controller = f;
  t.cloneEnvironment = function () {
    return e({});
  };
  return t;
}(exports);