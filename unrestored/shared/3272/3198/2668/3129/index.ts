"use strict";

var r = require("../../../../1531/2584/1/index");
function i() {
  var e = require("../3141/2648");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.transformSync = exports.transformAsync = exports.transform = void 0;
var a = require("../2691/index");
var s = require("./2814/index");
var o = i()(r.mark(function e(t, n) {
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
          return e.delegateYield((0, s.run)(i, t), "t1", 5);
        case 5:
          return e.abrupt("return", e.t1);
        case 6:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
exports.transform = function (e, t, n) {
  if ("function" === typeof t) {
    n = t;
    t = void 0;
  }
  if (void 0 === n) {
    return o.sync(e, t);
  }
  o.errback(e, t, n);
};
var l = o.sync;
exports.transformSync = l;
var u = o.async;
exports.transformAsync = u;