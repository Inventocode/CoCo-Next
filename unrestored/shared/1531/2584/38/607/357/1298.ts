/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1298
 */

module.exports = function () {
  if ("undefined" === typeof Reflect || !Reflect.construct) {
    return false
  }
  if (Reflect.construct.sham) {
    return false
  }
  if ("function" === typeof Proxy) {
    return true
  }
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}
