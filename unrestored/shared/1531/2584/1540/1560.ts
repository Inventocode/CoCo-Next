"use strict";

var r = require("./1623/86");
var o = require("./1733/399").filter;
r({
  target: "Array",
  proto: true,
  forced: !require("./1557/822")("filter")
}, {
  filter: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
  }
});