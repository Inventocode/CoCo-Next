/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1397
 */

var function$prototype$toString = Function.prototype.toString
module.exports = function (e) {
  if (null != e) {
    try {
      return function$prototype$toString.call(e)
    } catch (t) {}
    try {
      return e + ""
    } catch (t) {}
  }
  return ""
}
