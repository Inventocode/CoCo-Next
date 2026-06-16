/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：251
 */

"use strict"

var /* [auto-meaningful-name] */Math$round = Math.round
module.exports = function (e) {
  var t = Math$round(e)
  return t < 0 ? 0 : t > 255 ? 255 : 255 & t
}
