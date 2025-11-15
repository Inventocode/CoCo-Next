/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1058
 */

var r = require("../1541/423/1055")
var /* [auto-meaningful-name] */Function$toString = Function.toString
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (e) {
    return Function$toString.call(e)
  }
}
module.exports = r.inspectSource
