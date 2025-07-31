"use strict";

var r = require("./1626/86/index");
var o = require("./1679/753").start;
var i = require("./1679/1077/index")("trimStart");
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