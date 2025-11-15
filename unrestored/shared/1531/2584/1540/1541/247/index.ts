/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：247
 */

var r = require("../194")
var o = require("../932")
var i = require("../332")
var a = require("../815")
var s = require("../1054")
var c = require("./1206")
var l = o("wks")
var /* [auto-meaningful-name] */r$Symbol = r.Symbol
var d = c ? r$Symbol : r$Symbol && r$Symbol.withoutSetter || a
module.exports = function (e) {
  if (!(i(l, e) && (s || "string" == typeof l[e]))) {
    if (s && i(r$Symbol, e)) {
      l[e] = r$Symbol[e]
    } else {
      l[e] = d("Symbol." + e)
    }
  }
  return l[e]
}
