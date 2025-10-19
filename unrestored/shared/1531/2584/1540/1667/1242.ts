/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1242
 */

var r = require("../1736/167");
var o = require("../1736/194").RegExp;
module.exports = r(function () {
  var e = o(".", "s");
  return !(e.dotAll && e.exec("\n") && "s" === e.flags);
});