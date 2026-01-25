/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1273
 */

"use strict"

var r = require("./1706/86/index")
var o = require("./1723/958")
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== o
}, {
  exec: o
})
