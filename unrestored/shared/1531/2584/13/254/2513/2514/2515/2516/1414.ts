/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1414
 */

module.exports = function (e, t) {
  var n = -1;
  var r = e.length;
  for (t || (t = Array(r)); ++n < r;) {
    t[n] = e[n];
  }
  return t;
};