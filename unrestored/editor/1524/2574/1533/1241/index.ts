"use strict";

var r = require("../1626/86/index");
var o = require("./944");
r({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== o
}, {
  exec: o
});