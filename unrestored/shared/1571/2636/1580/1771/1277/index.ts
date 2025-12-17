/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1277
 */

var r = require("./1742")
module.exports = function (e, t) {
  var n = r(e)
  if (n % t) {
    throw RangeError("Wrong offset")
  }
  return n
}
