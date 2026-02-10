/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2503
 */

module.exports = function (e) {
  var t = typeof e
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
}
