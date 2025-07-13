"use strict";

import * as r from "../../../../1524/2574/1/index";
function i() {
  var e = require("./2638");
  i = function () {
    return e;
  };
  return e;
}
import * as a from "../2681/index";
import * as s from "./2808/index";
import * as o from "./2805";
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
  if ("function" === typeof t && (n = t, t = void 0), void 0 === n) {
    return l.sync(e, t);
  }
  l.errback(e, t, n);
};
var u = l.sync;
export { u as parseSync };
var c = l.async;
export { c as parseAsync };