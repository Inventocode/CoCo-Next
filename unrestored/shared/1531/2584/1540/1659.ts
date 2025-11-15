/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1659
 */

var r = require("./1698/86/index")
var o = require("./1541/272")
var i = require("./1541/241")
var a = require("./1684/386")
r({
  target: "Reflect",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t)
  }
})
