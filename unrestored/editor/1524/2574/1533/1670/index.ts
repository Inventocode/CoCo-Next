"use strict";

import * as r from "../1626/86/index";
var o = require("./1243").start;
r({
  target: "String",
  proto: !0,
  forced: require("./1244")
}, {
  padStart: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});