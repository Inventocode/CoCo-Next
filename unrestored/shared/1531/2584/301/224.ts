/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：224
 */

"use strict"

export { i as a }
import r = require("./203");
function i(e, t, n) {
  return (i = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
    var i = function (e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r.a(e));) {
        ;
      }
      return e
    }(e, t)
    if (i) {
      var o = Object.getOwnPropertyDescriptor(i, t)
      return o.get ? o.get.call(n) : o.value
    }
  })(e, t, n || e)
}
export default i
