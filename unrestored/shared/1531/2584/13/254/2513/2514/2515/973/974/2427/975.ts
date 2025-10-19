/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：975
 */

var r = require("../../../../2519/2527/851");
module.exports = function (e, t) {
  for (var n = e.length; n--;) {
    if (r(e[n][0], t)) {
      return n;
    }
  }
  return -1;
};