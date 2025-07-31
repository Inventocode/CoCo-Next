"use strict";

var r = require("../../../1524/2574/1/index");
function i() {
  var e = require("./3131/2638");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.transformFromAstSync = exports.transformFromAstAsync = exports.transformFromAst = void 0;
var a = require("./2681/index");
var s = require("./3119/2804/index");
var o = i()(r.mark(function e(t, n, i) {
  var o;
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.delegateYield((0, a.default)(i), "t0", 1);
        case 1:
          if (null !== (o = e.t0)) {
            e.next = 4;
            break;
          }
          return e.abrupt("return", null);
        case 4:
          if (t) {
            e.next = 6;
            break;
          }
          throw new Error("No AST given");
        case 6:
          return e.delegateYield((0, s.run)(o, n, t), "t1", 7);
        case 7:
          return e.abrupt("return", e.t1);
        case 8:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
exports.transformFromAst = function (e, t, n, r) {
  if ("function" === typeof n && (r = n, n = void 0), void 0 === r) {
    return o.sync(e, t, n);
  }
  o.errback(e, t, n, r);
};
var l = o.sync;
exports.transformFromAstSync = l;
var u = o.async;
exports.transformFromAstAsync = u;