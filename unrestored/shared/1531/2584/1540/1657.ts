/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1657
 */

var r = require("./1698/86/index")
var o = require("./1541/241")
var /* [auto-meaningful-name] */require$_1684_386$f = require("./1684/386").f
r({
  target: "Reflect",
  stat: true
}, {
  deleteProperty: function (e, t) {
    var n = require$_1684_386$f(o(e), t)
    return !(n && !n.configurable) && delete e[t]
  }
})
