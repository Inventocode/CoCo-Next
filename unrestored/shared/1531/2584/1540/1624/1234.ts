/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1234
 */

var r = require("../1623/272")
var o = require("../1541/820")
var i = require("../1678/437")
var require$$1541931$f = require("../1541/931").f
var s = function (e) {
  return function (t) {
    for (var n, s = i(t), c = o(s), c$length = c.length, u = 0, d = []; c$length > u;) {
      n = c[u++]
      if (!(r && !require$$1541931$f.call(s, n))) {
        d.push(e ? [n, s[n]] : s[n])
      }
    }
    return d
  }
}
module.exports = {
  entries: s(true),
  values: s(false)
}
