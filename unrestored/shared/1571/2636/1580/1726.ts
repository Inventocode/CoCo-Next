/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1726
 */

"use strict"

var r = require("./1662/86")
var /* [auto-meaningful-name] */require$_1648_761$end = require("./1648/761").end
var i = require("./1725/1099")("trimEnd")
var a = i ? function () {
  return require$_1648_761$end(this)
} : "".trimEnd
r({
  target: "String",
  proto: true,
  forced: i
}, {
  trimEnd: a,
  trimRight: a
})
