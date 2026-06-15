/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：99
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
module.exports = function (e, t) {
  try {
    Object$defineProperty(r, e, {
      value: t,
      configurable: true,
      writable: true
    })
  } catch (n) {
    r[e] = t
  }
  return t
}
