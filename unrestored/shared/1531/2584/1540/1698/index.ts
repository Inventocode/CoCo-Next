"use strict";

var r = require("../1623/86");
var o = require("./440");
r({
  target: "String",
  proto: true,
  forced: require("./441")("strike")
}, {
  strike: function () {
    return o(this, "strike", "", "");
  }
});