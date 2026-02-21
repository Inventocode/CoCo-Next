/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1697
 */

var r = require("./1662/86")
var o = require("./1282/240")
var /* [auto-meaningful-name] */require$_1581_386$f = require("./1581/386").f
r({
  target: "Reflect",
  stat: true
}, {
  deleteProperty: function (e, t) {
    var n = require$_1581_386$f(o(e), t)
    return !(n && !n.configurable) && delete e[t]
  }
})
