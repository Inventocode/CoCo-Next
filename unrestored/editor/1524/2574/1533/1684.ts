"use strict";

var r = require("./1626/86/index");
var o = require("./1682/440");
r({
  target: "String",
  proto: !0,
  forced: require("./1682/441")("bold")
}, {
  bold: function () {
    return o(this, "b", "", "");
  }
});