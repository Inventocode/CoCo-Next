/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：706
 */

var r = require("../1680/473");
var o = Math.max;
var i = Math.min;
module.exports = function (e, t) {
  var n = r(e);
  return n < 0 ? o(n + t, 0) : i(n, t);
};