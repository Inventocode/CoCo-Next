"use strict";

import * as r from "../../../../../../3190/494";
export default (function e(t, n, l) {
  var u;
  var c = [];
  var p = !0;
  var f = r(t);
  try {
    for (f.s(); !(u = f.n()).done;) {
      var d = u.value;
      if ((0, a.isEmptyStatement)(d) || (p = !1), (0, a.isExpression)(d)) {
        c.push(d);
      } else if ((0, a.isExpressionStatement)(d)) {
        c.push(d.expression);
      } else if ((0, a.isVariableDeclaration)(d)) {
        if ("var" !== d.kind) {
          return;
        }
        var h;
        var y = r(d.declarations);
        try {
          for (y.s(); !(h = y.n()).done;) {
            for (var m = h.value, v = (0, i.default)(m), g = 0, T = Object.keys(v); g < T.length; g++) {
              var b = T[g];
              l.push({
                kind: d.kind,
                id: (0, o.default)(v[b])
              });
            }
            if (m.init) {
              c.push((0, s.assignmentExpression)("=", m.id, m.init));
            }
          }
        } catch (P) {
          y.e(P);
        } finally {
          y.f();
        }
        p = !0;
      } else if ((0, a.isIfStatement)(d)) {
        var S = d.consequent ? e([d.consequent], n, l) : n.buildUndefinedNode();
        var E = d.alternate ? e([d.alternate], n, l) : n.buildUndefinedNode();
        if (!S || !E) {
          return;
        }
        c.push((0, s.conditionalExpression)(d.test, S, E));
      } else if ((0, a.isBlockStatement)(d)) {
        var x = e(d.body, n, l);
        if (!x) {
          return;
        }
        c.push(x);
      } else {
        if (!(0, a.isEmptyStatement)(d)) {
          return;
        }
        if (0 === t.indexOf(d)) {
          p = !0;
        }
      }
    }
  } catch (P) {
    f.e(P);
  } finally {
    f.f();
  }
  if (p) {
    c.push(n.buildUndefinedNode());
  }
  return 1 === c.length ? c[0] : (0, s.sequenceExpression)(c);
});
import * as i from "../2675";
import * as a from "../2625";
import * as s from "../2629/index";
import * as o from "../2648";