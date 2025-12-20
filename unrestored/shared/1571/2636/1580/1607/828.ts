/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：828
 */

var r = require("../1581/441")
var o = require("../1597/256")
var i = require("../1615/715")
var a = function (e) {
  return function (t, n, a) {
    var s
    var c = r(t)
    var l = o(c.length)
    var u = i(a, l)
    if (e && n != n) {
      for (; l > u;) {
        if ((s = c[u++]) != s) {
          return true
        }
      }
    } else {
      for (; l > u; u++) {
        if ((e || u in c) && c[u] === n) {
          return e || u || 0
        }
      }
    }
    return !e && -1
  }
}
module.exports = {
  includes: a(true),
  indexOf: a(false)
}
