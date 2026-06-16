/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：205
 */

"use strict"

var r = TypeError
module.exports = function (e) {
  if (e > 9007199254740991) {
    throw r("Maximum allowed index exceeded")
  }
  return e
}
