/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：705
 */

var n = {}.toString;
module.exports = function (e) {
  return n.call(e).slice(8, -1);
};