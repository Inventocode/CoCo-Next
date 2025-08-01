"use strict";

var r = require("../../../../1531/2584/1/index");
function i() {
  var e = require("./2648");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.parseSync = exports.parseAsync = exports.parse = void 0;
var a = require("../2691/index");
var s = require("./2818/index");
var o = require("./2815");
var l = i()(r.mark(function e(t, n) {
  var i;
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.delegateYield((0, a.default)(n), "t0", 1);
        case 1:
          if (null !== (i = e.t0)) {
            e.next = 4;
            break;
          }
          return e.abrupt("return", null);
        case 4:
          return e.delegateYield((0, s.default)(i.passes, (0, o.default)(i), t), "t1", 5);
        case 5:
          return e.abrupt("return", e.t1);
        case 6:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
exports.parse = function (e, t, n) {
  if ("function" === typeof t) {
    n = t;
    t = void 0;
  }
  if (void 0 === n) {
    return l.sync(e, t);
  }
  l.errback(e, t, n);
};
var u = l.sync;
exports.parseSync = u;
var c = l.async;
exports.parseAsync = c;