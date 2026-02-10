/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1272
 */

var r = require("../1659/168")
var /* [auto-meaningful-name] */require$$_1782_194$RegExp = require("../1782/194").RegExp
module.exports = r(function () {
  var e = require$$_1782_194$RegExp("(?<a>b)", "g")
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})
