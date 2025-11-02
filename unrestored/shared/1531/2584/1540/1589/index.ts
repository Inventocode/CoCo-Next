/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1589
 */

var r = require("../1623/86")
var o = require("./1230")
var math$acosh = Math.acosh
var math$log = Math.log
var math$sqrt = Math.sqrt
var math$LN2 = Math.LN2
r({
  target: "Math",
  stat: true,
  forced: !math$acosh || 710 != Math.floor(math$acosh(Number.MAX_VALUE)) || math$acosh(1 / 0) != 1 / 0
}, {
  acosh: function (e) {
    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? math$log(e) + math$LN2 : o(e - 1 + math$sqrt(e - 1) * math$sqrt(e + 1))
  }
})
