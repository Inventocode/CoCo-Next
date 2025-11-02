/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1058
 */

var r = require("../1745/423/1055")
var function$toString = Function.toString
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (e) {
    return function$toString.call(e)
  }
}
module.exports = r.inspectSource
