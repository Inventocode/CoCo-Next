"use strict";

var r = require("./1633/86/index");
var o = require("./1685/753").start;
var i = require("./1685/1078/index")("trimStart");
var a = i ? function () {
  return o(this);
} : "".trimStart;
r({
  target: "String",
  proto: !0,
  forced: i
}, {
  trimStart: a,
  trimLeft: a
});