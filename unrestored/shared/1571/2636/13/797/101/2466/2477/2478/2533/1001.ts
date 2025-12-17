/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1001
 */

var r = require("../../../../../../253/2588/1461/2586/1000")
module.exports = function (e) {
  if ("string" == typeof e || r(e)) {
    return e
  }
  var t = e + ""
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}
