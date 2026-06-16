/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：249
 */

"use strict"

var r = require(/* 26 */"../../237/26")
var /* [auto-meaningful-name] */Math$floor = Math.floor
module.exports = Number.isInteger || function (e) {
  return !r(e) && isFinite(e) && Math$floor(e) === e
}
