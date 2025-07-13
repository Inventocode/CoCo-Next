"use strict";

import * as r from "../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../3262/3188/2658/230";
import * as o from "../../../../../1035/1356/569";
var a = require("../1337").isCommentToken;
import * as s from "./2247/index";
import * as c from "./1116/index";
import * as u from "./2254";
import * as l from "./843";
var f = Symbol("tokens");
var h = Symbol("comments");
var d = Symbol("indexMap");
function p(e, t, n, r, i, a, s) {
  var c = !1;
  var u = 0;
  var l = null;
  if ("number" === typeof s) {
    u = 0 | s;
  } else {
    if ("function" === typeof s) {
      l = s;
    } else {
      if (s) {
        c = !!s.includeComments;
        u = 0 | s.skip;
        l = s.filter || null;
      }
    }
  }
  o(u >= 0, "options.skip should be zero or a positive integer.");
  o(!l || "function" === typeof l, "options.filter should be a function.");
  return e.createCursor(t, n, r, i, a, c, l, u, -1);
}
function _(e, t, n, r, i, a, s) {
  var c = !1;
  var u = 0;
  var l = !1;
  var f = null;
  if ("number" === typeof s) {
    u = 0 | s;
    l = !0;
  } else {
    if ("function" === typeof s) {
      f = s;
    } else {
      if (s) {
        c = !!s.includeComments;
        u = 0 | s.count;
        l = "number" === typeof s.count;
        f = s.filter || null;
      }
    }
  }
  o(u >= 0, "options.count should be zero or a positive integer.");
  o(!f || "function" === typeof f, "options.filter should be a function.");
  return e.createCursor(t, n, r, i, a, c, f, 0, l ? u : -1);
}
function A(e, t, n, r, i, o, a) {
  return "undefined" === typeof o && "undefined" === typeof a ? new c(e, t, n, r, i) : "number" === typeof o || "undefined" === typeof o ? new u(e, t, n, r, i, 0 | o, 0 | a) : _(s.forward, e, t, n, r, i, o);
}
function g(e) {
  for (var t = [], n = e.getOneToken(); n && a(n);) {
    t.push(n);
    n = e.getOneToken();
  }
  return t;
}
module.exports = function () {
  function e(t, n) {
    r(this, e);
    this[f] = t;
    this[h] = n;
    this[d] = function (e, t) {
      for (var n = Object.create(null), r = 0, i = 0, o = 0, a = null; r < e.length || i < t.length;) {
        for (o = i < t.length ? t[i].range[0] : Number.MAX_SAFE_INTEGER; r < e.length && (a = e[r].range)[0] < o;) {
          n[a[0]] = r;
          n[a[1] - 1] = r;
          r += 1;
        }
        for (o = r < e.length ? e[r].range[0] : Number.MAX_SAFE_INTEGER; i < t.length && (a = t[i].range)[0] < o;) {
          n[a[0]] = r;
          n[a[1] - 1] = r;
          i += 1;
        }
      }
      return n;
    }(t, n);
  }
  i(e, [{
    key: "getTokenByRangeStart",
    value: function (e, t) {
      var n = t && t.includeComments;
      var r = s.forward.createBaseCursor(this[f], this[h], this[d], e, -1, n).getOneToken();
      return r && r.range[0] === e ? r : null;
    }
  }, {
    key: "getFirstToken",
    value: function (e, t) {
      return p(s.forward, this[f], this[h], this[d], e.range[0], e.range[1], t).getOneToken();
    }
  }, {
    key: "getLastToken",
    value: function (e, t) {
      return p(s.backward, this[f], this[h], this[d], e.range[0], e.range[1], t).getOneToken();
    }
  }, {
    key: "getTokenBefore",
    value: function (e, t) {
      return p(s.backward, this[f], this[h], this[d], -1, e.range[0], t).getOneToken();
    }
  }, {
    key: "getTokenAfter",
    value: function (e, t) {
      return p(s.forward, this[f], this[h], this[d], e.range[1], -1, t).getOneToken();
    }
  }, {
    key: "getFirstTokenBetween",
    value: function (e, t, n) {
      return p(s.forward, this[f], this[h], this[d], e.range[1], t.range[0], n).getOneToken();
    }
  }, {
    key: "getLastTokenBetween",
    value: function (e, t, n) {
      return p(s.backward, this[f], this[h], this[d], e.range[1], t.range[0], n).getOneToken();
    }
  }, {
    key: "getTokenOrCommentBefore",
    value: function (e, t) {
      return this.getTokenBefore(e, {
        includeComments: !0,
        skip: t
      });
    }
  }, {
    key: "getTokenOrCommentAfter",
    value: function (e, t) {
      return this.getTokenAfter(e, {
        includeComments: !0,
        skip: t
      });
    }
  }, {
    key: "getFirstTokens",
    value: function (e, t) {
      return _(s.forward, this[f], this[h], this[d], e.range[0], e.range[1], t).getAllTokens();
    }
  }, {
    key: "getLastTokens",
    value: function (e, t) {
      return _(s.backward, this[f], this[h], this[d], e.range[0], e.range[1], t).getAllTokens().reverse();
    }
  }, {
    key: "getTokensBefore",
    value: function (e, t) {
      return _(s.backward, this[f], this[h], this[d], -1, e.range[0], t).getAllTokens().reverse();
    }
  }, {
    key: "getTokensAfter",
    value: function (e, t) {
      return _(s.forward, this[f], this[h], this[d], e.range[1], -1, t).getAllTokens();
    }
  }, {
    key: "getFirstTokensBetween",
    value: function (e, t, n) {
      return _(s.forward, this[f], this[h], this[d], e.range[1], t.range[0], n).getAllTokens();
    }
  }, {
    key: "getLastTokensBetween",
    value: function (e, t, n) {
      return _(s.backward, this[f], this[h], this[d], e.range[1], t.range[0], n).getAllTokens().reverse();
    }
  }, {
    key: "getTokens",
    value: function (e, t, n) {
      return A(this[f], this[h], this[d], e.range[0], e.range[1], t, n).getAllTokens();
    }
  }, {
    key: "getTokensBetween",
    value: function (e, t, n) {
      return A(this[f], this[h], this[d], e.range[1], t.range[0], n, n).getAllTokens();
    }
  }, {
    key: "commentsExistBetween",
    value: function (e, t) {
      var n = l.search(this[h], e.range[1]);
      return n < this[h].length && this[h][n].range[1] <= t.range[0];
    }
  }, {
    key: "getCommentsBefore",
    value: function (e) {
      return g(_(s.backward, this[f], this[h], this[d], -1, e.range[0], {
        includeComments: !0
      })).reverse();
    }
  }, {
    key: "getCommentsAfter",
    value: function (e) {
      return g(_(s.forward, this[f], this[h], this[d], e.range[1], -1, {
        includeComments: !0
      }));
    }
  }, {
    key: "getCommentsInside",
    value: function (e) {
      return this.getTokens(e, {
        includeComments: !0,
        filter: a
      });
    }
  }]);
  return e;
}();