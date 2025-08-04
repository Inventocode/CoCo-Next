"use strict";

var r = require("../1623/86");
var o = require("./753/index").end;
var i = require("./1078")("trimEnd");
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