/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1212
 */

var r = require("../1541/272")
var o = require("../1541/300/index")
var i = require("../1541/241")
var a = require("../1541/820")
module.exports = r ? Object.defineProperties : function (e, t) {
  i(e)
  for (var n, r = a(t), /* [auto-meaningful-name] */r$length = r.length, c = 0; r$length > c;) {
    o.f(e, n = r[c++], t[n])
  }
  return e
}
