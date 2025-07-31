"use strict";

(function (e) {
  var r = require("../../../../3190/494");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.evaluate = function () {
    var e = {
      confident: !0,
      deoptPath: null,
      seen: new Map()
    };
    var t = o(this, e);
    if (!e.confident) {
      t = void 0;
    }
    return {
      confident: e.confident,
      deopt: e.deoptPath,
      value: t
    };
  };
  exports.evaluateTruthy = function () {
    var e = this.evaluate();
    if (e.confident) {
      return !!e.value;
    }
  };
  var i = ["String", "Number", "Math"];
  var a = ["random"];
  function s(e, t) {
    if (t.confident) {
      t.deoptPath = e;
      t.confident = !1;
    }
  }
  function o(t, n) {
    var u = t.node;
    var c = n.seen;
    if (c.has(u)) {
      var p = c.get(u);
      return p.resolved ? p.value : void s(t, n);
    }
    var f = {
      resolved: !1
    };
    c.set(u, f);
    var d = function (t, n) {
      if (!n.confident) {
        return;
      }
      if (t.isSequenceExpression()) {
        var u = t.get("expressions");
        return o(u[u.length - 1], n);
      }
      if (t.isStringLiteral() || t.isNumericLiteral() || t.isBooleanLiteral()) {
        return t.node.value;
      }
      if (t.isNullLiteral()) {
        return null;
      }
      if (t.isTemplateLiteral()) {
        return l(t, t.node.quasis, n);
      }
      if (t.isTaggedTemplateExpression() && t.get("tag").isMemberExpression()) {
        var c = t.get("tag.object");
        var p = c.node.name;
        var f = t.get("tag.property");
        if (c.isIdentifier() && "String" === p && !t.scope.getBinding(p) && f.isIdentifier() && "raw" === f.node.name) {
          return l(t, t.node.quasi.quasis, n, !0);
        }
      }
      if (t.isConditionalExpression()) {
        var d = o(t.get("test"), n);
        if (!n.confident) {
          return;
        }
        return o(d ? t.get("consequent") : t.get("alternate"), n);
      }
      if (t.isExpressionWrapper()) {
        return o(t.get("expression"), n);
      }
      if (t.isMemberExpression() && !t.parentPath.isCallExpression({
        callee: t.node
      })) {
        var h = t.get("property");
        var y = t.get("object");
        if (y.isLiteral() && h.isIdentifier()) {
          var m = y.node.value;
          var v = typeof m;
          if ("number" === v || "string" === v) {
            return m[h.node.name];
          }
        }
      }
      if (t.isReferencedIdentifier()) {
        var g = t.scope.getBinding(t.node.name);
        if (g && g.constantViolations.length > 0) {
          return s(g.path, n);
        }
        if (g && t.node.start < g.path.node.end) {
          return s(g.path, n);
        }
        if (null != g && g.hasValue) {
          return g.value;
        }
        if ("undefined" === t.node.name) {
          return g ? s(g.path, n) : void 0;
        }
        if ("Infinity" === t.node.name) {
          return g ? s(g.path, n) : 1 / 0;
        }
        if ("NaN" === t.node.name) {
          return g ? s(g.path, n) : NaN;
        }
        var T = t.resolve();
        return T === t ? s(t, n) : o(T, n);
      }
      if (t.isUnaryExpression({
        prefix: !0
      })) {
        if ("void" === t.node.operator) {
          return;
        }
        var b = t.get("argument");
        if ("typeof" === t.node.operator && (b.isFunction() || b.isClass())) {
          return "function";
        }
        var S = o(b, n);
        if (!n.confident) {
          return;
        }
        switch (t.node.operator) {
          case "!":
            return !S;
          case "+":
            return +S;
          case "-":
            return -S;
          case "~":
            return ~S;
          case "typeof":
            return typeof S;
        }
      }
      if (t.isArrayExpression()) {
        var E;
        var x = [];
        var P = t.get("elements");
        var A = r(P);
        try {
          for (A.s(); !(E = A.n()).done;) {
            var k = E.value.evaluate();
            if (!k.confident) {
              return s(k.deopt, n);
            }
            x.push(k.value);
          }
        } catch (X) {
          A.e(X);
        } finally {
          A.f();
        }
        return x;
      }
      if (t.isObjectExpression()) {
        var w;
        var O = {};
        var C = t.get("properties");
        var I = r(C);
        try {
          for (I.s(); !(w = I.n()).done;) {
            var N = w.value;
            if (N.isObjectMethod() || N.isSpreadElement()) {
              return s(N, n);
            }
            var _ = N.get("key");
            if (N.node.computed) {
              if (!(_ = _.evaluate()).confident) {
                return s(_.deopt, n);
              }
              _ = _.value;
            } else {
              _ = _.isIdentifier() ? _.node.name : _.node.value;
            }
            var D = N.get("value").evaluate();
            if (!D.confident) {
              return s(D.deopt, n);
            }
            D = D.value;
            O[_] = D;
          }
        } catch (X) {
          I.e(X);
        } finally {
          I.f();
        }
        return O;
      }
      if (t.isLogicalExpression()) {
        var j = n.confident;
        var L = o(t.get("left"), n);
        var M = n.confident;
        n.confident = j;
        var B = o(t.get("right"), n);
        var F = n.confident;
        switch (t.node.operator) {
          case "||":
            if (n.confident = M && (!!L || F), !n.confident) {
              return;
            }
            return L || B;
          case "&&":
            if (n.confident = M && (!L || F), !n.confident) {
              return;
            }
            return L && B;
        }
      }
      if (t.isBinaryExpression()) {
        var R = o(t.get("left"), n);
        if (!n.confident) {
          return;
        }
        var U = o(t.get("right"), n);
        if (!n.confident) {
          return;
        }
        switch (t.node.operator) {
          case "-":
            return R - U;
          case "+":
            return R + U;
          case "/":
            return R / U;
          case "*":
            return R * U;
          case "%":
            return R % U;
          case "**":
            return Math.pow(R, U);
          case "<":
            return R < U;
          case ">":
            return R > U;
          case "<=":
            return R <= U;
          case ">=":
            return R >= U;
          case "==":
            return R == U;
          case "!=":
            return R != U;
          case "===":
            return R === U;
          case "!==":
            return R !== U;
          case "|":
            return R | U;
          case "&":
            return R & U;
          case "^":
            return R ^ U;
          case "<<":
            return R << U;
          case ">>":
            return R >> U;
          case ">>>":
            return R >>> U;
        }
      }
      if (t.isCallExpression()) {
        var K;
        var V;
        var W = t.get("callee");
        if (W.isIdentifier() && !t.scope.getBinding(W.node.name) && i.indexOf(W.node.name) >= 0 && (V = e[W.node.name]), W.isMemberExpression()) {
          var Y = W.get("object");
          var H = W.get("property");
          if (Y.isIdentifier() && H.isIdentifier() && i.indexOf(Y.node.name) >= 0 && a.indexOf(H.node.name) < 0 && (K = e[Y.node.name], V = K[H.node.name]), Y.isLiteral() && H.isIdentifier()) {
            var q = typeof Y.node.value;
            if (!("string" !== q && "number" !== q)) {
              K = Y.node.value;
              V = K[H.node.name];
            }
          }
        }
        if (V) {
          var J = t.get("arguments").map(function (e) {
            return o(e, n);
          });
          if (!n.confident) {
            return;
          }
          return V.apply(K, J);
        }
      }
      s(t, n);
    }(t, n);
    if (n.confident) {
      f.resolved = !0;
      f.value = d;
    }
    return d;
  }
  function l(e, t, n) {
    var i;
    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    var s = "";
    var l = 0;
    var u = e.get("expressions");
    var c = r(t);
    try {
      for (c.s(); !(i = c.n()).done;) {
        var p = i.value;
        if (!n.confident) {
          break;
        }
        s += a ? p.value.raw : p.value.cooked;
        var f = u[l++];
        if (f) {
          s += String(o(f, n));
        }
      }
    } catch (d) {
      c.e(d);
    } finally {
      c.f();
    }
    if (n.confident) {
      return s;
    }
  }
}).call(this, require("../../../../../1524/2574/31/251"));