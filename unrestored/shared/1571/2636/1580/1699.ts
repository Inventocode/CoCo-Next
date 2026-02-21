/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1699
 */

var r = require("./1662/86")
var o = require("./1662/271")
var i = require("./1282/240")
var a = require("./1581/386")
r({
  target: "Reflect",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t)
  }
})
