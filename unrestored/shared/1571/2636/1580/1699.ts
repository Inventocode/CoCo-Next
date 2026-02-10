/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1699
 */

var r = require("./1661/86/index")
var o = require("./1785/271")
var i = require("./1282/240")
var a = require("./1648/386/index")
r({
  target: "Reflect",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t)
  }
})
