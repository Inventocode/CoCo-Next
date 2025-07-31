"use strict";

var r = require("./1626/86/index");
var o = require("./1679/753").trim;
r({
  target: "String",
  proto: !0,
  forced: require("./1679/1077/index")("trim")
}, {
  trim: function () {
    return o(this);
  }
});