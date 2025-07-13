"use strict";

import * as r from "./1626/86/index";
var o = require("./1707/399").filter;
r({
  target: "Array",
  proto: !0,
  forced: !require("./1550/821")("filter")
}, {
  filter: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});