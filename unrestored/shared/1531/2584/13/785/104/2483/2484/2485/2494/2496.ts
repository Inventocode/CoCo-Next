/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2496
 */

var n = /\w*$/;
module.exports = function (e) {
  var t = new e.constructor(e.source, n.exec(e));
  t.lastIndex = e.lastIndex;
  return t;
};