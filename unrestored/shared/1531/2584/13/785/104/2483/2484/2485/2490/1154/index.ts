/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1154
 */

var r = require("./2462");
var i = require("./1404");
var o = Object.prototype.propertyIsEnumerable;
var a = Object.getOwnPropertySymbols;
var s = a ? function (e) {
  return null == e ? [] : (e = Object(e), r(a(e), function (t) {
    return o.call(e, t);
  }));
} : i;
module.exports = s;