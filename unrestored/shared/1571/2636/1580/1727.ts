/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1727
 */

"use strict"

var r = require("./1706/86/index")
var /* [auto-meaningful-name] */require$_1648_761_index$start = require("./1648/761/index").start
var i = require("./1726/1099")("trimStart")
var a = i ? function () {
  return require$_1648_761_index$start(this)
} : "".trimStart
r({
  target: "String",
  proto: true,
  forced: i
}, {
  trimStart: a,
  trimLeft: a
})
