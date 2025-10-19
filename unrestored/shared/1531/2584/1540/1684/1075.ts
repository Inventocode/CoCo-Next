/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1075
 */

var r = require("../1683/1073");
module.exports = function (e) {
  if (r(e)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return e;
};