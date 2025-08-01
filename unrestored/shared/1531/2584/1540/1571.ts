"use strict";

var r = require("./1633/86/index");
var o = require("./1714/399").map;
r({
  target: "Array",
  proto: !0,
  forced: !require("./1557/822")("map")
}, {
  map: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});