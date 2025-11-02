/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1586
 */

var r = require("./1623/272")
var require$1623300$f = require("./1623/300").f
var function$prototype = Function.prototype
var function$prototype$toString = function$prototype.toString
var s = /^\s*function ([^ (]*)/
if (r && !("name" in function$prototype)) {
  require$1623300$f(function$prototype, "name", {
    configurable: true,
    get: function () {
      try {
        return function$prototype$toString.call(this).match(s)[1]
      } catch (e) {
        return ""
      }
    }
  })
}
