"use strict";

var r = require("../../38/607/494");
var i = require("./807/index")("eslint:source-code-fixer");
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
  i("Applying fixes");
  if (false === n) {
    i("shouldFix parameter was false, not attempting fixes");
    return {
      fixed: false,
      messages: t,
      output: e
    };
  }
  var s = [];
  var c = [];
  var u = e.startsWith("﻿") ? "﻿" : "";
  var l = u ? e.slice(1) : e;
  var f = Number.NEGATIVE_INFINITY;
  var d = u;
  function h(e) {
    var t = e.fix;
    var n = t.range[0];
    var r = t.range[1];
    return f >= n || n > r ? (s.push(e), false) : ((n < 0 && r >= 0 || 0 === n && t.text.startsWith("﻿")) && (d = ""), d += l.slice(Math.max(0, f), Math.max(0, n)), d += t.text, f = r, true);
  }
  t.forEach(function (e) {
    if (Object.prototype.hasOwnProperty.call(e, "fix")) {
      c.push(e);
    } else {
      s.push(e);
    }
  });
  if (c.length) {
    i("Found fixes to apply");
    var p;
    var _ = false;
    var A = r(c.sort(o));
    try {
      for (A.s(); !(p = A.n()).done;) {
        var g = p.value;
        if ("function" !== typeof n || n(g)) {
          h(g);
          _ = true;
        } else {
          s.push(g);
        }
      }
    } catch (v) {
      A.e(v);
    } finally {
      A.f();
    }
    d += l.slice(Math.max(0, f));
    return {
      fixed: _,
      messages: s.sort(a),
      output: d
    };
  }
  i("No fixes to apply");
  return {
    fixed: false,
    messages: t,
    output: u + l
  };
};
module.exports = s;