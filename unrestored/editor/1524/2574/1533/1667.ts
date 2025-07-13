"use strict";

import * as r from "./1626/86/index";
import * as o from "./1677/1074";
import * as i from "./1676/421";
import * as a from "./1738/310";
r({
  target: "String",
  proto: !0,
  forced: !require("./1677/1075")("includes")
}, {
  includes: function (e) {
    return !!~a(i(this)).indexOf(a(o(e)), arguments.length > 1 ? arguments[1] : void 0);
  }
});