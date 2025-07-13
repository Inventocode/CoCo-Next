"use strict";

import * as r from "../../../../../3190/494";
export default (function (e, t) {
  if (e === t) {
    return !0;
  }
  var n = i.PLACEHOLDERS_ALIAS[e];
  if (n) {
    var a;
    var s = r(n);
    try {
      for (s.s(); !(a = s.n()).done;) {
        var o = a.value;
        if (t === o) {
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
import * as i from "./2633/index";