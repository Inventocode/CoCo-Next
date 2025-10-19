/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2427
 */

var r = require("./975");
var i = Array.prototype.splice;
module.exports = function (e) {
  var t = this.__data__;
  var n = r(t, e);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, true);
};