"use strict";

var r = require("../../../../../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.needsParens = function (e, t, n) {
  if (!t) {
    return !1;
  }
  if (p(t) && t.callee === e && function e(t) {
    if (l(t)) {
      return !0;
    }
    return c(t) && e(t.object);
  }(e)) {
    return !0;
  }
  return m(d, e, t, n);
};
exports.needsWhitespace = v;
exports.needsWhitespaceAfter = function (e, t) {
  return v(e, t, "after");
};
exports.needsWhitespaceBefore = function (e, t) {
  return v(e, t, "before");
};
var i = require("./2940");
var a = require("./2941");
var s = require("../../../../../2624/index");
var o = s.FLIPPED_ALIAS_KEYS;
var l = s.isCallExpression;
var u = s.isExpressionStatement;
var c = s.isMemberExpression;
var p = s.isNewExpression;
function f(e) {
  var t = {};
  function n(e, n) {
    var r = t[e];
    t[e] = r ? function (e, t, i) {
      var a = r(e, t, i);
      return null == a ? n(e, t, i) : a;
    } : n;
  }
  for (var i = 0, a = Object.keys(e); i < a.length; i++) {
    var s = a[i];
    var l = o[s];
    if (l) {
      var u;
      var c = r(l);
      try {
        for (c.s(); !(u = c.n()).done;) {
          n(u.value, e[s]);
        }
      } catch (p) {
        c.e(p);
      } finally {
        c.f();
      }
    } else {
      n(s, e[s]);
    }
  }
  return t;
}
var d = f(a);
var h = f(i.nodes);
var y = f(i.list);
function m(e, t, n, r) {
  var i = e[t.type];
  return i ? i(t, n, r) : null;
}
function v(e, t, n) {
  if (!e) {
    return 0;
  }
  if (u(e)) {
    e = e.expression;
  }
  var r = m(h, e, t);
  if (!r) {
    var i = m(y, e, t);
    if (i) {
      for (var a = 0; a < i.length && !(r = v(i[a], e, n)); a++) {
        ;
      }
    }
  }
  return "object" === typeof r && null !== r && r[n] || 0;
}