/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1598
 */

var r = require("./1623/86")
var math$hypot = Math.hypot
var math$abs = Math.abs
var math$sqrt = Math.sqrt
r({
  target: "Math",
  stat: true,
  forced: !!math$hypot && math$hypot(1 / 0, NaN) !== 1 / 0
}, {
  hypot: function (e, t) {
    for (var n, r, o = 0, s = 0, arguments$length = arguments.length, l = 0; s < arguments$length;) {
      if (l < (n = math$abs(arguments[s++]))) {
        o = o * (r = l / n) * r + 1
        l = n
      } else {
        o += n > 0 ? (r = n / l) * r : n
      }
    }
    return l === 1 / 0 ? 1 / 0 : l * math$sqrt(o)
  }
})
