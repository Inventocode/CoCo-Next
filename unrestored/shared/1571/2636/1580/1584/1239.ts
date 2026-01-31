/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1239
 */

var r = require("../1785/334")
var o = require("../1703/1080")
var i = require("../1648/386/index")
var a = require("../1648/300")
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l]
    if (!r(e, u)) {
      s(e, u, c(t, u))
    }
  }
}
