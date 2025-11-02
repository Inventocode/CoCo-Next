/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1594
 */

var r = require("../1623/86")
var o = require("./940")
var math$cosh = Math.cosh
var math$abs = Math.abs
var math$E = Math.E
r({
  target: "Math",
  stat: true,
  forced: !math$cosh || math$cosh(710) === 1 / 0
}, {
  cosh: function (e) {
    var t = o(math$abs(e) - 1) + 1
    return (t + 1 / (t * math$E * math$E)) * (math$E / 2)
  }
})
