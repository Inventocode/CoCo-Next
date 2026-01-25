/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1697
 */

var r = require("./1706/86/index")
var o = require("./1706/240")
var /* [auto-meaningful-name] */require$_1705_386_index$f = require("./1705/386/index").f
r({
  target: "Reflect",
  stat: true
}, {
  deleteProperty: function (e, t) {
    var n = require$_1705_386_index$f(o(e), t)
    return !(n && !n.configurable) && delete e[t]
  }
})
