/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1261
 */

var r = require("../1782/194")
var o = require("../1785/310")
var /* [auto-meaningful-name] */require$$_1648_761$trim = require("../1648/761").trim
var a = require("../1725/1099/954")
var /* [auto-meaningful-name] */r$parseInt = r.parseInt
var c = /^[+-]?0[Xx]/
var l = 8 !== r$parseInt(a + "08") || 22 !== r$parseInt(a + "0x16")
module.exports = l ? function (e, t) {
  var n = require$$_1648_761$trim(o(e))
  return r$parseInt(n, t >>> 0 || (c.test(n) ? 16 : 10))
} : r$parseInt
