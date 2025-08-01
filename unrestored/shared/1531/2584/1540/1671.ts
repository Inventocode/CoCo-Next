"use strict";

var r = require("./1633/86/index");
var o = require("./1745/946").codeAt;
r({
  target: "String",
  proto: !0
}, {
  codePointAt: function (e) {
    return o(this, e);
  }
});