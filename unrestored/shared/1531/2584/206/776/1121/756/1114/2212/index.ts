"use strict";

var r = require("../../../../../../../../3272/3200/494");
var i = require("./2213/index");
var o = require("../../../../1331/index");
var a = require("../../../../../../31/index");
var s = require("../../../../965");
var c = s.breakableTypePattern;
var u = s.createGlobalLinebreakMatcher;
var l = s.lineBreakPattern;
var f = s.shebangPattern;
var d = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/;
var h = /^(?:DoWhile|For|ForIn|ForOf|While)Statement$/;
var p = /Array$/;
var _ = /^(?:every|filter|find|findIndex|forEach|map|some)$/;
var A = /^(?:bind|call|apply)$/;
var g = /^[\t-\r \*\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*@this/m;
var v = new Set(["\r\n", "\r", "\n", "\u2028", "\u2029"]);
var m = new Set(["Program", "BlockStatement", "SwitchCase"]);
var y = /^(0|[1-9][0-9]*)$/;
var b = /^(?:(?:(?!\\)[\s\S])|\\(?:(?![0-7])[\s\S])|\\0(?![0-9]))*\\(?:[1-7]|0[0-9])/;
function w(e, t, n) {
  var r = e.identifier;
  var i = 0 === t || n[t - 1].identifier !== r;
  return r && !1 === e.init && e.isWrite() && i;
}
function E(e) {
  return e[0] !== e[0].toLocaleLowerCase();
}
function x(e) {
  return e.id && E(e.id.name);
}
function C(e) {
  for (var t = e; t; t = t.parent) {
    if (d.test(t.type)) {
      return t;
    }
  }
  return null;
}
function O(e) {
  return Boolean(e && d.test(e.type));
}
function k(e) {
  return Boolean(e && h.test(e.type));
}
function S(t) {
  return module.exports.isNullLiteral(t) || "Identifier" === t.type && "undefined" === t.name || "UnaryExpression" === t.type && "void" === t.operator;
}
function T(e) {
  return "CallExpression" === e.parent.type && e.parent.callee === e;
}
function B(e) {
  return "MemberExpression" === e.type && "Identifier" === e.object.type && "Reflect" === e.object.name && "Identifier" === e.property.type && "apply" === e.property.name && !1 === e.computed;
}
function D(e) {
  return "MemberExpression" === e.type && "Identifier" === e.object.type && p.test(e.object.name) && "Identifier" === e.property.type && "from" === e.property.name && !1 === e.computed;
}
function I(e) {
  for (var t = e; "MemberExpression" === t.type && !t.computed; t = t.property) {
    if ("Identifier" === t.property.type) {
      return _.test(t.property.name);
    }
  }
  return !1;
}
function F(e) {
  return function (t) {
    return !e(t);
  };
}
function R(e, t) {
  var n = t.getJSDocComment(e);
  return !(!n || !g.test(n.value)) || t.getCommentsBefore(e).some(function (e) {
    return g.test(e.value);
  });
}
function P(e) {
  return "=>" === e.value && "Punctuator" === e.type;
}
function N(e) {
  return "," === e.value && "Punctuator" === e.type;
}
function M(e) {
  return "." === e.value && "Punctuator" === e.type;
}
function j(e) {
  return ";" === e.value && "Punctuator" === e.type;
}
function L(e) {
  return ":" === e.value && "Punctuator" === e.type;
}
function U(e) {
  return "(" === e.value && "Punctuator" === e.type;
}
function H(e) {
  return ")" === e.value && "Punctuator" === e.type;
}
function V(e) {
  return "[" === e.value && "Punctuator" === e.type;
}
function G(e) {
  return "]" === e.value && "Punctuator" === e.type;
}
function z(e) {
  return "{" === e.value && "Punctuator" === e.type;
}
function Q(e) {
  return "}" === e.value && "Punctuator" === e.type;
}
function W(e, t) {
  return e.id ? t.getTokenAfter(e.id, U) : t.getFirstToken(e, U);
}
module.exports = {
  COMMENTS_IGNORE_PATTERN: /^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:eslint|jshint[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|jslint[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|istanbul[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|globals?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|exported[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|jscs)/,
  LINEBREAKS: v,
  LINEBREAK_MATCHER: l,
  SHEBANG_MATCHER: f,
  STATEMENT_LIST_PARENTS: m,
  isTokenOnSameLine: function (e, t) {
    return e.loc.end.line === t.loc.start.line;
  },
  isNullOrUndefined: S,
  isCallee: T,
  isES5Constructor: x,
  getUpperFunction: C,
  isFunction: O,
  isLoop: k,
  isInLoop: function (e) {
    for (var t = e; t && !O(t); t = t.parent) {
      if (k(t)) {
        return !0;
      }
    }
    return !1;
  },
  isArrayFromMethod: D,
  isParenthesised: function (e, t) {
    var n = e.getTokenBefore(t);
    var r = e.getTokenAfter(t);
    return Boolean(n && r) && "(" === n.value && n.range[1] <= t.range[0] && ")" === r.value && r.range[0] >= t.range[1];
  },
  createGlobalLinebreakMatcher: u,
  equalTokens: function (e, t, n) {
    var r = n.getTokens(e);
    var i = n.getTokens(t);
    if (r.length !== i.length) {
      return !1;
    }
    for (var o = 0; o < r.length; ++o) {
      if (r[o].type !== i[o].type || r[o].value !== i[o].value) {
        return !1;
      }
    }
    return !0;
  },
  isArrowToken: P,
  isClosingBraceToken: Q,
  isClosingBracketToken: G,
  isClosingParenToken: H,
  isColonToken: L,
  isCommaToken: N,
  isCommentToken: function (e) {
    return "Line" === e.type || "Block" === e.type || "Shebang" === e.type;
  },
  isDotToken: M,
  isKeywordToken: function (e) {
    return "Keyword" === e.type;
  },
  isNotClosingBraceToken: F(Q),
  isNotClosingBracketToken: F(G),
  isNotClosingParenToken: F(H),
  isNotColonToken: F(L),
  isNotCommaToken: F(N),
  isNotDotToken: F(M),
  isNotOpeningBraceToken: F(z),
  isNotOpeningBracketToken: F(V),
  isNotOpeningParenToken: F(U),
  isNotSemicolonToken: F(j),
  isOpeningBraceToken: z,
  isOpeningBracketToken: V,
  isOpeningParenToken: U,
  isSemicolonToken: j,
  isStringLiteral: function (e) {
    return "Literal" === e.type && "string" === typeof e.value || "TemplateLiteral" === e.type;
  },
  isBreakableStatement: function (e) {
    return c.test(e.type);
  },
  getModifyingReferences: function (e) {
    return e.filter(w);
  },
  isSurroundedBy: function (e, t) {
    return e[0] === t && e[e.length - 1] === t;
  },
  isDirectiveComment: function (e) {
    var t = e.value.trim();
    return "Line" === e.type && 0 === t.indexOf("eslint-") || "Block" === e.type && (0 === t.indexOf("global ") || 0 === t.indexOf("eslint ") || 0 === t.indexOf("eslint-"));
  },
  getTrailingStatement: i.ast.trailingStatement,
  getVariableByName: function (e, t) {
    for (var n = e; n;) {
      var r = n.set.get(t);
      if (r) {
        return r;
      }
      n = n.upper;
    }
    return null;
  },
  isDefaultThisBinding: function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r = n.capIsConstructor;
    var i = void 0 === r || r;
    if (i && x(e) || R(e, t)) {
      return !1;
    }
    for (var o = null === e.id, a = e; a;) {
      var s = a.parent;
      switch (s.type) {
        case "LogicalExpression":
        case "ConditionalExpression":
          a = s;
          break;
        case "ReturnStatement":
          var c = C(s);
          if (null === c || !T(c)) {
            return !0;
          }
          a = c.parent;
          break;
        case "ArrowFunctionExpression":
          if (a !== s.body || !T(s)) {
            return !0;
          }
          a = s.parent;
          break;
        case "Property":
        case "MethodDefinition":
          return s.value !== a;
        case "AssignmentExpression":
        case "AssignmentPattern":
          return "MemberExpression" !== s.left.type && !(i && o && "Identifier" === s.left.type && E(s.left.name));
        case "VariableDeclarator":
          return !(i && o && s.init === a && "Identifier" === s.id.type && E(s.id.name));
        case "MemberExpression":
          return s.object !== a || "Identifier" !== s.property.type || !A.test(s.property.name) || !T(s) || 0 === s.parent.arguments.length || S(s.parent.arguments[0]);
        case "CallExpression":
          return B(s.callee) ? 3 !== s.arguments.length || s.arguments[0] !== a || S(s.arguments[1]) : D(s.callee) ? 3 !== s.arguments.length || s.arguments[1] !== a || S(s.arguments[2]) : !I(s.callee) || 2 !== s.arguments.length || s.arguments[0] !== a || S(s.arguments[1]);
        default:
          return !0;
      }
    }
    return !0;
  },
  getPrecedence: function (e) {
    switch (e.type) {
      case "SequenceExpression":
        return 0;
      case "AssignmentExpression":
      case "ArrowFunctionExpression":
      case "YieldExpression":
        return 1;
      case "ConditionalExpression":
        return 3;
      case "LogicalExpression":
        switch (e.operator) {
          case "||":
            return 4;
          case "&&":
            return 5;
        }
      case "BinaryExpression":
        switch (e.operator) {
          case "|":
            return 6;
          case "^":
            return 7;
          case "&":
            return 8;
          case "==":
          case "!=":
          case "===":
          case "!==":
            return 9;
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "in":
          case "instanceof":
            return 10;
          case "<<":
          case ">>":
          case ">>>":
            return 11;
          case "+":
          case "-":
            return 12;
          case "*":
          case "/":
          case "%":
            return 13;
          case "**":
            return 15;
        }
      case "UnaryExpression":
      case "AwaitExpression":
        return 16;
      case "UpdateExpression":
        return 17;
      case "CallExpression":
      case "ImportExpression":
        return 18;
      case "NewExpression":
        return 19;
      default:
        return 20;
    }
  },
  isEmptyBlock: function (e) {
    return Boolean(e && "BlockStatement" === e.type && 0 === e.body.length);
  },
  isEmptyFunction: function (t) {
    return O(t) && module.exports.isEmptyBlock(t.body);
  },
  getStaticPropertyName: function (e) {
    var t;
    switch (e && e.type) {
      case "Property":
      case "MethodDefinition":
        t = e.key;
        break;
      case "MemberExpression":
        t = e.property;
    }
    switch (t && t.type) {
      case "Literal":
        return String(t.value);
      case "TemplateLiteral":
        if (0 === t.expressions.length && 1 === t.quasis.length) {
          return t.quasis[0].value.cooked;
        }
        break;
      case "Identifier":
        if (!e.computed) {
          return t.name;
        }
    }
    return null;
  },
  getDirectivePrologue: function (e) {
    var t = [];
    if ("Program" === e.type || "FunctionDeclaration" === e.type || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type) {
      var n;
      var i = "Program" === e.type ? e.body : e.body.body;
      var o = r(i);
      try {
        for (o.s(); !(n = o.n()).done;) {
          var a = n.value;
          if ("ExpressionStatement" !== a.type || "Literal" !== a.expression.type) {
            break;
          }
          t.push(a);
        }
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
      }
    }
    return t;
  },
  isDecimalInteger: function (e) {
    return "Literal" === e.type && "number" === typeof e.value && y.test(e.raw);
  },
  isDecimalIntegerNumericToken: function (e) {
    return "Numeric" === e.type && y.test(e.value);
  },
  getFunctionNameWithKind: function (t) {
    var n = t.parent;
    var r = [];
    if ("MethodDefinition" === n.type && n.static && r.push("static"), t.async && r.push("async"), t.generator && r.push("generator"), "ArrowFunctionExpression" === t.type) {
      r.push("arrow", "function");
    } else if ("Property" === n.type || "MethodDefinition" === n.type) {
      if ("constructor" === n.kind) {
        return "constructor";
      }
      if ("get" === n.kind) {
        r.push("getter");
      } else {
        if ("set" === n.kind) {
          r.push("setter");
        } else {
          r.push("method");
        }
      }
    } else {
      r.push("function");
    }
    if (t.id) {
      r.push("'".concat(t.id.name, "'"));
    } else {
      var i = module.exports.getStaticPropertyName(n);
      if (null !== i) {
        r.push("'".concat(i, "'"));
      }
    }
    return r.join(" ");
  },
  getFunctionHeadLoc: function (e, t) {
    var n = e.parent;
    var r = null;
    var i = null;
    if ("ArrowFunctionExpression" === e.type) {
      var o = t.getTokenBefore(e.body, P);
      r = o.loc.start;
      i = o.loc.end;
    } else if ("Property" === n.type || "MethodDefinition" === n.type) {
      r = n.loc.start;
      i = W(e, t).loc.start;
    } else {
      r = e.loc.start;
      i = W(e, t).loc.start;
    }
    return {
      start: Object.assign({}, r),
      end: Object.assign({}, i)
    };
  },
  getNextLocation: function (e, t) {
    var n = e.getIndexFromLoc(t);
    return n + 1 > e.text.length ? null : e.getLocFromIndex(n + 1);
  },
  getParenthesisedText: function (e, t) {
    for (var n = e.getFirstToken(t), r = e.getLastToken(t); e.getTokenBefore(n) && "Punctuator" === e.getTokenBefore(n).type && "(" === e.getTokenBefore(n).value && e.getTokenAfter(r) && "Punctuator" === e.getTokenAfter(r).type && ")" === e.getTokenAfter(r).value;) {
      n = e.getTokenBefore(n);
      r = e.getTokenAfter(r);
    }
    return e.getText().slice(n.range[0], r.range[1]);
  },
  couldBeError: function (t) {
    switch (t.type) {
      case "Identifier":
      case "CallExpression":
      case "NewExpression":
      case "MemberExpression":
      case "TaggedTemplateExpression":
      case "YieldExpression":
      case "AwaitExpression":
        return !0;
      case "AssignmentExpression":
        return module.exports.couldBeError(t.right);
      case "SequenceExpression":
        var n = t.expressions;
        return 0 !== n.length && module.exports.couldBeError(n[n.length - 1]);
      case "LogicalExpression":
        return module.exports.couldBeError(t.left) || module.exports.couldBeError(t.right);
      case "ConditionalExpression":
        return module.exports.couldBeError(t.consequent) || module.exports.couldBeError(t.alternate);
      default:
        return !1;
    }
  },
  isNullLiteral: function (e) {
    return "Literal" === e.type && null === e.value && !e.regex && !e.bigint;
  },
  canTokensBeAdjacent: function (e, t) {
    var n;
    if ("string" === typeof e) {
      var r = o.tokenize(e, {
        ecmaVersion: 2015
      });
      n = r[r.length - 1];
    } else {
      n = e;
    }
    var i = "string" === typeof t ? o.tokenize(t, {
      ecmaVersion: 2015
    })[0] : t;
    if ("Punctuator" === n.type || "Punctuator" === i.type) {
      if ("Punctuator" === n.type && "Punctuator" === i.type) {
        var a = new Set(["+", "++"]);
        var s = new Set(["-", "--"]);
        return !(a.has(n.value) && a.has(i.value) || s.has(n.value) && s.has(i.value));
      }
      return !0;
    }
    return "String" === n.type || "String" === i.type || "Template" === n.type || "Template" === i.type || !("Numeric" === n.type || "Numeric" !== i.type || !i.value.startsWith("."));
  },
  getNameLocationInGlobalDirectiveComment: function (e, t, n) {
    var r = new RegExp("[\\s,]".concat(a.escapeRegExp(n), "(?:$|[\\s,:])"), "gu");
    r.lastIndex = t.value.indexOf("global") + 6;
    var i = r.exec(t.value);
    return e.getLocFromIndex(t.range[0] + "/*".length + (i ? i.index + 1 : 0));
  },
  hasOctalEscapeSequence: function (e) {
    return b.test(e);
  }
};