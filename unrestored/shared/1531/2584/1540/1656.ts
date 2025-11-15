/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1656
 */

var r = require("./1698/86/index")
var o = require("./1541/272")
var i = require("./1541/241")
var a = require("./1541/628")
var s = require("./1541/300/index")
r({
  target: "Reflect",
  stat: true,
  forced: require("./1541/167")(function () {
    Reflect.defineProperty(s.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }),
  sham: !o
}, {
  defineProperty: function (e, t, n) {
    i(e)
    var r = a(t)
    i(n)
    try {
      s.f(e, r, n)
      return true
    } catch (o) {
      return false
    }
  }
})
