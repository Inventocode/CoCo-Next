/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1626
 */

var r = require("./1785/271")
var /* [auto-meaningful-name] */require$_1648_300$f = require("./1648/300").f
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var s = /^\s*function ([^ (]*)/
if (r && !("name" in Function$prototype)) {
  require$_1648_300$f(Function$prototype, "name", {
    configurable: true,
    get: function () {
      try {
        return Function$prototype$toString.call(this).match(s)[1]
      } catch (e) {
        return ""
      }
    }
  })
}
