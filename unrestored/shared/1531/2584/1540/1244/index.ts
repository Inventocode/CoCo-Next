/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1244
 */

"use strict"

var r = require("../1698/86/index")
var o = require("./945")
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== o
}, {
  exec: o
})
