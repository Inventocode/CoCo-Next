"use strict";

import * as r from "./1626/231";
import * as o from "./1534/300/index";
import * as i from "./1623/495";
var a = require("./1735/247/index")("hasInstance");
var s = Function.prototype;
if (!(a in s)) {
  o.f(s, a, {
    value: function (e) {
      if ("function" != typeof this || !r(e)) {
        return !1;
      }
      if (!r(this.prototype)) {
        return e instanceof this;
      }
      for (; e = i(e);) {
        if (this.prototype === e) {
          return !0;
        }
      }
      return !1;
    }
  });
}