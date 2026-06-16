/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：113
 */

"use strict"

var r = require(/* 14 */"../228/14")
var i = require(/* 26 */"../237/26")
var o = require(/* 72 */"../263/49/72/index")
module.exports = function (e, t, n) {
  var /* [auto-meaningful-name] */t$constructor
  var /* [auto-meaningful-name] */t$constructor$prototype
  if (o && r(t$constructor = t.constructor) && t$constructor !== n && i(t$constructor$prototype = t$constructor.prototype) && t$constructor$prototype !== n.prototype) {
    o(e, t$constructor$prototype)
  }
  return e
}
