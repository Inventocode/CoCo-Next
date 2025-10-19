/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1406
 */

module.exports = function (e, t) {
  return function (n) {
    return null != n && n[e] === t && (undefined !== t || e in Object(n));
  };
};