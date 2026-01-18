/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2009
 */

module.exports = function (e) {
  return -1 !== Function.toString.call(e).indexOf("[native code]")
}
