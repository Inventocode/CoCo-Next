"use strict";

var r = require("./1623/86");
var o = require("./1745/946").codeAt;
r({
  target: "String",
  proto: true
}, {
  codePointAt: function (e) {
    return o(this, e);
  }
});