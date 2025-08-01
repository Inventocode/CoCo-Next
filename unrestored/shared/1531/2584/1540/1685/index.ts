"use strict";

var r = require("../1633/86/index");
var o = require("./753").trim;
r({
  target: "String",
  proto: !0,
  forced: require("./1078/index")("trim")
}, {
  trim: function () {
    return o(this);
  }
});