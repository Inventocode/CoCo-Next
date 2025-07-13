"use strict";

export default (function (e, t, n) {
  if (!t) {
    return !1;
  }
  if (!(0, a.default)(t.type, e)) {
    return !n && "Placeholder" === t.type && e in o.FLIPPED_ALIAS_KEYS && (0, i.default)(t.expectedNode, e);
  }
  return "undefined" === typeof n || (0, r.default)(t, n);
});
import * as r from "./2708";
import * as a from "./2709";
import * as i from "./2812";
import * as o from "./2635/index";