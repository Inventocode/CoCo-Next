"use strict";

export default (function (e, t, n) {
  if (!t) {
    return !1;
  }
  if (!(0, i.default)(t.type, e)) {
    return !n && "Placeholder" === t.type && e in s.FLIPPED_ALIAS_KEYS && (0, a.default)(t.expectedNode, e);
  }
  return "undefined" === typeof n || (0, r.default)(t, n);
});
import * as r from "./2692";
import * as i from "./2693";
import * as a from "./2727";
import * as s from "./2633/index";