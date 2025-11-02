/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1740
 */

var r = require("../1736/194")
var o = require("./1251")
var i = require("./1741")
var a = require("./422")
for (var s in o) {
  var c = r[s]
  var l = c && c.prototype
  if (l && l.forEach !== i) {
    try {
      a(l, "forEach", i)
    } catch (u) {
      l.forEach = i
    }
  }
}
