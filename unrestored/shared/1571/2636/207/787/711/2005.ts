/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2005
 */

module.exports = function (e) {
  if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
    return Array.from(e)
  }
}
