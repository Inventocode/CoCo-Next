"use strict";

import * as r from "./1626/86/index";
import * as o from "./1738/272";
import * as i from "./1615/941";
import * as a from "./1623/309";
import * as s from "./1534/628";
import * as c from "./1623/495";
var l = require("./1534/386").f;
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t;
      var n = a(this);
      var r = s(e);
      do {
        if (t = l(n, r)) {
          return t.get;
        }
      } while (n = c(n));
    }
  });
}