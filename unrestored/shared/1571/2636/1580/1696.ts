/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1696
 */

var r = require("./1661/86/index")
var o = require("./1785/271")
var i = require("./1282/240")
var a = require("./1581/632")
var s = require("./1648/300")
r({
  target: "Reflect",
  stat: true,
  forced: require("./1659/168")(function () {
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
