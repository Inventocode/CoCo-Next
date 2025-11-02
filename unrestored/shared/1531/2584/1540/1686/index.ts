/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1686
 */

"use strict"

var r = require("../1623/86")
var require$753Index$end = require("./753/index").end
var i = require("./1078")("trimEnd")
var a = i ? function () {
  return require$753Index$end(this)
} : "".trimEnd
r({
  target: "String",
  proto: true,
  forced: i
}, {
  trimEnd: a,
  trimRight: a
})
