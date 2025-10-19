/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1403
 */

module.exports = function (e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r;) {
    e[i + n] = t[n];
  }
  return e;
};