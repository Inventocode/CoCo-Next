/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1396
 */

module.exports = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) {
    i[n] = t(e[n], n, e);
  }
  return i;
};