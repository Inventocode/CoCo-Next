/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：707
 */

"use strict"

var r = require("../1656/628")
var o = require("../1623/300")
var i = require("../1665/627")
module.exports = function (e, t, n) {
  var a = r(t)
  if (a in e) {
    o.f(e, a, i(0, n))
  } else {
    e[a] = n
  }
}
