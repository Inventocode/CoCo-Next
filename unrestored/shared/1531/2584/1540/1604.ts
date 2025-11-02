/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1604
 */

var r = require("./1623/86")
var o = require("./1736/167")
var i = require("./1594/940")
var math$abs = Math.abs
var math$exp = Math.exp
var math$E = Math.E
r({
  target: "Math",
  stat: true,
  forced: o(function () {
    return -2e-17 != Math.sinh(-2e-17)
  })
}, {
  sinh: function (e) {
    return math$abs(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (math$exp(e - 1) - math$exp(-e - 1)) * (math$E / 2)
  }
})
