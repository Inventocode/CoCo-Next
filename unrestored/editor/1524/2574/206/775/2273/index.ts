"use strict";

var r = require("../841");
var i = require("../../../../../3262/3190/494");
var o = require("../../../1035/1356/569");
var a = require("./2274");
var s = require("./2275");
function c() {
  return 1 === arguments.length ? Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]) : "string" === typeof (arguments.length <= 1 ? void 0 : arguments[1]) ? {
    node: arguments.length <= 0 ? void 0 : arguments[0],
    message: arguments.length <= 1 ? void 0 : arguments[1],
    data: arguments.length <= 2 ? void 0 : arguments[2],
    fix: arguments.length <= 3 ? void 0 : arguments[3]
  } : {
    node: arguments.length <= 0 ? void 0 : arguments[0],
    loc: arguments.length <= 1 ? void 0 : arguments[1],
    message: arguments.length <= 2 ? void 0 : arguments[2],
    data: arguments.length <= 3 ? void 0 : arguments[3],
    fix: arguments.length <= 4 ? void 0 : arguments[4]
  };
}
function u(e) {
  if (e.node) {
    o("object" === typeof e.node, "Node must be an object");
  } else {
    o(e.loc, "Node must be provided when reporting error if location is not provided");
  }
}
function l(e) {
  return e.loc ? e.loc.start ? e.loc : {
    start: e.loc,
    end: null
  } : e.node.loc;
}
function f(e, t) {
  return e.range[0] - t.range[0] || e.range[1] - t.range[1];
}
function h(e, t) {
  if ("function" !== typeof e.fix) {
    return null;
  }
  var n = e.fix(a);
  return n && Symbol.iterator in n ? function (e, t) {
    if (0 === e.length) {
      return null;
    }
    if (1 === e.length) {
      return e[0];
    }
    e.sort(f);
    var n;
    var r = t.text;
    var a = e[0].range[0];
    var s = e[e.length - 1].range[1];
    var c = "";
    var u = Number.MIN_SAFE_INTEGER;
    var l = i(e);
    try {
      for (l.s(); !(n = l.n()).done;) {
        var h = n.value;
        o(h.range[0] >= u, "Fix objects must not be overlapped in a report.");
        if (h.range[0] >= 0) {
          c += r.slice(Math.max(0, a, u), h.range[0]);
        }
        c += h.text;
        u = h.range[1];
      }
    } catch (d) {
      l.e(d);
    } finally {
      l.f();
    }
    return {
      range: [a, s],
      text: c += r.slice(Math.max(0, a, u), s)
    };
  }(Array.from(n), t) : n;
}
function d(e, t, n) {
  return e.suggest && Array.isArray(e.suggest) ? e.suggest.map(function (e) {
    var i = e.desc || n[e.messageId];
    return r(r({}, e), {}, {
      desc: s(i, e.data),
      fix: h(e, t)
    });
  }) : [];
}
function p(e) {
  var t = {
    ruleId: e.ruleId,
    severity: e.severity,
    message: e.message,
    line: e.loc.start.line,
    column: e.loc.start.column + 1,
    nodeType: e.node && e.node.type || null
  };
  if (e.messageId) {
    t.messageId = e.messageId;
  }
  if (e.loc.end) {
    t.endLine = e.loc.end.line;
    t.endColumn = e.loc.end.column + 1;
  }
  if (e.fix) {
    t.fix = e.fix;
  }
  if (e.suggestions && e.suggestions.length > 0) {
    t.suggestions = e.suggestions;
  }
  return t;
}
function _(e, t) {
  if (e && Array.isArray(e)) {
    e.forEach(function (e) {
      if (e.messageId) {
        var n = e.messageId;
        if (!t) {
          throw new TypeError("context.report() called with a suggest option with a messageId '".concat(n, "', but no messages were present in the rule metadata."));
        }
        if (!t[n]) {
          throw new TypeError("context.report() called with a suggest option with a messageId '".concat(n, "' which is not present in the 'messages' config: ").concat(JSON.stringify(t, null, 2)));
        }
        if (e.desc) {
          throw new TypeError("context.report() called with a suggest option that defines both a 'messageId' and an 'desc'. Please only pass one.");
        }
      } else if (!e.desc) {
        throw new TypeError("context.report() called with a suggest option that doesn't have either a `desc` or `messageId`");
      }
      if ("function" !== typeof e.fix) {
        throw new TypeError("context.report() called with a suggest option without a fix function. See: ".concat(e));
      }
    });
  }
}
module.exports = function (e) {
  return function () {
    var t;
    var n = c.apply(void 0, arguments);
    var r = e.messageIds;
    if (u(n), n.messageId) {
      if (!r) {
        throw new TypeError("context.report() called with a messageId, but no messages were present in the rule metadata.");
      }
      var i = n.messageId;
      if (n.message) {
        throw new TypeError("context.report() called with a message and a messageId. Please only pass one.");
      }
      if (!r || !Object.prototype.hasOwnProperty.call(r, i)) {
        throw new TypeError("context.report() called with a messageId of '".concat(i, "' which is not present in the 'messages' config: ").concat(JSON.stringify(r, null, 2)));
      }
      t = r[i];
    } else {
      if (!n.message) {
        throw new TypeError("Missing `message` property in report() call; add a message that describes the linting problem.");
      }
      t = n.message;
    }
    _(n.suggest, r);
    return p({
      ruleId: e.ruleId,
      severity: e.severity,
      node: n.node,
      message: s(t, n.data),
      messageId: n.messageId,
      loc: l(n),
      fix: e.disableFixes ? null : h(n, e.sourceCode),
      suggestions: e.disableFixes ? [] : d(n, e.sourceCode, r)
    });
  };
};