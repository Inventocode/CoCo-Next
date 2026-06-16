/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：231
 */

"use strict"

var r = require(/* 27 */"../../225/27")
var i = require(/* 26 */"../../237/26")
var o = require(/* 232 */"./232")
module.exports = function (e, t) {
  r(e)
  if (i(t) && t.constructor === e) {
    return t
  }
  var n = o.f(e);
  (0, n.resolve)(t)
  return n.promise
}
