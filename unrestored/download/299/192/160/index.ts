/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：160
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 117 */"./117/index")
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== i
}, {
  exec: i
})
