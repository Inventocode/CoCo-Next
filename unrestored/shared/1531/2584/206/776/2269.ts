"use strict";

var r = require("../../38/607/494");
var i = require("../../31/index");
function o(e, t) {
  return e.line - t.line || e.column - t.column;
}
function a(e) {
  var t;
  var n = [];
  var i = 0;
  var a = null;
  var s = new Map();
  var c = new Set();
  var u = new Set();
  var l = r(e.problems);
  try {
    for (l.s(); !(t = l.n()).done;) {
      for (var f = t.value; i < e.directives.length && o(e.directives[i], f) <= 0;) {
        var d = e.directives[i++];
        switch (d.type) {
          case "disable":
            if (null === d.ruleId) {
              a = d;
              s.clear();
              c.clear();
            } else {
              if (a) {
                c.delete(d.ruleId);
                s.set(d.ruleId, d);
              } else {
                s.set(d.ruleId, d);
              }
            }
            break;
          case "enable":
            if (null === d.ruleId) {
              a = null;
              s.clear();
            } else {
              if (a) {
                c.add(d.ruleId);
                s.delete(d.ruleId);
              } else {
                s.delete(d.ruleId);
              }
            }
        }
      }
      if (s.has(f.ruleId)) {
        u.add(s.get(f.ruleId));
      } else {
        if (a && !c.has(f.ruleId)) {
          u.add(a);
        } else {
          n.push(f);
        }
      }
    }
  } catch (h) {
    l.e(h);
  } finally {
    l.f();
  }
  return {
    problems: n,
    unusedDisableDirectives: e.directives.filter(function (e) {
      return "disable" === e.type && !u.has(e);
    }).map(function (t) {
      return {
        ruleId: null,
        message: t.ruleId ? "Unused eslint-disable directive (no problems were reported from '".concat(t.ruleId, "').") : "Unused eslint-disable directive (no problems were reported).",
        line: t.unprocessedDirective.line,
        column: t.unprocessedDirective.column,
        severity: "warn" === e.reportUnusedDisableDirectives ? 1 : 2,
        nodeType: null
      };
    })
  };
}
module.exports = function (e) {
  var t = e.directives;
  var n = e.problems;
  var r = e.reportUnusedDisableDirectives;
  var s = void 0 === r ? "off" : r;
  var c = t.filter(function (e) {
    return "disable" === e.type || "enable" === e.type;
  }).map(function (e) {
    return Object.assign({}, e, {
      unprocessedDirective: e
    });
  }).sort(o);
  var u = i.flatMap(t, function (e) {
    switch (e.type) {
      case "disable":
      case "enable":
        return [];
      case "disable-line":
        return [{
          type: "disable",
          line: e.line,
          column: 1,
          ruleId: e.ruleId,
          unprocessedDirective: e
        }, {
          type: "enable",
          line: e.line + 1,
          column: 0,
          ruleId: e.ruleId,
          unprocessedDirective: e
        }];
      case "disable-next-line":
        return [{
          type: "disable",
          line: e.line + 1,
          column: 1,
          ruleId: e.ruleId,
          unprocessedDirective: e
        }, {
          type: "enable",
          line: e.line + 2,
          column: 0,
          ruleId: e.ruleId,
          unprocessedDirective: e
        }];
      default:
        throw new TypeError("Unrecognized directive type '".concat(e.type, "'"));
    }
  }).sort(o);
  var l = a({
    problems: n,
    directives: c,
    reportUnusedDisableDirectives: s
  });
  var f = a({
    problems: l.problems,
    directives: u,
    reportUnusedDisableDirectives: s
  });
  return "off" !== s ? f.problems.concat(l.unusedDisableDirectives).concat(f.unusedDisableDirectives).sort(o) : f.problems;
};