"use strict";

var r = require("../../../../36/2668/220");
var i = require("../../../../36/2668/230");
var o = require("./1299");
var a = require("../../../../38/607/356");
var s = require("../../../../38/607/357/index");
var c = require("../../../../38/607/624/index");
var u = require("./1344").isCommentToken;
var l = require("./2256/index");
var f = require("../../965");
var d = require("../../1343");
var h = require("../../../../31/index");
function p(e, t, n, r) {
  if (function (e, t) {
    return e.range[0] <= t.range[0] && e.range[1] >= t.range[0] || t.range[0] <= e.range[0] && t.range[1] >= e.range[0];
  }(t, n)) {
    return !1;
  }
  for (var i = t.range[1] <= n.range[0] ? [t, n] : [n, t], o = c(i, 2), a = o[0], s = o[1], u = e.getLastToken(a) || a, l = e.getFirstToken(s) || s, f = u; f !== l;) {
    var d = e.getTokenAfter(f, {
      includeComments: !0
    });
    if (f.range[1] !== d.range[0] || r && d !== l && "JSXText" === d.type && /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/.test(d.value)) {
      return !0;
    }
    f = d;
  }
  return !1;
}
var _ = function (e) {
  a(n, e);
  var t = s(n);
  function n(e, i) {
    var a;
    var s;
    var c;
    var u;
    var l;
    var h;
    r(this, n);
    if ("string" === typeof e) {
      s = e;
      c = i;
    } else {
      if ("object" === typeof e && null !== e) {
        s = e.text;
        c = e.ast;
        u = e.parserServices;
        l = e.scopeManager;
        h = e.visitorKeys;
      }
    }
    (function (e) {
      if (!e.tokens) {
        throw new Error("AST is missing the tokens array.");
      }
      if (!e.comments) {
        throw new Error("AST is missing the comments array.");
      }
      if (!e.loc) {
        throw new Error("AST is missing location information.");
      }
      if (!e.range) {
        throw new Error("AST is missing range information");
      }
    })(c);
    (a = t.call(this, c.tokens, c.comments)).hasBOM = 65279 === s.charCodeAt(0);
    a.text = a.hasBOM ? s.slice(1) : s;
    a.ast = c;
    a.parserServices = u || {};
    a.scopeManager = l || null;
    a.visitorKeys = h || d.DEFAULT_VISITOR_KEYS;
    var p = a.text.match(f.shebangPattern);
    if (p && c.comments.length && c.comments[0].value === p[1]) {
      c.comments[0].type = "Shebang";
    }
    a.tokensAndComments = function (e, t) {
      for (var n = [], r = 0, i = 0; r < e.length || i < t.length;) {
        if (i >= t.length || r < e.length && e[r].range[0] < t[i].range[0]) {
          n.push(e[r++]);
        } else {
          n.push(t[i++]);
        }
      }
      return n;
    }(c.tokens, c.comments);
    a.lines = [];
    a.lineStartIndices = [0];
    for (var _, A = f.createGlobalLinebreakMatcher(); _ = A.exec(a.text);) {
      a.lines.push(a.text.slice(a.lineStartIndices[a.lineStartIndices.length - 1], _.index));
      a.lineStartIndices.push(_.index + _[0].length);
    }
    a.lines.push(a.text.slice(a.lineStartIndices[a.lineStartIndices.length - 1]));
    a._commentCache = new WeakMap();
    Object.freeze(o(a));
    Object.freeze(a.lines);
    return a;
  }
  i(n, [{
    key: "getText",
    value: function (e, t, n) {
      return e ? this.text.slice(Math.max(e.range[0] - (t || 0), 0), e.range[1] + (n || 0)) : this.text;
    }
  }, {
    key: "getLines",
    value: function () {
      return this.lines;
    }
  }, {
    key: "getAllComments",
    value: function () {
      return this.ast.comments;
    }
  }, {
    key: "getComments",
    value: function (e) {
      if (this._commentCache.has(e)) {
        return this._commentCache.get(e);
      }
      var t = {
        leading: [],
        trailing: []
      };
      if ("Program" === e.type) {
        if (0 === e.body.length) {
          t.leading = e.comments;
        }
      } else {
        if (("BlockStatement" === e.type || "ClassBody" === e.type) && 0 === e.body.length || "ObjectExpression" === e.type && 0 === e.properties.length || "ArrayExpression" === e.type && 0 === e.elements.length || "SwitchStatement" === e.type && 0 === e.cases.length) {
          t.trailing = this.getTokens(e, {
            includeComments: !0,
            filter: u
          });
        }
        for (var n = this.getTokenBefore(e, {
          includeComments: !0
        }); n && u(n) && !(e.parent && n.start < e.parent.start);) {
          t.leading.push(n);
          n = this.getTokenBefore(n, {
            includeComments: !0
          });
        }
        for (t.leading.reverse(), n = this.getTokenAfter(e, {
          includeComments: !0
        }); n && u(n) && !(e.parent && n.end > e.parent.end);) {
          t.trailing.push(n);
          n = this.getTokenAfter(n, {
            includeComments: !0
          });
        }
      }
      this._commentCache.set(e, t);
      return t;
    }
  }, {
    key: "getJSDocComment",
    value: function (e) {
      var t;
      var n = this;
      var r = function (e) {
        var t = n.getTokenBefore(e, {
          includeComments: !0
        });
        return t && u(t) && "Block" === t.type && "*" === t.value.charAt(0) && e.loc.start.line - t.loc.end.line <= 1 ? t : null;
      };
      var i = e.parent;
      switch (e.type) {
        case "ClassDeclaration":
        case "FunctionDeclaration":
          return r("ExportDefaultDeclaration" === (t = i).type || "ExportNamedDeclaration" === t.type || "ExportAllDeclaration" === t.type || "ExportSpecifier" === t.type ? i : e);
        case "ClassExpression":
          return r(i.parent);
        case "ArrowFunctionExpression":
        case "FunctionExpression":
          if ("CallExpression" !== i.type && "NewExpression" !== i.type) {
            for (; !this.getCommentsBefore(i).length && !/Function/.test(i.type) && "MethodDefinition" !== i.type && "Property" !== i.type && (i = i.parent);) {
              ;
            }
            if (i && "FunctionDeclaration" !== i.type && "Program" !== i.type) {
              return r(i);
            }
          }
          return r(e);
        default:
          return null;
      }
    }
  }, {
    key: "getNodeByRangeIndex",
    value: function (e) {
      var t = null;
      d.traverse(this.ast, {
        visitorKeys: this.visitorKeys,
        enter: function (n) {
          if (n.range[0] <= e && e < n.range[1]) {
            t = n;
          } else {
            this.skip();
          }
        },
        leave: function (e) {
          if (e === t) {
            this.break();
          }
        }
      });
      return t;
    }
  }, {
    key: "isSpaceBetween",
    value: function (e, t) {
      return p(this, e, t, !1);
    }
  }, {
    key: "isSpaceBetweenTokens",
    value: function (e, t) {
      return p(this, e, t, !0);
    }
  }, {
    key: "getLocFromIndex",
    value: function (e) {
      if ("number" !== typeof e) {
        throw new TypeError("Expected `index` to be a number.");
      }
      if (e < 0 || e > this.text.length) {
        throw new RangeError("Index out of range (requested index ".concat(e, ", but source text has length ").concat(this.text.length, ")."));
      }
      if (e === this.text.length) {
        return {
          line: this.lines.length,
          column: this.lines[this.lines.length - 1].length
        };
      }
      var t = h.sortedLastIndex(this.lineStartIndices, e);
      return {
        line: t,
        column: e - this.lineStartIndices[t - 1]
      };
    }
  }, {
    key: "getIndexFromLoc",
    value: function (e) {
      if ("object" !== typeof e || "number" !== typeof e.line || "number" !== typeof e.column) {
        throw new TypeError("Expected `loc` to be an object with numeric `line` and `column` properties.");
      }
      if (e.line <= 0) {
        throw new RangeError("Line number out of range (line ".concat(e.line, " requested). Line numbers should be 1-based."));
      }
      if (e.line > this.lineStartIndices.length) {
        throw new RangeError("Line number out of range (line ".concat(e.line, " requested, but only ").concat(this.lineStartIndices.length, " lines present)."));
      }
      var t = this.lineStartIndices[e.line - 1];
      var n = e.line === this.lineStartIndices.length ? this.text.length : this.lineStartIndices[e.line];
      var r = t + e.column;
      if (e.line === this.lineStartIndices.length && r > n || e.line < this.lineStartIndices.length && r >= n) {
        throw new RangeError("Column number out of range (column ".concat(e.column, " requested, but the length of line ").concat(e.line, " is ").concat(n - t, ")."));
      }
      return r;
    }
  }], [{
    key: "splitLines",
    value: function (e) {
      return e.split(f.createGlobalLinebreakMatcher());
    }
  }]);
  return n;
}(l);
module.exports = _;