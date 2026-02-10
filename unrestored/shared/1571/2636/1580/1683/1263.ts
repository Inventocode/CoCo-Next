/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1263
 */

var r = require("../1785/271")
var o = require("../1581/831/index")
var i = require("../1581/441")
var /* [auto-meaningful-name] */require$$_1581_944$f = require("../1581/944").f
var s = function (e) {
  return function (t) {
    for (var n, s = i(t), c = o(s), /* [auto-meaningful-name] */c$length = c.length, u = 0, d = []; c$length > u;) {
      n = c[u++]
      if (!(r && !require$$_1581_944$f.call(s, n))) {
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
