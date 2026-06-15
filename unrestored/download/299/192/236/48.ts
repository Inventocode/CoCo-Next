/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：48
 */

"use strict"

var r = require(/* 137 */"../228/34/137/index")
var i = require(/* 30 */"../268/65/30/index")
module.exports = function (e, t, n) {
  if (n.get) {
    r(n.get, t, {
      getter: true
    })
  }
  if (n.set) {
    r(n.set, t, {
      setter: true
    })
  }
  return i.f(e, t, n)
}
