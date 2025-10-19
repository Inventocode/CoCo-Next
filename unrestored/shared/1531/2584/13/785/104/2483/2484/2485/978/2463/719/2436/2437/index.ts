/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2437
 */

var r = require("./2438");
var i = function () {
  var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
module.exports = function (e) {
  return !!i && i in e;
};