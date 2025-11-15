/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2459
 */

module.exports = function (e) {
  var t = -1
  var n = Array(e.size)
  e.forEach(function (e, r) {
    n[++t] = [r, e]
  })
  return n
}
