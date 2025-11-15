/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2456
 */

module.exports = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
    if (t(e[n], n, e)) {
      return true
    }
  }
  return false
}
