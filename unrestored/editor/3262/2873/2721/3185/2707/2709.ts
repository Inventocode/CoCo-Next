"use strict";

import * as r from "../../../../3190/494";
export default (function (e, t) {
  if (e === t) {
    return !0;
  }
  if (a.ALIAS_KEYS[t]) {
    return !1;
  }
  var n = a.FLIPPED_ALIAS_KEYS[t];
  if (n) {
    if (n[0] === e) {
      return !0;
    }
    var i;
    var o = r(n);
    try {
      for (o.s(); !(i = o.n()).done;) {
        var s = i.value;
        if (e === s) {
          return !0;
        }
      }
    } catch (u) {
      o.e(u);
    } finally {
      o.f();
    }
  }
  return !1;
});
import * as a from "./2635/index";