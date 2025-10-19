/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1228
 */

var r = require("../../1680/473");
var o = require("../../1735/257");
module.exports = function (e) {
  if (undefined === e) {
    return 0;
  }
  var t = r(e);
  var n = o(t);
  if (t !== n) {
    throw RangeError("Wrong length or index");
  }
  return n;
};