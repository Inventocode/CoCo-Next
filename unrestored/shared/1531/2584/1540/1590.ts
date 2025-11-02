/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1590
 */

var r = require("./1623/86")
var math$asinh = Math.asinh
var math$log = Math.log
var math$sqrt = Math.sqrt
r({
  target: "Math",
  stat: true,
  forced: !(math$asinh && 1 / math$asinh(0) > 0)
}, {
  asinh: function e(t) {
    return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : math$log(t + math$sqrt(t * t + 1)) : t
  }
})
