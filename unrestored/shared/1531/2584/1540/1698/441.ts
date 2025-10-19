/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：441
 */

var r = require("../1736/167");
module.exports = function (e) {
  return r(function () {
    var t = ""[e]("\"");
    return t !== t.toLowerCase() || t.split("\"").length > 3;
  });
};