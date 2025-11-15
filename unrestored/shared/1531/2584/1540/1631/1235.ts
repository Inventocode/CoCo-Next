/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1235
 */

module.exports = Object.is || function (e, t) {
  return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
}
