/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1649
 */

var r = require("../1736/194");
module.exports = function (e, t) {
  var n = r.console;
  if (n && n.error) {
    if (1 === arguments.length) {
      n.error(e);
    } else {
      n.error(e, t);
    }
  }
};