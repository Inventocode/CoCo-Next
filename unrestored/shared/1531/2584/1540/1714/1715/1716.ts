/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1716
 */

module.exports = function (e, t) {
  for (var n = 0, r = t.length, o = new e(r); r > n;) {
    o[n] = t[n++];
  }
  return o;
};