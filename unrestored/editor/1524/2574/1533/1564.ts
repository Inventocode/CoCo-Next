"use strict";

var r = require("./1626/86/index");
var o = require("./1707/399").map;
r({
  target: "Array",
  proto: !0,
  forced: !require("./1550/821")("map")
}, {
  map: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});