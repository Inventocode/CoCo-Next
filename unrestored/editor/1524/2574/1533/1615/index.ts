"use strict";

import * as r from "../1626/86/index";
import * as o from "../1738/272";
import * as i from "./941";
import * as a from "../1623/309";
import * as s from "../1727/439";
import * as c from "../1534/300/index";
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __defineGetter__: function (e, t) {
      c.f(a(this), e, {
        get: s(t),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}