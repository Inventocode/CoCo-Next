/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1221
 */

var r = require("../1738/231")
module.exports = function (e) {
  if (!r(e) && null !== e) {
    throw TypeError("Can't set " + String(e) + " as a prototype")
  }
  return e
}
