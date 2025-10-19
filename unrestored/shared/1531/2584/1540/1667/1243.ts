/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1243
 */

var r = require("../1736/167");
var o = require("../1736/194").RegExp;
module.exports = r(function () {
  var e = o("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
});