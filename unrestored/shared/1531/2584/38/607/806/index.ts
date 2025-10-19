/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：806
 */

var r = require("./1965/index");
var i = require("./1966");
var o = require("./1098");
var a = require("./1967");
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a();
};