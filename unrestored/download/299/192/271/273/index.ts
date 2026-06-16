/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：273
 */

"use strict"

var r = require(/* 13 */"../../288/13/index")
var i = require(/* 6 */"../../275/6")
var /* [auto-meaningful-name] */require_124_$_124$set = require(/* 124 */"./124").set
var a = require(/* 274 */"./274")
var s = i.setImmediate ? a(require_124_$_124$set, false) : require_124_$_124$set
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: i.setImmediate !== s
}, {
  setImmediate: s
})
