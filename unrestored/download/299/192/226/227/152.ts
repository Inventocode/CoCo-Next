/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：152
 */

"use strict"

var r = require(/* 20 */"../../288/20/index")
var i = require(/* 27 */"../../225/27")
var o = require(/* 81 */"../../237/81")
module.exports = function (e, t, n) {
  var a
  var s
  i(e)
  try {
    if (!(a = o(e, "return"))) {
      if ("throw" === t) {
        throw n
      }
      return n
    }
    a = r(a, e)
  } catch (u) {
    s = true
    a = u
  }
  if ("throw" === t) {
    throw n
  }
  if (s) {
    throw a
  }
  i(a)
  return n
}
