"use strict";

var r = require("../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t, n, u) {
  var l;
  var p = [];
  var f = !0;
  var d = r(t);
  try {
    for (d.s(); !(l = d.n()).done;) {
      var c = l.value;
      if ((0, i.isEmptyStatement)(c) || (f = !1), (0, i.isExpression)(c)) {
        p.push(c);
      } else if ((0, i.isExpressionStatement)(c)) {
        p.push(c.expression);
      } else if ((0, i.isVariableDeclaration)(c)) {
        if ("var" !== c.kind) {
          return;
        }
        var y;
        var T = r(c.declarations);
        try {
          for (T.s(); !(y = T.n()).done;) {
            for (var m = y.value, S = (0, a.default)(m), E = 0, b = Object.keys(S); E < b.length; E++) {
              var v = b[E];
              u.push({
                kind: c.kind,
                id: (0, s.default)(S[v])
              });
            }
            if (m.init) {
              p.push((0, o.assignmentExpression)("=", m.id, m.init));
            }
          }
        } catch (g) {
          T.e(g);
        } finally {
          T.f();
        }
        f = !0;
      } else if ((0, i.isIfStatement)(c)) {
        var P = c.consequent ? e([c.consequent], n, u) : n.buildUndefinedNode();
        var O = c.alternate ? e([c.alternate], n, u) : n.buildUndefinedNode();
        if (!P || !O) {
          return;
        }
        p.push((0, o.conditionalExpression)(c.test, P, O));
      } else if ((0, i.isBlockStatement)(c)) {
        var A = e(c.body, n, u);
        if (!A) {
          return;
        }
        p.push(A);
      } else {
        if (!(0, i.isEmptyStatement)(c)) {
          return;
        }
        if (0 === t.indexOf(c)) {
          f = !0;
        }
      }
    }
  } catch (g) {
    d.e(g);
  } finally {
    d.f();
  }
  if (f) {
    p.push(n.buildUndefinedNode());
  }
  return 1 === p.length ? p[0] : (0, o.sequenceExpression)(p);
};
var a = require("../2686");
var i = require("../2627");
var o = require("../2631/index");
var s = require("../2652");