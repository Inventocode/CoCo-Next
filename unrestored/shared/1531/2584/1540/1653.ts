/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1653
 */

var r = require("./1623/86")
var o = require("./1664/472")
var i = require("./1623/439")
var a = require("./1659/241")
var s = require("./1736/167")
var c = o("Reflect", "apply")
var function$apply = Function.apply
r({
  target: "Reflect",
  stat: true,
  forced: !s(function () {
    c(function () {})
  })
}, {
  apply: function (e, t, n) {
    i(e)
    a(n)
    return c ? c(e, t, n) : function$apply.call(e, t, n)
  }
})
