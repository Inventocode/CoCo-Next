/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1258
 */

module.exports = function (e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
};