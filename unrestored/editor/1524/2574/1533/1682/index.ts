"use strict";

var r = require("../1626/86/index");
var o = require("./440");
r({
  target: "String",
  proto: !0,
  forced: require("./441")("big")
}, {
  big: function () {
    return o(this, "big", "", "");
  }
});