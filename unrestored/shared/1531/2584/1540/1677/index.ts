"use strict";

var r = require("../1633/86/index");
var o = require("./1246").start;
r({
  target: "String",
  proto: !0,
  forced: require("./1247")
}, {
  padStart: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});