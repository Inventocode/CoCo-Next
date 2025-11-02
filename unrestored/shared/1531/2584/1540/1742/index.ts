/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1742
 */

var r = require("../1736/194")
var o = require("../1740/1251")
var i = require("../936/index")
var a = require("../1740/422")
var s = require("./247/index")
var c = s("iterator")
var l = s("toStringTag")
var i$values = i.values
for (var d in o) {
  var p = r[d]
  var f = p && p.prototype
  if (f) {
    if (f[c] !== i$values) {
      try {
        a(f, c, i$values)
      } catch (m) {
        f[c] = i$values
      }
    }
    if (!f[l]) {
      a(f, l, d)
    }
    if (o[d]) {
      for (var h in i) if (f[h] !== i[h]) {
        try {
          a(f, h, i[h])
        } catch (m) {
          f[h] = i[h]
        }
      }
    }
  }
}
