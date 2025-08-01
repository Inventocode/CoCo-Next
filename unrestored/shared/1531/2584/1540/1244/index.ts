"use strict";

var r = require("../1633/86/index");
var o = require("./945");
r({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== o
}, {
  exec: o
});