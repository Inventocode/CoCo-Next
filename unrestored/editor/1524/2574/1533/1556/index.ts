"use strict";

import * as r from "../1626/86/index";
import * as o from "./1213";
import * as i from "../1623/309";
import * as a from "../1728/257";
import * as s from "./473";
import * as c from "../1550/820/index";
r({
  target: "Array",
  proto: !0
}, {
  flat: function () {
    var e = arguments.length ? arguments[0] : void 0;
    var t = i(this);
    var n = a(t.length);
    var r = c(t, 0);
    r.length = o(r, t, t, n, 0, void 0 === e ? 1 : s(e));
    return r;
  }
});