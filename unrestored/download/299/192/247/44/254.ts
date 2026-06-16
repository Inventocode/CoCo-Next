/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：254
 */

"use strict"

var r = require(/* 31 */"../../204/31")
module.exports = function (e, t, n) {
  for (var i = 0, o = arguments.length > 2 ? n : r(t), a = new e(o); o > i;) {
    a[i] = t[i++]
  }
  return a
}
