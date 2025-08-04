"use strict";

var r = require("./1623/86");
var o = require("./1686/753/index").trim;
r({
  target: "String",
  proto: !0,
  forced: require("./1686/1078")("trim")
}, {
  trim: function () {
    return o(this);
  }
});