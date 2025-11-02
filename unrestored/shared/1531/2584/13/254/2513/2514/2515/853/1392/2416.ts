/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2416
 */

module.exports = function (e, t) {
  for (var n = -1, r = Array(e); ++n < e;) {
    r[n] = t(n)
  }
  return r
}
