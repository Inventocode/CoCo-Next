/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1397
 */

var n = Function.prototype.toString;
module.exports = function (e) {
  if (null != e) {
    try {
      return n.call(e);
    } catch (t) {}
    try {
      return e + "";
    } catch (t) {}
  }
  return "";
};