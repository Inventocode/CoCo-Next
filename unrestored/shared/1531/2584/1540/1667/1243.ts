/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1243
 */

var r = require("../1541/167")
var /* [auto-meaningful-name] */require$$_1541_194$RegExp = require("../1541/194").RegExp
module.exports = r(function () {
  var e = require$$_1541_194$RegExp("(?<a>b)", "g")
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})
