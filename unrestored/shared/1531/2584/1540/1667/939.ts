/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：939
 */

var r = require("../1738/231");
var o = require("../1666/634");
module.exports = function (e, t, n) {
  var i;
  var a;
  if (o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype) {
    o(e, a);
  }
  return e;
};