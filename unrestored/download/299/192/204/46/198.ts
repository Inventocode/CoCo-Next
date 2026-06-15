/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：198
 */

"use strict"

var /* [auto-meaningful-name] */Math$ceil = Math.ceil
var /* [auto-meaningful-name] */Math$floor = Math.floor
module.exports = Math.trunc || function (e) {
  var t = +e
  return (t > 0 ? Math$floor : Math$ceil)(t)
}
