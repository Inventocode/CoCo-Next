/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1780
 */

var r = require("../1782/194")
var o = require("../1782/1280")
var i = require("./1781")
var a = require("../1782/425")
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
