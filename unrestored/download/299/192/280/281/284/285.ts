/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285
 */

"use strict"

var r = require(/* 27 */"../../../225/27")
var i = require(/* 152 */"../../../226/227/152")
module.exports = function (e, t, n, o) {
  try {
    return o ? t(r(n)[0], n[1]) : t(n)
  } catch (a) {
    i(e, "throw", a)
  }
}
