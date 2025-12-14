/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2320
 */

module.exports = function () {
  "use strict"

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(t)
  }
  function n(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e
      }
    }(e) || function (e, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = []
        var r = true
        var i = false
        var o = undefined
        try {
          for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
            ;
          }
        } catch (e) {
          i = true
          o = e
        } finally {
          try {
            if (!(r || null == s.return)) {
              s.return()
            }
          } finally {
            if (i) {
              throw o
            }
          }
        }
        return n
      }
    }(e, t) || i(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }
  function r(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return o(e)
      }
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        return Array.from(e)
      }
    }(e) || i(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }
  function i(e, t) {
    if (e) {
      if ("string" == typeof e) {
        return o(e, t)
      }
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ("Object" === n && e.constructor) {
        n = e.constructor.name
      }
      return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : undefined
    }
  }
  function o(e, t) {
    if (null == t || t > e.length) {
      t = e.length
    }
    for (var n = 0, r = new Array(t); n < t; n++) {
      r[n] = e[n]
    }
    return r
  }
  function a(e, t) {
    var n
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (n = i(e)) || t && e && "number" == typeof e.length) {
        if (n) {
          e = n
        }
        var r = 0
        var o = function () {}
        return {
          s: o,
          n: function () {
            return r >= e.length ? {
              done: true
            } : {
              done: false,
              value: e[r++]
            }
          },
          e: function (e) {
            throw e
          },
          f: o
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a
    var s = true
    var c = false
    return {
      s: function () {
        n = e[Symbol.iterator]()
      },
      n: function () {
        var e = n.next()
        s = e.done
        return e
      },
      e: function (e) {
        c = true
        a = e
      },
      f: function () {
        try {
          if (!(s || null == n.return)) {
            n.return()
          }
        } finally {
          if (c) {
            throw a
          }
        }
      }
    }
  }
  function s(e, t) {
    e(t = {
      exports: {}
    }, t.exports)
    return t.exports
  }
  if ("undefined" != typeof globalThis) {
    globalThis
  } else {
    if ("undefined" != typeof window) {
      window
    } else {
      if (!("undefined" != typeof global)) {
        if ("undefined" != typeof self) {
          self
        }
      }
    }
  }
  var c = s(function (e, t) {
    !function e(t) {
      var n
      var r
      var i
      var o
      var a
      var s
      function c(e) {
        var t
        var n
        var r = {}
        for (t in e) if (e.hasOwnProperty(t)) {
          n = e[t]
          r[t] = "object" == typeof n && null !== n ? c(n) : n
        }
        return r
      }
      function u(e, t) {
        this.parent = e
        this.key = t
      }
      function l(e, t, n, r) {
        this.node = e
        this.path = t
        this.wrap = n
        this.ref = r
      }
      function f() {}
      function d(e) {
        return null != e && "object" == typeof e && "string" == typeof e.type
      }
      function h(e, t) {
        return (e === n.ObjectExpression || e === n.ObjectPattern) && "properties" === t
      }
      function p(e, t) {
        for (var n = e.length - 1; n >= 0; --n) {
          if (e[n].node === t) {
            return true
          }
        }
        return false
      }
      function _(e, t) {
        return new f().traverse(e, t)
      }
      function A(e, t) {
        var n
        n = function (e, t) {
          var n
          var r
          var i
          var o
          for (r = e.length, i = 0; r;) {
            if (t(e[o = i + (n = r >>> 1)])) {
              r = n
            } else {
              i = o + 1
              r -= n + 1
            }
          }
          return i
        }(t, function (t) {
          return t.range[0] > e.range[0]
        })
        e.extendedRange = [e.range[0], e.range[1]]
        if (n !== t.length) {
          e.extendedRange[1] = t[n].range[0]
        }
        if ((n -= 1) >= 0) {
          e.extendedRange[0] = t[n].range[1]
        }
        return e
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
      }
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
      }
      r = {
        Break: o = {},
        Skip: a = {},
        Remove: s = {}
      }
      u.prototype.replace = function (e) {
        this.parent[this.key] = e
      }
      u.prototype.remove = function () {
        return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), true) : (this.replace(null), false)
      }
      f.prototype.path = function () {
        var e
        var /* [auto-meaningful-name] */this$__leavelist$length
        var n
        var /* [auto-meaningful-name] */t$length
        var i
        function o(e, t) {
          if (Array.isArray(t)) {
            for (n = 0, t$length = t.length; n < t$length; ++n) {
              e.push(t[n])
            }
          } else {
            e.push(t)
          }
        }
        if (!this.__current.path) {
          return null
        }
        for (i = [], e = 2, this$__leavelist$length = this.__leavelist.length; e < this$__leavelist$length; ++e) {
          o(i, this.__leavelist[e].path)
        }
        o(i, this.__current.path)
        return i
      }
      f.prototype.type = function () {
        return this.current().type || this.__current.wrap
      }
      f.prototype.parents = function () {
        var e
        var /* [auto-meaningful-name] */this$__leavelist$length
        var n
        for (n = [], e = 1, this$__leavelist$length = this.__leavelist.length; e < this$__leavelist$length; ++e) {
          n.push(this.__leavelist[e].node)
        }
        return n
      }
      f.prototype.current = function () {
        return this.__current.node
      }
      f.prototype.__execute = function (e, t) {
        var /* [auto-meaningful-name] */this$__current
        var r
        r = undefined
        this$__current = this.__current
        this.__current = t
        this.__state = null
        if (e) {
          r = e.call(this, t.node, this.__leavelist[this.__leavelist.length - 1].node)
        }
        this.__current = this$__current
        return r
      }
      f.prototype.notify = function (e) {
        this.__state = e
      }
      f.prototype.skip = function () {
        this.notify(a)
      }
      f.prototype.break = function () {
        this.notify(o)
      }
      f.prototype.remove = function () {
        this.notify(s)
      }
      f.prototype.__initialize = function (e, t) {
        this.visitor = t
        this.root = e
        this.__worklist = []
        this.__leavelist = []
        this.__current = null
        this.__state = null
        this.__fallback = null
        if ("iteration" === t.fallback) {
          this.__fallback = Object.keys
        } else {
          if ("function" == typeof t.fallback) {
            this.__fallback = t.fallback
          }
        }
        this.__keys = i
        if (t.keys) {
          this.__keys = Object.assign(Object.create(this.__keys), t.keys)
        }
      }
      f.prototype.traverse = function (e, t) {
        var /* [auto-meaningful-name] */this$__worklist
        var /* [auto-meaningful-name] */this$__leavelist
        var i
        var /* [auto-meaningful-name] */i$node
        var c
        var u
        var f
        var _
        var A
        var g
        var v
        var m
        for (this.__initialize(e, t), m = {}, this$__worklist = this.__worklist, this$__leavelist = this.__leavelist, this$__worklist.push(new l(e, null, null, null)), this$__leavelist.push(new l(null, null, null, null)); this$__worklist.length;) {
          if ((i = this$__worklist.pop()) !== m) {
            if (i.node) {
              u = this.__execute(t.enter, i)
              if (this.__state === o || u === o) {
                return
              }
              this$__worklist.push(m)
              this$__leavelist.push(i)
              if (this.__state === a || u === a) {
                continue
              }
              c = (i$node = i.node).type || i.wrap
              if (!(g = this.__keys[c])) {
                if (!this.__fallback) {
                  throw new Error("Unknown node type " + c + ".")
                }
                g = this.__fallback(i$node)
              }
              for (_ = g.length; (_ -= 1) >= 0;) {
                if (v = i$node[f = g[_]]) {
                  if (Array.isArray(v)) {
                    for (A = v.length; (A -= 1) >= 0;) {
                      if (v[A] && !p(this$__leavelist, v[A])) {
                        if (h(c, g[_])) {
                          i = new l(v[A], [f, A], "Property", null)
                        } else {
                          if (!d(v[A])) {
                            continue
                          }
                          i = new l(v[A], [f, A], null, null)
                        }
                        this$__worklist.push(i)
                      }
                    }
                  } else if (d(v)) {
                    if (p(this$__leavelist, v)) {
                      continue
                    }
                    this$__worklist.push(new l(v, f, null, null))
                  }
                }
              }
            }
          } else if (i = this$__leavelist.pop(), u = this.__execute(t.leave, i), this.__state === o || u === o) {
            return
          }
        }
      }
      f.prototype.replace = function (e, t) {
        var /* [auto-meaningful-name] */this$__worklist
        var /* [auto-meaningful-name] */this$__leavelist
        var /* [auto-meaningful-name] */p$node
        var c
        var f
        var p
        var _
        var A
        var g
        var v
        var m
        var y
        var b
        function w(e) {
          var t
          var /* [auto-meaningful-name] */e$ref$key
          var i
          var /* [auto-meaningful-name] */e$ref$parent
          if (e.ref.remove()) {
            for (e$ref$key = e.ref.key, e$ref$parent = e.ref.parent, t = this$__worklist.length; t--;) {
              if ((i = this$__worklist[t]).ref && i.ref.parent === e$ref$parent) {
                if (i.ref.key < e$ref$key) {
                  break
                }
                --i.ref.key
              }
            }
          }
        }
        for (this.__initialize(e, t), m = {}, this$__worklist = this.__worklist, this$__leavelist = this.__leavelist, p = new l(e, null, null, new u(y = {
          root: e
        }, "root")), this$__worklist.push(p), this$__leavelist.push(p); this$__worklist.length;) {
          if ((p = this$__worklist.pop()) !== m) {
            if (undefined !== (f = this.__execute(t.enter, p)) && f !== o && f !== a && f !== s) {
              p.ref.replace(f)
              p.node = f
            }
            if (!(this.__state !== s && f !== s)) {
              w(p)
              p.node = null
            }
            if (this.__state === o || f === o) {
              return y.root
            }
            if ((p$node = p.node) && (this$__worklist.push(m), this$__leavelist.push(p), this.__state !== a && f !== a)) {
              c = p$node.type || p.wrap
              if (!(g = this.__keys[c])) {
                if (!this.__fallback) {
                  throw new Error("Unknown node type " + c + ".")
                }
                g = this.__fallback(p$node)
              }
              for (_ = g.length; (_ -= 1) >= 0;) {
                if (v = p$node[b = g[_]]) {
                  if (Array.isArray(v)) {
                    for (A = v.length; (A -= 1) >= 0;) {
                      if (v[A]) {
                        if (h(c, g[_])) {
                          p = new l(v[A], [b, A], "Property", new u(v, A))
                        } else {
                          if (!d(v[A])) {
                            continue
                          }
                          p = new l(v[A], [b, A], null, new u(v, A))
                        }
                        this$__worklist.push(p)
                      }
                    }
                  } else if (d(v)) {
                    this$__worklist.push(new l(v, b, null, new u(p$node, b)))
                  }
                }
              }
            }
          } else if (p = this$__leavelist.pop(), undefined !== (f = this.__execute(t.leave, p)) && f !== o && f !== a && f !== s && p.ref.replace(f), this.__state !== s && f !== s || w(p), this.__state === o || f === o) {
            return y.root
          }
        }
        return y.root
      }
      t.Syntax = n
      t.traverse = _
      t.replace = function (e, t) {
        return new f().replace(e, t)
      }
      t.attachComments = function (e, t, n) {
        var i
        var o
        var a
        var s
        var u = []
        if (!e.range) {
          throw new Error("attachComments needs range information")
        }
        if (!n.length) {
          if (t.length) {
            for (a = 0, o = t.length; a < o; a += 1) {
              (i = c(t[a])).extendedRange = [0, e.range[0]]
              u.push(i)
            }
            e.leadingComments = u
          }
          return e
        }
        for (a = 0, o = t.length; a < o; a += 1) {
          u.push(A(c(t[a]), n))
        }
        s = 0
        _(e, {
          enter: function (e) {
            for (var t; s < u.length && !((t = u[s]).extendedRange[1] > e.range[0]);) {
              if (t.extendedRange[1] === e.range[0]) {
                if (!e.leadingComments) {
                  e.leadingComments = []
                }
                e.leadingComments.push(t)
                u.splice(s, 1)
              } else {
                s += 1
              }
            }
            return s === u.length ? r.Break : u[s].extendedRange[0] > e.range[1] ? r.Skip : undefined
          }
        })
        s = 0
        _(e, {
          leave: function (e) {
            for (var t; s < u.length && (t = u[s], !(e.range[1] < t.extendedRange[0]));) {
              if (e.range[1] === t.extendedRange[0]) {
                if (!e.trailingComments) {
                  e.trailingComments = []
                }
                e.trailingComments.push(t)
                u.splice(s, 1)
              } else {
                s += 1
              }
            }
            return s === u.length ? r.Break : u[s].extendedRange[0] > e.range[1] ? r.Skip : undefined
          }
        })
        return e
      }
      t.VisitorKeys = i
      t.VisitorOption = r
      t.Controller = f
      t.cloneEnvironment = function () {
        return e({})
      }
      return t
    }(t)
  })
  var u = s(function (e) {
    if (e.exports) {
      e.exports = function () {
        function e(t, n, r, i) {
          this.message = t
          this.expected = n
          this.found = r
          this.location = i
          this.name = "SyntaxError"
          if ("function" == typeof Error.captureStackTrace) {
            Error.captureStackTrace(this, e)
          }
        }
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          n.prototype = t.prototype
          e.prototype = new n()
        })(e, Error)
        e.buildMessage = function (e, t) {
          var n = {
            literal: function (e) {
              return "\"" + i(e.text) + "\""
            },
            class: function (e) {
              var t
              var n = ""
              for (t = 0; t < e.parts.length; t++) {
                n += e.parts[t] instanceof Array ? o(e.parts[t][0]) + "-" + o(e.parts[t][1]) : o(e.parts[t])
              }
              return "[" + (e.inverted ? "^" : "") + n + "]"
            },
            any: function (e) {
              return "any character"
            },
            end: function (e) {
              return "end of input"
            },
            other: function (e) {
              return e.description
            }
          }
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase()
          }
          function i(e) {
            return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
              return "\\x0" + r(e)
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
              return "\\x" + r(e)
            })
          }
          function o(e) {
            return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
              return "\\x0" + r(e)
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
              return "\\x" + r(e)
            })
          }
          return "Expected " + function (e) {
            var t
            var r
            var i
            var o = new Array(e.length)
            for (t = 0; t < e.length; t++) {
              o[t] = (i = e[t], n[i.type](i))
            }
            o.sort()
            if (o.length > 0) {
              for (t = 1, r = 1; t < o.length; t++) {
                if (o[t - 1] !== o[t]) {
                  o[r] = o[t]
                  r++
                }
              }
              o.length = r
            }
            switch (o.length) {
              case 1:
                return o[0]
              case 2:
                return o[0] + " or " + o[1]
              default:
                return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
            }
          }(e) + " but " + function (e) {
            return e ? "\"" + i(e) + "\"" : "end of input"
          }(t) + " found."
        }
        return {
          SyntaxError: e,
          parse: function (t, n) {
            n = undefined !== n ? n : {}
            var r
            var i
            var o
            var a
            var s = {}
            var c = {
              start: ye
            }
            var u = ye
            var l = _e(" ", false)
            var f = /^[^ [\],():#!=><~+.]/
            var d = Ae([" ", "[", "]", ",", "(", ")", ":", "#", "!", "=", ">", "<", "~", "+", "."], true, false)
            var h = _e(">", false)
            var p = _e("~", false)
            var _ = _e("+", false)
            var A = _e(",", false)
            var g = _e("!", false)
            var v = _e("*", false)
            var m = _e("#", false)
            var y = _e("[", false)
            var b = _e("]", false)
            var w = /^[><!]/
            var E = Ae([">", "<", "!"], false, false)
            var x = _e("=", false)
            var C = function (e) {
              return (e || "") + "="
            }
            var O = /^[><]/
            var k = Ae([">", "<"], false, false)
            var S = _e(".", false)
            var T = function (e, t, n) {
              return {
                type: "attribute",
                name: e,
                operator: t,
                value: n
              }
            }
            var B = _e("\"", false)
            var D = /^[^\\"]/
            var I = Ae(["\\", "\""], true, false)
            var R = _e("\\", false)
            var F = {
              type: "any"
            }
            var P = function (e, t) {
              return e + t
            }
            var N = function (e) {
              return {
                type: "literal",
                value: (t = e.join(""), t.replace(/\\(.)/g, function (e, t) {
                  switch (t) {
                    case "b":
                      return "\b"
                    case "f":
                      return "\f"
                    case "n":
                      return "\n"
                    case "r":
                      return "\r"
                    case "t":
                      return "\t"
                    case "v":
                      return "\u000b"
                    default:
                      return t
                  }
                }))
              }
              var t
            }
            var M = _e("'", false)
            var L = /^[^\\']/
            var j = Ae(["\\", "'"], true, false)
            var U = /^[0-9]/
            var H = Ae([["0", "9"]], false, false)
            var V = _e("type(", false)
            var G = /^[^ )]/
            var z = Ae([" ", ")"], true, false)
            var Q = _e(")", false)
            var W = /^[imsu]/
            var K = Ae(["i", "m", "s", "u"], false, false)
            var X = _e("/", false)
            var Y = /^[^\/]/
            var q = Ae(["/"], true, false)
            var $ = _e(":not(", false)
            var J = _e(":matches(", false)
            var Z = _e(":has(", false)
            var ee = _e(":first-child", false)
            var te = _e(":last-child", false)
            var ne = _e(":nth-child(", false)
            var re = _e(":nth-last-child(", false)
            var ie = _e(":", false)
            var oe = _e("statement", true)
            var ae = _e("expression", true)
            var se = _e("declaration", true)
            var ce = _e("function", true)
            var ue = _e("pattern", true)
            var le = 0
            var fe = [
              {
                line: 1,
                column: 1
              }
            ]
            var de = 0
            var he = []
            var pe = {}
            if ("startRule" in n) {
              if (!(n.startRule in c)) {
                throw new Error("Can't start parsing from rule \"" + n.startRule + "\".")
              }
              u = c[n.startRule]
            }
            function _e(e, t) {
              return {
                type: "literal",
                text: e,
                ignoreCase: t
              }
            }
            function Ae(e, t, n) {
              return {
                type: "class",
                parts: e,
                inverted: t,
                ignoreCase: n
              }
            }
            function ge(e) {
              var n
              var r = fe[e]
              if (r) {
                return r
              }
              for (n = e - 1; !fe[n];) {
                n--
              }
              for (r = {
                line: (r = fe[n]).line,
                column: r.column
              }; n < e;) {
                if (10 === t.charCodeAt(n)) {
                  r.line++
                  r.column = 1
                } else {
                  r.column++
                }
                n++
              }
              fe[e] = r
              return r
            }
            function ve(e, t) {
              var n = ge(e)
              var r = ge(t)
              return {
                start: {
                  offset: e,
                  line: n.line,
                  column: n.column
                },
                end: {
                  offset: t,
                  line: r.line,
                  column: r.column
                }
              }
            }
            function me(e) {
              if (!(le < de)) {
                if (le > de) {
                  de = le
                  he = []
                }
                he.push(e)
              }
            }
            function ye() {
              var e
              var t
              var n
              var r
              var i = 30 * le + 0
              var o = pe[i]
              return o ? (le = o.nextPos, o.result) : (e = le, (t = be()) !== s && (n = xe()) !== s && be() !== s ? e = t = 1 === (r = n).length ? r[0] : {
                type: "matches",
                selectors: r
              } : (le = e, e = s), e === s && (e = le, (t = be()) !== s && (t = undefined), e = t), pe[i] = {
                nextPos: le,
                result: e
              }, e)
            }
            function be() {
              var e
              var n
              var r = 30 * le + 1
              var i = pe[r]
              if (i) {
                le = i.nextPos
                return i.result
              }
              for (e = [], 32 === t.charCodeAt(le) ? (n = " ", le++) : (n = s, me(l)); n !== s;) {
                e.push(n)
                if (32 === t.charCodeAt(le)) {
                  n = " "
                  le++
                } else {
                  n = s
                  me(l)
                }
              }
              pe[r] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function we() {
              var e
              var n
              var r
              var i = 30 * le + 2
              var o = pe[i]
              if (o) {
                le = o.nextPos
                return o.result
              }
              n = []
              if (f.test(t.charAt(le))) {
                r = t.charAt(le)
                le++
              } else {
                r = s
                me(d)
              }
              if (r !== s) {
                for (; r !== s;) {
                  n.push(r)
                  if (f.test(t.charAt(le))) {
                    r = t.charAt(le)
                    le++
                  } else {
                    r = s
                    me(d)
                  }
                }
              } else {
                n = s
              }
              if (n !== s) {
                n = n.join("")
              }
              e = n
              pe[i] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function Ee() {
              var e
              var n
              var r
              var i = 30 * le + 3
              var o = pe[i]
              return o ? (le = o.nextPos, o.result) : (e = le, (n = be()) !== s ? (62 === t.charCodeAt(le) ? (r = ">", le++) : (r = s, me(h)), r !== s && be() !== s ? e = n = "child" : (le = e, e = s)) : (le = e, e = s), e === s && (e = le, (n = be()) !== s ? (126 === t.charCodeAt(le) ? (r = "~", le++) : (r = s, me(p)), r !== s && be() !== s ? e = n = "sibling" : (le = e, e = s)) : (le = e, e = s), e === s && (e = le, (n = be()) !== s ? (43 === t.charCodeAt(le) ? (r = "+", le++) : (r = s, me(_)), r !== s && be() !== s ? e = n = "adjacent" : (le = e, e = s)) : (le = e, e = s), e === s && (e = le, 32 === t.charCodeAt(le) ? (n = " ", le++) : (n = s, me(l)), n !== s && (r = be()) !== s ? e = n = "descendant" : (le = e, e = s)))), pe[i] = {
                nextPos: le,
                result: e
              }, e)
            }
            function xe() {
              var e
              var n
              var r
              var i
              var o
              var a
              var c
              var u
              var l = 30 * le + 4
              var f = pe[l]
              if (f) {
                le = f.nextPos
                return f.result
              }
              e = le
              if ((n = Ce()) !== s) {
                for (r = [], i = le, (o = be()) !== s ? (44 === t.charCodeAt(le) ? (a = ",", le++) : (a = s, me(A)), a !== s && (c = be()) !== s && (u = Ce()) !== s ? i = o = [o, a, c, u] : (le = i, i = s)) : (le = i, i = s); i !== s;) {
                  r.push(i)
                  i = le
                  if ((o = be()) !== s) {
                    if (44 === t.charCodeAt(le)) {
                      a = ","
                      le++
                    } else {
                      a = s
                      me(A)
                    }
                    if (a !== s && (c = be()) !== s && (u = Ce()) !== s) {
                      i = o = [o, a, c, u]
                    } else {
                      le = i
                      i = s
                    }
                  } else {
                    le = i
                    i = s
                  }
                }
                if (r !== s) {
                  e = n = [n].concat(r.map(function (e) {
                    return e[3]
                  }))
                } else {
                  le = e
                  e = s
                }
              } else {
                le = e
                e = s
              }
              pe[l] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function Ce() {
              var e
              var t
              var n
              var r
              var i
              var o
              var a
              var c = 30 * le + 5
              var u = pe[c]
              if (u) {
                le = u.nextPos
                return u.result
              }
              e = le
              if ((t = Oe()) !== s) {
                for (n = [], r = le, (i = Ee()) !== s && (o = Oe()) !== s ? r = i = [i, o] : (le = r, r = s); r !== s;) {
                  n.push(r)
                  r = le
                  if ((i = Ee()) !== s && (o = Oe()) !== s) {
                    r = i = [i, o]
                  } else {
                    le = r
                    r = s
                  }
                }
                if (n !== s) {
                  a = t
                  e = t = n.reduce(function (e, t) {
                    return {
                      type: t[0],
                      left: e,
                      right: t[1]
                    }
                  }, a)
                } else {
                  le = e
                  e = s
                }
              } else {
                le = e
                e = s
              }
              pe[c] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function Oe() {
              var e
              var n
              var r
              var i
              var o
              var a
              var c
              var u = 30 * le + 6
              var l = pe[u]
              if (l) {
                le = l.nextPos
                return l.result
              }
              e = le
              if (33 === t.charCodeAt(le)) {
                n = "!"
                le++
              } else {
                n = s
                me(g)
              }
              if (n === s) {
                n = null
              }
              if (n !== s) {
                r = []
                if ((i = ke()) !== s) {
                  for (; i !== s;) {
                    r.push(i)
                    i = ke()
                  }
                } else {
                  r = s
                }
                if (r !== s) {
                  o = n
                  c = 1 === (a = r).length ? a[0] : {
                    type: "compound",
                    selectors: a
                  }
                  if (o) {
                    c.subject = true
                  }
                  e = n = c
                } else {
                  le = e
                  e = s
                }
              } else {
                le = e
                e = s
              }
              pe[u] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function ke() {
              var e
              var n = 30 * le + 7
              var r = pe[n]
              return r ? (le = r.nextPos, r.result) : ((e = function () {
                var e
                var n
                var r = 30 * le + 8
                var i = pe[r]
                return i ? (le = i.nextPos, i.result) : (42 === t.charCodeAt(le) ? (n = "*", le++) : (n = s, me(v)), n !== s && (n = {
                  type: "wildcard",
                  value: n
                }), e = n, pe[r] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i = 30 * le + 9
                var o = pe[i]
                return o ? (le = o.nextPos, o.result) : (e = le, 35 === t.charCodeAt(le) ? (n = "#", le++) : (n = s, me(m)), n === s && (n = null), n !== s && (r = we()) !== s ? e = n = {
                  type: "identifier",
                  value: r
                } : (le = e, e = s), pe[i] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o = 30 * le + 10
                var a = pe[o]
                return a ? (le = a.nextPos, a.result) : (e = le, 91 === t.charCodeAt(le) ? (n = "[", le++) : (n = s, me(y)), n !== s && be() !== s && (r = function () {
                  var e
                  var n
                  var r
                  var i
                  var o = 30 * le + 14
                  var a = pe[o]
                  return a ? (le = a.nextPos, a.result) : (e = le, (n = Se()) !== s && be() !== s && (r = function () {
                    var e
                    var n
                    var r
                    var i = 30 * le + 12
                    var o = pe[i]
                    return o ? (le = o.nextPos, o.result) : (e = le, 33 === t.charCodeAt(le) ? (n = "!", le++) : (n = s, me(g)), n === s && (n = null), n !== s ? (61 === t.charCodeAt(le) ? (r = "=", le++) : (r = s, me(x)), r !== s ? e = n = C(n) : (le = e, e = s)) : (le = e, e = s), pe[i] = {
                      nextPos: le,
                      result: e
                    }, e)
                  }()) !== s && be() !== s ? ((i = function () {
                      var e
                      var n
                      var r
                      var i
                      var o
                      var a = 30 * le + 18
                      var c = pe[a]
                      if (c) {
                        le = c.nextPos
                        return c.result
                      }
                      e = le
                      if ("type(" === t.substr(le, 5)) {
                        n = "type("
                        le += 5
                      } else {
                        n = s
                        me(V)
                      }
                      if (n !== s) {
                        if (be() !== s) {
                          r = []
                          if (G.test(t.charAt(le))) {
                            i = t.charAt(le)
                            le++
                          } else {
                            i = s
                            me(z)
                          }
                          if (i !== s) {
                            for (; i !== s;) {
                              r.push(i)
                              if (G.test(t.charAt(le))) {
                                i = t.charAt(le)
                                le++
                              } else {
                                i = s
                                me(z)
                              }
                            }
                          } else {
                            r = s
                          }
                          if (r !== s && (i = be()) !== s) {
                            if (41 === t.charCodeAt(le)) {
                              o = ")"
                              le++
                            } else {
                              o = s
                              me(Q)
                            }
                            if (o !== s) {
                              e = n = {
                                type: "type",
                                value: r.join("")
                              }
                            } else {
                              le = e
                              e = s
                            }
                          } else {
                            le = e
                            e = s
                          }
                        } else {
                          le = e
                          e = s
                        }
                      } else {
                        le = e
                        e = s
                      }
                      pe[a] = {
                        nextPos: le,
                        result: e
                      }
                      return e
                    }()) === s && (i = function () {
                      var e
                      var n
                      var r
                      var i
                      var o
                      var a
                      var c = 30 * le + 20
                      var u = pe[c]
                      if (u) {
                        le = u.nextPos
                        return u.result
                      }
                      e = le
                      if (47 === t.charCodeAt(le)) {
                        n = "/"
                        le++
                      } else {
                        n = s
                        me(X)
                      }
                      if (n !== s) {
                        r = []
                        if (Y.test(t.charAt(le))) {
                          i = t.charAt(le)
                          le++
                        } else {
                          i = s
                          me(q)
                        }
                        if (i !== s) {
                          for (; i !== s;) {
                            r.push(i)
                            if (Y.test(t.charAt(le))) {
                              i = t.charAt(le)
                              le++
                            } else {
                              i = s
                              me(q)
                            }
                          }
                        } else {
                          r = s
                        }
                        if (r !== s) {
                          if (47 === t.charCodeAt(le)) {
                            i = "/"
                            le++
                          } else {
                            i = s
                            me(X)
                          }
                          if (i !== s) {
                            if ((o = function () {
                              var e
                              var n
                              var r = 30 * le + 19
                              var i = pe[r]
                              if (i) {
                                le = i.nextPos
                                return i.result
                              }
                              e = []
                              if (W.test(t.charAt(le))) {
                                n = t.charAt(le)
                                le++
                              } else {
                                n = s
                                me(K)
                              }
                              if (n !== s) {
                                for (; n !== s;) {
                                  e.push(n)
                                  if (W.test(t.charAt(le))) {
                                    n = t.charAt(le)
                                    le++
                                  } else {
                                    n = s
                                    me(K)
                                  }
                                }
                              } else {
                                e = s
                              }
                              pe[r] = {
                                nextPos: le,
                                result: e
                              }
                              return e
                            }()) === s) {
                              o = null
                            }
                            if (o !== s) {
                              a = o
                              e = n = {
                                type: "regexp",
                                value: new RegExp(r.join(""), a ? a.join("") : "")
                              }
                            } else {
                              le = e
                              e = s
                            }
                          } else {
                            le = e
                            e = s
                          }
                        } else {
                          le = e
                          e = s
                        }
                      } else {
                        le = e
                        e = s
                      }
                      pe[c] = {
                        nextPos: le,
                        result: e
                      }
                      return e
                    }()), i !== s ? e = n = T(n, r, i) : (le = e, e = s)) : (le = e, e = s), e === s && (e = le, (n = Se()) !== s && be() !== s && (r = function () {
                    var e
                    var n
                    var r
                    var i = 30 * le + 11
                    var o = pe[i]
                    return o ? (le = o.nextPos, o.result) : (e = le, w.test(t.charAt(le)) ? (n = t.charAt(le), le++) : (n = s, me(E)), n === s && (n = null), n !== s ? (61 === t.charCodeAt(le) ? (r = "=", le++) : (r = s, me(x)), r !== s ? e = n = C(n) : (le = e, e = s)) : (le = e, e = s), e === s && (O.test(t.charAt(le)) ? (e = t.charAt(le), le++) : (e = s, me(k))), pe[i] = {
                      nextPos: le,
                      result: e
                    }, e)
                  }()) !== s && be() !== s ? ((i = function () {
                      var e
                      var n
                      var r
                      var i
                      var o
                      var a
                      var c = 30 * le + 15
                      var u = pe[c]
                      if (u) {
                        le = u.nextPos
                        return u.result
                      }
                      e = le
                      if (34 === t.charCodeAt(le)) {
                        n = "\""
                        le++
                      } else {
                        n = s
                        me(B)
                      }
                      if (n !== s) {
                        for (r = [], D.test(t.charAt(le)) ? (i = t.charAt(le), le++) : (i = s, me(I)), i === s && (i = le, 92 === t.charCodeAt(le) ? (o = "\\", le++) : (o = s, me(R)), o !== s ? (t.length > le ? (a = t.charAt(le), le++) : (a = s, me(F)), a !== s ? i = o = P(o, a) : (le = i, i = s)) : (le = i, i = s)); i !== s;) {
                          r.push(i)
                          if (D.test(t.charAt(le))) {
                            i = t.charAt(le)
                            le++
                          } else {
                            i = s
                            me(I)
                          }
                          if (i === s) {
                            i = le
                            if (92 === t.charCodeAt(le)) {
                              o = "\\"
                              le++
                            } else {
                              o = s
                              me(R)
                            }
                            if (o !== s) {
                              if (t.length > le) {
                                a = t.charAt(le)
                                le++
                              } else {
                                a = s
                                me(F)
                              }
                              if (a !== s) {
                                i = o = P(o, a)
                              } else {
                                le = i
                                i = s
                              }
                            } else {
                              le = i
                              i = s
                            }
                          }
                        }
                        if (r !== s) {
                          if (34 === t.charCodeAt(le)) {
                            i = "\""
                            le++
                          } else {
                            i = s
                            me(B)
                          }
                          if (i !== s) {
                            e = n = N(r)
                          } else {
                            le = e
                            e = s
                          }
                        } else {
                          le = e
                          e = s
                        }
                      } else {
                        le = e
                        e = s
                      }
                      if (e === s) {
                        e = le
                        if (39 === t.charCodeAt(le)) {
                          n = "'"
                          le++
                        } else {
                          n = s
                          me(M)
                        }
                        if (n !== s) {
                          for (r = [], L.test(t.charAt(le)) ? (i = t.charAt(le), le++) : (i = s, me(j)), i === s && (i = le, 92 === t.charCodeAt(le) ? (o = "\\", le++) : (o = s, me(R)), o !== s ? (t.length > le ? (a = t.charAt(le), le++) : (a = s, me(F)), a !== s ? i = o = P(o, a) : (le = i, i = s)) : (le = i, i = s)); i !== s;) {
                            r.push(i)
                            if (L.test(t.charAt(le))) {
                              i = t.charAt(le)
                              le++
                            } else {
                              i = s
                              me(j)
                            }
                            if (i === s) {
                              i = le
                              if (92 === t.charCodeAt(le)) {
                                o = "\\"
                                le++
                              } else {
                                o = s
                                me(R)
                              }
                              if (o !== s) {
                                if (t.length > le) {
                                  a = t.charAt(le)
                                  le++
                                } else {
                                  a = s
                                  me(F)
                                }
                                if (a !== s) {
                                  i = o = P(o, a)
                                } else {
                                  le = i
                                  i = s
                                }
                              } else {
                                le = i
                                i = s
                              }
                            }
                          }
                          if (r !== s) {
                            if (39 === t.charCodeAt(le)) {
                              i = "'"
                              le++
                            } else {
                              i = s
                              me(M)
                            }
                            if (i !== s) {
                              e = n = N(r)
                            } else {
                              le = e
                              e = s
                            }
                          } else {
                            le = e
                            e = s
                          }
                        } else {
                          le = e
                          e = s
                        }
                      }
                      pe[c] = {
                        nextPos: le,
                        result: e
                      }
                      return e
                    }()) === s && (i = function () {
                      var e
                      var n
                      var r
                      var i
                      var o
                      var a
                      var c
                      var u = 30 * le + 16
                      var l = pe[u]
                      if (l) {
                        le = l.nextPos
                        return l.result
                      }
                      for (e = le, n = le, r = [], U.test(t.charAt(le)) ? (i = t.charAt(le), le++) : (i = s, me(H)); i !== s;) {
                        r.push(i)
                        if (U.test(t.charAt(le))) {
                          i = t.charAt(le)
                          le++
                        } else {
                          i = s
                          me(H)
                        }
                      }
                      if (r !== s) {
                        if (46 === t.charCodeAt(le)) {
                          i = "."
                          le++
                        } else {
                          i = s
                          me(S)
                        }
                        if (i !== s) {
                          n = r = [r, i]
                        } else {
                          le = n
                          n = s
                        }
                      } else {
                        le = n
                        n = s
                      }
                      if (n === s) {
                        n = null
                      }
                      if (n !== s) {
                        r = []
                        if (U.test(t.charAt(le))) {
                          i = t.charAt(le)
                          le++
                        } else {
                          i = s
                          me(H)
                        }
                        if (i !== s) {
                          for (; i !== s;) {
                            r.push(i)
                            if (U.test(t.charAt(le))) {
                              i = t.charAt(le)
                              le++
                            } else {
                              i = s
                              me(H)
                            }
                          }
                        } else {
                          r = s
                        }
                        if (r !== s) {
                          a = r
                          c = (o = n) ? [].concat.apply([], o).join("") : ""
                          e = n = {
                            type: "literal",
                            value: parseFloat(c + a.join(""))
                          }
                        } else {
                          le = e
                          e = s
                        }
                      } else {
                        le = e
                        e = s
                      }
                      pe[u] = {
                        nextPos: le,
                        result: e
                      }
                      return e
                    }()) === s && (i = function () {
                      var e
                      var t
                      var n = 30 * le + 17
                      var r = pe[n]
                      return r ? (le = r.nextPos, r.result) : ((t = we()) !== s && (t = {
                        type: "literal",
                        value: t
                      }), e = t, pe[n] = {
                        nextPos: le,
                        result: e
                      }, e)
                    }()), i !== s ? e = n = T(n, r, i) : (le = e, e = s)) : (le = e, e = s), e === s && (e = le, (n = Se()) !== s && (n = {
                    type: "attribute",
                    name: n
                  }), e = n)), pe[o] = {
                    nextPos: le,
                    result: e
                  }, e)
                }()) !== s && be() !== s ? (93 === t.charCodeAt(le) ? (i = "]", le++) : (i = s, me(b)), i !== s ? e = n = r : (le = e, e = s)) : (le = e, e = s), pe[o] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o
                var a
                var c
                var u
                var l = 30 * le + 21
                var f = pe[l]
                if (f) {
                  le = f.nextPos
                  return f.result
                }
                e = le
                if (46 === t.charCodeAt(le)) {
                  n = "."
                  le++
                } else {
                  n = s
                  me(S)
                }
                if (n !== s) {
                  if ((r = we()) !== s) {
                    for (i = [], o = le, 46 === t.charCodeAt(le) ? (a = ".", le++) : (a = s, me(S)), a !== s && (c = we()) !== s ? o = a = [a, c] : (le = o, o = s); o !== s;) {
                      i.push(o)
                      o = le
                      if (46 === t.charCodeAt(le)) {
                        a = "."
                        le++
                      } else {
                        a = s
                        me(S)
                      }
                      if (a !== s && (c = we()) !== s) {
                        o = a = [a, c]
                      } else {
                        le = o
                        o = s
                      }
                    }
                    if (i !== s) {
                      u = r
                      e = n = {
                        type: "field",
                        name: i.reduce(function (e, t) {
                          return e + t[0] + t[1]
                        }, u)
                      }
                    } else {
                      le = e
                      e = s
                    }
                  } else {
                    le = e
                    e = s
                  }
                } else {
                  le = e
                  e = s
                }
                pe[l] = {
                  nextPos: le,
                  result: e
                }
                return e
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o = 30 * le + 22
                var a = pe[o]
                return a ? (le = a.nextPos, a.result) : (e = le, ":not(" === t.substr(le, 5) ? (n = ":not(", le += 5) : (n = s, me($)), n !== s && be() !== s && (r = xe()) !== s && be() !== s ? (41 === t.charCodeAt(le) ? (i = ")", le++) : (i = s, me(Q)), i !== s ? e = n = {
                  type: "not",
                  selectors: r
                } : (le = e, e = s)) : (le = e, e = s), pe[o] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o = 30 * le + 23
                var a = pe[o]
                return a ? (le = a.nextPos, a.result) : (e = le, ":matches(" === t.substr(le, 9) ? (n = ":matches(", le += 9) : (n = s, me(J)), n !== s && be() !== s && (r = xe()) !== s && be() !== s ? (41 === t.charCodeAt(le) ? (i = ")", le++) : (i = s, me(Q)), i !== s ? e = n = {
                  type: "matches",
                  selectors: r
                } : (le = e, e = s)) : (le = e, e = s), pe[o] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o = 30 * le + 24
                var a = pe[o]
                return a ? (le = a.nextPos, a.result) : (e = le, ":has(" === t.substr(le, 5) ? (n = ":has(", le += 5) : (n = s, me(Z)), n !== s && be() !== s && (r = xe()) !== s && be() !== s ? (41 === t.charCodeAt(le) ? (i = ")", le++) : (i = s, me(Q)), i !== s ? e = n = {
                  type: "has",
                  selectors: r
                } : (le = e, e = s)) : (le = e, e = s), pe[o] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r = 30 * le + 25
                var i = pe[r]
                return i ? (le = i.nextPos, i.result) : (":first-child" === t.substr(le, 12) ? (n = ":first-child", le += 12) : (n = s, me(ee)), n !== s && (n = Te(1)), e = n, pe[r] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r = 30 * le + 26
                var i = pe[r]
                return i ? (le = i.nextPos, i.result) : (":last-child" === t.substr(le, 11) ? (n = ":last-child", le += 11) : (n = s, me(te)), n !== s && (n = Be(1)), e = n, pe[r] = {
                  nextPos: le,
                  result: e
                }, e)
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o
                var a = 30 * le + 27
                var c = pe[a]
                if (c) {
                  le = c.nextPos
                  return c.result
                }
                e = le
                if (":nth-child(" === t.substr(le, 11)) {
                  n = ":nth-child("
                  le += 11
                } else {
                  n = s
                  me(ne)
                }
                if (n !== s) {
                  if (be() !== s) {
                    r = []
                    if (U.test(t.charAt(le))) {
                      i = t.charAt(le)
                      le++
                    } else {
                      i = s
                      me(H)
                    }
                    if (i !== s) {
                      for (; i !== s;) {
                        r.push(i)
                        if (U.test(t.charAt(le))) {
                          i = t.charAt(le)
                          le++
                        } else {
                          i = s
                          me(H)
                        }
                      }
                    } else {
                      r = s
                    }
                    if (r !== s && (i = be()) !== s) {
                      if (41 === t.charCodeAt(le)) {
                        o = ")"
                        le++
                      } else {
                        o = s
                        me(Q)
                      }
                      if (o !== s) {
                        e = n = Te(parseInt(r.join(""), 10))
                      } else {
                        le = e
                        e = s
                      }
                    } else {
                      le = e
                      e = s
                    }
                  } else {
                    le = e
                    e = s
                  }
                } else {
                  le = e
                  e = s
                }
                pe[a] = {
                  nextPos: le,
                  result: e
                }
                return e
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i
                var o
                var a = 30 * le + 28
                var c = pe[a]
                if (c) {
                  le = c.nextPos
                  return c.result
                }
                e = le
                if (":nth-last-child(" === t.substr(le, 16)) {
                  n = ":nth-last-child("
                  le += 16
                } else {
                  n = s
                  me(re)
                }
                if (n !== s) {
                  if (be() !== s) {
                    r = []
                    if (U.test(t.charAt(le))) {
                      i = t.charAt(le)
                      le++
                    } else {
                      i = s
                      me(H)
                    }
                    if (i !== s) {
                      for (; i !== s;) {
                        r.push(i)
                        if (U.test(t.charAt(le))) {
                          i = t.charAt(le)
                          le++
                        } else {
                          i = s
                          me(H)
                        }
                      }
                    } else {
                      r = s
                    }
                    if (r !== s && (i = be()) !== s) {
                      if (41 === t.charCodeAt(le)) {
                        o = ")"
                        le++
                      } else {
                        o = s
                        me(Q)
                      }
                      if (o !== s) {
                        e = n = Be(parseInt(r.join(""), 10))
                      } else {
                        le = e
                        e = s
                      }
                    } else {
                      le = e
                      e = s
                    }
                  } else {
                    le = e
                    e = s
                  }
                } else {
                  le = e
                  e = s
                }
                pe[a] = {
                  nextPos: le,
                  result: e
                }
                return e
              }()) === s && (e = function () {
                var e
                var n
                var r
                var i = 30 * le + 29
                var o = pe[i]
                return o ? (le = o.nextPos, o.result) : (e = le, 58 === t.charCodeAt(le) ? (n = ":", le++) : (n = s, me(ie)), n !== s ? ("statement" === t.substr(le, 9).toLowerCase() ? (r = t.substr(le, 9), le += 9) : (r = s, me(oe)), r === s && ("expression" === t.substr(le, 10).toLowerCase() ? (r = t.substr(le, 10), le += 10) : (r = s, me(ae)), r === s && ("declaration" === t.substr(le, 11).toLowerCase() ? (r = t.substr(le, 11), le += 11) : (r = s, me(se)), r === s && ("function" === t.substr(le, 8).toLowerCase() ? (r = t.substr(le, 8), le += 8) : (r = s, me(ce)), r === s && ("pattern" === t.substr(le, 7).toLowerCase() ? (r = t.substr(le, 7), le += 7) : (r = s, me(ue)))))), r !== s ? e = n = {
                  type: "class",
                  name: r
                } : (le = e, e = s)) : (le = e, e = s), pe[i] = {
                  nextPos: le,
                  result: e
                }, e)
              }()), pe[n] = {
                nextPos: le,
                result: e
              }, e)
            }
            function Se() {
              var e
              var n
              var r
              var i
              var o
              var a
              var c
              var u
              var l = 30 * le + 13
              var f = pe[l]
              if (f) {
                le = f.nextPos
                return f.result
              }
              e = le
              if ((n = we()) !== s) {
                for (r = [], i = le, 46 === t.charCodeAt(le) ? (o = ".", le++) : (o = s, me(S)), o !== s && (a = we()) !== s ? i = o = [o, a] : (le = i, i = s); i !== s;) {
                  r.push(i)
                  i = le
                  if (46 === t.charCodeAt(le)) {
                    o = "."
                    le++
                  } else {
                    o = s
                    me(S)
                  }
                  if (o !== s && (a = we()) !== s) {
                    i = o = [o, a]
                  } else {
                    le = i
                    i = s
                  }
                }
                if (r !== s) {
                  c = n
                  u = r
                  e = n = [].concat.apply([c], u).join("")
                } else {
                  le = e
                  e = s
                }
              } else {
                le = e
                e = s
              }
              pe[l] = {
                nextPos: le,
                result: e
              }
              return e
            }
            function Te(e) {
              return {
                type: "nth-child",
                index: {
                  type: "literal",
                  value: e
                }
              }
            }
            function Be(e) {
              return {
                type: "nth-last-child",
                index: {
                  type: "literal",
                  value: e
                }
              }
            }
            if ((r = u()) !== s && le === t.length) {
              return r
            }
            if (r !== s && le < t.length) {
              me({
                type: "end"
              })
            }
            i = he
            o = de < t.length ? t.charAt(de) : null
            a = de < t.length ? ve(de, de + 1) : ve(de, de)
            throw new e(e.buildMessage(i, o), i, o, a)
          }
        }
      }()
    }
  })
  function l(t, n, r, i) {
    if (!n) {
      return true
    }
    if (!t) {
      return false
    }
    switch (r || (r = []), n.type) {
      case "wildcard":
        return true
      case "identifier":
        return n.value.toLowerCase() === t.type.toLowerCase()
      case "field":
        var o = n.name.split("."),
          s = r[o.length - 1]
        return function e(t, n, r) {
          if (0 === r.length) {
            return t === n
          }
          if (null == n) {
            return false
          }
          var i = n[r[0]]
          var o = r.slice(1)
          if (Array.isArray(i)) {
            var s
            var c = a(i)
            try {
              for (c.s(); !(s = c.n()).done;) {
                if (e(t, s.value, o)) {
                  return true
                }
              }
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            return false
          }
          return e(t, i, o)
        }(t, s, o)
      case "matches":
        var u,
          f = a(n.selectors)
        try {
          for (f.s(); !(u = f.n()).done;) {
            var /* [auto-meaningful-name] */u$value = u.value
            if (l(t, u$value, r, i)) {
              return true
            }
          }
        } catch (e) {
          f.e(e)
        } finally {
          f.f()
        }
        return false
      case "compound":
        var A,
          g = a(n.selectors)
        try {
          for (g.s(); !(A = g.n()).done;) {
            var /* [auto-meaningful-name] */A$value = A.value
            if (!l(t, A$value, r, i)) {
              return false
            }
          }
        } catch (e) {
          g.e(e)
        } finally {
          g.f()
        }
        return true
      case "not":
        var m,
          y = a(n.selectors)
        try {
          for (y.s(); !(m = y.n()).done;) {
            var /* [auto-meaningful-name] */m$value = m.value
            if (l(t, m$value, r, i)) {
              return false
            }
          }
        } catch (e) {
          y.e(e)
        } finally {
          y.f()
        }
        return true
      case "has":
        var w = function () {
          var e
          var r = []
          var o = a(n.selectors)
          try {
            var s = function () {
              var /* [auto-meaningful-name] */e$value = e.value
              var o = []
              c.traverse(t, {
                enter: function (e, t) {
                  if (null != t) {
                    o.unshift(t)
                  }
                  if (l(e, e$value, o, i)) {
                    r.push(e)
                  }
                },
                leave: function () {
                  o.shift()
                },
                keys: i && i.visitorKeys,
                fallback: i && i.fallback || "iteration"
              })
            }
            for (o.s(); !(e = o.n()).done;) {
              s()
            }
          } catch (e) {
            o.e(e)
          } finally {
            o.f()
          }
          return {
            v: 0 !== r.length
          }
        }()
        if ("object" === e(w)) {
          return w.v
        }
      case "child":
        return !!l(t, n.right, r, i) && l(r[0], n.left, r.slice(1), i)
      case "descendant":
        if (l(t, n.right, r, i)) {
          for (var E = 0, /* [auto-meaningful-name] */r$length = r.length; E < r$length; ++E) {
            if (l(r[E], n.left, r.slice(E + 1), i)) {
              return true
            }
          }
        }
        return false
      case "attribute":
        var C = function (e, t) {
          var n
          var r = a(t.split("."))
          try {
            for (r.s(); !(n = r.n()).done;) {
              var /* [auto-meaningful-name] */n$value = n.value
              if (null == e) {
                return e
              }
              e = e[n$value]
            }
          } catch (e) {
            r.e(e)
          } finally {
            r.f()
          }
          return e
        }(t, n.name)
        switch (n.operator) {
          case undefined:
            return null != C
          case "=":
            switch (n.value.type) {
              case "regexp":
                return "string" == typeof C && n.value.value.test(C)
              case "literal":
                return "".concat(n.value.value) === "".concat(C)
              case "type":
                return n.value.value === e(C)
            }
            throw new Error("Unknown selector value type: ".concat(n.value.type))
          case "!=":
            switch (n.value.type) {
              case "regexp":
                return !n.value.value.test(C)
              case "literal":
                return "".concat(n.value.value) !== "".concat(C)
              case "type":
                return n.value.value !== e(C)
            }
            throw new Error("Unknown selector value type: ".concat(n.value.type))
          case "<=":
            return C <= n.value.value
          case "<":
            return C < n.value.value
          case ">":
            return C > n.value.value
          case ">=":
            return C >= n.value.value
        }
        throw new Error("Unknown operator: ".concat(n.operator))
      case "sibling":
        return l(t, n.right, r, i) && h(t, n.left, r, "LEFT_SIDE", i) || n.left.subject && l(t, n.left, r, i) && h(t, n.right, r, "RIGHT_SIDE", i)
      case "adjacent":
        return l(t, n.right, r, i) && p(t, n.left, r, "LEFT_SIDE", i) || n.right.subject && l(t, n.left, r, i) && p(t, n.right, r, "RIGHT_SIDE", i)
      case "nth-child":
        return l(t, n.right, r, i) && _(t, r, function () {
          return n.index.value - 1
        }, i)
      case "nth-last-child":
        return l(t, n.right, r, i) && _(t, r, function (e) {
          return e - n.index.value
        }, i)
      case "class":
        switch (n.name.toLowerCase()) {
          case "statement":
            if ("Statement" === t.type.slice(-9)) {
              return true
            }
          case "declaration":
            return "Declaration" === t.type.slice(-11)
          case "pattern":
            if ("Pattern" === t.type.slice(-7)) {
              return true
            }
          case "expression":
            return "Expression" === t.type.slice(-10) || "Literal" === t.type.slice(-7) || "Identifier" === t.type && (0 === r.length || "MetaProperty" !== r[0].type) || "MetaProperty" === t.type
          case "function":
            return "FunctionDeclaration" === t.type || "FunctionExpression" === t.type || "ArrowFunctionExpression" === t.type
        }
        throw new Error("Unknown class name: ".concat(n.name))
    }
    throw new Error("Unknown selector type: ".concat(n.type))
  }
  function f(e, t) {
    var /* [auto-meaningful-name] */e$type = e.type
    return t && t.visitorKeys && t.visitorKeys[e$type] ? t.visitorKeys[e$type] : c.VisitorKeys[e$type] ? c.VisitorKeys[e$type] : t && "function" == typeof t.fallback ? t.fallback(e) : Object.keys(e).filter(function (e) {
      return "type" !== e
    })
  }
  function d(t) {
    return null !== t && "object" === e(t) && "string" == typeof t.type
  }
  function h(e, t, r, i, o) {
    var s = n(r, 1)[0]
    if (!s) {
      return false
    }
    var c
    var u = a(f(s, o))
    try {
      for (u.s(); !(c = u.n()).done;) {
        var h = s[c.value]
        if (Array.isArray(h)) {
          var p = h.indexOf(e)
          if (p < 0) {
            continue
          }
          var _ = undefined
          var A = undefined
          if ("LEFT_SIDE" === i) {
            _ = 0
            A = p
          } else {
            _ = p + 1
            A = h.length
          }
          for (var g = _; g < A; ++g) {
            if (d(h[g]) && l(h[g], t, r, o)) {
              return true
            }
          }
        }
      }
    } catch (e) {
      u.e(e)
    } finally {
      u.f()
    }
    return false
  }
  function p(e, t, r, i, o) {
    var s = n(r, 1)[0]
    if (!s) {
      return false
    }
    var c
    var u = a(f(s, o))
    try {
      for (u.s(); !(c = u.n()).done;) {
        var h = s[c.value]
        if (Array.isArray(h)) {
          var p = h.indexOf(e)
          if (p < 0) {
            continue
          }
          if ("LEFT_SIDE" === i && p > 0 && d(h[p - 1]) && l(h[p - 1], t, r, o)) {
            return true
          }
          if ("RIGHT_SIDE" === i && p < h.length - 1 && d(h[p + 1]) && l(h[p + 1], t, r, o)) {
            return true
          }
        }
      }
    } catch (e) {
      u.e(e)
    } finally {
      u.f()
    }
    return false
  }
  function _(e, t, r, i) {
    var o = n(t, 1)[0]
    if (!o) {
      return false
    }
    var s
    var c = a(f(o, i))
    try {
      for (c.s(); !(s = c.n()).done;) {
        var u = o[s.value]
        if (Array.isArray(u)) {
          var l = u.indexOf(e)
          if (l >= 0 && l === r(u.length)) {
            return true
          }
        }
      }
    } catch (e) {
      c.e(e)
    } finally {
      c.f()
    }
    return false
  }
  function A(t, i) {
    if (null == t || "object" != e(t)) {
      return []
    }
    if (null == i) {
      i = t
    }
    for (var o = t.subject ? [i] : [], a = 0, s = function (e) {
      for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++) {
        t.push([n[r], e[n[r]]])
      }
      return t
    }(t); a < s.length; a++) {
      var c = n(s[a], 2)
      var u = c[0]
      var l = c[1]
      o.push.apply(o, r(A(l, "left" === u ? l : i)))
    }
    return o
  }
  function g(e, t, n, r) {
    if (t) {
      var i = []
      var o = A(t)
      c.traverse(e, {
        enter: function (e, a) {
          if (null != a) {
            i.unshift(a)
          }
          if (l(e, t, i, r)) {
            if (o.length) {
              for (var s = 0, /* [auto-meaningful-name] */o$length = o.length; s < o$length; ++s) {
                if (l(e, o[s], i, r)) {
                  n(e, a, i)
                }
                for (var u = 0, /* [auto-meaningful-name] */i$length = i.length; u < i$length; ++u) {
                  var d = i.slice(u + 1)
                  if (l(i[u], o[s], d, r)) {
                    n(i[u], a, d)
                  }
                }
              }
            } else {
              n(e, a, i)
            }
          }
        },
        leave: function () {
          i.shift()
        },
        keys: r && r.visitorKeys,
        fallback: r && r.fallback || "iteration"
      })
    }
  }
  function v(e, t, n) {
    var r = []
    g(e, t, function (e) {
      r.push(e)
    }, n)
    return r
  }
  function m(e) {
    return u.parse(e)
  }
  function y(e, t, n) {
    return v(e, m(t), n)
  }
  y.parse = m
  y.match = v
  y.traverse = g
  y.matches = l
  y.query = y
  return y
}()
