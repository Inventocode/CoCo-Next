"use strict";

(function (t) {
  var r = require("../../1/index");
  var i = require("./842");
  var o = require("../../36/2668/220");
  var a = require("../../36/2668/230");
  var s = require("../../38/607/1050");
  var c = require("../../38/607/624/index");
  var u = require("../../38/607/806/index");
  var l = require("../../38/607/494");
  var f = require("./1187");
  var d = require("./2189/index");
  var h = require("./766/index");
  var p = require("./1331/index");
  var _ = require("../../31/index");
  var A = require("./1333/index");
  var g = require("./2209");
  var v = require("./965");
  var m = require("./1112");
  var y = require("./2210/index");
  var b = require("./1343");
  var w = require("./2254/index").SourceCode;
  var E = require("./2265/index");
  var x = require("./2269");
  var C = require("./2270/index");
  var O = require("./2281/index");
  var k = require("./2283/index");
  var S = require("./1121");
  var T = require("./2286");
  var B = require("./2287");
  var D = require("./2288");
  var I = require("./2289");
  var F = require("./807/index")("eslint:linter");
  var R = new C();
  var P = {
    start: {
      line: 1,
      column: 0
    },
    end: {
      line: 1,
      column: 1
    }
  };
  function N(e) {
    var t = e.ruleId;
    var n = void 0 === t ? null : t;
    var r = e.loc;
    var i = void 0 === r ? P : r;
    var o = e.message;
    var a = void 0 === o ? function (e) {
      return Object.prototype.hasOwnProperty.call(I.rules, e) ? "Rule '".concat(e, "' was removed and replaced by: ").concat(I.rules[e].join(", ")) : "Definition for rule '".concat(e, "' was not found.");
    }(e.ruleId) : o;
    var s = e.severity;
    var c = void 0 === s ? 2 : s;
    return {
      ruleId: n,
      message: a,
      line: i.start.line,
      column: i.start.column + 1,
      endLine: i.end.line,
      endColumn: i.end.column + 1,
      severity: c,
      nodeType: null
    };
  }
  function M(e, t, n, r) {
    var i = {};
    var o = Object.create(null);
    var a = {};
    var s = [];
    var f = [];
    t.comments.filter(function (e) {
      return "Shebang" !== e.type;
    }).forEach(function (e) {
      var t = e.value.trim();
      var d = /^(eslint(?:\x2Denv|\x2Denable|\x2Ddisable(?:(?:\x2Dnext)?\x2Dline)?)?|exported|globals?)(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|$)/.exec(t);
      if (d) {
        var h = d[1];
        var p = /^eslint\x2Ddisable\x2D(next\x2D)?line$/.test(h);
        if ("Line" !== e.type || p) {
          if (r) {
            var _ = "Block" === e.type ? "/*".concat(h, "*/") : "//".concat(h);
            s.push(N({
              ruleId: null,
              message: "'".concat(_, "' has no effect because you have 'noInlineConfig' setting in ").concat(r, "."),
              loc: e.loc,
              severity: 1
            }));
          } else if (p && e.loc.start.line !== e.loc.end.line) {
            var A = "".concat(h, " comment should not span multiple lines.");
            s.push(N({
              ruleId: null,
              message: A,
              loc: e.loc
            }));
          } else {
            var g = t.slice(d.index + h.length);
            switch (h) {
              case "eslint-disable":
              case "eslint-enable":
              case "eslint-disable-next-line":
              case "eslint-disable-line":
                var v = function (e) {
                    var t;
                    var n = e.type;
                    var r = e.loc;
                    var i = e.value;
                    var o = e.ruleMapper;
                    var a = Object.keys(R.parseListConfig(i));
                    var s = a.length ? a : [null];
                    var c = {
                      directives: [],
                      directiveProblems: []
                    };
                    var u = l(s);
                    try {
                      for (u.s(); !(t = u.n()).done;) {
                        var f = t.value;
                        if (null === f || null !== o(f)) {
                          c.directives.push({
                            type: n,
                            line: r.start.line,
                            column: r.start.column + 1,
                            ruleId: f
                          });
                        } else {
                          c.directiveProblems.push(N({
                            ruleId: f,
                            loc: r
                          }));
                        }
                      }
                    } catch (d) {
                      u.e(d);
                    } finally {
                      u.f();
                    }
                    return c;
                  }({
                    type: h.slice("eslint-".length),
                    loc: e.loc,
                    value: g,
                    ruleMapper: n
                  }),
                  b = v.directives,
                  w = v.directiveProblems;
                f.push.apply(f, u(b));
                s.push.apply(s, u(w));
                break;
              case "exported":
                Object.assign(a, R.parseStringConfig(g, e));
                break;
              case "globals":
              case "global":
                for (var E = 0, x = Object.entries(R.parseStringConfig(g, e)); E < x.length; E++) {
                  var C = c(x[E], 2);
                  var O = C[0];
                  var k = C[1].value;
                  var S = void 0;
                  try {
                    S = m.normalizeConfigGlobal(k);
                  } catch (B) {
                    s.push(N({
                      ruleId: null,
                      loc: e.loc,
                      message: B.message
                    }));
                    continue;
                  }
                  if (o[O]) {
                    o[O].comments.push(e);
                    o[O].value = S;
                  } else {
                    o[O] = {
                      comments: [e],
                      value: S
                    };
                  }
                }
                break;
              case "eslint":
                var T = R.parseJsonConfig(g, e.loc);
                if (T.success) {
                  Object.keys(T.config).forEach(function (t) {
                    var r = n(t);
                    var o = T.config[t];
                    if (null !== r) {
                      try {
                        y.validateRuleOptions(r, t, o);
                      } catch (B) {
                        return void s.push(N({
                          ruleId: t,
                          message: B.message,
                          loc: e.loc
                        }));
                      }
                      i[t] = o;
                    } else {
                      s.push(N({
                        ruleId: t,
                        loc: e.loc
                      }));
                    }
                  });
                } else {
                  s.push(T.error);
                }
            }
          }
        }
      }
    });
    return {
      configuredRules: i,
      enabledGlobals: o,
      exportedVariables: a,
      problems: s,
      disableDirectives: f
    };
  }
  var j = /\/\*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*eslint\x2Denv[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?)\*\//g;
  function L(e) {
    var t = e.split(f.sep);
    var n = t.lastIndexOf("<text>");
    return -1 === n ? e : t.slice(n).join(f.sep);
  }
  function U(e, t, n) {
    var r = t.ecmaFeatures || {};
    var i = t.ecmaVersion || 5;
    return d.analyze(e, {
      ignoreEval: !0,
      nodejsScope: r.globalReturn,
      impliedStrict: r.impliedStrict,
      ecmaVersion: i,
      sourceType: t.sourceType || "script",
      childVisitorKeys: n || h.KEYS,
      fallback: b.getKeys
    });
  }
  function H(e, t) {
    for (var n = "Program" !== t.type, r = t; r; r = r.parent) {
      var i = e.acquire(r, n);
      if (i) {
        return "function-expression-name" === i.type ? i.childScopes[0] : i;
      }
    }
    return e.scopes[0];
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
  };
  var G = Object.freeze(Object.keys(V).reduce(function (e, t) {
    return Object.assign(e, s({}, t, function () {
      var e;
      return (e = this.getSourceCode())[V[t]].apply(e, arguments);
    }));
  }, {}));
  function z(e, t, n, r, i, o, a, s, c) {
    var u = T();
    var l = [];
    var f = e.ast;
    b.traverse(e.ast, {
      enter: function (e, t) {
        e.parent = t;
        l.push({
          isEntering: !0,
          node: e
        });
      },
      leave: function (e) {
        l.push({
          isEntering: !1,
          node: e
        });
      },
      visitorKeys: e.visitorKeys
    });
    var d = Object.freeze(Object.assign(Object.create(G), {
      getAncestors: function () {
        return function (e) {
          for (var t = [], n = e.parent; n; n = n.parent) {
            t.push(n);
          }
          return t.reverse();
        }(f);
      },
      getDeclaredVariables: e.scopeManager.getDeclaredVariables.bind(e.scopeManager),
      getCwd: function () {
        return c;
      },
      getFilename: function () {
        return a;
      },
      getScope: function () {
        return H(e.scopeManager, f);
      },
      getSourceCode: function () {
        return e;
      },
      markVariableAsUsed: function (t) {
        return function (e, t, n, r) {
          for (var i = n.ecmaFeatures && n.ecmaFeatures.globalReturn || "module" === n.sourceType, o = H(e, t), a = "global" === o.type && i ? o.childScopes[0] : o; a; a = a.upper) {
            var s = a.variables.find(function (e) {
              return e.name === r;
            });
            if (s) {
              s.eslintUsed = !0;
              return !0;
            }
          }
          return !1;
        }(e.scopeManager, f, r, t);
      },
      parserOptions: r,
      parserPath: i,
      parserServices: e.parserServices,
      settings: o
    }));
    var h = [];
    Object.keys(t).forEach(function (r) {
      var i = m.getRuleSeverity(t[r]);
      if (0 !== i) {
        var o = n(r);
        if (null !== o) {
          var a;
          var c = o.meta && o.meta.messages;
          var l = null;
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
                });
              }
              var t = l.apply(void 0, arguments);
              if (t.fix && o.meta && !o.meta.fixable) {
                throw new Error("Fixable rules should export a `meta.fixable` property.");
              }
              h.push(t);
            }
          }));
          var p = function (e, t) {
            try {
              return e.create(t);
            } catch (n) {
              throw n.message = "Error while loading rule '".concat(t.id, "': ").concat(n.message), n;
            }
          }(o, f);
          Object.keys(p).forEach(function (e) {
            u.on(e, D.enabled ? D.time(r, p[e]) : p[e]);
          });
        } else {
          h.push(N({
            ruleId: r
          }));
        }
      }
    });
    var p = new E(new O(u));
    l.forEach(function (e) {
      f = e.node;
      try {
        if (e.isEntering) {
          p.enterNode(f);
        } else {
          p.leaveNode(f);
        }
      } catch (t) {
        throw t.currentNode = f, t;
      }
    });
    return h;
  }
  function Q(e, t) {
    return e.lastConfigArray && e.lastConfigArray.pluginRules.get(t) || e.ruleMap.get(t);
  }
  function W(e) {
    return e || ("object" === typeof t ? t.cwd() : void 0);
  }
  var K = new WeakMap();
  var X = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var n = t.cwd;
      o(this, e);
      K.set(this, {
        cwd: W(n),
        lastConfigArray: null,
        lastSourceCode: null,
        parserMap: new Map([["espree", p]]),
        ruleMap: new S()
      });
      this.version = g.version;
    }
    a(e, [{
      key: "_verifyWithoutProcessors",
      value: function (e, t, n) {
        var r;
        var i = K.get(this);
        var o = t || {};
        var a = function (e, t) {
          var n = !0 === t.noInlineConfig;
          var r = !1 === e.allowInlineConfig;
          var i = t.configNameOfNoInlineConfig ? " (".concat(t.configNameOfNoInlineConfig, ")") : "";
          var o = e.reportUnusedDisableDirectives;
          if ("boolean" === typeof o) {
            o = o ? "error" : "off";
          }
          if ("string" !== typeof o) {
            o = t.reportUnusedDisableDirectives ? "warn" : "off";
          }
          return {
            filename: L(e.filename || "<input>"),
            allowInlineConfig: !r,
            warnInlineConfig: n && !r ? "your config".concat(i) : null,
            reportUnusedDisableDirectives: o,
            disableFixes: Boolean(e.disableFixes)
          };
        }(n, o);
        if ("string" === typeof e) {
          i.lastSourceCode = null;
          r = e;
        } else {
          i.lastSourceCode = e;
          r = e.text;
        }
        var s = "espree";
        var c = p;
        if ("object" === typeof o.parser && null !== o.parser) {
          s = o.parser.filePath;
          c = o.parser.definition;
        } else if ("string" === typeof o.parser) {
          if (!i.parserMap.has(o.parser)) {
            return [{
              ruleId: null,
              fatal: !0,
              severity: 2,
              message: "Configured parser '".concat(o.parser, "' was not found."),
              line: 0,
              column: 0
            }];
          }
          s = o.parser;
          c = i.parserMap.get(o.parser);
        }
        var f;
        var g;
        var y = a.allowInlineConfig && !a.warnInlineConfig ? function (e) {
          var t;
          var n;
          for (j.lastIndex = 0; t = j.exec(e);) {
            n = Object.assign(n || {}, R.parseListConfig(t[1]));
          }
          return n;
        }(r) : {};
        var b = Object.assign({
          builtin: !0
        }, o.env, y);
        var E = Object.keys(b).filter(function (e) {
          return b[e];
        }).map(function (e) {
          return function (e, t) {
            return e.lastConfigArray && e.lastConfigArray.pluginEnvironments.get(t) || A.get(t) || null;
          }(i, e);
        }).filter(function (e) {
          return e;
        });
        var C = function (e, t, n) {
          var r;
          var i = n.filter(function (e) {
            return e.parserOptions;
          }).reduce(function (e, t) {
            return _.merge(e, t.parserOptions);
          }, {});
          var o = _.merge(i, t || {});
          if ("module" === o.sourceType) {
            o.ecmaFeatures = Object.assign({}, o.ecmaFeatures, {
              globalReturn: !1
            });
          }
          o.ecmaVersion = (r = o.ecmaVersion) >= 2015 ? r - 2009 : r;
          return o;
        }(0, o.parserOptions || {}, E);
        f = o.globals || {};
        g = E;
        var O = Object.assign.apply(Object, [{}].concat(u(g.filter(function (e) {
          return e.globals;
        }).map(function (e) {
          return e.globals;
        })), [f]));
        var k = o.settings || {};
        if (i.lastSourceCode) {
          if (!i.lastSourceCode.scopeManager) {
            i.lastSourceCode = new w({
              text: i.lastSourceCode.text,
              ast: i.lastSourceCode.ast,
              parserServices: i.lastSourceCode.parserServices,
              visitorKeys: i.lastSourceCode.visitorKeys,
              scopeManager: U(i.lastSourceCode.ast, C)
            });
          }
        } else {
          var S = function (e, t, n, r) {
            var i = function (e) {
              return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
            }(e).replace(v.shebangPattern, function (e, t) {
              return "//".concat(t);
            });
            var o = Object.assign({}, n, {
              loc: !0,
              range: !0,
              raw: !0,
              tokens: !0,
              comment: !0,
              eslintVisitorKeys: !0,
              eslintScopeManager: !0,
              filePath: r
            });
            try {
              var a = "function" === typeof t.parseForESLint ? t.parseForESLint(i, o) : {
                ast: t.parse(i, o)
              };
              var s = a.ast;
              var c = a.services || {};
              var u = a.visitorKeys || h.KEYS;
              var l = a.scopeManager || U(s, o, u);
              return {
                success: !0,
                sourceCode: new w({
                  text: e,
                  ast: s,
                  parserServices: c,
                  scopeManager: l,
                  visitorKeys: u
                })
              };
            } catch (d) {
              var f = "Parsing error: ".concat(d.message.replace(/^line [0-9]+:/i, "").trim());
              F("%s\n%s", f, d.stack);
              return {
                success: !1,
                error: {
                  ruleId: null,
                  fatal: !0,
                  severity: 2,
                  message: f,
                  line: d.lineNumber,
                  column: d.column
                }
              };
            }
          }(r, c, C, a.filename);
          if (!S.success) {
            return [S.error];
          }
          i.lastSourceCode = S.sourceCode;
        }
        var T = i.lastSourceCode;
        var B = a.allowInlineConfig ? M(a.filename, T.ast, function (e) {
          return Q(i, e);
        }, a.warnInlineConfig) : {
          configuredRules: {},
          enabledGlobals: {},
          exportedVariables: {},
          problems: [],
          disableDirectives: []
        };
        !function (e, t, n) {
          var r;
          var i = n.exportedVariables;
          var o = n.enabledGlobals;
          var a = l(new Set([].concat(u(Object.keys(t)), u(Object.keys(o)))));
          try {
            for (a.s(); !(r = a.n()).done;) {
              var s = r.value;
              var c = void 0 === t[s] ? void 0 : m.normalizeConfigGlobal(t[s]);
              var f = o[s] && o[s].value || c;
              var h = o[s] && o[s].comments;
              if ("off" !== f) {
                var p = e.set.get(s);
                if (!p) {
                  p = new d.Variable(s, e);
                  e.variables.push(p);
                  e.set.set(s, p);
                }
                p.eslintImplicitGlobalSetting = c;
                p.eslintExplicitGlobal = void 0 !== h;
                p.eslintExplicitGlobalComments = h;
                p.writeable = "writable" === f;
              }
            }
          } catch (_) {
            a.e(_);
          } finally {
            a.f();
          }
          Object.keys(i).forEach(function (t) {
            var n = e.set.get(t);
            if (n) {
              n.eslintUsed = !0;
            }
          });
          e.through = e.through.filter(function (t) {
            var n = t.identifier.name;
            var r = e.set.get(n);
            return !r || (t.resolved = r, r.references.push(t), !1);
          });
        }(T.scopeManager.scopes[0], O, {
          exportedVariables: B.exportedVariables,
          enabledGlobals: B.enabledGlobals
        });
        var D;
        var I = Object.assign({}, o.rules, B.configuredRules);
        try {
          D = z(T, I, function (e) {
            return Q(i, e);
          }, C, s, k, a.filename, a.disableFixes, i.cwd);
        } catch (N) {
          N.message += "\nOccurred while linting ".concat(a.filename);
          F("An error occurred while traversing");
          F("Filename:", a.filename);
          if (N.currentNode) {
            var P = N.currentNode.loc.start.line;
            F("Line:", P);
            N.message += ":".concat(P);
          }
          throw F("Parser Options:", C), F("Parser Path:", s), F("Settings:", k), N;
        }
        return x({
          directives: B.disableDirectives,
          problems: D.concat(B.problems).sort(function (e, t) {
            return e.line - t.line || e.column - t.column;
          }),
          reportUnusedDisableDirectives: a.reportUnusedDisableDirectives
        });
      }
    }, {
      key: "verify",
      value: function (e, t, n) {
        F("Verify");
        var r = "string" === typeof n ? {
          filename: n
        } : n || {};
        return t && "function" === typeof t.extractConfig ? this._verifyWithConfigArray(e, t, r) : r.preprocess || r.postprocess ? this._verifyWithProcessor(e, t, r) : this._verifyWithoutProcessors(e, t, r);
      }
    }, {
      key: "_verifyWithConfigArray",
      value: function (e, t, n) {
        F("With ConfigArray: %s", n.filename);
        K.get(this).lastConfigArray = t;
        var r = t.extractConfig(n.filename);
        var o = r.processor && t.pluginProcessors.get(r.processor);
        if (o) {
          F("Apply the processor: %o", r.processor);
          var a = o.preprocess;
          var s = o.postprocess;
          var c = o.supportsAutofix;
          var u = n.disableFixes || !c;
          return this._verifyWithProcessor(e, r, i(i({}, n), {}, {
            disableFixes: u,
            postprocess: s,
            preprocess: a
          }), t);
        }
        return this._verifyWithoutProcessors(e, r, n);
      }
    }, {
      key: "_verifyWithProcessor",
      value: function (e, t, n, r) {
        var o = this;
        var a = n.filename || "<input>";
        var s = L(a);
        var c = function (e) {
          return "object" === typeof e ? (e.hasBOM ? "﻿" : "") + e.text : String(e);
        }(e);
        var u = n.preprocess || function (e) {
          return [e];
        };
        var l = n.postprocess || _.flatten;
        var d = n.filterCodeBlock || function (e) {
          return e.endsWith(".js");
        };
        var h = f.extname(a);
        return l(u(c, s).map(function (e, s) {
          F("A code block was found: %o", e.filename || "(unnamed)");
          if ("string" === typeof e) {
            return o._verifyWithoutProcessors(e, t, n);
          }
          var c = e.text;
          var u = f.join(a, "".concat(s, "_").concat(e.filename));
          return d(u, c) ? r && f.extname(u) !== h ? (F("Resolving configuration again because the file extension was changed."), o._verifyWithConfigArray(c, r, i(i({}, n), {}, {
            filename: u
          }))) : o._verifyWithoutProcessors(c, t, i(i({}, n), {}, {
            filename: u
          })) : (F("This code block was skipped."), []);
        }), s);
      }
    }, {
      key: "getSourceCode",
      value: function () {
        return K.get(this).lastSourceCode;
      }
    }, {
      key: "defineRule",
      value: function (e, t) {
        K.get(this).ruleMap.define(e, t);
      }
    }, {
      key: "defineRules",
      value: function (e) {
        var t = this;
        Object.getOwnPropertyNames(e).forEach(function (n) {
          t.defineRule(n, e[n]);
        });
      }
    }, {
      key: "getRules",
      value: function () {
        var e = K.get(this);
        var t = e.lastConfigArray;
        var n = e.ruleMap;
        return new Map(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.delegateYield(n, "t0", 1);
                case 1:
                  if (!t) {
                    e.next = 3;
                    break;
                  }
                  return e.delegateYield(t.pluginRules, "t1", 3);
                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })());
      }
    }, {
      key: "defineParser",
      value: function (e, t) {
        K.get(this).parserMap.set(e, t);
      }
    }, {
      key: "verifyAndFix",
      value: function (e, t, n) {
        var r;
        var i = [];
        var o = !1;
        var a = 0;
        var s = e;
        var c = n && n.filename || "".concat(e.slice(0, 10), "...");
        var u = !n || "undefined" === typeof n.fix || n.fix;
        do {
          a++;
          F("Linting code for ".concat(c, " (pass ").concat(a, ")"));
          i = this.verify(s, t, n);
          F("Generating fixed text for ".concat(c, " (pass ").concat(a, ")"));
          r = B.applyFixes(s, i, u);
          if (1 === i.length && i[0].fatal) {
            break;
          }
          o = o || r.fixed;
          s = r.output;
        } while (r.fixed && a < 10);
        if (r.fixed) {
          r.messages = this.verify(s, t, n);
        }
        r.fixed = o;
        r.output = s;
        return r;
      }
    }], [{
      key: "version",
      get: function () {
        return g.version;
      }
    }]);
    return e;
  }();
  module.exports = {
    Linter: X,
    getLinterInternalSlots: function (e) {
      return K.get(e);
    }
  };
}).call(this, require("../../710/368"));