"use strict";

import * as r from "../../../../../1524/2574/1/index";
function i() {
  var e = require("../../3131/2638");
  i = function () {
    return e;
  };
  return e;
}
exports.forwardAsync = function (e, t) {
  var n = i()(e);
  return l(function (e) {
    var r = n[e];
    return t(r);
  });
};
export { p as isThenable };
exports.maybeAsync = function (e, t) {
  return i()({
    sync: function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
        r[i] = arguments[i];
      }
      var a = e.apply(this, r);
      if (p(a)) {
        throw new Error(t);
      }
      return a;
    },
    async: function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      return Promise.resolve(e.apply(this, n));
    }
  });
};
var a = function (e) {
  return e;
};
var s = i()(r.mark(function e(t) {
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.delegateYield(t, "t0", 1);
        case 1:
          return e.abrupt("return", e.t0);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
var o = i()({
  sync: function () {
    return !1;
  },
  errback: function (e) {
    return e(null, !0);
  }
});
export { o as isAsync };
var l = i()({
  sync: function (e) {
    return e("sync");
  },
  async: function (e) {
    return e("async");
  }
});
var u = i()({
  name: "onFirstPause",
  arity: 2,
  sync: function (e) {
    return s.sync(e);
  },
  errback: function (e, t, n) {
    var r = !1;
    s.errback(e, function (e, t) {
      r = !0;
      n(e, t);
    });
    if (!r) {
      t();
    }
  }
});
export { u as onFirstPause };
var c = i()({
  sync: a,
  async: a
});
function p(e) {
  return !!e && ("object" === typeof e || "function" === typeof e) && !!e.then && "function" === typeof e.then;
}
export { c as waitFor };