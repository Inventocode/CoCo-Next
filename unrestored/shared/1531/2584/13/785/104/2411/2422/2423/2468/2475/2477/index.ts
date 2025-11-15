/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2477
 */

var r = require("./1408/index")
var i = require("../../../../../../../../254/2513/2514/2515/2516/1143/index")
var o = require("../../../../446")
var a = require("../../../../../../../../254/2513/2514/2519/2527/1144")
var s = require("../../../../../../../../254/2513/2514/2515/853/762/1146")
var c = require("../../980")
module.exports = function (e, t, n) {
  for (var u = -1, /* [auto-meaningful-name] */TRTE$length = (t = r(t, e)).length, f = false; ++u < TRTE$length;) {
    var d = c(t[u])
    if (!(f = null != e && n(e, d))) {
      break
    }
    e = e[d]
  }
  return f || ++u != TRTE$length ? f : !!(TRTE$length = null == e ? 0 : e.length) && s(TRTE$length) && a(d, TRTE$length) && (o(e) || i(e))
}
