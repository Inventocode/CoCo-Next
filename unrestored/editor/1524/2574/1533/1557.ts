"use strict";

import * as r from "./1626/86/index";
import * as o from "./1556/1213";
import * as i from "./1623/309";
import * as a from "./1728/257";
import * as s from "./1727/439";
import * as c from "./1550/820/index";
r({
  target: "Array",
  proto: !0
}, {
  flatMap: function (e) {
    var t;
    var n = i(this);
    var r = a(n.length);
    s(e);
    (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0);
    return t;
  }
});