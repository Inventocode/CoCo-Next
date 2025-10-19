/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2493
 */

var n = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = e.length;
  var r = new e.constructor(t);
  if (t && "string" == typeof e[0] && n.call(e, "index")) {
    r.index = e.index;
    r.input = e.input;
  }
  return r;
};