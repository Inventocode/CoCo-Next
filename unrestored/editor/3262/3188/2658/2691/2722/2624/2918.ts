"use strict";

export default (function (e) {
  if ((0, r.default)(e.type, "Immutable")) {
    return !0;
  }
  if ((0, i.isIdentifier)(e)) {
    return "undefined" === e.name;
  }
  return !1;
});
import * as r from "./2693";
import * as i from "./2625";