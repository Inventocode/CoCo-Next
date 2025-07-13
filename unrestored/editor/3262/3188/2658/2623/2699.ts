"use strict";

import * as r from "../../../3190/494";
export default (function (e, t) {
  if (e === t) {
    return !0;
  }
  if (i.ALIAS_KEYS[t]) {
    return !1;
  }
  var n = i.FLIPPED_ALIAS_KEYS[t];
  if (n) {
    if (n[0] === e) {
      return !0;
    }
    var a;
    var s = r(n);
    try {
      for (s.s(); !(a = s.n()).done;) {
        var o = a.value;
        if (e === o) {
          return !0;
        }
      }
    } catch (l) {
      s.e(l);
    } finally {
      s.f();
    }
  }
  return !1;
});
import * as i from "./2634/index";