/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1693
 */

var r = require("./1706/86/index")
var o = require("./1704/476")
var i = require("./1694/443")
var a = require("./1706/240")
var s = require("./1705/168")
var c = o("Reflect", "apply")
var /* [auto-meaningful-name] */Function$apply = Function.apply
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
    return c ? c(e, t, n) : Function$apply.call(e, t, n)
  }
})
