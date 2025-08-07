"use strict";

var r = require("./1623/86");
var o = require("./1698/440");
r({
  target: "String",
  proto: true,
  forced: require("./1698/441")("fontcolor")
}, {
  fontcolor: function (e) {
    return o(this, "font", "color", e);
  }
});