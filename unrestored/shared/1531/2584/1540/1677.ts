"use strict";

var r = require("./1623/86");
var o = require("./1676/1246").start;
r({
  target: "String",
  proto: true,
  forced: require("./1676/1247")
}, {
  padStart: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
  }
});