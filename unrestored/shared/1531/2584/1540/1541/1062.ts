/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1062
 */

var r = require("../1678/437");
var o = require("../1667/631/index").f;
var i = {}.toString;
var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
module.exports.f = function (e) {
  return a && "[object Window]" == i.call(e) ? function (e) {
    try {
      return o(e);
    } catch (t) {
      return a.slice();
    }
  }(e) : o(r(e));
};