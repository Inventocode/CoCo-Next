"use strict";

var r = require("../../../../3262/3190/494");
var i = require("./806/index")("eslint:source-code-fixer");
function o(e, t) {
  return e.fix.range[0] - t.fix.range[0] || e.fix.range[1] - t.fix.range[1];
}
function a(e, t) {
  return e.line - t.line || e.column - t.column;
}
function s() {
  Object.freeze(this);
}
s.applyFixes = function (e, t, n) {
  if (i("Applying fixes"), !1 === n) {
    i("shouldFix parameter was false, not attempting fixes");
    return {
      fixed: !1,
      messages: t,
      output: e
    };
  }
  var s = [];
  var c = [];
  var u = e.startsWith("\ufeff") ? "\ufeff" : "";
  var l = u ? e.slice(1) : e;
  var f = Number.NEGATIVE_INFINITY;
  var h = u;
  function d(e) {
    var t = e.fix;
    var n = t.range[0];
    var r = t.range[1];
    return f >= n || n > r ? (s.push(e), !1) : ((n < 0 && r >= 0 || 0 === n && t.text.startsWith("\ufeff")) && (h = ""), h += l.slice(Math.max(0, f), Math.max(0, n)), h += t.text, f = r, !0);
  }
  if (t.forEach(function (e) {
    if (Object.prototype.hasOwnProperty.call(e, "fix")) {
      c.push(e);
    } else {
      s.push(e);
    }
  }), c.length) {
    i("Found fixes to apply");
    var p;
    var _ = !1;
    var A = r(c.sort(o));
    try {
      for (A.s(); !(p = A.n()).done;) {
        var g = p.value;
        if ("function" !== typeof n || n(g)) {
          d(g);
          _ = !0;
        } else {
          s.push(g);
        }
      }
    } catch (v) {
      A.e(v);
    } finally {
      A.f();
    }
    h += l.slice(Math.max(0, f));
    return {
      fixed: _,
      messages: s.sort(a),
      output: h
    };
  }
  i("No fixes to apply");
  return {
    fixed: !1,
    messages: t,
    output: u + l
  };
};
module.exports = s;