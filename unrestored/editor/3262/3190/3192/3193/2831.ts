"use strict";

import * as r from "../../494";
export default (function (e, t) {
  if (e === t) {
    return !0;
  }
  var n = a.PLACEHOLDERS_ALIAS[e];
  if (n) {
    var i;
    var o = r(n);
    try {
      for (o.s(); !(i = o.n()).done;) {
        var s = i.value;
        if (t === s) {
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
import * as a from "./2636/index";