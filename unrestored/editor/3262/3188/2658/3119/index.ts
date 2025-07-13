"use strict";

import * as r from "../../../../1524/2574/1/index";
function i() {
  var e = require("../3131/2638");
  i = function () {
    return e;
  };
  return e;
}
import * as a from "../2681/index";
import * as s from "./2804/index";
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
  if ("function" === typeof t && (n = t, t = void 0), void 0 === n) {
    return o.sync(e, t);
  }
  o.errback(e, t, n);
};
var l = o.sync;
export { l as transformSync };
var u = o.async;
export { u as transformAsync };