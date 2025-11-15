/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1210
 */

var r = require("../1541/332")
var o = require("../1628/1059")
var i = require("../1684/386")
var a = require("../1541/300/index")
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l]
    if (!r(e, u)) {
      s(e, u, c(t, u))
    }
  }
}
