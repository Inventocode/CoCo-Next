/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1990
 */

"use strict"

module.exports = {
  isString: function (e) {
    return "string" === typeof e
  },
  isObject: function (e) {
    return "object" === typeof e && null !== e
  },
  isNull: function (e) {
    return null === e
  },
  isNullOrUndefined: function (e) {
    return null == e
  }
}
