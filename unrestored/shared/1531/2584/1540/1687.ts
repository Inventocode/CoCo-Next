/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1687
 */

"use strict";

var r = require("./1623/86");
var o = require("./1686/753/index").start;
var i = require("./1686/1078")("trimStart");
var a = i ? function () {
  return o(this);
} : "".trimStart;
r({
  target: "String",
  proto: true,
  forced: i
}, {
  trimStart: a,
  trimLeft: a
});