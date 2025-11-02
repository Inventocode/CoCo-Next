/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2521
 */

var r = require("./2522")
var math$max = Math.max
module.exports = function (e, t, n) {
  t = math$max(undefined === t ? e.length - 1 : t, 0)
  return function () {
    for (var o = arguments, a = -1, s = math$max(o.length - t, 0), c = Array(s); ++a < s;) {
      c[a] = o[t + a]
    }
    a = -1
    for (var u = Array(t + 1); ++a < t;) {
      u[a] = o[a]
    }
    u[t] = n(c)
    return r(e, this, u)
  }
}
