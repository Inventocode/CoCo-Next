"use strict";

var r = require("../../../../../1531/2584/1/index");
function i() {
  var e = require("../../3141/2648");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.forwardAsync = function (e, t) {
  var n = i()(e);
  return l(function (e) {
    var r = n[e];
    return t(r);
  });
};
exports.isAsync = void 0;
exports.isThenable = p;
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
exports.waitFor = exports.onFirstPause = void 0;
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
exports.isAsync = o;
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
exports.onFirstPause = u;
var c = i()({
  sync: a,
  async: a
});
function p(e) {
  return !!e && ("object" === typeof e || "function" === typeof e) && !!e.then && "function" === typeof e.then;
}
exports.waitFor = c;