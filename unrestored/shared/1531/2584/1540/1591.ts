/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1591
 */

var r = require("./1623/86")
var math$atanh = Math.atanh
var math$log = Math.log
r({
  target: "Math",
  stat: true,
  forced: !(math$atanh && 1 / math$atanh(-0) < 0)
}, {
  atanh: function (e) {
    return 0 == (e = +e) ? e : math$log((1 + e) / (1 - e)) / 2
  }
})
