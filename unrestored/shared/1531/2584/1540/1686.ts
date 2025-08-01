"use strict";

var r = require("./1633/86/index");
var o = require("./1685/753").end;
var i = require("./1685/1078/index")("trimEnd");
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