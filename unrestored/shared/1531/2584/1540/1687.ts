"use strict";

var r = require("./1623/86");
var o = require("./1686/753/index").start;
var i = require("./1686/1078")("trimStart");
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