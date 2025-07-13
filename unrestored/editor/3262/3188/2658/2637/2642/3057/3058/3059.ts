"use strict";

import * as r from "../../../../../../3190/494";
export default (function (e) {
  if (!this.isReferenced()) {
    return;
  }
  var t = this.scope.getBinding(e.name);
  if (t) {
    return t.identifier.typeAnnotation ? t.identifier.typeAnnotation : function (e, t, n) {
      var i = [];
      var a = [];
      var l = d(e, t, a);
      var p = function e(t, n, r) {
        var i = function (e, t, n) {
          var r;
          for (; r = t.parentPath;) {
            if (r.isIfStatement() || r.isConditionalExpression()) {
              if ("test" === t.key) {
                return;
              }
              return r;
            }
            if (r.isFunction() && r.parentPath.scope.getBinding(n) !== e) {
              return;
            }
            t = r;
          }
        }(t, n, r);
        if (!i) {
          return;
        }
        for (var a = [i.get("test")], l = [], p = 0; p < a.length; p++) {
          var f = a[p];
          if (f.isLogicalExpression()) {
            if ("&&" === f.node.operator) {
              a.push(f.get("left"));
              a.push(f.get("right"));
            }
          } else if (f.isBinaryExpression()) {
            var d = h(r, f);
            if (d) {
              l.push(d);
            }
          }
        }
        if (l.length) {
          return c(l[0]) && o ? {
            typeAnnotation: o(l),
            ifStatement: i
          } : s ? {
            typeAnnotation: s(l),
            ifStatement: i
          } : {
            typeAnnotation: u(l),
            ifStatement: i
          };
        }
        return e(i, r);
      }(e, t, n);
      if (p) {
        var f = d(e, p.ifStatement);
        l = l.filter(function (e) {
          return f.indexOf(e) < 0;
        });
        i.push(p.typeAnnotation);
      }
      if (l.length) {
        var y;
        (y = l).push.apply(y, a);
        var m;
        var v = r(l);
        try {
          for (v.s(); !(m = v.n()).done;) {
            var g = m.value;
            i.push(g.getTypeAnnotation());
          }
        } catch (T) {
          v.e(T);
        } finally {
          v.f();
        }
      }
      if (!i.length) {
        return;
      }
      if (c(i[0]) && o) {
        return o(i);
      }
      if (s) {
        return s(i);
      }
      return u(i);
    }(t, this, e.name);
  }
  if ("undefined" === e.name) {
    return f();
  }
  if ("NaN" === e.name || "Infinity" === e.name) {
    return p();
  }
  e.name;
});
import * as i from "../../../../2623/index";
var a = i.BOOLEAN_NUMBER_BINARY_OPERATORS;
var s = i.createFlowUnionType;
var o = i.createTSUnionType;
var l = i.createTypeAnnotationBasedOnTypeof;
var u = i.createUnionTypeAnnotation;
var c = i.isTSTypeAnnotation;
var p = i.numberTypeAnnotation;
var f = i.voidTypeAnnotation;
function d(e, t, n) {
  var r = e.constantViolations.slice();
  r.unshift(e.path);
  return r.filter(function (e) {
    var r = (e = e.resolve())._guessExecutionStatusRelativeTo(t);
    if (n && "unknown" === r) {
      n.push(e);
    }
    return "before" === r;
  });
}
function h(e, t) {
  var n;
  var r;
  var i;
  var s = t.node.operator;
  var o = t.get("right").resolve();
  var u = t.get("left").resolve();
  if (u.isIdentifier({
    name: e
  }) ? n = o : o.isIdentifier({
    name: e
  }) && (n = u), n) {
    return "===" === s ? n.getTypeAnnotation() : a.indexOf(s) >= 0 ? p() : void 0;
  }
  if (("===" === s || "==" === s) && (u.isUnaryExpression({
    operator: "typeof"
  }) ? (r = u, i = o) : o.isUnaryExpression({
    operator: "typeof"
  }) && (r = o, i = u), r && r.get("argument").isIdentifier({
    name: e
  }) && (i = i.resolve()).isLiteral())) {
    var c = i.node.value;
    if ("string" === typeof c) {
      return l(c);
    }
  }
}