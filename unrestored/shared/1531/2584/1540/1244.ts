"use strict";

var r = require("./1623/86");
var o = require("./1683/945");
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== o
}, {
  exec: o
});