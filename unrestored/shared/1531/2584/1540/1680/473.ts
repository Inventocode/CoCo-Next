/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：473
 */

var n = Math.ceil;
var r = Math.floor;
module.exports = function (e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
};