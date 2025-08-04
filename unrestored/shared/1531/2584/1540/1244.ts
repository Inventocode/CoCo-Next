"use strict";

var r = require("./1623/86");
var o = require("./1683/945");
r({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== o
}, {
  exec: o
});