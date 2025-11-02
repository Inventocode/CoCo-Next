/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1605
 */

var r = require("./1623/86")
var o = require("./1594/940")
var math$exp = Math.exp
r({
  target: "Math",
  stat: true
}, {
  tanh: function (e) {
    var t = o(e = +e)
    var n = o(-e)
    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (math$exp(e) + math$exp(-e))
  }
})
