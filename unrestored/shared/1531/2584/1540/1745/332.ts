/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：332
 */

var r = require("../1623/309");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (e, t) {
  return o.call(r(e), t);
};