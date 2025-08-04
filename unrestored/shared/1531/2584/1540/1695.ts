"use strict";

var r = require("./1623/86");
var o = require("./1698/440");
r({
  target: "String",
  proto: !0,
  forced: require("./1698/441")("italics")
}, {
  italics: function () {
    return o(this, "i", "", "");
  }
});