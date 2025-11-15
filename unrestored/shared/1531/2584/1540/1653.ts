/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1653
 */

var r = require("./1698/86/index")
var o = require("./1541/472")
var i = require("./1564/439")
var a = require("./1541/241")
var s = require("./1541/167")
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
