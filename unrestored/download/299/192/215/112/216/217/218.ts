/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：218
 */

"use strict"

module.exports = Math.sign || function (e) {
  var t = +e
  return 0 === t || t !== t ? t : t < 0 ? -1 : 1
}
