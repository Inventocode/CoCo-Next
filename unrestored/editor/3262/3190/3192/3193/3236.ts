"use strict";

export default (function (e) {
  if ((0, r.default)(e.type, "Immutable")) {
    return !0;
  }
  if ((0, a.isIdentifier)(e)) {
    return "undefined" === e.name;
  }
  return !1;
});
import * as r from "./2714";
import * as a from "./2628";