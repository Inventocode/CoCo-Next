/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：174
 */

"use strict"

var r = require(/* 6 */"../6")
var i = require(/* 16 */"../16")
var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
module.exports = function (e) {
  if (!i) {
    return r[e]
  }
  var t = Object$getOwnPropertyDescriptor(r, e)
  return t && t.value
}
