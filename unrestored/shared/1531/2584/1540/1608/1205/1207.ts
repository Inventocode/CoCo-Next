/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1207
 */

var r = require("../../1738/231");
module.exports = function (e, t) {
  var n;
  var o;
  if ("string" === t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) {
    return o;
  }
  if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) {
    return o;
  }
  if ("string" !== t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};