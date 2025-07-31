"use strict";

var r = require("../1626/86/index");
var o = require("./753").end;
var i = require("./1077/index")("trimEnd");
var a = i ? function () {
  return o(this);
} : "".trimEnd;
r({
  target: "String",
  proto: !0,
  forced: i
}, {
  trimEnd: a,
  trimRight: a
});