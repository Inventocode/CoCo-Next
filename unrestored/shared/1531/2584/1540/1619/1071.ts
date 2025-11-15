/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1071
 */

"use strict"

var r = require("../1563/473")
var o = require("../1684/310")
var i = require("../1684/421")
module.exports = function (e) {
  var t = o(i(this))
  var n = ""
  var a = r(e)
  if (a < 0 || a == 1 / 0) {
    throw RangeError("Wrong number of repetitions")
  }
  for (; a > 0; (a >>>= 1) && (t += t)) {
    if (1 & a) {
      n += t
    }
  }
  return n
}
