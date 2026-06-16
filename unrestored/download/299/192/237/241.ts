/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：241
 */

"use strict"

var r = require(/* 20 */"../288/20/index")
var i = require(/* 27 */"../225/27")
var o = require(/* 14 */"../228/14")
var a = require(/* 53 */"../208/106/53")
var s = require(/* 117 */"../160/117/index")
var u = TypeError
module.exports = function (e, t) {
  var /* [auto-meaningful-name] */e$exec = e.exec
  if (o(e$exec)) {
    var c = r(e$exec, e, t)
    if (null !== c) {
      i(c)
    }
    return c
  }
  if ("RegExp" === a(e)) {
    return r(s, e, t)
  }
  throw new u("RegExp#exec called on incompatible receiver")
}
