/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：787
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("./500")
var o = require("./180")
var a = require("./204")
var s = require("./819")
var c = require("./572/index")
var u = require("./711/index")
var l = require("./399")
var f = require("./1215")
var d = require("./2227/index")
var h = require("./777/index")
var p = require("./1361/index")
var _ = require("lodash")
var A = require("./1363/index")
var g = require("./2247")
var v = require("./979")
var m = require("./1133")
var y = require("./2248/index")
var b = require("./1373")
var /* [auto-meaningful-name] */require$_2292_index$SourceCode = require("./2292/index").SourceCode
var E = require("./2303/index")
var x = require("./2307")
var C = require("./2308/index")
var O = require("./2319/index")
var k = require("./2321/index")
var S = require("./1142/index")
var T = require("./2324")
var B = require("./2325")
var D = require("./2326")
var I = require("./2327")
var R = require("./818/index")("eslint:linter")
var F = new C()
var P = {
  start: {
    line: 1,
    column: 0
  },
  end: {
    line: 1,
    column: 1
  }
}
function N(e) {
  var /* [auto-meaningful-name] */e$ruleId = e.ruleId
  var n = undefined === e$ruleId ? null : e$ruleId
  var /* [auto-meaningful-name] */e$loc = e.loc
  var i = undefined === e$loc ? P : e$loc
  var /* [auto-meaningful-name] */e$message = e.message
  var a = undefined === e$message ? function (e) {
    return Object.prototype.hasOwnProperty.call(I.rules, e) ? "Rule '".concat(e, "' was removed and replaced by: ").concat(I.rules[e].join(", ")) : "Definition for rule '".concat(e, "' was not found.")
  }(e.ruleId) : e$message
  var /* [auto-meaningful-name] */e$severity = e.severity
  var c = undefined === e$severity ? 2 : e$severity
  return {
    ruleId: n,
    message: a,
    line: i.start.line,
    column: i.start.column + 1,
    endLine: i.end.line,
    endColumn: i.end.column + 1,
    severity: c,
    nodeType: null
  }
}
function M(e, t, n, r) {
  var i = {}
  var o = Object.create(null)
  var a = {}
  var s = []
  var f = []
  t.comments.filter(function (e) {
    return "Shebang" !== e.type
  }).forEach(function (e) {
    var t = e.value.trim()
    var d = /^(eslint(?:\x2Denv|\x2Denable|\x2Ddisable(?:(?:\x2Dnext)?\x2Dline)?)?|exported|globals?)(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|$)/.exec(t)
    if (d) {
      var h = d[1]
      var p = /^eslint\x2Ddisable\x2D(next\x2D)?line$/.test(h)
      if ("Line" !== e.type || p) {
        if (r) {
          var _ = "Block" === e.type ? "/*".concat(h, "*/") : "//".concat(h)
          s.push(N({
            ruleId: null,
            message: "'".concat(_, "' has no effect because you have 'noInlineConfig' setting in ").concat(r, "."),
            loc: e.loc,
            severity: 1
          }))
        } else if (p && e.loc.start.line !== e.loc.end.line) {
          var A = "".concat(h, " comment should not span multiple lines.")
          s.push(N({
            ruleId: null,
            message: A,
            loc: e.loc
          }))
        } else {
          var g = t.slice(d.index + h.length)
          switch (h) {
            case "eslint-disable":
            case "eslint-enable":
            case "eslint-disable-next-line":
            case "eslint-disable-line":
              var v = function (e) {
                  var t
                  var /* [auto-meaningful-name] */e$type = e.type
                  var /* [auto-meaningful-name] */e$loc = e.loc
                  var /* [auto-meaningful-name] */e$value = e.value
                  var /* [auto-meaningful-name] */e$ruleMapper = e.ruleMapper
                  var a = Object.keys(F.parseListConfig(e$value))
                  var s = a.length ? a : [null]
                  var c = {
                    directives: [],
                    directiveProblems: []
                  }
                  var u = l(s)
                  try {
                    for (u.s(); !(t = u.n()).done;) {
                      var /* [auto-meaningful-name] */t$value = t.value
                      if (null === t$value || null !== e$ruleMapper(t$value)) {
                        c.directives.push({
                          type: e$type,
                          line: e$loc.start.line,
                          column: e$loc.start.column + 1,
                          ruleId: t$value
                        })
                      } else {
                        c.directiveProblems.push(N({
                          ruleId: t$value,
                          loc: e$loc
                        }))
                      }
                    }
                  } catch (d) {
                    u.e(d)
                  } finally {
                    u.f()
                  }
                  return c
                }({
                  type: h.slice("eslint-".length),
                  loc: e.loc,
                  value: g,
                  ruleMapper: n
                }),
                /* [auto-meaningful-name] */v$directives = v.directives,
                /* [auto-meaningful-name] */v$directiveProblems = v.directiveProblems
              f.push.apply(f, u(v$directives))
              s.push.apply(s, u(v$directiveProblems))
              break
            case "exported":
              Object.assign(a, F.parseStringConfig(g, e))
              break
            case "globals":
            case "global":
              for (var E = 0, x = Object.entries(F.parseStringConfig(g, e)); E < x.length; E++) {
                var C = c(x[E], 2)
                var O = C[0]
                var /* [auto-meaningful-name] */C1$value = C[1].value
                var S = undefined
                try {
                  S = m.normalizeConfigGlobal(C1$value)
                } catch (B) {
                  s.push(N({
                    ruleId: null,
                    loc: e.loc,
                    message: B.message
                  }))
                  continue
                }
                if (o[O]) {
                  o[O].comments.push(e)
                  o[O].value = S
                } else {
                  o[O] = {
                    comments: [e],
                    value: S
                  }
                }
              }
              break
            case "eslint":
              var T = F.parseJsonConfig(g, e.loc)
              if (T.success) {
                Object.keys(T.config).forEach(function (t) {
                  var r = n(t)
                  var o = T.config[t]
                  if (null !== r) {
                    try {
                      y.validateRuleOptions(r, t, o)
                    } catch (B) {
                      return void s.push(N({
                        ruleId: t,
                        message: B.message,
                        loc: e.loc
                      }))
                    }
                    i[t] = o
                  } else {
                    s.push(N({
                      ruleId: t,
                      loc: e.loc
                    }))
                  }
                })
              } else {
                s.push(T.error)
              }
          }
        }
      }
    }
  })
  return {
    configuredRules: i,
    enabledGlobals: o,
    exportedVariables: a,
    problems: s,
    disableDirectives: f
  }
}
var L = /\/\*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*eslint\x2Denv[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?)\*\//g
function j(e) {
  var t = e.split(f.sep)
  var n = t.lastIndexOf("<text>")
  return -1 === n ? e : t.slice(n).join(f.sep)
}
function U(e, t, n) {
  var r = t.ecmaFeatures || {}
  var i = t.ecmaVersion || 5
  return d.analyze(e, {
    ignoreEval: true,
    nodejsScope: r.globalReturn,
    impliedStrict: r.impliedStrict,
    ecmaVersion: i,
    sourceType: t.sourceType || "script",
    childVisitorKeys: n || h.KEYS,
    fallback: b.getKeys
  })
}
function H(e, t) {
  for (var n = "Program" !== t.type, r = t; r; r = r.parent) {
    var i = e.acquire(r, n)
    if (i) {
      return "function-expression-name" === i.type ? i.childScopes[0] : i
    }
  }
  return e.scopes[0]
}
var V = {
  getSource: "getText",
  getSourceLines: "getLines",
  getAllComments: "getAllComments",
  getNodeByRangeIndex: "getNodeByRangeIndex",
  getComments: "getComments",
  getCommentsBefore: "getCommentsBefore",
  getCommentsAfter: "getCommentsAfter",
  getCommentsInside: "getCommentsInside",
  getJSDocComment: "getJSDocComment",
  getFirstToken: "getFirstToken",
  getFirstTokens: "getFirstTokens",
  getLastToken: "getLastToken",
  getLastTokens: "getLastTokens",
  getTokenAfter: "getTokenAfter",
  getTokenBefore: "getTokenBefore",
  getTokenByRangeStart: "getTokenByRangeStart",
  getTokens: "getTokens",
  getTokensAfter: "getTokensAfter",
  getTokensBefore: "getTokensBefore",
  getTokensBetween: "getTokensBetween"
}
var G = Object.freeze(Object.keys(V).reduce(function (e, t) {
  return Object.assign(e, s({}, t, function () {
    var e
    return (e = this.getSourceCode())[V[t]].apply(e, arguments)
  }))
}, {}))
function z(e, t, n, r, i, o, a, s, c) {
  var u = T()
  var l = []
  var /* [auto-meaningful-name] */e$ast = e.ast
  b.traverse(e.ast, {
    enter: function (e, t) {
      e.parent = t
      l.push({
        isEntering: true,
        node: e
      })
    },
    leave: function (e) {
      l.push({
        isEntering: false,
        node: e
      })
    },
    visitorKeys: e.visitorKeys
  })
  var d = Object.freeze(Object.assign(Object.create(G), {
    getAncestors: function () {
      return function (e) {
        for (var t = [], /* [auto-meaningful-name] */e$parent = e.parent; e$parent; e$parent = e$parent.parent) {
          t.push(e$parent)
        }
        return t.reverse()
      }(e$ast)
    },
    getDeclaredVariables: e.scopeManager.getDeclaredVariables.bind(e.scopeManager),
    getCwd: function () {
      return c
    },
    getFilename: function () {
      return a
    },
    getScope: function () {
      return H(e.scopeManager, e$ast)
    },
    getSourceCode: function () {
      return e
    },
    markVariableAsUsed: function (t) {
      return function (e, t, n, r) {
        for (var i = n.ecmaFeatures && n.ecmaFeatures.globalReturn || "module" === n.sourceType, o = H(e, t), a = "global" === o.type && i ? o.childScopes[0] : o; a; a = a.upper) {
          var s = a.variables.find(function (e) {
            return e.name === r
          })
          if (s) {
            s.eslintUsed = true
            return true
          }
        }
        return false
      }(e.scopeManager, e$ast, r, t)
    },
    parserOptions: r,
    parserPath: i,
    parserServices: e.parserServices,
    settings: o
  }))
  var h = []
  Object.keys(t).forEach(function (r) {
    var i = m.getRuleSeverity(t[r])
    if (0 !== i) {
      var o = n(r)
      if (null !== o) {
        var a
        var c = o.meta && o.meta.messages
        var l = null
        var f = Object.freeze(Object.assign(Object.create(d), {
          id: r,
          options: (a = t[r], Array.isArray(a) ? a.slice(1) : []),
          report: function () {
            if (null === l) {
              l = k({
                ruleId: r,
                severity: i,
                sourceCode: e,
                messageIds: c,
                disableFixes: s
              })
            }
            var t = l.apply(undefined, arguments)
            if (t.fix && o.meta && !o.meta.fixable) {
              throw new Error("Fixable rules should export a `meta.fixable` property.")
            }
            h.push(t)
          }
        }))
        var p = function (e, t) {
          try {
            return e.create(t)
          } catch (n) {
            n.message = "Error while loading rule '".concat(t.id, "': ").concat(n.message)
            throw n
          }
        }(o, f)
        Object.keys(p).forEach(function (e) {
          u.on(e, D.enabled ? D.time(r, p[e]) : p[e])
        })
      } else {
        h.push(N({
          ruleId: r
        }))
      }
    }
  })
  var p = new E(new O(u))
  l.forEach(function (e) {
    e$ast = e.node
    try {
      if (e.isEntering) {
        p.enterNode(e$ast)
      } else {
        p.leaveNode(e$ast)
      }
    } catch (t) {
      t.currentNode = e$ast
      throw t
    }
  })
  return h
}
function Q(e, t) {
  return e.lastConfigArray && e.lastConfigArray.pluginRules.get(t) || e.ruleMap.get(t)
}
function W(e) {
  return e || ("object" === typeof process ? process.cwd() : undefined)
}
var K = new WeakMap()
var X = function () {
  function e() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var /* [auto-meaningful-name] */t$cwd = t.cwd
    o(this, e)
    K.set(this, {
      cwd: W(t$cwd),
      lastConfigArray: null,
      lastSourceCode: null,
      parserMap: new Map([["espree", p]]),
      ruleMap: new S()
    })
    this.version = g.version
  }
  a(e, [
    {
      key: "_verifyWithoutProcessors",
      value: function (e, t, n) {
        var r
        var i = K.get(this)
        var o = t || {}
        var a = function (e, t) {
          var n = true === t.noInlineConfig
          var r = false === e.allowInlineConfig
          var i = t.configNameOfNoInlineConfig ? " (".concat(t.configNameOfNoInlineConfig, ")") : ""
          var /* [auto-meaningful-name] */e$reportUnusedDisableDirectives = e.reportUnusedDisableDirectives
          if ("boolean" === typeof e$reportUnusedDisableDirectives) {
            e$reportUnusedDisableDirectives = e$reportUnusedDisableDirectives ? "error" : "off"
          }
          if ("string" !== typeof e$reportUnusedDisableDirectives) {
            e$reportUnusedDisableDirectives = t.reportUnusedDisableDirectives ? "warn" : "off"
          }
          return {
            filename: j(e.filename || "<input>"),
            allowInlineConfig: !r,
            warnInlineConfig: n && !r ? "your config".concat(i) : null,
            reportUnusedDisableDirectives: e$reportUnusedDisableDirectives,
            disableFixes: Boolean(e.disableFixes)
          }
        }(n, o)
        if ("string" === typeof e) {
          i.lastSourceCode = null
          r = e
        } else {
          i.lastSourceCode = e
          r = e.text
        }
        var /* [auto-meaningful-name] */Espree = "espree"
        var c = p
        if ("object" === typeof o.parser && null !== o.parser) {
          Espree = o.parser.filePath
          c = o.parser.definition
        } else if ("string" === typeof o.parser) {
          if (!i.parserMap.has(o.parser)) {
            return [
              {
                ruleId: null,
                fatal: true,
                severity: 2,
                message: "Configured parser '".concat(o.parser, "' was not found."),
                line: 0,
                column: 0
              }
            ]
          }
          Espree = o.parser
          c = i.parserMap.get(o.parser)
        }
        var f
        var g
        var y = a.allowInlineConfig && !a.warnInlineConfig ? function (e) {
          var t
          var n
          for (L.lastIndex = 0; t = L.exec(e);) {
            n = Object.assign(n || {}, F.parseListConfig(t[1]))
          }
          return n
        }(r) : {}
        var b = Object.assign({
          builtin: true
        }, o.env, y)
        var E = Object.keys(b).filter(function (e) {
          return b[e]
        }).map(function (e) {
          return function (e, t) {
            return e.lastConfigArray && e.lastConfigArray.pluginEnvironments.get(t) || A.get(t) || null
          }(i, e)
        }).filter(function (e) {
          return e
        })
        var C = function (e, t, n) {
          var /* [auto-meaningful-name] */o$ecmaVersion
          var i = n.filter(function (e) {
            return e.parserOptions
          }).reduce(function (e, t) {
            return _.merge(e, t.parserOptions)
          }, {})
          var o = _.merge(i, t || {})
          if ("module" === o.sourceType) {
            o.ecmaFeatures = Object.assign({}, o.ecmaFeatures, {
              globalReturn: false
            })
          }
          o.ecmaVersion = (o$ecmaVersion = o.ecmaVersion) >= 2015 ? o$ecmaVersion - 2009 : o$ecmaVersion
          return o
        }(0, o.parserOptions || {}, E)
        f = o.globals || {}
        g = E
        var O = Object.assign.apply(Object, [{}].concat(u(g.filter(function (e) {
          return e.globals
        }).map(function (e) {
          return e.globals
        })), [f]))
        var k = o.settings || {}
        if (i.lastSourceCode) {
          if (!i.lastSourceCode.scopeManager) {
            i.lastSourceCode = new require$_2292_index$SourceCode({
              text: i.lastSourceCode.text,
              ast: i.lastSourceCode.ast,
              parserServices: i.lastSourceCode.parserServices,
              visitorKeys: i.lastSourceCode.visitorKeys,
              scopeManager: U(i.lastSourceCode.ast, C)
            })
          }
        } else {
          var S = function (e, t, n, r) {
            var i = function (e) {
              return 65279 === e.charCodeAt(0) ? e.slice(1) : e
            }(e).replace(v.shebangPattern, function (e, t) {
              return "//".concat(t)
            })
            var o = Object.assign({}, n, {
              loc: true,
              range: true,
              raw: true,
              tokens: true,
              comment: true,
              eslintVisitorKeys: true,
              eslintScopeManager: true,
              filePath: r
            })
            try {
              var a = "function" === typeof t.parseForESLint ? t.parseForESLint(i, o) : {
                ast: t.parse(i, o)
              }
              var /* [auto-meaningful-name] */a$ast = a.ast
              var c = a.services || {}
              var u = a.visitorKeys || h.KEYS
              var l = a.scopeManager || U(a$ast, o, u)
              return {
                success: true,
                sourceCode: new require$_2292_index$SourceCode({
                  text: e,
                  ast: a$ast,
                  parserServices: c,
                  scopeManager: l,
                  visitorKeys: u
                })
              }
            } catch (d) {
              var f = "Parsing error: ".concat(d.message.replace(/^line [0-9]+:/i, "").trim())
              R("%s\n%s", f, d.stack)
              return {
                success: false,
                error: {
                  ruleId: null,
                  fatal: true,
                  severity: 2,
                  message: f,
                  line: d.lineNumber,
                  column: d.column
                }
              }
            }
          }(r, c, C, a.filename)
          if (!S.success) {
            return [S.error]
          }
          i.lastSourceCode = S.sourceCode
        }
        var /* [auto-meaningful-name] */i$lastSourceCode = i.lastSourceCode
        var B = a.allowInlineConfig ? M(a.filename, i$lastSourceCode.ast, function (e) {
          return Q(i, e)
        }, a.warnInlineConfig) : {
          configuredRules: {},
          enabledGlobals: {},
          exportedVariables: {},
          problems: [],
          disableDirectives: []
        }
        !function (e, t, n) {
          var r
          var /* [auto-meaningful-name] */n$exportedVariables = n.exportedVariables
          var /* [auto-meaningful-name] */n$enabledGlobals = n.enabledGlobals
          var a = l(new Set([].concat(u(Object.keys(t)), u(Object.keys(n$enabledGlobals)))))
          try {
            for (a.s(); !(r = a.n()).done;) {
              var /* [auto-meaningful-name] */r$value = r.value
              var c = undefined === t[r$value] ? undefined : m.normalizeConfigGlobal(t[r$value])
              var f = n$enabledGlobals[r$value] && n$enabledGlobals[r$value].value || c
              var h = n$enabledGlobals[r$value] && n$enabledGlobals[r$value].comments
              if ("off" !== f) {
                var p = e.set.get(r$value)
                if (!p) {
                  p = new d.Variable(r$value, e)
                  e.variables.push(p)
                  e.set.set(r$value, p)
                }
                p.eslintImplicitGlobalSetting = c
                p.eslintExplicitGlobal = undefined !== h
                p.eslintExplicitGlobalComments = h
                p.writeable = "writable" === f
              }
            }
          } catch (_) {
            a.e(_)
          } finally {
            a.f()
          }
          Object.keys(n$exportedVariables).forEach(function (t) {
            var n = e.set.get(t)
            if (n) {
              n.eslintUsed = true
            }
          })
          e.through = e.through.filter(function (t) {
            var /* [auto-meaningful-name] */t$identifier$name = t.identifier.name
            var r = e.set.get(t$identifier$name)
            return !r || (t.resolved = r, r.references.push(t), false)
          })
        }(i$lastSourceCode.scopeManager.scopes[0], O, {
          exportedVariables: B.exportedVariables,
          enabledGlobals: B.enabledGlobals
        })
        var D
        var I = Object.assign({}, o.rules, B.configuredRules)
        try {
          D = z(i$lastSourceCode, I, function (e) {
            return Q(i, e)
          }, C, Espree, k, a.filename, a.disableFixes, i.cwd)
        } catch (N) {
          N.message += "\nOccurred while linting ".concat(a.filename)
          R("An error occurred while traversing")
          R("Filename:", a.filename)
          if (N.currentNode) {
            var /* [auto-meaningful-name] */N$currentNode$loc$start$line = N.currentNode.loc.start.line
            R("Line:", N$currentNode$loc$start$line)
            N.message += ":".concat(N$currentNode$loc$start$line)
          }
          R("Parser Options:", C)
          R("Parser Path:", Espree)
          R("Settings:", k)
          throw N
        }
        return x({
          directives: B.disableDirectives,
          problems: D.concat(B.problems).sort(function (e, t) {
            return e.line - t.line || e.column - t.column
          }),
          reportUnusedDisableDirectives: a.reportUnusedDisableDirectives
        })
      }
    }, {
      key: "verify",
      value: function (e, t, n) {
        R("Verify")
        var r = "string" === typeof n ? {
          filename: n
        } : n || {}
        return t && "function" === typeof t.extractConfig ? this._verifyWithConfigArray(e, t, r) : r.preprocess || r.postprocess ? this._verifyWithProcessor(e, t, r) : this._verifyWithoutProcessors(e, t, r)
      }
    }, {
      key: "_verifyWithConfigArray",
      value: function (e, t, n) {
        R("With ConfigArray: %s", n.filename)
        K.get(this).lastConfigArray = t
        var r = t.extractConfig(n.filename)
        var o = r.processor && t.pluginProcessors.get(r.processor)
        if (o) {
          R("Apply the processor: %o", r.processor)
          var /* [auto-meaningful-name] */o$preprocess = o.preprocess
          var /* [auto-meaningful-name] */o$postprocess = o.postprocess
          var /* [auto-meaningful-name] */o$supportsAutofix = o.supportsAutofix
          var u = n.disableFixes || !o$supportsAutofix
          return this._verifyWithProcessor(e, r, i(i({}, n), {}, {
            disableFixes: u,
            postprocess: o$postprocess,
            preprocess: o$preprocess
          }), t)
        }
        return this._verifyWithoutProcessors(e, r, n)
      }
    }, {
      key: "_verifyWithProcessor",
      value: function (e, t, n, r) {
        var o = this
        var a = n.filename || "<input>"
        var s = j(a)
        var c = function (e) {
          return "object" === typeof e ? (e.hasBOM ? "﻿" : "") + e.text : String(e)
        }(e)
        var u = n.preprocess || function (e) {
          return [e]
        }
        var l = n.postprocess || _.flatten
        var d = n.filterCodeBlock || function (e) {
          return e.endsWith(".js")
        }
        var h = f.extname(a)
        return l(u(c, s).map(function (e, s) {
          R("A code block was found: %o", e.filename || "(unnamed)")
          if ("string" === typeof e) {
            return o._verifyWithoutProcessors(e, t, n)
          }
          var /* [auto-meaningful-name] */e$text = e.text
          var u = f.join(a, "".concat(s, "_").concat(e.filename))
          return d(u, e$text) ? r && f.extname(u) !== h ? (R("Resolving configuration again because the file extension was changed."), o._verifyWithConfigArray(e$text, r, i(i({}, n), {}, {
            filename: u
          }))) : o._verifyWithoutProcessors(e$text, t, i(i({}, n), {}, {
            filename: u
          })) : (R("This code block was skipped."), [])
        }), s)
      }
    }, {
      key: "getSourceCode",
      value: function () {
        return K.get(this).lastSourceCode
      }
    }, {
      key: "defineRule",
      value: function (e, t) {
        K.get(this).ruleMap.define(e, t)
      }
    }, {
      key: "defineRules",
      value: function (e) {
        var t = this
        Object.getOwnPropertyNames(e).forEach(function (n) {
          t.defineRule(n, e[n])
        })
      }
    }, {
      key: "getRules",
      value: function () {
        var e = K.get(this)
        var /* [auto-meaningful-name] */e$lastConfigArray = e.lastConfigArray
        var /* [auto-meaningful-name] */e$ruleMap = e.ruleMap
        return new Map(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.delegateYield(e$ruleMap, "t0", 1)
                case 1:
                  if (!e$lastConfigArray) {
                    e.next = 3
                    break
                  }
                  return e.delegateYield(e$lastConfigArray.pluginRules, "t1", 3)
                case 3:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        })())
      }
    }, {
      key: "defineParser",
      value: function (e, t) {
        K.get(this).parserMap.set(e, t)
      }
    }, {
      key: "verifyAndFix",
      value: function (e, t, n) {
        var r
        var i = []
        var o = false
        var a = 0
        var s = e
        var c = n && n.filename || "".concat(e.slice(0, 10), "...")
        var u = !n || "undefined" === typeof n.fix || n.fix
        do {
          a++
          R("Linting code for ".concat(c, " (pass ").concat(a, ")"))
          i = this.verify(s, t, n)
          R("Generating fixed text for ".concat(c, " (pass ").concat(a, ")"))
          r = B.applyFixes(s, i, u)
          if (1 === i.length && i[0].fatal) {
            break
          }
          o = o || r.fixed
          s = r.output
        } while (r.fixed && a < 10)
        if (r.fixed) {
          r.messages = this.verify(s, t, n)
        }
        r.fixed = o
        r.output = s
        return r
      }
    }
  ], [
    {
      key: "version",
      get: function () {
        return g.version
      }
    }
  ])
  return e
}()
module.exports = {
  Linter: X,
  getLinterInternalSlots: function (e) {
    return K.get(e)
  }
}
