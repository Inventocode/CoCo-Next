/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1157
 */

var r = require("./1400")
module.exports = function (e) {
  var t = new e.constructor(e.byteLength)
  new r(t).set(new r(e))
  return t
}
