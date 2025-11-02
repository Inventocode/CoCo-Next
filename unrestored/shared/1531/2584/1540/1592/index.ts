/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1592
 */

var r = require("../1623/86")
var o = require("./1069")
var math$abs = Math.abs
var math$pow = Math.pow
r({
  target: "Math",
  stat: true
}, {
  cbrt: function (e) {
    return o(e = +e) * math$pow(math$abs(e), 1 / 3)
  }
})
